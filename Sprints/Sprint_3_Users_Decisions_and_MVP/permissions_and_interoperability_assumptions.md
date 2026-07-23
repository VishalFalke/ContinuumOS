# Sprint 3 — Least-Privilege Permissions and Interoperability Assumptions

## Purpose and evidence status

This artifact defines the permission and interoperability assumptions that constrain Sprint 4 architecture and later prototype work. It is a proposed design baseline for a synthetic, simulated portfolio case. It does not claim production RBAC, security certification, live integration, clinical validation or implementation.

## Permission principles

1. Grant access by workflow job and minimum data need, not by broad organisational role.
2. Separate source-data viewing, workflow coordination, human decision recording, administrative dependency visibility, technical recovery and governance review.
3. A user may record only the action they are authorised to perform; recording an action does not transfer decision authority.
4. ContinuumOS does not silently write or correct source clinical, identity or financial records.
5. Identity uncertainty requires a reconciliation permission and human review; it must not be resolved by AI or a generic administrator.
6. AI receives only approved, source-linked fields required for the requested summary or handoff draft and cannot invoke human decisions.
7. Audit records are platform-generated target evidence. Users cannot edit or delete transaction history; authorised administrators monitor integrity and recovery.
8. SMART launch context may use a non-sensitive session/correlation identifier; raw tokens, secrets and full authorisation responses are never stored in workflow or audit records.
9. When a reconciliation reviewer makes a linkage decision, the audit evidence must preserve both the reviewer as decision-maker and the Care Coordinator as the person who recorded or operationalised that decision.
10. Retrieve, display, retain and provide to AI only the minimum synthetic fields required for the approved workflow job, evidence trace and evaluation; do not copy complete source clinical records into the orchestration store.
11. AI-support failure, timeout or unavailability must leave source evidence and the normal human workflow available. AI output is not a prerequisite for a valid human decision or canonical transition.
12. The linkage contract must define required identifiers, acceptable source references, Encounter requirements, version handling, permitted manual reconciliation and the accountable Identity reconciliation reviewer. Manual reconciliation may create an internal reference but cannot silently alter source identity or encounter records.

## Least-privilege role matrix

| Role | Minimum read access | Permitted workflow action | Explicitly prohibited | Source-write boundary |
|---|---|---|---|---|
| Clinic physician | Linked Patient/Encounter context; current ServiceRequest, Observation and DiagnosticReport; assigned Tasks; relevant handoff and communication content | Review report, acknowledge current version, choose follow-up direction, approve clinical content and referral/escalation direction | Identity matching, autonomous acknowledgement by rule/AI, receiving-team acceptance, financial authorisation, source correction outside source role | No ContinuumOS source clinical write; source actions remain in source system/policy. |
| Care Coordinator | Verified episode context, workflow states, tasks, owners, ageing, exceptions, handoff status, financial dependency status and audit read access | Assign/coordinate work, record a reconciliation outcome supplied by the reviewer while preserving the reviewer and recording actor, route operational tasks, verify evidence checklist and record workflow status/closure after human prerequisites | Clinical review, acknowledgement, pathway selection, identity matching decision, referral acceptance, financial authorisation, editing audit history or appearing as the linkage decision-maker | Writes internal orchestration/task/evidence records only; cannot change the reviewer attribution. |
| Diagnostic operations user | ServiceRequest, scheduling/completion status, DiagnosticReport availability/version, relevant Observation context and assigned Tasks | Accept diagnostic work operationally, record scheduling/completion/source status, investigate missing/incomplete source events | Report authorship/amendment unless separately authorised; clinical interpretation; patient matching; acknowledgement; referral direction | No autonomous clinical report or source correction write. |
| Authorised reporting professional | DiagnosticReport, linked Observation and source context needed for reporting | Finalise, amend or correct the source clinical report according to source policy | Delegating report authorship to AI/ContinuumOS; changing workflow authority through report access | Source-side report write only under source policy; not a ContinuumOS capability claim. |
| Identity reconciliation reviewer | Minimum Patient, Encounter and event identifiers plus matching evidence | Confirm/reject patient, encounter or event linkage | Silent attachment, autonomous matching, clinical review or referral decisions | No autonomous source identity correction. |
| Referral Coordinator | Approved clinical direction, required report/order context, destination requirements, handoff status, receiving response and approved communication content | Verify operational completeness, prepare/edit approved handoff, route, track response and record rejection | Approving clinical direction, accepting/rejecting handoff, redirecting automatically, financial authorisation | No autonomous source referral write; internal/simulated routing only. |
| Receiving team | Approved handoff, required source-linked context and destination/timeframe fields | Accept/reject referral or escalation and record destination/timeframe evidence | Delegating acceptance to AI/ContinuumOS; automatic redirection | Response recorded internally/simulated; no unapproved source write. |
| Specialist | Assigned source-linked DiagnosticReport/Observation context, approved referral or escalation context and relevant Tasks | Provide clinical review or recommendation where workflow authorises and record an attributable recommendation; may act under another explicitly assigned authority role | Replacing the authorised physician decision, finalising a source report without reporting authority, or accepting a receiving-team handoff unless separately assigned that role | Internal decision/recommendation record only; source report writes remain with the authorised reporting professional. |
| Hospital operations | Represent-only destination, timeframe, operational acceptance/rejection response and assigned coordination Tasks where applicable | No standalone Sprint 3 clinical or referral decision; operational evidence is represented through the receiving team or Referral Coordinator | Clinical review, referral approval, receiving acceptance outside assigned receiving-team authority, financial authorisation | No direct source or payer write in Sprint 3. |
| Billing/pre-authorisation user | Limited financial dependency, missing-information and represent-only readiness fields | Prepare/track administrative readiness context where represented | Coverage inference, clinical alternative selection, final financial authorisation, claim/denial workflow beyond scope | No live payer or financial-system write. |
| Payer desk | Represent-only payer-information-missing, financial-readiness-pending and administrative dependency status | No direct Sprint 3 action; payer-related information may be recorded by an authorised internal role or represented as an external dependency | Coverage determination, pre-authorisation, claims, denials or clinical pathway selection | No authenticated payer-system access or live payer write. |
| Authorised financial decision-maker | Limited administrative evidence required for represented decision | Record final financial decision where represented | Clinical pathway selection, autonomous payment approval by AI/ContinuumOS | No autonomous financial-system write. |
| Authorised clinical escalation owner | Overdue/blocked clinical work, coverage assignment context and relevant source-linked review context | Assign authorised clinical coverage | Acknowledging, diagnosing or choosing the pathway on behalf of the clinician | Internal coverage/task record only. |
| Nursing | No direct Sprint 3 platform access; approved communication or care-direction evidence may be represented through authorised workflow users | No standalone Sprint 3 action; receive or contribute operational information through approved channels outside the MVP interface | Clinical acknowledgement, referral acceptance, financial authorisation or editing workflow/audit records | No direct source or ContinuumOS write in Sprint 3. |
| Pharmacy | No direct Sprint 3 platform access; medication-related work is outside the diagnostic-closure MVP | No standalone Sprint 3 action; pharmacy participation is deferred or represented as an external dependency if referenced | Medication reconciliation, prescribing, dispensing or clinical pathway decisions within ContinuumOS | No direct source or pharmacy-system access in Sprint 3. |
| IT | Technical health, integration/outage status and incident context; no unnecessary clinical detail | Report technical issue, support controlled recovery and escalate service failure | Clinical/identity/referral/financial decisions; audit-history editing | No source clinical or financial write. |
| Product/platform administrator | Platform configuration, access controls, technical audit integrity, recovery status and minimum operational metadata | Manage access, monitor integrity, coordinate recovery and record technical reconciliation | Clinical decisions, identity matching decisions, financial authorisation, deleting/editing audit history | Platform/internal records only; source writes remain deferred. |
| Governance | Read-only decision, AI, permission, exception and audit evidence required for oversight | Review policy adherence, evidence status, safety controls and unresolved assumptions | Editing transaction history or performing operational/clinical decisions | Read-only review; no source write. |
| Patient/caregiver | Represent-only approved patient-facing status and communication, limited appointment/contact confirmation context | Confirm receipt or operational details through an approved external or simulated channel where applicable; no authenticated MVP platform access | Clinical approval, referral acceptance or financial authorisation | No direct source or ContinuumOS platform write; patient-facing interface is not built in Sprint 3. |

## Access modes

| Mode | Meaning in Sprint 3 |
|---|---|
| Source read | Read minimum synthetic FHIR fields from the simulated source context. |
| Internal workflow read/write | Read or write ContinuumOS orchestration state, internal/simulated Task, exception, evidence and communication status within role permission. |
| Human decision write | Record an attributable decision only for the accountable role. |
| Represent-only read/status | Display a dependency or simulated response without implementing a real source workflow. |
| Audit read | Review target audit evidence; not edit or delete transaction history. |
| Technical recovery | Record outage, denied-write, last verified state and recovery evidence; does not make clinical or source decisions. |

## Interoperability assumptions

| Decision area | Sprint 3 assumption | Deferred or unresolved boundary |
|---|---|---|
| SMART on FHIR | Build-now simulated clickable/technical launch using synthetic Patient/Encounter context and candidate minimum read-only scopes. | Live EHR launch, token service, endpoint conformance and production security are deferred. |
| Non-SMART operations access | Use separate role-authorised demonstration access for the care-coordination/operations workspace; do not assume it is launched through SMART. | Production workforce authentication, session policy and identity-provider integration are deferred. |
| EHR relationship | ContinuumOS is an overlay; source systems remain authoritative for Patient, Encounter, ServiceRequest, Observation and DiagnosticReport. | EHR replacement, longitudinal repository and source correction workflows are deferred. |
| FHIR resource set | Use six source FHIR R4 resource types — Patient, Encounter, Practitioner, ServiceRequest, Observation and DiagnosticReport — plus one internal ContinuumOS orchestration-task model. | Additional source resources or any claim that the internal task is a FHIR resource require a scope-change record. |
| FHIR version | The demonstration is mapped conceptually to FHIR R4 resources. | Server conformance, profile validation and production interoperability remain deferred. |
| FHIR Task | ContinuumOS uses an internal orchestration task inspired by FHIR Task; it is not claimed to be FHIR R4-conformant. | Real FHIR Task write-back is represent-only unless separately approved and demonstrated. |
| HL7 v2 | Treat ADT/ORU-like messages as a future source-event input pattern that maps to existing resources and canonical transitions. | No HL7 engine or message implementation in Sprint 3; no new state may be created for a message type. |
| Workflow-state ownership | ContinuumOS owns orchestration state, tasks, exceptions, communication status and workflow history; source systems own source records. | Exact production write-back and reconciliation architecture is Sprint 4 work. |
| Event timing | Use simulated event arrival for the demonstration. Prefer event-driven handling for result/acknowledgement-sensitive work and batch/manual reconciliation for overdue, repair and recovery work. | Real-time versus batch architecture, SLA thresholds and delivery guarantees remain Sprint 4 decisions. |
| Identity and linkage | Require Patient/Encounter/event verification before episode attachment; route uncertainty to reconciliation. | Production identity matching and enterprise MPI integration are deferred. |
| Error semantics | Preserve pending/failed status and return to the last verified valid state on outage or denied write. | Production retry, idempotency and replay implementation are deferred. |
| Security context | Use minimum SMART scopes and non-sensitive session/correlation identifiers. Never store raw tokens, secrets or full authorisation responses. | Production OAuth configuration, secret management, audit platform and security certification are deferred. |
| Data minimisation | Retrieve and retain only approved minimum synthetic fields; reference complete source records rather than copying them into ContinuumOS. AI receives only the fields approved for its bounded capability. | Any full-document copy, expanded AI input or longitudinal retention requires explicit scope and governance review. |
| AI availability | Record AI request failure/timeout and continue the source-based human workflow. | Production model availability, retry and model-operations controls are deferred; AI never becomes a required workflow gate. |

### Candidate minimum SMART scopes for Sprint 3

These are candidate read-only scopes for the synthetic demonstration, not the final technical configuration. `fhirUser` and `user/Practitioner.r` identify the signed-in reviewing clinician; Practitioner is user-context access, not patient-compartment access. Sprint 4 must confirm the exact launch context, resource filters, user/subject context and identity-provider behaviour. No write scope is proposed for the Sprint 3 boundary.

`launch`, `openid`, `fhirUser`, `patient/Patient.r`, `patient/Encounter.r`, `patient/ServiceRequest.rs`, `patient/Observation.rs`, `patient/DiagnosticReport.rs`, `user/Practitioner.r`

## Required interoperability decisions for Sprint 4

- Exact SMART scopes and launch parameters for the synthetic demonstration.
- Separate actor/session handling for clinician SMART launch and role-authorised operations access.
- The linkage contract: identifiers, source references, Encounter requirements, version handling, manual reconciliation authority and audit attribution.
- Source event transport and mapping approach for FHIR and any future HL7 v2 inputs.
- Idempotency, replay prevention and recovery evidence for duplicate/unavailable events.
- Read/write API boundary between source systems and ContinuumOS internal workflow records.
- Real-time versus batch behaviour for result arrival, ageing, reconciliation and outage recovery.
- Production access model, consent/security handling and audit implementation if the case is extended.

## Step 8 completion criteria

- [x] Least-privilege access is mapped to workflow jobs and human authority.
- [x] Source reads, internal workflow writes, human decision writes and technical recovery are separated.
- [x] Minimum SMART/FHIR, EHR-overlay, HL7 v2 and timing assumptions are recorded.
- [x] Internal/simulated Task handling is separated from real FHIR Task write-back.
- [x] Raw credentials are excluded from workflow and audit records.
- [x] Deferred production security and interoperability decisions are explicit.

## Source trace

- `Sprints/Sprint_3_Users_Decisions_and_MVP/fhir_resource_map.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/field_mapping.csv`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/integration_flow_ehr_launch_to_audit.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/decision_rights_and_ai_suitability_matrix.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/system_of_record_table.csv`
- `01_Day_1_Product_Framing/state_transition_table.csv`
