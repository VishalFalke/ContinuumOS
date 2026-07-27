import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { EXCEPTION_PROFILES, evaluateExceptionResolution } from '../domain/exception-controller.mjs'

const appUrl = new URL('../app/App.tsx', import.meta.url)

test('SCR-07 queue exposes each approved condition, affected work, owner and canonical open state', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Compare condition, affected work and owner/)
  assert.match(app, /<b>Affected work:<\/b> \{item\.affectedWork\}/)
  assert.match(app, /<b>Owner:<\/b> \{item\.owner\}/)
  assert.match(app, /<b>Status:<\/b> Exception open/)
  assert.match(app, /aria-pressed=\{selected\}/)
  assert.match(app, /<span className="exception-selection-marker">Selected<\/span>/)

  assert.equal(EXCEPTION_PROFILES.length, 5)
  for (const profile of EXCEPTION_PROFILES) {
    assert.ok(profile.condition)
    assert.ok(profile.affectedWork)
    assert.ok(profile.owner)
  }
})

test('SCR-07 selected queue item and detail are linked to one approved profile', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /aria-controls="selected-exception-detail"/)
  assert.match(app, /id="selected-exception-detail"/)
  assert.match(app, /<h3 id="selected-exception-title">\{profile\.condition\}<\/h3>/)
  assert.match(app, /<dt>Affected work<\/dt><dd>\{profile\.affectedWork\}<\/dd>/)
  assert.match(app, /<dt>Accountable owner<\/dt><dd>\{profile\.owner\}<\/dd>/)
  assert.match(app, /<dt>Prohibited action<\/dt><dd>\{profile\.prohibitedAction\}<\/dd>/)
  assert.match(app, /<dt>Safe action<\/dt><dd>\{profile\.safeAction\}<\/dd>/)
  assert.match(app, /<dt>Safe-return condition<\/dt><dd>\{profile\.safeReturn\}<\/dd>/)
})

test('SCR-07 keeps recovery blocked until the existing accountable-role and evidence gate passes', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Approved recovery gate/)
  assert.match(app, /Evidence required before resolution/)
  assert.match(app, /disabled=\{!readiness\.allowed\}/)
  assert.match(app, /Viewing this queue does not grant resolution authority/)

  const base = { exceptionId: 'result-incomplete', actorRole: 'Diagnostic operations', resolutionEvidence: 'SYN-T04-VERIFY-01', verificationOutcome: 'verified', alreadyResolved: false }
  assert.equal(evaluateExceptionResolution({ ...base, actorRole: 'Care Coordinator' }).allowed, false)
  assert.equal(evaluateExceptionResolution({ ...base, resolutionEvidence: '' }).allowed, false)
  assert.equal(evaluateExceptionResolution({ ...base, verificationOutcome: 'failed' }).allowed, false)
  assert.equal(evaluateExceptionResolution(base).allowed, true)
})

test('SCR-07 success shows append-only evidence and a separate manual return without recreating the original action', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Verified resolution evidence appended/)
  assert.match(app, /\{resolution\.auditEvent\} · recording actor: \{actorRole\} · evidence: \{resolutionEvidence\}/)
  assert.match(app, /No original clinical, referral, financial or closure action was recreated/)
  assert.match(app, /Return is a separate manual step/)
  assert.match(app, /Return manually to \{returnDestination\}/)

  const outcome = evaluateExceptionResolution({ exceptionId: 'integration-unavailable', actorRole: 'Product/platform administrator', resolutionEvidence: 'SYN-RECOVERY-01', verificationOutcome: 'verified', alreadyResolved: false })
  assert.equal(outcome.allowed, true)
  assert.equal(outcome.auditEvent, 'EVT-21 recovery.reconciliation_completed')
  assert.equal(outcome.stateAfter, 'Referral Created')
})
