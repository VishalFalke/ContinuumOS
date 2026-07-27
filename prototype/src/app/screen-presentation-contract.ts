import type { ScreenId } from './screen-contract'

export type PresentationContract = {
  purpose: string
  representedRole: string
  sessionLabel: string
  handoff: {
    receivedFrom: string
    handledBy: string
    sentTo: string
    nextStep: string
  }
  scenarioBoundary: string
}

const directRoutePrefix = 'Demonstration view — simulated launch not established. '

export const SCREEN_PRESENTATION: Record<ScreenId, PresentationContract> = {
  'SCR-01': {
    purpose: 'Establish a represented synthetic launch outcome before protected context is shown.',
    representedRole: 'Clinic physician',
    sessionLabel: 'No simulated session is established before launch.',
    handoff: {
      receivedFrom: 'Represented launch context',
      handledBy: 'Clinic physician or Product/platform support for an unavailable-access condition',
      sentTo: 'Verified episode orientation or the owned access-recovery route',
      nextStep: 'Start the authorised simulated launch or inspect the represented unavailable-access route.',
    },
    scenarioBoundary: 'This is a synthetic demonstration launch. It does not collect credentials or establish real authentication.',
  },
  'SCR-02': {
    purpose: 'Orient the Care Coordinator to verified synthetic episode evidence without changing workflow state.',
    representedRole: 'Care Coordinator',
    sessionLabel: 'Synthetic Care Coordinator — simulated session after explicit role handoff.',
    handoff: {
      receivedFrom: 'Verified synthetic launch context and episode fixture',
      handledBy: 'Care Coordinator',
      sentTo: 'Represented result-review work',
      nextStep: 'Inspect the next demonstration screen; this does not assign, acknowledge or advance work.',
    },
    scenarioBoundary: 'The overview is read-only orientation. Later screens use represented scenarios rather than a persisted assignment from this page.',
  },
  'SCR-03': {
    purpose: 'Support explicit human acknowledgement of the current source report version.',
    representedRole: 'Assigned Clinic physician',
    sessionLabel: 'Synthetic Clinic Physician — simulated session after explicit role handoff.',
    handoff: {
      receivedFrom: 'Current diagnostic report and represented assignment evidence',
      handledBy: 'Assigned Clinic physician',
      sentTo: 'Represented human direction work',
      nextStep: 'Review and explicitly acknowledge the current report version when the existing controller allows it.',
    },
    scenarioBoundary: 'Acknowledgement is controller-local in this prototype. Opening the next screen does not persist or recreate this action.',
  },
  'SCR-04': {
    purpose: 'Record one human-owned follow-up direction after represented report acknowledgement.',
    representedRole: 'Clinic physician',
    sessionLabel: 'Synthetic Clinic Physician — simulated session after explicit role handoff.',
    handoff: {
      receivedFrom: 'Represented acknowledged report',
      handledBy: 'Clinic physician',
      sentTo: 'Care Coordinator or Referral Coordinator depending on the represented branch',
      nextStep: 'Choose and evidence one approved human direction; no AI direction is suggested or preselected.',
    },
    scenarioBoundary: 'Branch destinations are represented scenarios. Navigation does not configure the destination screen or transfer local direction data.',
  },
  'SCR-05': {
    purpose: 'Prepare and explicitly route a complete human-approved handoff package.',
    representedRole: 'Referral Coordinator',
    sessionLabel: 'Synthetic Referral Coordinator — simulated session after explicit role handoff.',
    handoff: {
      receivedFrom: 'Represented approved human direction and current report',
      handledBy: 'Referral Coordinator',
      sentTo: 'Represented receiving-response work',
      nextStep: 'Complete the existing package gate and explicitly route the handoff.',
    },
    scenarioBoundary: 'Routing records package and send-attempt evidence only. It is not delivery, receiving acceptance or next-step confirmation.',
  },
  'SCR-06': {
    purpose: 'Record an explicit receiving-team response with separate decision and recording attribution.',
    representedRole: 'Receiving team',
    sessionLabel: 'Synthetic Receiving Team Member — simulated session after explicit role handoff.',
    handoff: {
      receivedFrom: 'Represented routed package and send evidence',
      handledBy: 'Receiving-team decision actor; a Referral Coordinator may record source evidence only when the source remains explicit',
      sentTo: 'Represented accepted-referral work or a new Clinic physician direction',
      nextStep: 'Record an unselected Accept or Reject response only when the existing evidence gate passes.',
    },
    scenarioBoundary: 'Acceptance does not confirm the next step. Rejection does not create or route a replacement referral.',
  },
  'SCR-07': {
    purpose: 'Keep represented workflow failures visible, owned and recoverable without silently advancing work.',
    representedRole: 'Accountable exception role',
    sessionLabel: 'Synthetic exception role — session and resolution authority are defined by the selected profile.',
    handoff: {
      receivedFrom: 'An originating exception or a standalone approved demonstration profile',
      handledBy: 'The accountable role defined by the selected exception profile',
      sentTo: 'The last verified work surface after successful verified recovery',
      nextStep: 'Review required recovery evidence and record a verified resolution only when the existing controller allows it.',
    },
    scenarioBoundary: 'Recovery appends evidence and enables manual return only. It does not recreate or automatically advance the original workflow action.',
  },
  'SCR-08': {
    purpose: 'Review optional AI assistance using source evidence, uncertainty and an authorised human disposition.',
    representedRole: 'Authorised reviewer',
    sessionLabel: 'Synthetic authorised reviewer — simulated session after explicit role handoff.',
    handoff: {
      receivedFrom: 'Approved AI-01 or AI-02 synthetic fixture and source references',
      handledBy: 'Authorised human reviewer',
      sentTo: 'Unchanged manual source-based workflow',
      nextStep: 'Review, correct, reject or discard optional assistance; continue manually when needed.',
    },
    scenarioBoundary: 'AI cannot diagnose, acknowledge, choose direction, approve, route, accept, reject, confirm or close work. AI-01 returns to the source-based review workflow in Sprint 6B.',
  },
  'SCR-09': {
    purpose: 'Inspect representative chronological evidence without editing history or changing workflow state.',
    representedRole: 'Operational or governance reviewer',
    sessionLabel: 'Synthetic operational or governance reviewer — read-only simulated session.',
    handoff: {
      receivedFrom: 'Approved static synthetic audit fixture',
      handledBy: 'Read-only reviewer',
      sentTo: 'Prototype navigation only',
      nextStep: 'Filter and inspect attributable evidence without editing, deleting or changing workflow work.',
    },
    scenarioBoundary: 'The trace is representative synthetic history, not a live audit log assembled from this browser session.',
  },
  'SCR-10': {
    purpose: 'Verify required evidence before recording next-step confirmation and a separate scoped closure.',
    representedRole: 'Care Coordinator',
    sessionLabel: 'Synthetic Care Coordinator — simulated session after explicit role handoff.',
    handoff: {
      receivedFrom: 'Represented accepted-referral scenario and applicable human-owned evidence',
      handledBy: 'Care Coordinator',
      sentTo: 'End of the scoped diagnostic-closure demonstration after separate closure',
      nextStep: 'Record Next Step Confirmed only when the existing evidence gate passes, then consider the separate closure action.',
    },
    scenarioBoundary: 'This Sprint 6B surface remains referral-only. It does not receive live response data from SCR-06 or represent all-care completion.',
  },
}

export function presentationForScreen(screenId: ScreenId) {
  return SCREEN_PRESENTATION[screenId]
}

export function directRouteNotice(screenId: ScreenId, launchEstablished: boolean) {
  if (screenId === 'SCR-01' || launchEstablished) return null
  return `${directRoutePrefix}${SCREEN_PRESENTATION[screenId].scenarioBoundary}`
}
