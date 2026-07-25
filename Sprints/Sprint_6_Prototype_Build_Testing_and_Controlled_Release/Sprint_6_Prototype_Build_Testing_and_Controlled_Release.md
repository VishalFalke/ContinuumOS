# Sprint 6 — Prototype Build, Testing and Controlled Release

## Objective

Build the clickable MVP from the approved Sprint 5 baseline, execute test scenarios, record defects and demonstrate a controlled Release 0.1 to Release 0.2 improvement cycle.

## Required screens

1. `SCR-01` — Simulated SMART launch and access status
2. `SCR-02` — Episode workspace and timeline
3. `SCR-03` — Result review and acknowledgement
4. `SCR-04` — Follow-up direction
5. `SCR-05` — Referral handoff preparation and routing
6. `SCR-06` — Receiving response
7. `SCR-07` — Exception queue and exception detail
8. `SCR-08` — AI draft review
9. `SCR-09` — Audit and trace
10. `SCR-10` — Next-step confirmation and scoped closure

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
- `ai_evaluation_rubric_and_release_thresholds.md`
- `product_safety_hazard_and_control_register.csv`

## Artifact readiness at Sprint 6 entry

These files were created before Sprint 6 to provide controlled starting structures. They are not evidence that Sprint 6 has begun or that its exit criteria are met.

| Artifact group | Entry status | Sprint 6 obligation |
|---|---|---|
| `prototype_build_and_release_plan.md`, `test_strategy_and_test_level_matrix.md`, `defect_triage_and_release_policy.md`, `go_no_go_rollback_and_pilot_entry_criteria.md`, `ai_evaluation_rubric_and_release_thresholds.md` and `product_safety_hazard_and_control_register.csv` | Pre-created with substantive planning or control content | Apply them during implementation and update only from recorded decisions or evidence |
| `test_execution_evidence.csv`, `ai_evaluation_results.csv`, `defect_log_and_triage_matrix.csv`, `requirements_and_prototype_change_log.csv`, `uat_readiness_and_signoff_tracker.csv` and `synthetic_data_validation_and_reconciliation_tracker.csv` | Pre-created evidence templates; no executed results recorded | Populate from actual tests, reviews, defects, reconciliation and change control |
| `release_0_1_notes.md` and `release_0_2_notes.md` | Pre-created release-note shells | Replace pending sections with actual build, test, correction and release evidence |

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

For every applicable screen, record the authorised validation profile and the observed initial, loading, unavailable, error, success and recovery feedback. Do not report latency or responsiveness figures unless the prototype has an explicit measurement method and recorded evidence.

Apply `ai_evaluation_rubric_and_release_thresholds.md` before recording an AI result. A fluent output is not a pass when a critical source, identity, version, authority or fallback control fails.

The single synthetic tracer and pre-written JSON outputs cannot establish subgroup fairness, representational adequacy or absence of disparate impact. Sprint 6 may record only fixture-level observations. Do not make a fairness claim or invent demographic segments; retain representative-data and subgroup evaluation as a future real-model obligation.

Use `product_safety_hazard_and_control_register.csv` to trace each material hazard from worst credible workflow effect through potential scope, immediacy, reversibility, prevention, detection, recovery, accountable owner, planned test and release response. Its classifications are proposed safety analysis, not observed harm or validated probability.

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
- Interaction-state and loading/unavailable evidence is recorded without converting subjective observation into an unsupported performance claim.
- AI evaluation follows the approved rubric and every executed critical-control scenario has a recorded disposition.
- Every Critical or High safety hazard has linked prevention, detection, recovery and executed test/defect evidence before a release decision.

## Status

- [ ] Not started
- [ ] In progress
- [ ] Complete

## Pre-build portfolio framing

On 2026-07-25, the user requested a portfolio-framing and strategy package before implementation: a first-adopter boundary, build/buy/partner judgement, three delivery slices, lean delivery model and proposed learning hypotheses. These documentation controls do not change the approved Sprint 5 requirements baseline or start prototype implementation, testing, user review, release or validation.

On 2026-07-25, the user also approved a linked hospital-systems discovery context, problem-coverage matrix and openEHR-to-FHIR decision clarification. They show the wider hospital landscape and explain the selected architecture boundary; they do not add a Sprint 6 requirement, screen, state, integration, AI capability or test obligation.

On 2026-07-26, the portfolio summary added a compact product-strategy and trade-off view covering differentiation, workflow pipeline, governance/readiness, opportunity allocation and ecosystem leverage. It summarises existing decisions only and does not change the Sprint 6 baseline.

On 2026-07-26, Sprint 6 planning was enhanced with usage-based validation profiles, explicit strategic/resource and market-evidence boundaries, and qualitative continue/change/defer/stop decision signals. These controls guide role attribution, testing, defect/change decisions and release review; they do not add a requirement, screen, state, AI capability, market claim, staffing commitment or regulatory claim.

On 2026-07-26, the Sprint 6 prototype boundary was corrected from an erroneous seven-screen reference to all ten approved screens, `SCR-01` through `SCR-10`. This aligns the build plan with the Sprint 5 screen specification, navigation map and approved prototype-readiness baseline; it restores the documented count and does not add or remove scope.

On 2026-07-26, the seven combined capability bullets under `Required screens` were replaced with the exact ten canonical screen IDs and titles. Sprint 6 planning also added explicit interaction/loading evidence fields and an AI evaluation rubric with safety release gates. These are planning controls only; no screen, test result, defect, model-quality result or release decision is claimed.

On 2026-07-26, the architecture package added a Sprint 6 prototype-runtime view and a separately labelled future legacy/API integration reference pattern. The build plan now points to a real clickable frontend with deterministic prototype logic and project-controlled JSON fixtures, while excluding live hospital APIs, a production backend, real AI calls and source write-back.

On 2026-07-26, Sprint 6 planning added `product_safety_hazard_and_control_register.csv`. It applies qualitative severity, potential harm scope, immediacy and reversibility to seven existing workflow/AI hazards and traces prevention, detection, recovery, ownership, planned evidence and release response. No probability, observed harm, clinical-validation result or mitigated-risk claim is recorded.

## Evidence boundary

All prototype data, FHIR responses, events and failures are simulated. This sprint does not claim production deployment, clinical validation or outcomes.
