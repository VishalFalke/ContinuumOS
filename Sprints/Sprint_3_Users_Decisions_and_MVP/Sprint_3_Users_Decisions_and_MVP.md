# Sprint 3 — Define Users, Decisions and MVP

## Objective

Translate the care journey into user jobs, decision rights, integration requirements and a frozen MVP boundary.

## Required work

- Create the stakeholder map.
- Define jobs-to-be-done for clinic physician, care coordinator, diagnostic operations, hospital operations, specialist, discharge coordinator, billing/RCM, payer desk, nursing, pharmacy, IT, governance and patient/caregiver roles.
- Create the decision-rights and AI-suitability matrix.
- Freeze the MVP scope.
- Define deferred capabilities.
- Document the integration flow from EHR launch through audit record.
- Create the minimum FHIR resource map: Patient, Encounter, Practitioner, ServiceRequest, Observation, DiagnosticReport and Task.
- Create the field-mapping table.
- Define least-privilege access and permission assumptions.
- Record interoperability decisions: SMART on FHIR, EHR overlay, HL7 v2, workflow-state ownership and real-time versus batch needs.

## MVP includes

- Active care-episode workspace
- Patient timeline
- Diagnostic orders and results
- Result acknowledgement
- Owner assignment
- Referral decision
- Next-step status
- Exception queue
- Audit history
- Clinician-reviewed AI episode summary
- Source-linked AI referral-handoff draft after human-approved referral or escalation
- Deterministic missing-handoff and exception detection; AI anomaly detection remains deferred

## Defer

- Real EHR, payer or device integrations
- Autonomous coding or clinical decisions
- OT optimisation
- Multi-hospital capacity management
- Production identity matching
- Kafka, Flink and openEHR implementation
- Real AI model calls

## Sprint exit criteria

- Every MVP capability maps to a user job and acceptance condition.
- Every AI capability has a human owner.
- FHIR resource use and permissions are limited to the workflow need.
- Scope is frozen before architecture and prototype work.

## Status

- [ ] Not started
- [ ] In progress
- [x] Complete

## Progress

## Final cross-artifact alignment review — 2026-07-18

The final review passed against the approved Sprint 1 transition table, decision register and synthetic tracer, plus the Sprint 2 decision-rights matrix, system-of-record table, failure-path map and exit checklist.

- Canonical states, transition evidence, role separation, human gates, D12/T11U financial-readiness branch, AI limits and MVP/represent-only/deferred boundaries align.
- The review confirmed distinct authority for the clinic physician, specialist, receiving team, Referral Coordinator, Care Coordinator, reconciliation reviewer and financial decision-maker.
- ServiceRequest is limited to order evidence; operational acceptance/scheduling, diagnostic completion, report availability/finality, amendments and renewed review remain distinct.
- FHIR R4 source authority, Observation conditional fields and traceability, DiagnosticReport `basedOn`/version/status handling, internal non-conformant Task wording, read-only candidate SMART scopes, audit target behaviour and raw-token restrictions align.
- Small corrections made during review: the FHIR map now explicitly identifies six source FHIR R4 resource types plus a bounded internal/simulated Task model; CAP-09 now describes audit immutability as a target requirement, not achieved implementation.
- Both Sprint 3 CSVs parse with consistent columns and unique IDs; all decision-matrix job references and scope capability references resolve; all 23 canonical source states are represented in the Sprint 3 baseline.

Sprint 3 is documentation complete and ready for Sprint 4. This disposition does not resolve A01/A02/A03/A08/A09/A10/A11, A05/A07/A12, the proposed D12 operating-policy review, or later production interoperability, security and AI-evaluation work.

FHIR map alignment correction applied: FHIR R4 is explicit; ServiceRequest is limited to order evidence; acceptance and scheduling use operational evidence; DiagnosticReport version/status semantics, basedOn links and non-conformant internal Task wording are explicit.

Field-map review correction applied: ServiceRequest status cannot create Order Accepted; Diagnostic Completed is sourced from an operational completion event; report version/status/re-review semantics and conditional Observation structures are explicit; FM-14 links DiagnosticReport.basedOn to the source order.

Permissions/interoperability review correction applied: omitted stakeholder access is explicit; the boundary is six source FHIR R4 types plus one internal task model; reconciliation decision and recording attribution are separated; patient/caregiver participation is represent-only; and candidate read-only SMART scopes are documented for Sprint 3.

Steps 1–2 are complete as documented Sprint 3 foundations:

- `sprint_3_baseline_and_alignment.md` freezes the inherited Sprint 1/Sprint 2 baseline, authority order, canonical vocabulary, scope, human gates, AI limits and traceability rule.
- `stakeholder_map.md` maps all required Sprint 3 stakeholders to bounded MVP jobs, authority, ContinuumOS support and dependencies.
- `jobs_to_be_done_and_acceptance.md` maps each required stakeholder and MVP capability to a bounded job, human owner, acceptance condition and failure constraint.
- `decision_rights_and_ai_suitability_matrix.csv` extends the Sprint 2 decision-rights baseline with Sprint 3 job references, AI suitability, permitted support and prohibited actions.
- `mvp_scope_freeze.md` freezes build-now, represent-only and deferred capabilities for downstream architecture and prototype work.
- `integration_flow_ehr_launch_to_audit.md` documents the limited SMART-on-FHIR launch-to-audit flow, source authority, human gates and recovery behaviour.
- `fhir_resource_map.md` defines the seven-resource minimum FHIR boundary and internal/simulated Task treatment.
- `field_mapping.csv` maps minimum source and internal fields to workflow needs, ownership, access and failure handling.
- `permissions_and_interoperability_assumptions.md` defines least-privilege permissions and the SMART/FHIR, EHR-overlay, HL7 v2, workflow-state and timing assumptions for Sprint 4.
- Sprint 3 steps 7–8 and the final cross-artifact review and exit check are documented as complete.

This does not claim user research, stakeholder validation, implementation, clinical validation, production readiness or achieved outcomes. Sprint 3 steps 3–8 are documented as a requirements baseline; the final cross-artifact review and exit check have now passed.

## Sprint 4 architecture-control propagation — 2026-07-18

Sprint 3 FHIR, field, permission, launch-to-audit, scope, acceptance and decision-rights artifacts were synchronised to Decision Register D13–D18. The correction formalises minimum-necessary data, the synthetic complete-result rule, non-blocking AI fallback, a defined linkage contract, separate communication/confirmation evidence, minimum closure evidence and linked append-oriented audit corrections. This is dependency maintenance for Sprint 4 and does not reopen Sprint 3 scope or add implementation claims.
