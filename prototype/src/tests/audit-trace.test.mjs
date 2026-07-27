import assert from 'node:assert/strict'
import test from 'node:test'
import { AUDIT_ENTRIES, getAuditEntries, validateAuditTrace } from '../domain/audit-trace.mjs'

test('audit trace is complete, time ordered and distinguishes human, exception and AI evidence', () => {
  assert.deepEqual(validateAuditTrace(), { ordered: true, complete: true, distinguishesAiExceptionAndHuman: true })
  assert.ok(Object.isFrozen(AUDIT_ENTRIES))
})

test('category filtering is read-only and preserves chronological evidence order', () => {
  const exceptions = getAuditEntries('exception')
  assert.equal(exceptions.length, 1)
  assert.equal(exceptions[0].event, 'EVT-19 deterministic.control.exception_detected')
  assert.deepEqual(getAuditEntries().map((entry) => entry.id), AUDIT_ENTRIES.map((entry) => entry.id))
})

test('each visible audit event retains actor, timestamp, outcome and source/version reference', () => {
  for (const entry of getAuditEntries()) assert.ok(entry.actor && entry.timestamp && entry.outcome && entry.reference)
})
