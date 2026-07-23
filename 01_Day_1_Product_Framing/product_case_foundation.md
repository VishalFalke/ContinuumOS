# Sprint 1, Part 1 — Product Case Foundation

## Status

Working draft for review. This artifact is not final until the product framing is confirmed.

## Portfolio disclaimer

ContinuumOS is a hypothetical portfolio product using synthetic data and simulated integrations. External healthcare platforms are used only as design references.

## 1. What ContinuumOS is

ContinuumOS is a vision for AI-assisted care orchestration across clinic, diagnostic, hospital and home-recovery settings.

The current Sprint 1 case is deliberately narrower: **ContinuumOS: Diagnostic Closure and Care Escalation**. It is a vendor-neutral care-orchestration layer that coordinates one patient’s diagnostic-to-referral workflow across the specific clinic, diagnostic and referral steps in this case, with supporting administrative readiness.

The product creates a shared view of one patient’s care episode: what has happened, what still needs to happen, who owns the next action, what is blocking progress, whether clinical review has occurred and whether the next care step has been confirmed.

The product model draws on established patterns in care orchestration, administrative workflow automation and interoperable clinical-data platforms, while remaining vendor-neutral and deliberately narrower in its MVP scope.

ContinuumOS does not replace the EHR or become the primary clinical record. Its role is to coordinate workflow across systems and teams.

The governing product principle is:

> One patient, one care episode, one shared workflow status, many care settings.

## 2. What problem it solves

The problem is not simply that healthcare systems cannot exchange data. In many cases, the information already exists somewhere.

The deeper problem is that responsibility for acting on the information is fragmented.

A diagnostic result may be available in one system while:

- the clinician has not yet acknowledged it;
- the care coordinator does not know whether review is complete;
- the referral team is waiting for documentation;
- the patient is waiting without a confirmed update; and
- no one has clear ownership or an operational SLA for the next step.

This creates a critical distinction:

> A result being available does not mean it has been clinically reviewed, acted upon or communicated.

ContinuumOS addresses the workflow gap between result availability and a confirmed next step. It makes review status, ownership, blockers and exceptions visible across the care episode.

## 3. Who primarily uses it

The primary operational user is the **Care Coordinator**. In some organisations, this responsibility may sit within diagnostic operations.

This user is accountable for cases that are waiting, ageing or blocked. They need to know:

- which results require follow-up;
- whether a clinician has acknowledged the result;
- who owns the next task;
- how long the case has been waiting;
- whether referral documentation is complete;
- whether the patient has received a confirmed next-step update; and
- whether an exception requires manual reconciliation.

Supporting users include:

- **Clinic physician**, who reviews and acknowledges the result;
- **Diagnostic operations user**, who manages order and result status;
- **Referral Coordinator**, who prepares, routes and tracks approved referrals;
- **Billing/pre-authorisation user**, who prepares, submits and tracks readiness work after the appropriate clinical and referral conditions are met; and
- **Platform administrator**, who manages workflow configuration and audit access.

The product is operationally led by the coordinator, but critical decisions remain with the appropriate human owner.

## 4. What narrow workflow it demonstrates

The MVP demonstrates one diagnostic closure and care escalation workflow:

> Diagnostic order → result available → clinician acknowledgement → referral or escalation decision → next step confirmed

The case begins with a diagnostic order raised at a clinic.

It ends when a human-confirmed next step has been established. The possible end states are:

- clinic management;
- day-care referral; or
- hospital escalation.

The MVP demonstrates:

- a patient-specific care episode;
- diagnostic order and result status;
- a visible acknowledgement queue;
- clinician review and acknowledgement;
- referral or escalation task creation;
- named ownership and SLA ageing;
- exception handling;
- patient communication status; and
- an auditable timeline.

Billing or pre-authorisation readiness may begin as a supporting operational task after hospital escalation. It is not the primary workflow outcome.

The case uses synthetic data and a limited SMART on FHIR launch. It is deliberately narrow enough to demonstrate a complete, reviewable workflow rather than an unrealistic healthcare platform.

## 5. What ContinuumOS explicitly does not do

ContinuumOS does not:

- diagnose the patient;
- determine clinical significance autonomously;
- clinically prioritise patients without human review;
- approve or reject referrals autonomously;
- approve financial authorisation;
- silently match uncertain patient, encounter or diagnostic events;
- replace the EHR;
- function as a complete hospital command centre;
- integrate with real payer systems;
- use real patient data;
- claim production outcomes or enterprise readiness; or
- include surgery, discharge or home recovery in the MVP.

The two AI capabilities in this MVP are limited to:

1. **Episode summary** — a traceable summary of the relevant source events, current state and outstanding actions.
2. **Referral handoff draft** — a source-linked draft activated only after human-approved referral or escalation.

AI outputs remain traceable to source information and visibly subject to human review. Routing, action suggestions and broader AI capabilities remain future possibilities, not MVP claims.

Clinical acknowledgement, patient matching, referral approval, facility or appointment confirmation and final financial authorisation remain human-controlled.

## 6. Why this is a credible portfolio case

This is a credible senior AI product case because it demonstrates product judgment in a high-consequence workflow.

The value is not presented as “AI makes healthcare decisions.” Instead, the case shows how to introduce narrowly scoped AI into an existing operational workflow while preserving accountability.

It demonstrates the ability to:

- identify a workflow failure beneath a broad industry problem;
- separate data availability from actionability;
- define a narrow MVP wedge;
- assign decisions to the correct human roles;
- design for exceptions and uncertainty;
- connect clinical, operational, patient-facing and supporting administrative readiness;
- distinguish system actions, AI assistance and human decisions;
- define measurable outcomes without inventing performance claims; and
- position interoperability as an enabler rather than the product itself.

The portfolio thesis is:

> ContinuumOS improves care coordination by turning fragmented clinical and operational events into a shared, accountable workflow state, while keeping high-consequence decisions under human control.

## 7. Current framing decisions to confirm

These decisions are proposed for confirmation before this foundation is treated as final:

- Use **Care Coordinator** as the primary persona, with diagnostic operations as a possible organisational home for the role.
- Use “Diagnostic Closure and Care Escalation” to describe the MVP boundary; the case ends at a confirmed referral, escalation or clinic-management next care step, before treatment or intervention.
- Position ContinuumOS as a care-orchestration layer and explain its value as an operational control layer.
- Keep the MVP AI scope limited to source-linked episode summary and source-linked referral-handoff draft after human approval. Missing-owner, overdue, duplicate and exception conditions remain deterministic workflow rules; AI-based anomaly detection is deferred.
