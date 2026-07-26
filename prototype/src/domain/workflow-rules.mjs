export const ACCEPTED_REPORT_STATUSES = new Set(['final', 'amended', 'corrected'])

function appendAudit(state, entry) {
  return [...state.auditEntries, {
    auditId: `${entry.eventId}:${state.auditEntries.length + 1}`,
    correlationId: state.correlationId,
    recordedAt: entry.recordedAt,
    ...entry,
  }]
}

function exceptionFor(state, event, reason, owner, safeReturnCondition) {
  const exception = {
    id: `${event.eventId}:exception`,
    eventId: event.eventId,
    eventType: 'deterministic.control.exception_detected',
    reason,
    owner,
    prohibitedAction: 'Do not advance workflow or infer a human decision.',
    safeReturnCondition,
    lastVerifiedState: state.lastVerifiedState,
    status: 'open',
  }
  return {
    ...state,
    exception,
    auditEntries: appendAudit(state, {
      eventId: event.eventId,
      eventType: 'deterministic.control.exception_detected',
      actorType: 'deterministic_rule',
      outcome: 'quarantined',
      stateBefore: state.currentState,
      stateAfter: state.currentState,
      exceptionId: exception.id,
      reason,
      recordedAt: event.recordedAt,
    }),
  }
}

export function createWorkflowState({ episodeId, currentState, correlationId }) {
  return {
    episodeId,
    correlationId,
    currentState,
    lastVerifiedState: currentState,
    appliedIdempotencyKeys: [],
    auditEntries: [],
    exception: null,
    reportVersion: null,
    acknowledgementHistory: [],
    staleDependencies: [],
  }
}

export function evaluateVerifiedLinkage(fixture) {
  const expected = fixture.episode
  const patientMatches = fixture.patient && `Patient/${fixture.patient.id}` === expected.patientRef
  const encounterMatches = fixture.encounter && `Encounter/${fixture.encounter.id}` === expected.encounterRef && fixture.encounter.subject === expected.patientRef
  const orderMatches = fixture.serviceRequest && `ServiceRequest/${fixture.serviceRequest.id}` === expected.orderRef && fixture.serviceRequest.subject === expected.patientRef && fixture.serviceRequest.encounter === expected.encounterRef

  if (!patientMatches) return { valid: false, reason: 'Patient Match Failed', owner: 'Identity reconciliation reviewer' }
  if (!encounterMatches) return { valid: false, reason: 'Encounter Missing', owner: 'Identity reconciliation reviewer' }
  if (!orderMatches) return { valid: false, reason: 'Linkage Evidence Incomplete', owner: 'Identity reconciliation reviewer' }
  return { valid: true }
}

export function evaluateCurrentReport(fixture, reportVersion) {
  const report = fixture.diagnosticReports.find((item) => item.version === reportVersion)
  if (!report || !ACCEPTED_REPORT_STATUSES.has(report.status)) return { valid: false, reason: 'Result Incomplete' }
  const observationsResolve = report.resultRefs.every((reference) => fixture.observations.some((item) => `Observation/${item.id}` === reference && item.status === 'final'))
  const completionExists = fixture.completionEvents.some((item) => item.diagnosticReportRef === `DiagnosticReport/${report.id}` && item.reportVersion === report.version && item.serviceRequestRef === fixture.episode.orderRef)
  const linkageMatches = report.subject === fixture.episode.patientRef && report.encounter === fixture.episode.encounterRef && report.basedOn === fixture.episode.orderRef
  return observationsResolve && completionExists && linkageMatches
    ? { valid: true, report }
    : { valid: false, reason: 'Result Incomplete' }
}

export function applyDeterministicEvent(state, event, fixture) {
  if (state.appliedIdempotencyKeys.includes(event.idempotencyKey)) {
    return {
      ...state,
      auditEntries: appendAudit(state, {
        eventId: event.eventId,
        eventType: event.eventType,
        actorType: 'deterministic_rule',
        outcome: 'received',
        duplicateDisposition: 'duplicate_no_state_advance',
        stateBefore: state.currentState,
        stateAfter: state.currentState,
        recordedAt: event.recordedAt,
      }),
    }
  }

  if (event.eventType === 'linkage.verified') {
    const linkage = evaluateVerifiedLinkage(fixture)
    if (!linkage.valid) return exceptionFor(state, event, linkage.reason, linkage.owner, 'Authorised human reconciliation and re-verification')
    return {
      ...state,
      appliedIdempotencyKeys: [...state.appliedIdempotencyKeys, event.idempotencyKey],
      auditEntries: appendAudit(state, { eventId: event.eventId, eventType: event.eventType, actorType: 'human', outcome: 'processed', stateBefore: state.currentState, stateAfter: state.currentState, recordedAt: event.recordedAt }),
    }
  }

  if (event.eventType === 'diagnostic.report.complete_available') {
    const result = evaluateCurrentReport(fixture, event.reportVersion)
    if (!result.valid) return exceptionFor(state, event, result.reason, 'Diagnostic operations', 'Current report and configured evidence pass T04')
    if (state.currentState !== 'Diagnostic Completed') return exceptionFor(state, event, 'Duplicate Event Suspected', 'Diagnostic operations', 'Source ordering and current state are reconciled')
    return {
      ...state,
      currentState: 'Result Available',
      lastVerifiedState: 'Result Available',
      reportVersion: result.report.version,
      appliedIdempotencyKeys: [...state.appliedIdempotencyKeys, event.idempotencyKey],
      auditEntries: appendAudit(state, { eventId: event.eventId, eventType: event.eventType, actorType: 'source_system', outcome: 'processed', stateBefore: state.currentState, stateAfter: 'Result Available', reportVersion: result.report.version, recordedAt: event.recordedAt }),
    }
  }

  if (event.eventType === 'diagnostic.report.amended_or_corrected') {
    const result = evaluateCurrentReport(fixture, event.reportVersion)
    if (!result.valid || !['amended', 'corrected'].includes(result.report.status) || result.report.priorVersion !== state.reportVersion) return exceptionFor(state, event, 'Result Incomplete', 'Diagnostic operations', 'Current amended report is verified against prior version and T04 evidence')
    return {
      ...state,
      currentState: 'Clinical Review Pending',
      lastVerifiedState: 'Clinical Review Pending',
      reportVersion: result.report.version,
      staleDependencies: [...state.staleDependencies, 'prior-version downstream work requires human reassessment'],
      appliedIdempotencyKeys: [...state.appliedIdempotencyKeys, event.idempotencyKey],
      auditEntries: appendAudit(state, { eventId: event.eventId, eventType: event.eventType, actorType: 'source_system', outcome: 'superseded', stateBefore: state.currentState, stateAfter: 'Clinical Review Pending', reportVersion: result.report.version, correctionOf: result.report.priorVersion, recordedAt: event.recordedAt }),
    }
  }

  if (event.eventType === 'recovery.reconciliation_completed') {
    if (event.result !== 'verified') return exceptionFor(state, event, 'Reconciliation Failed', 'Product/platform administrator', 'Source verification and an authorised new action')
    return {
      ...state,
      currentState: state.lastVerifiedState,
      exception: null,
      appliedIdempotencyKeys: [...state.appliedIdempotencyKeys, event.idempotencyKey],
      auditEntries: appendAudit(state, { eventId: event.eventId, eventType: event.eventType, actorType: 'human', outcome: 'processed', stateBefore: state.currentState, stateAfter: state.lastVerifiedState, recoveryOf: event.recoveryOf, recordedAt: event.recordedAt }),
    }
  }

  return exceptionFor(state, event, 'Unsupported Deterministic Event', 'Product/platform administrator', 'Use an approved event family')
}
