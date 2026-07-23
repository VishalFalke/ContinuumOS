# Sprint 6 — Prototype Build, Testing and Controlled Release

## Objective

Build the clickable MVP from the approved Sprint 5 baseline, execute test scenarios, record defects and demonstrate a controlled Release 0.1 to Release 0.2 improvement cycle.

## Required screens

1. SMART launch and access handling
2. Care Coordinator episode workspace
3. Clinician result review and acknowledgement
4. Follow-up direction and referral handoff
5. Receiving-team response and next-step confirmation
6. Exception and reconciliation workspace
7. Episode timeline, audit and AI trace

Optional roadmap previews may show surgical readiness, discharge readiness and home monitoring. They must be labelled as roadmap concepts and excluded from the MVP traceability baseline.

## Required artifacts

- `prototype_build_and_release_plan.md`
- `test_execution_evidence.csv`
- `ai_evaluation_results.csv`
- `defect_log_and_triage_matrix.csv`
- `requirements_and_prototype_change_log.csv`
- `release_0_1_notes.md`
- `release_0_2_notes.md`
- `go_no_go_rollback_and_pilot_entry_criteria.md`
- `uat_readiness_and_signoff_tracker.csv`
- `synthetic_data_validation_and_reconciliation_tracker.csv`
- `test_strategy_and_test_level_matrix.md`
- `defect_triage_and_release_policy.md`

## Planned project-governance application

Sprint 6 will apply the Sprint 5 project-governance plan to prototype baseline changes, defect triage, release decisions, RAID escalation and readiness-gate reporting. Actual decisions, participants and meeting outcomes must be recorded only if they occur.

This delivery governance is separate from the product's clinical, data, AI and operational governance. Sprint 6 must preserve the approved human-control, source-authority and AI-fallback boundaries; it does not validate production governance or claim organisational approval.

The UAT tracker records readiness and sign-off evidence; the reconciliation tracker records synthetic-fixture linkage, version/state, discrepancy and retest evidence. Neither artifact substitutes for clinical validation, live data reconciliation or production deployment controls.

## Design and implementation controls

Before designing or implementing any screen, read `design skills/README.md` and its six referenced standards. Accessibility, human review, workflow clarity and failure-state visibility are mandatory; apply the required accessibility, reduced-motion, React performance and React quality checks before Sprint 6 handoff.

Build each screen only from the approved Sprint 5 `screen_specifications_and_wireframe_pack.md`, its linked state-to-screen navigation record, data dictionary, business rules and acceptance criteria. A new interaction, field, validation or failure state requires a controlled change record before it is implemented.

## Release sequence

Release 0.1 includes valid launch, episode display, result review, acknowledgement, follow-up direction, referral handoff, receiving response, next-step confirmation, exceptions and audit timeline.

Execute the approved functional and failure scenarios. Record actual results; do not invent results. Evaluate AI against source-link accuracy, unsupported statements, critical omissions, wrong patient, wrong report version, prohibited recommendations, clinician correction and fallback success.

Execute unit checks, simulated integration testing and UAT as distinct test levels. Use the approved Sprint 5 relative-estimation method only for buildable stories; do not convert points into delivery commitments or unsubstantiated budgets.

Release 0.2 corrects the highest-value defects and updates the requirements, business rules, acceptance criteria, prototype, traceability, test scenarios, decision log and change log.

## Sprint exit criteria

- The end-to-end MVP workflow is clickable.
- Critical failure paths are demonstrated.
- Tests have actual recorded results.
- Defects are linked to requirements.
- Release 0.2 visibly improves Release 0.1.
- No open Critical defect remains.
- AI fallback works when AI output is unsafe or unavailable.
- The release decision is documented.
- Prototype limitations are clearly stated.
- Any scope, priority or baseline change is linked to the approved project-governance change-control record.
- Every built screen traces to an approved Sprint 5 screen specification and low-fidelity wireframe.
- Unit, SIT and UAT evidence are distinguishable and linked to requirements, defects and release decisions.

## Status

- [ ] Not started
- [ ] In progress
- [ ] Complete

## Evidence boundary

All prototype data, FHIR responses, events and failures are simulated. This sprint does not claim production deployment, clinical validation or outcomes.
