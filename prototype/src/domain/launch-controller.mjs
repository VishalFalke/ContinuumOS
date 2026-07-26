import { evaluateVerifiedLinkage } from './workflow-rules.mjs'

export function resolveSimulatedLaunch(fixture, outcome = 'authorised') {
  if (outcome !== 'authorised') return { kind: 'exception', condition: outcome === 'denied' ? 'Authorisation denied' : 'Integration Unavailable', owner: 'Product/platform administrator', safeReturn: 'Resolve the represented access condition, then begin a new authorised session.', protectedContextAvailable: false }
  const linkage = evaluateVerifiedLinkage(fixture)
  return linkage.valid ? { kind: 'authorised', protectedContextAvailable: true } : { kind: 'exception', condition: linkage.reason, owner: linkage.owner, safeReturn: 'Authorised human reconciliation and re-verification.', protectedContextAvailable: false }
}
