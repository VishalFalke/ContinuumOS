# Sprint 2 — Map the Care Journey and Operating Model

## Objective

Show how the care episode works today, how ContinuumOS coordinates it in the future, and where ownership and failure handling sit.

## Required work

- Create one high-level journey map: Pre-Care → Clinic → Diagnostics → Acute Care → Home.
- Create the detailed MVP diagnostic workflow.
- Document the current-state failure points: repeated registration, disconnected records, acknowledgement delay, unclear ownership, referral leakage, payer delays and incomplete follow-up.
- Define the care-episode state model with entry trigger, responsible role, required data, exit condition, escalation condition and prohibited automated action.
- Create an ownership matrix.
- Create a decision-rights matrix.
- Create a system-of-record table.
- Create a failure-path map covering missing encounter, duplicate result, amended result, clinician unavailable, patient mismatch, denied write access and unavailable workflow service.

## Required operating-model distinction

Separate the broad clinic-to-home vision from the deeply detailed diagnostic-to-next-step MVP workflow.

## Sprint exit criteria

- Happy path and failure paths are both visible.
- Every state has an owner and exit condition.
- No failure silently becomes a valid patient episode.
- Human decision gates are explicit.

## Status

- [ ] Not started
- [ ] In progress
- [x] Complete

Sprint 2 is complete as a documented care-journey and operating-model package. This status does not claim implementation, user research, clinical validation, production readiness or achieved outcomes. Open assumptions and validation requirements are carried into Sprint 3.

Review cleanup completed on 2026-07-16: decision-rights and system-of-record CSVs were regenerated with valid quoting and aligned columns; accountability assignments were split and standardized; and the failure-path map was expanded with additional source-data and acknowledgement-write failures.

Canonical dependency alignment completed on 2026-07-16: the authority hierarchy, canonical AI scope, role vocabulary, referral and financial accountability, urgent-escalation policy D12 and superseded Sprint 1 wording were aligned before Sprint 3. This is documentation alignment only; implementation and validation remain future work.

Business-value and external-learning context was added to the traceability package on 2026-07-18. The additions are explicitly non-canonical: they do not change workflow states, scope boundaries, human-control rules or AI limits. Capacity, workforce, cost and financial effects remain hypotheses requiring baseline discovery and pilot measurement.

Sprint 4 architecture-control propagation was applied on 2026-07-18 to the canonical alignment register, failure-path map and system-of-record table. It adds non-blocking AI failure behaviour and linked append-oriented audit corrections and records Decision Register D13–D18 without adding a state, decision owner, integration or implementation claim.
