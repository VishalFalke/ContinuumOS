import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { APPROVED_SCREENS, type ScreenId } from '../app/screen-contract'
import { directRouteNotice, presentationForScreen } from '../app/screen-presentation-contract'
import fixture from '../fixtures/synthetic-tracer.json'
import { personForScreen } from './CareNetworkContext'

export type SimulatedSession = {
  displayName: string
  role: string
}

export type PendingHandoff = {
  fromRole: string
  screenId: ScreenId
  reason?: 'simulated-launch'
}

export function sessionForScreen(screenId: ScreenId): SimulatedSession {
  const presentation = presentationForScreen(screenId)
  return { displayName: presentation.sessionLabel.split(' — ')[0], role: presentation.representedRole }
}

export function ModalDialog({ children, initialFocusId, labelledBy, onClose, open, returnFocusId }: { children: ReactNode; initialFocusId?: string; labelledBy: string; onClose: () => void; open: boolean; returnFocusId?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    let resetFrame: number | undefined
    if (open && !dialog.open) {
      const configuredReturnTarget = returnFocusId ? document.getElementById(returnFocusId) : null
      returnFocusRef.current = configuredReturnTarget ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null)
      dialog.showModal()
      dialog.scrollTop = 0
      const initialFocusTarget = initialFocusId ? document.getElementById(initialFocusId) : null
      initialFocusTarget?.focus({ preventScroll: true })
      resetFrame = window.requestAnimationFrame(() => {
        dialog.scrollTop = 0
        initialFocusTarget?.focus({ preventScroll: true })
      })
    }
    if (!open && dialog.open) dialog.close()
    if (!open && returnFocusRef.current) {
      returnFocusRef.current.focus()
      returnFocusRef.current = null
    }
    return () => {
      if (resetFrame !== undefined) window.cancelAnimationFrame(resetFrame)
    }
  }, [initialFocusId, open, returnFocusId])
  return <dialog aria-labelledby={labelledBy} className="prototype-dialog" onCancel={(event) => { event.preventDefault(); onClose() }} onClose={onClose} onKeyDown={(event) => { if (event.key === 'Escape') { event.preventDefault(); onClose() } }} ref={dialogRef}>{children}</dialog>
}

type SyntheticReport = {
  basedOn: string
  encounter: string
  findings?: string[]
  id: string
  imageAlt?: string
  imageRef?: string
  impression?: string
  issuedAt: string
  priorVersion?: string
  resultRefs: string[]
  status: string
  study?: string
  subject: string
  version: string
}

const CURRENT_SYNTHETIC_REPORT = fixture.diagnosticReports.find((item) => item.id === 'SYN-DR-6001' && item.version === '2')!

export function SyntheticReportDocument({ report }: { report: SyntheticReport }) {
  const supportingObservations = fixture.observations.filter((observation) => report.resultRefs.includes(`Observation/${observation.id}`))
  const issuedAt = new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata' }).format(new Date(report.issuedAt))
  return <article aria-label={`Diagnostic report ${report.id} version ${report.version}`} className="report-document">
    <header className="report-document-header"><div><p className="panel-label">Abdominal-ultrasound report · read only</p><h3>Diagnostic report</h3><p>{report.id} · version {report.version}</p></div><span className="report-version-badge">{report.status} · current version</span></header>
    <dl className="report-document-demographics"><div><dt>Patient</dt><dd>{fixture.patient.display} · {fixture.patient.age} years</dd></div><div><dt>Performed at</dt><dd>Meridian Diagnostics Centre</dd></div><div><dt>Issued</dt><dd>{issuedAt} IST</dd></div><div><dt>Ordered by</dt><dd>Dr Neha Kapoor · Meadowbrook Clinic</dd></div><div><dt>Report source</dt><dd>Meridian Legacy RIS · HL7 v2 · {report.encounter}</dd></div><div><dt>Image source</dt><dd>Philips Enterprise Imaging / PACS · DICOM</dd></div><div><dt>Source order</dt><dd>{report.basedOn}</dd></div></dl>
    <section><h4>Study</h4><p>{report.study ?? 'Diagnostic-closure demonstration'}</p></section>
    {report.imageRef && <figure className="report-image"><img alt={report.imageAlt ?? 'Demonstration diagnostic report illustration'} src={report.imageRef} /><figcaption><strong>Demonstration image</strong><span>AI-generated illustration · not source-system imaging · not for diagnosis</span></figcaption></figure>}
    <section><h4>Source-linked evidence</h4>{supportingObservations.length ? <ul>{supportingObservations.map((observation) => <li key={observation.id}><strong>Observation/{observation.id}</strong><span>{observation.status} · {observation.basedOn}</span></li>)}</ul> : <p>No approved supporting observation is available.</p>}</section>
    <section><h4>Findings</h4>{report.findings?.length ? <ul className="report-findings">{report.findings.map((finding) => <li key={finding}>{finding}</li>)}</ul> : <p>No narrative findings are represented in this report.</p>}</section>
    <section><h4>Impression</h4><p>{report.impression ?? `No diagnostic impression is represented in report version ${report.version}.`}</p></section>
    <aside className="report-synthetic-boundary"><strong>Demonstration boundary</strong><span>This demonstration report and AI-generated image are not for diagnosis. The Clinic physician remains responsible for reviewing source evidence and making the human acknowledgement or follow-up decision.</span></aside>
    {report.priorVersion && <footer><strong>Amendment history</strong><span>Previous version {report.priorVersion} remains historical. This current version requires its own human review.</span></footer>}
  </article>
}

export function SyntheticReportPreview({ label, report }: { label: string; report: SyntheticReport }) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  return <><button aria-expanded={open} aria-haspopup="dialog" className="secondary-action synthetic-report-trigger" onClick={() => setOpen(true)} type="button">{label}</button><ModalDialog labelledBy={titleId} onClose={() => setOpen(false)} open={open}><section className="synthetic-report-preview"><h2 className="visually-hidden" id={titleId}>Diagnostic report {report.id}</h2><SyntheticReportDocument report={report} /><p className="synthetic-report-boundary">Preview only. No editing, download, source-system access, audit event or workflow action is available here.</p><button className="secondary-action" onClick={() => setOpen(false)} type="button">Close report</button></section></ModalDialog></>
}

export function SessionIdentity({ activeScreen, launchEstablished, session }: { activeScreen: ScreenId; launchEstablished: boolean; session: SimulatedSession | null }) {
  const person = personForScreen(activeScreen)
  if (activeScreen === 'SCR-01' && !session) return <aside aria-live="polite" className="session-identity" data-role-theme="clinic-physician">{person ? <img alt="" className="user-avatar user-photo" src={person.photo} /> : <span aria-hidden="true" className="user-avatar">CP</span>}<span className="session-copy"><span className="session-label">Access preview</span><strong>{person?.display ?? 'Clinic physician'}</strong><span>{person ? `${person.role} · ${person.organization}` : 'Access check required'}</span></span></aside>
  const presentation = presentationForScreen(activeScreen)
  const directRoute = directRouteNotice(activeScreen, launchEstablished)
  const screenSession = sessionForScreen(activeScreen)
  const roleMismatch = Boolean(session && session.role !== presentation.representedRole)
  const representedSession = !session || roleMismatch ? screenSession : session
  const previewMode = Boolean(directRoute || roleMismatch || !session)
  const normalizedDisplayName = representedSession.displayName.replace(/^synthetic\s+/i, '').trim().toLowerCase()
  const normalizedRole = representedSession.role.trim().toLowerCase()
  const repeatedRole = normalizedDisplayName === normalizedRole
  const primaryIdentity = repeatedRole ? representedSession.role : representedSession.displayName
  const initials = primaryIdentity.split(' ').filter(Boolean).slice(-2).map((part) => part[0]).join('').toUpperCase()
  const roleTheme = representedSession.role.toLowerCase().replace(/[^a-z]+/g, '-')
  return <aside aria-live="polite" className="session-identity" data-role-theme={roleTheme}>
    {person ? <img alt="" className="user-avatar user-photo" src={person.photo} /> : <span aria-hidden="true" className="user-avatar">{initials}</span>}
    <span className="session-copy"><span className="session-label">{previewMode ? 'Viewing as' : 'Signed in as'}</span><strong>{person?.display ?? primaryIdentity}</strong>{person ? <span>{person.role} · {person.organization}</span> : !repeatedRole && <span>{representedSession.role}</span>}</span>
  </aside>
}

export function DirectRouteNotice({ activeScreen, launchEstablished }: { activeScreen: ScreenId; launchEstablished: boolean }) {
  const directRoute = directRouteNotice(activeScreen, launchEstablished)
  if (!directRoute) return null
  return <aside className="direct-route-notice" role="status"><strong>Demonstration context</strong><span>{directRoute}</span></aside>
}

function JourneyList({ activeScreen, onSelect }: { activeScreen: ScreenId; onSelect: (screenId: ScreenId) => void }) {
  const groups = Array.from(new Set(APPROVED_SCREENS.map((screen) => screen.group))).map((group) => ({ group, screens: APPROVED_SCREENS.filter((screen) => screen.group === group) }))
  return <>{groups.map(({ group, screens }) => <section className="nav-group" key={group}><p>{group}</p><ol>{screens.map((screen) => <li key={screen.id}><button aria-current={screen.id === activeScreen ? 'step' : undefined} className={screen.id === activeScreen ? 'active' : undefined} onClick={() => onSelect(screen.id)} type="button"><span className="nav-copy"><strong>{screen.label}</strong><small>{screen.detail}</small></span></button></li>)}</ol></section>)}</>
}

export function PrototypeJourneyNavigation({ activeScreen, onSelect, orientationScreen }: { activeScreen: ScreenId; onSelect: (screenId: ScreenId) => void; orientationScreen: boolean }) {
  const reportSourceTool = activeScreen === 'SCR-04' ? { context: 'Acknowledged diagnostic report', label: 'View acknowledged report' } : activeScreen === 'SCR-05' ? { context: 'Report included in this referral package', label: 'View report in referral package' } : activeScreen === 'SCR-09' ? { context: 'Report referenced in the activity trace', label: 'View report referenced in trace' } : activeScreen === 'SCR-10' ? { context: 'Report supporting this next-step review', label: 'View supporting report' } : null
  if (orientationScreen) return <details className="portfolio-navigation orientation-navigation"><summary>Explore prototype screens</summary><div><p>Portfolio navigation only. Selecting a screen changes the represented user and does not record workflow work.</p><nav aria-label="Prototype screen navigation"><JourneyList activeScreen={activeScreen} onSelect={onSelect} /></nav></div></details>
  return <>{reportSourceTool && <section aria-label="Report source tools" className="screen-source-tools"><span><span className="panel-label">Source evidence</span><strong>{reportSourceTool.context}</strong></span><SyntheticReportPreview label={reportSourceTool.label} report={CURRENT_SYNTHETIC_REPORT} /></section>}<details className="portfolio-navigation"><summary>Explore prototype screens</summary><div><p>Portfolio navigation only. Selecting a screen changes the represented user and does not record workflow work.</p><nav aria-label="Prototype screen navigation"><JourneyList activeScreen={activeScreen} onSelect={onSelect} /></nav></div></details></>
}

export function SimulatedRoleHandoffDialog({ handoff, onCancel, onConfirm }: { handoff: PendingHandoff | null; onCancel: () => void; onConfirm: () => void }) {
  const presentation = handoff ? presentationForScreen(handoff.screenId) : null
  const launchHandoff = handoff?.reason === 'simulated-launch'
  return <ModalDialog labelledBy="simulated-handoff-title" onClose={onCancel} open={Boolean(handoff)} returnFocusId={launchHandoff ? 'simulated-launch-trigger' : undefined}>{handoff && presentation && <><header><p className="panel-label">{launchHandoff ? 'Workspace access confirmation' : 'Role handoff'}</p><h2 id="simulated-handoff-title">{launchHandoff ? 'Episode context is ready' : `Continue as ${presentation.representedRole}`}</h2><p>{launchHandoff ? 'Minimum read-only episode context is available. No credentials were collected, and no durable authentication or permissions were established.' : 'This portfolio view changes the represented viewing role. It does not sign in, grant permissions or change workflow ownership.'}</p></header><dl className="handoff-dialog-summary"><div><dt>Current role</dt><dd>{handoff.fromRole}</dd></div><div><dt>Next represented role</dt><dd>{presentation.representedRole}</dd></div><div><dt>Screen purpose</dt><dd>{presentation.purpose}</dd></div></dl><div className="action-group"><button className="primary-action" onClick={onConfirm} type="button">{launchHandoff ? 'Continue to workspace' : 'Continue role handoff'}</button><button className="secondary-action" onClick={onCancel} type="button">Stay on current screen</button></div></>}</ModalDialog>
}
