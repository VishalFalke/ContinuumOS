# Sprint 5 — Requirements Baseline and Solution Definition

## Objective

Convert the approved Sprint 1–4 product, workflow, architecture, data and AI-control decisions into one controlled MVP requirement baseline from which the prototype can be built and tested.

## Scope

Detailed requirements only for SMART/EHR launch and access handling; Care Coordinator episode workspace; clinician result review and acknowledgement; follow-up direction; referral handoff; receiving-team response; next-step confirmation; exception management; and episode audit and AI trace.

## Workstreams and required artifacts

1. Sprint scope and baseline control — `sprint_5_scope_and_baseline_control.md`
2. BRD-lite — `brd_lite.md`
3. Consolidated requirements register — `consolidated_requirements_register.csv`
4. Requirements Traceability Matrix — `requirements_traceability_matrix.csv`
5. RACI plus decision-authority matrix — `raci_and_decision_authority_matrix.csv`
6. RAID register — `raid_register.csv`
7. Business-rule and validation catalogue — `business_rule_and_validation_catalogue.md`
8. Data dictionary and screen-field mapping — `data_dictionary_and_screen_field_mapping.csv`
9. State-to-screen navigation map — `state_to_screen_navigation_map.csv`
10. Prioritised backlog and prototype scenarios — `prioritised_backlog_and_prototype_scenarios.md`

## Required controls

- Requirement statuses: Draft, Reviewed, Approved for prototype, Deferred, Rejected, Superseded.
- The consolidated register must cover BR, FR, NFR, TR, user stories, acceptance criteria, priority, source references and prototype release assignment.
- Trace every MVP need from problem through business requirement, workflow/state, functional requirement, data/event, screen, acceptance criterion and test scenario.
- Preserve the approved human decision rights: referral decision, patient matching and clinical acknowledgement remain human-controlled. AI may only operate within the approved Sprint 1–4 boundary.
- Do not create a new screen or feature without traceability.

## Sprint exit criteria

- Every MVP screen is supported by approved requirements.
- Every important action has an authorised actor.
- Every functional requirement has acceptance criteria.
- Every critical workflow state has defined entry and exit conditions.
- Every significant failure has defined behaviour.
- Every important field has an approved source and missing-data response.
- Every MVP requirement traces to a test scenario.
- Deferred scope is clearly separated.
- No new screen or feature exists without traceability.

## Status

- [ ] Not started
- [x] In progress
- [ ] Complete

## Delivery progress

- [x] Part 1 — baseline authority, enhanced BRD-lite, product-selection rationale, evidence classification, measurement plan, reviewed core requirements, atomic acceptance criteria, user stories and patient-journey coverage corrections completed on 2026-07-18.
- [ ] Part 2 — traceability and operating controls. Requirement-level structured traceability is complete; RACI, RAID, rule/validation and data-field controls remain pending.
- [ ] Part 3 — prototype readiness review and approval baseline.

## Senior product and BA evidence carried forward

## Part 2A progress

- [x] `SCR-01` to `SCR-03` now have planned screen specifications and low-fidelity wireframes, including a minimal synthetic Asha Mehta journey rail, completed on 2026-07-23. This is specification work only; it does not approve requirements for prototype or claim a built screen, image, animation, integration or AI capability.
- [x] `SCR-04` to `SCR-06` now have planned screen specifications and low-fidelity wireframes for human follow-up direction, referral handoff and receiving response, completed on 2026-07-24. The approved Asha journey rail continues as supporting visual context. No workflow state, role, source authority or AI boundary changed; no prototype is claimed as built.
- [x] `SCR-07` to `SCR-10` now have planned screen specifications and low-fidelity wireframes for exceptions, AI review, audit/trace and next-step confirmation/scoped closure, completed on 2026-07-24. No workflow state, authority, source boundary or AI boundary changed; no prototype is claimed as built.
- [x] Ten-screen alignment correction completed on 2026-07-24. Canonical synthetic identifiers, RTM-primary versus supporting traceability, explicit acceptance references, role-specific actions, T08/T09/T11/T14 routing, AI-review return paths, safe exception returns and disabled incomplete-evidence actions were reconciled across the specification pack and navigation map. This was an internal specification review only; no screen was built, tested or approved for prototype.
- [ ] Next: complete the cross-screen data dictionary/screen-field mapping and the detailed business-rule and validation catalogue, then perform the Part 3 readiness review.

- Sprint 5 records why the diagnostic-closure wedge, deterministic controls, two-capability AI boundary and deferred scope were selected.
- Problem statements are separated from assumptions, proposed capabilities and pilot hypotheses.
- Measures define calculation and target-setting discipline without inventing baselines, targets or outcomes.
- Sprint 6 must demonstrate a complete journey, a critical exception, amended-result re-review and controlled evaluation/fallback for both AI assists.
- Sprint 7 must record reviewer/synthetic-pilot evidence, resulting product decisions, limitations and portfolio reflection.

## Requirements-register control status

- 56 register entries have one-to-one structured traceability records.
- Every traceability record includes the structured source/state/event/data/screen/test chain plus requirement title/description, owner, business value, related user story, target release, sign-off and lifecycle metadata.
- FR-23, FR-26 and FR-28 remain `Deferred` in both artifacts.
- No requirement is `Approved for prototype`; approval remains a Part 3 decision after all Sprint 5 exit controls are complete.

## Added planned artifacts and controls

The following Sprint 5 planning artifacts are required before the prototype readiness review. They remain unstarted until separately completed:

1. `product_roadmap_and_delivery_horizons.md` -- synthetic MVP, prototype-validation, pilot-readiness and later-product horizons, with intended outcome, dependencies, owner, decision gate and evidence status.
2. `moscow_impact_effort_prioritisation_matrix.csv` -- MoSCoW and impact-versus-effort assessment for backlog items. Safety, human-control, scope and dependency constraints remain gating conditions.
3. `stakeholder_engagement_and_decision_plan.md` -- stakeholder, decision or evidence informed, planned engagement point, input sought, owner and expected artifact. This is not evidence that engagement occurred.
4. `project_governance_plan_and_control_calendar.md` -- delivery roles, decision forums, cadence, baseline/change control, RAID review, escalation, dependency review, reporting and Sprint 5--7 decision gates.
5. `ai_approach_decision_record.md` -- comparison of controlled prompt-based assistance, retrieval-augmented generation, fine-tuning and non-generative/ML alternatives for the two approved AI jobs, including data, safety, traceability, evaluation and complexity considerations.

Project governance governs how this portfolio work is directed and controlled. It is distinct from clinical, data, AI and operational governance, which govern safe product use and evidence boundaries. The project-governance plan may cross-reference those product controls but must not redefine clinical authority, data ownership or AI permissions.

Additional Sprint 5 controls now included in this plan are `definition_of_ready_and_done.md`, `open_questions_and_resolution_log.csv` and `four_diagram_traceability_pack.md`. Together with the requirements register, RTM, RACI and RAID, they form a compact senior-BA delivery-control set without introducing a duplicate product specification.

`screen_specifications_and_wireframe_pack.md` is also a required Sprint 5 pre-development artifact. It will define each planned screen (`SCR-01` to `SCR-10`) using linked requirements, actors/permissions, fields and source, user actions, validations, empty/loading/error/failure states, resulting state or route, audit evidence and a low-fidelity wireframe or annotated layout. It must be completed before Sprint 5 Part 3 baseline approval; it will not claim that a clickable screen has been built.

`epic_story_estimation_and_dependency_map.md` and `sla_ola_and_kpi_operating_model.md` are the Sprint 5 delivery-planning controls for work hierarchy, relative estimation, dependencies, SLA/OLA semantics and KPI ownership. The stakeholder plan now includes a power-interest engagement view; the prioritisation matrix includes urgency and P1/P2/P3 delivery priority. Currency budgets, velocities, actual SLA performance and delivery commitments remain out of scope until supported by recorded evidence.

## Evidence boundary

This sprint defines requirements only. It does not claim prototype implementation, testing, reviewer feedback, pilot activity, production readiness or outcomes.
