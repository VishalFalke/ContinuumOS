import assert from 'node:assert/strict'
import test from 'node:test'
import { evaluateFollowUpDirection, evaluateT08Verification } from '../domain/direction-controller.mjs'

const base = { actorRole: 'Clinic physician', currentState: 'Follow-up Decision Required', reportVersion: '2', evidenceReference: 'SYN-DR-6001 v2', directionId: 'SYN-DIR-602-01' }

test('clinic management remains pending until Care Coordinator T08 verification', () => {
  const result = evaluateFollowUpDirection({ ...base, selectedDirection: 'clinic management' })
  assert.equal(result.allowed, true)
  assert.equal(result.requiresCoordinatorVerification, true)
  assert.equal(result.stateAfter, 'Follow-up Decision Required')
})

test('only the Clinic physician can select an approved direction with evidence', () => {
  assert.equal(evaluateFollowUpDirection({ ...base, selectedDirection: 'hospital escalation' }).stateAfter, 'Referral Created')
  assert.equal(evaluateFollowUpDirection({ ...base, actorRole: 'Care Coordinator', selectedDirection: 'hospital escalation' }).allowed, false)
  assert.equal(evaluateFollowUpDirection({ ...base, selectedDirection: '', evidenceReference: '' }).allowed, false)
})

test('only the Care Coordinator can confirm all T08 evidence for clinic management', () => {
  const verification = { actorRole: 'Care Coordinator', selectedDirection: 'clinic management', owner: 'Synthetic Care Coordinator', timeframe: 'Within 2 business days', nextTask: 'SYN-TASK-8001', communicationEvidence: 'SYN-COMM-9001', verificationId: 'SYN-T08-602-01' }
  assert.equal(evaluateT08Verification(verification).stateAfter, 'Next Step Confirmed')
  assert.equal(evaluateT08Verification({ ...verification, actorRole: 'Clinic physician' }).allowed, false)
  assert.equal(evaluateT08Verification({ ...verification, communicationEvidence: '' }).allowed, false)
})
