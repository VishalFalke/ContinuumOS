import assert from 'node:assert/strict'
import test from 'node:test'
import fixture from '../fixtures/synthetic-tracer.json' with { type: 'json' }
import { evaluateAcknowledgement } from '../domain/review-controller.mjs'

const validInput = { actorRef: 'Practitioner/SYN-PRAC-3001', reportVersion: '2', currentState: 'Clinical Review Pending', acknowledgementId: 'SYN-ACK-602-01' }

test('only the assigned Clinic physician can acknowledge the current complete report version', () => {
  assert.deepEqual(evaluateAcknowledgement(fixture, validInput), { allowed: true, stateAfter: 'Result Acknowledged', nextState: 'Follow-up Decision Required', auditEvent: 'EVT-10 result.acknowledgement.recorded' })
})

test('a stale version or unassigned actor is blocked with no acknowledgement outcome', () => {
  assert.equal(evaluateAcknowledgement(fixture, { ...validInput, reportVersion: '1' }).allowed, false)
  assert.equal(evaluateAcknowledgement(fixture, { ...validInput, actorRef: 'Practitioner/SYN-PRAC-3002' }).allowed, false)
})
