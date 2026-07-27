import assert from 'node:assert/strict'
import test from 'node:test'
import { readFileSync } from 'node:fs'

const shell = readFileSync(new URL('../components/PrototypeShell.tsx', import.meta.url), 'utf8')

test('COS-6B-08 uses only the approved current synthetic DiagnosticReport fixture', () => {
  assert.match(shell, /id === 'SYN-DR-6001' && item\.version === '2'/)
  assert.match(shell, /report\.status/)
  assert.match(shell, /report\.issuedAt/)
  assert.match(shell, /report\.basedOn/)
  assert.match(shell, /report\.resultRefs\.includes/)
  assert.match(shell, /report\.encounter/)
  assert.match(shell, /report\.priorVersion/)
})

test('COS-6B-08 provides a labelled read-only synthetic demonstration document', () => {
  assert.match(shell, /Synthetic abdominal-ultrasound report.*read only/)
  assert.match(shell, /className="report-image"/)
  assert.match(shell, /AI-generated illustration.*not source-system imaging.*not for diagnosis/)
  assert.match(shell, /className="report-findings"/)
  assert.match(shell, /fictional report and AI-generated image are synthetic and non-diagnostic/)
  assert.match(shell, /Preview only\. No editing, download, source-system access, audit event or workflow action is available here/)
  assert.doesNotMatch(shell, /Download synthetic report/)
})

test('COS-6B-08 uses the existing native modal recovery controls', () => {
  assert.match(shell, /dialog\.showModal\(\)/)
  assert.match(shell, /onCancel=/)
  assert.match(shell, /onKeyDown=.*event\.key === 'Escape'/)
  assert.match(shell, /document\.activeElement/)
  assert.match(shell, /returnFocusRef\.current\.focus\(\)/)
  assert.match(shell, /Close report/)
})

test('COS-6B-08 exposes the approved preview on mapped report-source screens only', () => {
  for (const screen of ['SCR-03', 'SCR-05', 'SCR-09', 'SCR-10']) assert.match(shell, new RegExp(`activeScreen === '${screen}'`))
  assert.match(shell, /<SyntheticReportPreview report=\{CURRENT_SYNTHETIC_REPORT\}/)
  assert.doesNotMatch(shell, /activeScreen === 'SCR-07'[^\n]*SyntheticReportPreview/)
})
