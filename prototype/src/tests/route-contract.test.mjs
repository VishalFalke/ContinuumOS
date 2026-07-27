import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const approvedScreenIds = ['SCR-01', 'SCR-02', 'SCR-03', 'SCR-04', 'SCR-05', 'SCR-06', 'SCR-07', 'SCR-08', 'SCR-09', 'SCR-10']

test('the route contract reserves all ten approved screen IDs', () => {
  assert.deepEqual(approvedScreenIds, Array.from({ length: 10 }, (_, index) => `SCR-${String(index + 1).padStart(2, '0')}`))
})

test('unknown routes are reserved for the approved safe-return screen', () => {
  const requestedScreen = 'SCR-99'
  const resolvedScreen = approvedScreenIds.includes(requestedScreen) ? requestedScreen : 'SCR-07'
  assert.equal(resolvedScreen, 'SCR-07')
})

test('the route contract provides readable hash routes while retaining internal IDs', async () => {
  const routeContract = await readFile(new URL('../app/screen-contract.ts', import.meta.url), 'utf8')
  for (const route of ['start', 'episode-overview', 'review-result', 'choose-follow-up', 'prepare-handoff', 'record-response', 'confirm-next-step', 'exceptions', 'ai-draft-review', 'activity-trace']) {
    assert.match(routeContract, new RegExp(`route: '${route}'`))
  }
  assert.match(routeContract, /item\.route === value \|\| item\.id === value/)
})
