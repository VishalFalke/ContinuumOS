# Business-rule and Validation Catalogue

## Purpose and status

This catalogue turns the approved Sprint 1--4 workflow controls into explicit prototype-validation rules. A rule states what triggers a check, the evidence required, who may act, what is allowed or blocked, the safe-return behaviour and the audit evidence to retain.

It is a requirements-level control artifact for the synthetic prototype. It does not claim a built rule engine, live integration, test execution, clinical validation or production approval. The authoritative source remains the approved Sprint 1--4 baseline plus the Sprint 5 requirements register, data dictionary, screen specification and navigation map. The wireframe PDF and PNG archive are not a source for this catalogue.

## Rule-writing conventions

- A source event, internal workflow record, human decision, deterministic control and AI-assistive record remain distinct.
- A rule may validate or block a transition; it does not transfer a human clinical, identity, referral, financial or closure decision to ContinuumOS or AI.
- A recovery returns only to the last verified valid state and requires fresh verified evidence before replay.
- An access failure before episode creation is a **represented pre-episode condition**, not a canonical workflow state.
- Every blocked action must show the known condition, affected work, safe next action and accountable owner where applicable.

## Completion overview

| Rule group | Scope | Status |
|---|---|---|
| Group 1 | Safe access and verified context | Reviewed -- detailed rules below |
| Group 2 | Result integrity and clinician review | Reviewed -- detailed rules below |
| Group 3 | Human direction and handoff | Reviewed -- detailed rules below |
| Group 4 | Confirmation and scoped closure | Reviewed -- detailed rules below |
| Group 5 | Exceptions and recovery | Reviewed -- detailed rules below |
| Group 6 | AI and audit controls | Reviewed -- detailed rules below |

---

## Group 1 -- Safe access and verified context

### BRV-01 -- Simulated launch and protected retrieval

| Rule element | Rule |
|---|---|
| Trigger | The Clinic physician selects `Start authorised simulated launch` on `SCR-01`. |
| Required evidence | Valid simulated launch context; authorised signed-in clinician context; approved read-only scopes; successful simulated authorisation; and successful minimum-resource retrieval. |
| Authorised actor | Clinic physician starts and views the launch. Product/platform administrator may view the represented technical condition and support route. |
| Deterministic validation | Validate launch-context completeness and consistency, clinician role, approved scope outcome and retrieval outcome before protected context is displayed. No role may enter, select or infer a patient, encounter, endpoint, scope or credential. |
| Allowed outcome | Only after all checks pass may the synthetic minimum context proceed to linkage verification and open `SCR-02`. Opening the screen does not itself create a canonical workflow state. |
| Blocked behaviour | Do not display protected patient or episode context; create an episode attachment; retain/display raw token, secret or full authorisation response; or claim authorisation/retrieval succeeded when it did not. |
| Failure and safe return | Invalid/incomplete context, unavailable/malformed discovery, denied/expired authorisation, token-exchange failure, 401/403, endpoint outage or malformed/incomplete retrieval stops protected retrieval. The condition remains a **represented pre-episode access condition**, not a canonical episode state. A new authorised session or verified source/access resolution is required before retry. |
| Audit evidence | Record `EVT-01`, `EVT-02` and `EVT-03` as applicable: non-sensitive launch/access outcome, requested/granted scope set, actor/role, resource type/ID/version, retrieval outcome, timestamp and correlation ID. Never retain raw launch value, token or secret. |
| Traceability | FR-01; FR-02; TR-01; NFR-01; NFR-03; NFR-05; NFR-06; NFR-07; NFR-09; AC-FR-01-01 to AC-FR-01-02; AC-FR-02-01 to AC-FR-02-02; `SCR-01`; `SCR-07`; `SCR-09`; EVT-01 to EVT-03; FM-03. |

### BRV-02 -- Verified linkage before episode attachment

| Rule element | Rule |
|---|---|
| Trigger | Required Patient, Encounter, order/report and event references are retrieved, received or need reconciliation before the internal episode is attached or updated. |
| Required evidence | Source identifiers and versions for Patient, Encounter and the applicable order/report/event reference meet the approved linkage contract. When uncertainty exists, an authorised identity reconciliation reviewer records the decision evidence. |
| Authorised actor | Identity reconciliation reviewer resolves or rejects uncertain linkage. Care Coordinator may coordinate and record the workflow reference after the authorised decision. Other roles may view only verified minimum context. |
| Deterministic validation | Check the required Patient, Encounter and event references before attachment. `fhirUser` identifies only the signed-in reviewing clinician; it does not identify the reporting professional or confer linkage authority. |
| Allowed outcome | ContinuumOS may create or update its internal patient/encounter episode reference only for verified context. The source identity and encounter records remain authoritative and read-only. |
| Blocked behaviour | Do not silently attach to a likely patient or encounter; use AI to match identity; infer an encounter; alter source identity/encounter records; or advance any workflow state from unverified evidence. |
| Failure and safe return | Patient uncertainty routes to `Patient Match Failed`; encounter uncertainty routes to `Encounter Missing`; conflicting event linkage routes to `Duplicate Event Suspected` or remains quarantined as applicable. Return only to the last verified valid state after human resolution and re-verification. |
| Audit evidence | `EVT-04 linkage.verified` records candidate references, source identifiers/versions, match evidence, decision, reviewer/actor, decision version, time, outcome and safe-return state. |
| Traceability | FR-03; FR-17; NFR-02; NFR-03; NFR-05; NFR-06; NFR-07; AC-FR-03-01 to AC-FR-03-02; AC-FR-17-01 to AC-FR-17-02; `SCR-02`; `SCR-03`; `SCR-07`; `SCR-08`; `SCR-09`; EVT-04; FM-01; FM-02; FM-13; FM-17; D18. |

### BRV-03 -- Source order and operational-milestone separation

| Evidence received | Required validation and allowed effect | Must not imply | Failure and safe return | Audit evidence and traceability |
|---|---|---|---|---|
| Source `ServiceRequest` ID/version/status/intent | Verify source order identity, linkage and version. It supports `Order Created` only. | Provider acceptance, scheduling, completion or result availability. | Missing/conflicting references or unresolved linkage remain pending or route to reconciliation. | `EVT-05 diagnostic.order.evidence_received`; T01 source-order evidence; FM-04; FM-05; FR-05; FR-17; AC-FR-05-01; `SCR-02`; `SCR-09`. |
| Operational `accepted` event | Verify accepting organisation/actor, source order reference and event time from diagnostic operations. It may support T01 `Order Accepted` only from the approved prior state. | Scheduling, completion or result availability. | Missing subtype evidence or invalid prior state remains visible for source/operations correction; no inferred transition. | `EVT-06 diagnostic.operation.status_received` subtype `accepted`; FM-05A; FR-18; AC-FR-18-01 to AC-FR-18-02; `SCR-02`; `SCR-07`; `SCR-09`. |
| Operational `scheduled` event | Verify appointment or slot evidence, source order reference, actor and time. It may support T02 `Diagnostic Scheduled` only from the approved prior state. | Completion or result availability. | Missing or contradictory schedule evidence remains operational work or an exception; cancellation/reschedule remains source-operational. | `EVT-06` subtype `scheduled`; FM-05A; FR-19 (deferred for Sprint 6 unless selected in Part 3); AC-FR-19-01 to AC-FR-19-02; `SCR-02`; `SCR-07`; `SCR-09`. |
| Operational `completed` event | Verify source operational completion evidence, source order reference, actor and event time. It may support T03 `Diagnostic Completed` only from the approved prior state. | A complete report, `Result Available` or a clinician-review obligation. | Keep `Diagnostic Completed` with visible overdue follow-up if a current report does not arrive; result availability is governed separately by Group 2. | `EVT-06` subtype `completed`; FM-08; FR-20; AC-FR-20-01 to AC-FR-20-02; `SCR-02`; `SCR-07`; `SCR-09`. |

**Cross-cutting controls:** every `EVT-05`/`EVT-06` event uses the approved source/event/version idempotency key. Duplicate or out-of-order evidence is retained, does not advance the workflow twice and is reconciled before an eligible replay. One operational subtype cannot imply another.

---

## Group 2 -- Result integrity and clinician review

### BRV-04 -- Current result availability and incomplete-result control

| Rule element | Rule |
|---|---|
| Trigger | A current DiagnosticReport and the applicable source-completion evidence are received while the episode is in `Diagnostic Completed`, or available/report evidence is re-evaluated. |
| Required evidence | For the approved synthetic fixture: current DiagnosticReport ID and version; accepted current status `final`, `amended` or `corrected`; `basedOn`; configured required result-reference resolution; separate source-specific completion evidence; and available time. |
| Authorised actor | Diagnostic operations/source records supply and correct source evidence. ContinuumOS records the validated workflow outcome. Clinic physician review remains separate and begins only after assignment. |
| Deterministic validation | Confirm the required current version, accepted status, source-order link, configured result references and separate source-specific completion evidence. Observation presence, preliminary/partial evidence or an earlier report version alone cannot satisfy the rule. This is an approved synthetic-fixture rule, not a universal FHIR DiagnosticReport requirement. |
| Allowed outcome | A passing T04 check records `Result Available`. It creates no acknowledgement and does not itself create `Clinical Review Pending`; assignment is governed by BRV-05. |
| Blocked behaviour | Do not show or treat an incomplete/preliminary/partial report as complete; infer source completion; use Observation presence alone; or present availability as clinician review/acknowledgement. |
| Failure and safe return | Missing, inconsistent, conflicting or unexpected configured evidence routes to `Result Incomplete` through E04. Preserve source references and request source correction/completion. Return to `Result Available` only when the current report and configured fixture evidence pass T04. |
| Audit evidence | `EVT-07 diagnostic.report.complete_available` records report ID/current version, status, `basedOn`, configured-reference check, source-completion evidence, available time and validation outcome. |
| Traceability | FR-05; FR-20; FR-31; FR-32; NFR-02; NFR-03; NFR-06; NFR-07; AC-FR-05-01 to AC-FR-05-02; AC-FR-20-01 to AC-FR-20-02; AC-FR-31-01 to AC-FR-31-03; AC-FR-32-01 to AC-FR-32-03; `SCR-02`; `SCR-03`; `SCR-07`; `SCR-09`; EVT-07; FM-09 to FM-14; T04; E04. |

### BRV-05 -- Review-task assignment, owner and ageing

| Rule element | Rule |
|---|---|
| Trigger | A current complete result is available and accountable review work is assigned or reassigned. |
| Required evidence | Episode ID; current DiagnosticReport ID/version; assigned Clinic physician reference and role; assignment reason/time/source; SLA or due context; and prior assignment reference where the work is reassigned. |
| Authorised actor | Care Coordinator or the approved workflow configuration records/coordinates the assignment. The assigned Clinic physician owns review. Assignment authority does not confer clinical acknowledgement authority on Care Coordinator or the platform. |
| Deterministic validation | Confirm `Result Available` as the approved prior state, verified linkage, a current report version, a valid owner role/reference and due/SLA context. Reassignment creates a linked assignment version; it does not overwrite prior assignment evidence. |
| Allowed outcome | A valid T05 assignment records `Clinical Review Pending` with attributable owner, task age/due context and next work. |
| Blocked behaviour | Do not acknowledge the result, infer clinical review, assign an unavailable/unverified owner, or apply an assignment to a stale report version. |
| Failure and safe return | Missing owner/SLA, unavailable clinician or stale version creates visible exception/escalation work. The episode remains at the last verified state until authorised coverage or a valid current-version assignment is recorded. |
| Audit evidence | `EVT-09 result.review.assigned` records episode, report/version, owner, assignment reason/time/source, SLA, assignment version and prior assignment where applicable. A duplicate assignment returns the existing outcome; a true reassignment is linked as a new version. |
| Traceability | FR-04; FR-07; FR-21; NFR-03; NFR-05; NFR-06; NFR-07; AC-FR-04-01 to AC-FR-04-02; AC-FR-07-01 to AC-FR-07-02; AC-FR-21-01 to AC-FR-21-02; `SCR-02`; `SCR-03`; `SCR-07`; `SCR-09`; EVT-09; FM-03; FM-11; FM-18; FM-20; T05; E07. |

### BRV-06 -- Current-version clinician acknowledgement

| Rule element | Rule |
|---|---|
| Trigger | The Clinic physician selects the explicit acknowledgement action from `Clinical Review Pending` on `SCR-03`. |
| Required evidence | Verified linkage; `Clinical Review Pending` as the current state; complete current DiagnosticReport ID/version; assigned/authorised Clinic physician; source-review evidence; acknowledgement ID, actor, timestamp and outcome. |
| Authorised actor | Only the assigned/authorised Clinic physician may review and acknowledge the current report version. Care Coordinator may view/coordinate work but cannot acknowledge. AI may provide optional orientation only. |
| Deterministic validation | Confirm current source version, fixture completeness, assignment/role authority, valid prior state and required review evidence before the confirmation is enabled. The acknowledgement confirmation displays the action, report ID/version, source reference, physician identity and timestamp to be recorded. |
| Allowed outcome | A valid T06 acknowledgement records `Result Acknowledged`. T07 then creates visible `Follow-up Decision Required` work; acknowledgement is not a diagnosis, clinical direction, referral approval or patient communication. |
| Blocked behaviour | Do not acknowledge a stale/amended version, incomplete report, invalid state or unauthorised/unsigned actor; use AI output as acknowledgement evidence; or transfer acknowledgement from an earlier version. |
| Failure and safe return | Stale report version, missing authority or invalid transition is rejected/quarantined and routes to the relevant exception or reassessment path. Repeated submission returns the original acknowledgement outcome and does not create a duplicate decision. |
| Audit evidence | `EVT-10 result.acknowledgement.recorded` records acknowledgement ID, authorised Clinic physician, current report ID/version, review evidence, time and outcome. |
| Traceability | FR-06; FR-21; FR-29; FR-31; FR-32; NFR-05; NFR-06; NFR-07; NFR-08; AC-FR-06-01 to AC-FR-06-02; AC-FR-21-01 to AC-FR-21-02; AC-FR-29-01 to AC-FR-29-02; AC-FR-31-01 to AC-FR-31-03; AC-FR-32-01 to AC-FR-32-03; `SCR-02`; `SCR-03`; `SCR-07`; `SCR-09`; EVT-10; FM-03; FM-11; FM-12; FM-14; FM-18; FM-20; T06; T07. |

### BRV-07 -- Amended or corrected report re-review

| Rule element | Rule |
|---|---|
| Trigger | A new current DiagnosticReport version with status `amended` or `corrected` is received from `Result Available`, `Clinical Review Pending` or `Result Acknowledged`. |
| Required evidence | New and prior report versions; amendment/correction reason; report status; required source references; dependent acknowledgement/referral/handoff/communication/AI-draft evidence references; and source/version timestamps. |
| Authorised actor | Diagnostic operations/source records supply amended evidence. The Clinic physician owns renewed source review and acknowledgement. Accountable humans reassess affected downstream direction, handoff and communication. |
| Deterministic validation | Confirm that the received version is new, linked to the prior version and current under the approved source/version contract. Mark dependent AI drafts stale and identify downstream evidence based on the prior version. |
| Allowed outcome | E05 records `Amended Result Received`; E06 returns the episode to `Clinical Review Pending` for the current amended/corrected version. Prior acknowledgement remains historical evidence only. |
| Blocked behaviour | Do not carry prior acknowledgement forward; rely on a stale AI draft; automatically cancel, reverse, recreate or send a referral; automatically trigger patient communication; or treat a prior decision as valid for the new report version without human reassessment. |
| Failure and safe return | A duplicate amended version is retained as duplicate evidence and does not create a second re-review. Missing/invalid source evidence remains visible for source correction. The renewed review stays open until the current version is explicitly acknowledged; affected downstream items remain flagged until accountable humans record reassessment, correction or no-change evidence. |
| Audit evidence | `EVT-08 diagnostic.report.amended_or_corrected` records new/prior version, amendment reason, source references, dependent-evidence references, stale AI-draft status, reassessment flags, actor/outcome and timestamps. |
| Traceability | FR-14; FR-25; FR-31; FR-32; FR-33; NFR-03; NFR-06; NFR-07; NFR-08; AC-FR-14-01 to AC-FR-14-02; AC-FR-25-01 to AC-FR-25-02; AC-FR-31-01 to AC-FR-31-03; AC-FR-32-01 to AC-FR-32-03; AC-FR-33-01 to AC-FR-33-03; `SCR-02`; `SCR-03`; `SCR-05`; `SCR-07`; `SCR-08`; `SCR-09`; `SCR-10`; EVT-08; FM-11; FM-12; FM-14; FM-24; FM-25; E05; E06. |

---

## Group 3 -- Human direction and handoff

### BRV-08 -- Human follow-up direction and clinic-management verification

| Rule element | Rule |
|---|---|
| Trigger | The Clinic physician records a follow-up direction from `Follow-up Decision Required` on `SCR-04` after current-version acknowledgement. |
| Required evidence | Current acknowledged report ID/version; acknowledgement actor/time; Clinic physician authority; one selected direction; direction rationale/evidence reference; and direction time. For clinic management, named owner, timeframe, next task and applicable communication/explicit-confirmation evidence are also required before T08 completion. |
| Authorised actor | Only the Clinic physician may select clinic management, day-care referral or hospital escalation. For clinic management only, the Care Coordinator verifies the required non-clinical T08 evidence and records `Next Step Confirmed`; the Care Coordinator cannot choose, change or approve the direction. |
| Deterministic validation | Confirm current acknowledged source version, valid `Follow-up Decision Required` state, Clinic physician authority and one of the three approved directions. For T08, confirm named owner, timeframe, next task and applicable communication/confirmation evidence after the physician direction exists. No option is preselected. |
| Allowed outcome | Clinic management: the physician direction remains attributable and, after Care Coordinator verification of complete T08 evidence, `Next Step Confirmed` is recorded and `SCR-10` opens in closure mode. Referral/hospital escalation: T09 records `Referral Created` and opens `SCR-05`; it does not send a referral or establish receiving acceptance. |
| Blocked behaviour | Do not allow Care Coordinator, ContinuumOS or AI to choose, rank, recommend, approve or alter a direction/urgency; treat sent/delivered communication as explicit confirmation; create a referral from an unacknowledged or stale report; or select clinic management by default. |
| Failure and safe return | Missing acknowledgement, stale/amended report version, missing physician authority or missing required T08 evidence keeps work in `Follow-up Decision Required` or opens `SCR-07`. Referral/escalation does not require receiving-response evidence at this stage. Repeated direction submission returns the existing attributable outcome rather than creating duplicate direction evidence. |
| Audit evidence | `EVT-11 care.direction.recorded` records direction ID, Clinic physician actor/role, acknowledged report version, selected direction, rationale/evidence and time. The linked T08 verification retains the Care Coordinator's evidence check without transferring direction ownership. |
| Traceability | FR-08; FR-22; FR-29; FR-24; NFR-05; NFR-06; NFR-07; NFR-08; AC-FR-08-01 to AC-FR-08-02; AC-FR-22-01 to AC-FR-22-02; AC-FR-24-01 to AC-FR-24-02; AC-FR-29-01 to AC-FR-29-02; `SCR-04`; `SCR-07`; `SCR-09`; EVT-11; FM-11; FM-20; FM-22; FM-26; T08; T09. |

### BRV-09 -- Referral package preparation and routing

| Rule element | Rule |
|---|---|
| Trigger | `Referral Created` exists after a valid human-approved referral or hospital-escalation direction, and the Referral Coordinator prepares or routes the handoff from `SCR-05`. |
| Required evidence | Approved direction reference; acknowledged current report version; destination; complete configured required package fields; source evidence references/versions; Referral Coordinator package approval; package ID/version; route/sender evidence; and Clinic physician approval for clinically contextual content where applicable. |
| Authorised actor | Referral Coordinator prepares, approves for operational use and routes the package. Clinic physician separately approves clinically contextual content where applicable. AI may create an optional source-linked draft only after approved direction and never creates, approves or sends a package. |
| Deterministic validation | Confirm `Referral Created`, valid approved direction/current report version, destination, required-field completeness, required approvals and package/version evidence before route confirmation. Present package ID/version, destination, source references, approval actor and sender before routing. |
| Allowed outcome | `EVT-12 referral.package.created` records the operational package. `EVT-13 referral.sent` records one route/send attempt and opens response tracking on `SCR-06`. The state remains `Referral Created` pending a receiving-team response. |
| Blocked behaviour | Do not prepare a package before approved direction; route with missing field/approval/stale evidence; let the Referral Coordinator approve the clinical direction; let AI create/approve/send; change source clinical records; or claim route/delivery/acceptance from package creation alone. |
| Failure and safe return | Missing direction, field or approval disables routing and remains visible for safe correction. Send failure remains unresolved for authorised retry or alternate route after correction/verification; there is no automatic resend, redirect, delivery claim or receiving acceptance. A duplicate send action returns the original outcome and does not resend automatically. |
| Audit evidence | `EVT-12` retains package ID/version, approved direction, destination, required-field completeness, source references/versions, Referral Coordinator actor and approval evidence. `EVT-13` retains send ID, package ID/version, route/destination, sender, time and delivery-attempt reference. `EVT-20` applies only if optional AI draft/review evidence exists. |
| Traceability | FR-09; FR-16; NFR-04; NFR-05; NFR-06; NFR-07; NFR-08; AC-FR-09-01 to AC-FR-09-02; AC-FR-16-01 to AC-FR-16-02; `SCR-05`; `SCR-07`; `SCR-08`; `SCR-09`; EVT-11; EVT-12; EVT-13; EVT-20; FM-11; FM-20; FM-21; FM-25; T09; DR12; DR13; DR14. |

### BRV-10 -- Receiving-team response and rejection recovery

| Rule element | Rule |
|---|---|
| Trigger | A valid routed package/send reference is available and the receiving team records, or the Referral Coordinator records received evidence of, an acceptance or rejection on `SCR-06`. |
| Required evidence | Package/send reference and destination; receiving-team decision actor/role; explicit acceptance or rejection; response time; recording actor/source when different from the decision actor; destination and timeframe for acceptance; or rejection reason for rejection. |
| Authorised actor | The receiving team alone decides acceptance or rejection. Referral Coordinator may track or record received response evidence but cannot decide on the receiving team's behalf. Clinic physician owns any new direction after rejection. |
| Deterministic validation | Confirm valid package/send evidence, receiving-team authority and complete response evidence. Acceptance requires destination and timeframe; rejection requires reason. The decision actor and recording actor remain distinct where a Referral Coordinator records received evidence. |
| Allowed outcome | A valid acceptance supports T10 into `Referral Accepted` and opens `SCR-10` only when next-step evidence is ready. A valid rejection records `Referral Rejected`, preserves package/send history and returns visible work to `SCR-04` for a new Clinic physician direction through E09. |
| Blocked behaviour | Do not infer acceptance from a sent package, permit a Referral Coordinator/AI/platform to accept or reject, select an alternative destination automatically, redirect automatically after rejection, or advance state from missing authority/evidence. |
| Failure and safe return | Missing receiving authority/evidence remains pending with no state advance. A duplicate response returns the original outcome; a changed response is a linked correction. Rejection does not recreate or redirect a referral; only a new Clinic physician decision may establish an alternative route. |
| Audit evidence | `EVT-14 receiving.response.recorded` retains response ID, package/send reference, receiving-team decision actor/role, recording actor/source where applicable, response, destination/timeframe or rejection reason and time. |
| Traceability | FR-10; FR-27; NFR-05; NFR-06; NFR-07; NFR-08; AC-FR-10-01 to AC-FR-10-02; AC-FR-27-01 to AC-FR-27-02; `SCR-04`; `SCR-05`; `SCR-06`; `SCR-07`; `SCR-09`; `SCR-10`; EVT-14; FM-20; FM-21; T10; E08; E09; DR11. |

---

## Group 4 -- Confirmation and scoped closure

### BRV-11 -- Next-step confirmation

| Rule element | Rule |
|---|---|
| Trigger | `Referral Accepted` enters `SCR-10` for a referral/escalation path, and the Care Coordinator selects `Record Next Step Confirmed`. |
| Required evidence | Approved human direction with current report/version reference; applicable handoff and receiving-team response evidence; accountable owner; destination/team; timeframe; required approved communication evidence; explicit patient/caregiver confirmation where pathway policy requires it; and no unresolved safety-blocking exception. |
| Authorised actor | Care Coordinator verifies and records the evidence. Clinic physician owns clinical direction; receiving team supplies response where required; authorised communication owner records communication evidence. The Care Coordinator cannot choose direction, decide clinical safety or invent missing evidence. |
| Deterministic validation | Confirm `Referral Accepted`, current source/version evidence, applicable response/handoff, owner/destination/timeframe, required communication/confirmation evidence and no safety-blocking exception. Show the action, evidence, Care Coordinator actor and recorded timestamp before confirmation. |
| Allowed outcome | A valid T11 check records `EVT-16 next_step.confirmed` and moves to `Next Step Confirmed`. |
| Blocked behaviour | Do not infer confirmation from task completion, route/send/delivery status, AI output or missing evidence. Do not allow the Care Coordinator to substitute for clinical direction or receiving-team response. |
| Failure and safe return | Missing evidence, wrong current report version or open safety-blocking exception disables confirmation and opens `SCR-07`. Repeated confirmation returns the original outcome and does not create a second confirmation. |
| Clinic-management distinction | For clinic management, T08/EVT-11 has already created `Next Step Confirmed` on `SCR-04` after Clinic physician direction and Care Coordinator T08 verification. `SCR-10` displays that evidence and must not create `EVT-16` again. |
| Audit evidence | `EVT-16` records confirmation ID, approved direction, handoff/receiving evidence, accountable owner, destination/team, timeframe, communication evidence, applicable financial-path evidence, actor and time. |
| Traceability | FR-11; FR-22; FR-24; NFR-05; NFR-06; NFR-07; NFR-08; AC-FR-11-01 to AC-FR-11-03; AC-FR-22-01 to AC-FR-22-02; AC-FR-24-01 to AC-FR-24-02; `SCR-04`; `SCR-06`; `SCR-07`; `SCR-09`; `SCR-10`; EVT-11; EVT-14; EVT-16; FM-20; FM-21; FM-22; FM-26; T08; T11; T11U. |

### BRV-12 -- Communication delivery and explicit confirmation separation

| Rule element | Rule |
|---|---|
| Trigger | A selected pathway requires patient/caregiver communication or explicit confirmation evidence before next-step confirmation or scoped closure. |
| Required evidence | Approved content reference and approver where applicable; authorised sender; channel; prepared/send-attempt/delivery/failure/follow-up evidence; policy applicability for explicit confirmation; and, where required, confirmation response, method, confirming actor, confirmed next step and time. |
| Authorised actor | Clinic physician approves applicable clinical content. An authorised communication owner sends or records communication evidence. Patient/caregiver or authorised confirming actor supplies any required explicit confirmation. Care Coordinator verifies applicability and evidence for next-step/closure checks. |
| Deterministic validation | Keep preparation, approval, send attempt, delivery, failure, follow-up and explicit confirmation as separate evidence fields. Apply the explicit-confirmation requirement only where pathway policy requires it; record not-applicable status where appropriate. |
| Allowed outcome | Valid delivery evidence is recorded through `EVT-17`. Valid explicit confirmation, where required, is separately recorded through `EVT-18` and may satisfy the applicable evidence check for `EVT-16` or `EVT-22`. |
| Blocked behaviour | Do not promote prepared/sent/delivered status to patient understanding, acceptance, explicit confirmation, `Next Step Confirmed` or closure. Do not use unapproved clinical content or let AI issue patient communication. |
| Failure and safe return | Communication failure, no response or unresolved patient question remains visible with authorised follow-up/retry or alternate-channel work. The affected confirmation/closure step remains open; no workflow state advances by silence or delivery alone. |
| Audit evidence | `EVT-17 communication.delivery_evidence_recorded` retains content version/approval, sender, channel, attempt/sent/delivered/failure evidence and time. `EVT-18 patient.confirmation.recorded` retains response, method, confirming actor, confirmed next step, unresolved question/exception and time. |
| Traceability | FR-11; FR-22; FR-24; FR-30; NFR-05; NFR-06; NFR-07; NFR-08; AC-FR-11-01 to AC-FR-11-03; AC-FR-22-01 to AC-FR-22-02; AC-FR-24-01 to AC-FR-24-02; AC-FR-30-01 to AC-FR-30-03; `SCR-04`; `SCR-05`; `SCR-07`; `SCR-09`; `SCR-10`; EVT-16; EVT-17; EVT-18; FM-22; FM-23; FM-26; D17. |

### BRV-13 -- Scoped diagnostic-closure workflow completion

| Rule element | Rule |
|---|---|
| Trigger | The episode is already `Next Step Confirmed` and the Care Coordinator selects `Record scoped Episode Completed` from `SCR-10`. |
| Required evidence | Recorded human disposition; applicable completed handoff or not-applicable status; next-step owner; receiving response where required; required communication/explicit-confirmation evidence; current source/workflow references; no unresolved safety-blocking exception; accountable closer; closure time; and closure-evidence version. |
| Authorised actor | Care Coordinator performs the human-owned T14 closure action after the evidence check. Other accountable humans supply their own underlying direction, response, communication or confirmation evidence. A deterministic rule may test completeness only; it cannot close the workflow. |
| Deterministic validation | Confirm `Next Step Confirmed`, complete applicable evidence, current report/version where relevant and no safety-blocking exception. Present the closure action, applicable evidence, actor and timestamp before recording. The next-step confirmation and scoped-closure actions are never enabled together. |
| Allowed outcome | A valid T14 action records `EVT-22 episode.closure.recorded` and moves to `Episode Completed`, labelled only as **diagnostic-closure workflow completion**. |
| Blocked behaviour | Do not close before `Next Step Confirmed`; treat task completion, send/delivery status or a non-blocking AI action as closure evidence; auto-close after a deterministic check; or present `Episode Completed` as broader care completion. |
| Failure and safe return | Missing applicable evidence, wrong report version or open safety-blocking exception disables closure and opens `SCR-07`. Repeated closure returns the original outcome. A correction creates a linked superseding entry rather than overwriting prior closure history. |
| Audit evidence | `EVT-22` records closure ID, evidence version, current report-version review, handoff status/applicability, receiving response where required, communication/confirmation evidence, exception check, closer, time and linked evidence references. |
| Traceability | FR-11; FR-24; FR-30; FR-33; NFR-03; NFR-05; NFR-06; NFR-07; NFR-08; AC-FR-11-01 to AC-FR-11-03; AC-FR-24-01 to AC-FR-24-02; AC-FR-30-01 to AC-FR-30-03; AC-FR-33-01 to AC-FR-33-03; `SCR-07`; `SCR-09`; `SCR-10`; EVT-16; EVT-17; EVT-18; EVT-22; FM-22; FM-23; FM-24; FM-26; T14; D17. |

---

## Group 5 -- Exceptions and recovery

### BRV-14 -- Deterministic exception detection, ownership and safe return

| Rule element | Rule |
|---|---|
| Trigger | A defined deterministic condition is detected: uncertain linkage, incomplete/conflicting result evidence, missing/expired owner, duplicate/conflicting event, unavailable service, failed write, missing handoff evidence or another approved reason-coded control condition. |
| Required evidence | Rule ID/version; evaluated inputs and source versions; affected state; reason; accountable owner; exception type; blocker/prohibited action; safe-return condition; detection time; and applicable source/workflow references. |
| Authorised actor | ContinuumOS may detect and create/update visible exception work. Care Coordinator coordinates. The exception-specific accountable human resolves: for example identity reconciliation reviewer for linkage, diagnostic operations for source evidence, authorised clinical escalation owner for clinician unavailability, or Product/platform administrator for technical recovery. |
| Deterministic validation | Identify the known condition, affected work, owner, prohibited action and safe-return requirement. The exception type and return condition must be compatible with the active canonical state and available evidence. |
| Allowed outcome | `EVT-19 deterministic.control.exception_detected` creates or updates visible exception work on `SCR-07` and linked workspace/audit views. Detection can make work visible, create a task and flag escalation; it does not itself make a clinical, referral, financial, confirmation or closure decision. |
| Blocked behaviour | Do not silently attach uncertain data, bypass a required human gate, infer a decision, resolve an exception without evidence, or advance the canonical state merely because an exception was detected. |
| Failure and safe return | Unresolved work remains open. After the accountable role records a verified resolution, return only to the last verified valid state and proceed only through an eligible current event/action. The reason, actor, evidence and return state remain attributable. |
| Audit evidence | `EVT-19` retains rule/version, input/source-version references, current state, reason, owner, exception type, safe return and detection time. `EVT-21` records later verified reconciliation/recovery where applicable. |
| Traceability | FR-03; FR-07; FR-12; FR-13; FR-20; FR-31; FR-33; NFR-03; NFR-06; NFR-07; AC-FR-03-01 to AC-FR-03-02; AC-FR-07-01 to AC-FR-07-02; AC-FR-12-01 to AC-FR-12-02; AC-FR-13-01 to AC-FR-13-02; AC-FR-20-01 to AC-FR-20-02; AC-FR-31-01 to AC-FR-31-03; AC-FR-33-01 to AC-FR-33-03; `SCR-02`; `SCR-03`; `SCR-04`; `SCR-05`; `SCR-06`; `SCR-07`; `SCR-08`; `SCR-09`; `SCR-10`; EVT-19; EVT-21; FM-18; FM-19; FM-24. |

### BRV-15 -- Duplicate and out-of-order event protection

| Rule element | Rule |
|---|---|
| Trigger | An event has the same stable source/event/version key as an earlier event, conflicts with known sequence, does not match the expected prior state/current report version, or is replayed after prior processing. |
| Required evidence | Stable source key using source system, event type, source event/resource ID and version; or stable internal decision/assignment/package/response/confirmation/recovery/closure ID plus subject/version. Also retain correlation ID, prior/current state, source/current version, actor/authority and processing outcome. |
| Authorised actor | ContinuumOS applies the deterministic idempotency check and records outcome. Diagnostic operations/source owner reconciles source ordering or version conflicts. Care Coordinator coordinates visible exception work; accountable human owners make any required new decision. |
| Deterministic validation | Before applying an event, check idempotency key, expected prior state, source/current report version, required authority and permitted canonical transition. Processing outcome is recorded as `received`, `processed`, `rejected`, `quarantined` or `superseded`. |
| Allowed outcome | An already processed duplicate returns the existing outcome and appends duplicate evidence without a second transition. A legitimate correction/superseding version receives a new key and links to the earlier entry. |
| Blocked behaviour | Do not create duplicate tasks, acknowledgements, directions, referral sends, receiving responses, communications, confirmations or closures; overwrite/delete source or audit evidence; or use receive time alone as the event identity. |
| Failure and safe return | Conflicting/out-of-order evidence remains visible as `Duplicate Event Suspected` or quarantined work until reconciliation confirms valid ordering/state. Any eligible replay uses verified current evidence and cannot advance the workflow twice. |
| Audit evidence | Retain source/internal key, correlation ID, prior/current state, source/version, actor/role, processing outcome, duplicate/rejection/quarantine disposition and linked correction/superseding reference. |
| Traceability | FR-12; FR-13; FR-14; FR-33; NFR-03; NFR-06; NFR-07; AC-FR-12-01 to AC-FR-12-02; AC-FR-13-01 to AC-FR-13-02; AC-FR-14-01 to AC-FR-14-02; AC-FR-33-01 to AC-FR-33-03; `SCR-02`; `SCR-03`; `SCR-06`; `SCR-07`; `SCR-09`; EVT-01 to EVT-22; FM-19; FM-24; E03. |

### BRV-16 -- Failed write, unavailable service and verified reconciliation

| Rule element | Rule |
|---|---|
| Trigger | A simulated source/workflow write is denied, fails or times out; a required source/service is unavailable; or recovery is required after an interrupted access or workflow operation. |
| Required evidence | Affected event/request and intended action; last verified state; source/service failure outcome; attempted actor/time; source response where available; manual action/verification where applicable; accountable support owner; recovery result/time; and linked correction/superseding reference. |
| Authorised actor | Product/platform administrator manages technical recovery. Source owner or authorised operator confirms whether a manual/source action occurred. Care Coordinator manages affected workflow visibility; only the original authorised human may repeat a human decision after verified recovery. |
| Deterministic validation | Preserve the intended action as uncommitted and identify known failure condition, affected work, last verified state, support owner and safe next action. Verify source/status evidence before any resumed write or transition. |
| Allowed outcome | `Integration Unavailable` or another applicable exception remains visible. `EVT-21 recovery.reconciliation_completed` closes recovery only after source verification, manual action where needed, actor/role, result/time and linked correction/recovery evidence are recorded. |
| Blocked behaviour | Do not claim success, display the intended next state, overwrite source data locally, silently retry as successful, fabricate events, auto-confirm, auto-close or replay an unverified action. |
| Failure and safe return | Recovery returns to the **last verified valid state**, never automatically to the intended next state. Reconciliation failure keeps the exception open. A resumed action requires fresh verification and idempotent handling; a replay of the same recovery returns its existing outcome. |
| Audit evidence | Retain permission/outage/failure outcome, attempted write/action, actor, source response, manual action, source verification, last verified state, recovery ID, result/time, correction/superseding reference and safe-return state. |
| Traceability | FR-02; FR-12; FR-13; FR-14; FR-33; NFR-03; NFR-06; NFR-07; NFR-09; AC-FR-02-01 to AC-FR-02-02; AC-FR-12-01 to AC-FR-12-02; AC-FR-13-01 to AC-FR-13-02; AC-FR-14-01 to AC-FR-14-02; AC-FR-33-01 to AC-FR-33-03; `SCR-01`; `SCR-02`; `SCR-03`; `SCR-05`; `SCR-07`; `SCR-09`; EVT-03; EVT-19; EVT-21; FM-19; FM-24; E13. |

---

## Group 6 -- AI and audit controls

### BRV-17 -- Optional source-linked AI entry conditions

| Rule element | Rule |
|---|---|
| Trigger | An authorised human opens or explicitly requests an approved assistive capability. AI-01 may be requested after verified linkage/source evidence; AI-02 may be requested only after valid human-approved referral or hospital-escalation direction. |
| Required evidence | AI-01: verified Patient/Encounter context; current DiagnosticReport ID/version/status/`basedOn` and configured result-reference status; approved supporting Observation where configured; ServiceRequest identity/status; owner/SLA; relevant exception and source-version references. AI-02: approved direction reference; destination; current report/version and configured evidence references; ServiceRequest identity; verified Patient/Encounter; required handoff fields; communication constraints; and exception/completeness markers. |
| Authorised actor | Clinic physician or Care Coordinator may use AI-01 for orientation within their role boundary. Referral Coordinator may use AI-02 for handoff preparation; Clinic physician separately approves clinically contextual content where applicable. |
| Deterministic validation | Validate verified linkage, approved minimum inputs and current source versions before request. AI-02 additionally requires the valid `EVT-11 care.direction.recorded` referral/escalation direction. Failed entry validation routes to a visible pending/exception condition; it does not create an AI draft. |
| Allowed outcome | AI-01 returns a visibly labelled source-linked orientation draft with references, versions, generated time and uncertainty markers. AI-02 returns an editable, source-linked operational draft with populated/blank required fields and uncertainty/missing-field markers. Neither request nor output changes a canonical workflow state. |
| Blocked behaviour | Do not use raw SMART/OAuth values, secrets, unverified linkage candidates, full longitudinal records, unapproved clinical documents, payer/financial decisions, unsupported destination details or any source field outside the approved job. AI cannot diagnose, determine urgency, match identity, acknowledge, choose direction, approve/send/accept/reject/redirect/cancel a referral, issue patient communication, confirm a next step or close an episode. |
| Failure and safe return | Unavailable input, invalid entry condition or unavailable service leaves the authorised human on the normal source-based workflow with no state change. AI-01 never blocks source-report review; AI-02 never blocks manual package preparation after human-approved direction. |
| Audit evidence | `EVT-20 ai.assistive.disposition_recorded` retains capability/request ID, approved input references/versions, draft ID/content hash, uncertainty, disposition and failure reason where applicable. |
| Traceability | FR-15; FR-16; NFR-01; NFR-02; NFR-05; NFR-06; NFR-07; AC-FR-15-01 to AC-FR-15-02; AC-FR-16-01 to AC-FR-16-02; `SCR-02`; `SCR-03`; `SCR-05`; `SCR-07`; `SCR-08`; `SCR-09`; EVT-11; EVT-20; FM-01; FM-02; FM-04; FM-10 to FM-14; FM-18; FM-19; FM-21; FM-25; AI-01; AI-02. |

### BRV-18 -- AI review, stale/unsupported output and manual fallback

| Rule element | Rule |
|---|---|
| Trigger | An authorised reviewer opens an AI-01 or AI-02 draft on `SCR-08`, or a source/input change, failure, timeout or unsupported-content condition is detected. |
| Required evidence | Capability label; draft status; generated time; approved minimum source references/versions; uncertainty/limitations; applicable human reviewer; canonical disposition; and failure reason where applicable. |
| Authorised actor | Clinic physician or Care Coordinator may review AI-01 within orientation limits. Referral Coordinator reviews AI-02 for operational use; Clinic physician separately approves applicable clinical content. Receiving team retains referral-acceptance authority. |
| Deterministic validation | A changed report version, direction, assignment, destination or communication constraint marks the draft `stale`. Missing source link, wrong patient/version, unsupported statement or prohibited recommendation is an auditable failure and requires correction or rejection. |
| Allowed outcome | Reviewers may use only the canonical dispositions: `generated`, `unavailable`, `timed_out`, `stale`, `accepted_for_orientation`, `accepted_for_use`, `corrected`, `rejected`, `discarded` or `superseded`. AI-01 may be accepted only for orientation; AI-02 `accepted_for_use` requires human review/approval before separate `EVT-12 referral.package.created` activity. |
| Blocked behaviour | Do not accept stale output without regeneration or source-based human review; silently edit unsupported content; treat a draft as source truth, clinical evidence, acknowledgement, direction, referral package, acceptance or closure evidence; or allow AI to appear as a human decision actor. |
| Failure and safe return | Failure, timeout, stale/conflicting input, unsupported content, missing source link or reviewer rejection records the disposition and returns the user to the calling source-based workflow. AI-01 returns to `SCR-02` or `SCR-03`; AI-02 returns to `SCR-05`. The authorised human continues manually without AI. |
| Audit evidence | `EVT-20` records capability, draft/request ID, input references/versions, uncertainty, reviewer, disposition, review time, failure reason and linked correction/superseding evidence. Active draft text/review status remains in minimum-necessary workflow storage; audit retains provenance and content hash rather than requiring full draft text. |
| Traceability | FR-15; FR-16; FR-25; FR-32; FR-33; NFR-04; NFR-05; NFR-06; NFR-07; AC-FR-15-01 to AC-FR-15-02; AC-FR-16-01 to AC-FR-16-02; AC-FR-25-01 to AC-FR-25-02; AC-FR-32-01 to AC-FR-32-03; AC-FR-33-01 to AC-FR-33-03; `SCR-02`; `SCR-03`; `SCR-05`; `SCR-07`; `SCR-08`; `SCR-09`; EVT-08; EVT-12; EVT-20; FM-11; FM-20; FM-21; FM-24; FM-25; AI-01; AI-02; D13. |

### BRV-19 -- Append-oriented audit, correction and read-only analytics

| Rule element | Rule |
|---|---|
| Trigger | Any material source, internal workflow, human decision, deterministic-control, AI-assistive, correction or recovery event is recorded or viewed through `SCR-09`. |
| Required evidence | Each audit entry has an audit ID and shared event ID; event type; correlation ID; verified episode ID where available; source/event/resource ID and version; applicable timestamps; actor type/reference/role; access mode; prior/current state and transition; source/workflow evidence refs; processing outcome/idempotency key; and correction/recovery links where applicable. |
| Authorised actor | ContinuumOS records append-oriented target audit evidence. Governance, Product/platform administrator and authorised operational reviewer may view linked evidence. Human authority remains with the relevant accountable role; AI must never appear as a human decision actor. |
| Deterministic validation | Keep source evidence, internal workflow evidence, human decisions, AI dispositions, exceptions, communication/confirmation and derived/read-only measures distinct. One logical event may create linked receipt, validation, processing, human-review, correction and recovery entries; no later entry overwrites an earlier one. |
| Allowed outcome | `SCR-09` displays attributable ordered evidence and correction chains. A correction/supersession appends a linked entry using `correction_of` or `supersedes_ref`, with reason, correcting actor and time. Derived analytics may aggregate approved evidence as read-only learning signals. |
| Blocked behaviour | Do not destructively edit/delete prior audit history; rewrite an earlier acknowledgement/referral/communication/closure because a source report changes; expose raw tokens/full source payloads; or allow analytics/metric thresholds to create tasks, change state, invoke AI, send communication or make/replace a human decision. |
| Failure and safe return | Missing or failed audit evidence is visible as a defect/exception; no destructive correction is available. A correction/recovery remains linked to earlier evidence, and a failed event is never shown as success. |
| Audit evidence | Applies to EVT-01 through EVT-22. Correction entries retain `correction_of`/`supersedes_ref`, reason, correcting actor and correction time. Derived measures carry data-quality/version context and remain non-operational. |
| Traceability | FR-14; FR-15; FR-16; FR-33; NFR-02; NFR-03; NFR-05; NFR-06; NFR-07; AC-FR-14-01 to AC-FR-14-02; AC-FR-15-01 to AC-FR-15-02; AC-FR-16-01 to AC-FR-16-02; AC-FR-33-01 to AC-FR-33-03; `SCR-08`; `SCR-09`; EVT-01 to EVT-22; FM-24; FM-25; AP-10; AP-11; AP-13; AP-14; D15; D16; D17. |

---

## Remaining detailed-rule coverage to review

| Planned rule area | Required scope | Source status |
|---|---|---|
| Result availability | Detailed above in BRV-04. | Reviewed -- Group 2 |
| Clinical acknowledgement | Detailed above in BRV-05 and BRV-06. | Reviewed -- Group 2 |
| Amended report | Detailed above in BRV-07. | Reviewed -- Group 2 |
| Patient linkage | Detailed above in BRV-02. | Reviewed -- Group 1 |
| Referral authority | Detailed above in BRV-08 and BRV-09. | Reviewed -- Group 3 |
| Receiving response | Detailed above in BRV-10. | Reviewed -- Group 3 |
| AI control | Detailed above in BRV-17 and BRV-18. | Reviewed -- Group 6 |
| Closure | Detailed above in BRV-11 to BRV-13. | Reviewed -- Group 4 |
| Failed write | Detailed above in BRV-16. | Reviewed -- Group 5 |
| Duplicate event | Detailed above in BRV-15; BRV-03 retains the operational-milestone subtype control. | Reviewed -- Group 5 |
