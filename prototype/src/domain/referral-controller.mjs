const REFERRAL_DIRECTIONS = new Set(['day-care referral', 'hospital escalation'])

export function evaluateReferralPackage({ actorRole, currentState, direction, reportVersion, packageId, destination, requiredFieldsComplete, coordinatorApprovalId, clinicalContentApplicable, clinicalApprovalId }) {
  if (actorRole !== 'Referral Coordinator') return { allowed: false, reason: 'Only the Referral Coordinator may prepare or route the operational handoff.' }
  if (currentState !== 'Referral Created') return { allowed: false, reason: 'Referral handoff preparation is unavailable before Referral Created.' }
  if (!REFERRAL_DIRECTIONS.has(direction)) return { allowed: false, reason: 'An approved day-care referral or hospital-escalation direction is required.' }
  if (reportVersion !== '2') return { allowed: false, reason: 'The current acknowledged report version is required before handoff preparation.', safeReturn: 'Return to current report review.' }
  if (!packageId?.trim() || !destination?.trim() || !requiredFieldsComplete || !coordinatorApprovalId?.trim()) return { allowed: false, reason: 'Package ID, destination, required-field completeness and Referral Coordinator approval are required before routing.' }
  if (clinicalContentApplicable && !clinicalApprovalId?.trim()) return { allowed: false, reason: 'Clinic physician approval is required for the applicable clinical content.' }
  return { allowed: true, packageEvent: 'EVT-12 referral.package.created', routeEvent: 'EVT-13 referral.sent', stateAfter: 'Referral Created', nextAction: 'Await a receiving-team response; this send attempt is not acceptance.' }
}

export function recordReferralRoute({ alreadyRouted, sendOutcome, ...packageInput }) {
  const packageOutcome = evaluateReferralPackage(packageInput)
  if (!packageOutcome.allowed) return packageOutcome
  if (alreadyRouted) return { allowed: false, reason: 'This package already has a routing record. A duplicate send is blocked; do not resend automatically.' }
  if (sendOutcome === 'failed') return { allowed: false, reason: 'The represented send attempt failed. The package remains unresolved for human correction and explicit retry.', safeReturn: 'Correct the package or select an authorised alternate route.' }
  return { ...packageOutcome, routedAt: '2026-07-26T10:15:00+05:30' }
}
