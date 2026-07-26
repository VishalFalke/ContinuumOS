import assert from 'node:assert/strict'
import test from 'node:test'
import { evaluateAiDraftReview } from '../domain/ai-draft-controller.mjs'

const ai01 = { capabilityId: 'AI-01', reviewerRole: 'Clinic physician', reportVersion: '2', directionEvidence: '', draftStatus: 'generated', sourceLinksComplete: true, disposition: 'accepted_for_orientation', correctionNote: '' }
const ai02 = { capabilityId: 'AI-02', reviewerRole: 'Referral Coordinator', reportVersion: '2', directionEvidence: 'SYN-DIR-602-01', draftStatus: 'generated', sourceLinksComplete: true, disposition: 'accepted_for_use', correctionNote: '' }

test('AI-01 and AI-02 remain authorised, source-linked human-reviewed drafts with no state effect', () => {
  assert.equal(evaluateAiDraftReview(ai01).stateAfter, 'No canonical state change')
  assert.equal(evaluateAiDraftReview(ai02).manualRoute, 'SCR-05')
  assert.equal(evaluateAiDraftReview({ ...ai01, reviewerRole: 'Referral Coordinator' }).allowed, false)
  assert.equal(evaluateAiDraftReview({ ...ai02, directionEvidence: '' }).allowed, false)
})

test('stale or unavailable draft must be rejected or discarded before manual fallback', () => {
  assert.equal(evaluateAiDraftReview({ ...ai01, draftStatus: 'stale', disposition: 'accepted_for_orientation' }).allowed, false)
  assert.equal(evaluateAiDraftReview({ ...ai01, draftStatus: 'unavailable', disposition: 'rejected' }).allowed, true)
})

test('correction, source version and disposition boundaries remain explicit', () => {
  assert.equal(evaluateAiDraftReview({ ...ai01, disposition: 'corrected', correctionNote: '' }).allowed, false)
  assert.equal(evaluateAiDraftReview({ ...ai01, disposition: 'corrected', correctionNote: 'Source wording clarified.' }).allowed, true)
  assert.equal(evaluateAiDraftReview({ ...ai01, reportVersion: '1' }).allowed, false)
  assert.equal(evaluateAiDraftReview({ ...ai01, disposition: 'accepted_for_use' }).allowed, false)
})
