import assert from 'node:assert/strict'
import test from 'node:test'
import { evaluateNextStepConfirmation, evaluateScopedClosure } from '../domain/next-step-controller.mjs'

const base = { actorRole: 'Care Coordinator', currentState: 'Referral Accepted', reportVersion: '2', directionEvidence: 'SYN-DIR-602-01', owner: 'Synthetic Day-care Unit Coordinator', destination: 'Synthetic Day-care Unit', timeframe: 'Within 1 business day', handoffStatus: 'completed', receivingResponse: 'accepted', communicationApproval: 'SYN-COMM-APP-1001', authorisedSender: 'Synthetic Care Coordinator', channel: 'Secure synthetic portal', deliveryEvidence: 'SYN-DELIVERY-1001', explicitConfirmationRequired: true, explicitConfirmationEvidence: 'SYN-PATIENT-CONFIRM-1001', hasSafetyBlockingException: false, confirmationId: 'SYN-CONFIRM-1003', alreadyConfirmed: false, alreadyClosed: false }

test('next-step confirmation requires complete human-owned referral and communication evidence', () => {
  const result = evaluateNextStepConfirmation(base)
  assert.equal(result.allowed, true)
  assert.equal(result.stateAfter, 'Next Step Confirmed')
  assert.equal(result.auditEvent, 'EVT-16 next_step.confirmed')
  assert.equal(evaluateNextStepConfirmation({ ...base, deliveryEvidence: '' }).allowed, false)
  assert.equal(evaluateNextStepConfirmation({ ...base, explicitConfirmationEvidence: '' }).allowed, false)
  assert.equal(evaluateNextStepConfirmation({ ...base, actorRole: 'Clinic physician' }).allowed, false)
})

test('next-step confirmation cannot be inferred from acceptance or recorded twice', () => {
  assert.equal(evaluateNextStepConfirmation({ ...base, currentState: 'Referral Created' }).allowed, false)
  assert.equal(evaluateNextStepConfirmation({ ...base, alreadyConfirmed: true }).allowed, false)
  assert.equal(evaluateNextStepConfirmation({ ...base, hasSafetyBlockingException: true }).allowed, false)
})

test('scoped closure is a separate Care Coordinator action after confirmation only', () => {
  const result = evaluateScopedClosure({ ...base, currentState: 'Next Step Confirmed', closureId: 'SYN-CLOSE-1001', closureEvidenceVersion: 'SYN-CLOSURE-EVIDENCE-v1', closer: 'Synthetic Care Coordinator', closureTime: '2026-07-26T14:00:00+05:30' })
  assert.equal(result.allowed, true)
  assert.equal(result.stateAfter, 'Episode Completed')
  assert.equal(result.completionLabel, 'Diagnostic-closure workflow completion')
  assert.equal(evaluateScopedClosure({ ...base, currentState: 'Referral Accepted', closureId: 'SYN-CLOSE-1001', closureEvidenceVersion: 'v1', closer: 'Synthetic Care Coordinator', closureTime: '2026-07-26T14:00:00+05:30' }).allowed, false)
  assert.equal(evaluateScopedClosure({ ...base, currentState: 'Next Step Confirmed', closureId: 'SYN-CLOSE-1001', closureEvidenceVersion: 'v1', closer: 'Synthetic Care Coordinator', closureTime: '2026-07-26T14:00:00+05:30', alreadyClosed: true }).allowed, false)
})
