const RESPONSES = new Set(['accept', 'reject'])
const RECORDING_ROLES = new Set(['Receiving team', 'Referral Coordinator'])

export function evaluateReceivingResponse({ currentState, packageId, sendReference, decisionActorRole, decisionActor, recordingActorRole, recordingSource, response, destination, timeframe, rejectionReason, confirmationId, responseId, alreadyRecorded }) {
  if (currentState !== 'Referral Created') return { allowed: false, reason: 'A receiving response is available only while the routed referral is in Referral Created.' }
  if (!packageId?.trim() || !sendReference?.trim()) return { allowed: false, reason: 'Valid package and send evidence are required before recording a receiving response.' }
  if (decisionActorRole !== 'Receiving team' || !decisionActor?.trim()) return { allowed: false, reason: 'A named receiving-team decision actor is required; the Referral Coordinator cannot decide on the team’s behalf.' }
  if (!RECORDING_ROLES.has(recordingActorRole)) return { allowed: false, reason: 'The recording actor must be the Receiving team or Referral Coordinator.' }
  if (recordingActorRole === 'Referral Coordinator' && !recordingSource?.trim()) return { allowed: false, reason: 'Record the source of the received receiving-team response.' }
  if (!RESPONSES.has(response)) return { allowed: false, reason: 'Select an explicit acceptance or rejection response.' }
  if (!confirmationId?.trim() || !responseId?.trim()) return { allowed: false, reason: 'Explicit confirmation and a response ID are required before recording.' }
  if (alreadyRecorded) return { allowed: false, reason: 'This receiving response is already recorded. A duplicate response is blocked; a changed response needs a linked correction.' }
  if (response === 'accept' && (!destination?.trim() || !timeframe?.trim())) return { allowed: false, reason: 'Acceptance requires a destination and timeframe.' }
  if (response === 'reject' && !rejectionReason?.trim()) return { allowed: false, reason: 'Rejection requires a reason and preserves the routed package history.' }
  return response === 'accept'
    ? { allowed: true, stateAfter: 'Referral Accepted', auditEvent: 'EVT-14 receiving.response.recorded', nextAction: 'Next-step confirmation evidence is required before SCR-10 can confirm the next step.' }
    : { allowed: true, stateAfter: 'Referral Rejected', auditEvent: 'EVT-14 receiving.response.recorded', nextAction: 'Return visible work to SCR-04 for a new Clinic physician direction; no referral is rerouted automatically.' }
}
