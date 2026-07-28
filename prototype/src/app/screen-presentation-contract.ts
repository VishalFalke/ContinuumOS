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

const directRoutePrefix = 'Demonstration view — secure launch not completed. '

export const SCREEN_PRESENTATION: Record<ScreenId, PresentationContract> = {
  'SCR-01': {
    purpose: 'Establish the workspace access outcome before protected context is shown.',
    representedRole: 'Clinic physician',
    sessionLabel: 'No session is established before launch.',
    handoff: {
      receivedFrom: 'Meadowbrook Clinic EHR launch context',
      handledBy: 'Dr Neha Kapoor at Meadowbrook Clinic, or Product/platform support for an unavailable-access condition',
      sentTo: 'Verified episode orientation or the owned access-recovery route',
      nextStep: 'Start the authorised workspace access check or inspect the unavailable-access route.',
    },
    scenarioBoundary: 'This portfolio view does not collect credentials or establish real authentication.',
  },
  'SCR-02': {
    purpose: 'Orient the Care Coordinator to verified episode evidence without changing workflow state.',
    representedRole: 'Care Coordinator',
    sessionLabel: 'Kavya Rao — Care Coordinator at Meadowbrook Clinic.',
    handoff: {
      receivedFrom: 'Meadowbrook Clinic EHR context, Meridian report evidence and illustrative PACS provenance',
      handledBy: 'Kavya Rao, Care Coordinator at Meadowbrook Clinic',
      sentTo: 'Dr Neha Kapoor’s represented result-review work',
      nextStep: 'Inspect the next demonstration screen; this does not assign, acknowledge or advance work.',
    },
    scenarioBoundary: 'The overview is read-only orientation. Later screens use represented scenarios rather than a persisted assignment from this page.',
  },
  'SCR-03': {
    purpose: 'Support explicit human acknowledgement of the current source report version.',
    representedRole: 'Assigned Clinic physician',
    sessionLabel: 'Dr Neha Kapoor — Clinic physician at Meadowbrook Clinic.',
    handoff: {
      receivedFrom: 'Current diagnostic report and represented assignment evidence',
      handledBy: 'Dr Neha Kapoor, assigned Clinic physician at Meadowbrook Clinic',
      sentTo: 'Represented human direction work',
      nextStep: 'Review and explicitly acknowledge the current report version when the existing controller allows it.',
    },
    scenarioBoundary: 'Acknowledgement is controller-local in this prototype. Opening the next screen does not persist or recreate this action.',
  },
  'SCR-04': {
    purpose: 'Record one human-owned follow-up direction after represented report acknowledgement.',
    representedRole: 'Clinic physician',
    sessionLabel: 'Dr Neha Kapoor — Clinic physician at Meadowbrook Clinic.',
    handoff: {
      receivedFrom: 'Represented acknowledged report',
      handledBy: 'Dr Neha Kapoor, Clinic physician at Meadowbrook Clinic',
      sentTo: 'Kavya Rao or Rohan Malik at Meadowbrook Clinic, depending on the represented branch',
      nextStep: 'Choose and evidence one approved human direction; no AI direction is suggested or preselected.',
    },
    scenarioBoundary: 'Branch destinations are represented scenarios. Navigation does not configure the destination screen or transfer local direction data.',
  },
  'SCR-05': {
    purpose: 'Prepare and explicitly route a complete human-approved handoff package.',
    representedRole: 'Referral Coordinator',
    sessionLabel: 'Rohan Malik — Referral Coordinator at Meadowbrook Clinic.',
    handoff: {
      receivedFrom: 'Represented approved human direction and current report',
      handledBy: 'Rohan Malik, Referral Coordinator at Meadowbrook Clinic',
      sentTo: 'Willow Day-care Unit through the Willow Referral Portal',
      nextStep: 'Complete the existing package gate and explicitly route the handoff.',
    },
    scenarioBoundary: 'Routing records package and send-attempt evidence only. It is not delivery, receiving acceptance or next-step confirmation.',
  },
  'SCR-06': {
    purpose: 'Record an explicit receiving-team response with separate decision and recording attribution.',
    representedRole: 'Receiving team',
    sessionLabel: 'Priya Nair — Intake nurse at Willow Day-care Unit.',
    handoff: {
      receivedFrom: 'Represented routed package and send evidence',
      handledBy: 'Priya Nair or another authorised Willow receiving-team member; a Referral Coordinator may record source evidence only when the source remains explicit',
      sentTo: 'Represented accepted-referral work or a new Clinic physician direction',
      nextStep: 'Record an unselected Accept or Reject response only when the existing evidence gate passes.',
    },
    scenarioBoundary: 'Acceptance does not confirm the next step. Rejection does not create or route a replacement referral.',
  },
  'SCR-07': {
    purpose: 'Keep represented workflow failures visible, owned and recoverable without silently advancing work.',
    representedRole: 'Accountable exception role',
    sessionLabel: 'Exception reviewer — authority is defined by the selected profile.',
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
    sessionLabel: 'Dr Neha Kapoor — Authorised reviewer at Meadowbrook Clinic.',
    handoff: {
      receivedFrom: 'Approved AI-01 or AI-02 demonstration record and source references',
      handledBy: 'Authorised human reviewer',
      sentTo: 'Unchanged manual source-based workflow',
      nextStep: 'Review, correct, reject or discard optional assistance; continue manually when needed.',
    },
    scenarioBoundary: 'AI cannot diagnose, acknowledge, choose direction, approve, route, accept, reject, confirm or close work. Optional orientation assistance returns to the source-based review workflow.',
  },
  'SCR-09': {
    purpose: 'Inspect representative chronological evidence without editing history or changing workflow state.',
    representedRole: 'Operational or governance reviewer',
    sessionLabel: 'Operational or governance reviewer — read-only view.',
    handoff: {
      receivedFrom: 'Approved static demonstration audit record',
      handledBy: 'Read-only reviewer',
      sentTo: 'Prototype navigation only',
      nextStep: 'Filter and inspect attributable evidence without editing, deleting or changing workflow work.',
    },
    scenarioBoundary: 'The trace is representative demonstration history, not a live audit log assembled from this browser session.',
  },
  'SCR-10': {
    purpose: 'Verify required evidence before recording next-step confirmation and a separate scoped closure.',
    representedRole: 'Care Coordinator',
    sessionLabel: 'Kavya Rao — Care Coordinator at Meadowbrook Clinic.',
    handoff: {
      receivedFrom: 'Represented accepted-referral scenario and applicable human-owned evidence',
      handledBy: 'Kavya Rao, Care Coordinator at Meadowbrook Clinic',
      sentTo: 'End of the scoped diagnostic-closure demonstration after separate closure',
      nextStep: 'Record Next Step Confirmed only when the existing evidence gate passes, then consider the separate closure action.',
    },
    scenarioBoundary: 'This demonstration remains referral-only. It does not receive live response data from the receiving-team response view or represent all-care completion.',
  },
}

export function presentationForScreen(screenId: ScreenId) {
  return SCREEN_PRESENTATION[screenId]
}

export function directRouteNotice(screenId: ScreenId, launchEstablished: boolean) {
  if (screenId === 'SCR-01' || launchEstablished) return null
  return `${directRoutePrefix}${SCREEN_PRESENTATION[screenId].scenarioBoundary}`
}
