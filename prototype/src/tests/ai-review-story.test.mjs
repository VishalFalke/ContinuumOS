import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { evaluateAiDraftReview } from '../domain/ai-draft-controller.mjs'

const appUrl = new URL('../app/App.tsx', import.meta.url)

const ai01 = { capabilityId: 'AI-01', reviewerRole: 'Clinic physician', reportVersion: '2', directionEvidence: '', draftStatus: 'generated', sourceLinksComplete: true, disposition: 'accepted_for_orientation', correctionNote: '' }
const ai02 = { capabilityId: 'AI-02', reviewerRole: 'Referral Coordinator', reportVersion: '2', directionEvidence: 'SYN-DIR-602-01', draftStatus: 'generated', sourceLinksComplete: true, disposition: 'accepted_for_use', correctionNote: '' }

test('SCR-08 presents calling workflow, source/version evidence, uncertainty and manual fallback before the AI draft', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Source context and manual fallback · read only/)
  assert.match(app, /Evidence before optional assistance/)
  assert.match(app, /<dt>Calling workflow<\/dt><dd>\{callingWorkflow\}<\/dd>/)
  assert.match(app, /<dt>Source references \/ versions<\/dt><dd>\{draft\.sourceLinks\.join\(' · '\)\}<\/dd>/)
  assert.match(app, /<dt>Evidence status<\/dt>/)
  assert.match(app, /<dt>Uncertainty<\/dt><dd>\{draft\.uncertainty\}<\/dd>/)
  assert.match(app, /<dt>Manual fallback<\/dt><dd>\{manualRouteLabel\}/)
  assert.match(app, /AI-generated draft · requires human review/)
})

test('SCR-08 keeps accepted, corrected, rejected and discarded dispositions equally available and unselected', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /No option is preselected or preferred/)
  assert.match(app, /className="response-options ai-disposition-options"/)
  assert.match(app, /checked=\{disposition === acceptanceDisposition\}/)
  assert.match(app, /checked=\{disposition === 'corrected'\}/)
  assert.match(app, /checked=\{disposition === 'rejected'\}/)
  assert.match(app, /checked=\{disposition === 'discarded'\}/)
  assert.match(app, /disposition === 'corrected' && <label className="evidence-input">Correction note/)
  assert.doesNotMatch(app, /defaultChecked/)
})

test('stale, unavailable and unsupported AI assistance retains a complete manual route with no canonical state effect', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /This remains available if the draft is stale, unavailable, unsupported, rejected or discarded/)
  assert.match(app, /Continue manually without AI/)
  assert.match(app, /The AI assist is optional\. Its failure cannot block source-based work/)

  assert.equal(evaluateAiDraftReview({ ...ai01, draftStatus: 'stale', disposition: 'accepted_for_orientation' }).allowed, false)
  assert.equal(evaluateAiDraftReview({ ...ai01, draftStatus: 'unavailable', disposition: 'rejected' }).allowed, true)
  assert.equal(evaluateAiDraftReview({ ...ai01, sourceLinksComplete: false }).allowed, false)
  assert.equal(evaluateAiDraftReview(ai02).stateAfter, 'No canonical state change')
})

test('SCR-08 shows reviewer, local display time and sources only after the existing controller permits EVT-20', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /const \[recordedAt, setRecordedAt\] = useState<string \| null>\(null\)/)
  assert.match(app, /if \('reason' in outcome\) return; setRecordedAt\(new Date\(\)\.toISOString\(\)\); setResult\(outcome\)/)
  assert.match(app, /result \? <div className="status-panel" role="status">/)
  assert.match(app, /\{result\.auditEvent\} · reviewer: \{reviewerRole\} · local display time: \{recordedAt\} · sources: \{draft\.sourceLinks\.join\(' · '\)\}/)
  assert.match(app, /The local display time is not persisted audit evidence/)

  const outcome = evaluateAiDraftReview(ai01)
  assert.equal(outcome.allowed, true)
  assert.equal(outcome.auditEvent, 'EVT-20 ai.assistive.disposition_recorded')
})
