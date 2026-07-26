const CARE_COORDINATOR = 'Care Coordinator'

function missing(value) { return !value?.trim() }

function validateCommonEvidence(input) {
  if (input.actorRole !== CARE_COORDINATOR) return 'Only the Care Coordinator can record next-step confirmation or scoped closure evidence.'
  if (input.reportVersion !== '2' || missing(input.directionEvidence)) return 'Current human direction and report version evidence are required.'
  if (missing(input.owner) || missing(input.destination) || missing(input.timeframe)) return 'A named next-step owner, destination/team and timeframe are required.'
  if (input.handoffStatus !== 'completed' || input.receivingResponse !== 'accepted') return 'Completed handoff and explicit receiving-team acceptance evidence are required for this referral path.'
  if (missing(input.communicationApproval) || missing(input.authorisedSender) || missing(input.channel) || missing(input.deliveryEvidence)) return 'Communication approval, authorised sender, channel and delivery evidence must remain separately recorded.'
  if (input.explicitConfirmationRequired && missing(input.explicitConfirmationEvidence)) return 'Explicit patient/caregiver confirmation evidence is required for this pathway.'
  if (input.hasSafetyBlockingException) return 'A safety-blocking exception is open. Resolve it through SCR-07 before confirming or closing.'
  return null
}

export function evaluateNextStepConfirmation(input) {
  if (input.currentState !== 'Referral Accepted') return { allowed: false, reason: 'Next-step confirmation is available only from Referral Accepted for this referral path.' }
  if (input.alreadyConfirmed) return { allowed: false, reason: 'This next-step confirmation is already recorded. A duplicate confirmation is blocked; a correction needs linked evidence.' }
  const evidenceFailure = validateCommonEvidence(input)
  if (evidenceFailure) return { allowed: false, reason: evidenceFailure }
  if (missing(input.confirmationId)) return { allowed: false, reason: 'A confirmation ID is required before the Care Coordinator records the human-verified outcome.' }
  return { allowed: true, stateAfter: 'Next Step Confirmed', auditEvent: 'EVT-16 next_step.confirmed', nextAction: 'Review complete closure evidence, then let the Care Coordinator separately record scoped diagnostic-closure workflow completion.' }
}

export function evaluateScopedClosure(input) {
  if (input.currentState !== 'Next Step Confirmed') return { allowed: false, reason: 'Scoped closure is unavailable until Next Step Confirmed is already recorded.' }
  if (input.alreadyClosed) return { allowed: false, reason: 'This scoped closure is already recorded. A duplicate closure is blocked; a correction needs linked superseding evidence.' }
  const evidenceFailure = validateCommonEvidence(input)
  if (evidenceFailure) return { allowed: false, reason: evidenceFailure }
  if (missing(input.closureId) || missing(input.closureEvidenceVersion) || missing(input.closer) || missing(input.closureTime)) return { allowed: false, reason: 'Closure ID, evidence version, accountable closer and closure time are required.' }
  return { allowed: true, stateAfter: 'Episode Completed', auditEvent: 'EVT-22 episode.closure.recorded', completionLabel: 'Diagnostic-closure workflow completion', nextAction: 'The diagnostic-closure workflow is complete. This does not claim that all care is complete.' }
}
