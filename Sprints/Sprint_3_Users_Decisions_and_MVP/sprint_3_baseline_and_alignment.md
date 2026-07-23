# Sprint 3 — Baseline and Alignment Control

## Purpose

This artifact freezes the accepted Sprint 1 product case and Sprint 2 operating model as the dependency baseline for Sprint 3. Sprint 3 user, decision, MVP, integration, FHIR and permission work must trace to this baseline or identify an explicitly approved change.

This is an independent hypothetical portfolio case using synthetic data and simulated integrations. It does not claim user research, clinical validation, implementation, production readiness or achieved outcomes.

## Authority order

When artifacts disagree, use this order:

1. Accepted Product Case Charter.
2. Approved Sprint 1 Decision Register entries.
3. Sprint 2 Canonical Alignment Register.
4. Sprint 1 state model and transition table.
5. Sprint 2 workflow, ownership, decision-rights, system-of-record and failure-path artifacts.
6. Sprint 3 artifacts, unless they record an approved change and its propagation plan.

Earlier wording that conflicts with a higher-authority decision is superseded and must not be reused.

## Non-negotiable product baseline

| Control | Sprint 3 baseline |
|---|---|
| Product role | ContinuumOS is a vendor-neutral care-orchestration overlay, not an EHR or system-of-record replacement. |
| Governing principle | One patient, one care episode, one shared workflow status, many care settings. |
| MVP | Diagnostic Closure and Care Escalation. |
| MVP start | Diagnostic order created for the synthetic episode. |
| MVP end | Human-confirmed next safe care step. |
| Allowed end paths | Clinic management; day-care referral; hospital escalation with financial preparation beginning where required. |
| Deferred continuation | Surgery, discharge and home recovery. |
| Tracer | Asha Mehta, age 48, `SYN-PAT-1001`; synthetic data only. |
| Core workflow | Diagnostic order → result available → clinician acknowledgement → referral decision → next step confirmed. |
| Source authority | Source systems remain authoritative for patient, encounter, diagnostic and administrative records. ContinuumOS owns orchestration visibility, tasks, exceptions and workflow history. |
| Identity and linkage | Uncertain patient, encounter or event linkage routes to reconciliation; it never silently attaches to an episode. |
| Human gates | Clinical review, acknowledgement, follow-up direction, referral or escalation approval, receiving-team acceptance, facility or appointment confirmation, patient-facing content approval, final financial authorisation and closure verification remain human-controlled. |
| AI scope | Source-linked episode summary; source-linked referral-handoff draft after human-approved referral or escalation. AI cannot diagnose, match identity, acknowledge, choose a pathway, accept a referral, authorise finances, change state independently or close the episode. |
| Deterministic rules | Missing-owner, overdue, duplicate, incomplete and exception conditions may be flagged or routed by workflow rules; rules cannot perform human decisions. |
| Data boundary | Synthetic Patient, Encounter, Practitioner, ServiceRequest, Observation, DiagnosticReport and Task data needed for the workflow. |
| Interoperability boundary | One limited SMART on FHIR launch demonstration; real EHR, payer and device integrations remain deferred. |

## Canonical vocabulary to reuse

### Core states

`Order Created`; `Order Accepted`; `Diagnostic Scheduled`; `Diagnostic Completed`; `Result Available`; `Clinical Review Pending`; `Result Acknowledged`; `Follow-up Decision Required`; `Referral Created`; `Referral Accepted`; `Financial Readiness Pending`; `Next Step Confirmed`; `Episode Completed`.

### Exception states

`Patient Match Failed`; `Encounter Missing`; `Duplicate Event Suspected`; `Result Incomplete`; `Amended Result Received`; `Clinician Unavailable`; `Referral Rejected`; `Payer Information Missing`; `Authorisation Denied`; `Integration Unavailable`.

Cancellation/no-show, test-not-performed, provider rejection, result-never-arrives and stale work remain reason-coded conditions around the approved states unless a later approved decision says otherwise.

### Canonical roles

| Role | Authority or responsibility |
|---|---|
| Clinic physician | Clinical review, acknowledgement and care direction. |
| Care Coordinator | Workflow visibility, ageing, coordination and closure evidence. |
| Identity reconciliation reviewer | Patient and encounter reconciliation. |
| Diagnostic operations user | Diagnostic acceptance, scheduling, completion and operational source-status operations; not clinical report authorship or interpretation. |
| Authorised reporting professional | Source-side authority to finalise, amend or correct the clinical report within source policy; Sprint 3 role clarification, not a new workflow state or autonomous capability. |
| Referral Coordinator | Approved referral preparation, routing, tracking and response recording. |
| Receiving team | Referral or escalation acceptance or rejection. |
| Billing/pre-authorisation user | Represent-only administrative preparation, submission and tracking for the MVP dependency; no built pre-authorisation, claims or denial-management workflow. |
| Authorised financial decision-maker | Final financial-authorisation decision. |
| Authorised clinical escalation owner | Clinical coverage when review or direction is blocked. |
| Product/platform administrator | Technical access, availability, audit and simulated integration recovery. |
| Service operations lead | Non-clinical service escalation and operating policy. |

Governance roles—clinical governance owner and product owner—govern policy and evidence status; they do not replace transaction-level decision owners.

## Sprint 3 traceability rule

Each new Sprint 3 capability, user job, field, permission or interoperability decision must record:

| Required trace | Question |
|---|---|
| Product purpose | Which MVP problem or user job does this support? |
| Workflow position | Which canonical state, transition or exception does it affect? |
| Ownership | Who is accountable, who performs the work and who is consulted or informed? |
| Human-control boundary | Is it a system rule, AI-assisted draft/summary or human decision? |
| Source and data | Which authoritative source or synthetic FHIR resource supports it? |
| Failure handling | What happens for missing, duplicate, amended, mismatched or unavailable data? |
| Scope classification | Build now, represent only, deferred or validation requirement? |
| Evidence status | Product decision, assumption, proposed capability, pilot hypothesis or roadmap item? |

## Open items carried into Sprint 3

- A01/A02/A03/A08/A09/A10/A11 remain unvalidated assumptions.
- A05/A07/A12 remain pilot hypotheses for later AI evaluation; no AI performance is claimed.
- Outage, denied-write and related recovery behaviour remains represent-only unless explicitly approved for a later build.
- SMART on FHIR remains a limited demonstration decision; Sprint 3 defines the minimum workflow need, not production integration.

## Step 1 completion criteria

- [x] Sprint 1 and Sprint 2 dependency baseline is recorded.
- [x] Authority order is explicit.
- [x] Canonical states, roles, human gates, AI limits, data boundary and scope boundary are frozen for Sprint 3.
- [x] Open assumptions and pilot hypotheses remain visibly unresolved.
- [x] A traceability rule is defined for all Sprint 3 additions.

## Source trace

- `Sprints/Sprint_1_Product_Case/Sprint_1_Product_Case.md`
- `00_Project_Charter/product_case_charter.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/sprint_2_baseline_and_traceability.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/canonical_alignment_register.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/ownership_matrix.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/system_of_record_table.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/failure_path_map.md`
