# Hospital Systems Discovery Context and Problem Coverage

## Purpose and evidence boundary

This artifact shows how the bounded ContinuumOS diagnostic-closure case sits within a wider hospital operating and system landscape. It is derived from the approved ContinuumOS baseline and the user's earlier healthcare-workflow planning research. It demonstrates problem framing and scope judgement; it is not evidence of hospital discovery, stakeholder interviews, system access, operational baselines, implementation or outcomes.

The approved Sprint 5 requirements, canonical states, human decision rights, source authority, screens and two-capability AI boundary remain unchanged.

## Wider hospital-system context

| Hospital capability or system | Typical authority or role | Relevant coordination problem | ContinuumOS treatment |
|---|---|---|---|
| HIS/EHR/EMR | Patient, encounter, order and clinical-record authority | A source record may exist without a visible cross-team owner or next action. | Minimum synthetic context is read through the simulated SMART/FHIR boundary; ContinuumOS does not replace or write the source record. |
| LIS/RIS/PACS/reporting source | Diagnostic operations, result and report-version authority | Processing, operational completion, report availability and clinical acknowledgement can be confused. | These evidence types remain separate; the current report version and human acknowledgement are explicit. |
| Referral and receiving-team systems | Referral package and receiving-response authority | Package preparation, routing and receiving response can be treated as one event. | ContinuumOS keeps human direction, package preparation/routing and receiving-team response separate. Real integration is represented only. |
| Billing/RCM/payer systems | Administrative and financial authority | Missing information or authorisation status may be disconnected from the clinical pathway. | Financial readiness is a visible, human-owned dependency only. Detailed billing, claims and denial recovery remain deferred. |
| Patient communication or portal channel | Approved message, send/delivery and communication record | Sent or delivered communication may be mistaken for patient confirmation. | Preparation, approval, send/delivery evidence and explicit confirmation are separated. No patient portal is built. |
| BI/reporting layer | Derived operational measures and governed definitions | Disputed definitions, missing source evidence or manual correction can reduce trust. | Measures are read-only, versioned and derived from approved workflow/audit evidence; no leadership dashboard or achieved KPI improvement is claimed. |
| Identity, consent and access services | Patient identity, encounter, consent and workforce-access authority | Uncertain linkage or excessive access can create safety and privacy risk. | Uncertain linkage enters human reconciliation; production identity, consent and RBAC/ABAC remain future-readiness work. |
| Departmental trackers and queues | Local operational coordination | Separate trackers can hide ownership, ageing, exceptions and changes. | The proposed overlay centralises bounded episode tasks, owners, exceptions and attributable workflow history without becoming the clinical record. |

## Root-cause separation used by the case

The phrase "diagnostic result delay" can refer to different failures. ContinuumOS keeps them separate so the prototype does not misdiagnose the problem:

1. Order or encounter context is incomplete or linked to the wrong episode.
2. Diagnostic operations have not accepted, scheduled or completed the work.
3. The current report is preliminary, incomplete, amended or otherwise not ready under the synthetic-fixture rule.
4. Review work has not been assigned to the responsible Clinic physician.
5. The current report is available but has not been explicitly acknowledged.
6. A human follow-up direction exists but the handoff, receiving response or evidence package is incomplete.
7. Communication was prepared or delivered but the required next-step confirmation is absent.

This separation is a design and validation model. It is not a finding from a real hospital or proof of any particular root cause.

## Problem-coverage matrix

| Problem from the wider planning research | Coverage | Current ContinuumOS response | Boundary or future decision |
|---|---|---|---|
| Result visibility versus clinician review | Covered in MVP | `Result Available`, review assignment and clinician acknowledgement are separate, version-aware evidence. | No clinical interpretation or source-report authoring. |
| Missing owner, ageing and cross-team handoff | Covered in MVP | Named task owner, SLA/ageing, referral roles, receiving response and safe return are defined. | Organisational staffing and real service-level performance are unvalidated. |
| Duplicate, mismatched or incomplete episode evidence | Covered in MVP | Verified linkage, exception queue, duplicate protection, incomplete-result handling and reconciliation are defined. | No production MPI or autonomous matching. |
| Weak exception and audit visibility | Covered in MVP | Visible exceptions, last-verified-state recovery and append-oriented attributable history are specified. | Tamper-evident production storage is not implemented. |
| Unsafe or unexplained AI assistance | Covered in MVP | Two source-linked, reviewable AI assists have stale-output, rejection, audit and manual-fallback controls. | No deployed model or model-performance claim. |
| Patient status and communication clarity | Partially covered / represented | Communication approval, send/delivery, follow-up and confirmation evidence are separated. | Patient-facing portal redesign and open-ended chatbot are deferred. |
| Billing, package, insurance and authorisation exceptions | Partially covered / represented | Financial readiness and missing payer information remain visible, human-owned dependencies. | Claims, package validation, detailed denial recovery and financial decisions remain outside MVP. |
| Leadership dashboard trust and KPI reconciliation | Partially covered | Measures require visible definitions, provenance, missingness and read-only behaviour. | No enterprise dashboard rebuild, live reconciliation or outcome baseline. |
| Physician clinical-documentation burden | Limited | The source-linked episode summary supports orientation; the handoff draft supports post-approval preparation. | Clinical-note drafting, ambient documentation and patient-specific recommendations are excluded. |
| Registration, consent capture, vitals and preventive-package workflow | Deferred | Only the minimum verified patient/encounter context needed for diagnostic closure is represented. | Preventive Health Check-up Orchestration requires separate discovery and requirements. |
| Full annual health-check journey | Roadmap only | Diagnostic closure is the selected first wedge within the wider journey. | Registration-to-billing-to-portal orchestration is not authorised by the current baseline. |
| EHR replacement or longitudinal clinical repository | Excluded from MVP | Source systems remain authoritative; ContinuumOS stores orchestration evidence only. | openEHR or another longitudinal platform requires a separate product and architecture decision. |

## Future discovery evidence, if scope is revisited

Before expanding into the deferred hospital workflows, a real initiative would need participant-approved, de-identified or synthetic evidence such as:

- timestamped examples separating diagnostic processing, report availability, acknowledgement and communication delay;
- source-system and owner mapping for each operational status and decision;
- top billing/package/insurance exception categories and their upstream causes;
- patient-contact reasons and the status information available to support teams;
- KPI definitions, source lineage, refresh/correction rules and disputed-measure examples; and
- role, consent, audit, retention and AI-use policies for the participating organisation.

No such organisational evidence is claimed in this portfolio case.

## Portfolio interpretation

The earlier planning research demonstrates breadth across hospital operations. ContinuumOS demonstrates depth by selecting one credible wedge and defining its workflow, data, authority, failure, AI and audit controls. The two views are complementary: the wider context explains why the problem matters; the bounded baseline explains what can be responsibly demonstrated.
