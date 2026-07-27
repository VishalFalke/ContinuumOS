import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { getAuditEntries } from '../domain/audit-trace.mjs'

const appSource = await readFile(new URL('../app/App.tsx', import.meta.url), 'utf8')
const cssSource = await readFile(new URL('../styles/global.css', import.meta.url), 'utf8')
const auditTraceSource = appSource.slice(appSource.indexOf('function AuditTraceScreen()'), appSource.indexOf('function NextStepConfirmationScreen'))

test('SCR-09 labels the trace as representative synthetic history rather than a live session log', () => {
  assert.match(auditTraceSource, /representative append-oriented history/)
  assert.match(auditTraceSource, /not a live session audit log/)
  assert.match(auditTraceSource, /does not append an entry here/)
})

test('SCR-09 exposes every required attributable field and text category in the primary trace table', () => {
  for (const label of ['Time (timezone)', 'Event ID / outcome', 'Actor or source', 'Source / version reference', 'Category']) assert.ok(auditTraceSource.includes(label))
  assert.match(auditTraceSource, /entry\.event/)
  assert.match(auditTraceSource, /entry\.outcome/)
  assert.match(auditTraceSource, /entry\.category/)
})

test('SCR-09 derives active filter, result count and empty treatment from the same visible entries', () => {
  assert.match(auditTraceSource, /const entries = getAuditEntries\(category\)/)
  assert.match(auditTraceSource, /Active filter: \{filterLabel\}/)
  assert.match(auditTraceSource, /\{entries\.length\} represented/)
  assert.match(auditTraceSource, /No represented audit entries match the active filter/)
  assert.equal(getAuditEntries('exception').every((entry) => entry.category === 'exception'), true)
})

test('SCR-09 offers no unsupported trace exploration controls and stacks labelled table data at narrow widths', () => {
  assert.doesNotMatch(auditTraceSource, /Open linked evidence|View correction chain|<button[^>]*>.*(?:evidence|chain)/i)
  assert.match(cssSource, /\.audit-table-wrap td::before \{[^}]*content: attr\(data-label\)/)
  assert.match(auditTraceSource, /data-label="Time \(timezone\)"/)
})
