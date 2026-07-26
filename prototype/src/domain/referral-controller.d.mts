export type ReferralPackageInput = { actorRole: string; currentState: string; direction: string; reportVersion: string; packageId: string; destination: string; requiredFieldsComplete: boolean; coordinatorApprovalId: string; clinicalContentApplicable: boolean; clinicalApprovalId: string }
export type ReferralResult = { allowed: true; packageEvent: string; routeEvent: string; stateAfter: 'Referral Created'; nextAction: string; routedAt?: string } | { allowed: false; reason: string; safeReturn?: string }
export function evaluateReferralPackage(input: ReferralPackageInput): ReferralResult
export function recordReferralRoute(input: ReferralPackageInput & { alreadyRouted: boolean; sendOutcome: 'sent' | 'failed' }): ReferralResult
