import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const appSource = await readFile(new URL('../app/App.tsx', import.meta.url), 'utf8')
const confirmationSource = appSource.slice(appSource.indexOf('function NextStepConfirmationScreen'), appSource.indexOf('function ExceptionScreen'))

test('SCR-10 shows approved route context and its fixture-represented scenario boundary before verification', () => {
  assert.match(confirmationSource, /Referral evidence · read only/)
  assert.match(confirmationSource, /Approved synthetic referral and response evidence is shown for this review/)
  assert.match(confirmationSource, /No safety-blocking exception represented for this local scenario/)
})

test('SCR-10 exposes each verification item with owner, source and text status before the active action', () => {
  assert.match(confirmationSource, /const verificationEvidence = \[/)
  assert.match(confirmationSource, /Accountable owner/)
  assert.match(confirmationSource, /Source \/ reference/)
  assert.match(confirmationSource, /Complete' : 'Incomplete/)
  assert.match(confirmationSource, /Evidence readiness · read only/)
  assert.match(confirmationSource, /Check required evidence/)
})

test('SCR-10 keeps the existing confirmation controller as the only authority for readiness and EVT-16 feedback', () => {
  assert.match(confirmationSource, /evaluateNextStepConfirmation/)
  assert.match(confirmationSource, /disabled=\{!confirmationReadiness\.allowed\}/)
  assert.match(confirmationSource, /EVT-16/)
})

test('SCR-10 treats closure as a lower-emphasis future step until confirmation succeeds', () => {
  assert.match(confirmationSource, /Then: scoped closure/)
  assert.match(confirmationSource, /confirmed && !closed/)
  assert.match(confirmationSource, /evaluateScopedClosure/)
  assert.match(confirmationSource, /Record scoped Episode Completed/)
})
