import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const contractUrl = new URL('../app/screen-presentation-contract.ts', import.meta.url)
const screenIds = ['SCR-01', 'SCR-02', 'SCR-03', 'SCR-04', 'SCR-05', 'SCR-06', 'SCR-07', 'SCR-08', 'SCR-09', 'SCR-10']

test('each approved screen has a presentation contract with role, handoff and scenario truthfulness', async () => {
  const contract = await readFile(contractUrl, 'utf8')
  for (const screenId of screenIds) assert.match(contract, new RegExp(`'${screenId}': \\{`))
  for (const field of ['purpose:', 'representedRole:', 'sessionLabel:', 'receivedFrom:', 'handledBy:', 'sentTo:', 'nextStep:', 'scenarioBoundary:']) assert.match(contract, new RegExp(field))
})

test('direct-route wording is a presentation notice and does not create authentication or workflow authority', async () => {
  const contract = await readFile(contractUrl, 'utf8')
  assert.match(contract, /Demonstration view — secure launch not completed/)
  assert.match(contract, /if \(screenId === 'SCR-01' \|\| launchEstablished\) return null/)
  assert.doesNotMatch(contract, /from '\.\.\/domain\//)
  assert.doesNotMatch(contract, /\buseState\b|window\.location|navigateTo/)
})

test('AI and cross-screen scenario boundaries remain explicit in the presentation contract', async () => {
  const contract = await readFile(contractUrl, 'utf8')
  assert.match(contract, /AI cannot diagnose, acknowledge, choose direction, approve, route, accept, reject, confirm or close work/)
  assert.match(contract, /represented scenarios rather than a persisted assignment/)
  assert.match(contract, /does not receive live response data from the receiving-team response view/)
})
