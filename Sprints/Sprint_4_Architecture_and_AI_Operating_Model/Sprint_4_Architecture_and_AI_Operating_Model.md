# Sprint 4 — Design the Architecture and AI Operating Model

## Objective

Define a credible integration and orchestration architecture without presenting future enterprise components as implemented.

## Architecture layers

1. Existing systems: EHR, LIS, RIS/PACS, referral, communication, billing/RCM and home-monitoring systems.
2. Interoperability: SMART on FHIR, FHIR APIs, HL7 v2, identity and consent, terminology mapping.
3. ContinuumOS workflow layer: workflow state, task ownership, SLA monitoring, exception queue and audit trail.
4. AI support: source-linked episode summary and source-linked referral-handoff draft after human-approved referral or escalation. Missing-handoff detection remains a deterministic workflow rule.
5. Analytics: acknowledgement delay, unassigned results, referral completion, exceptions, user corrections and AI error rate.

## Required work

- Create the simplified architecture diagram.
- Create one SMART on FHIR launch sequence.
- Define synthetic FHIR resources used by the MVP.
- Create the event catalogue with approximately ten workflow events.
- For each event, define source, required fields, destination, duplicate handling and failure handling.
- Create AI service cards and an AI control matrix.
- Define source data, output type, uncertainty, human owner, allowed action and approval status for every AI output.
- Create the illustrative regional HIE deployment-readiness checklist.
- Record technical decisions and explicitly label future enterprise components.

## Guardrails

- Kafka, Flink, Spark and openEHR remain architecture or roadmap concepts only.
- AI suggests, summarises or detects; it does not diagnose, approve referrals, approve discharge or make financial decisions.
- The system must not attach uncertain events to a patient episode.

## Sprint exit criteria

- SMART launch, limited scopes and audit capture are understandable end to end.
- AI-human boundaries are visible.
- Event idempotency, reconciliation and failure handling are specified.
- Architecture supports the MVP without implying production scale.

## Status

- [ ] Not started
- [ ] In progress
- [x] Complete

## Progress

### Parts 1–2 — architecture boundary and simplified diagram — 2026-07-18

- `architecture_principles_and_boundary.md` defines the inherited authority order, architecture principles, MVP/represent-only/future boundaries, source read/write boundary, human/rule/AI separation, failure contract and initial Sprint 4 architecture decisions.
- `simplified_architecture.md` defines the logical MVP layers, source and internal boundaries, main information path and project-native Mermaid architecture diagram.
- The architecture uses the six approved source FHIR R4 resource types plus the separate internal/simulated Task model; it does not introduce a live integration or source-write scope.
- The tracker wording was corrected to preserve the canonical Sprint 1–3 AI boundary: missing-handoff detection is deterministic, while the two MVP AI capabilities are the source-linked episode summary and post-approval referral-handoff draft.
- Kafka, Flink, Spark, openEHR, regional HIE connectivity and production identity/security controls remain explicitly future architecture context.
- No implementation, production integration, deployed AI, clinical validation, user research or outcome claim was added.

The subsequent SMART on FHIR launch-sequence artifact was completed with exact demonstration context, candidate minimum scopes, failure stops and audit capture.

### Part 3 — SMART on FHIR launch sequence — 2026-07-18

- `smart_on_fhir_launch_sequence.md` defines the clinician-only SMART launch, candidate read-only scopes, minimum retrieval, linkage verification, audit capture, separate operations access and failure/recovery rules.
- No live SMART launch, OAuth/token service, source write-back, FHIR Task write, terminology conformance, production security or clinical outcome claim was added.

Supporting later Sprint 4 artifact: `synthetic_fhir_resource_definitions.md` defines the six synthetic FHIR R4-shaped source fixtures plus the separate internal/simulated `continuum_task` model. It is retained as a data-boundary dependency, not as the agreed Part 4 deliverable.

### Part 4 — Event catalogue and idempotency/recovery rules — 2026-07-18

- `event_catalogue_and_recovery_rules.md` defines 22 explicit event families. It separates SMART launch from authorisation, resource-level retrieval from linkage, report availability from review assignment, each material human decision, referral/receiving response, delivery from patient confirmation, AI disposition, recovery and closure.
- Each event specifies source, required fields, destination/state effect, stable idempotency key, duplicate handling, failure handling and human control. Recovery returns to the last verified state and preserves linked correction history; no generic human-decision event hides decision-rights differences.
- No transport-level exactly-once, event broker, production recovery or live integration claim was added.

### Parts 5–6 — AI controls and audit/analytics data contract — 2026-07-18

- `ai_service_cards_and_control_matrix.md` defines the two approved assistive capabilities: source-linked episode summary and post-approval referral-handoff draft. Each card specifies permitted trigger, minimum inputs, output, uncertainty, human owner, approved action, prohibited action, audit evidence and non-blocking fallback.
- `audit_and_analytics_data_contract.md` defines minimum audit fields, append/correction rules, material-event coverage and read-only derived measures. Metrics cannot trigger workflow, AI, communication or decisions.
- AP-14 and S4-AD14 formalise the analytics boundary: measures are versioned, derived and non-triggering.

### Parts 7–8 — HIE readiness and technical roadmap labels — 2026-07-18

- `illustrative_hie_deployment_readiness_checklist.md` sets out future assessment domains for governance, consent, identity, source authority, interoperability, access, data minimisation, human workflow, audit, resilience, AI, communication and operating readiness. Every item remains not assessed; the checklist grants no deployment approval.
- `technical_decisions_and_roadmap_labels.md` consolidates Sprint 4 decisions with explicit MVP-design, represent-only, future-readiness and deferred/excluded labels. It keeps production security, consent, conformance, HIE participation and scaling as future work.

All Sprint 4 required work is now complete as requirements-level documentation. Sprint 5 remains not started.

### HIE and roadmap precision correction — 2026-07-18

- The illustrative HIE checklist now applies as an initial question set for other multi-organisation exchange models and adds data residency, terminology ownership/change control, participant exit/downgrade and explicit non-transfer of decision authority.
- The roadmap register now uses `Synthetic MVP requirements` as a design-only label, splits mixed TDR-13 status into separate requirements/represent-only decisions, names event types before EVT identifiers and records the multi-entry audit model.
- New-report version changes explicitly keep operational completion, report completeness, assignment and acknowledgement separate while flagging dependent AI, referral and communication evidence for human reassessment.

### AI and audit/analytics precision correction — 2026-07-18

- AI event names are the primary cross-artifact reference, with stable EVT identifiers secondary. Both approved services now use a shared stale/unsupported-content/disposition contract and preserve active draft text in workflow storage with draft id/hash and provenance in audit.
- EVT-08 marks AI drafts dependent on an amended/corrected report stale; EVT-20 records the shared AI disposition set and requires regeneration or source-based human review before a stale draft is used.
- Summary use is explicitly separated: the physician may orient before source review; the Care Coordinator may orient to workflow status/ownership/missing source evidence but cannot interpret clinical meaning or make a decision.
- The audit contract now distinguishes one logical event from multiple linked audit entries, names event/processing/decision/correction timestamps, distinguishes human/system/AI actor types and adds explicit metric data-quality and versioning fields.
- Derived measures now use event names as primary mappings and define acknowledgement clock, unassigned-result window, confirmation applicability and AI evaluation measures more precisely.

### SMART and synthetic-fixture precision correction — 2026-07-18

- The SMART sequence now distinguishes launch parameters, `.well-known/smart-configuration` discovery, authorisation, authorised FHIR retrieval and separate failure paths for discovery, authorisation, token/session, FHIR access and endpoint availability.
- Candidate scopes now treat Practitioner as user-context access (`user/Practitioner.r`), with `fhirUser` identifying the reviewing clinician; they no longer imply patient-compartment Practitioner access.
- The fixture separates the ordering/reviewing clinic physician from the reporting professional, supplies a non-diagnostic Observation value, an amended report version, and separate simulated operational completion evidence.
- The T04 formulation is now explicitly fixture-specific across the transition table, decision register, FHIR map, field mapping, integration flow, failure map, architecture and event catalogue. It does not claim that every valid FHIR DiagnosticReport needs an Observation reference.

### Parts 1–2 alignment correction — 2026-07-18

- The governing relationship is now explicit: `architecture_principles_and_boundary.md` controls, and `simplified_architecture.md` is its derived visual/operational view.
- Decision Register D13–D18 formalises non-blocking AI fallback, complete-result evidence, minimum-necessary data, append-oriented linked audit corrections, communication/confirmation separation and the linkage contract.
- The synthetic T04 rule now requires current DiagnosticReport status `final`, `amended` or `corrected`, the current version, resolved required result references and the source completion condition; Observation or preliminary/partial evidence alone cannot create `Result Available`.
- The diagram separates clinician SMART launch from operations access, shows material human actions, the exception/safe-return path, workflow-visible AI draft state, non-blocking AI failure, separate communication evidence and evidence-versus-measurement responsibilities.
- Minimum closure evidence is defined, including the human-owned closure action and prohibition on treating notification delivery as patient understanding or acceptance.
- Existing Sprint 1–3 decision, transition, failure, system-of-record, FHIR, field, permission, integration, scope and decision-rights artifacts were synchronised. No new state, user authority, live integration, production control or autonomous capability was introduced.
- The later SMART, event, AI-control and audit artifacts carry these rules forward. UAT and prototype files do not yet exist and were not created during this correction.

### Version-change and decision-register verification — 2026-07-18

- Amended and corrected reports now follow the same version-change control: T04 completeness does not bypass E05/E06; a revised current version must be re-reviewed and acknowledged.
- A prior acknowledgement is retained as historical evidence only. When a revised report arrives after acknowledgement, the workflow flags affected follow-up direction, referral/handoff and patient communication for human reassessment; it does not automatically cancel, redirect or resend downstream work.
- `decision_clarification_and_propagation_log.md` records the owner, rationale, earlier-decision relationship, affected artifacts, propagation status and evidence status for D13–D18. All six are clarifications, not silent supersessions or duplicate competing decisions.

### Final traceability review against Sprints 1–3 — 2026-07-18

- `final_traceability_review_against_sprints_1_to_3.md` checks every Sprint 4 artifact against the approved Sprint 1 decision/state/tracer/scope sources, Sprint 2 alignment/decision-rights/system-of-record/failure/operating-model sources and Sprint 3 baseline/scope/stakeholder/decision-rights/FHIR/field/permission/integration/acceptance sources.
- The review verdict is aligned after four bounded documentation corrections. It found no unresolved material gap requiring a product decision.
- S4-TRC-01 restored the exact T14/D17 pathway-applicable communication/confirmation rule in EVT-22 and the audit contract; sent or delivered status remains insufficient for closure.
- S4-TRC-02 made EVT-04 explicit about patient, encounter, order and event references/versions, event-conflict quarantine and no source-record alteration.
- S4-TRC-03 mapped EVT-06 operational subtypes explicitly to T01/T02/T03.
- S4-TRC-04 replaced stale references to already-created Sprint 4 event, AI and audit artifacts while retaining UAT/prototype work as future obligations.
- Seven governing CSVs parsed with unique primary IDs; all 11 JSON fixture blocks parsed; EVT-01–EVT-22 IDs/names and required transition references resolved; both Sprint 4 Mermaid artifacts passed structural fence/declaration checks; stale wording, status labels and unsupported-claim searches passed.
- No canonical state, capability, integration, decision right, source authority, evidence requirement or implementation claim was added. Sprint 4 remains complete as a requirements-level documentation package; UAT, prototype, open assumptions, pilot hypotheses, D12 policy review and production-readiness work remain outside this completion claim.
