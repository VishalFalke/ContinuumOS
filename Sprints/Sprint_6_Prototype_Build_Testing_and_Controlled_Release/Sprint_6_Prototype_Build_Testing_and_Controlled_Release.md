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
- [x] In progress
- [ ] Complete

## Increment 6.0 readiness and scaffold

On 2026-07-26, the Product Owner authorised the start of Increment 6.0 foundation preparation while explicitly deferring application code. `increment_6_0_readiness_assessment.md` records the checked RACI, RAID, source-of-truth, operating-control, data-flow, QA, permission, integration, security and MVP-versus-future-architecture boundaries. A non-executable isolated scaffold was created under `prototype/`; it contains a structure README and empty intended source, fixture, test and public folders only. The assessment records three open implementation blockers: runtime selection, synthetic fixture/state-event implementation and executed QA evidence. No screen, API, source write-back, authentication, real AI call, test, defect, release or validation result is claimed.

On 2026-07-26, ENAB-601 implemented the local React/TypeScript/Vite runtime and a foundation-only accessible shell in `prototype/`. The shell centralises the ten approved `SCR-01` to `SCR-10` identifiers, presents placeholders only, labels the prototype as synthetic and makes no clinical, referral, identity, closure, AI or source-system action available. Unknown route identifiers resolve to the reserved `SCR-07` safe-return contract. The static shell includes native navigation buttons, visible focus styling, a skip link, textual status and reduced-motion support. `npm run lint`, `npm run test` and `npm run build` passed; actual evidence is recorded as `T-ENAB-601-01` and `T-ENAB-601-02` in `test_execution_evidence.csv`. This is local build evidence only, not screen completion, accessibility certification, user testing, clinical validation, deployment or release evidence.

On 2026-07-26, ENAB-602 added local synthetic JSON fixtures and pure deterministic state/event rules under `prototype/src/`. The approved Asha Mehta tracer includes report versions one and two, configured Observation references and separate simulated completion evidence. The rules enforce verified linkage and the approved fixture-specific T04 result check; route missing linkage/incomplete evidence to owner-specific safe-return exceptions; append duplicate audit evidence without advancing state twice; and return an amended current report to `Clinical Review Pending` while retaining prior acknowledgement history and flagging downstream reassessment. Six Node tests, TypeScript lint and a local Vite production build passed; `T-ENAB-602-01`, `T-ENAB-602-02` and `SDR-ENAB-602-01` record the observed evidence. No screen workflow, live API, source write-back, authentication, real AI, autonomous decision, release, clinical validation or deployment was implemented or claimed.

On 2026-07-26, ENAB-603 added reusable accessible state/owner/next-action and synthetic journey-rail components, then COS-601 and COS-602 used them in the approved simulated access path and verified episode workspace. SCR-01 reveals no protected synthetic context until local simulated authorisation and verified linkage pass. Its represented unavailable-access condition routes to the minimum SCR-07 safe-return foundation, which shows the affected state, accountable owner, prohibited action, audit references and safe return. SCR-02 is view-only: it shows synthetic episode context, canonical state, owner, next action, separate source/internal evidence and distinct completion versus result-availability evidence. It exposes no acknowledgement, direction, referral, identity-reconciliation or closure action; those remain later stories. Eight Node tests, TypeScript lint and a local Vite production build passed; `T-COS-601-01` and `T-COS-602-01` record factual evidence. No live SMART/OAuth flow, source write-back, real AI, user research, clinical validation, release or deployment is claimed.

On 2026-07-26, the implemented SCR-01, SCR-02 and minimum SCR-07 surfaces were rechecked against the authoritative Sprint 5 `screen_specifications_and_wireframe_pack.md`. Minor alignment corrections made the unavailable review-task control explicit on SCR-02 and made the missing task age/due context explicit rather than implied. The design continues to preserve the wireframe's protected-context gate, state/owner/next-action hierarchy, distinct source and internal evidence, non-canonical journey rail, and safe-return route. No screen scope, route, authority, state, business rule, data field or controlled baseline changed. Local Node tests, TypeScript lint and production build passed again.

On 2026-07-26, COS-603 implemented SCR-03 from the approved Sprint 5 wireframe. The local review assignment identifies the current amended report version and the assigned Clinic physician. The screen shows read-only source/report version evidence, assigned-reviewer/due context and an explicit acknowledgement control. Deterministic validation blocks stale versions and unassigned actors. A successful synthetic acknowledgement records the result state and the next `Follow-up Decision Required` state without implementing direction; an incomplete-result demonstration routes to SCR-07. Ten Node tests, TypeScript lint and a local Vite production build passed; `T-COS-603-01` records factual evidence. No clinical interpretation, diagnosis, AI assistance, referral, communication, source write-back, real authentication, release, clinical validation or deployment was implemented or claimed.

On 2026-07-26, COS-604 implemented SCR-04 from the approved Sprint 5 wireframe. The synthetic Clinic physician must explicitly select exactly one approved direction—clinic management, day-care referral or hospital escalation—and record rationale/evidence against acknowledged report version two. The prototype makes no AI recommendation, ranking or preselection. Clinic management stays at `Follow-up Decision Required` until a separate synthetic Care Coordinator verifies T08 named owner, timeframe, next task and applicable communication evidence; only then does the prototype show `Next Step Confirmed`, without changing the physician direction. Referral/escalation set `Referral Created` only; no referral routing is implemented before COS-605. Thirteen Node tests, TypeScript lint and a local Vite production build passed; `T-COS-604-01` records factual evidence. No clinical automation, real authentication, source write-back, referral delivery, release, clinical validation or deployment was implemented or claimed.

On 2026-07-26, the Product Owner requested a professional, more modern and user-friendly presentation for the ENAB-601 shell. The visual-only refinement uses an accessible navy, slate and teal token system, stronger header and route hierarchy, a restrained brand mark, clearer navigation helper text, deliberate surface spacing and colour-independent textual status. It preserves all route IDs, screen labels, workflow scope, human-control rules and safe-return behaviour; no controlled baseline change was required. Local lint, route-contract tests and production build passed again, and the rendered desktop shell was visually inspected; `T-ENAB-601-03` records this actual evidence. It is not a usability study or accessibility certification.

On 2026-07-26, a controlled prototype reference pack was added under `prototype/docs/`: visual foundations, implementation guardrails, a per-screen delivery checklist and a map to the authoritative Sprint artifacts. `codex-handoff.md` now provides the Sprint 6 task-contract template. `AGENTS.md`, `PROJECT_RULES.md` and `CODEX.md` were strengthened with Builder boundaries, surgical editing, destructive-action, dependency, verification, Git, approval-gate and disabled-loop rules. These are delivery controls only; they add no product requirement, screen, workflow, state, role, data field, architecture component, AI capability or test result.

On 2026-07-26, the Product Owner directed that `behavioral-ux-human-ai-design` be used whenever relevant to prototype work. The permanent and Sprint 6 controls now require its proportional application to frontend/workflow clarity, authority, recovery, accessibility and AI-human separation, alongside the project-local design standards. The handoff contract and screen checklist now require complete continuation context: files, features, tests, commands/results, dependencies, assumptions, limitations, security/AI-safety areas, questions, defects and state/evidence updates. No product or implementation scope changed.

On 2026-07-26, COS-610 implemented SCR-10 from the approved Sprint 5 wireframe for the synthetic accepted day-care-referral path. The Care Coordinator sees human direction, receiving acceptance, owner/destination/timeframe, communication approval/sender/channel/delivery, explicit patient/caregiver confirmation and safety-exception evidence as distinct fields. `EVT-16` records `Next Step Confirmed` only after the complete visible evidence check; `EVT-22` is a separate, later human-owned action that records `Episode Completed` solely as diagnostic-closure workflow completion. Missing evidence, wrong state, open safety-blocking exception and repeated submissions remain blocked and expose the approved safe exception route. Thirty-one Node tests, TypeScript lint and a local Vite production build passed; `T-COS-610-01` records factual evidence. No automatic confirmation or closure, live communication, clinical decision, source write-back, AI authority, clinical validation, release or deployment is implemented.

## Jira-style delivery planning

On 2026-07-26, COS-609 implemented SCR-09 as the approved read-only synthetic audit trace. It renders chronological event/outcome, actor/source, timestamp and source/version evidence across source, human-decision, workflow, exception, recovery and AI-disposition categories. Filtering only changes the visible local trace; corrections/recovery are represented as separate attributable entries and the screen offers no destructive correction, workflow action or state change. Twenty-eight Node tests, TypeScript lint and a local Vite production build passed; `T-COS-609-01` records factual evidence. This is not a production audit platform, clinical validation, release or deployment.

On 2026-07-26, COS-608 implemented SCR-08 as the approved local synthetic AI review surface. It supports only AI-01 source-linked orientation and AI-02 post-approval referral-handoff draft context, visibly labelled as optional AI-generated drafts with source links/versions, generated time and uncertainty. Deterministic role, source-version, referral-direction, stale/unavailable and canonical disposition controls preserve manual source-based routes to SCR-03/SCR-05; no AI disposition changes state or substitutes for a human decision. Twenty-five Node tests, TypeScript lint and a local Vite production build passed; `T-COS-608-01` records factual evidence. This is not a model call, evaluation result, clinical validation, source write-back, release or deployment.

On 2026-07-26, COS-607 implemented the full approved SCR-07 exception queue and detail surface. It shows five representative approved exception conditions with affected work, accountable owner, prohibited action, safe action, safe-return condition and EVT-19/EVT-21 evidence. The specific accountable role must provide verified resolution evidence before the local prototype records a recovery; failed or duplicate recovery remains open and cannot create a second state advance. Resolution returns only to the represented last verified core-work screen, and does not create/repeat a clinical, identity, referral, financial, confirmation or closure decision. Twenty-two Node tests, TypeScript lint and a local Vite production build passed; `T-COS-607-01` records factual evidence. No live reconciliation, source write-back, AI, authentication, clinical validation, release or deployment is implemented.

On 2026-07-26, COS-606 implemented SCR-06 from the approved Sprint 5 wireframe. The local response form keeps the receiving-team decision actor distinct from a Referral Coordinator recording received evidence. It requires a non-preselected acceptance/rejection choice, named receiving decision actor, valid routed package/send context, acceptance destination/timeframe or rejection reason, and explicit confirmation before synthetic `EVT-14` recording. Acceptance records `Referral Accepted` only and leaves next-step confirmation to SCR-10; rejection records `Referral Rejected`, preserves package/send history and returns visible work to SCR-04 for a new Clinic physician direction without automatic rerouting. Nineteen Node tests, TypeScript lint and a local Vite production build passed; `T-COS-606-01` records factual evidence. No live receiving-team integration, source write-back, AI, authentication, clinical validation, release or deployment is implemented.

On 2026-07-26, COS-605 implemented SCR-05 from the approved Sprint 5 wireframe. The configured synthetic Referral Coordinator prepares the local operational package only after the approved day-care referral direction and current report v2. Routing remains disabled until destination, required-field completeness, Referral Coordinator approval and applicable Clinic physician clinical-content approval are present. An explicit route records synthetic package/send-attempt evidence only (`EVT-12` and `EVT-13`), keeps the workflow in `Referral Created`, blocks duplicate automatic send and routes a represented send failure to safe human correction/retry. No AI draft/review, automatic routing, delivery confirmation, receiving-team workflow, source write-back, real authentication, clinical validation, release or deployment is implemented. Sixteen Node tests, TypeScript lint and a local Vite production build passed; `T-COS-605-01` records factual evidence.

On 2026-07-26, a Jira-style delivery backlog was added in `jira_style_sprint_6_delivery_backlog.md`. It translates the approved Sprint 5 baseline into proposed epics, internal delivery increments, stories, relative estimates, dependencies, Definition of Ready, Definition of Done and test/release sub-tasks. Each epic now has a Jira-style hypothesis statement covering target user, problem, solution, differentiator, proposed outcome, planned leading indicators and non-functional controls. The build-story ticket bodies use explicit `As a / I want / so that` user stories and `Given / When / Then` acceptance criteria alongside links to the authoritative Sprint 5 catalogue. It maps the 48 RTM screen-specific requirements to their story and the five RTM `ALL` non-functional requirements to cross-cutting foundation/quality work, confirming coverage of the 53 approved prototype requirements while retaining the three roadmap requirements as deferred. It is planning only: no Jira workspace, code, test, defect, estimate acceptance, team capacity or release result is claimed. It preserves all ten approved screens and the controlled requirement baseline; the early safe-return foundation is sequencing for the approved `SCR-07` exception route, not new scope.

## Pre-build portfolio framing

On 2026-07-25, the user requested a portfolio-framing and strategy package before implementation: a first-adopter boundary, build/buy/partner judgement, three delivery slices, lean delivery model and proposed learning hypotheses. These documentation controls do not change the approved Sprint 5 requirements baseline or start prototype implementation, testing, user review, release or validation.

On 2026-07-25, the user also approved a linked hospital-systems discovery context, problem-coverage matrix and openEHR-to-FHIR decision clarification. They show the wider hospital landscape and explain the selected architecture boundary; they do not add a Sprint 6 requirement, screen, state, integration, AI capability or test obligation.

On 2026-07-26, the portfolio summary added a compact product-strategy and trade-off view covering differentiation, workflow pipeline, governance/readiness, opportunity allocation and ecosystem leverage. It summarises existing decisions only and does not change the Sprint 6 baseline.

On 2026-07-26, Sprint 6 planning was enhanced with usage-based validation profiles, explicit strategic/resource and market-evidence boundaries, and qualitative continue/change/defer/stop decision signals. These controls guide role attribution, testing, defect/change decisions and release review; they do not add a requirement, screen, state, AI capability, market claim, staffing commitment or regulatory claim.

On 2026-07-26, the Sprint 6 prototype boundary was corrected from an erroneous seven-screen reference to all ten approved screens, `SCR-01` through `SCR-10`. This aligns the build plan with the Sprint 5 screen specification, navigation map and approved prototype-readiness baseline; it restores the documented count and does not add or remove scope.

On 2026-07-26, the seven combined capability bullets under `Required screens` were replaced with the exact ten canonical screen IDs and titles. Sprint 6 planning also added explicit interaction/loading evidence fields and an AI evaluation rubric with safety release gates. These are planning controls only; no screen, test result, defect, model-quality result or release decision is claimed.

On 2026-07-26, the architecture package added a Sprint 6 prototype-runtime view and a separately labelled future legacy/API integration reference pattern. The build plan now points to a real clickable frontend with deterministic prototype logic and project-controlled JSON fixtures, while excluding live hospital APIs, a production backend, real AI calls and source write-back.

On 2026-07-26, Sprint 6 planning added `product_safety_hazard_and_control_register.csv`. It applies qualitative severity, potential harm scope, immediacy and reversibility to seven existing workflow/AI hazards and traces prevention, detection, recovery, ownership, planned evidence and release response. No probability, observed harm, clinical-validation result or mitigated-risk claim is recorded.

## User-approved UX refinement

On 2026-07-26, a user-approved visual and navigation refinement replaced the internal delivery-ID navigation with plain-language workflow tasks grouped into care workflow and support/traceability. The shared layout now prioritises current state, accountable owner, next action and a contextual case journey; internal IDs remain in code and audit traceability rather than the primary user interface. The refinement preserved all ten approved routes, existing deterministic state/action rules, role boundaries, safe-return paths, synthetic-data labelling and AI-human separation. TypeScript lint, all 31 local Node tests and local Vite production build passed. Browser verification confirmed the renamed `Review result` navigation opened the correct result-review route. This is a visual and navigation refinement only, not a usability study, clinical validation, release, deployment or controlled-baseline change.

## Evidence boundary

All prototype data, FHIR responses, events and failures are simulated. This sprint does not claim production deployment, clinical validation or outcomes.
