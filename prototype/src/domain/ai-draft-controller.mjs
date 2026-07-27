const CAPABILITIES = {
  'AI-01': { roles: new Set(['Clinic physician', 'Care Coordinator']), acceptedDisposition: 'accepted_for_orientation', returnScreen: 'SCR-03', label: 'Source-linked episode orientation draft' },
  'AI-02': { roles: new Set(['Referral Coordinator']), acceptedDisposition: 'accepted_for_use', returnScreen: 'SCR-05', label: 'Post-approval referral-handoff draft' },
}
const DISPOSITIONS = new Set(['accepted_for_orientation', 'accepted_for_use', 'corrected', 'rejected', 'discarded'])

export function evaluateAiDraftReview({ capabilityId, reviewerRole, reportVersion, directionEvidence, draftStatus, sourceLinksComplete, disposition, correctionNote }) {
  const capability = CAPABILITIES[capabilityId]
  if (!capability || !capability.roles.has(reviewerRole)) return { allowed: false, reason: 'Only an authorised human reviewer may review this assistive draft.' }
  if (reportVersion !== '2' || !sourceLinksComplete) return { allowed: false, reason: 'Current verified source links and report version are required; do not use an unsupported or stale draft.', manualRoute: capability.returnScreen }
  if (capabilityId === 'AI-02' && !directionEvidence?.trim()) return { allowed: false, reason: 'AI-02 requires a valid human-approved referral or hospital-escalation direction.', manualRoute: capability.returnScreen }
  if (!DISPOSITIONS.has(disposition)) return { allowed: false, reason: 'Select an authorised human draft disposition.', manualRoute: capability.returnScreen }
  if (draftStatus === 'unavailable' || draftStatus === 'timed_out' || draftStatus === 'stale') {
    if (!['rejected', 'discarded'].includes(disposition)) return { allowed: false, reason: 'Unavailable, timed-out or stale output must be rejected or discarded; continue manually.', manualRoute: capability.returnScreen }
  }
  if (disposition !== capability.acceptedDisposition && disposition.startsWith('accepted')) return { allowed: false, reason: `${capabilityId} cannot use that acceptance disposition.`, manualRoute: capability.returnScreen }
  if (disposition === 'corrected' && !correctionNote?.trim()) return { allowed: false, reason: 'Record the correction note and continue with human review.', manualRoute: capability.returnScreen }
  return { allowed: true, auditEvent: 'EVT-20 ai.assistive.disposition_recorded', disposition, stateAfter: 'No canonical state change', manualRoute: capability.returnScreen }
}

export const AI_DRAFTS = {
  'AI-01': { draftId: 'SYN-AI-01-1001', generatedAt: '2026-07-26T10:30:00+05:30', sourceLinks: ['DiagnosticReport/SYN-DR-6001 v2', 'ServiceRequest/SYN-SR-4001', 'Observation/SYN-OBS-5002'], uncertainty: 'Synthetic orientation only; it does not interpret, diagnose or direct care.', text: 'Orientation draft: Synthetic abdominal ultrasound report SYN-DR-6001 version 2 is amended and current. It describes a single approximately 8 mm echogenic focus in the gallbladder with posterior acoustic shadowing and no represented wall thickening or pericholecystic fluid. The synthetic impression is cholelithiasis without sonographic evidence of acute cholecystitis. The assigned Clinic physician must review the report and source evidence before any acknowledgement or follow-up decision.' },
  'AI-02': { draftId: 'SYN-AI-02-1001', generatedAt: '2026-07-26T10:32:00+05:30', sourceLinks: ['EVT-11 SYN-DIR-602-01', 'DiagnosticReport/SYN-DR-6001 v2', 'ServiceRequest/SYN-SR-4001'], uncertainty: 'Synthetic operational draft only; destination and required fields need human review.', text: 'Referral handoff draft: The human-approved day-care referral references synthetic abdominal ultrasound report SYN-DR-6001 version 2. The report impression is cholelithiasis without sonographic evidence of acute cholecystitis. A Referral Coordinator must verify the destination, required package fields, operational approval and any applicable clinical-content approval before routing. This draft does not create, approve or send the referral.' },
}
