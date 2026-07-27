import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { evaluateReferralPackage, recordReferralRoute } from '../domain/referral-controller.mjs'
import { evaluateReceivingResponse } from '../domain/receiving-response-controller.mjs'

const appUrl = new URL('../app/App.tsx', import.meta.url)

const completePackage = {
  actorRole: 'Referral Coordinator',
  currentState: 'Referral Created',
  direction: 'day-care referral',
  reportVersion: '2',
  packageId: 'SYN-RP-1001 v1',
  destination: 'Synthetic Day-care Unit',
  requiredFieldsComplete: true,
  coordinatorApprovalId: 'SYN-RC-1001',
  clinicalContentApplicable: true,
  clinicalApprovalId: 'SYN-CP-1001',
}

const responseBase = {
  currentState: 'Referral Created',
  packageId: 'SYN-RP-1001 v1',
  sendReference: 'SYN-SEND-1001',
  decisionActorRole: 'Receiving team',
  decisionActor: 'Synthetic Day-care Intake Team',
  recordingActorRole: 'Receiving team',
  recordingSource: '',
  response: 'accept',
  destination: 'Synthetic Day-care Unit',
  timeframe: 'Within 1 business day',
  rejectionReason: '',
  confirmationId: 'SYN-CONFIRM-1002',
  responseId: 'SYN-RESP-1001',
  alreadyRecorded: false,
}

test('SCR-05 makes every approved routing requirement visible before the existing gate allows action', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Package checklist/)
  assert.match(app, /Approved human direction/)
  assert.match(app, /Current acknowledged report/)
  assert.match(app, /Package ID \/ version/)
  assert.match(app, /Referral Coordinator approval/)
  assert.match(app, /Clinical-content approval/)
  assert.match(app, /Routing records a send attempt only; receiving-team acceptance remains separate/)

  assert.equal(evaluateReferralPackage({ ...completePackage, destination: '' }).allowed, false)
  assert.equal(evaluateReferralPackage({ ...completePackage, requiredFieldsComplete: false }).allowed, false)
  assert.equal(evaluateReferralPackage({ ...completePackage, clinicalApprovalId: '' }).allowed, false)
})

test('SCR-05 shows package and send-attempt evidence only after the existing route controller succeeds', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /const \[routeResult, setRouteResult\]/)
  assert.match(app, /routeResult \? <><div className="status-panel" role="status"/)
  assert.match(app, /\{routeResult\.packageEvent\} · \{routeResult\.routeEvent\}/)
  assert.match(app, /State remains Referral Created pending a receiving-team response/)
  assert.match(app, /Receiving acceptance remains a separate decision/)

  const routed = recordReferralRoute({ ...completePackage, alreadyRouted: false, sendOutcome: 'sent' })
  assert.equal(routed.allowed, true)
  assert.equal(routed.stateAfter, 'Referral Created')
  assert.equal(routed.packageEvent, 'EVT-12 referral.package.created')
  assert.equal(routed.routeEvent, 'EVT-13 referral.sent')
})

test('SCR-06 keeps decision authority distinct from recording attribution and begins without a response default', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /const \[recordingActorRole, setRecordingActorRole\] = useState\(''\)/)
  assert.match(app, /Select recording actor/)
  assert.match(app, /Name the receiving-team decision actor separately from the person who records the evidence/)
  assert.match(app, /Receiving team decides acceptance or rejection/)
  assert.match(app, /checked=\{response === 'accept'\}/)
  assert.match(app, /checked=\{response === 'reject'\}/)
  assert.doesNotMatch(app, /defaultChecked/)
})

test('SCR-06 success evidence remains controller-gated and keeps acceptance and rejection outcomes separate', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /\{result\.auditEvent\} · decision actor: \{decisionActor\} · recording actor: \{recordingActorRole\} · next owner: \{nextOwner\}/)
  assert.match(app, /Acceptance does not confirm the next step; rejection does not create an alternative referral/)
  assert.match(app, /No replacement referral is created/)

  const accepted = evaluateReceivingResponse(responseBase)
  assert.equal(accepted.allowed, true)
  assert.equal(accepted.stateAfter, 'Referral Accepted')
  assert.equal(accepted.auditEvent, 'EVT-14 receiving.response.recorded')

  const rejected = evaluateReceivingResponse({ ...responseBase, response: 'reject', destination: '', timeframe: '', rejectionReason: 'Synthetic capacity unavailable' })
  assert.equal(rejected.allowed, true)
  assert.equal(rejected.stateAfter, 'Referral Rejected')
  assert.match(rejected.nextAction, /no referral is rerouted automatically/)
})
