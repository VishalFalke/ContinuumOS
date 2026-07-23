# Sprint 3 — Jobs-to-be-Done and MVP Acceptance Conditions

## Purpose and evidence status

This artifact translates the approved stakeholder map and Sprint 2 operating model into workflow jobs and acceptance conditions for the MVP. It is a proposed product requirements baseline, not user research, stakeholder confirmation, clinical validation, implementation evidence or an outcome claim.

All examples use synthetic Asha Mehta episode data, `SYN-PAT-1001`.

## Job framing

The core job is:

> When a diagnostic result becomes available, the care team needs to know what is verified, who owns the next action, what human decision is pending, what is blocked and what safe next step has been confirmed—without treating an unreviewed result, uncertain match or administrative readiness indicator as a clinical decision.

## Jobs-to-be-done by stakeholder

ID convention: `JTBD` identifies a core MVP job; `DEP` identifies a limited represent-only dependency; `CTX` identifies a contextual or deferred job that must not expand the built MVP.

| JTBD ID | Stakeholder | Job statement | Required outcome | Boundary or evidence note |
|---|---|---|---|---|
| JTBD-01 | Clinic physician | When a current diagnostic report is available, review the source report and acknowledge the current version so that an unreviewed result cannot progress as clinically reviewed. | Current report version, review evidence, acknowledgement actor and timestamp are visible. | Clinical review and acknowledgement remain human-controlled; source review cannot be replaced by an AI summary. |
| JTBD-02 | Clinic physician | When a result is acknowledged, choose clinic management, day-care referral or hospital escalation so that the next clinical direction is explicit. | Human-recorded follow-up direction with rationale or required evidence. | AI cannot choose the pathway or determine urgency. |
| JTBD-03 | Care Coordinator | When work is pending or ageing, see the episode, owner, SLA, blocker and next action so that no case disappears between teams. | Active workspace shows current canonical state, owner, age, blocker and next task. | Operational visibility does not grant clinical, identity or financial authority. |
| JTBD-04 | Care Coordinator | When an exception or handoff is unresolved, coordinate the right accountable role and verify the evidence needed for safe return or closure. | Exception owner, escalation history, safe-return condition and closure evidence are recorded. | The Care Coordinator records closure only after human-owned end-state conditions are satisfied. |
| JTBD-05 | Diagnostic operations user | When a diagnostic order is received, accept, schedule, complete and maintain operational status so that the workflow reflects source-operational reality. | Order and diagnostic operational events are recorded with source, actor and timestamp. | Does not author, interpret, amend or clinically correct a report. |
| JTBD-06 | Authorised reporting professional | When the examination is complete, finalise or amend the clinical report according to source policy so that the current report version is authoritative for review. | Current report version, provenance, amendment status and source evidence are available. | Source-side clinical reporting authority; not a new ContinuumOS state or autonomous AI capability. |
| JTBD-07 | Identity reconciliation reviewer | When patient, encounter or event linkage is uncertain, inspect the available evidence and confirm or reject the match before attachment. | Reconciliation outcome, evidence, reviewer and timestamp are recorded. | No silent attachment or autonomous identity matching. |
| JTBD-08 | Referral Coordinator | When a clinician approves referral or escalation, prepare and route the required handoff and track the receiving response. | Approved handoff, destination, route, required fields, response and rejection reason are visible. | AI may draft source-linked content after approval; it cannot create, send or approve the referral autonomously. |
| JTBD-09 | Receiving team | When an approved handoff arrives, record formal acceptance or rejection with destination and timeframe evidence so that downstream ownership is explicit. | Formal acceptance/rejection, receiving role, destination and timeframe are recorded. | Receiving-team authority is distinct from specialist clinical review. |
| JTBD-10 | Specialist | When an approved handoff requires specialist input, review the source-linked information and provide a clinical acceptance recommendation or decision where authorised. | Clinical review and recommendation/decision are attributable and visible to the receiving process. | Does not automatically redirect a rejected referral or replace formal receiving-team acceptance. |
| JTBD-11 | Hospital operations | When hospital escalation is approved, coordinate operational destination and timeframe evidence so that the receiving handoff can be tracked. | Operational destination, timeframe, owner and handoff response are visible. | Hospital command-centre and capacity management remain deferred. |
| DEP-01 | Billing/RCM | When a selected pathway has administrative prerequisites, identify missing information as a represent-only dependency so that the care team can see readiness risk without treating it as approval. | Financial dependency, missing information and evidence status are visible. | MVP does not build pre-authorisation, claims or denial management. |
| CTX-02 | Authorised financial decision-maker | When a financial authorisation decision is relevant to a represented dependency, record the human decision and evidence separately from clinical direction. | Decision status and decision-maker are recorded only if represented. | Contextual/represent-only role; financial authorisation is not autonomous and is outside the built MVP workflow. |
| CTX-03 | Payer desk | When payer information is missing or an administrative issue is reported, provide represent-only context for the blocker. | Missing-information or administrative status is visible without implying coverage or approval. | Contextual/represent-only role; no live payer integration or denial-management workflow. |
| JTBD-15 | Authorised clinical escalation owner | When clinical review or direction is blocked or overdue, assign authorised coverage so that the human clinical gate remains staffed. | Coverage assignment, escalation reason and timestamp are visible. | Does not acknowledge, diagnose or choose a pathway automatically. |
| CTX-04 | Discharge coordinator | When viewing the broader clinic-to-home model, understand where the MVP ends and where future discharge or home-recovery coordination would begin. | Deferred boundary is visible; no discharge task is created by the MVP. | Contextual/deferred role; discharge and home recovery are deferred. |
| CTX-05 | Nursing | When a next step is human-confirmed, receive the approved operational information needed for care coordination or patient support. | Approved status and communication evidence are visible where relevant. | Contextual role; does not receive unapproved clinical content or new decision rights through a generic care-team role. |
| CTX-06 | Pharmacy | When medication-related coordination becomes relevant in a future pathway, understand that it is outside the current diagnostic-closure MVP. | Deferred boundary is explicit; no pharmacy workflow is implied. | Contextual/deferred role; no medication workflow build. |
| JTBD-19 | IT | When access, source connectivity or workflow service fails, report the technical condition and preserve pending work without claiming source success. | Technical condition, incident context and escalation are visible. | IT support does not edit clinical workflow or audit evidence. |
| JTBD-20 | Product/platform administrator | When a technical failure occurs, monitor access, recovery and audit integrity without changing source or clinical decisions. | Outage/denied-write status, last verified state, recovery action and integrity evidence are visible. | Recovery is represent-only; no replay of unverified writes or duplicate advancement. |
| JTBD-21 | Governance | When the workflow or AI capability is reviewed, trace each decision to its source, owner, human gate, evidence status and prohibited action. | Decision, AI boundary, append-oriented attributable evidence, linked corrections and unresolved assumptions are reviewable. | Governance reviews evidence; it does not destructively edit transaction history or perform clinical decisions. |
| JTBD-22 | Patient/caregiver | When a next step is approved, receive understandable approved communication and confirm operational details where applicable. | Approved message, recipient, delivery/receipt status and relevant confirmation are recorded. | Receipt does not prove clinical understanding; no unapproved AI-generated clinical communication. |
| CTX-01 | Hospital operations beyond handoff evidence | When broader hospital capacity or command-centre coordination is considered, understand that it is outside the diagnostic-closure MVP. | Deferred boundary is explicit; no capacity-management workflow is created. | Contextual/deferred role; only approved destination, owner and timeframe evidence is in scope. |

## MVP capability-to-acceptance map

| Capability ID | MVP capability | Primary job(s) | Human owner or gate | Acceptance condition | Failure constraint | Scope/evidence |
|---|---|---|---|---|---|---|
| CAP-01 | Active care-episode workspace | JTBD-03, JTBD-04 | Care Coordinator owns visibility; source linkage requires human reconciliation where uncertain | For Asha’s synthetic episode, the workspace shows patient/encounter linkage status, current canonical state, owner, age, blocker and next task. | Uncertain linkage remains in `Patient Match Failed` or `Encounter Missing`; it does not create a valid episode silently. | Build now; proposed capability |
| CAP-02 | Patient timeline | JTBD-03, JTBD-20, JTBD-21 | Care Coordinator coordinates; source systems remain authoritative | Timeline presents ordered source events, workflow transitions, tasks, exceptions, communications and audit entries with actor and timestamp. | Missing, duplicate, amended or unavailable events remain visibly unresolved. | Build now; proposed capability |
| CAP-03 | Diagnostic orders and results | JTBD-05, JTBD-06, JTBD-01 | Diagnostic operations owns operational events; authorised reporting professional owns report finalisation/amendment; physician owns review | The episode distinguishes `Order Created`, `Order Accepted`, `Diagnostic Scheduled`, `Diagnostic Completed`, `Result Available` and current report version. `Result Available` requires the expected DiagnosticReport status/version, required referenced evidence and source-specific completion condition. | Completion and Observation presence are not treated as result availability; result availability is not treated as clinical review. Missing/inconsistent evidence routes to `Result Incomplete`. | Build now; proposed capability |
| CAP-04 | Result acknowledgement | JTBD-01 | Clinic physician | Only the authorised clinician can record acknowledgement for the current report version; actor, version and timestamp are captured. | Amended result reopens review; overdue work remains visible and is not auto-acknowledged. | Build now; product decision plus validation requirement |
| CAP-05 | Owner assignment and SLA ageing | JTBD-03, JTBD-15 | Care Coordinator coordinates; escalation owner provides clinical coverage when needed | Every active task has an owner, due/age information, escalation path and current blocker where applicable. | Rules may flag or escalate but cannot acknowledge, accept, choose or close. | Build now; proposed capability |
| CAP-06 | Referral decision | JTBD-02 | Clinic physician | A human-recorded direction is one of the approved paths: clinic management, day-care referral or hospital escalation. | AI cannot choose or approve the path; rejection returns to a human follow-up decision. | Build now; product decision |
| CAP-07 | Next-step status | JTBD-04, JTBD-08, JTBD-09, JTBD-11, JTBD-22 | Clinic physician and receiving team provide human decisions; Care Coordinator verifies the evidence checklist and records status | `Next Step Confirmed` is recorded only when the defined evidence checklist is satisfied; the Care Coordinator does not determine clinical safety. | For urgent human-approved hospital escalation, D12/T11U permits `Next Step Confirmed` while `Financial Readiness Pending` remains visible and unresolved, once clinical direction, receiving-team handoff, accountable owner, timeframe and patient communication are confirmed. | Build now; proposed policy requiring clinical, operational and financial review |
| CAP-08 | Exception queue | JTBD-04, JTBD-07, JTBD-19, JTBD-20 | Exception-specific accountable human role; Care Coordinator coordinates | Required exception paths show reason, owner, safe action, prohibited action, safe return condition and audit history. | No exception silently becomes a valid patient episode or successful source write. | Build now/represent-only by failure type; validation requirement |
| CAP-09 | Audit history | JTBD-04, JTBD-19, JTBD-20, JTBD-21 | Users generate attributable actions; the platform is required to record append-oriented, attributable and target tamper-evident audit evidence; Product/platform administrator monitors integrity and recovery; Governance reviews | Material state changes, human decisions, AI generation/failure/review, exceptions, communications, linked corrections and recovery actions show actor, timestamp, source/version and outcome. | An unavailable source or failed write is recorded as pending/failed, never as source success; corrections append linked entries rather than destructively editing earlier evidence. | Build now; proposed capability |
| CAP-10 | Clinician-reviewed AI episode summary | JTBD-01, JTBD-03, JTBD-21 | Clinic physician or Care Coordinator reviews before operational reliance | Summary exposes source references, report/version context and uncertainty; reviewer can accept, correct or reject it. | No diagnosis, urgency determination, identity matching, acknowledgement or autonomous transition. | Build now; pilot hypothesis for evaluation |
| CAP-11 | Missing-handoff and exception detection and routing | JTBD-03, JTBD-04, JTBD-19, JTBD-20 | Care Coordinator owns operational visibility; exception-specific accountable human resolves the condition; Product/platform administrator handles technical recovery | Deterministic rules detect missing owner, overdue acknowledgement, missing handoff evidence, duplicate/incomplete data, stale work and unavailable service; the system creates a visible exception or task with reason, owner and safe return condition. | Detection cannot diagnose, match identity, acknowledge, accept, redirect, authorise, confirm or close. AI anomaly detection remains a future hypothesis. | Build now for deterministic conditions; AI anomaly detection deferred; validation requirement |
| CAP-12 | AI-assisted referral-handoff draft after approved referral or escalation | JTBD-08, JTBD-09, JTBD-10, JTBD-22 | Referral Coordinator reviews and approves for operational use; clinic physician approves clinical content where applicable; receiving team controls acceptance | Draft uses approved source-linked information, exposes references and required fields, and supports human edit, accept or reject before routing. | AI cannot create, send, approve, accept, reject or redirect the referral; no draft before human referral/escalation approval. | Build now; pilot hypothesis for evaluation |

## Canonical state-name verification

The acceptance criteria and decision matrix reuse the Sprint 2/Sprint 1 canonical names exactly: `Patient Match Failed`, `Encounter Missing`, `Result Incomplete`, `Amended Result Received`, `Clinician Unavailable`, `Follow-up Decision Required`, `Financial Readiness Pending`, `Payer Information Missing`, `Referral Rejected`, `Next Step Confirmed` and `Episode Completed`.

`Next Step Confirmed` and `Episode Completed` are distinct. `Next Step Confirmed` records that the selected next care step has the required human direction, handoff, owner, timeframe and communication evidence. `Episode Completed` follows only when the confirmed pathway is handed off or clinic follow-up responsibility is clear and closure evidence is complete, per Sprint 1 T14.

For communication, the Care Coordinator is the default operational sender/recorder only where assigned by the approved message policy. The designated authorised communication owner may differ by message type; the actual sender and approval evidence must be recorded.

## Explicitly bounded dependencies

| Dependency | MVP treatment |
|---|---|
| Financial readiness | Display a limited dependency or blocker after clinical prerequisites; do not build pre-authorisation, claims or denial management. |
| Payer information | Represent missing information or administrative context only; no live payer workflow. |
| Discharge/home recovery | Show the deferred boundary; do not create discharge or home-monitoring tasks. |
| Hospital operations | Track approved handoff destination, owner and timeframe; do not build capacity management or command-centre functions. |
| Pharmacy and nursing | Provide approved status/communication context only where needed; do not create new clinical authority. |
| Real integrations | Use synthetic/simulated source events and limited SMART on FHIR demonstration only. |

## Acceptance evidence discipline

Acceptance conditions define what a future walkthrough, prototype review or synthetic test must inspect. They do not claim that the condition has already been achieved. Open assumptions A01/A02/A03/A08/A09/A10/A11 and pilot hypotheses A05/A07/A12 remain unresolved.

## Step 3 completion criteria

- [x] All required stakeholder roles have a bounded job statement.
- [x] Every MVP capability maps to at least one job and an acceptance condition.
- [x] Core MVP jobs are distinguished from represent-only dependencies and contextual/deferred jobs.
- [x] Human owners and prohibited automation are explicit.
- [x] The three workflow/AI assistance capabilities are distinct: source-linked summary, deterministic missing-handoff/exception detection and post-approval AI referral-handoff draft.
- [x] Failure constraints are included for identity, result, handoff, administrative and technical conditions.
- [x] Represent-only and deferred dependencies are separated from build-now capabilities.
- [x] No research, implementation, clinical validation or outcome claim is made.

## Source trace

- `Sprints/Sprint_3_Users_Decisions_and_MVP/stakeholder_map.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/sprint_3_baseline_and_alignment.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/ownership_matrix.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/failure_path_map.md`
