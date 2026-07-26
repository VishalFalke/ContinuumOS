export type AcknowledgementResult = { allowed: true; stateAfter: 'Result Acknowledged'; nextState: 'Follow-up Decision Required'; auditEvent: string } | { allowed: false; reason: string; safeReturn?: string }
export function evaluateAcknowledgement(fixture: unknown, input: { actorRef: string; reportVersion: string; currentState: string; acknowledgementId: string }): AcknowledgementResult
