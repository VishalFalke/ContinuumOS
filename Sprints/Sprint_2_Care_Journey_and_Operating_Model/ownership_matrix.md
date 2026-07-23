# Sprint 2 — Ownership Matrix

## Purpose

This RACI-style matrix defines who is accountable for a decision or workflow outcome and who performs the work. It keeps clinical authority separate from operational progression and system recording.

## RACI and ownership definitions

| Label | Meaning |
|---|---|
| **A — Accountable** | Owns the outcome or decision and cannot delegate the authority to ContinuumOS or AI. One primary accountable role is shown for each activity. |
| **R — Responsible / performing** | Performs the action or records the event in the relevant source or workflow system. |
| **C — Consulted** | Provides information or review before the action where needed. |
| **I — Informed** | Receives the status or outcome; being informed does not transfer decision authority. |

## Ownership matrix

The transaction role vocabulary is fixed for Sprint 2: Clinic physician, Diagnostic operations user, Care Coordinator, Identity reconciliation reviewer, Referral Coordinator, Receiving team, Billing/pre-authorisation user, Product/platform administrator and Patient or caregiver. Governance roles are defined separately below.

| Activity | A — Accountable | R — Responsible / performing | C — Consulted | I — Informed | Human-control note |
|---|---|---|---|---|---|
| Create diagnostic order | Clinic physician | Clinic physician / clinic source system | Care Coordinator; diagnostic operations user | Patient or caregiver where appropriate | The physician decides whether the diagnostic order is clinically appropriate. ContinuumOS may record the order but cannot create a clinical order autonomously. |
| Confirm patient and encounter | Care Coordinator | Identity reconciliation reviewer; Care Coordinator records reconciliation | Clinic physician; Diagnostic operations user | Referral Coordinator if downstream work is affected | Uncertain linkage routes to reconciliation. No silent attachment or autonomous matching. |
| Accept diagnostic work | Diagnostic operations user | Diagnostic operations user / diagnostic source system | Clinic physician for clarification; Care Coordinator | Clinic physician; patient or caregiver as appropriate | ContinuumOS records provider acceptance; it cannot accept an order on the provider’s behalf. |
| Schedule diagnostic work | Diagnostic operations user | Diagnostic operations user / scheduling staff | Care Coordinator; patient or caregiver for appointment details | Clinic physician | Scheduling, cancellation and rescheduling remain operational actions. A scheduled slot does not mean completion. |
| Complete diagnostic work | Diagnostic operations user | Diagnostic operations user / diagnostic professional | Clinic physician if examination is incomplete; Care Coordinator | Clinic team | Completion must be recorded by the diagnostic workflow. It does not mean a result is available or reviewed. |
| Publish result | Diagnostic operations user | Diagnostic operations user / diagnostic source system | Clinic physician for source clarification; Care Coordinator | Clinic physician; Care Coordinator | The source system publishes the report. ContinuumOS records availability and version; it does not author or interpret the result. |
| Manage acknowledgement queue | Care Coordinator | Care Coordinator / ContinuumOS workflow | Clinic physician; Diagnostic operations user | Referral Coordinator; Authorised clinical escalation owner where overdue | Care Coordinator owns visibility, owner assignment, ageing, reminders and escalation. Rules may flag overdue work but cannot acknowledge it. |
| Review result | Clinic physician | Clinic physician | Care Coordinator; Diagnostic operations user for source context | Referral Coordinator when follow-up work is expected | The physician reviews the current source report. AI summary cannot replace source review. |
| Acknowledge result | Clinic physician | Clinic physician | Care Coordinator | Referral Coordinator; patient or caregiver only after approved communication | Explicit human acknowledgement is required for the current report version. |
| Choose follow-up direction | Clinic physician | Clinic physician records the decision | Care Coordinator; Referral Coordinator; Receiving team or Billing/pre-authorisation user where relevant | Patient or caregiver after approved communication | The physician chooses clinic management, day-care referral or hospital escalation. AI cannot select or recommend the pathway. |
| Prepare and route approved referral | Referral Coordinator | Referral Coordinator / ContinuumOS referral workflow | Clinic physician; Care Coordinator; Receiving team for destination requirements | Patient or caregiver after approved communication | The Clinic physician remains accountable for the preceding clinical referral or escalation decision. AI may draft a handoff package after approval but cannot create or send the referral autonomously. |
| Accept or reject referral | Receiving team | Receiving team | Referral Coordinator; clinic physician; Care Coordinator | Patient or caregiver after approved communication | The receiving team controls acceptance or rejection. The Referral Coordinator tracks or records the response. Rejection returns to a human follow-up decision; no automatic redirection. |
| Prepare administrative documentation | Billing/pre-authorisation user | Billing/pre-authorisation user | Clinic physician; Referral Coordinator; Care Coordinator | Receiving team where relevant; patient or caregiver as appropriate | Documentation preparation does not authorise care or determine coverage. |
| Approve financial authorisation | Authorised financial decision-maker | Billing/pre-authorisation user | Clinic physician; Referral Coordinator; Care Coordinator | Receiving team; patient or caregiver where appropriate | Documentation preparation does not confer approval authority. Final financial authorisation is human-controlled. Urgent clinically approved escalation is not blocked by this administrative decision. |
| Confirm patient communication | Care Coordinator | Care Coordinator sends or records communication; patient or caregiver may confirm receipt where applicable | Clinic physician for clinical content; Referral Coordinator; Receiving team | Patient or caregiver; relevant care team | The Clinic physician approves clinical content; the Care Coordinator sends or records the communication; the patient or caregiver may confirm receipt. Receipt does not prove clinical understanding unless separately evidenced. |
| Coordinate exception resolution | Care Coordinator | Relevant performing role: Identity reconciliation reviewer, Diagnostic operations user, Referral Coordinator, Billing/pre-authorisation user or Product/platform administrator | Clinic physician; Authorised clinical escalation owner; Receiving team; relevant service operations lead | Patient or caregiver when communication is required | The Care Coordinator owns coordination, visibility and safe return tracking, not the clinical, technical or financial resolution authority. No failure silently becomes a valid episode. |
| Confirm next step | Care Coordinator | Care Coordinator records confirmation with relevant actors | Clinic physician; Referral Coordinator; Receiving team; Billing/pre-authorisation user where applicable | Patient or caregiver; operational team | Care Coordinator verifies owner, destination/team, timeframe, task, acceptance and communication. This confirms the MVP workflow step, not the broader care episode. |
| Close the episode | Care Coordinator | Care Coordinator / ContinuumOS records the completion event | Clinic physician; Referral Coordinator; Receiving team; Billing/pre-authorisation user where relevant | Patient or caregiver; operational stakeholders | `Episode Completed` means diagnostic-closure workflow completion after accountable transfer. It does not close broader referral, admission or recovery work. |

## Ownership guardrails

### Clinical authority

The clinic physician retains authority for clinical review, acknowledgement, clinical significance, follow-up direction, referral or escalation approval and any clinical content requiring approval. The receiving team retains authority to accept or reject a referral. The authorised financial decision-maker retains final authorisation authority. The billing/pre-authorisation user prepares, submits and tracks the administrative work.

### Operational ownership

The Care Coordinator is the primary operational owner for shared visibility, owner assignment, ageing, blockers, reconciliation, exception coordination, patient communication evidence and closure verification. This role does not acquire clinical decision authority by owning workflow progression.

### Execution and system recording

Diagnostic operations, Referral Coordinators, billing/pre-authorisation users, receiving teams and platform administrators perform their respective source-system or operational actions. ContinuumOS records, routes and displays workflow state; the system actor recording an event does not become the accountable decision-maker.

### Escalation chain

Unresolved work follows the common escalation policy:

```text
Assigned owner
        ↓
Operational supervisor
        ↓
Service manager
        ↓
Authorised clinical escalation owner where clinical review or direction is blocked
```

Overdue work remains in its current canonical state with overdue and escalation history. It is not automatically closed, acknowledged, accepted or confirmed.

## Governance ownership

These roles govern the operating model. They are separate from transaction-level workflow ownership and should not be inserted into every activity row.

| Governance role | Accountable for | Explicit boundary |
|---|---|---|
| Clinical governance owner | Clinical review policy, acknowledgement expectations, human clinical gates and clinical safety interpretation. | Does not delegate clinical decisions to AI or ContinuumOS. |
| Product owner | Product boundary, MVP scope, workflow policy, evidence status, AI operating limits and decision-register maintenance. | Does not claim validation, clinical outcomes or production readiness without evidence. |
| Platform administrator | Platform availability, access, simulated integration recovery, auditability and technical operating controls. | Does not resolve clinical, identity or financial decisions. |
| Service operations lead | Service-specific SLAs, escalation thresholds, staffing coverage and operational performance policy. | Does not replace the clinical decision owner or approve financial authorisation unless separately authorised. |

For transaction-level consistency, `authorised clinical escalation owner` is the canonical term for the role receiving blocked or overdue clinical work. `service operations lead` is the canonical term for non-clinical service escalation. These terms replace ambiguous references to “clinic manager” or “clinical manager.”

## Traceability

| Matrix decision | Sprint 1 reference |
|---|---|
| Care Coordinator owns operational visibility and closure verification | `product_case_foundation.md`, `care_episode_state_model.md` |
| Clinic physician retains clinical authority | `decision_register.csv`, `future_state_workflow.md`, `mvp_scope.md` |
| Referral acceptance remains with receiving team | `state_transition_table.csv`, `care_episode_state_model.md` |
| Financial authorisation remains human-controlled | `decision_register.csv`, `mvp_scope.md` |
| Exceptions route to reconciliation and safe return | `state_transition_table.csv`, `care_episode_state_model.md` |
| AI supports source-linked summary and approved handoff preparation only | `decision_register.csv`, `future_state_workflow.md` |

## Step 4 completion criteria

- [x] All recommended roles are represented.
- [x] All recommended activities are represented, with referral preparation separated from the preceding clinical referral decision.
- [x] Accountability and execution are separated.
- [x] The Care Coordinator remains the primary operational owner.
- [x] The clinic physician retains clinical authority.
- [x] Receiving-team acceptance and financial authorisation remain human-controlled.
- [x] Patient or caregiver involvement is represented for communication and confirmation without assigning clinical authority.
- [x] Escalation ownership is defined without introducing new workflow states.
- [x] Exception work is framed as coordination by the Care Coordinator, with resolution authority assigned by exception type.
- [x] Governance ownership is separated from transaction-level workflow ownership.
