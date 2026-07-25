# Prioritised Backlog and Prototype Scenarios

## Purpose and evidence status

This artifact defines the proposed Sprint 6 build and validation shape. It is a prioritisation and scenario plan, not evidence that a prototype, test, AI evaluation, reviewer session or pilot has occurred.

## Prioritisation method

Backlog order follows five controls:

1. protect patient/encounter linkage and source-version integrity;
2. preserve required human clinical and referral decisions;
3. make ownership, blockers, handoff and closure evidence visible;
4. demonstrate failure and safe return before optional convenience features; and
5. add AI only when the corresponding manual human workflow remains complete and usable.

`Must` items are necessary to demonstrate the core diagnostic-to-next-step value proposition or a material safety control. `Should` items improve the demonstration without creating a hidden dependency. `Deferred` items are excluded from the Sprint 6 build unless formally re-approved through Sprint 5 change control.

## Prioritisation decisions

| Decision | Included in Sprint 6 | Reason |
|---|---|---|
| Verified launch, linkage and episode workspace | Yes | Required before any patient-specific workflow is safe or understandable. |
| Result availability, current-version review and acknowledgement | Yes | Central human gate and primary diagnostic-closure measurement point. |
| Human follow-up direction and clinic/referral branches | Yes | Demonstrates product value without automating clinical judgement. |
| Referral preparation, receiving response and next-step confirmation | Yes | Demonstrates accountable cross-team handoff. |
| Exception queue and amended-result re-review | Yes | Demonstrates safety, recovery and version-aware behaviour. |
| Source-linked summary and post-approval handoff draft | Controlled sample only | Demonstrates AI product judgement and review controls without claiming a model deployment. |
| Detailed financial readiness/denial workflow | No — deferred | Not required for the core diagnostic-to-referral MVP; retains roadmap trace only. |
| Detailed cancellation/no-show workflow | No — deferred | Generic exception controls are sufficient unless Part 3 explicitly selects a bounded scenario. |
| Preventive Health Check-up Orchestration | No — Phase 2 roadmap | Separate product opportunity requiring its own problem, data and operating-model validation. |

## Required Sprint 6 prototype scenarios

## Formal delivery slices

The approved backlog is demonstrated in dependency order. These slices organise the prototype build; they do not alter the 53 approved requirements, screens or deferred scope.

| Slice | Included screens and focus | Synthetic scenario / exit condition | Primary risk | Demonstration outcome | Does not prove |
|---|---|---|---|---|---|
| 1. Launch, episode and result integrity | SCR-01 to SCR-03; protected launch, verified linkage, current report and acknowledgement | PS-01 through acknowledgement; PS-02 or PS-03 safe return | Wrong patient, incomplete evidence or stale report version | A result is visibly distinct from a human acknowledgement | Live SMART/FHIR conformance, identity performance or clinical effectiveness |
| 2. Human direction and referral handoff | SCR-04 to SCR-06; direction, package preparation/routing and receiving response | PS-01 through receiving response; PS-05 entry control | Decision authority or routing could be confused | Human direction, referral preparation and receiving response remain separate | Referral throughput, partner adoption or operational performance |
| 3. Confirmation, audit, exceptions and controlled AI | SCR-07 to SCR-10; recovery, AI review/fallback, audit and scoped closure | PS-01 closure, PS-04 and PS-05 review/fallback | Unsafe automation or unexplained recovery | Users can continue without AI and inspect attributable workflow history | Model performance, clinical outcomes or production audit/security controls |

### PS-01 — Complete Asha referral journey

**Purpose:** demonstrate the full diagnostic-to-next-step value chain.

Verified simulated SMART launch; verified patient/encounter/order context; diagnostic completion; current result available; clinician review work assigned; current report acknowledged; physician selects day-care referral; Referral Coordinator prepares and approves the handoff; Receiving team accepts; owner, timeframe and communication evidence are present; Care Coordinator records `Next Step Confirmed` and then human-owned `Episode Completed`.

**Required evidence:** requirement and acceptance IDs, canonical states/transitions, authorised actors, source/version references, screen IDs, event IDs and audit entries.

### PS-02 — Linkage or incomplete-result exception

**Purpose:** demonstrate that unsafe or incomplete evidence cannot silently progress.

Use either uncertain patient/encounter linkage or an incomplete current result. Show the exception reason, accountable role, prohibited automation, safe next action and return condition. No acknowledgement, direction or referral action may be available until the condition is resolved.

### PS-03 — Amended-result re-review

**Purpose:** demonstrate version integrity after a prior acknowledgement.

Receive an amended/corrected report version; preserve the earlier acknowledgement as history only; reopen `Clinical Review Pending`; mark dependent summary/draft/direction/handoff/communication evidence for human reassessment; record renewed clinician review and acknowledgement without silently cancelling or resending downstream work.

### PS-04 — AI summary review and failure

**Purpose:** demonstrate AI-01 usefulness and controls.

Show one source-linked summary that is accepted for orientation and one controlled failure containing a missing source link, unsupported statement or stale version. The reviewer corrects or rejects the output, EVT-20 evidence is recorded, and normal source-based review remains available.

### PS-05 — Post-approval handoff draft review

**Purpose:** demonstrate AI-02 entry control and human approval.

Before physician direction, the draft action is unavailable. After an approved referral/escalation direction, show a source-linked editable draft with required-field gaps. The Referral Coordinator reviews and disposes it before separate package creation/routing. AI cannot send or approve the referral.

## AI evaluation planning requirements

The Sprint 6 evaluation set must include, for both AI assists:

- a complete supported example;
- missing required source evidence;
- an unsupported statement;
- wrong-patient or unverified-linkage input rejection;
- stale report-version handling;
- unavailable/timeout fallback; and
- attributable reviewer disposition.

Evaluation reporting must include source-link completeness, unsupported-statement occurrence, stale-output handling, correction/rejection disposition and failure/timeout behaviour. Thresholds are approved only after the evaluation set and reviewer policy are defined. No synthetic result may be presented as production model performance.

## Delivery evidence and decision log expected from Sprint 6

- requirement-to-screen-to-UAT trace for every built scenario;
- build/release notes distinguishing implemented, simulated and represented-only behaviour;
- defect decisions and requirement changes with rationale;
- accessibility, human-control and failure-state checks;
- safe manual fallback for both AI capabilities;
- go/no-go and rollback/safe-return criteria; and
- a short product reflection recording what changed after testing and what remains unresolved.

## Scenario control

For every scenario, link requirement IDs, business rules, states, screens, data/events, acceptance criteria and test result. Record actual execution only in Sprint 6. External review and synthetic-pilot conclusions belong in Sprint 7.
