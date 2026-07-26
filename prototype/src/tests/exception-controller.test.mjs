import assert from 'node:assert/strict'
import test from 'node:test'
import { EXCEPTION_PROFILES, evaluateExceptionResolution } from '../domain/exception-controller.mjs'

test('each approved representative exception exposes an owner, prohibited action and safe return', () => {
  assert.equal(EXCEPTION_PROFILES.length, 5)
  for (const item of EXCEPTION_PROFILES) {
    assert.ok(item.owner)
    assert.ok(item.prohibitedAction)
    assert.ok(item.safeReturn)
  }
})

test('only the accountable exception role can record verified resolution evidence', () => {
  const input = { exceptionId: 'result-incomplete', actorRole: 'Diagnostic operations', resolutionEvidence: 'SYN-T04-VERIFY-01', verificationOutcome: 'verified', alreadyResolved: false }
  assert.equal(evaluateExceptionResolution(input).stateAfter, 'Result Available')
  assert.equal(evaluateExceptionResolution({ ...input, actorRole: 'Care Coordinator' }).allowed, false)
  assert.equal(evaluateExceptionResolution({ ...input, resolutionEvidence: '' }).allowed, false)
})

test('failed or duplicate recovery remains open and cannot create a second state advance', () => {
  const input = { exceptionId: 'integration-unavailable', actorRole: 'Product/platform administrator', resolutionEvidence: 'SYN-RECOVERY-01', verificationOutcome: 'verified', alreadyResolved: false }
  assert.equal(evaluateExceptionResolution({ ...input, verificationOutcome: 'failed' }).allowed, false)
  assert.equal(evaluateExceptionResolution({ ...input, alreadyResolved: true }).allowed, false)
})
