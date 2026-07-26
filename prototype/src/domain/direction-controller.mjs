const ALLOWED_DIRECTIONS = new Set(['clinic management', 'day-care referral', 'hospital escalation'])

export function evaluateFollowUpDirection({ actorRole, currentState, reportVersion, selectedDirection, evidenceReference, directionId }) {
  if (actorRole !== 'Clinic physician') return { allowed: false, reason: 'Only the Clinic physician may record a follow-up direction.' }
  if (currentState !== 'Follow-up Decision Required') return { allowed: false, reason: 'Follow-up direction is not available in the current state.' }
  if (!ALLOWED_DIRECTIONS.has(selectedDirection)) return { allowed: false, reason: 'Select one approved follow-up direction.' }
  if (!evidenceReference.trim() || !directionId) return { allowed: false, reason: 'Direction rationale and evidence reference are required.' }
  if (reportVersion !== '2') return { allowed: false, reason: 'The current acknowledged report version is required.', safeReturn: 'Return to current report review.' }
  return selectedDirection === 'clinic management'
    ? { allowed: true, stateAfter: 'Follow-up Decision Required', nextAction: 'Care Coordinator verifies T08 owner, timeframe, next task and applicable communication evidence.', auditEvent: 'EVT-11 care.direction.recorded', requiresCoordinatorVerification: true }
    : { allowed: true, stateAfter: 'Referral Created', nextAction: 'Referral handoff preparation is available in COS-605.', auditEvent: 'EVT-11 care.direction.recorded', requiresCoordinatorVerification: false }
}

export function evaluateT08Verification({ actorRole, selectedDirection, owner, timeframe, nextTask, communicationEvidence, verificationId }) {
  if (actorRole !== 'Care Coordinator') return { allowed: false, reason: 'Only the Care Coordinator may verify T08 evidence.' }
  if (selectedDirection !== 'clinic management') return { allowed: false, reason: 'T08 verification is available only for clinic management.' }
  if (![owner, timeframe, nextTask, communicationEvidence, verificationId].every((value) => value.trim())) return { allowed: false, reason: 'Named owner, timeframe, next task and applicable communication evidence are required.' }
  return { allowed: true, stateAfter: 'Next Step Confirmed', auditEvent: 'EVT-16 next-step.confirmation.recorded' }
}
