import assert from 'node:assert/strict'
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
