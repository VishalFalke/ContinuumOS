# ContinuumOS synthetic clickable prototype

This folder is the isolated frontend workspace for the approved Sprint 6 synthetic prototype. It intentionally contains no application code or package configuration until Increment 6.0 implementation is approved to begin.

## Intended structure

- `src/app/` — application shell and controlled screen navigation contract
- `src/components/` — shared accessible workflow components
- `src/domain/` — approved workflow states, deterministic event rules and route guards
- `src/fixtures/` — local, synthetic JSON fixtures only
- `src/styles/` — design tokens and global accessible styles
- `src/tests/` — focused unit, interaction and accessibility checks
- `public/` — static, synthetic prototype assets only

No live APIs, source-system write-back, production authentication, real patient data, or real AI calls belong in this workspace.

See `Sprints/Sprint_6_Prototype_Build_Testing_and_Controlled_Release/increment_6_0_readiness_assessment.md` for the recorded pre-implementation gates.

## Build references

- `docs/design-foundations.md` — shared visual tokens and accessibility floor
- `docs/implementation-guardrails.md` — Builder boundary and safe coding rules
- `docs/screen-delivery-checklist.md` — per-story implementation and handoff checks
- `docs/source-of-truth-map.md` — links to the authoritative project controls
