# Technical decisions and roadmap labels

## Purpose and status

This register consolidates the Sprint 4 technical choices and labels their delivery status. It does not add new workflow states, decision rights, integrations, deployment claims or enterprise components. The governing detailed decisions remain S4-AD01 to S4-AD14 in `architecture_principles_and_boundary.md`.

## Label definitions

| Label | Meaning |
|---|---|
| Synthetic MVP requirements | Defined requirements-level behaviour for the synthetic portfolio demonstration; not implementation evidence. |
| Represent-only | Visible as a boundary, status or simulated evidence, without the real external workflow/integration. |
| Future readiness | Required assessment or design before a real pilot/deployment; not part of the synthetic MVP. |
| Deferred / excluded | Deliberately outside the current MVP; requires a separate scope decision to revisit. |

## Decision and roadmap register

| ID | Technical decision | Design status, not implementation status | Rationale and current boundary | Evidence / next condition |
|---|---|---|---|---|
| TDR-01 | ContinuumOS is a workflow overlay, not a source-system replacement. | Synthetic MVP requirements | Source systems own Patient, Encounter and diagnostic/admin records; ContinuumOS owns orchestration visibility, tasks, exceptions and workflow history. | AP-01/AP-02; validate only with synthetic/test source evidence. |
| TDR-02 | Use a clinician-only simulated SMART launch with separate role-authorised operations access. Access mode, actor and role must be attributable in audit; access mode does not create decision authority. | Synthetic MVP requirements | Avoids implying SMART is a universal workforce gateway or an authority transfer. | SMART sequence/audit contract; real identity-provider/access design is future readiness. |
| TDR-03 | Read the six approved source FHIR R4-shaped resource types and use a separate internal orchestration Task model. | Synthetic MVP requirements | No source write-back or claim that internal Task is FHIR R4 Task. | Synthetic fixture definition; conformance/profile validation is future readiness. |
| TDR-04 | Use simulated synchronous context reads and simulated event arrival; do not introduce an enterprise event broker. | Synthetic MVP requirements | Keeps the demonstration proportional and prevents scale claims. | Event catalogue; Kafka/Flink/Spark are deferred/excluded from MVP. |
| TDR-05 | Process events semantically once per allowed transition, with stable idempotency keys and recovery to the last verified state. | Synthetic MVP requirements | Prevents duplicate advancement without claiming transport exactly-once. | EVT-01–EVT-22; production delivery guarantees are future readiness. |
| TDR-06 | Quarantine uncertain patient, encounter and event linkage for accountable human reconciliation. | Synthetic MVP requirements | Prevents silent attachment and autonomous identity matching. | Linkage contract/event rules; enterprise MPI is future readiness. |
| TDR-07 | Keep diagnostic operational completion, report completeness, review assignment and clinician acknowledgement as separate evidence types. Apply the approved synthetic-fixture T04 rule and E05/E06 re-review. A new report version preserves historical evidence, reopens required review and flags dependent AI drafts, referral packages and communication content for human reassessment; it does not automatically reverse earlier human decisions. | Synthetic MVP requirements | The configured Observation reference and completion evidence are fixture rules, not universal FHIR constraints. | `diagnostic.operation.status_received`, `diagnostic.report.complete_available`, `result.review.assigned`, `result.acknowledgement.recorded` and `diagnostic.report.amended_or_corrected`; source-specific policy validation is future readiness. |
| TDR-08 | Keep deterministic workflow controls separate from the two approved assistive AI services. | Synthetic MVP requirements | Missing-owner, overdue, duplicate, incomplete-result, missing-handoff and service checks are rules, not AI. | AI cards/control matrix; future anomaly detection remains deferred. |
| TDR-09 | Keep AI optional, source-linked, human-reviewed and stale-aware. | Synthetic MVP requirements | AI drafts never change state; source changes mark dependent drafts stale and require regeneration or source-based review. | `diagnostic.report.amended_or_corrected` (EVT-08) and `ai.assistive.disposition_recorded` (EVT-20); model evaluation/deployment is future readiness. |
| TDR-10 | Retain active AI draft text/review state in workflow storage and draft id/hash/provenance/disposition in audit. | Synthetic MVP requirements | Maintains traceability without a separate AI evidence store or full source-record copy. | AI cards and audit contract; retention/security implementation is future readiness. |
| TDR-11 | Use append-oriented attributable audit history with linked correction/supersession/recovery entries. | Synthetic MVP requirements | Earlier evidence remains visible; tamper-evident implementation is not claimed. | Audit data contract; immutable storage/retention/access monitoring are future readiness. |
| TDR-12 | A logical event may produce linked receipt, validation, processing, review, correction and recovery audit entries; audit entries are not overwritten as processing progresses. | Synthetic MVP requirements | Separates the event record from its evolving audit history. | Audit and analytics data contract; storage implementation is future readiness. |
| TDR-13A | Keep referral package, receiving response, communication delivery and patient confirmation as separate human/evidence event types. | Synthetic MVP requirements | Preserves distinct authorities and prevents delivery from implying confirmation. | Event catalogue; workflow evidence only. |
| TDR-13B | Real referral, receiving-team and communication integrations remain simulated or represented. | Represent-only | The MVP records internal/simulated evidence without claiming external routing, acceptance or delivery integration. | Separate integration approval and evidence required. |
| TDR-13C | Financial authorisation remains represent-only and human-owned. | Represent-only | No coverage inference, payer decision, payment approval or clinical-pathway selection is delegated to ContinuumOS or AI. | Separate financial/payer scope decision required. |
| TDR-14 | Preserve production identity, consent, security, hosting/data residency, terminology ownership, interoperability conformance and HIE/multi-organisation participation as future-readiness work. | Future readiness | These controls need participant-, jurisdiction- and deployment-specific assessment. | Illustrative HIE checklist; no regional deployment claim. |
| TDR-15 | Exclude EHR replacement, enterprise streaming/analytics platforms, real payer workflow, discharge/home recovery and command-centre operation. | Deferred / excluded | They are outside the diagnostic-closure MVP and cannot be inferred from the architecture. | Separate scope/decision record required before reconsideration. |

## Roadmap view

| Horizon | Focus | Explicit boundary |
|---|---|---|
| Synthetic MVP requirements | Demonstrate read-only clinician launch, source-linked workflow, event controls, human decision gates, two assistive AI drafts, append-oriented audit target and read-only measures. | No live integration, source write, production security, model deployment or outcomes claim. |
| Readiness before any pilot | Assess governance, participant/source authority, legal basis/consent, identity, FHIR/terminology, access/security, audit/recovery, AI governance, communication policy and operating support. | Requires separate participant and local approvals; this portfolio case does not evidence readiness. |
| Future platform decisions | Evaluate real integrations, conformance, workforce identity, resilience, metrics reporting and participant operating model if a scoped pilot is approved. | Does not automatically include enterprise streaming, EHR replacement, payer workflows or broader care pathways. |

## Change-control rule

Any proposed change to a canonical state, human authority, source-write boundary, AI capability, source resource boundary, metric definition, denominator, observation window, pathway applicability, data-quality qualification, metric-trigger behaviour or deferred item requires a named decision owner, rationale, affected artifacts, propagation check and evidence-status update before use.

The synthetic MVP requirements package does not constitute pilot readiness. Pilot consideration requires named participant, legal, identity, security, interoperability, operational and governance approvals.

## Traceability and evidence status

- Governing decisions: S4-AD01 to S4-AD14 and AP-01 to AP-14.
- Carry-forward sources: Sprint 1 decision/state registers; Sprint 2 operating-model/decision-rights artifacts; Sprint 3 scope, FHIR, permissions and integration artifacts; Sprint 4 SMART, event, AI and audit contracts.
- Evidence status: **requirements and roadmap labels for a synthetic portfolio case; not an implementation or deployment plan**.
