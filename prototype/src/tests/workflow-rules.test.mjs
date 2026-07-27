import assert from 'node:assert/strict'
import test from 'node:test'
import fixture from '../fixtures/synthetic-tracer.json' with { type: 'json' }
import { applyDeterministicEvent, createWorkflowState, evaluateCurrentReport, evaluateVerifiedLinkage } from '../domain/workflow-rules.mjs'

const at = '2026-07-26T09:00:00+05:30'
const start = () => createWorkflowState({ episodeId: fixture.episode.id, currentState: fixture.episode.lastVerifiedState, correlationId: 'SYN-CORR-602' })

test('the approved synthetic tracer has verified linkage and a complete version-one report fixture', () => {
  assert.deepEqual(evaluateVerifiedLinkage(fixture), { valid: true })
  assert.equal(evaluateCurrentReport(fixture, '1').valid, true)
})

test('a complete result advances once, while a duplicate appends evidence without a second advance', () => {
  const event = { eventId: 'SYN-EVT-602-01', eventType: 'diagnostic.report.complete_available', reportVersion: '1', idempotencyKey: 'synthetic-ris|DiagnosticReport|SYN-DR-6001|1', recordedAt: at }
  const first = applyDeterministicEvent(start(), event, fixture)
  const duplicate = applyDeterministicEvent(first, event, fixture)
  assert.equal(first.currentState, 'Result Available')
  assert.equal(duplicate.currentState, 'Result Available')
  assert.equal(duplicate.auditEntries.length, 2)
  assert.equal(duplicate.auditEntries.at(-1).duplicateDisposition, 'duplicate_no_state_advance')
})

test('missing encounter evidence is quarantined with an explicit safe return and no attachment', () => {
  const missingEncounter = { ...fixture, encounter: null }
  const result = applyDeterministicEvent(start(), { eventId: 'SYN-EVT-602-02', eventType: 'linkage.verified', idempotencyKey: 'linkage|missing-encounter|1', recordedAt: at }, missingEncounter)
  assert.equal(result.currentState, 'Diagnostic Completed')
  assert.equal(result.exception.reason, 'Encounter Missing')
  assert.match(result.exception.safeReturnCondition, /reconciliation/i)
})

test('an amended current report reopens human review and preserves prior evidence as history', () => {
  const available = applyDeterministicEvent(start(), { eventId: 'SYN-EVT-602-03', eventType: 'diagnostic.report.complete_available', reportVersion: '1', idempotencyKey: 'result|1', recordedAt: at }, fixture)
  const amended = applyDeterministicEvent({ ...available, currentState: 'Result Acknowledged', lastVerifiedState: 'Result Acknowledged', acknowledgementHistory: ['SYN-ACK-1'] }, { eventId: 'SYN-EVT-602-04', eventType: 'diagnostic.report.amended_or_corrected', reportVersion: '2', idempotencyKey: 'result|2', recordedAt: at }, fixture)
  assert.equal(amended.currentState, 'Clinical Review Pending')
  assert.deepEqual(amended.acknowledgementHistory, ['SYN-ACK-1'])
  assert.equal(amended.reportVersion, '2')
  assert.equal(amended.staleDependencies.length, 1)
})
