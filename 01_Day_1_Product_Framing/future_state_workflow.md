# Sprint 1, Part 4 — Future-State Workflow

## Status

Proposed future-state workflow for Sprint 1 review.

## Purpose

The future state shows how ContinuumOS improves the diagnostic-to-referral workflow by creating one shared, source-linked episode state across clinic, diagnostics, referral and selected administrative readiness work.

The system makes status, ownership, blockers, exceptions and audit history visible. It does not replace the systems of record or make clinical, referral, patient-matching or financial decisions autonomously.

## Future-state operating principle

> Rules manage predictable workflow conditions. AI supports source-linked synthesis and human-approved referral-handoff preparation. Humans retain clinical and financial authority.

## Future-state workflow

```text
SMART launch opens the patient episode
        ↓
System checks patient and encounter linkage
        ↓
Uncertain linkage routes to reconciliation
        ↓
System retrieves or displays source-linked order and diagnostic status
        ↓
Ultrasound result becomes available
        ↓
AI produces a source-linked episode summary, including missing or conflicting source information
        ↓
System places the episode in the acknowledgement queue with owner and SLA
        ↓
Clinician reviews the source report
        ↓
Clinician acknowledges the result
        ↓
Clinician decides clinic management, referral or escalation
        ↓
System creates and routes the human-approved follow-up task
        ↓
Receiving team accepts where referral or escalation requires it
        ↓
System tracks owner, SLA, blockers and handoff history
        ↓
Operational attention remains a roadmap or optional evaluation item, not an MVP capability
        ↓
AI prepares a source-linked referral handoff draft after referral approval
        ↓
Human reviews and approves the handoff package
        ↓
Selected escalation paths may begin financial-readiness work separately
        ↓
System records approved patient communication and audit history
        ↓
Next step confirmed
```

The workflow is human-controlled. The sequence does not imply that every transition occurs automatically. If patient linkage, result completeness, report version or referral information is uncertain, the episode branches to the relevant exception or reconciliation path.

Financial readiness is a supporting status used only on selected hospital-escalation paths. It is not an MVP outcome, payer-integration claim or revenue-cycle automation capability.

## Action classification

### System actions

System actions are deterministic workflow, data, routing or audit functions. They do not make clinical judgements.

- Open the episode through a clinician-facing SMART launch.
- Apply defined patient and encounter matching rules.
- Route uncertain linkage to reconciliation rather than silently attaching it.
- Retrieve or display source-linked Patient, Encounter, ServiceRequest, Observation, DiagnosticReport and Task information where available.
- Update diagnostic status from order created through result available.
- Place result-available episodes in the acknowledgement queue.
- Apply owner, SLA and ageing rules.
- Detect simple workflow conditions such as missing owner, expired SLA, missing acknowledgement and duplicate event indicators.
- Create and route a follow-up task after a human-approved clinic, referral or escalation decision.
- Track referral acceptance where the pathway requires it.
- Track blockers, handoff history, patient communication status and audit events.
- Reopen the clinical review requirement when an amended report is received.
- Show financial-readiness status on selected escalation paths after the required clinical and referral conditions are met.
- Record the final workflow state only when the human and operational prerequisites for “Next Step Confirmed” are present.

Missing owners, expired SLAs and missing acknowledgements are rule-based workflow checks. They are not AI capabilities.

### AI-assisted actions

The seven-day MVP contains two AI capabilities.

#### 1. Source-linked episode summary

AI produces a source-linked summary of relevant episode facts, current status and outstanding information.

It includes:

- relevant episode facts;
- current workflow status;
- report version;
- open tasks; and
- missing or conflicting source information.

This capability does not handle simple missing-owner or expired-SLA checks, which are managed by deterministic rules. It does not determine clinical significance or invent missing facts.

### Roadmap or optional evaluation: operational-attention recommendations

AI helps the Care Coordinator identify cases that may need earlier operational attention based on workflow signals such as:

- episode age;
- repeated delays;
- amended reports;
- unresolved exceptions;
- repeated handoffs; or
- referral-readiness deterioration.

The output is an operational-attention recommendation, not an independent clinical priority or automatic queue reorder. A coordinator decides whether the case should receive earlier operational attention, and clinical priority remains with clinicians.

#### 2. Referral handoff draft

This capability activates only after a human approves referral or escalation. AI creates a source-linked draft handoff package containing:

- the source-linked episode summary;
- the approved referral reason;
- acknowledgement status;
- prerequisites and missing items; and
- a draft patient communication.

The package must be reviewed and approved by the appropriate human before it is sent, entered into a workflow or used for patient communication. AI does not decide whether referral is needed, approve the referral or authorise financial activity.

All AI outputs must show their source references, generation timestamp, model or workflow version where available, reviewer, decision and correction or rejection history.

### Human decisions

Human decisions are the control points where clinical, operational, referral or financial authority is exercised.

- Confirm an uncertain patient or encounter match.
- Review the source diagnostic report.
- Decide the clinical significance and follow-up direction.
- Acknowledge the result.
- Decide clinic management, referral or hospital escalation.
- Accept or reject a referral where a receiving team is involved.
- Confirm a facility or appointment when the pathway depends on one.
- Review and approve the AI-assisted referral handoff package.
- Approve the patient-facing message before use where clinical content or sensitive context is present.
- Approve final financial authorisation.
- Review an amended result and re-acknowledge it where required.

## Workflow state transitions

```text
Order Created
    → Order Accepted
    → Diagnostic Scheduled
    → Diagnostic Completed
    → Result Available
    → Clinical Review Pending
    → Result Acknowledged
    → Follow-up Decision Required
```

From **Follow-up Decision Required**, the episode follows one of the human-controlled paths:

```text
Clinic management
    → Next Step Confirmed

Referral or hospital escalation
    → Referral Created
    → Referral Accepted where required
    → Financial Readiness Pending on selected paths, if applicable
    → Next Step Confirmed
```

The MVP does not include surgery, discharge or home recovery.

For clinic management, the Care Coordinator verifies the named clinic owner, follow-up timeframe, patient communication and any required follow-up task before the episode can reach **Next Step Confirmed**. Clinician approval alone is not sufficient for closure.

## Exceptions and amended results

The future state must support explicit exception handling for:

- patient match failed;
- encounter missing;
- duplicate event suspected;
- result incomplete;
- amended result received;
- clinician unavailable;
- referral rejected;
- payer information missing;
- authorisation denied; and
- integration unavailable.

Uncertain patient, encounter or event linkage routes to reconciliation. It must never silently attach to an episode.

If an amended diagnostic report is received after acknowledgement, the earlier acknowledgement does not automatically remain valid. The system preserves both report versions, records the original acknowledgement and reopens the clinical review requirement for human review.

## Source of truth and traceability

Each workflow status should retain the source event and responsible owner.

| Workflow information | Proposed source or evidence | Operational owner |
|---|---|---|
| Patient and encounter linkage | Synthetic Patient and Encounter records plus matching result | Care Coordinator / Identity reconciliation reviewer |
| Diagnostic order | ServiceRequest and originating clinic workflow | Clinic physician / diagnostic operations |
| Result status and report version | DiagnosticReport and supporting Observation data | Diagnostic operations |
| Clinical acknowledgement | Human review action with user, role and timestamp | Clinic physician |
| Follow-up decision | Human decision recorded against the episode | Clinic physician |
| Referral acceptance | Receiving-team action where referral is required | Receiving team; Referral Coordinator tracks and coordinates |
| Financial readiness | Selected administrative pathway status | Billing/pre-authorisation user; Authorised financial decision-maker |
| Patient communication | Approved communication event and timestamp | Care Coordinator / authorised user |
| AI output | Source references, output, reviewer, correction or rejection record | Product and operational governance |

These are proposed source-of-truth assumptions for the case and should be validated before implementation claims are made.

## Decision rights and controls

| Decision or action | Primary accountable role | ContinuumOS control |
|---|---|---|
| Patient or encounter match uncertainty | Authorised human reviewer | Route to reconciliation; no silent attachment |
| Clinical result acknowledgement | Clinic physician | Require explicit acknowledgement and audit event |
| Follow-up, referral or escalation decision | Clinic physician | Create downstream task only after human decision |
| Referral acceptance | Receiving team | Record acceptance, rejection or pending status |
| Operational attention | Care Coordinator | Roadmap or optional evaluation only; any future AI output requires coordinator review |
| AI handoff package approval | Referral Coordinator | Block use until approved; the clinic physician separately approves patient-facing clinical content where clinically contextual |
| Patient-facing clinical message | Authorised human reviewer | Require approval where message contains clinical context |
| Financial authorisation | Authorised financial decision-maker | Billing/pre-authorisation user prepares, submits and tracks; no autonomous approval |

## AI evaluation and governance

The AI capabilities should be evaluated for usefulness, safety and control—not merely whether they generate text.

Proposed measures include:

- source-linked AI output rate: target 100% for included source facts;
- critical unsupported output rate: target zero critical unsupported outputs;
- missing-context detection precision and recall on synthetic test cases;
- referral handoff correction rate after human review;
- time from human referral approval to handoff-ready package;
- AI rejection reason logging: target 100% of rejected outputs;
- human approval before operational or patient-facing use: target 100%;
- amended-result re-review capture: target 100% of tested amended-result cases; and
- PHI or unauthorised data exposure: target zero incidents.

These are proposed evaluation criteria, not achieved results.

## Privacy, audit and evidence controls

- Use synthetic data and simulated integrations for the portfolio MVP.
- Keep AI access limited to approved source data and minimum necessary fields.
- Record user, role, timestamp, source, output, approval, correction, rejection and override events.
- Do not allow AI output to become a clinical record without human review.
- Do not expose detailed clinical content to users who only need workflow status.
- Keep known, assumed and unvalidated information visibly separated.
- Record root-cause hypotheses and their validation status rather than presenting them as confirmed facts.

## Future-state product judgment

Operational-attention recommendations are a roadmap or optional evaluation item, not a seven-day MVP capability. SLA ageing, missing owner, overdue acknowledgement and unresolved exceptions remain deterministic workflow signals.

The future state is intentionally hybrid:

- deterministic rules manage predictable workflow conditions;
- AI handles source-linked synthesis and human-approved handoff preparation; and
- humans retain clinical, referral, patient-matching and financial authority.

This allows ContinuumOS to improve speed and operational accuracy without forcing AI into tasks that rules can perform more cheaply, consistently and transparently.
