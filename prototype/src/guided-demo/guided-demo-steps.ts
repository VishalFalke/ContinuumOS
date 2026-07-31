import type { ScreenId } from '../app/screen-contract'

export type GuidedDemoAction =
  | 'report-acknowledged'
  | 'direction-recorded'
  | 'referral-routed'
  | 'receiving-response-recorded'
  | 'scoped-closure-recorded'

export type GuidedDemoStep = {
  id: string
  route: ScreenId
  target: string
  text: string
  context?: string
  cardAlign?: 'left' | 'right'
  placement?: 'top' | 'bottom'
  scroll?: 'screen-top' | 'target'
  requiredAction?: GuidedDemoAction
}

export const GUIDED_DEMO_STEPS: GuidedDemoStep[] = [
  { id: 'result-ready', route: 'SCR-02', target: 'result-status', text: 'Asha’s abdominal ultrasound is complete, and the report is now available.', context: 'Connects the RIS report, PACS image and clinic context.', scroll: 'screen-top' },
  { id: 'review-pending', route: 'SCR-03', target: 'review-pending', text: 'But available does not mean a doctor has reviewed it.' },
  { id: 'clear-owner', route: 'SCR-03', target: 'current-owner', text: 'Without a clear owner, Asha’s next step can be delayed or missed.' },
  { id: 'assigned-review', route: 'SCR-03', target: 'assigned-clinician', text: 'ContinuumOS shows who must review the result and how long Asha has waited.', context: 'Makes ownership visible without replacing clinical judgement.' },
  { id: 'source-report', route: 'SCR-03', target: 'source-report', text: 'The doctor first reads the original report.' },
  { id: 'ai-orientation', route: 'SCR-08', target: 'ai-summary', text: 'This short AI summary helps with reading, but the report remains the source.' },
  { id: 'acknowledge', route: 'SCR-03', target: 'acknowledge-report', text: 'Click the highlighted Acknowledge action to record this exact report as reviewed.', requiredAction: 'report-acknowledged' },
  { id: 'human-direction', route: 'SCR-04', target: 'follow-up-direction', text: 'For this guided story, click Day-care referral, then click Save follow-up plan.', requiredAction: 'direction-recorded' },
  { id: 'referral-draft', route: 'SCR-05', target: 'referral-draft', text: 'ContinuumOS brings the approved facts together for the referral.', context: 'Combines source evidence, versions and the human direction.' },
  { id: 'missing-information', route: 'SCR-05', target: 'referral-missing-information', text: 'Missing information stays visible instead of being guessed.' },
  { id: 'human-routing', route: 'SCR-05', target: 'referral-review', text: 'Synthetic package evidence is prepared for this tour; click Route referral package.', cardAlign: 'right', requiredAction: 'referral-routed' },
  { id: 'referral-sent', route: 'SCR-05', target: 'referral-sent', text: 'The referral is sent, but Asha still has no confirmed next step.' },
  { id: 'awaiting-response', route: 'SCR-06', target: 'receiving-response', text: 'ContinuumOS keeps the case open until the receiving team responds.', context: 'Tracks the handoff across organisations until a response is recorded.' },
  { id: 'receiving-acceptance', route: 'SCR-06', target: 'receiving-acceptance', text: 'Synthetic acceptance evidence is prepared for this tour; click Record receiving response, and the next step will still need confirmation.', requiredAction: 'receiving-response-recorded' },
  { id: 'safe-closure', route: 'SCR-10', target: 'scoped-closure', text: 'Asha’s treatment is not complete, but this handoff can now close safely.', cardAlign: 'right', requiredAction: 'scoped-closure-recorded' },
]

export const FAILURE_DEMO_STEPS: GuidedDemoStep[] = [
  { id: 'unclear-match', route: 'SCR-07', target: 'exception-unmatched', text: 'This report arrived without a safe patient or encounter match.' },
  { id: 'exception-open', route: 'SCR-07', target: 'exception-state', text: 'ContinuumOS does not attach unclear information to Asha’s record.' },
  { id: 'reconciliation-owner', route: 'SCR-07', target: 'exception-owner', text: 'An authorised person must check the match.' },
  { id: 'verified-return', route: 'SCR-07', target: 'exception-safe-return', text: 'The case continues only after the information is verified.' },
]

export const GUIDED_DEMO_EVENT = 'continuumos:guided-demo-action'

export function announceGuidedDemoAction(action: GuidedDemoAction) {
  window.dispatchEvent(new CustomEvent(GUIDED_DEMO_EVENT, { detail: { action } }))
}
