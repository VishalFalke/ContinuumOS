export type AuditEntry = { id: string; category: string; event: string; outcome: string; actor: string; timestamp: string; reference: string }
export const AUDIT_ENTRIES: readonly AuditEntry[]
export function getAuditEntries(category?: string): AuditEntry[]
export function validateAuditTrace(entries?: readonly AuditEntry[]): { ordered: boolean; complete: boolean; distinguishesAiExceptionAndHuman: boolean }
