export type NextStepInput = {
  actorRole: string; currentState: string; reportVersion: string; directionEvidence: string; owner: string; destination: string; timeframe: string;
  handoffStatus: string; receivingResponse: string; communicationApproval: string; authorisedSender: string; channel: string; deliveryEvidence: string;
  explicitConfirmationRequired: boolean; explicitConfirmationEvidence: string; hasSafetyBlockingException: boolean; confirmationId?: string; closureId?: string;
  closureEvidenceVersion?: string; closer?: string; closureTime?: string; alreadyConfirmed?: boolean; alreadyClosed?: boolean
}
export type NextStepResult = { allowed: true; stateAfter: 'Next Step Confirmed'; auditEvent: string; nextAction: string } | { allowed: false; reason: string }
export type ClosureResult = { allowed: true; stateAfter: 'Episode Completed'; auditEvent: string; completionLabel: 'Diagnostic-closure workflow completion'; nextAction: string } | { allowed: false; reason: string }
export function evaluateNextStepConfirmation(input: NextStepInput): NextStepResult
export function evaluateScopedClosure(input: NextStepInput): ClosureResult
