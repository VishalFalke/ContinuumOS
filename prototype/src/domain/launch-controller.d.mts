export type SimulatedLaunchResult =
  | { kind: 'authorised'; protectedContextAvailable: true }
  | { kind: 'exception'; condition: string; owner: string; safeReturn: string; protectedContextAvailable: false }

export function resolveSimulatedLaunch(fixture: unknown, outcome?: 'authorised' | 'denied' | 'unavailable'): SimulatedLaunchResult
