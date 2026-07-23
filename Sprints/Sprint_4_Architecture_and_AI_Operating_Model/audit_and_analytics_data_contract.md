# Audit and analytics data contract

## Purpose and status

This requirements-level contract defines the minimum audit evidence and read-only derived analytics for the synthetic ContinuumOS MVP. It does not claim an implemented audit platform, tamper-proof storage, production retention schedule, dashboard, metric results or automated workflow control.

Audit preserves attributable workflow history. Analytics derives measures from approved audit/workflow evidence. Neither analytics nor a metric threshold may create a task, change a workflow state, send communication, invoke AI or make a human decision.

## Data boundary and ownership

| Data domain | Authoritative owner | ContinuumOS treatment | Prohibited treatment |
|---|---|---|---|
| Patient, Encounter, ServiceRequest, Observation, DiagnosticReport and Practitioner source records | Source system | Retain approved minimum references, versions, timestamps and workflow-relevant fields | Copy full source records, alter source resources or claim a longitudinal clinical repository |
| Internal episode, task, exception, decision, communication and closure evidence | ContinuumOS workflow layer | Record minimum orchestration evidence and references | Treat internal records as source clinical truth |
| Audit history | ContinuumOS audit target | Append attributable event/correction/recovery evidence | Destructive edit/delete or claim implemented immutability |
| Derived analytics | ContinuumOS read-only measurement layer | Aggregate approved evidence into measures | Trigger workflow, automate decisions or infer missing source evidence |

## Canonical audit-event contract

Every material event from the event catalogue creates append-oriented audit evidence. One logical event may have multiple linked audit entries: receipt, validation, processing outcome, human review, correction and recovery. Each audit entry has its own `audit_id` and links to the same `event_id`; event progress must never overwrite one audit row.

| Field group | Required fields | Rule |
|---|---|---|
| Identity and linkage | `audit_id`, `event_id`, `event_type`, `correlation_id`, verified `episode_id` where available, source system, source event/resource id and version | Uncertain linkage remains quarantined and must not receive a valid episode attachment. |
| Time and order | `occurred_at`, `received_at`, `recorded_at`, `processed_at`, `decision_at`, `corrected_at`, sequence/replay indicator | `occurred_at` is source event time where supplied; `received_at`/`processed_at` are platform times; `decision_at` applies to human decisions; `corrected_at` applies to corrections. Fields may be absent when not applicable and must not be fabricated. |
| Actor and authority | `actor_type` (`human`, `source_system`, `continuumos_service`, `deterministic_rule`, `ai_service`), actor reference/role where applicable, recording actor where different, access mode | Human actor fields are required only for human action. AI must never appear as a human decision actor; a system may be recording actor but not accountable decision owner. Role access does not prove decision authority. |
| State and decision | prior state, candidate/current state, transition id, decision/assignment/referral/confirmation/closure reference, outcome | State change must link to the approved transition/evidence; AI output never appears as the decision actor. |
| Source/evidence references | minimum source refs/versions, report version, configured fixture-check result where applicable, task/exception/communication refs | Store references and validation result, not raw SMART tokens or full source payloads. |
| Control and disposition | processing outcome, idempotency key, duplicate/replay disposition, exception/safe-return ref, reviewer disposition, failure/recovery ref | Preserve `received`, `processed`, `rejected`, `quarantined` or `superseded` outcome. |
| Correction chain | `correction_of`, `supersedes_ref`, correction reason, correcting actor, correction time | Corrections append linked entries; earlier evidence remains visible. |

## Canonical AI draft disposition

AI cards, `EVT-20 ai.assistive.disposition_recorded`, audit entries and later UAT/prototype trace views use these dispositions: `generated`, `unavailable`, `timed_out`, `stale`, `accepted_for_orientation`, `accepted_for_use`, `corrected`, `rejected`, `discarded` and `superseded`.

The active draft text and review state remain in workflow storage. Audit stores draft id, content hash, input references/versions, disposition and provenance; it need not store the full text. Unsupported content, missing source link or wrong-patient/wrong-version input is an auditable AI evaluation failure and must be corrected or rejected through a linked entry.

## Material event coverage

| Event category | Required audit emphasis |
|---|---|
| SMART launch, authorisation and retrieval | Access mode, non-sensitive launch/authorisation outcome, requested/granted scopes, resource id/version and retrieval result; never raw launch/token values. |
| Linkage and source evidence | Linkage reviewer/decision, source references/versions, resolution or quarantine disposition. |
| Report availability and amendments | T04 fixture-check result, report status/version, source-specific completion evidence, prior-version link and re-review obligation. |
| Assignment and acknowledgement | Owner/SLA/assignment source; acknowledgement actor, current report version, review evidence and stale-version rejection where relevant. |
| Direction, referral and receiving response | Clinician direction; package/send/receiving-response identifiers, authority, destination/timeframe and linked correction/rejection path. |
| Communication and confirmation | Content-approval reference, sender/delivery evidence, required patient communication and explicit confirmation where pathway policy requires it; delivery is not confirmation. |
| AI assistive use | Capability, approved minimum input refs/versions, output ref, uncertainty, reviewer/disposition and failure/timeout. |
| Exception, recovery and closure | Rule/exception/safe return; recovery verification; closure checklist, accountable closer and linked evidence refs. |

## Append and correction rules

1. One logical event can create multiple linked audit entries: receipt, validation, processing outcome, human review, correction and recovery. Each has its own audit ID and retains the shared event ID.
2. Duplicate, rejected and quarantined events are retained with their idempotency key and outcome; they are not deleted as noise.
3. Corrections and supersessions link to the earlier entry using `correction_of`/`supersedes_ref`, state the reason and identify the correcting actor.
4. A source amendment is source evidence plus a new version-change event; it does not rewrite a prior acknowledgement, referral, communication or closure record.
5. This is target audit behaviour. Tamper-evident implementation, retention duration, access monitoring and export controls remain future validation/readiness items.

## Derived analytics contract

All measures are read-only, calculated from audit/workflow evidence and qualified by missing/duplicate/quarantined data. They are operational learning signals, not clinical quality, outcome or performance claims.

| Metric | Start / end event name (ID secondary) | Definition | Exclusions / caveats | Prohibited use |
|---|---|---|---|---|
| Acknowledgement delay | `diagnostic.report.complete_available` (EVT-07) → `result.acknowledgement.recorded` (EVT-10) | Start is accepted source availability time for the current report version; end is authorised acknowledgement `decision_at` for that same version. Platform receive time is fallback only and must be labelled. | Exclude incomplete, quarantined and superseded versions; amended/corrected report starts a new interval; prior-version acknowledgement never stops the current-version timer. | Do not auto-escalate, judge clinician performance or change SLA automatically |
| Unassigned result count | `diagnostic.report.complete_available` (EVT-07) without valid `result.review.assigned` (EVT-09) | Count a valid current-version result only after the configured assignment window has elapsed with no valid current-version assignment. | Distinguish outage from unassigned work. Late/corrected assignment restates the affected metric period with lineage; it does not overwrite historical audit. | Do not automatically assign or change state |
| Review reassignment rate | `result.review.assigned` (EVT-09) assignment versions | Share of review tasks with a linked reassignment. | Interpret with owner/SLA/outage context. | Do not infer individual performance or coverage sufficiency |
| Referral package completion | `referral.package.created` (EVT-12) | Share of packages whose configured required fields are complete at human approval. | Draft completeness is not referral acceptance. | Do not route or approve a referral |
| Receiving response timeliness | `referral.sent` (EVT-13) → `receiving.response.recorded` (EVT-14) | Elapsed time from send evidence to accepted/rejected response. | Exclude delivery/route failures and unresolved linkage. | Do not treat elapsed time as acceptance or redirect automatically |
| Next-step confirmation completeness | `next_step.confirmed` (EVT-16) | Share of confirmations with applicable direction, owner, timeframe, communication/confirmation and handoff evidence. | Urgent T11U and financial branches must be segmented. | Do not close an episode or infer patient understanding |
| Exception ageing | `deterministic.control.exception_detected` (EVT-19) → linked safe-return/recovery outcome | Open duration of visible exception. | Exclude closed/superseded exception versions; show reason category. | Do not auto-resolve or assign ownership |
| Duplicate/replay rate | processing outcomes and idempotency keys | Proportion of duplicate/replayed events by source/event type | Requires source-volume denominator and transport context | Do not suppress source evidence or claim source defect |
| AI availability and reviewer disposition | `ai.assistive.disposition_recorded` (EVT-20) | Failure/timeout, stale-output, unsupported-statement, missing-source-link, wrong-version-input and prohibited-action-suggestion rates; disposition mix and reviewer correction extent where measurable. | Not model accuracy, clinical benefit or user-satisfaction evidence. | Do not trigger AI retries, workflow changes or decisions |
| Communication-confirmation separation | `communication.delivery_evidence_recorded` (EVT-17) → `patient.confirmation.recorded` (EVT-18) | Delivered communications lacking required explicit confirmation, using only pathways where policy marks confirmation required as the denominator. | Confirmation can be inapplicable; record and segment applicability by pathway policy. | Do not auto-contact, assume understanding or close workflow |
| Correction/recovery traceability | audit correction/recovery refs | Count and linkage completeness of correction/supersession/recovery chains | A correction count is not an error-rate claim without reviewed denominator | Do not overwrite history or penalise users |

## Measurement governance

- Each metric record carries `metric_id`, `metric_version`, `definition_effective_from`, `calculation_time`, `source_window`, `population_definition`, `exclusions` and `data_quality_status`.
- Metrics/dashboards display explicit data-quality flags: `data_complete`, `has_quarantined_events`, `has_superseded_versions`, `clock_skew_detected`, `missing_denominator` and `synthetic_fixture_only`.
- Metric definitions, denominators, time windows and pathway applicability must be versioned and shown with the report. Dashboards must label synthetic data, missingness, exclusions, flags and the difference between source event time and platform record time.
- Access to derived measures follows the minimum-necessary, role-authorised policy; metrics must not expose raw source payloads, tokens or unnecessary identifiers.
- Governance may review measures and audit evidence but cannot destructively edit the event history.
- Any future workflow alert based on a metric requires a separately approved deterministic-rule specification; it is out of scope for this contract.

## Traceability and evidence status

- EVT-01–EVT-22 supply the canonical material-event set.
- AP-10 governs idempotent/attributable processing, AP-11 append-oriented correction, AP-13 minimum-necessary data and AP-14 read-only derived measures.
- D15, D16 and D17 govern minimum data, audit correction and communication/confirmation separation.
- Evidence status: **proposed data contract for synthetic demonstration, later UAT and prototype traceability**. It is not evidence of live audit capture, metric calculation or operational outcomes.
