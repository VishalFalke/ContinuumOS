export const AUDIT_ENTRIES = Object.freeze([
  { id: 'SYN-AUD-01', category: 'source', event: 'EVT-07 diagnostic.report.complete_available', outcome: 'Result Available', actor: 'Synthetic diagnostic source', timestamp: '2026-07-26T09:00:00+05:30', reference: 'DiagnosticReport/SYN-DR-6001 v2' },
  { id: 'SYN-AUD-02', category: 'human decision', event: 'EVT-10 result.acknowledgement.recorded', outcome: 'Result Acknowledged', actor: 'Synthetic Clinic Physician', timestamp: '2026-07-26T09:05:00+05:30', reference: 'SYN-ACK-602-01 · report v2' },
  { id: 'SYN-AUD-03', category: 'human decision', event: 'EVT-11 care.direction.recorded', outcome: 'Referral Created', actor: 'Synthetic Clinic Physician', timestamp: '2026-07-26T09:10:00+05:30', reference: 'SYN-DIR-602-01 · day-care referral' },
  { id: 'SYN-AUD-04', category: 'workflow', event: 'EVT-12 referral.package.created', outcome: 'Package prepared', actor: 'Synthetic Referral Coordinator', timestamp: '2026-07-26T09:15:00+05:30', reference: 'SYN-RP-1001 v1' },
  { id: 'SYN-AUD-05', category: 'workflow', event: 'EVT-13 referral.sent', outcome: 'Send attempt recorded', actor: 'Synthetic Referral Coordinator', timestamp: '2026-07-26T09:16:00+05:30', reference: 'SYN-SEND-1001 · no receiving acceptance' },
  { id: 'SYN-AUD-06', category: 'human decision', event: 'EVT-14 receiving.response.recorded', outcome: 'Referral Accepted', actor: 'Synthetic Day-care Intake Team', timestamp: '2026-07-26T09:20:00+05:30', reference: 'SYN-RESP-1001 · destination/timeframe evidence' },
  { id: 'SYN-AUD-07', category: 'exception', event: 'EVT-19 deterministic.control.exception_detected', outcome: 'Result Incomplete quarantined', actor: 'Deterministic control', timestamp: '2026-07-26T09:25:00+05:30', reference: 'SYN-EXC-1001 · no state advance' },
  { id: 'SYN-AUD-08', category: 'recovery', event: 'EVT-21 recovery.reconciliation_completed', outcome: 'Verified recovery', actor: 'Synthetic diagnostic operations', timestamp: '2026-07-26T09:30:00+05:30', reference: 'SYN-RECOVERY-01 · Result Available' },
  { id: 'SYN-AUD-09', category: 'AI disposition', event: 'EVT-20 ai.assistive.disposition_recorded', outcome: 'Rejected; manual workflow continued', actor: 'Synthetic Clinic Physician', timestamp: '2026-07-26T09:35:00+05:30', reference: 'SYN-AI-01-1001 · report v2 · no state effect' },
])

export function getAuditEntries(category = 'all') {
  const entries = category === 'all' ? AUDIT_ENTRIES : AUDIT_ENTRIES.filter((entry) => entry.category === category)
  return [...entries].sort((a, b) => a.timestamp.localeCompare(b.timestamp))
}

export function validateAuditTrace(entries = AUDIT_ENTRIES) {
  const ordered = entries.every((entry, index) => index === 0 || entries[index - 1].timestamp <= entry.timestamp)
  const complete = entries.every((entry) => entry.id && entry.event && entry.outcome && entry.actor && entry.timestamp && entry.reference)
  const categories = new Set(entries.map((entry) => entry.category))
  return { ordered, complete, distinguishesAiExceptionAndHuman: ['AI disposition', 'exception', 'human decision'].every((category) => categories.has(category)) }
}
