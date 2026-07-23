# Sprint 2 — MVP Exception Workflow

## Purpose

This is the scan-friendly exception companion to `mvp_diagnostic_workflow.md`. Exceptions remain visible work states or operational conditions. They do not silently become valid episodes or automatically choose a clinical, referral or financial alternative.

## Exception map

| Condition | Canonical state or handling | Immediate owner | Prohibited automation | Safe return or resolution |
|---|---|---|---|---|
| Patient mismatch | `Patient Match Failed` | Care Coordinator / Identity reconciliation reviewer | Silent attachment to an episode | Human confirms the match or rejects the event. |
| Missing encounter | `Encounter Missing` | Care Coordinator / Identity reconciliation reviewer | Progression without confirmed encounter | Human reconciles the encounter before return. |
| Duplicate event or result | `Duplicate Event Suspected` | Diagnostic operations / Care Coordinator | Silent deletion or automatic selection of the valid event | Human resolves the duplicate while preserving all source events. |
| Amended result | `Amended Result Received` | Diagnostic operations / clinic physician | Reuse of an earlier acknowledgement | Reopen `Clinical Review Pending`; current version requires renewed review and acknowledgement. |
| Result or examination source incomplete | `Result Incomplete` with reason recorded | Diagnostic operations | Treating incomplete data as clinically reviewed | Retrieve or correct source data, then return to `Result Available` when appropriate. |
| Clinician unavailable | `Clinician Unavailable` | Authorised clinical escalation owner / Care Coordinator | Automatic clinical reassignment without review | Approved reassignment; replacement clinician independently reviews the current report. |
| Referral rejected | `Referral Rejected` | Receiving team for rejection; Referral Coordinator for tracking | Automatic redirection to another provider or pathway | The receiving team records the rejection; the Referral Coordinator tracks it; the clinic physician records a new direction in `Follow-up Decision Required`. |
| Payer information missing | `Payer Information Missing` | Billing/pre-authorisation user for preparation and tracking | Autonomous coverage inference or route selection | Reconcile information and return to `Financial Readiness Pending`. |
| Authorisation denied | `Authorisation Denied` | Authorised financial decision-maker for denial; clinic physician for alternative clinical direction | Treating submission or denial as next-step confirmation | Human records an alternative viable pathway. |
| Workflow or source service unavailable | `Integration Unavailable` | Platform administrator / operational owner | Claiming a write or status update succeeded | Verified manual reconciliation before safe return. |
| Order cancelled | Operational condition; no new canonical state | Diagnostic operations / clinic team | Scheduling, completing or closing automatically | Record cancellation and reason; human decides whether to close or create a new direction. |
| Patient no-show | Operational condition; no new canonical state | Diagnostic operations | Inferring completion or result availability | Record no-show; human manages rescheduling or alternative direction. |
| Test not performed | `Result Incomplete` with reason `examination not performed` when a result is expected | Diagnostic operations | Treating non-performance as completion | Record reason and human-approved next action. |
| Diagnostic provider rejects order | Operational rejection; no new canonical state | Diagnostic operations / clinic physician | Automatically routing to another provider | Record reason; human clarifies or chooses a new direction. |
| Result never arrives after completion | `Diagnostic Completed` with overdue-result flag; `Integration Unavailable` only if outage evidenced | Diagnostic operations / Care Coordinator | Assuming an outage or closing the task | Escalate the overdue result and preserve history; return only when source status is verified. |
| Stale or abandoned work | Current state plus deterministic overdue and escalation flags | Care Coordinator / operational owner | Auto-closing, auto-acknowledging or treating as confirmed | Human reassignment or escalation; preserve reminders, due date and resolution evidence. |

## Exception operating rules

- An exception receives an owner, timestamp, reason, source evidence, next action and safe return state.
- Uncertain patient, encounter or event linkage always routes to reconciliation.
- Overdue work remains in its current state with escalation history.
- Financial readiness may block planned administrative progression, but must not prevent recording an urgent clinically approved escalation.
- Exception resolution does not bypass a required human decision.

Recovery from `Integration Unavailable` returns the episode to the last verified valid state, not automatically to the intended next state. A restored service must not replay an unverified action or advance the episode twice; source verification and reconciliation evidence are required before resuming.

Urgent handling is triggered only by an authorised human decision or a validated source-system flag. ContinuumOS does not infer clinical urgency, and the MVP does not use AI to determine urgency or clinical priority.

## Sources

This map is derived from `mvp_diagnostic_workflow.md`, `care_episode_state_model.md`, `state_transition_table.csv` and `mvp_scope.md`.
