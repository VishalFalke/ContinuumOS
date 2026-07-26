export const SAFE_RETURN_SCREEN_ID = 'SCR-07' as const

export const APPROVED_SCREENS = [
  { id: 'SCR-01', label: 'Start securely', story: 'COS-601', increment: '6.1', group: 'Care workflow', detail: 'Check simulated access' },
  { id: 'SCR-02', label: 'Episode overview', story: 'COS-602', increment: '6.1', group: 'Care workflow', detail: 'Review current evidence' },
  { id: 'SCR-03', label: 'Review result', story: 'COS-603', increment: '6.2', group: 'Care workflow', detail: 'Acknowledge the current report' },
  { id: 'SCR-04', label: 'Choose follow-up', story: 'COS-604', increment: '6.2', group: 'Care workflow', detail: 'Record a human direction' },
  { id: 'SCR-05', label: 'Prepare handoff', story: 'COS-605', increment: '6.3', group: 'Care workflow', detail: 'Review and route a referral package' },
  { id: 'SCR-06', label: 'Record response', story: 'COS-606', increment: '6.3', group: 'Care workflow', detail: 'Capture receiving-team decision evidence' },
  { id: 'SCR-10', label: 'Confirm next step', story: 'COS-610', increment: '6.4', group: 'Care workflow', detail: 'Verify evidence and close this workflow' },
  { id: 'SCR-07', label: 'Exceptions', story: 'COS-607', increment: '6.4', group: 'Support and traceability', detail: 'Resolve blocked work safely' },
  { id: 'SCR-08', label: 'AI draft review', story: 'COS-608', increment: '6.4', group: 'Support and traceability', detail: 'Review optional AI assistance' },
  { id: 'SCR-09', label: 'Activity trace', story: 'COS-609', increment: '6.4', group: 'Support and traceability', detail: 'View read-only workflow evidence' },
] as const

export type ScreenId = (typeof APPROVED_SCREENS)[number]['id']

export function isApprovedScreenId(value: string): value is ScreenId {
  return APPROVED_SCREENS.some((screen) => screen.id === value)
}

export function resolveScreenId(value: string | null): ScreenId {
  return value && isApprovedScreenId(value) ? value : SAFE_RETURN_SCREEN_ID
}
