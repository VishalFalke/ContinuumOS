# Sprint 2 — Canonical Alignment Register

This is a short closure artifact for dependency alignment before Sprint 3. It does not reopen Sprint 2 scope or claim implementation, validation or outcomes.

## Authority hierarchy

For implementation and later artifact decisions, authority follows this order:

1. Product Case Charter
2. Approved Decision Register entries
3. This canonical role and policy register
4. Sprint 1 state model and transition table
5. Sprint-specific workflow artifacts

Where earlier Sprint 1 wording conflicts with the accepted Product Case Charter or an approved Decision Register entry, the Charter and latest approved decision take precedence. Superseded wording must be updated or explicitly marked as deprecated.

## Canonical MVP AI scope

The MVP has two AI capabilities:

- source-linked episode summary;
- source-linked referral-handoff draft after human approval.

Missing-owner, overdue, duplicate, incomplete and exception conditions are deterministic workflow rules in the MVP. AI-based anomaly detection remains a future hypothesis and is not an MVP capability.

## Canonical roles and authority

| Canonical role | Authority or responsibility |
|---|---|
| Clinic physician | Clinical review, acknowledgement and care direction |
| Care Coordinator | Workflow visibility, ageing, coordination and closure evidence |
| Identity reconciliation reviewer | Patient and encounter reconciliation |
| Referral Coordinator | Prepares, routes, tracks and records approved referrals |
| Receiving team | Accepts or rejects a referral or escalation handoff |
| Billing/pre-authorisation user | Prepares, submits and tracks administrative readiness work |
| Authorised financial decision-maker | Makes the final financial-authorisation decision |
| Authorised clinical escalation owner | Assigns clinical coverage when review or direction is blocked |
| Product/platform administrator | Technical access, outage and recovery control |

The Referral Coordinator does not accept or reject a referral. The Billing/pre-authorisation user does not make the final financial-authorisation decision. Material decisions have one accountable role.

## Canonical referral and financial policies

- Referral direction: Clinic physician is accountable for the clinical direction.
- Approved referral preparation and routing: Referral Coordinator is accountable.
- Referral acceptance or rejection: Receiving team is accountable and performs the decision.
- Acceptance tracking and downstream coordination: Referral Coordinator records and coordinates the response.
- Financial readiness preparation: Billing/pre-authorisation user prepares, submits and tracks the work.
- Final financial authorisation: Authorised financial decision-maker records the decision.

For urgent, human-approved hospital escalation, `Next Step Confirmed` may be recorded once the clinical direction, receiving-team handoff, accountable owner, timeframe and patient communication are confirmed, even when `Financial Readiness Pending` remains open. Financial readiness remains visible and unresolved but does not block urgent clinical progression. This is a proposed operating policy requiring clinical, operational and financial review; it is not implemented evidence.

## Closure checklist

- [x] Canonical AI scope updated.
- [x] Canonical roles and authority recorded.
- [x] Referral accountability corrected.
- [x] Financial-authorisation split corrected.
- [x] Urgent-escalation policy added to the Decision Register and transition table.
- [x] Superseded Sprint 1 wording updated.
- [x] Mixed accountability labels removed from material decisions.

## Sprint 4 architecture-control propagation — 2026-07-18

Sprint 4 architecture review formalised six refinements in Decision Register D13–D18 without expanding the MVP: AI support is non-blocking; complete-result evidence requires the current DiagnosticReport plus required referenced evidence; minimum-necessary data applies to reads, stores, audit and AI; audit corrections are linked append-oriented entries; communication delivery is distinct from patient confirmation; and linkage verification requires a defined human-owned contract. Later artifacts must apply these controls without introducing new states, decision owners, integrations or autonomous actions.
