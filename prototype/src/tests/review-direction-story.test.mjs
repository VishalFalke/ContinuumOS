import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'
import { evaluateFollowUpDirection } from '../domain/direction-controller.mjs'
import { evaluateAcknowledgement } from '../domain/review-controller.mjs'
import fixture from '../fixtures/synthetic-tracer.json' with { type: 'json' }

const appUrl = new URL('../app/App.tsx', import.meta.url)

test('SCR-03 exposes the exact current source, assigned owner and human acknowledgement boundary before action', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Read-only source report/)
  assert.match(app, /\{report\.id\} · current v\{report\.version\}/)
  assert.match(app, /<dt>Issued<\/dt><dd>\{report\.issuedAt\}<\/dd>/)
  assert.match(app, /Assigned reviewer/)
  assert.match(app, /Acknowledgement records that the assigned Clinic physician reviewed this exact source version/)
  assert.match(app, /It does not diagnose, approve a referral or select the follow-up direction/)
})

test('SCR-03 success evidence appears only after the existing acknowledgement controller allows the action', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /outcome\.allowed \? setAcknowledgedAt\(acknowledgementAudit\.timestamp\)/)
  assert.match(app, /acknowledgedAt \? <><div className="status-panel" role="status"/)
  assert.match(app, /Actor: \{acknowledgementAudit\.actor\} · recorded at \{acknowledgedAt\} · \{acknowledgementAudit\.event\}/)

  const outcome = evaluateAcknowledgement(fixture, {
    actorRef: fixture.reviewAssignment.assignedTo,
    reportVersion: fixture.reviewAssignment.reportVersion,
    currentState: fixture.reviewAssignment.state,
    acknowledgementId: 'SYN-ACK-602-01',
  })
  assert.equal(outcome.allowed, true)
  assert.equal(outcome.auditEvent, 'EVT-10 result.acknowledgement.recorded')
})

test('SCR-04 begins from represented acknowledgement context without claiming SCR-03 persistence', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /Report context · read only/)
  assert.match(app, /Current report and acknowledgement evidence are shown for this synthetic case/)
  assert.match(app, /Saved for this screen\. Continue below to review the referral package; no data is transferred automatically/)
  assert.match(app, /Open referral handoff/)
  assert.match(app, /onViewNext=\{\(\) => requestNavigation\('SCR-04'\)\}/)
})

test('SCR-04 direction options start unselected and explain only their immediate workflow consequence', async () => {
  const app = await readFile(appUrl, 'utf8')
  assert.match(app, /const \[selectedDirection, setSelectedDirection\] = useState\(''\)/)
  assert.doesNotMatch(app, /defaultChecked/)
  assert.match(app, /Immediate workflow consequence:/)
  assert.match(app, /Keeps Follow-up Decision Required until the Care Coordinator verifies the T08/)
  assert.match(app, /Records Referral Created and makes represented referral handoff preparation available/)
  assert.match(app, /Records Referral Created and makes represented escalation handoff preparation available/)
  assert.match(app, /It does not recommend, rank or preselect a care direction/)
})

test('existing controller remains the authority for each direction success and its post-action audit event', () => {
  const base = {
    actorRole: 'Clinic physician',
    currentState: 'Follow-up Decision Required',
    reportVersion: '2',
    evidenceReference: 'SYN-DR-6001 v2',
    directionId: 'SYN-DIR-602-01',
  }

  const clinic = evaluateFollowUpDirection({ ...base, selectedDirection: 'clinic management' })
  assert.equal(clinic.allowed, true)
  assert.equal(clinic.stateAfter, 'Follow-up Decision Required')
  assert.equal(clinic.auditEvent, 'EVT-11 care.direction.recorded')
  assert.equal(clinic.requiresCoordinatorVerification, true)

  for (const selectedDirection of ['day-care referral', 'hospital escalation']) {
    const referral = evaluateFollowUpDirection({ ...base, selectedDirection })
    assert.equal(referral.allowed, true)
    assert.equal(referral.stateAfter, 'Referral Created')
    assert.equal(referral.auditEvent, 'EVT-11 care.direction.recorded')
    assert.equal(referral.requiresCoordinatorVerification, false)
  }
})
