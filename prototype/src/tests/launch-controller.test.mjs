import assert from 'node:assert/strict'
import test from 'node:test'
import fixture from '../fixtures/synthetic-tracer.json' with { type: 'json' }
import { resolveSimulatedLaunch } from '../domain/launch-controller.mjs'

test('authorised launch exposes context only after verified linkage', () => assert.deepEqual(resolveSimulatedLaunch(fixture), { kind: 'authorised', protectedContextAvailable: true }))
test('access failure exposes no protected context and names a safe return', () => {
  const result = resolveSimulatedLaunch(fixture, 'unavailable')
  assert.equal(result.protectedContextAvailable, false)
  assert.equal(result.condition, 'Integration Unavailable')
  assert.match(result.safeReturn, /new authorised session/i)
})
