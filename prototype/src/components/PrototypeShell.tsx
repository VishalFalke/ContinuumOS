import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { APPROVED_SCREENS, type ScreenId } from '../app/screen-contract'
import { directRouteNotice, presentationForScreen } from '../app/screen-presentation-contract'
import fixture from '../fixtures/synthetic-tracer.json'

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

function ModalDialog({ children, labelledBy, onClose, open, returnFocusId }: { children: ReactNode; labelledBy: string; onClose: () => void; open: boolean; returnFocusId?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      const configuredReturnTarget = returnFocusId ? document.getElementById(returnFocusId) : null
      returnFocusRef.current = configuredReturnTarget ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null)
      dialog.showModal()
    }
    if (!open && dialog.open) dialog.close()
    if (!open && returnFocusRef.current) {
      returnFocusRef.current.focus()
      returnFocusRef.current = null
    }
  }, [open, returnFocusId])
  return <dialog aria-labelledby={labelledBy} className="prototype-dialog" onCancel={(event) => { event.preventDefault(); onClose() }} onClose={onClose} onKeyDown={(event) => { if (event.key === 'Escape') { event.preventDefault(); onClose() } }} ref={dialogRef}>{children}</dialog>
}

type SyntheticReport = {
  basedOn: string
  encounter: string
  id: string
  issuedAt: string
  priorVersion?: string
  resultRefs: string[]
  status: string
  subject: string
  version: string
}

const CURRENT_SYNTHETIC_REPORT = fixture.diagnosticReports.find((item) => item.id === 'SYN-DR-6001' && item.version === '2')!

export function SyntheticReportPreview({ report }: { report: SyntheticReport }) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  return <><button aria-expanded={open} aria-haspopup="dialog" className="secondary-action synthetic-report-trigger" onClick={() => setOpen(true)} type="button">View report details</button><ModalDialog labelledBy={titleId} onClose={() => setOpen(false)} open={open}><section className="synthetic-report-preview"><header><p className="panel-label">Synthetic demonstration document · read only</p><h2 id={titleId}>Diagnostic report {report.id}</h2><p>Version {report.version} · approved source evidence</p></header><dl><div><dt>Status</dt><dd>{report.status} · current version</dd></div><div><dt>Issued</dt><dd>{report.issuedAt}</dd></div><div><dt>Source order</dt><dd>{report.basedOn}</dd></div><div><dt>Supporting evidence</dt><dd>{report.resultRefs.join(', ')}</dd></div><div><dt>Subject</dt><dd>{report.subject}</dd></div><div><dt>Encounter</dt><dd>{report.encounter}</dd></div>{report.priorVersion && <div><dt>Previous version</dt><dd>{report.priorVersion}</dd></div>}</dl><p className="synthetic-report-boundary">Preview only. No clinical findings, editing, download, source-system access, audit event or workflow action is available here.</p><button className="secondary-action" onClick={() => setOpen(false)} type="button">Close report</button></section></ModalDialog></>
}

export function SessionIdentity({ activeScreen, launchEstablished, session }: { activeScreen: ScreenId; launchEstablished: boolean; session: SimulatedSession | null }) {
  if (activeScreen === 'SCR-01' && !session) return <aside aria-live="polite" className="session-identity" data-role-theme="clinic-physician"><span aria-hidden="true" className="user-avatar">CP</span><span className="session-copy"><span className="session-label">Access preview</span><strong>Clinic physician</strong><span>Access check required</span></span></aside>
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
    <span aria-hidden="true" className="user-avatar">{initials}</span>
    <span className="session-copy"><span className="session-label">{previewMode ? 'Viewing as' : 'Signed in as'}</span><strong>{primaryIdentity}</strong>{!repeatedRole && <span>{representedSession.role}</span>}{directRoute && <span>{directRoute}</span>}</span>
  </aside>
}

function JourneyList({ activeScreen, onSelect }: { activeScreen: ScreenId; onSelect: (screenId: ScreenId) => void }) {
  const groups = Array.from(new Set(APPROVED_SCREENS.map((screen) => screen.group))).map((group) => ({ group, screens: APPROVED_SCREENS.filter((screen) => screen.group === group) }))
  return <>{groups.map(({ group, screens }) => <section className="nav-group" key={group}><p>{group}</p><ol>{screens.map((screen) => <li key={screen.id}><button aria-current={screen.id === activeScreen ? 'step' : undefined} className={screen.id === activeScreen ? 'active' : undefined} onClick={() => onSelect(screen.id)} type="button"><span className="nav-copy"><strong>{screen.label}</strong><small>{screen.detail}</small></span></button></li>)}</ol></section>)}</>
}

export function PrototypeJourneyNavigation({ activeScreen, onSelect, orientationScreen }: { activeScreen: ScreenId; onSelect: (screenId: ScreenId) => void; orientationScreen: boolean }) {
  const reportContext = activeScreen === 'SCR-03' ? 'Current diagnostic report' : activeScreen === 'SCR-05' ? 'Report included in this referral package' : activeScreen === 'SCR-09' ? 'Report referenced in the activity trace' : activeScreen === 'SCR-10' ? 'Report supporting this next-step review' : null
  if (orientationScreen) return <details className="portfolio-navigation orientation-navigation"><summary>Explore prototype screens</summary><div><p>Portfolio navigation only. Selecting a screen changes the represented user and does not record workflow work.</p><nav aria-label="Prototype screen navigation"><JourneyList activeScreen={activeScreen} onSelect={onSelect} /></nav></div></details>
  return <>{reportContext && <section aria-label="Report source tools" className="screen-source-tools"><span><span className="panel-label">Source evidence</span><strong>{reportContext}</strong></span><SyntheticReportPreview report={CURRENT_SYNTHETIC_REPORT} /></section>}<details className="portfolio-navigation"><summary>Explore prototype screens</summary><div><p>Portfolio navigation only. Selecting a screen changes the represented user and does not record workflow work.</p><nav aria-label="Prototype screen navigation"><JourneyList activeScreen={activeScreen} onSelect={onSelect} /></nav></div></details></>
}

export function SimulatedRoleHandoffDialog({ handoff, onCancel, onConfirm }: { handoff: PendingHandoff | null; onCancel: () => void; onConfirm: () => void }) {
  const presentation = handoff ? presentationForScreen(handoff.screenId) : null
  const launchHandoff = handoff?.reason === 'simulated-launch'
  return <ModalDialog labelledBy="simulated-handoff-title" onClose={onCancel} open={Boolean(handoff)} returnFocusId={launchHandoff ? 'simulated-launch-trigger' : undefined}>{handoff && presentation && <><header><p className="panel-label">{launchHandoff ? 'Simulated launch confirmation' : 'Simulated role handoff'}</p><h2 id="simulated-handoff-title">{launchHandoff ? 'Synthetic launch outcome represented' : `Continue as ${presentation.representedRole}`}</h2><p>{launchHandoff ? 'Minimum read-only synthetic context is available for this portfolio scenario. No credentials were collected, and no durable authentication or permissions were established.' : 'This portfolio demonstration changes the represented viewing role. It does not sign in, grant permissions or change workflow ownership.'}</p></header><dl className="handoff-dialog-summary"><div><dt>Current simulated role</dt><dd>{handoff.fromRole}</dd></div><div><dt>Next represented role</dt><dd>{presentation.representedRole}</dd></div><div><dt>Screen purpose</dt><dd>{presentation.purpose}</dd></div></dl><div className="action-group"><button className="primary-action" onClick={onConfirm} type="button">Continue simulated handoff</button><button className="secondary-action" onClick={onCancel} type="button">Stay on current screen</button></div></>}</ModalDialog>
}
