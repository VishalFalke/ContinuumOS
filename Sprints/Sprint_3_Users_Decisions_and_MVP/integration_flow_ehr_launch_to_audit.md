# Sprint 3 — EHR Launch to Audit Integration Flow

## Purpose and evidence status

This is a requirements-level integration flow for the limited SMART on FHIR demonstration. It describes simulated source reads and ContinuumOS orchestration behaviour. It does not claim a live EHR integration, production security, production interoperability or successful execution.

## Flow summary

```text
EHR launch context
    → SMART session and minimum scope
    → Patient/Encounter context verification
    → Source order and resource retrieval
    → Linkage and data-quality checks
    → ContinuumOS orchestration record and canonical state
    → Owner/SLA/task and exception handling
    → Human review, acknowledgement and follow-up direction
    → Operationally ready handoff and receiving response
    → Next Step Confirmed
    → Episode Completed after T14 closure evidence
    → Target append-oriented, attributable and tamper-evident audit record
```

## Step-by-step flow

| Step | Trigger/input | ContinuumOS action | Human or source control | Failure handling | Audit evidence |
|---|---|---|---|---|---|
| 1. Launch | Clinician launches ContinuumOS from a simulated EHR context with patient and encounter identifiers; operations uses separate role-authorised demonstration access. | Establish the limited SMART session for the clinician or the separate operations session and retain only the non-sensitive context required for that access mode. | EHR/source context is authoritative; operations access is not assumed to be SMART-launched. ContinuumOS does not create a clinical order. Raw access tokens, secrets and full authorisation responses are never retained. | Invalid/incomplete context, denied scope, invalid token, insufficient permission or unavailable endpoint stops protected retrieval and records a safe failure. Operations-access failure remains separate from SMART launch failure. | Access mode, actor, role, time, source, minimum non-sensitive context, requested scope where applicable, correlation ID and outcome; never raw token, secret or full authorisation response. |
| 2. Verify context | Minimum Patient, Encounter and event identifiers/source references required by the linkage contract. | Retrieve or receive only approved minimum synthetic context and assess linkage against defined identifier, Encounter and version requirements. | Identity reconciliation reviewer resolves uncertainty; manual reconciliation may create an internal reference but cannot alter source records. | Route to `Patient Match Failed` or `Encounter Missing`; do not attach or progress the episode silently. | Resource IDs, versions, linkage inputs, rule result, reviewer, recording actor, resolution and internal reference. |
| 3. Retrieve order | Verified synthetic ServiceRequest and relevant Practitioner context. | Create or update the orchestration record from a verified source order and display the current order state. | Clinic physician/source system owns clinical order creation; diagnostic operations owns operational acceptance. | Missing or conflicting order context remains pending or routes to the applicable exception; no clinical order is fabricated. | ServiceRequest ID/version, source, retrieval time, linkage status, actor and resulting state. |
| 4. Retrieve diagnostic events | Synthetic diagnostic schedule/completion event, current DiagnosticReport and configured linked Observation/result evidence. | Retrieve only approved minimum fields. For the approved synthetic fixture, record `Result Available` only when accepted current report status is `final`, `amended` or `corrected`, the current source version is recorded, configured references resolve and separate source-specific completion evidence satisfies T04. | Diagnostic operations confirms source evidence; authorised reporting professional finalises/amends the report. | Observation or preliminary/partial evidence alone is insufficient. Missing/inconsistent configured references or unmet source-specific completion evidence routes to `Result Incomplete`; amended version after prior availability routes to `Amended Result Received`. | Resource IDs/versions, report status, configured reference-resolution result, source-specific completion evidence, timestamps, validation result and state decision. |
| 5. Run deterministic controls | Resource completeness, duplicate signals, missing owner, overdue work, missing handoff evidence and service availability. | Create tasks, flag ageing, route exceptions and prevent duplicate replay. | Rules do not make clinical, identity, referral, financial or closure decisions. | Keep the canonical state or route to the appropriate existing exception; no silent valid episode, source-success claim or autonomous transition. | Rule ID/version, inputs, detection time, exception/task, owner and recovery condition. |
| 6. Create review work | `Result Available` and acknowledgement requirements. | Set or display `Clinical Review Pending`, assign owner/SLA and expose source-linked context. | Clinic physician reviews the source report and acknowledges the current version. | Overdue work remains visible; `Clinician Unavailable` uses authorised clinical coverage; no auto-acknowledgement. | Report version, assigned owner, SLA, review/acknowledgement actor and timestamps. |
| 7. Human follow-up direction | `Result Acknowledged` and `Follow-up Decision Required`. | Present verified context and record the physician’s direction. | Clinic physician chooses clinic management, day-care referral or hospital escalation. | Referral rejection returns to `Follow-up Decision Required`; AI cannot choose or approve the path. | Decision actor, selected path, evidence, time and related task. |
| 8. Operationally ready handoff | Clinic physician has approved the clinical referral or escalation direction and the handoff is ready for operational review. | Prepare the source-linked handoff draft if used, verify required operational fields and route status. | Clinic physician approves clinical direction and clinical content where applicable; Referral Coordinator verifies operational completeness and routes; receiving team accepts/rejects. | Missing fields remain visible; rejection becomes `Referral Rejected`; no automatic redirection. | Clinical approval, operational readiness review, draft/source references, edits, route, destination, response and rejection reason. |
| 8A. AI-support failure | Optional summary or post-approval handoff-draft request fails, times out or is unavailable. | Record the assistive-service failure and keep source evidence and the normal human workflow available. | Authorised clinician, Care Coordinator or Referral Coordinator continues without AI. | AI failure does not block acknowledgement, care direction, handoff, receiving response or closure and does not fabricate an output. | Capability ID, minimum source references/versions, failure reason, time, fallback owner and human disposition. |
| 9. Administrative dependency | Selected path requires supporting readiness information. | Display `Financial Readiness Pending`, `Payer Information Missing` or represent-only administrative evidence where applicable. | Billing/pre-authorisation user and payer desk provide limited administrative context; authorised financial decision-maker retains any final financial decision. | No coverage inference, autonomous authorisation or clinical alternative selection. D12/T11U permits urgent approved escalation to proceed when its evidence conditions are met. | Dependency type, blocker, human actor, decision evidence and unresolved status. |
| 10. Confirm next step | Human direction, receiving response, accountable owner, timeframe and pathway-specific communication or explicit confirmation evidence. | Validate completeness and record `Next Step Confirmed`; keep preparation, send attempt, delivery, failure, follow-up and confirmation evidence distinct. | Clinic physician and receiving team retain substantive decisions; Care Coordinator records verified evidence. Destination/timeframe evidence may be externally confirmed and then recorded. | Sent or delivered alone does not prove patient understanding/acceptance. Missing evidence keeps the workflow pending or in exception; financial readiness may remain separately visible under D12/T11U. | Evidence checklist, decision actors, destination/timeframe source, separate communication/confirmation states and transition time. |
| 11. Complete scoped workflow | `Next Step Confirmed` plus recorded human disposition, applicable handoff/receiving response, next-step owner, required communication/explicit confirmation evidence, no safety-blocking exception and complete source/workflow references. | A deterministic rule may test completeness; record `Episode Completed` only after the Care Coordinator performs the human-owned T14 closure action. | Care Coordinator records closure with actor/timestamp; platform appends the scoped transition evidence. | No auto-close from inactivity, financial status, AI output, sent/delivered notification, unresolved exception or incomplete handoff. This does not mean broader patient care has ended. | Closure evidence, accountable owner/closer, actor, timestamp, source/workflow references and target append-oriented audit event. |

## Minimum resource use

| Resource | Demonstration use | Authority and write boundary |
|---|---|---|
| Patient | Display and verify synthetic patient context. | Source authoritative; no autonomous matching or production identity resolution. |
| Encounter | Verify the episode context before attachment. | Source authoritative; uncertain context routes to reconciliation. |
| Practitioner | Identify source clinician/reporting context and support role display. | Source authoritative; does not grant decision authority to the platform. |
| ServiceRequest | Retrieve the diagnostic order and order context. | Source creates/owns the clinical order; ContinuumOS coordinates after verified retrieval. |
| Observation | Display minimum supporting diagnostic values where relevant. | Source authoritative; conflicting values remain unresolved until human/source review; presence alone does not prove `Result Available`. |
| DiagnosticReport | Display current report, status/version, configured result-reference context and amendment context for review. | Authorised reporting professional/source owns finalisation and amendment; for the approved synthetic fixture T04 requires accepted current status (`final`, `amended` or `corrected`), current source version, configured required-reference resolution and separate source-specific completion evidence. |
| Task | Represent workflow work, owner, due time, exception or human decision request. | The MVP uses internal or simulated ContinuumOS Task records for orchestration visibility. A real FHIR Task write back to an EHR is represent-only unless a separate working write demonstration is explicitly approved; task completion cannot substitute for the accountable human decision. |

## Audit record contract

The target design requires append-oriented, attributable and tamper-evident audit evidence for each material event. Corrections are represented as linked correction or superseding entries rather than destructive edits. Users generate attributable actions; the platform records them; authorised administrators monitor integrity and recovery; governance reviews the evidence. This is a requirements target, not evidence that tamper evidence or immutability has been technically implemented.

Minimum audit fields:

- audit event ID and correlation/episode ID;
- synthetic patient and encounter references;
- source system, resource type, resource ID and version;
- event type and canonical state before/after;
- actor, role, non-sensitive session/correlation identifier and timestamp; never a raw access token, secret or full authorisation response;
- human decision, approval, rejection or review evidence where applicable;
- AI capability ID, source references, reviewer, edits and disposition where AI assistance was used;
- task/exception ID, reason code, owner, SLA and safe-return condition;
- communication owner, approver, sender, recipient and delivery/receipt evidence where applicable;
- write outcome, failure reason, recovery action and last verified state;
- correction or superseding link where applicable, plus target tamper-evident integrity metadata; implementation remains future work.

## Write and outage rules

- A denied or unavailable source write is recorded as pending/failed, never as successful.
- Recovery returns the episode to the last verified valid state; it does not replay an unverified action or advance twice.
- ContinuumOS may write its own orchestration task, exception, workflow and audit records within the demonstration boundary.
- Any FHIR Task write to a source EHR remains represent-only unless a separate working write demonstration is explicitly approved.
- Source clinical and administrative records remain authoritative; source correction or finalisation is not silently performed by ContinuumOS.
- Real-time eventing is not required for the demonstration; simulated event arrival and visible pending work are sufficient. Later architecture work must decide real-time versus batch behaviour.

## Step 6 completion criteria

- [x] EHR/SMART launch context through audit record is described.
- [x] Source-system authority and ContinuumOS orchestration ownership are separated.
- [x] Human gates, AI boundaries and deterministic controls are explicit.
- [x] Minimum FHIR resources are mapped to the flow without claiming production integration.
- [x] Failure, denied-write, outage and recovery behaviour are visible.
- [x] `Next Step Confirmed` and `Episode Completed` remain distinct and trace to T14.
- [x] Clinical direction, operational handoff readiness and receiving-team acceptance are separate flow steps.
- [x] Destination and timeframe may be recorded from external confirmation; ContinuumOS does not independently book or confirm them.
- [x] SMART authorisation and endpoint failures stop protected retrieval without retaining or exposing credentials.
- [x] Audit immutability is stated as a target requirement, not an achieved implementation claim.

## Source trace

- `Sprints/Sprint_3_Users_Decisions_and_MVP/mvp_scope_freeze.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/jobs_to_be_done_and_acceptance.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/decision_rights_and_ai_suitability_matrix.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/system_of_record_table.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/failure_path_map.md`
- `01_Day_1_Product_Framing/state_transition_table.csv`
- `01_Day_1_Product_Framing/decision_register.csv`
