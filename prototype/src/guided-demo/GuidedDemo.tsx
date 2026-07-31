import { useEffect, useId, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import type { ScreenId } from '../app/screen-contract'
import { ModalDialog } from '../components/PrototypeShell'
import { FAILURE_DEMO_STEPS, GUIDED_DEMO_EVENT, GUIDED_DEMO_STEPS, type GuidedDemoAction, type GuidedDemoStep } from './guided-demo-steps'

type DemoMode = 'idle' | 'invitation' | 'intro' | 'story' | 'complete' | 'failure'

type GuidedDemoProps = {
  activeScreen: ScreenId
  onActiveChange: (active: boolean) => void
  onNavigate: (screenId: ScreenId) => void
  onReset: (screenId: ScreenId) => void
  onStartFailure: () => void
}

const DEMO_TARGET_SELECTORS: Record<string, string> = {
  'result-status': '.workspace-header',
  'review-pending': '.workflow-status',
  'current-owner': '.workflow-status',
  'assigned-clinician': '.workflow-status',
  'source-report': '.report-document',
  'ai-summary': '.ai-draft-panel',
  'acknowledge-report': '.acknowledgement-panel .primary-action',
  'follow-up-direction': '.direction-panel',
  'referral-draft': '.handoff-context-panel',
  'referral-missing-information': '.routing-requirements',
  'referral-review': '.referral-panel',
  'referral-sent': '.referral-panel .status-panel',
  'receiving-response': '.receiving-context-panel',
  'receiving-acceptance': '.receiving-panel',
  'scoped-closure': '.closure-evidence-panel',
  'exception-unmatched': '.exception-queue',
  'exception-state': '.state-badge',
  'exception-owner': '.exception-detail-panel',
  'exception-safe-return': '.exception-detail-panel',
}

const DEMO_SCENE_LABELS: Record<ScreenId, string> = {
  'SCR-01': 'Secure access view',
  'SCR-02': 'Care Coordinator view',
  'SCR-03': 'Clinic physician view',
  'SCR-04': 'Clinic physician view',
  'SCR-05': 'Referral Coordinator view',
  'SCR-06': 'Receiving team view',
  'SCR-07': 'Exception reviewer view',
  'SCR-08': 'Clinic physician view',
  'SCR-09': 'Audit reviewer view',
  'SCR-10': 'Care Coordinator view',
}

const DEMO_ACTION_SELECTORS: Partial<Record<GuidedDemoAction, string>> = {
  'report-acknowledged': '.acknowledgement-panel .primary-action',
  'referral-routed': '.referral-panel .primary-action:not(:disabled)',
  'receiving-response-recorded': '.receiving-panel .primary-action:not(:disabled)',
  'scoped-closure-recorded': '.closure-evidence-panel .primary-action:not(:disabled)',
}

function useActiveTarget(step: GuidedDemoStep | null, activeScreen: ScreenId, stepIndex: number) {
  const [target, setTarget] = useState<HTMLElement | null>(null)
  const [position, setPosition] = useState({ left: 16, top: 16 })

  useEffect(() => {
    if (!step) {
      setTarget(null)
      return
    }
    let stopped = false
    let timer: number | undefined
    let scrollFrame: number | undefined
    let nestedScrollFrame: number | undefined
    let attempts = 0
    const findTarget = () => {
      if (stopped) return
      const registered = document.querySelector<HTMLElement>(DEMO_TARGET_SELECTORS[step.target])
      registered?.setAttribute('data-demo-target', step.target)
      const found = document.querySelector<HTMLElement>(`[data-demo-target="${step.target}"]`)
      if (!found && attempts < 30) {
        attempts += 1
        timer = window.setTimeout(findTarget, 100)
        return
      }
      setTarget(found ?? null)
      if (found) {
        found.classList.add('guided-demo-active-target')
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        scrollFrame = window.requestAnimationFrame(() => {
          nestedScrollFrame = window.requestAnimationFrame(() => {
            if (step.scroll === 'screen-top') {
              window.scrollTo({ behavior: reduceMotion ? 'auto' : 'smooth', top: 0 })
            } else {
              const block = found.getBoundingClientRect().height > window.innerHeight * .72 ? 'start' : 'center'
              found.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block, inline: 'nearest' })
            }
          })
        })
      }
    }
    findTarget()
    return () => {
      stopped = true
      if (timer) window.clearTimeout(timer)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
      if (nestedScrollFrame) window.cancelAnimationFrame(nestedScrollFrame)
      document.querySelectorAll('.guided-demo-active-target').forEach((element) => element.classList.remove('guided-demo-active-target'))
      document.querySelectorAll(`[data-demo-target="${step.target}"]`).forEach((element) => element.removeAttribute('data-demo-target'))
    }
  }, [activeScreen, step])

  useEffect(() => {
    if (!step) return
    const update = () => {
      const rect = target?.getBoundingClientRect()
      const tooltipWidth = Math.min(320, window.innerWidth - 32)
      const tooltipHeight = document.querySelector<HTMLElement>('.guided-demo-tooltip')?.offsetHeight ?? (step.context ? 230 : 190)
      const alignRight = step.cardAlign === 'right' || (step.cardAlign !== 'left' && stepIndex % 2 === 1)
      const alternatingLeft = rect && alignRight ? rect.right - tooltipWidth : rect?.left
      const left = alternatingLeft === undefined ? (window.innerWidth - tooltipWidth) / 2 : Math.max(16, Math.min(alternatingLeft, window.innerWidth - tooltipWidth - 16))
      const below = rect ? rect.bottom + 12 : window.innerHeight / 2
      const above = rect ? rect.top - tooltipHeight - 12 : window.innerHeight / 2
      const preferAbove = step.placement === 'top' || stepIndex % 2 === 1 || below > window.innerHeight - tooltipHeight - 16
      const proposedTop = preferAbove && above >= 16 ? above : below
      const maximumTop = Math.max(16, window.innerHeight - tooltipHeight - 16)
      const top = Math.min(maximumTop, Math.max(16, proposedTop))
      setPosition({ left, top })
    }
    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, true)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
    }
  }, [step, stepIndex, target])

  return { position, target }
}

function findActionTarget(step: GuidedDemoStep) {
  if (!step.requiredAction) return null
  if (step.requiredAction === 'direction-recorded') {
    const dayCareOption = document.querySelector<HTMLElement>('.direction-options label:nth-of-type(2)')
    const dayCareControl = dayCareOption?.querySelector<HTMLInputElement>('input')
    return dayCareControl?.checked
      ? document.querySelector<HTMLElement>('.direction-panel .primary-action')
      : dayCareOption ?? null
  }
  return document.querySelector<HTMLElement>(DEMO_ACTION_SELECTORS[step.requiredAction] ?? '')
}

type CueDirection = 'left' | 'right' | 'above' | 'below'

function useRequiredActionCue(step: GuidedDemoStep | null, activeScreen: ScreenId, tooltipPosition: { left: number; top: number }) {
  const [actionTarget, setActionTarget] = useState<HTMLElement | null>(null)
  const [cuePosition, setCuePosition] = useState({ left: 16, top: 16 })
  const [cueDirection, setCueDirection] = useState<CueDirection>('left')
  const [cueVisible, setCueVisible] = useState(false)

  useEffect(() => {
    if (!step?.requiredAction) {
      setActionTarget(null)
      setCueVisible(false)
      return
    }
    let timer: number | undefined
    let attempts = 0
    const updateTarget = () => {
      const found = findActionTarget(step)
      setActionTarget(found)
      if (!found && attempts < 30) {
        attempts += 1
        timer = window.setTimeout(updateTarget, 100)
      }
    }
    const handleChange = () => window.requestAnimationFrame(updateTarget)
    updateTarget()
    document.addEventListener('change', handleChange)
    document.addEventListener('click', handleChange)
    return () => {
      if (timer) window.clearTimeout(timer)
      document.removeEventListener('change', handleChange)
      document.removeEventListener('click', handleChange)
    }
  }, [activeScreen, step])

  useEffect(() => {
    if (!actionTarget) return
    const updatePosition = () => {
      const rect = actionTarget.getBoundingClientRect()
      const tooltipRect = document.querySelector<HTMLElement>('.guided-demo-tooltip')?.getBoundingClientRect()
      const cueWidth = 156
      const cueHeight = 40
      const gap = 12
      const candidates: Array<{ direction: CueDirection; left: number; top: number }> = [
        { direction: 'right', left: rect.right + gap, top: rect.top + (rect.height - cueHeight) / 2 },
        { direction: 'left', left: rect.left - cueWidth - gap, top: rect.top + (rect.height - cueHeight) / 2 },
        { direction: 'above', left: rect.left + (rect.width - cueWidth) / 2, top: rect.top - cueHeight - gap },
        { direction: 'below', left: rect.left + (rect.width - cueWidth) / 2, top: rect.bottom + gap },
      ]
      const overlapsTooltip = (candidate: { left: number; top: number }) => Boolean(tooltipRect
        && candidate.left < tooltipRect.right + 8
        && candidate.left + cueWidth > tooltipRect.left - 8
        && candidate.top < tooltipRect.bottom + 8
        && candidate.top + cueHeight > tooltipRect.top - 8)
      const inViewport = (candidate: { left: number; top: number }) => candidate.left >= 16
        && candidate.top >= 16
        && candidate.left + cueWidth <= window.innerWidth - 16
        && candidate.top + cueHeight <= window.innerHeight - 16
      const selected = candidates.find((candidate) => inViewport(candidate) && !overlapsTooltip(candidate))
      setCueVisible(Boolean(selected))
      if (!selected) return
      setCueDirection(selected.direction)
      setCuePosition({ left: selected.left, top: selected.top })
    }
    const focusFrame = window.requestAnimationFrame(() => {
      const control = actionTarget.matches('button, input, select, textarea')
        ? actionTarget
        : actionTarget.querySelector<HTMLElement>('button, input, select, textarea')
      control?.focus({ preventScroll: true })
      updatePosition()
    })
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.cancelAnimationFrame(focusFrame)
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [actionTarget, tooltipPosition.left, tooltipPosition.top])

  const directionReady = step?.requiredAction === 'direction-recorded' && Boolean(actionTarget?.matches('.primary-action'))
  const cueText = step?.requiredAction === 'direction-recorded'
    ? directionReady ? 'Click Save' : 'Click Day-care referral'
    : 'Click this'
  const directedCueText = cueDirection === 'right'
    ? `← ${cueText}`
    : cueDirection === 'left'
      ? `${cueText} →`
      : cueDirection === 'above'
        ? `${cueText} ↓`
        : `↑ ${cueText}`

  return { actionTarget, cuePosition, cueText: directedCueText, cueVisible }
}

export function GuidedDemo({ activeScreen, onActiveChange, onNavigate, onReset, onStartFailure }: GuidedDemoProps) {
  const [mode, setMode] = useState<DemoMode>('idle')
  const [stepIndex, setStepIndex] = useState(0)
  const introId = useId()
  const completionId = useId()
  const launcherRef = useRef<HTMLButtonElement>(null)
  const dragOffsetRef = useRef<{ x: number; y: number } | null>(null)
  const [dragPosition, setDragPosition] = useState<{ left: number; top: number } | null>(null)
  const [dragging, setDragging] = useState(false)
  const steps = mode === 'failure' ? FAILURE_DEMO_STEPS : GUIDED_DEMO_STEPS
  const step = mode === 'story' || mode === 'failure' ? steps[stepIndex] ?? null : null
  const { position, target } = useActiveTarget(step, activeScreen, stepIndex)
  const tooltipPosition = dragPosition ?? position
  const { actionTarget, cuePosition, cueText, cueVisible } = useRequiredActionCue(step, activeScreen, tooltipPosition)

  useEffect(() => {
    if (activeScreen !== 'SCR-01') return
    try {
      if (window.sessionStorage.getItem('continuumos-guided-demo-invitation')) return
      window.sessionStorage.setItem('continuumos-guided-demo-invitation', 'shown')
    } catch {
      // The persistent launcher remains available when browser storage is unavailable.
    }
    setMode('invitation')
  }, [activeScreen])

  useEffect(() => {
    dragOffsetRef.current = null
    setDragPosition(null)
    setDragging(false)
  }, [stepIndex, mode])

  function beginDrag(event: ReactPointerEvent<HTMLElement>) {
    if ((event.target as HTMLElement).closest('button')) return
    const rect = event.currentTarget.getBoundingClientRect()
    dragOffsetRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top }
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
  }

  function continueDrag(event: ReactPointerEvent<HTMLElement>) {
    const offset = dragOffsetRef.current
    if (!offset) return
    const tooltipWidth = event.currentTarget.offsetWidth
    const tooltipHeight = event.currentTarget.offsetHeight
    setDragPosition({
      left: Math.max(16, Math.min(event.clientX - offset.x, window.innerWidth - tooltipWidth - 16)),
      top: Math.max(16, Math.min(event.clientY - offset.y, window.innerHeight - tooltipHeight - 16)),
    })
  }

  function endDrag(event: ReactPointerEvent<HTMLElement>) {
    if (!dragOffsetRef.current) return
    dragOffsetRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
    setDragging(false)
  }

  function openIntro() {
    setMode('intro')
    onActiveChange(true)
  }

  function dismissInvitation() {
    setMode('idle')
    onActiveChange(false)
    window.requestAnimationFrame(() => launcherRef.current?.focus())
  }

  function startStory() {
    setStepIndex(0)
    setMode('story')
    onActiveChange(true)
    onReset(GUIDED_DEMO_STEPS[0].route)
  }

  function exitDemo() {
    setMode('idle')
    setStepIndex(0)
    onActiveChange(false)
    window.requestAnimationFrame(() => launcherRef.current?.focus())
  }

  function moveTo(index: number) {
    const nextStep = steps[index]
    if (!nextStep) {
      if (mode === 'failure') {
        exitDemo()
      } else {
        setMode('complete')
      }
      return
    }
    setStepIndex(index)
    if (activeScreen !== nextStep.route) onNavigate(nextStep.route)
  }

  useEffect(() => {
    if (!step?.requiredAction) return
    const handleAction = (event: Event) => {
      const action = (event as CustomEvent<{ action: GuidedDemoAction }>).detail?.action
      if (action === step.requiredAction) moveTo(stepIndex + 1)
    }
    window.addEventListener(GUIDED_DEMO_EVENT, handleAction)
    return () => window.removeEventListener(GUIDED_DEMO_EVENT, handleAction)
  }, [step, stepIndex])

  useEffect(() => {
    if (step?.requiredAction !== 'report-acknowledged' || !target) return
    const control = target.matches('.primary-action') ? target as HTMLButtonElement : target.querySelector<HTMLButtonElement>('.primary-action')
    if (!control) return
    const handleAcknowledgement = () => window.setTimeout(() => moveTo(stepIndex + 1), 0)
    control.addEventListener('click', handleAcknowledgement, { once: true })
    return () => control.removeEventListener('click', handleAcknowledgement)
  }, [step, stepIndex, target])

  useEffect(() => {
    if (!step || activeScreen === step.route) return
    onNavigate(step.route)
  }, [activeScreen, step])

  useEffect(() => {
    if (mode === 'idle' || mode === 'intro' || mode === 'complete') return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        exitDemo()
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [mode])

  function startFailureBranch() {
    setStepIndex(0)
    setMode('failure')
    onActiveChange(true)
    onStartFailure()
  }

  return <>
    <button className="guided-demo-launcher" onClick={openIntro} ref={launcherRef} type="button">Take Guided Tour</button>
    <ModalDialog labelledBy={`${introId}-invitation`} onClose={() => { if (mode === 'invitation') dismissInvitation() }} open={mode === 'invitation'}>
      <section className="guided-demo-card guided-demo-invitation">
        <span className="guided-demo-patient-label">ContinuumOS walkthrough</span>
        <p id={`${introId}-invitation`}>Would you like a guided tour of Asha’s care journey, or would you prefer to explore it yourself?</p>
        <div className="guided-demo-card-actions"><button className="primary-action" onClick={openIntro} type="button">Take guided tour</button><button className="secondary-action" onClick={dismissInvitation} type="button">Explore myself</button></div>
      </section>
    </ModalDialog>
    <ModalDialog labelledBy={introId} onClose={() => { if (mode === 'intro') exitDemo() }} open={mode === 'intro'}>
      <section className="guided-demo-card guided-demo-intro">
        <span className="guided-demo-patient-label">Why this workflow is difficult</span>
        <h2 id={introId}>Asha’s report is ready, but the work around it is split across systems and organisations.</h2>
        <ul className="guided-demo-complexity-grid">
          <li><strong>Meridian RIS</strong><span>Report and completion status</span></li>
          <li><strong>Philips PACS</strong><span>Ultrasound image evidence</span></li>
          <li><strong>Clinic EHR</strong><span>Patient and episode context</span></li>
          <li><strong>Referral portal and communication</strong><span>Handoff and receiving response</span></li>
        </ul>
        <p className="guided-demo-problem">Different systems. Different organisations. No shared owner or confirmed next step.</p>
        <p className="guided-demo-orchestration">ContinuumOS links the evidence, shows the accountable human and keeps the handoff open until it is confirmed.</p>
        <div className="guided-demo-card-actions"><button className="primary-action" onClick={startStory} type="button">Start Asha’s story</button><button className="secondary-action" onClick={exitDemo} type="button">Exit</button></div>
      </section>
    </ModalDialog>
    {step && <div className="guided-demo-layer" data-target-found={Boolean(target)}>
      <div aria-hidden="true" className="guided-demo-dimmer" />
      <aside
        aria-live="polite"
        className={dragging ? 'guided-demo-tooltip dragging' : 'guided-demo-tooltip'}
        onPointerCancel={endDrag}
        onPointerDown={beginDrag}
        onPointerMove={continueDrag}
        onPointerUp={endDrag}
        style={tooltipPosition}
      >
        <span className="guided-demo-scene-label">{DEMO_SCENE_LABELS[step.route]}</span>
        <p>{step.text}</p>
        {step.context && <p className="guided-demo-value-label"><span>What ContinuumOS solves</span>{step.context}</p>}
        {step.requiredAction && <p className="guided-demo-action-instruction">Click the highlighted button to move next.</p>}
        <div className="guided-demo-controls">
          <span>{stepIndex + 1} of {steps.length}</span>
          <span className="guided-demo-control-buttons">
            <button disabled={stepIndex === 0} onClick={() => moveTo(stepIndex - 1)} type="button">Back</button>
            {step.requiredAction
              ? <button className="guided-demo-required-cue" disabled type="button">Click highlighted control</button>
              : <button onClick={() => moveTo(stepIndex + 1)} type="button">{stepIndex === steps.length - 1 ? 'Finish' : 'Next'}</button>}
            <button onClick={exitDemo} type="button">Exit</button>
          </span>
        </div>
      </aside>
      {actionTarget && cueVisible && <div aria-hidden="true" className="guided-demo-action-cue" style={cuePosition}>{cueText}</div>}
    </div>}
    <ModalDialog labelledBy={completionId} onClose={() => { if (mode === 'complete') exitDemo() }} open={mode === 'complete'}>
      <section className="guided-demo-card guided-demo-completion">
        <span className="guided-demo-patient-label">What changed for Asha</span>
        <h2 id={completionId}>The same cross-organisation journey now has visible evidence, ownership and closure.</h2>
        <dl className="guided-demo-outcome-list">
          <div><dt>Evidence across systems</dt><dd>Source-linked evidence in one workflow</dd></div>
          <div><dt>Review ownership unclear</dt><dd>Named doctor and visible waiting time</dd></div>
          <div><dt>Referral assembled manually</dt><dd>Approved evidence organised together</dd></div>
          <div><dt>Sending could look complete</dt><dd>Case stays open until acceptance and confirmation</dd></div>
          <div><dt>Handoff difficult to prove</dt><dd>Actor, time, source and outcome recorded</dd></div>
        </dl>
        <p className="guided-demo-boundary">ContinuumOS does not replace clinical systems or human decisions. It coordinates the work between them.</p>
        <div className="guided-demo-card-actions"><button className="primary-action" onClick={exitDemo} type="button">Explore Prototype</button><button className="secondary-action" onClick={startStory} type="button">Replay</button><button className="secondary-action" onClick={exitDemo} type="button">Exit</button></div>
        <button className="guided-demo-failure-link" onClick={startFailureBranch} type="button">See what happens when data is unclear</button>
      </section>
    </ModalDialog>
  </>
}
