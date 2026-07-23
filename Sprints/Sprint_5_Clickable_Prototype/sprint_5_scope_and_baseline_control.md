# Sprint 5 Scope and Baseline Control

## In-scope MVP workflow

SMART/EHR launch and access handling; Care Coordinator episode workspace; clinician result review and acknowledgement; follow-up direction; referral handoff; receiving-team response; next-step confirmation; exception management; episode audit and AI trace.

## Sprint delivery sequence

Sprint 5 is delivered in three dependency-ordered parts:

1. **Part 1 — baseline and core requirements:** lock source authority, define the BRD-lite, and capture reviewed business, functional, technical and control requirements.
2. **Part 2 — traceability and operating controls:** connect reviewed requirements to workflow states, actors, business rules, data/events, risks and future test scenarios.
3. **Part 3 — prototype readiness review:** define screen and navigation coverage, prioritise the build backlog and scenarios, then review the complete set for approval for the Sprint 6 clickable-prototype baseline.

Part 1 records requirements as `Reviewed`. `Approved for prototype` is assigned only in Part 3 after the complete traceability, control and screen-coverage review. This avoids treating drafted documentation as an approved build instruction.

## Baseline authority

The following sources govern Sprint 5. Where wording differs, retain the more specific approved decision and record any proposed change before use:

1. Sprint 1 canonical state transition table, decision register, tracer and scope/metric definitions.
2. Sprint 2 decision-rights, system-of-record, operating-control and failure-path artifacts.
3. Sprint 3 MVP scope freeze, jobs and acceptance conditions, field/FHIR maps, permissions and integration flow.
4. Sprint 4 architecture boundary, SMART launch sequence, event/recovery contract, AI service cards and audit/analytics contract.

The prototype uses synthetic data and simulated integrations only. ContinuumOS remains an orchestration overlay: source systems remain authoritative for patient, encounter, diagnostic and source operational records; ContinuumOS owns internal workflow visibility, tasks, exceptions, communication status and workflow history.

## Deferred scope

Record deferred work in the consolidated requirements register using the `Deferred` status and the `later release` or `roadmap` release assignment.

## Requirement status definitions

| Status | Definition |
|---|---|
| Draft | Requirement has been captured but not reviewed. |
| Reviewed | Requirement has passed an internal source-alignment review against the approved Sprint 1–4 baseline. It is not stakeholder approval, implementation evidence or authorisation to build. |
| Approved for prototype | Requirement has passed the final Sprint 1–4 traceability, decision-authority, data/event, screen and acceptance-criteria review and is authorised for the Sprint 6 clickable prototype baseline. |
| Deferred | Requirement is not included in the current prototype baseline. |
| Rejected | Requirement will not be taken forward. |
| Superseded | Requirement has been replaced; retain its source and replacement reference. |

## Change-control method

Record every proposed change in the requirements register and traceability matrix. Preserve the source reference, affected requirement, decision, status and release assignment before it is used in the prototype.

The `consolidated_requirements_register.csv` and `requirements_traceability_matrix.csv` operate as one controlled baseline. The register owns the requirement wording, actor, workflow stage/state, business rule, priority, release, acceptance reference and lifecycle status. The matrix owns structured traceability plus delivery metadata: parent requirement, requirement level/title/description, source artifact/ID, owner, author, business value/impact, related user story, acceptance, planned test/UAT phase, sign-off owner, lifecycle dates, decision/capability, planned screen, event, data-contract and prototype-scenario references. A change is incomplete until both records remain aligned.

Screen and UAT identifiers in Sprint 5 are planned traceability identifiers only. They do not establish that a screen has been built or a test has been executed. Actual build and test results belong in Sprint 6.

## Portfolio evidence and decision control

Sprint 5 must show why the product boundary and AI boundary were selected, not only what the requirements say. Each material prioritisation or scope decision must retain its problem/job, evidence classification, human-control impact, reason for inclusion or deferral, downstream validation need and approval status.

Requirements may be approved for the Sprint 6 prototype only when they are traceable to the Sprint 1–4 baseline and have an authorised actor, atomic acceptance criteria, failure behaviour and planned prototype/test coverage. A proposed measure without a baseline or target remains a measurement definition or pilot hypothesis; it must not be converted into an outcome claim.

## Added delivery-management planning controls

Part 2 will add the product roadmap, stakeholder-engagement plan, project-governance plan/control calendar and AI approach decision record. Part 3 will apply MoSCoW plus impact-versus-effort assessment when proposing the prototype backlog. None of these additions changes the approved product scope, human decision rights, source authority or AI boundary.

The prioritisation matrix must record value, impact, effort, delay consequence, dependencies, blocking status and release decision as qualitative planning inputs. It must not invent currency amounts, financial profit or cost savings for this hypothetical synthetic case. The four-diagram pack provides process, system context, logical data-relationship and state-lifecycle views derived from existing canonical sources; it is not a new design authority.

Before Part 3, Sprint 5 must turn the existing state-to-screen navigation plan into a screen-specification and low-fidelity wireframe pack. For every `SCR-01` to `SCR-10`, it must specify the linked requirement and acceptance criteria, role/permission, visible source-linked fields, allowed action, required validation, empty/loading/error/exception behaviour, state/navigation outcome and audit evidence. Sprint 6 may implement only from this approved pack or from a formally recorded change; the pack is a design specification, not a built prototype.

Project governance covers delivery roles, decision rights, planned cadence, baseline approval, change control, RAID review, escalation, dependencies, status reporting and Sprint 5--7 gates. It is distinct from product governance: the existing clinical, data, AI and operational controls remain their own product-safety and evidence-boundary controls.

Sprint 5 also defines epics, story-estimation method, dependency sequencing and SLA/OLA operating semantics. Relative points may be assigned only to approved Sprint 6 stories; qualitative priority and delay consequence are not monetary budgeting. The populated RACI and RAID represent planned delivery accountability and risks, not completed meetings, accepted risks or stakeholder approvals.

## Exit criteria

Use the Sprint 5 tracker exit criteria as the baseline-control checklist.
