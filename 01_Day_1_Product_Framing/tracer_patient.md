# Sprint 1, Part 2 — Synthetic Tracer Patient and Care Episode

## Status

Confirmed working definition for the Sprint 1 case.

## Purpose of the tracer case

The tracer case is designed to test whether ContinuumOS can move a diagnostic episode from result availability to an accountable, human-confirmed next step without losing ownership, source linkage or auditability.

It is a workflow case, not a diagnosis exercise. The clinical details make the scenario concrete, but no definitive disease is defined or inferred.

## Synthetic patient

- **Name:** Asha Mehta
- **Age:** 48
- **Patient identifier:** `SYN-PAT-1001`
- **Data type:** Synthetic
- **Payer context:** Synthetic private payer
- **Starting setting:** Neighbourhood clinic
- **Presenting context:** Persistent abdominal discomfort

## Where the care episode starts

The episode starts when a clinic physician creates a diagnostic order. ContinuumOS creates or links the care episode to Asha’s synthetic patient record, the current encounter and the diagnostic order.

The episode proceeds only when patient and encounter linkage is confirmed or passes defined matching rules. If linkage is uncertain, the episode is routed to a reconciliation or exception queue. It must not be silently attached to a patient or encounter.

The symptom history is background context. The MVP workflow begins at the diagnostic order and enters the following initial state:

> Order Created

## Primary diagnostic event

The clinic physician orders an abdominal ultrasound. Supporting laboratory tests are also ordered, but they remain contextual information for this MVP rather than a second workflow trigger.

The abdominal ultrasound is the single primary diagnostic event. This gives the case one clear trigger, one result, one acknowledgement path and one escalation decision.

## End-to-end tracer workflow

The following sequence is the workflow spine for Asha’s episode. “Synthetic patient and encounter identified” means the linkage is confirmed or passes the defined matching rules; it does not imply that automated matching is trusted without review.

```text
Synthetic patient and encounter identified
        ↓
Diagnostic order created
        ↓
Ultrasound completed
        ↓
Result available
        ↓
Clinical review pending
        ↓
Clinician acknowledges result
        ↓
Human follow-up decision
        ↓
Referral or escalation task created
        ↓
Receiving team accepts, or clinic follow-up is confirmed
        ↓
Patient communication recorded
        ↓
Next step confirmed
```

The sequence is a human-controlled workflow model, not a claim that every transition occurs automatically. If linkage, result completeness or another workflow condition is uncertain, the episode branches to the appropriate exception or reconciliation queue.

The relevant workflow states are:

```text
Order Created → Diagnostic Scheduled → Diagnostic Completed
```

## What result becomes available

The ultrasound is completed and a diagnostic report becomes available in the connected diagnostic system.

ContinuumOS receives or represents enough information to show:

- the result is available;
- the result is linked to Asha’s episode;
- the report is linked to the confirmed encounter;
- the source diagnostic report remains identifiable;
- the result has not yet been acknowledged by the clinician; and
- the case is waiting for clinical review.

The key product distinction is:

> Result Available does not mean Clinically Reviewed.

The system must not convert the report into a diagnosis or decide what it means clinically.

## What requires human review

The clinic physician must:

1. Confirm that the patient, encounter and result are correctly linked.
2. Review the source diagnostic report.
3. Decide whether the result requires follow-up.
4. Acknowledge that the result has been reviewed.
5. Decide whether the next direction is clinic management, referral or escalation.

The MVP AI capabilities are limited to:

- **Episode summary:** a traceable summary of relevant source events, current state and outstanding actions.
- **Referral handoff draft:** a source-linked draft activated only after human-approved referral or escalation. Missing-owner, overdue, duplicate and exception conditions remain deterministic workflow rules; AI-based anomaly detection is deferred.

AI does not determine clinical significance, approve a referral or make the patient or encounter match trusted by default.

After the clinician reviews and acknowledges the result, the episode moves through:

```text
Result Available → Clinical Review Pending → Result Acknowledged
```

## Referral or escalation path

If the clinician decides that additional specialist or hospital review is required, ContinuumOS creates a follow-up task.

The task records:

- the human decision that triggered it;
- the destination or type of receiving service;
- the named owner;
- the current SLA and ageing;
- required documentation;
- any blocker;
- patient communication status; and
- the audit history.

The Referral Coordinator prepares, routes and tracks the receiving-team handoff. Receiving-team acceptance is required for referral or escalation paths, but it is not required for a clinic-management follow-up path.

The Billing/pre-authorisation user may begin supporting readiness work after hospital escalation where the pathway requires it. The Authorised financial decision-maker records the final financial-authorisation decision. Financial readiness remains outside the primary MVP completion condition for urgent escalation and does not autonomously determine the confirmed next step.

## Definition of “Next Step Confirmed”

The episode reaches **Next Step Confirmed** when there is:

- a human-approved care direction;
- a named owner;
- a named destination or responsible team;
- a documented timeframe;
- receiving-team acceptance where required; and
- recorded patient communication.

An appointment is required only when that pathway depends on one. A booked appointment is not required for every possible end state. For example, a clinic-management path may have a confirmed plan, responsible clinician and timeframe without an external appointment.

The episode may therefore reach one of these human-confirmed outcomes:

- **Clinic management:** the clinic owns the follow-up plan;
- **Day-care referral:** the receiving service accepts the referral and the next action is documented; or
- **Hospital escalation:** the hospital pathway is accepted and the next action is documented, with financial readiness handled separately if required.

The relevant workflow states are:

```text
Result Acknowledged → Follow-up Decision Required
                              ↓
       Clinic Management / Referral Created / Hospital Escalation
                              ↓
                    Next Step Confirmed
```

## What the tracer case deliberately excludes

The tracer case does not define:

- a definitive disease;
- an autonomous clinical priority;
- an autonomous referral approval;
- a treatment decision;
- a surgery or procedure booking;
- discharge;
- home recovery; or
- a real patient, payer or clinical integration.

The case ends when accountability for the next safe care step is visible, human-confirmed and auditable.
