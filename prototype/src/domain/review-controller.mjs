import { evaluateCurrentReport } from './workflow-rules.mjs'

export function evaluateAcknowledgement(fixture, { actorRef, reportVersion, currentState, acknowledgementId }) {
  const assignment = fixture.reviewAssignment
  const reportCheck = evaluateCurrentReport(fixture, reportVersion)
  if (!acknowledgementId) return { allowed: false, reason: 'Acknowledgement reference is required.' }
  if (currentState !== 'Clinical Review Pending') return { allowed: false, reason: 'Current state does not permit acknowledgement.' }
  if (actorRef !== assignment.assignedTo || assignment.assignedRole !== 'Clinic physician') return { allowed: false, reason: 'Only the assigned Clinic physician may acknowledge this report.' }
  if (reportVersion !== assignment.reportVersion || !reportCheck.valid) return { allowed: false, reason: 'Current report version or required source evidence is invalid.', safeReturn: 'Resolve current report evidence in SCR-07.' }
  return { allowed: true, stateAfter: 'Result Acknowledged', nextState: 'Follow-up Decision Required', auditEvent: 'EVT-10 result.acknowledgement.recorded' }
}
