# Sprint 1 — Establish the Product Case

## Objective

Define exactly what ContinuumOS is, who it serves, and the narrow MVP workflow it will demonstrate. By the end of the sprint, the case must be clear, defensible, narrow enough to execute in seven days and explicit about human control.

## Product framing

- Product: ContinuumOS
- Vision: AI-assisted care orchestration across clinic, diagnostics, hospital and home recovery
- MVP name: Diagnostic Closure and Care Escalation
- MVP workflow: diagnostic order → result available → clinician acknowledgement → referral decision → next step confirmed
- Governing principle: one patient, one care episode, one shared status, many care settings
- Required MVP boundary: the flow must include referral or escalation, billing/pre-authorisation readiness and a confirmed next step; “result available” must not be treated as “clinically reviewed”.

## Product case that must be explicit

- Problem: responsibility for moving a patient to the next safe step is fragmented across systems, teams and facilities. The core gap is not merely data exchange; it is the lack of a shared workflow state showing review status, next-action ownership, blockers and safe readiness to proceed.
- Thesis: ContinuumOS is a vendor-neutral orchestration overlay, not an EHR replacement. It coordinates tasks, ownership, approvals, exceptions and patient communication across systems.
- Primary outcome: eligible care episodes progress to the next safe care step within the defined clinical and operational SLA.
- MVP wedge: coordinate the workflow from a diagnostic order raised at a clinic through result availability, clinician acknowledgement, referral or escalation, readiness for the next care setting and confirmed next step.
- Product boundary: the system may recommend, summarise, route, notify and identify workflow exceptions. Clinical decisions, patient matching, referral approval and financial authorisation remain human-controlled.
- Portfolio audience: hiring managers and interviewers for Senior Product Manager, Product Owner, Lead Business Analyst and AI Product roles involving healthcare workflows, interoperability and AI-assisted operations.

## Users and tracer case

- Primary operational user: Care Coordinator or Diagnostic Operations Coordinator, accountable for waiting cases, owners, blockers, SLA ageing, referral readiness, payer readiness and reconciliation.
- Supporting users: clinic physician; diagnostic operations user; referral coordinator; billing/pre-authorisation user; product/platform administrator.
- Synthetic tracer patient: Asha Mehta, age 48, `SYN-PAT-1001`, synthetic private payer, starting at a neighbourhood clinic. Persistent abdominal discomfort leads to an abdominal ultrasound and laboratory tests; a finding requires specialist review, referral, documentation assembly, pre-authorisation initiation and patient notification.
- Avoid defining a definitive disease; this is a workflow case, not a diagnosis exercise.

## Required work

- Write the one-page Product Case Charter.
- Add the visible independent portfolio disclaimer.
- Define the product problem, thesis, outcome, wedge, boundary and audience.
- Define the primary operational user and supporting users.
- Document the synthetic tracer patient: Asha Mehta, `SYN-PAT-1001`.
- Map the current fragmented workflow and its failure points.
- Map the future-state workflow with system, AI-assisted and human-controlled actions.
- Define care-episode states, exception states and state transitions.
- Lock the MVP, represented-only scope and deferred scope.
- Define the North Star metric and supporting MVP metrics without inventing results.
- Create the assumptions, decisions, evidence-status and claims registers.

## Workflow and state-model requirements

- Current-state map must show the fragmented diagnostic-to-referral journey, including separate tracking/calls, manual patient contact, separate payer-document preparation and receiving-team handoff.
- Current-state failure points must include incomplete order context, no shared status, available-not-reviewed confusion, missing owner/SLA, fragmented referral, unclear patient communication, separate clinical/financial readiness, repeated transfer work, informal exception handling and weak auditability.
- Future-state map must show a care episode linked to patient and encounter, diagnostic status updates, acknowledgement queue, clinician review, follow-up/referral task, owner/SLA/blocker tracking, financial readiness after clinical conditions are met, confirmed patient next step and audit trail.
- Label every future-state action as System action, AI-assisted action or Human decision. Human gates include clinical significance, acknowledgement, referral/escalation approval, facility/appointment confirmation and final financial authorisation.
- Core states: Order Created, Order Accepted, Diagnostic Scheduled, Diagnostic Completed, Result Available, Clinical Review Pending, Result Acknowledged, Follow-up Decision Required, Referral Created, Referral Accepted, Financial Readiness Pending, Next Step Confirmed and Episode Completed.
- Exception states: Patient Match Failed, Encounter Missing, Duplicate Event Suspected, Result Incomplete, Amended Result Received, Clinician Unavailable, Referral Rejected, Payer Information Missing, Authorisation Denied and Integration Unavailable.
- Uncertain patient, encounter or event reconciliation must route to an exception queue; it must never silently attach to an episode.

## Scope boundary

### Build in the seven-day case

Patient-specific episode; diagnostic order and result status; clinician acknowledgement; referral/escalation task; named owner and SLA ageing; exception queue; billing/pre-authorisation readiness indicator; patient communication status; audit timeline; one SMART on FHIR launch demonstration; synthetic Patient, Encounter, ServiceRequest, Observation, DiagnosticReport and Task data; and at least five tested failure cases.

### Represent, but do not fully build

Multiple clinics and hospitals; wider clinic-to-home journey; device integration; ambient documentation; home monitoring; revenue-cycle orchestration; capacity recommendation; longitudinal repository; Kafka/Flink event backbone; and Spark analytics.

### Defer entirely

Autonomous diagnosis or clinical prioritisation; autonomous referral approval; automatic operating-theatre reservation; real payer integration; real patient data; production identity matching or RBAC; full OpenEMR replacement; a complete hospital command centre; actual AI model training; and production-scale claims.

### Fixed MVP end states

The MVP ends when the episode reaches one of these human-confirmed outcomes: clinic management, day-care referral, or hospital escalation with financial preparation beginning. It does not include actual surgery, discharge or home recovery.

### Day 1 scope statement

The seven-day deliverable demonstrates one executable diagnostic-closure and care-escalation workflow using synthetic data: clinician-facing SMART launch, limited FHIR retrieval, workflow-state transitions, human acknowledgement, exception handling and an auditable follow-up action. The broader clinic-to-home model remains architecture and roadmap material, not claimed implementation.

## Measurement and evidence requirements

- North Star: percentage of eligible care episodes progressing to the next safe care step within the defined clinical and operational SLA.
- Define calculation methods, not invented results, for result-ready-to-acknowledgement time, time to confirmed next step, visible-owner rate, unresolved handoffs, incorrect patient attachments, unsafe autonomous actions, task completion, user corrections, duplicate events, reconciliation backlog, audit completeness and acceptance-criteria pass rate.
- Keep external evidence, assumptions, proposed capabilities, pilot hypotheses and roadmap items visibly distinguished. Do not copy unsourced vendor benchmarks or imply prototype outcomes.

## Initial registers required

- Assumptions must test acknowledgement as a workflow problem, cross-setting ownership gaps, the need for an exception queue, embedded SMART-launch usability, acceptable AI summarisation versus prioritisation, clinical prerequisites for billing, post-confirmation patient communication and manual reconciliation for uncertain matches.
- Product decisions must record: overlay not replacement; SMART on FHIR; diagnostic-closure and care-escalation wedge; AI for summarisation/assistance; synthetic data; enterprise event platform as architecture only; longitudinal record as future option; and result-to-acknowledgement as the primary metric.

## Guardrails

- This is an independent hypothetical portfolio case.
- ContinuumOS does not replace the EHR.
- Clinical decisions, patient matching, referral approval and financial authorisation remain human-controlled.
- Do not claim production outcomes, enterprise readiness or real patient data.
- Do not build architecture, prototype screens or detailed FHIR mapping in this sprint.

## Decision recorded

- Project-local prototype design standards are established in `design skills/`. They will be applied during prototype work, with accessibility, human-controlled decisions, workflow clarity and failure handling taking precedence over visual polish or motion.

## Sprint exit criteria

- The MVP start and end points are unambiguous.
- The successful end state is defined.
- Clinic management, day-care referral and hospital escalation are the allowed MVP end states; surgery, discharge and home recovery are deferred.
- Uncertain identity or encounter matches route to reconciliation rather than silently attaching.
- System, AI-assisted and human decision controls are visibly separated.
- Billing/pre-authorisation readiness is represented without making financial authorisation autonomous.
- SMART on FHIR and the synthetic data model are fixed for the seven-day case.
- Build-now, represent-only and defer scopes are explicit, including at least five failure cases.
- North Star and supporting metric definitions exist without invented results.
- Assumptions, decisions, evidence-status and claims registers are complete.
- Day 2 can begin with requirements and screen design.

## Status

- [ ] Not started
- [ ] In progress
- [x] Complete

Business-value framing was added as a labelled pilot hypothesis. It links the existing workflow metrics to timeliness, ownership, handoff quality and administrative coordination value without adding targets or outcome claims. No MVP scope, state or human-control rule changed.
