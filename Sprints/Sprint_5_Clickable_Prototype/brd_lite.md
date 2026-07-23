# BRD-lite — ContinuumOS MVP Requirements Baseline

## Executive summary

ContinuumOS is a hypothetical, synthetic-data care-orchestration overlay for the diagnostic-closure workflow. It addresses the gap between a diagnostic result becoming available and the next human-confirmed care step. The MVP makes verified context, workflow state, accountable ownership, human decisions, blockers and handoff evidence visible across clinic, diagnostic and receiving-team work.

AI is not required to make the workflow safe or complete. It is limited to two optional productivity assists: a source-linked episode summary and a post-approval referral-handoff draft. Both remain traceable to approved source evidence, visibly uncertain where evidence is missing, and subject to human review. If either assist fails, authorised users continue with the source record and normal human workflow.

This is a requirements baseline for a clickable prototype. It does not claim a deployed AI model, live integration, user research, clinical validation, regulatory approval, outcome or performance result.

## Business problem

Diagnostic-to-next-step coordination can be fragmented across clinic, diagnostic and receiving-team processes. A result being available does not establish that it has been clinically reviewed, that an accountable owner has acted, or that a safe next step is confirmed. The case therefore needs a bounded workflow overlay that makes verified evidence, ownership, human decisions, blockers and handoff status visible without replacing source systems or automating clinical decisions.

## Business need and AI rationale

The primary business need is reliable operational coordination and clear human accountability—not autonomous clinical automation. The workflow must make the right evidence and outstanding action easy to find, preserve a safe handoff between teams and retain attributable history.

The two approved AI assists address narrow preparation and orientation work only:

- An episode summary can help a clinician or Care Coordinator orient to verified source context, current state and missing evidence.
- A referral-handoff draft can reduce manual preparation after a Clinic physician has approved referral or hospital escalation.

AI must not diagnose, determine urgency, match identity, acknowledge a report, choose a follow-up direction, approve/send/accept/reject a referral, authorise finances, confirm a next step or close an episode. Deterministic workflow rules—not AI—identify missing owners, overdue acknowledgements, duplicate/incomplete data, missing handoff evidence and unavailable services.

## Business objectives

- Make the synthetic diagnostic-closure episode and its current canonical state visible to the authorised user.
- Preserve distinct human gates for clinical acknowledgement, follow-up direction, referral/receiving response, financial authorisation where applicable and workflow closure.
- Surface deterministic missing-owner, overdue, incomplete, duplicate, linkage and service-availability conditions as visible exception work.
- Support an auditable, source-linked handoff to the next human-confirmed care step.
- Demonstrate only the two approved optional AI assists, without making them a dependency for valid workflow progression.

## Product-selection and prioritisation decisions

The diagnostic-closure workflow was selected as the MVP wedge because it contains a bounded but meaningful coordination problem: a result can exist without being reviewed, owned or converted into a confirmed next step. The workflow crosses clinic, diagnostic and receiving-team boundaries while still ending at a clear operational point. This makes ownership, state, exception, audit and human-decision controls demonstrable without claiming to replace an EHR or manage the full patient journey.

The following decisions define the product judgement behind the baseline:

| Decision | Why it was selected | Deliberate trade-off |
|---|---|---|
| Start with diagnostic closure rather than a longitudinal care platform | It provides an observable start, human gates and a bounded completion condition. | Discharge, home recovery, pharmacy and broader care orchestration remain outside the MVP. |
| Use deterministic controls for missing, late, duplicate and incomplete workflow evidence | These conditions can be defined and explained without probabilistic inference. | AI anomaly detection is deferred; deterministic checks cannot make gated decisions. |
| Limit AI to a source-linked episode summary and a post-approval handoff draft | These tasks may reduce orientation and preparation effort while remaining reviewable and non-authoritative. | AI does not diagnose, prioritise, acknowledge, select a pathway, route a referral or close an episode. |
| Demonstrate simulated SMART/FHIR access with synthetic data | It makes the data and launch boundary concrete without claiming a live integration. | Production identity, consent, security, conformance and source write-back remain future work. |
| Defer detailed financial, cancellation/no-show and preventive-health-check workflows | They are not required to demonstrate the core diagnostic-to-next-step value proposition. | The prototype may retain a boundary/status reference but does not build those workflows. |

Priority follows safety and dependency order: verified linkage and source evidence first; human review and decision gates second; accountable handoff and closure evidence third; optional AI assistance only after the underlying human workflow remains usable without it.

## Target state

For one synthetic episode, ContinuumOS presents an authorised overlay journey from controlled SMART/EHR launch and verified linkage through result availability, clinician acknowledgement, human follow-up direction, operationally ready handoff, receiving-team response, confirmed next step and attributable workflow completion. It reads limited source context, writes only internal workflow evidence and does not claim live integration, source write-back or clinical validation.

The desired end state is not a replacement EHR or autonomous care system. It is a visibly controlled workflow in which source records remain authoritative, material decisions have named human owners, exceptions have safe return conditions and any AI output is optional, source-linked and reviewable.

## Target users and stakeholders

Primary users are the Clinic physician, Care Coordinator, Referral Coordinator, Diagnostic operations user, authorised reporting professional, Identity reconciliation reviewer and Receiving team. The Product/platform administrator and Governance roles review technical recovery and audit evidence. Patient/caregiver communication is a bounded, pathway-dependent evidence requirement; it does not introduce a patient-facing product workflow in this MVP.

Key role boundaries are retained: the Clinic physician owns clinical acknowledgement and direction; the Identity reconciliation reviewer controls uncertain linkage; the Referral Coordinator prepares/routes handoff; the Receiving team accepts or rejects; the Care Coordinator verifies applicable evidence without making clinical decisions; and the authorised financial decision-maker retains any final financial decision.

## Current-state problem

The current-state case identifies incomplete order context, separate status tracking, confusion between result availability and clinical review, missing owner/SLA visibility, fragmented referral work, unclear communication evidence, informal exception handling and weak auditability. These are proposed problem statements for a hypothetical portfolio case, not findings from completed user research.

## Problem evidence and validation status

The case currently combines externally informed workflow patterns, approved internal case decisions and design assumptions. It does not contain completed primary user research, operational baseline data or clinical validation.

| Statement | Current evidence classification | What would be needed to validate it |
|---|---|---|
| Result availability and clinician acknowledgement can be operationally separated | Approved case workflow and common cross-system coordination pattern | Source-event review and interviews with clinic and diagnostic users. |
| Missing ownership and fragmented handoffs can create hidden delay | Design assumption supported by the mapped current-state failure pattern | Baseline task/queue analysis and operational observation. |
| A shared episode workspace could improve coordination visibility | Proposed capability and pilot hypothesis | Usability review plus synthetic and later operational comparison. |
| A source-linked summary may reduce orientation effort | AI pilot hypothesis | Task-time study, source-link completeness review and reviewer-disposition data. |
| A post-approval draft may reduce handoff preparation effort | AI pilot hypothesis | Manual-versus-assisted task comparison and completeness/unsupported-content review. |

All unresolved assumptions remain open until the relevant Sprint 6 synthetic test or Sprint 7 external/synthetic validation activity is actually performed.

## MVP scope

### Covered patient journey

The prototype baseline covers one synthetic patient journey: verified source order; patient/encounter linkage; diagnostic acceptance and scheduling context; diagnostic completion; current result availability; assigned clinician review; explicit acknowledgement; human follow-up direction; clinic-management, referral or hospital-escalation branch; receiving-team response where required; accountable owner, timeframe and communication evidence; `Next Step Confirmed`; and `Episode Completed` for the scoped diagnostic-closure workflow only.

The journey also covers the named safety and recovery conditions that can interrupt it: uncertain linkage, duplicate events, incomplete/amended/no-result evidence, clinician unavailability, referral rejection, financial-readiness dependencies, cancellation/no-show/not-performed work, service unavailability and stale work. Their treatment is deliberately bounded: they are visible, owned, attributable and returned safely to human control; they do not become silent successes or autonomous decisions.

### In scope

- Simulated clinician-only SMART/EHR launch and minimum read-only synthetic source-context retrieval.
- Care Coordinator episode workspace, patient timeline, task/owner visibility, ageing and deterministic exception detection.
- Diagnostic order/result progression, current report version, clinician acknowledgement and human follow-up direction.
- Referral-handoff preparation/routing, receiving-team response, next-step evidence and scoped workflow closure.
- Exception queue, source-linked audit trace, linked corrections/recovery evidence and the two optional AI assists.

### Out of scope and deferred

- Real EHR, payer, device or HIE integrations; production identity matching and RBAC; claims, pre-authorisation and denial management.
- Autonomous diagnosis, urgency scoring, patient matching, clinical acknowledgement, referral approval/routing, financial authorisation or discharge approval.
- Hospital command-centre/capacity management, independent appointment/facility booking, discharge, surgery, home recovery, medication and broader nursing workflows.
- Real AI model calls, training, performance claims, production event backbone and production audit/security implementation.

Represent-only conditions may be visible as a status, blocker, evidence requirement or recovery rule. They are not complete workflows.

## Phased delivery

| Phase | Intended outcome | Boundary |
|---|---|---|
| Sprint 5 — requirements baseline | Controlled, traceable requirements and prototype definition. | Documentation only; no build, test or approval claim. |
| Sprint 6 — clickable prototype | A synthetic walkthrough of the approved workflow, human controls, exception states and controlled AI sample outputs. | No live integration, source write, real model call or production deployment. |
| Sprint 7 — synthetic validation and portfolio packaging | Structured review of synthetic scenarios and evidence packaging. | Any findings remain synthetic and do not establish clinical, operational or model-performance outcomes. |
| Phase 2 roadmap — Preventive Health Check-up Orchestration | Potential future scope for package readiness, result closure, physician approval, communication and billing exceptions. | Roadmap only; no detailed requirement, build or outcome claim belongs in this MVP baseline. |
| Future roadmap | Consider live integration, governance readiness, model evaluation and wider operating workflows only with separate approvals and evidence. | Not authorised by this MVP baseline. |

## AI model objectives and success measures

The AI objective is limited: help authorised users orient to verified episode context or prepare a source-linked handoff draft, while preserving human control and a safe manual fallback. There is no accuracy, precision, latency, cost-reduction or handling-time target in this case because no model has been selected, evaluated or deployed.

The proposed North Star is the percentage of eligible episodes progressing to a human-confirmed next safe care step within the defined clinical and operational SLA. Supporting measurement definitions cover visible ownership, result-to-acknowledgement timeliness, handoff completion, communication evidence, linkage safety, unsafe autonomous actions, duplicate events, audit completeness and AI review/failure signals. They are pilot hypotheses and measurement definitions only: no baseline, target, performance result or outcome is claimed.

### Measurement plan and target-setting discipline

| Measure | Proposed calculation | Baseline | Target approach | Evidence status |
|---|---|---|---|---|
| Result-to-acknowledgement time | Time from current `Result Available` event to current-version human acknowledgement. | Not established. | Set only after the synthetic population, event rules and operating policy are approved. | Pilot hypothesis. |
| Episodes without a visible owner | Active eligible episodes without one current, state-appropriate owner divided by active eligible episodes. | Not established. | Initial synthetic acceptance expectation is complete owner visibility; no real-world target is claimed. | Validation requirement. |
| Referral-ready preparation time | Time from human-approved referral/escalation direction to human-approved operational handoff package. | Not established. | Compare manual and controlled assisted preparation in a synthetic test before proposing a pilot target. | Pilot hypothesis. |
| Overdue follow-up work | Active acknowledgement, decision or handoff tasks beyond the configured illustrative due time. | Not established. | Demonstrate correct detection and routing before considering a performance target. | Validation requirement. |
| AI correction rate | Corrected AI outputs divided by reviewed AI outputs, reported separately by capability and reason. | Not established. | Define an acceptable threshold only after the evaluation set and reviewer policy are approved. | AI evaluation measure. |
| Unsupported AI statement rate | Reviewed outputs containing one or more unsupported statements divided by reviewed outputs. | Not established. | Treat any occurrence as a review failure in the synthetic safety set; do not claim a production threshold. | AI safety evaluation measure. |

Sprint 5 defines the calculations and evidence needed. Sprint 6 may record synthetic execution results. Sprint 7 may use those results and reviewer feedback to propose later pilot targets. No target is back-filled to make the case appear successful.

## Data requirements and governance

### Data sources and boundaries

The simulated MVP uses the approved synthetic FHIR R4-shaped source boundary: Patient, Encounter, ServiceRequest, DiagnosticReport, Observation and Practitioner. It also uses a separate internal/simulated ContinuumOS task model for workflow tasks, exceptions and audit evidence. The source resources are read-only; ContinuumOS does not write back to them.

AI inputs are minimum necessary and verified: patient/encounter context, current report identifiers/version/status and configured evidence, order context, relevant assignment/SLA/exception references, and—in the referral-draft case—the already-approved direction and handoff fields. Raw SMART/OAuth data, secrets, unverified linkage candidates, payer/financial decisions, full source documents and a full longitudinal record are excluded.

### Privacy, compliance and retention boundary

All data is synthetic. The prototype must not imply compliance certification, live consent management, GDPR/local-regulatory compliance, production data residency, retention controls or security controls. These are future-readiness questions requiring separate organisational, legal, security and implementation assessment.

### Data quality and reliability

Verified patient, encounter, order and applicable event references are required before episode attachment. Missing, conflicting or uncertain evidence routes to an explicit exception rather than a silent attachment or state advance. The current report version, amendment/re-review behaviour, duplicate-event handling, source outage handling and safe return to the last verified state are defined requirements. Data-quality and model-bias performance are not measured or claimed in this synthetic MVP.

## Business rules, human review and explainability

The governing rules are recorded in the consolidated requirements register and will be elaborated in the Sprint 5 business-rule catalogue. At minimum, every material action must have an authorised actor, required evidence and attributable audit entry.

AI output must be visibly marked as a draft, identify its source references and versions, state uncertainty or missing evidence, record the reviewer/disposition and become stale when a relevant source version or decision changes. Unsupported content, wrong-patient reference or missing source links require correction or rejection with linked audit evidence; they may not be silently edited. AI output has no direct canonical-state effect.

## Stakeholder impact and change readiness

The MVP changes the visibility and coordination layer, not the underlying clinical or source-system authority. Users need to recognise the distinction between result availability and acknowledgement, use the explicit owner/blocker/next-task information, and understand that an AI draft is not a decision or approved handoff.

The clickable prototype will demonstrate these interactions using synthetic scenarios. It does not claim that training has been delivered, that operational adoption is complete or that a change-management programme has been executed. Any future implementation would require role-specific workflow training, operating-policy approval, data-governance review, technical support procedures and evaluation governance.

## Validation and delivery evidence required downstream

Sprint 5 defines what later work must demonstrate; it does not claim that the work has occurred.

| Evidence package | Required downstream content | Planned sprint |
|---|---|---|
| Prototype walkthrough | One complete Asha Mehta journey covering launch, review, acknowledgement, human direction, handoff, confirmation and scoped closure. | Sprint 6 |
| Critical exception | At least one safety-relevant exception with owner, prohibited automation, safe action and safe return. | Sprint 6 |
| Amended-result re-review | New report version, stale dependent work, renewed clinician review and preserved audit history. | Sprint 6 |
| AI evaluation set | Expected source links, allowed/missing content, unsupported-content cases, stale-version cases, reviewer dispositions and fallback behaviour for both AI assists. | Sprint 6 |
| Controlled release evidence | Entry criteria, defect handling, rollback/safe fallback and explicit separation of simulated versus implemented behaviour. | Sprint 6 |
| Reviewer and synthetic-pilot evidence | Reviewer plan, structured feedback, synthetic measures, limitations and change decisions. | Sprint 7 |
| Portfolio reflection | What changed after testing, what remains unvalidated and what evidence would be required before real deployment. | Sprint 7 |

## Constraints and assumptions

- The MVP is synthetic and simulated; it cannot demonstrate real SMART/OAuth, EHR/FHIR conformance, source write-back, payer workflow or production service reliability.
- Only the clinician workspace is SMART-launched; operations access is separately authorised.
- The approved AI boundary is exactly two non-blocking assists; missing-handoff and exception detection remains deterministic.
- Report amendment/correction requires renewed clinician review and acknowledgement; no previous acknowledgement transfers to the new report version.
- D12 urgent hospital-escalation behaviour, including visible `Financial Readiness Pending`, remains a proposed policy requiring later clinical, operational and financial review.
- No target, baseline or outcome claim may be inferred from proposed metrics, illustrative SLA timing or synthetic scenarios.

## Business requirements

See `consolidated_requirements_register.csv`.

## Key assumptions, risks and dependencies

Part 2 will consolidate the inherited assumptions, risks and dependencies in `raid_register.csv`. Key carry-forward items include synthetic-only source access, uncertain linkage handling, report-version reassessment, D12 urgent-escalation financial-readiness policy review, role/message-policy dependencies and non-blocking AI fallback.

## Evidence-status boundary

Distinguish confirmed external evidence, design assumptions, proposed capabilities, pilot hypotheses and future roadmap items. This is an independent, hypothetical case.
