# AI service cards and control matrix

## Purpose and evidence status

This artifact defines the two approved assistive AI capabilities for the synthetic ContinuumOS MVP: a source-linked episode summary and a post-approval referral-handoff draft. It is a requirements-level control design, not evidence of model selection, deployment, evaluation, clinical validation, performance, safety certification or autonomous action.

AI is optional to valid human progression. ContinuumOS continues to use the source record, deterministic controls and human workflow when AI is unavailable, times out, is rejected or has insufficient source evidence.

Event identifiers in this artifact must match the frozen event catalogue. Event names govern if an identifier and name ever conflict.

The canonical AI draft dispositions are `generated`, `unavailable`, `timed_out`, `stale`, `accepted_for_orientation`, `accepted_for_use`, `corrected`, `rejected`, `discarded` and `superseded`. These values are shared with `EVT-20`, the audit contract and later UAT/prototype trace views.

## Non-negotiable boundary

AI may summarise and draft only. It must not diagnose, determine urgency, match identity, acknowledge a report, choose a follow-up direction, approve/send/accept/reject a referral, authorise finances, confirm a next step or close an episode.

Missing-owner, overdue, duplicate, incomplete-result, missing-handoff and unavailable-service detection are deterministic workflow rules, not AI services.

## Service card A — Source-linked episode summary

| Control | Requirement |
|---|---|
| Capability ID | `AI-01` — source-linked episode summary |
| Purpose | Help an authorised clinician or Care Coordinator orient to the verified diagnostic episode without replacing source-record review. |
| Permitted trigger | Human opens the review-ready workspace or explicitly requests a summary after verified linkage. A trigger never creates a clinical decision or state transition. |
| Approved minimum inputs | Verified Patient/Encounter context; current DiagnosticReport id, version, status, `basedOn` and configured result-reference status; approved supporting Observation value where configured; ServiceRequest identity/status; assigned owner/SLA; relevant exception and source-version references. |
| Excluded inputs | Raw SMART/OAuth data, secrets, unverified linkage candidates, full longitudinal chart, unapproved clinical documents, payer data and any source field not required for the summary job. |
| Output | Draft episode summary with source references, source versions, generated time, stated uncertainty/missing-evidence markers and no clinical recommendation. |
| Human owner | Clinic physician may use the summary to orient before reviewing the source report. Care Coordinator may use it only to understand workflow status, ownership and missing source evidence; the Care Coordinator must not interpret clinical meaning, acknowledge the result or decide the pathway. |
| Allowed human action | Record `viewed` plus, where applicable, `accepted_for_orientation`, `corrected`, `rejected` or `discarded`; use only as orientation while reviewing the source record. |
| Prohibited action | Treat as diagnosis, urgency assessment, identity confirmation, acknowledgement, direction, referral decision or closure evidence. |
| Review disposition | `viewed` is an interaction marker; the canonical disposition is `accepted_for_orientation`, `corrected`, `rejected`, `discarded` or `superseded`. It does not convert the draft into source truth, clinical evidence or an approved clinical action. |
| Stale-input rule | If any referenced source version, assignment, direction or communication constraint changes after generation, mark the draft `stale`. It cannot be accepted for orientation/use without regeneration or source-based human review. |
| Unsupported-content rule | Unsupported statement, prohibited recommendation, wrong-patient reference or missing required source link requires reviewer correction or rejection. Record an AI evaluation failure and a linked correction; do not silently edit it. |
| Failure / fallback | Record `EVT-20 ai.assistive.disposition_recorded` with failure/timeout; display source-linked workspace and continue normal human workflow. |
| Storage and audit evidence | Active draft text and review state remain in workflow storage under minimum-necessary access controls. Audit stores draft id, content hash, minimum input references/versions, reviewer/disposition, timestamps and failure reason; it need not store the full draft text. |
| Evaluation signals (read-only) | Reviewer disposition, stale-output rate, unsupported-statement rate, source-link completeness/missing-link rate and failure/timeout rate. None trigger workflow action. |

## Service card B — Post-approval referral-handoff draft

| Control | Requirement |
|---|---|
| Capability ID | `AI-02` — post-approval referral-handoff draft |
| Purpose | Prepare a source-linked operational draft after a clinician has approved referral or hospital escalation. |
| Permitted trigger | A valid `EVT-11 care.direction.recorded` for referral/escalation, with current report version, verified linkage and required source evidence. No draft is generated before the human direction exists. |
| Approved minimum inputs | Approved direction reference; destination; current report/version and configured evidence refs; ServiceRequest identity; verified Patient/Encounter context; required handoff fields; approved communication constraints; existing exception/completeness markers. |
| Excluded inputs | Any unapproved clinical content, raw SMART/OAuth data, secrets, unverified linkage candidates, full source documents, payer/financial decisions and unsupported destination details. |
| Output | Editable referral-handoff draft with populated/blank required fields, source references/versions, uncertainty and missing-field markers. |
| Human owner | Referral Coordinator reviews and approves operational use; clinic physician separately approves clinically contextual or patient-facing content where required; receiving team controls acceptance. |
| Allowed human action | Edit, accept for package preparation/use, correct, reject, discard or supersede. The authorised human may then create/package/send under the separate referral events. |
| Prohibited action | Create, approve, send, accept, reject, redirect or cancel a referral; determine clinical urgency; issue patient communication; write to a source FHIR record. |
| Review disposition | Use the canonical disposition set; `accepted_for_use` requires human review/approval before `EVT-12 referral.package.created`. A draft is not a referral package. |
| Stale-input rule | A changed report version, direction, assignment, destination or communication constraint marks the draft `stale`. It cannot be accepted for use without regeneration or source-based human review. |
| Unsupported-content rule | Unsupported statement, prohibited recommendation, wrong-patient reference or missing required source link requires reviewer correction or rejection. Record an AI evaluation failure and a linked correction; do not silently edit it. |
| Failure / fallback | Record `EVT-20` failure/timeout; Referral Coordinator prepares the package manually from approved source evidence. |
| Storage and audit evidence | Active draft text and review state remain in workflow storage under minimum-necessary access controls. Audit stores draft id, content hash, direction ref, minimum source refs/versions, required-field completeness, reviewer/disposition, timestamps and failure reason; it need not store the full draft text. |
| Evaluation signals (read-only) | Reviewer disposition, stale-output rate, unsupported-statement rate, missing-field rate, source-link completeness/missing-link rate and failure/timeout rate. None trigger referral routing or workflow action. |

## AI control matrix

| Control area | AI-01 episode summary | AI-02 referral-handoff draft | Required control |
|---|---|---|---|
| Entry condition | Verified linkage; source evidence available | Human-approved referral/escalation; verified linkage; current source evidence | Deterministic validation before request; failed validation routes to exception/pending state. |
| Source authority | Source resources remain authoritative | Source resources and human-approved direction remain authoritative | Output preserves references/versions and cannot overwrite source records. |
| Data boundary | Minimum verified diagnostic context | Minimum verified handoff context after approval | No raw tokens/secrets/full source payloads; no longitudinal clinical repository. |
| Output type | Informational draft summary | Editable operational draft | Output is visibly labelled draft with uncertainty and source links. |
| Human reviewer | Clinic physician or Care Coordinator | Referral Coordinator; physician where clinical content approval is needed | Reviewer/disposition is recorded before operational reliance. |
| Workflow effect | None directly | None directly | Only separately recorded human/deterministic events may change state. |
| Allowed actions | Summarise and state that an expected input field/source reference was unavailable | Draft required-field structure and source-linked context | Deterministic controls, not AI, identify missing owner, overdue handoff or incomplete workflow conditions. No diagnosis, decision, approval, routing or closure. |
| Uncertainty and stale state | State missing, stale, conflicting or unavailable input; do not fill gaps | State missing/uncertain fields; leave them unresolved | Any source-version change makes the draft stale; stale draft cannot be accepted without regeneration or source-based human review. |
| Failure behaviour | Continue source-based human review | Continue manual human package preparation | AI failure is non-blocking and recorded through EVT-20. |
| Storage | Active draft text/review status in workflow store; draft id/hash, provenance and disposition in audit store | Same | No separate AI evidence store or source write-back. |
| Corrections | Reviewer correction/rejection is linked to the draft/disposition | Same | Append linked correction/superseding evidence; do not overwrite historical audit. |
| Analytics | Derived reviewer and availability measures only | Derived reviewer and availability measures only | Analytics is read-only and cannot trigger AI, workflow or human decisions. |

## Request, review and fallback lifecycle

```text
Verified source evidence and deterministic entry checks
  -> optional AI request
  -> source-linked draft with uncertainty
  -> human review: viewed / accepted_for_orientation or accepted_for_use / corrected / rejected / discarded
  -> separate authorised workflow event, if a human chooses to act

AI unavailable, timed out, stale, conflicting input, unsupported content or reviewer rejection
  -> record EVT-20 disposition
  -> continue normal source-based human workflow
```

## Traceability and evidence status

- `AI-01` maps to CAP-10, S3-DR15 and DR20.
- `AI-02` maps to CAP-12, S3-DR07 and DR12/DR13.
- EVT-20 `ai.assistive.disposition_recorded` records AI generation, provenance, stale/unsupported-content handling, reviewer disposition and fallback. It never changes a canonical state.
- D13 governs non-blocking AI fallback; D15 governs minimum-necessary data; D16 governs linked audit correction; D18 governs verified linkage.
- Evidence status: **proposed controls and pilot hypotheses for later evaluation**. No model quality, clinical benefit or implementation claim is made.
