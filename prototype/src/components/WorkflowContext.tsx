export function WorkflowStatus({ state, owner, next, ageDue }: { state: string; owner: string; next: string; ageDue?: string }) {
  return <dl className="workflow-status"><div><dt>Current state</dt><dd>{state}</dd></div><div><dt>Accountable owner</dt><dd>{owner}</dd></div><div><dt>Next action</dt><dd>{next}</dd></div>{ageDue && <div><dt>Age / due context</dt><dd>{ageDue}</dd></div>}</dl>
}

export function JourneyRail({ phase, next }: { phase: string; next: string }) {
  const stages = ['Access & episode', 'Result review', 'Human direction', 'Referral handoff', 'Next step']
  const currentIndex = phase === 'Clinical review' ? 1 : phase === 'Human direction' ? 2 : phase === 'Handoff preparation' || phase === 'Receiving response' ? 3 : phase === 'Confirmed next step' ? 4 : 0
  return <aside className="journey-rail" aria-label="Synthetic case journey"><p className="panel-label">Asha Mehta · synthetic case</p><h3>Where this fits</h3><ol>{stages.map((stage, index) => <li className={index === currentIndex ? 'current' : index < currentIndex ? 'complete' : undefined} key={stage}><span aria-hidden="true">{index < currentIndex ? '✓' : index + 1}</span>{stage}</li>)}</ol><p className="journey-next"><strong>Next:</strong> {next}</p></aside>
}
