# ContinuumOS — Product Case Charter

## Portfolio disclaimer

ContinuumOS is a hypothetical portfolio product using synthetic data and simulated integrations. External healthcare platforms are used only as design references. This case does not claim user research, clinical validation, implementation, production readiness or achieved outcomes.

## Product definition

ContinuumOS is a vendor-neutral AI-assisted care-orchestration overlay for coordinating workflow across clinic, diagnostics, hospital and home-recovery settings. It is not an EHR replacement and does not become the primary clinical record.

The product creates a shared view of one care episode: what has happened, what needs to happen next, who owns the action, how long it has been waiting, what is blocking progress, whether clinical review has occurred and whether the next care step has been confirmed.

> One patient, one care episode, one shared workflow status, many care settings.

## Problem

Responsibility for moving a patient to the next safe step is fragmented across systems, teams and facilities. The core gap is not simply data exchange. It is the lack of a shared workflow state showing review status, next-action ownership, blockers, exceptions and safe readiness to proceed.

A diagnostic result may be available while the clinician has not acknowledged it, the coordinator cannot see who owns the next task, the referral team is waiting for documentation, administrative readiness is tracked separately and the patient has no confirmed next step.

## Product thesis and outcome

ContinuumOS coordinates tasks, ownership, approvals, exceptions, patient communication and audit evidence across existing systems. In the MVP it may produce source-linked summaries and route approved workflow work; broader recommendation or anomaly-detection capabilities are deferred. Source systems retain authority over their clinical and administrative records.

The primary outcome is the percentage of eligible care episodes progressing to the next human-confirmed safe care step within the defined clinical and operational SLA. This is a proposed North Star metric and has no baseline, target or achieved result in this case.

## Business value hypothesis

**Evidence status: Pilot hypothesis.** ContinuumOS is designed to reduce coordination waste between diagnostic completion and the next confirmed care step. The expected operational value is improved workflow timeliness, clearer ownership, fewer unresolved handoffs and lower administrative effort per episode. Capacity utilisation and financial benefits are downstream hypotheses for later baseline discovery and pilot validation; they are not achieved outcomes or MVP claims.

The product logic is:

> Source event → visible workflow state → named owner → human decision → confirmed handoff → measurable operational outcome.

The external Superhealth, Commure and BIHS examples inform design rationale only. Their benchmarks and reported outcomes are not ContinuumOS evidence.

## MVP wedge

**Diagnostic Closure and Care Escalation** demonstrates one synthetic episode through:

```text
Diagnostic order
  → result available
  → explicit clinician acknowledgement
  → human-approved follow-up direction
  → referral or escalation where required
  → readiness for the next care setting
  → confirmed next step
```

The critical control is explicit: **Result Available does not mean Clinically Reviewed.** The episode cannot progress to a follow-up decision until the responsible clinician has reviewed and acknowledged the current report version.

## Users and tracer case

The primary operational user is the **Care Coordinator** or Diagnostic Operations Coordinator, responsible for waiting cases, owners, blockers, SLA ageing, referral readiness, payer readiness, patient communication status and reconciliation.

Supporting users are the Clinic physician, Diagnostic operations user, Referral Coordinator, Billing/pre-authorisation user, Receiving team and Product/platform administrator.

The synthetic tracer patient is **Asha Mehta**, age 48, patient identifier `SYN-PAT-1001`, with a synthetic private payer, starting at a neighbourhood clinic. Persistent abdominal discomfort leads to an abdominal ultrasound and supporting laboratory tests. The ultrasound result requires specialist review, possible referral, documentation assembly, selected pre-authorisation preparation and patient notification. No definitive disease is defined or inferred; this is a workflow case, not a diagnosis exercise.

## Scope and end states

The MVP starts when the diagnostic order is created for Asha’s linked patient and encounter. It ends only when a human-confirmed next safe care step has a named owner, destination or responsible team, documented timeframe, required follow-up task and recorded patient communication. Referral or escalation paths also require receiving-team acceptance where applicable.

Allowed MVP end paths are:

- clinic management;
- day-care referral; or
- hospital escalation with financial preparation beginning where required.

The case stops before surgery, discharge and home recovery. Wider clinic-to-home coordination, multiple live organisations, device integration, home monitoring, revenue-cycle orchestration, capacity recommendation, longitudinal-record implementation and enterprise event-platform implementation are represented only as future context or roadmap material.

The seven-day case is limited to one patient-specific synthetic episode, diagnostic order and result status, clinician acknowledgement, follow-up/referral task, named owner and SLA ageing, exception handling, financial-readiness indication, patient communication status, audit timeline, one SMART on FHIR launch demonstration and limited synthetic Patient, Encounter, ServiceRequest, Observation, DiagnosticReport and Task data.

## Human-control and AI boundary

Clinical decisions, patient or encounter matching, clinical significance, result acknowledgement, follow-up direction, referral or escalation approval, receiving-team acceptance, facility or appointment confirmation, patient-facing content approval and final financial authorisation remain human-controlled.

Deterministic rules manage predictable workflow conditions such as missing owner, missed SLA, overdue acknowledgement and suspected duplicate events. MVP AI is limited to:

1. a source-linked episode summary; and
2. a referral handoff draft activated only after human-approved referral or escalation.

AI outputs require human review, source references and audit evidence. AI cannot independently diagnose, prioritise clinical urgency, match a patient, approve a referral, authorise payment or change episode state.

Uncertain patient, encounter or event linkage routes to an exception queue and must never silently attach to an episode.

## Evidence status

The product framing, scope, workflow, state model, decisions, assumptions and metric definitions are documented proposed case material. They are not evidence of production performance, clinical effectiveness, user validation, enterprise readiness or actual integration outcomes.

## Source references

This charter consolidates the approved Sprint 1 framing from `01_Day_1_Product_Framing/product_case_foundation.md`, `tracer_patient.md`, `mvp_scope.md`, `future_state_workflow.md`, `care_episode_state_model.md`, `state_transition_table.csv`, `success_metrics.md`, `assumption_register.csv`, `decision_register.csv` and `day_1_completion_checklist.md`.
