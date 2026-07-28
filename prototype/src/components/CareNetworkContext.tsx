import type { ScreenId } from '../app/screen-contract'
import fixture from '../fixtures/synthetic-tracer.json'

type PersonKey = keyof typeof fixture.careNetwork.people

const PEOPLE_BY_SCREEN: Partial<Record<ScreenId, PersonKey>> = {
  'SCR-01': 'clinicPhysician',
  'SCR-02': 'careCoordinator',
  'SCR-03': 'clinicPhysician',
  'SCR-04': 'clinicPhysician',
  'SCR-05': 'referralCoordinator',
  'SCR-06': 'receivingClinician',
  'SCR-08': 'clinicPhysician',
  'SCR-10': 'careCoordinator',
}

type EvidenceStep = {
  code: string
  label: string
  detail: string
  status: string
}

const DEFAULT_ROUTE: EvidenceStep[] = [
  { code: 'EHR', label: 'Meadowbrook EHR', detail: 'Patient and episode context', status: 'Linked' },
  { code: 'OS', label: 'ContinuumOS', detail: 'Current workflow task', status: 'Open' },
]

const EVIDENCE_ROUTES: Record<string, EvidenceStep[]> = {
  'Diagnostic progress': [
    { code: 'EHR', label: 'Meadowbrook EHR', detail: 'Patient and order', status: 'Linked' },
    { code: 'RIS', label: 'Meridian RIS', detail: 'Report v2', status: 'Received' },
    { code: 'PACS', label: 'Philips PACS', detail: 'Ultrasound images', status: 'Linked' },
    { code: 'OS', label: 'ContinuumOS', detail: 'Review task', status: 'Ready' },
  ],
  'Clinical review': [
    { code: 'RIS', label: 'Meridian RIS', detail: 'Report v2', status: 'Current' },
    { code: 'PACS', label: 'Philips PACS', detail: 'Ultrasound images', status: 'Linked' },
    { code: 'MD', label: 'Dr Neha', detail: 'Human review', status: 'Pending' },
  ],
  'Human direction': [
    { code: 'DR', label: 'Report v2', detail: 'Acknowledged source', status: 'Reviewed' },
    { code: 'MD', label: 'Dr Neha', detail: 'Follow-up direction', status: 'Human decision' },
    { code: 'OS', label: 'ContinuumOS', detail: 'Records evidence', status: 'Awaiting action' },
  ],
  'Handoff preparation': [
    { code: 'MCC', label: 'Meadowbrook', detail: 'Approved referral', status: 'Prepared' },
    { code: 'OS', label: 'ContinuumOS', detail: 'Package checks', status: 'In review' },
    { code: 'WIL', label: 'Willow Portal', detail: 'Receiving destination', status: 'Not sent' },
  ],
  'Receiving response': [
    { code: 'WIL', label: 'Willow Portal', detail: 'Referral package', status: 'Available' },
    { code: 'RN', label: 'Priya Nair', detail: 'Receiving-team decision', status: 'Pending' },
    { code: 'OS', label: 'ContinuumOS', detail: 'Response evidence', status: 'Awaiting record' },
  ],
  'Optional assistance': [
    { code: 'RIS', label: 'Meridian RIS', detail: 'Report v2', status: 'Source' },
    { code: 'PACS', label: 'Philips PACS', detail: 'Image reference', status: 'Source' },
    { code: 'AI', label: 'AI draft', detail: 'Optional assistance', status: 'Unverified' },
    { code: 'MD', label: 'Dr Neha', detail: 'Human review', status: 'Required' },
  ],
  'Journey paused: needs review': [
    { code: 'SRC', label: 'Affected source', detail: 'Evidence needs verification', status: 'Blocked' },
    { code: 'OS', label: 'Exception queue', detail: 'Work remains visible', status: 'Open' },
    { code: 'OWN', label: 'Accountable owner', detail: 'Verifies recovery', status: 'Required' },
  ],
  'Evidence verification': [
    { code: 'WIL', label: 'Willow Portal', detail: 'Receiving response', status: 'Available' },
    { code: 'COM', label: 'Scheduling', detail: 'Delivery evidence', status: 'Required' },
    { code: 'CC', label: 'Kavya Rao', detail: 'Human verification', status: 'Pending' },
  ],
  'Next step confirmed': [
    { code: 'WIL', label: 'Willow Portal', detail: 'Referral accepted', status: 'Recorded' },
    { code: 'COM', label: 'Communications', detail: 'Patient confirmation', status: 'Recorded' },
    { code: 'CC', label: 'Kavya Rao', detail: 'Scoped closure', status: 'Available' },
  ],
  'Diagnostic-closure workflow completed': [
    { code: 'OS', label: 'ContinuumOS', detail: 'Diagnostic closure', status: 'Completed' },
    { code: 'CARE', label: 'Care network', detail: 'Broader care continues', status: 'Outside scope' },
  ],
}

export function personForScreen(screenId: ScreenId) {
  const key = PEOPLE_BY_SCREEN[screenId]
  return key ? fixture.careNetwork.people[key] : null
}

export function PersonIdentity({ personKey, compact = false }: { personKey: PersonKey; compact?: boolean }) {
  const person = fixture.careNetwork.people[personKey]
  return <span className={compact ? 'person-identity compact' : 'person-identity'}>
    <img alt={person.display} src={person.photo} />
    <span><strong>{person.display}</strong><span>{person.role} · {person.organization}</span></span>
  </span>
}

export function ContextualEvidenceRoute({ phase }: { phase: string }) {
  const steps = EVIDENCE_ROUTES[phase] ?? DEFAULT_ROUTE
  return <section aria-label="Connected evidence path" className="evidence-route">
    <p className="evidence-route-label">Connected evidence</p>
    <ol>
      {steps.map((step) => <li key={`${phase}-${step.code}-${step.label}`}>
        <span aria-hidden="true" className="evidence-route-symbol">{step.code}</span>
        <span className="evidence-route-copy"><strong>{step.label}</strong><span>{step.detail}</span><small>{step.status}</small></span>
      </li>)}
    </ol>
  </section>
}
