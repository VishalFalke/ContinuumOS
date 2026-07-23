# Sprint 1, Part 3 — Proposed Current-State Workflow

## Status

Working draft for Sprint 1 review.

## Evidence status

**Proposed current-state workflow based on common cross-system coordination patterns. To be validated through user review.**

This map is a product-framing assumption, not a claim that every organisation uses the same tools or process. Phone, email, spreadsheets and separate inboxes are examples of possible local tracking methods, not universal facts.

## Current-state problem

The diagnostic information may exist in the clinic, diagnostic, referral or administrative systems, but responsibility for moving the episode forward is distributed across teams.

No single workflow reliably shows:

- whether the result is merely available or has been clinically reviewed;
- who owns the next action;
- how long the action has been waiting;
- what is blocking referral or escalation;
- whether selected escalation paths are financially ready; or
- whether the patient has received and understood a confirmed next step.

## Proposed current-state workflow

The following represents a plausible diagnostic-to-referral journey for Asha’s episode.

```text
Clinic consultation and diagnostic order created
        ↓
Diagnostic centre schedules and performs the ultrasound
        ↓
Ultrasound report becomes available in the diagnostic system
        ↓
Clinic may receive, retrieve or be notified of the result through a separate process
        ↓
Clinician review is followed up through the clinic’s local workflow
        ↓
Coordinator tracks unresolved cases through available local methods
        ↓
Clinician decides on clinic management, referral or escalation
        ↓
Referral coordinator assembles information and contacts the receiving service
        ↓
Receiving service requests or confirms documents and handoff details
        ↓
For selected escalation paths, billing or pre-authorisation work begins separately
        ↓
Clinic or coordinator contacts the patient manually
        ↓
Teams consider the coordination workflow complete when a next action appears arranged,
although there may be no shared closure rule
```

## Primary concrete failure path

The strongest failure path for this case is a missed acknowledgement SLA:

```text
Ultrasound report becomes available
        ↓
No clinician acknowledgement is recorded within the defined SLA
        ↓
The coordinator cannot see whether the report was reviewed
        ↓
No accountable follow-up task is visible
        ↓
Asha remains without a confirmed next step
```

The report may be present in a diagnostic system or local clinical inbox, but “result available” is not evidence of clinical review. The operational gap is the absence of a shared status showing acknowledgement, ownership and next action.

## How the handoffs work today

### Clinic

The clinic creates the diagnostic order and later receives, retrieves or is notified about the result through a separate process. The clinic physician may review the report, but review status may not be visible to the coordinator or referral team.

### Diagnostics

The diagnostic centre schedules and completes the ultrasound and publishes the report in its own workflow. Diagnostic completion and report availability may not create an accountable follow-up task for the clinic.

### Referral

If follow-up is required, referral work begins separately. Staff may reassemble the order context, source report, patient details and supporting documents. Receiving-team acceptance may be tracked through another workflow and may not be visible to the clinic.

### Billing and pre-authorisation

Billing or pre-authorisation is a dependency only on selected escalation paths. Where required, the administrative team may prepare documentation separately from the clinical review and referral workflow. This can create timing and completeness gaps, but it is not part of every case.

### Patient communication

The patient may be contacted by the clinic, coordinator or another staff member using a local communication process. The contact may not be connected to the latest clinical review, referral acceptance or confirmed next action.

## Amended-result handling

If the diagnostic centre issues an amended ultrasound report after the original report was reviewed or acknowledged, the earlier acknowledgement must not automatically remain valid.

The amended result should trigger a new review requirement. The episode must preserve:

- the original report version;
- the amended report version;
- the timing of each version;
- the earlier acknowledgement; and
- the new acknowledgement requirement.

Until a clinician reviews the amended report, the episode should be treated as requiring clinical review again. This is a workflow and auditability requirement, not an autonomous clinical judgement.

## Current-state breakdowns

Repeated registration is one example of the broader repeated identity, encounter and handoff reconciliation burden described in this workflow.

| Breakdown | What it means operationally |
|---|---|
| No shared status | Each team sees part of the journey, but no shared state shows the complete episode. |
| Unclear ownership | A result, referral or blocker can wait without a named next-action owner. |
| Result available but not clinically reviewed | Availability is mistaken for acknowledgement or action. |
| Fragmented referral work | Referral documentation, receiving-team contact and acceptance are managed separately. |
| Separate financial readiness | On selected escalation paths, administrative readiness is disconnected from clinical and referral prerequisites. |
| Repeated handoffs | Patient, order, result and referral details may be transferred multiple times between teams. |
| Weak exception handling | Missing, duplicate, amended or uncertain events may be resolved through informal escalation rather than a defined queue. |
| Unclear patient updates | Communication may be manual, inconsistent or not reliably connected to the confirmed next step. |
| Weak amended-result control | A previous acknowledgement may be treated as sufficient even after the source report changes. |
| No shared closure rule | Teams may believe the case is complete because an action appears arranged, without confirming ownership, timeframe or patient communication. |

## Why this supports the product case

The current-state problem is not that every team is failing to do its job. Each team may be working within its own system and local process.

The failure occurs at the boundary between teams:

- no shared workflow state;
- no reliable ownership model;
- no consistent distinction between result availability and clinical review;
- no controlled response to amended or uncertain events; and
- no common closure rule for a confirmed next step.

ContinuumOS is needed not because existing systems contain no information, but because no shared workflow reliably connects result availability, clinical review, ownership, referral readiness and patient communication.
