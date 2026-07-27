export function WorkflowStatus({ state, owner, next, ageDue }: { state: string; owner: string; next: string; ageDue?: string }) {
  return <section aria-label="Task status and ownership" className="workflow-status"><div className="workflow-status-heading"><p className="panel-label">Task details</p><h3>Ownership and status</h3></div><dl><div className="workflow-status-item next-action"><dt>Next action</dt><dd>{next}</dd></div><div className="workflow-status-item"><dt>Owner</dt><dd>{owner}</dd></div><div className="workflow-status-item"><dt>Status</dt><dd>{state}</dd></div>{ageDue && <div className="workflow-status-item"><dt>Due / timing</dt><dd>{ageDue}</dd></div>}</dl></section>
}

export function JourneyRail({ phase }: { phase: string; next: string }) {
  const stages = ['Access & episode', 'Result review', 'Human direction', 'Referral handoff', 'Next step']
  const currentIndex = phase === 'Clinical review' ? 1 : phase === 'Human direction' ? 2 : phase === 'Handoff preparation' || phase === 'Receiving response' ? 3 : ['Evidence verification', 'Confirmed next step', 'Next step confirmed', 'Diagnostic-closure workflow completed'].includes(phase) ? 4 : 0
  return <aside className="journey-rail" aria-label="Case journey"><p className="panel-label">Asha Mehta</p><h3>Care journey</h3><p className="journey-current"><strong>Current:</strong> {phase}</p><ol>{stages.map((stage, index) => <li className={index === currentIndex ? 'current' : index < currentIndex ? 'complete' : undefined} key={stage}><span aria-hidden="true">{index < currentIndex ? '✓' : index + 1}</span>{stage}</li>)}</ol></aside>
}
