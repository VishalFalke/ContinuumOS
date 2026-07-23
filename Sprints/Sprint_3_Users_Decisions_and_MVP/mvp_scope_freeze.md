# Sprint 3 — MVP Scope Freeze and Deferred Capabilities

## Purpose and status

This artifact freezes the Sprint 3 product boundary for downstream architecture and prototype work. It is a portfolio product decision and requirements baseline using synthetic data and simulated integrations. It does not claim implementation, user research, clinical validation, production readiness or achieved outcomes.

## Frozen MVP statement

ContinuumOS demonstrates one synthetic diagnostic-closure and care-escalation episode from verified diagnostic order context through result availability, human clinical acknowledgement, human follow-up direction, an operationally ready handoff, receiving-team response, confirmed next care step and auditable completion of the scoped ContinuumOS workflow.

The product is an orchestration overlay. Source systems remain authoritative for patient, encounter, diagnostic and administrative records. ContinuumOS owns workflow visibility, tasks, exceptions, communication status and workflow history.

## Build-now capability boundary

| Capability | Required behaviour | Human control or source boundary | Acceptance reference |
|---|---|---|---|
| Active care-episode workspace | Show one synthetic patient/encounter episode, current canonical state, owner, age, blocker and next task. | Identity and encounter linkage must be verified; Care Coordinator owns visibility, not clinical authority. | CAP-01 |
| Patient timeline | Show source events, workflow transitions, tasks, exceptions, approved communications and audit entries in order. | Source records remain authoritative; platform records orchestration history. | CAP-02 |
| Diagnostic orders and results | Distinguish order, acceptance, scheduling, completion, result availability and report version. | Diagnostic operations owns operational status; authorised reporting professional owns report finalisation; physician owns clinical review. | CAP-03 |
| Result acknowledgement | Capture acknowledgement for the current report version with actor and timestamp. | Clinic physician only; no AI, rule or operational shortcut. | CAP-04 |
| Owner assignment and SLA ageing | Assign visible owners, due/age information, blockers and escalation path. | Deterministic rules may flag or route; humans resolve gated work. | CAP-05 |
| Referral decision | Record clinic management, day-care referral or hospital escalation. | Clinic physician chooses the direction; AI cannot choose or approve it. | CAP-06 |
| Next-step status | Record `Next Step Confirmed` only after required human direction, handoff, owner, timeframe and communication evidence exist. | Care Coordinator verifies evidence; does not determine clinical safety. D12/T11U governs the urgent financial exception. | CAP-07 |
| Exception queue | Display and coordinate exception work with reason, owner, safe action, return condition and audit evidence. | Exception-specific human role resolves the issue; Care Coordinator coordinates. | CAP-08 |
| Missing-handoff and exception detection | Detect missing owner, overdue acknowledgement, missing handoff evidence, duplicate/incomplete data, stale work and unavailable service, then route visible work. | Deterministic workflow rules only; AI anomaly detection remains deferred. | CAP-11 |
| Audit history | Require append-oriented, attributable and target tamper-evident workflow, human-decision, AI-generation/failure/review, exception, communication, correction and recovery evidence. Corrections create linked entries rather than destructive edits. | Users generate actions; platform records; administrator monitors integrity; governance reviews. This is a target requirement, not achieved implementation. | CAP-09 |
| Source-linked episode summary | Provide a source-linked summary for human review with minimum approved inputs, references, version context and uncertainty. | Clinic physician or Care Coordinator reviews before reliance; failure falls back to source evidence and normal human workflow; no diagnosis, autonomous transition or blocking dependency. | CAP-10 |
| Source-linked referral-handoff draft | Prepare a draft only after the physician has approved the clinical referral or escalation direction; expose references and required fields. | Physician approves clinical direction and clinical content where applicable; Referral Coordinator verifies operational completeness and routes; receiving team accepts/rejects. Failure falls back to manual source-based preparation and does not block valid progression. | CAP-12 |

## Build-now SMART on FHIR demonstration boundary

The build-now demonstration includes a simulated clickable or technical SMART on FHIR launch into synthetic Asha Mehta data (`SYN-PAT-1001`), followed by controlled retrieval of the minimum synthetic FHIR resources. This is a demonstration of launch context and workflow orchestration, not a live EHR integration. AI outputs may be represented with controlled, source-linked sample outputs or a non-production demonstration mechanism; no real AI model call or clinical performance is claimed.

## Represent-only boundary

The following may be visible as dependency, status or failure behaviour but are not built as full workflows:

- financial readiness and payer-information dependencies;
- urgent hospital escalation with `Financial Readiness Pending` remaining visible under D12/T11U;
- denied writes, unavailable workflow service and recovery to the last verified state;
- report amendments, duplicate events, incomplete results and uncertain linkage;
- designated communication-owner assignment where message policy varies;
- receiving-team destination and timeframe evidence;
- source-side report finalisation or amendment interaction;
- audit integrity monitoring and recovery controls.

Represent-only means the case may show the state, evidence, blocker, task or recovery rule. It does not claim a production integration or a complete operational workflow.

## Deferred capabilities

| Deferred capability | Reason and boundary |
|---|---|
| Real EHR, payer or device integrations | The MVP includes a simulated SMART launch demonstration, not a live source integration. |
| Production identity matching and RBAC | Identity uncertainty is represented and routed to reconciliation; production matching/security implementation is deferred. |
| Autonomous diagnosis, clinical prioritisation or referral approval | Clinical decisions and referral approval remain human-controlled. |
| Real AI model calls or model training | AI capabilities are specified and represented for later evaluation, not production inference. |
| Autonomous coding or financial authorisation | Administrative readiness is not authorisation; financial decisions remain human-controlled. |
| Claims, pre-authorisation and denial-management workflow | Financial and payer work remains a represent-only dependency. |
| Hospital command centre, capacity management and OT optimisation | Hospital operations is limited to externally confirmed handoff destination, owner and timeframe evidence; ContinuumOS does not independently book or confirm a facility or appointment. |
| Discharge, surgery and home recovery | These remain outside the diagnostic-closure MVP. |
| Pharmacy and broader nursing workflows | Only approved status/communication context may be represented. |
| Kafka, Flink, openEHR and production event backbone | Architecture options are deferred to later architecture work. |

## Scope exclusions that must not re-enter through wording

The following are not implied by the frozen MVP: a longitudinal record, EHR replacement, clinical diagnosis, clinical urgency scoring, autonomous patient matching, autonomous referral routing, real payer coverage determination, independent appointment or facility booking/confirmation, discharge completion, home monitoring, medication orchestration or outcome evidence.

## Scope-change control

Any proposed addition after this freeze must record:

1. the user job and MVP problem it supports;
2. the canonical state, transition or exception it affects;
3. accountable and performing roles;
4. source data and system-of-record boundary;
5. human-control and AI suitability;
6. failure and recovery behaviour;
7. build-now, represent-only or deferred impact; and
8. evidence status and approval source.

No addition is treated as part of the MVP solely because it appears in a stakeholder, architecture or prototype discussion.

## Step 5 completion criteria

- [x] Build-now capabilities are explicitly frozen.
- [x] CAP-08 exception coordination and CAP-11 deterministic missing-handoff/exception detection are separate capabilities.
- [x] SMART on FHIR is classified as a build-now synthetic launch demonstration; live EHR integration remains deferred.
- [x] Clinical direction, operational handoff readiness and receiving-team acceptance are explicitly distinct.
- [x] `Episode Completed` means scoped ContinuumOS diagnostic-closure workflow completion, not completion of broader patient care.
- [x] Represent-only dependencies and failure behaviours are separated from built workflow capabilities.
- [x] Deferred capabilities are explicit and do not re-enter through broad stakeholder language.
- [x] Human gates, AI boundaries and source-system authority are preserved.
- [x] Scope-change control is defined before architecture and prototype work.

## Source trace

- `Sprints/Sprint_3_Users_Decisions_and_MVP/jobs_to_be_done_and_acceptance.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/decision_rights_and_ai_suitability_matrix.csv`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/sprint_3_baseline_and_alignment.md`
- `Sprints/Sprint_1_Product_Case/Sprint_1_Product_Case.md`
- `01_Day_1_Product_Framing/mvp_scope.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/system_of_record_table.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/failure_path_map.md`
