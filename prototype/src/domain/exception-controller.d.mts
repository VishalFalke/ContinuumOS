export type ExceptionProfile = { id: string; condition: string; owner: string; actorRole: string; affectedWork: string; prohibitedAction: string; safeAction: string; safeReturn: string; lastVerifiedState: string; auditEvent: string }
export const EXCEPTION_PROFILES: ExceptionProfile[]
export type ExceptionResolutionResult = { allowed: true; stateAfter: string; auditEvent: string; nextAction: string } | { allowed: false; reason: string }
export function evaluateExceptionResolution(input: { exceptionId: string; actorRole: string; resolutionEvidence: string; verificationOutcome: string; alreadyResolved: boolean }): ExceptionResolutionResult
