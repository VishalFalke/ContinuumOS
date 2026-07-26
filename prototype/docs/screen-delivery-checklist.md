# Screen delivery checklist

Use this checklist for one approved screen story at a time. It supplements—not replaces—the linked Sprint 5 specification, navigation map, RTM, acceptance catalogue, business-rule catalogue and data dictionary.

## Before implementation

- [ ] Name the story, screen ID, approved state entry/exit, actor and linked acceptance criteria.
- [ ] Link only the source artifacts needed for the story; report ambiguity rather than deciding it.
- [ ] Identify allowed and prohibited actions, source/system ownership, fixture, audit event, safe-return route and recovery condition.
- [ ] Identify the normal, loading, unavailable, error and recovery states.
- [ ] Confirm no deferred requirement, new field, state, actor, AI capability or route is entering scope.

## While implementing

- [ ] Use the visual tokens and accessibility rules in `design-foundations.md`.
- [ ] Apply `behavioral-ux-human-ai-design` when the work affects a user-facing workflow: preserve authority and intent, reduce cognitive load, make state/owner/next action visible, and design prevention/recovery.
- [ ] Show state, accountable owner, permitted next action and uncertainty where the specification requires them.
- [ ] Use native semantic controls, clear labels, visible focus and text beyond colour.
- [ ] Keep AI optional, source-linked, human-reviewed and non-authoritative where applicable.
- [ ] Keep manual work usable when AI or a represented service is unavailable.
- [ ] Preserve a readable, auditable failure and safe-return route.

## Before handoff

- [ ] Trace each changed code file to the approved story and acceptance criteria.
- [ ] Run `npm run lint`, `npm run test` and `npm run build`, plus applicable scenario/manual checks.
- [ ] Record actual results in the Sprint 6 evidence artifacts; log an actual defect or controlled change only when one occurred.
- [ ] Update the Sprint tracker and `STATUS.md` with factual scope and evidence only.
- [ ] Report files changed/created/deleted; features; tests; commands/results; dependencies; assumptions; limitations; security and AI-safety controls touched; open questions; unresolved defects; state files updated; and the exact recommended next story.
