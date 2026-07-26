import assert from 'node:assert/strict'
import test from 'node:test'
import { evaluateReceivingResponse } from '../domain/receiving-response-controller.mjs'

const base = { currentState: 'Referral Created', packageId: 'SYN-RP-1001 v1', sendReference: 'SYN-SEND-1001', decisionActorRole: 'Receiving team', decisionActor: 'Synthetic Day-care Intake Team', recordingActorRole: 'Receiving team', recordingSource: '', response: 'accept', destination: 'Synthetic Day-care Unit', timeframe: 'Within 1 business day', rejectionReason: '', confirmationId: 'SYN-CONFIRM-1001', responseId: 'SYN-RESP-1001', alreadyRecorded: false }

test('only a named receiving-team actor can record a complete acceptance', () => {
  const result = evaluateReceivingResponse(base)
  assert.equal(result.allowed, true)
  assert.equal(result.stateAfter, 'Referral Accepted')
  assert.match(result.nextAction, /SCR-10/)
  assert.equal(evaluateReceivingResponse({ ...base, decisionActorRole: 'Referral Coordinator' }).allowed, false)
  assert.equal(evaluateReceivingResponse({ ...base, timeframe: '' }).allowed, false)
})

test('a Referral Coordinator can record received evidence only with a separate receiving-team decision actor and source', () => {
  assert.equal(evaluateReceivingResponse({ ...base, recordingActorRole: 'Referral Coordinator', recordingSource: 'Synthetic intake response SYN-IN-1001' }).allowed, true)
  assert.equal(evaluateReceivingResponse({ ...base, recordingActorRole: 'Referral Coordinator', recordingSource: '' }).allowed, false)
})

test('a rejection requires a reason and returns work for a new physician direction without automatic rerouting', () => {
  const result = evaluateReceivingResponse({ ...base, response: 'reject', destination: '', timeframe: '', rejectionReason: 'Synthetic service capacity unavailable' })
  assert.equal(result.allowed, true)
  assert.equal(result.stateAfter, 'Referral Rejected')
  assert.match(result.nextAction, /no referral is rerouted automatically/)
  assert.equal(evaluateReceivingResponse({ ...base, response: 'reject', rejectionReason: '' }).allowed, false)
  assert.equal(evaluateReceivingResponse({ ...base, alreadyRecorded: true }).allowed, false)
})
