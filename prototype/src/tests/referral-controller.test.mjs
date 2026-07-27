import assert from 'node:assert/strict'
import test from 'node:test'
import { evaluateReferralPackage, recordReferralRoute } from '../domain/referral-controller.mjs'

const completePackage = { actorRole: 'Referral Coordinator', currentState: 'Referral Created', direction: 'day-care referral', reportVersion: '2', packageId: 'SYN-RP-1001 v1', destination: 'Synthetic Day-care Unit', requiredFieldsComplete: true, coordinatorApprovalId: 'SYN-RC-1001', clinicalContentApplicable: true, clinicalApprovalId: 'SYN-CP-1001' }

test('only a Referral Coordinator can prepare a complete package after an approved referral direction', () => {
  assert.equal(evaluateReferralPackage(completePackage).allowed, true)
  assert.equal(evaluateReferralPackage({ ...completePackage, actorRole: 'Clinic physician' }).allowed, false)
  assert.equal(evaluateReferralPackage({ ...completePackage, direction: 'clinic management' }).allowed, false)
})

test('routing stays blocked when package evidence or applicable clinical approval is missing', () => {
  assert.equal(evaluateReferralPackage({ ...completePackage, destination: '' }).allowed, false)
  assert.equal(evaluateReferralPackage({ ...completePackage, clinicalApprovalId: '' }).allowed, false)
})

test('an explicit send records no receiving acceptance and prevents duplicate or failed automatic routing', () => {
  const routed = recordReferralRoute({ ...completePackage, alreadyRouted: false, sendOutcome: 'sent' })
  assert.equal(routed.allowed, true)
  assert.equal(routed.stateAfter, 'Referral Created')
  assert.match(routed.nextAction, /not acceptance/)
  assert.equal(recordReferralRoute({ ...completePackage, alreadyRouted: true, sendOutcome: 'sent' }).allowed, false)
  assert.equal(recordReferralRoute({ ...completePackage, alreadyRouted: false, sendOutcome: 'failed' }).allowed, false)
})
