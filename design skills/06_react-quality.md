# React Quality

Use React Doctor or an equivalent review pass after meaningful React changes. Treat the result as an engineering signal, not as evidence of usability, clinical safety or production readiness.

## Review priorities

1. Correctness: broken state transitions, stale values, invalid keys and incomplete loading or error states.
2. Accessibility: missing names, focus failures, invalid semantics and motion that ignores reduced-motion preferences.
3. Safety presentation: AI output shown without source, uncertainty, owner, allowed action or approval status.
4. Performance: unnecessary re-renders, request waterfalls, oversized imports and expensive rendering in long lists.
5. Maintainability: duplicated status logic, unclear component boundaries and screen-specific hacks that obscure the workflow.

## ContinuumOS acceptance checks

- The happy path reaches a confirmed next step only through the visible human-controlled decision gate.
- Missing encounter, amended result and permission-denied states remain recoverable and auditable.
- Uncertain identity or encounter matching routes to reconciliation rather than silently attaching.
- Synthetic patient and episode data remain clearly synthetic.
- A quality score never overrides a product, safety or accessibility decision.

## Suggested command

If the prototype is a React codebase and the dependency is available, run:

```text
npx react-doctor@latest --verbose --scope changed
```

Record notable findings and fixes in the active sprint artifact. Do not claim a score unless the command was actually run.
