import { useId, useState } from 'react'
import fixture from '../fixtures/synthetic-tracer.json'
import { ContextualEvidenceRoute } from './CareNetworkContext'
import { ModalDialog } from './PrototypeShell'

export function WorkflowStatus({ state, owner, next, ageDue }: { state: string; owner: string; next: string; ageDue?: string }) {
  return <section aria-label="Task status and ownership" className="workflow-status"><div className="workflow-status-heading"><p className="panel-label">Task details</p><h3>Ownership and status</h3></div><dl><div className="workflow-status-item next-action"><dt>Next action</dt><dd>{next}</dd></div><div className="workflow-status-item"><dt>Owner</dt><dd>{owner}</dd></div><div className="workflow-status-item"><dt>Status</dt><dd>{state}</dd></div>{ageDue && <div className="workflow-status-item"><dt>Due / timing</dt><dd>{ageDue}</dd></div>}</dl></section>
}

function PatientContextDialog({ next, phase }: { next: string; phase: string }) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const currentReport = fixture.diagnosticReports.find((report) => report.id === 'SYN-DR-6001' && report.version === '2')!
  return <>
    <button aria-expanded={open} aria-haspopup="dialog" className="patient-context-trigger" onClick={() => setOpen(true)} type="button">View patient context</button>
    <ModalDialog initialFocusId={titleId} labelledBy={titleId} onClose={() => setOpen(false)} open={open}>
      <section className="patient-context-dialog">
        <header>
          <img alt="" src={fixture.careNetwork.patientPhoto} />
          <div><p className="panel-label">Verified read-only context</p><h2 id={titleId} tabIndex={-1}>Asha Mehta · patient context</h2><p>48 years · Meadowbrook Community Clinic</p></div>
        </header>
        <dl className="patient-context-grid">
          <div><dt>Patient</dt><dd>Asha Mehta · {fixture.patient.id}</dd></div>
          <div><dt>Linkage</dt><dd>Verified patient and encounter</dd></div>
          <div><dt>Episode</dt><dd>{fixture.episode.id}</dd></div>
          <div><dt>Encounter</dt><dd>{fixture.encounter.id}</dd></div>
          <div><dt>Diagnostic request</dt><dd>{currentReport.study} · {fixture.serviceRequest.id}</dd></div>
          <div><dt>Current report</dt><dd>{currentReport.id} · version {currentReport.version} · {currentReport.status}</dd></div>
          <div><dt>Current workflow</dt><dd>{phase}</dd></div>
          <div><dt>Next action</dt><dd>{next}</dd></div>
        </dl>
        <aside className="patient-context-limit" role="note"><strong>Clinical context limit</strong><span>The order reason, allergies, medicines and medical history are not supplied in this prototype record. Do not infer them; use the source clinical record when they are needed for review.</span></aside>
        <button className="secondary-action" onClick={() => setOpen(false)} type="button">Close patient context</button>
      </section>
    </ModalDialog>
  </>
}

export function JourneyRail({ phase, next }: { phase: string; next: string }) {
  const stages = ['Access & episode', 'Result review', 'Human direction', 'Referral handoff', 'Next step']
  const currentIndex = phase === 'Clinical review' ? 1 : phase === 'Human direction' ? 2 : phase === 'Handoff preparation' || phase === 'Receiving response' ? 3 : ['Evidence verification', 'Confirmed next step', 'Next step confirmed', 'Diagnostic-closure workflow completed'].includes(phase) ? 4 : 0
  return <aside className="journey-rail" aria-label="Case journey"><div className="journey-person"><img alt="Asha Mehta" src={fixture.careNetwork.patientPhoto} /><span><strong>Asha Mehta · 48 years</strong><small>Meadowbrook Clinic · Episode SYN-EP-8001</small></span></div><PatientContextDialog next={next} phase={phase} /><h3>Care journey</h3><p className="journey-current"><strong>Current:</strong> {phase}</p><ol className="journey-stages">{stages.map((stage, index) => <li className={index === currentIndex ? 'current' : index < currentIndex ? 'complete' : undefined} key={stage}><span aria-hidden="true">{index < currentIndex ? '✓' : index + 1}</span>{stage}</li>)}</ol><ContextualEvidenceRoute phase={phase} /></aside>
}
