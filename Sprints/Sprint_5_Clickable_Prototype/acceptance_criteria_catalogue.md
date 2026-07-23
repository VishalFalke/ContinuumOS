# Sprint 5 Acceptance Criteria Catalogue

## Purpose and status

This catalogue makes the Sprint 6-candidate requirements testable. It is the authoritative acceptance-criteria reference for the consolidated requirements register. Each check is a future prototype/UAT inspection criterion, not evidence of implementation or testing. Deferred requirements have roadmap guardrails, not Sprint 6 tests.

## Functional requirements

| Requirement | Atomic acceptance checks |
|---|---|
| FR-01 | AC-FR-01-01: Given a verified synthetic episode, the workspace shows state, linkage, owner, blocker and next task. AC-FR-01-02: It does not present ContinuumOS as the clinical source record. |
| FR-02 | AC-FR-02-01: Given failed launch/access, protected context is not displayed. AC-FR-02-02: The condition, safe state and support route are visible. |
| FR-03 | AC-FR-03-01: Uncertain linkage routes to `Patient Match Failed` or `Encounter Missing`. AC-FR-03-02: No episode attachment occurs before human resolution. |
| FR-04 | AC-FR-04-01: An active episode shows state, linkage, owner, age, blocker and next task. AC-FR-04-02: Completed and unresolved work are distinguishable. |
| FR-05 | AC-FR-05-01: Order, acceptance, scheduling, completion and result availability are displayed as distinct statuses. AC-FR-05-02: Report version is visible and availability is not presented as acknowledgement. |
| FR-06 | AC-FR-06-01: Only the Clinic physician can acknowledge the current report version. AC-FR-06-02: Actor, timestamp and version are retained. |
| FR-07 | AC-FR-07-01: Active work shows an owner and due/age context. AC-FR-07-02: Missing, expired or unavailable ownership raises visible escalation work. |
| FR-08 | AC-FR-08-01: The only available directions are clinic management, day-care referral and hospital escalation. AC-FR-08-02: The recorded direction identifies the Clinic physician and evidence reference. |
| FR-09 | AC-FR-09-01: Package preparation is unavailable before approved direction. AC-FR-09-02: Required fields, destination, owner and missing evidence are visible before routing. |
| FR-10 | AC-FR-10-01: Receiving response records acceptance/rejection, role, destination and timeframe. AC-FR-10-02: Rejection does not redirect the referral automatically. |
| FR-11 | AC-FR-11-01: Next Step Confirmed displays applicable direction, handoff, owner, timeframe and communication evidence. AC-FR-11-02: Confirmation is blocked when required evidence is absent. AC-FR-11-03: Delivery and explicit confirmation are separately represented where applicable. |
| FR-12 | AC-FR-12-01: Each represented exception shows reason, owner, safe action and safe return condition. AC-FR-12-02: Exception handling does not expose unauthorised clinical or identity actions. |
| FR-13 | AC-FR-13-01: A represented deterministic condition creates visible task/exception work. AC-FR-13-02: Detection alone cannot change clinical direction, referral, finance or closure. |
| FR-14 | AC-FR-14-01: Timeline entries show event/outcome, actor/source, timestamp and applicable source/version reference. AC-FR-14-02: AI, exception and communication activity are distinguishable. |
| FR-15 | AC-FR-15-01: Summary is labelled draft and shows source links, versions and uncertainty. AC-FR-15-02: Reviewer disposition is recorded and source review remains available. |
| FR-16 | AC-FR-16-01: Draft is unavailable before approved referral/escalation direction. AC-FR-16-02: Required-field completeness and human disposition are shown before package preparation. |
| FR-17 | AC-FR-17-01: A verified source order creates an internal episode with source reference and linkage status. AC-FR-17-02: Uncertain linkage does not create a valid attached episode. |
| FR-18 | AC-FR-18-01: Verified acceptance displays actor, timestamp and source reference. AC-FR-18-02: ContinuumOS has no control to accept on the provider's behalf. |
| FR-19 | AC-FR-19-01: Scheduling context is visibly distinct from completion. AC-FR-19-02: This deferred requirement is not a Sprint 6 build obligation unless selected in Part 3. |
| FR-20 | AC-FR-20-01: Completion evidence does not display as a result. AC-FR-20-02: An overdue result remains visible with follow-up work and does not close the episode. |
| FR-21 | AC-FR-21-01: Result Available creates Clinical Review Pending work for the Clinic physician. AC-FR-21-02: Changed report version makes prior review work stale. |
| FR-22 | AC-FR-22-01: Clinic management records physician direction, owner, timeframe and next task. AC-FR-22-02: Next Step Confirmed remains blocked until applicable communication evidence is present. |
| FR-23 | AC-FR-23-01: Deferred roadmap item; no Sprint 6 financial workflow is built. AC-FR-23-02: Any future treatment preserves the urgent human-approved exception and no autonomous authorisation. |
| FR-24 | AC-FR-24-01: Communication records approval, authorised sender and delivery separately. AC-FR-24-02: Explicit confirmation is only required and displayed where pathway policy requires it. |
| FR-25 | AC-FR-25-01: Amended report retains earlier acknowledgement as history only. AC-FR-25-02: New review work and reassessment flags are visible without automated cancellation or resend. |
| FR-26 | AC-FR-26-01: Deferred roadmap item; detailed cancellation/no-show scenarios are not Sprint 6 obligations. AC-FR-26-02: Generic exception handling remains available through FR-12 and FR-13. |
| FR-27 | AC-FR-27-01: Rejection records receiving reason and retains handoff history. AC-FR-27-02: The episode returns to Follow-up Decision Required for physician action. |
| FR-28 | AC-FR-28-01: Deferred roadmap item; no financial-denial recovery workflow is built in Sprint 6. AC-FR-28-02: Any future alternative direction remains physician-controlled. |
| FR-29 | AC-FR-29-01: Acknowledgement creates visible Follow-up Decision Required work. AC-FR-29-02: The task remains pending until a physician records direction. |
| FR-30 | AC-FR-30-01: Closure is unavailable before Next Step Confirmed. AC-FR-30-02: It is blocked by incomplete closure evidence or safety-blocking exception. AC-FR-30-03: Completion is labelled scoped diagnostic-closure workflow completion. |
| FR-31 | AC-FR-31-01: Result Available requires approved report status/version, configured references and completion evidence. AC-FR-31-02: Missing/conflicting evidence routes to Result Incomplete. AC-FR-31-03: Observation presence alone does not satisfy availability. |
| FR-32 | AC-FR-32-01: Current report version and source provenance are visible. AC-FR-32-02: A changed version marks dependent draft/work as stale for human reassessment. AC-FR-32-03: Prior acknowledgement cannot silently transfer. |
| FR-33 | AC-FR-33-01: Correction/supersession adds linked evidence without deleting prior history. AC-FR-33-02: Failed/unavailable action is never displayed as success. AC-FR-33-03: Recovery retains actor, timestamp and source/version context. |

## Non-functional requirements

| Requirement | Atomic acceptance checks |
|---|---|
| NFR-01 | AC-NFR-01-01: Prototype uses approved synthetic minimum data only. AC-NFR-01-02: No raw token, secret or unverified-candidate data is displayed. |
| NFR-02 | AC-NFR-02-01: Source records are labelled read-only. AC-NFR-02-02: Internal task/audit evidence is visibly separate from source records. |
| NFR-03 | AC-NFR-03-01: Duplicate/retry/recovery states are visibly distinguished. AC-NFR-03-02: A represented retry does not show duplicate state advancement. |
| NFR-04 | AC-NFR-04-01: Critical controls are keyboard reachable with visible focus. AC-NFR-04-02: Status/error meaning is not conveyed by colour alone. AC-NFR-04-03: Meaningful text alternatives and reading order are present. |
| NFR-05 | AC-NFR-05-01: Role view exposes only its approved actions. AC-NFR-05-02: Care Coordinator view cannot perform clinical acknowledgement/direction. AC-NFR-05-03: Source access is represented as least-privilege and read-only. |
| NFR-06 | AC-NFR-06-01: Error identifies known condition and affected work. AC-NFR-06-02: Error gives safe next action/owner where applicable. AC-NFR-06-03: Error never suggests bypassing human control. |
| NFR-07 | AC-NFR-07-01: Material event view includes event/state, timestamp and actor/source. AC-NFR-07-02: Gated action includes applicable role/approval and source/version. AC-NFR-07-03: Correction/rejection/recovery is attributable. |
| NFR-08 | AC-NFR-08-01: High-risk action presents its action and evidence before record. AC-NFR-08-02: Current source/version is shown where relevant. AC-NFR-08-03: Confirmation does not replace source review. |
| NFR-09 | AC-NFR-09-01: User action produces immediate visible feedback. AC-NFR-09-02: Delayed/unavailable behaviour is explicitly shown rather than silently failing. |
