# Sprint 1, Part 6 — MVP Scope Boundary

## Status

Proposed scope for the independent ContinuumOS portfolio case. This document defines the intended seven-day deliverable; it does not claim that the listed capabilities have been implemented, tested or deployed.

## Scope statement

The ContinuumOS MVP demonstrates one synthetic care episode for Asha Mehta (`SYN-PAT-1001`) from diagnostic order through result availability, explicit clinician acknowledgement, a human-approved follow-up direction and a human-confirmed next safe care step.

The product is a vendor-neutral care-orchestration overlay, not an EHR replacement. It coordinates workflow state, ownership, exceptions, handoffs and audit evidence across simulated sources. It does not make clinical, identity-matching, referral or financial-authorisation decisions autonomously.

## 1. Build in the seven-day case

The following are in scope for the intended prototype and supporting case artifacts.

| Capability or artifact | Scope boundary |
|---|---|
| Patient-specific synthetic episode | One synthetic tracer episode: Asha Mehta, linked to a synthetic patient and encounter only after defined matching rules pass or a human confirms the match. |
| Diagnostic order and result status | Show the workflow from order creation through a source-linked ultrasound result becoming available. Laboratory information is supporting context only. |
| Clinician acknowledgement | Make the distinction between **Result Available** and **Clinically Reviewed** visible; require explicit human acknowledgement of the current report version. |
| Follow-up, referral or escalation task | Create downstream work only after a clinician approves clinic management, referral or hospital escalation. |
| Named owner, SLA and ageing | Make the accountable owner, waiting time and deterministic overdue or missing-owner conditions visible. No universal operational SLA or performance outcome is claimed. |
| Exception queue | Represent the defined exception states, including reconciliation for uncertain patient, encounter or event linkage. Uncertain records must never attach silently. |
| Patient communication status | Record whether an approved next-step communication was completed. The case does not send messages to real patients. |
| Audit timeline | Show source events, workflow state changes, human decisions, approvals, corrections, rejections and overrides for the synthetic episode. |
| SMART on FHIR launch demonstration | Demonstrate a clinician-facing launch into the synthetic episode context. This is a limited demonstration, not a production integration claim; detailed scopes, field mapping and implementation design are deferred to the later interoperability section. |
| Limited synthetic FHIR data | Use only synthetic Patient, Encounter, ServiceRequest, Observation, DiagnosticReport and Task data needed for the case. |
| Two AI-assisted capabilities | 1) Source-linked episode summary covering relevant episode facts, current workflow status, report version, open tasks and missing or conflicting source information. 2) Referral handoff draft activated only after human-approved referral or escalation, containing the summary, approved referral reason, acknowledgement status, prerequisites and missing items, and draft patient communication. Each output requires human review and cannot independently change episode state. |
| Failure-case validation set | Define at least five testable synthetic failure scenarios for later prototype validation. This document defines the intended cases; it does not claim they have already been tested. |

### Planned synthetic failure scenarios

The intended validation set includes, at minimum:

1. A result is available but no clinician acknowledgement is recorded within the defined SLA.
2. Patient, encounter or event linkage is uncertain and must enter reconciliation rather than attach silently.
3. A result is incomplete and cannot move into clinical acknowledgement.
4. An amended result arrives after acknowledgement and reopens clinical review for the new report version.
5. A referral is rejected and returns to a human-controlled follow-up decision.
6. Required payer or administrative information is missing on a selected escalation path.
7. A simulated source integration is unavailable and requires verified manual reconciliation before safe return.

These are planned acceptance and failure cases for the seven-day case. They must be recorded as tested only after the prototype and its evidence are available.

## 2. Represent conceptually, but do not fully build

These capabilities provide product context, future-state framing or architecture direction. They are not fully implemented or validated in the seven-day case.

| Capability or concept | How it is represented |
|---|---|
| Multiple clinics, diagnostic providers and hospitals | Shown as workflow participants and possible destinations, not connected live organisations. |
| Wider clinic-to-home journey | Shown as product vision and future roadmap context; the MVP ends at the confirmed next care step. |
| Device integration, ambient documentation and home monitoring | Mentioned only as possible future inputs or journeys. |
| Revenue-cycle orchestration | Limited to a financial-readiness status on selected escalation paths; no full revenue-cycle workflow is built. |
| Capacity recommendation | Described as a possible future decision-support area, not an MVP recommendation engine. |
| Longitudinal record | Considered a future product option; ContinuumOS does not become the primary clinical record in this case. |
| Enterprise event platform | Kafka, Flink and similar event-platform ideas remain architecture context only; no enterprise event backbone is built. |
| Analytics platform | Spark or equivalent analytics are future architecture material only, not part of the seven-day case. |

## 3. Defer entirely

The following are outside the MVP and must not be implied by the case artifacts.

- Autonomous diagnosis, clinical significance determination or clinical prioritisation.
- Autonomous patient or encounter matching.
- Autonomous referral or escalation approval.
- Autonomous financial authorisation, coverage determination or payer decision.
- Real patient, payer, credential or provider data.
- Real payer integration, production identity matching, production RBAC or enterprise security claims.
- Replacement of the EHR, LIS, RIS/PACS or other systems of record.
- Actual surgery or procedure booking, operating-theatre reservation, discharge or home recovery coordination.
- A complete hospital command centre.
- AI model training, production-scale AI evaluation or production outcome claims.
- Detailed FHIR mapping, architecture implementation or prototype screen design during Sprint 1.

## Fixed workflow boundary

| Boundary | Definition |
|---|---|
| Start | A diagnostic order is created for the synthetic episode. |
| Required middle controls | Result availability, explicit clinical acknowledgement, a human-approved follow-up direction, ownership/SLA visibility, exception handling and auditable patient-communication status. |
| Allowed end paths | Clinic management; day-care referral; or hospital escalation with financial preparation beginning where the selected path requires it. |
| End condition | A next safe care step is human-confirmed with a named owner, destination or responsible team, documented timeframe, required follow-up task and recorded patient communication. For referral or escalation, receiving-team acceptance is also required. For clinic management, the Care Coordinator verifies the named clinic owner, follow-up timeframe, patient communication and any required follow-up task before confirmation. |
| Financial-readiness boundary | Financial readiness is a supporting status used only on selected hospital-escalation paths. It is not an MVP outcome, payer-integration claim or revenue-cycle automation capability; it does not independently confirm the next step or authorise care. Any final financial authorisation remains human-controlled. |
| Excluded continuation | The case stops before surgery, discharge and home recovery. |

## Human-control and AI boundary

Rules manage predictable workflow conditions. Missing owner, missed SLA, overdue acknowledgement and duplicate-event indicators remain deterministic rule-based checks. The two MVP AI capabilities support source-linked synthesis and preparation of complex referral handoffs; operational-attention recommendations are roadmap or optional evaluation material. AI does not independently transition the episode, prioritise clinical urgency or exercise clinical or financial authority.

Human control is required for uncertain linkage, clinical report review, result acknowledgement, follow-up direction, referral or escalation approval, receiving-team acceptance where needed, appointment or facility confirmation where needed, approval of AI handoff packages or patient-facing clinical content, amended-result re-review and final financial authorisation.

## Evidence and claim discipline

- **Proposed capability:** all build-now items and AI-assisted functions in this scope document.
- **Validation requirement:** the planned failure scenarios, human-control checks, source linkage, auditability and acceptance criteria must be evidenced before they are described as tested.
- **Roadmap item:** the represented-only capabilities and any broader clinic-to-home, event-platform or longitudinal-record model.
- **Not claimed:** production outcomes, user research, enterprise readiness, real integrations, clinical effectiveness or financial performance.
