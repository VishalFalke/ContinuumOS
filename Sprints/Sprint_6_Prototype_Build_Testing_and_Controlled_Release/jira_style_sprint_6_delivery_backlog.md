# Jira-style Sprint 6 Delivery Backlog

## Purpose and evidence boundary

This is a portfolio-safe, Jira-style delivery plan for the approved synthetic clickable prototype. It turns the approved Sprint 5 baseline into proposed epics, stories, sprint increments, dependencies and completion controls. It is not an exported Jira board and does not claim tickets were created, code was written, estimates were accepted, tests were run or a delivery team was staffed.

The Sprint 5 controlled requirements register, requirements traceability matrix, acceptance-criteria catalogue, business-rule catalogue, screen specifications and navigation map remain authoritative. This backlog does not add a screen, requirement, state, role, integration or AI capability.

## Operating model

- **Release train:** Sprint 6 remains the single project sprint for prototype build, testing and controlled release.
- **Delivery increments:** `6.0` to `6.5` below are proposed internal Agile increments, not new project sprints or date commitments.
- **Ticket hierarchy:** Epic -> story -> implementation/test sub-task -> linked defect or change.
- **Relative estimate:** Fibonacci points are planning signals only. They do not imply capacity, velocity, cost, staffing or delivery dates.
- **Workflow:** Backlog -> Ready for development -> In progress -> Peer review -> QA ready -> Tested -> Ready for release -> Done. A blocked ticket remains visibly blocked and links to its dependency, defect or change record.

## Jira fields required on every story

| Field | Required content |
|---|---|
| Issue type | Epic, story, task, defect or controlled change |
| Business actor | Approved role with decision authority; delivery assignee is separate |
| Scope links | Requirement, acceptance criteria, business rule, screen, state/transition, event and fixture references |
| Description | User outcome and explicit non-goals |
| Dependencies | Upstream story, fixture, rule, component or approval |
| Acceptance criteria | Atomic Sprint 5 `AC-*` identifiers plus story-specific outcome |
| Test links | Planned unit, simulated integration, accessibility and UAT scenario/test IDs |
| Safety and audit | Applicable hazard/control, human gate and audit-event references |
| Estimate | Proposed relative points, estimate assumptions and date; never hours or cost |

## Proposed epics

| Epic | Outcome | Screen scope | Primary business actors | Key dependencies | Priority |
|---|---|---|---|---|---|
| EP-01 Access and episode integrity | Only verified synthetic context is displayed and its current work is understandable. | SCR-01, SCR-02 | Clinic physician; Care Coordinator; Product/platform administrator | Synthetic fixtures; linkage and access rules | P1 |
| EP-02 Result integrity and human direction | A current report is reviewed, acknowledged and followed by a human-owned direction. | SCR-03, SCR-04 | Clinic physician; Care Coordinator for T08 verification | EP-01; report-version and review-task logic | P1 |
| EP-03 Referral handoff | An approved direction becomes an attributable handoff and receiving response. | SCR-05, SCR-06 | Referral Coordinator; Clinic physician; Receiving team | EP-02; destination/approval evidence | P1 |
| EP-04 Exceptions, recovery and audit | Unsafe or incomplete work remains visible, owned, recoverable and traceable. | SCR-07, SCR-09 | Care Coordinator; exception owner; governance reviewer | EP-01 to EP-03; event/recovery contract | P1 |
| EP-05 Optional AI assistance | Both assistive drafts are source-linked, reviewable, attributable and non-blocking. | SCR-08 | Clinic physician; Care Coordinator; Referral Coordinator | EP-01 to EP-04; manual workflow complete | P2 |
| EP-06 Next-step confirmation and scoped closure | Verified evidence supports a distinct confirmation and diagnostic-closure completion action. | SCR-10 | Care Coordinator; authorised communication owner | EP-03, EP-04; complete evidence checks | P1 |
| EP-07 Quality and controlled release | The prototype has recorded test, defect, accessibility and release evidence. | Cross-cutting | Delivery roles; authorised role walkthroughs | All build stories | P1 |

## Epic hypothesis statements (Jira epic descriptions)

These are proposed product and delivery hypotheses, not achieved outcomes. The proposed leading indicators are only planned Sprint 6 walkthrough/test observations; they do not establish user adoption, clinical effectiveness, operational performance or model quality.

### EP-01 — Access and episode integrity

| Field | Jira epic description |
|---|---|
| For | Authorised clinic and care-coordination users in one synthetic diagnostic-closure pathway |
| Who | Need to orient to a verified episode without relying on ContinuumOS as the source record |
| The | ContinuumOS access and episode workspace |
| Is a | Synthetic, read-only orchestration overlay |
| That | Shows access outcome, verified linkage, current state, owner, blocker, next task and separate source/workflow evidence |
| Unlike | A fragmented manual reconstruction of context across represented systems |
| Our solution | Stops protected retrieval when launch/linkage is invalid and makes the next authorised action visible when context is verified |
| Business-outcome hypothesis | Authorised role walkthroughs will show that users can identify the accountable owner and next action without mistaking uncertain linkage for a valid attached episode. |
| Proposed leading indicators | Correctly identify state/owner/next action; correct routing of launch/linkage failure; no unauthorised action shown in the scenario. |
| Non-functional controls | NFR-01, NFR-02, NFR-04, NFR-05, NFR-06, NFR-09 |

### EP-02 — Result integrity and human direction

| Field | Jira epic description |
|---|---|
| For | Clinic physicians and Care Coordinators |
| Who | Need current source evidence and clear decision ownership after a diagnostic result becomes available |
| The | Result-review and follow-up-direction workflow |
| Is a | Human-controlled review and decision gate |
| That | Separates result availability, current-version acknowledgement and the physician's follow-up direction |
| Unlike | A workflow that treats a result, AI orientation or coordination task as a clinical acknowledgement or direction |
| Our solution | Requires the authorised physician to acknowledge the exact current version before recording one approved direction; Care Coordinator verification is limited to permitted T08 evidence. |
| Business-outcome hypothesis | Role walkthroughs will show that users distinguish `Result Available` from acknowledgement and understand that only the physician chooses follow-up direction. |
| Proposed leading indicators | Correct acknowledgement authority; amended-version re-review is selected; direction is blocked without current acknowledgement; T08 authority is correctly described. |
| Non-functional controls | NFR-04, NFR-05, NFR-06, NFR-07, NFR-08 |

### EP-03 — Referral handoff

| Field | Jira epic description |
|---|---|
| For | Referral Coordinators, Clinic physicians and Receiving teams |
| Who | Need an accountable referral handoff after a human-approved direction |
| The | Referral preparation, routing and receiving-response workflow |
| Is a | Structured handoff coordination capability |
| That | Keeps package preparation, routing, receiving acceptance/rejection and return for a new direction as separate steps |
| Unlike | A workflow that implies a routed referral has been accepted or lets a draft bypass human approval |
| Our solution | Enables routing only after approved direction and required evidence, then attributes the receiving response without automatic rerouting after rejection. |
| Business-outcome hypothesis | Role walkthroughs will show that users distinguish referral preparation from receiving response and can identify the owner of each decision. |
| Proposed leading indicators | Package is blocked before direction; missing evidence is identified; acceptance/rejection route is correctly interpreted; rejection returns to physician direction. |
| Non-functional controls | NFR-04, NFR-05, NFR-06, NFR-07, NFR-08 |

### EP-04 — Exceptions, recovery and audit

| Field | Jira epic description |
|---|---|
| For | Care Coordinators, accountable exception owners and authorised governance reviewers |
| Who | Need to investigate incomplete, uncertain or failed workflow evidence without unsafe progression |
| The | Exception and audit capability |
| Is a | Safe-recovery and attributable-trace layer |
| That | Shows failure reason, owner, prohibited action, last verified state, return condition and linked evidence history |
| Unlike | A workflow that silently retries, advances work twice or overwrites evidence after a failure |
| Our solution | Keeps exceptions open and owned until authorised resolution, returns only to the last verified state and preserves append-oriented audit evidence. |
| Business-outcome hypothesis | Scenario walkthroughs will show that users can identify what failed, who owns recovery and why unsafe progression is blocked. |
| Proposed leading indicators | Correct exception owner and safe return identified; duplicate/retry does not create duplicate progression; audit entry categories and correction chain are understood. |
| Non-functional controls | NFR-03, NFR-04, NFR-05, NFR-06, NFR-07 |

### EP-05 — Optional AI assistance

| Field | Jira epic description |
|---|---|
| For | Clinic physicians, Care Coordinators and Referral Coordinators |
| Who | May benefit from orientation or handoff drafting but retain all consequential decision authority |
| The | Source-linked AI draft review |
| Is a | Optional, pre-written synthetic assistance surface |
| That | Shows source references, version, uncertainty, reviewer disposition and a complete manual fallback |
| Unlike | AI presented as a verified clinical finding, decision maker, referral sender or blocking dependency |
| Our solution | Permits correction, rejection, discard and limited approved use without any direct workflow-state change; AI-02 is unavailable before human direction. |
| Business-outcome hypothesis | Role walkthroughs will show that reviewers treat AI as a reviewable draft and can continue safely when it is stale, unsupported or unavailable. |
| Proposed leading indicators | Source/uncertainty is located; unsafe output is rejected; manual route is completed; AI-02 entry condition is correctly identified. |
| Non-functional controls | NFR-04, NFR-05, NFR-06, NFR-07 |

### EP-06 — Next-step confirmation and scoped closure

| Field | Jira epic description |
|---|---|
| For | Care Coordinators and authorised communication owners |
| Who | Need to verify that the defined next step is evidenced before closing the bounded diagnostic-closure workflow |
| The | Next-step confirmation and scoped closure workflow |
| Is a | Evidence-gated coordination control |
| That | Separates human direction, handoff/response, communication, confirmation and closure evidence |
| Unlike | A workflow that treats a sent message, referral route or previous decision as proof that the next step is confirmed or the episode is complete |
| Our solution | Enables `Next Step Confirmed` only with applicable evidence and offers a distinct, later `Episode Completed` action labelled as diagnostic-closure workflow completion. |
| Business-outcome hypothesis | Role walkthroughs will show that users distinguish confirmation from closure and do not bypass missing evidence or open safety-blocking exceptions. |
| Proposed leading indicators | Correct identification of evidence gaps; confirmation/closure controls stay disabled when appropriate; scoped completion label is understood. |
| Non-functional controls | NFR-04, NFR-05, NFR-06, NFR-07, NFR-08 |

### EP-07 — Quality and controlled release

| Field | Jira epic description |
|---|---|
| For | Prototype delivery owner, Quality/UAT reviewer, Product Owner and governance/safety reviewer |
| Who | Need a defensible basis to decide whether a synthetic prototype increment can progress to structured review |
| The | Sprint 6 quality and controlled-release evidence set |
| Is a | Test, defect, accessibility and release-decision control |
| That | Links actual execution results, defects, AI control checks, retests and limitations to the approved baseline |
| Unlike | A prototype sign-off based only on a happy-path demonstration or visual polish |
| Our solution | Requires recorded evidence, visible limitations, no open Critical defect and manual AI fallback before a synthetic release decision. |
| Business-outcome hypothesis | The release review will be able to reach a transparent continue, change, defer-AI or stop decision from recorded evidence rather than assertion. |
| Proposed leading indicators | Test evidence is linked to requirements; defects are triaged/retested; AI fallback disposition is recorded; release criteria are inspectable. |
| Non-functional controls | NFR-01 to NFR-09, as applicable across all screens |

## Proposed internal delivery increments

| Increment | Goal | Planned stories | Demonstrable exit condition |
|---|---|---|---|
| 6.0 Foundation | Establish a maintainable, traceable prototype shell before screen work. | ENAB-601 to ENAB-603 | Local synthetic fixture, state/event model, shared accessible shell and navigation contract are ready for screen stories. |
| 6.1 Safe entry and episode view | Deliver safe launch and verified episode orientation. | COS-601, COS-602 and the SCR-07 safe-return foundation | A user can launch, see only verified synthetic context, or reach a visible safe exception route. |
| 6.2 Result review and direction | Deliver the central human clinical gate without AI authority. | COS-603, COS-604 | Current-version acknowledgement and a human-owned follow-up direction work end to end. |
| 6.3 Referral handoff | Deliver preparation, routing controls and receiving response. | COS-605, COS-606 | Referral preparation and receiving acceptance/rejection remain separate and attributable. |
| 6.4 Recovery, AI, audit and closure | Complete control surfaces and the end of the workflow. | COS-607 to COS-610 | Exceptions, AI fallback, trace and scoped closure are demonstrable. |
| 6.5 Release 0.1 to 0.2 | Execute planned tests, fix prioritised defects and make a controlled release decision. | QLT-601 to QLT-604 | Actual evidence supports a documented synthetic Release 0.1/0.2 decision. |

The early SCR-07 safe-return foundation is not a new screen or a partial scope change. It is the minimum approved exception route needed to keep failed launch, linkage and result-review paths safe during increments 6.1 and 6.2. Full queue/detail capability remains COS-607 in increment 6.4.

## Story backlog

| ID | Story | Actor and outcome | Screen | Dependencies | Proposed points | Acceptance-criteria links |
|---|---|---|---|---|---:|---|
| ENAB-601 | Establish the application and navigation shell | Delivery team can render all approved routes from one controlled navigation contract. No product decision is created. | Cross-cutting | Approved screen/navigation map | 3 | NFR-04, NFR-05, NFR-09 |
| ENAB-602 | Create controlled synthetic fixtures and deterministic state/event logic | Delivery team can demonstrate the approved tracer, versions, failures and audit events without a live API or model. | Cross-cutting | Data dictionary; event catalogue; synthetic-fixture validation | 5 | NFR-01, NFR-02, NFR-03, NFR-07 |
| ENAB-603 | Create shared accessible workflow components | Delivery team can reuse patient context, state/owner/next-action, evidence, alert, confirmation and journey-rail patterns consistently. | Cross-cutting | Design standards; screen specifications | 5 | NFR-04, NFR-06, NFR-08, NFR-09 |
| COS-601 | Start an authorised simulated launch | As a Clinic physician, I can start a simulated read-only launch and see the access outcome before protected context appears. | SCR-01 | ENAB-601; ENAB-602 | 3 | AC-FR-01-01 to AC-FR-01-02; AC-FR-02-01 to AC-FR-02-02; AC-NFR-01-01 to AC-NFR-01-02; AC-NFR-09-01 to AC-NFR-09-02 |
| COS-602 | View a verified episode workspace | As a Care Coordinator or authorised operational user, I can see state, owner, blocker, next task and distinct source/workflow evidence without changing state by viewing. | SCR-02 | COS-601 or approved role-aware direct entry; ENAB-603 | 5 | AC-FR-03-01 to AC-FR-03-02; AC-FR-04-01 to AC-FR-04-02; AC-FR-05-01 to AC-FR-05-02; AC-FR-07-01 to AC-FR-07-02 |
| COS-603 | Review and acknowledge the current report | As the assigned Clinic physician, I can review and acknowledge only the current valid report version, with prior acknowledgements retained as history. | SCR-03 | COS-602; current-version fixture; review assignment | 5 | AC-FR-06-01 to AC-FR-06-02; AC-FR-21-01 to AC-FR-21-02; AC-FR-25-01 to AC-FR-25-02; AC-FR-31-01 to AC-FR-31-03; AC-FR-32-01 to AC-FR-32-03 |
| COS-604 | Record a human follow-up direction | As a Clinic physician, I can record one approved direction after acknowledgement; as Care Coordinator, I can verify T08 evidence only where authorised. | SCR-04 | COS-603; current acknowledgement; direction evidence | 5 | AC-FR-08-01 to AC-FR-08-02; AC-FR-22-01 to AC-FR-22-02; AC-FR-29-01 to AC-FR-29-02; AC-NFR-08-01 to AC-NFR-08-03 |
| COS-605 | Prepare and route a referral handoff | As a Referral Coordinator, I can prepare a complete approved package and route it only when required human approvals and evidence are present. | SCR-05 | COS-604 referral/escalation route; destination/approval fixture | 5 | AC-FR-09-01 to AC-FR-09-02; AC-FR-16-01 to AC-FR-16-02; AC-NFR-08-01 to AC-NFR-08-03 |
| COS-606 | Record a receiving response | As a Receiving team member or authorised recording role, I can record acceptance or rejection with reason, destination and timeframe without automatic rerouting. | SCR-06 | COS-605; receiving-response fixture | 3 | AC-FR-10-01 to AC-FR-10-02; AC-FR-27-01 to AC-FR-27-02 |
| COS-607 | Investigate and safely resolve an exception | As an accountable exception user, I can see the reason, owner, prohibited action, safe recovery and return condition; progression remains blocked until verified resolution. | SCR-07 | ENAB-602; all applicable failure routes | 5 | AC-FR-12-01 to AC-FR-12-02; AC-FR-13-01 to AC-FR-13-02; AC-NFR-03-01 to AC-NFR-03-02; AC-NFR-06-01 to AC-NFR-06-03 |
| COS-608 | Review an optional AI draft with manual fallback | As an authorised reviewer, I can inspect source links, versions and uncertainty; edit, reject or discard the draft; and continue manually if it is unavailable or unsafe. | SCR-08 | COS-603 for AI-01; COS-605 for AI-02; COS-607 failure route | 5 | AC-FR-15-01 to AC-FR-15-02; AC-FR-16-01 to AC-FR-16-02; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03 |
| COS-609 | Inspect ordered audit evidence | As an authorised reviewer, I can inspect distinct, attributable workflow, decision, AI, exception and correction evidence without editing history. | SCR-09 | ENAB-602; events from completed stories | 3 | AC-FR-14-01 to AC-FR-14-02; AC-FR-33-01 to AC-FR-33-03; AC-NFR-07-01 to AC-NFR-07-03 |
| COS-610 | Confirm the next step and separately close the workflow | As a Care Coordinator, I can confirm only when required evidence is complete and then record a separate scoped diagnostic-closure completion. | SCR-10 | COS-606 or verified T08 route; COS-607 safety check | 5 | AC-FR-11-01 to AC-FR-11-03; AC-FR-22-01 to AC-FR-22-02; AC-FR-24-01 to AC-FR-24-02; AC-FR-30-01 to AC-FR-30-03 |
| QLT-601 | Execute unit and simulated integration checks | Delivery team can record actual results for approved happy and failure scenarios, linked to requirements and defects. | Cross-cutting | Relevant build stories complete | 5 | Applicable functional and NFR acceptance criteria |
| QLT-602 | Execute accessibility and interaction-state checks | Delivery team can record keyboard, focus, text alternatives, colour-independent status, reduced-motion and loading/recovery observations. | Cross-cutting | Relevant build stories complete | 3 | AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-09-01 to AC-NFR-09-02 |
| QLT-603 | Execute AI control evaluation | Delivery team can record each approved fixture-level AI disposition, including unsafe/unavailable fallback. | SCR-08 and calling screens | COS-608; approved AI rubric | 3 | AC-FR-15-01 to AC-FR-15-02; AC-FR-16-01 to AC-FR-16-02 |
| QLT-604 | Triage defects and record Release 0.1 to 0.2 decision | Product Owner and delivery roles can inspect recorded evidence, prioritise fixes and document a synthetic release decision. | Cross-cutting | QLT-601 to QLT-603; defect/change/release controls | 3 | Sprint 6 go/no-go and release policy |

## Recorded execution status

| Story | Status | Factual evidence | Scope boundary |
|---|---|---|---|
| ENAB-601 | Done | Local tests, TypeScript lint and production build recorded in `test_execution_evidence.csv`. | Navigation shell only; no screen workflow. |
| ENAB-602 | Done | Local synthetic fixture/state-event tests, TypeScript lint and production build recorded in `test_execution_evidence.csv` and the reconciliation tracker. | No screen, live API, source write-back, real AI or human decision implementation. |
| ENAB-603 | Done | Reusable accessible state/owner/next-action and synthetic journey-rail components are used by the implemented access, workspace and safe-return surfaces. | No later-screen component or workflow implementation. |
| COS-601 | Done | Local launch-controller tests, TypeScript lint and production build recorded in `test_execution_evidence.csv`. | Simulated read-only access only; no live authorisation or protected data before validation. |
| COS-602 | Done | Local workspace gate, source/workflow evidence separation and production build recorded in `test_execution_evidence.csv`. | View-only workspace; no acknowledgement, direction, referral, identity reconciliation or closure action. |
| COS-607 safe-return foundation | Done | Represented access failure routes to SCR-07 with owner, prohibited action and safe return. | Full exception queue/detail remains COS-607 in Increment 6.4. |
| COS-603 | Done | Current-version acknowledgement controller tests, TypeScript lint and production build recorded in `test_execution_evidence.csv`. | No diagnosis, referral, communication or AI action; COS-604 records the separate subsequent direction. |
| COS-604 | Done | Direction and T08-verification controller tests, TypeScript lint and production build recorded in `test_execution_evidence.csv`. | No AI recommendation/preselection, clinical automation, real role authentication or referral routing; COS-605 remains next. |

## RTM requirement-to-story mapping

This table makes the backlog's screen-story ownership explicit. **RTM-primary requirements** are copied from the Sprint 5 RTM's `Planned Screen ID` mapping; they are the complete requirement set owned by that screen story. A story can display or enforce a requirement assigned primarily to another screen, but that does not move RTM ownership. Enabler and quality stories support all relevant requirements and do not replace a screen story's primary ownership.

| Jira story | RTM planned screen | RTM-primary requirement IDs | Supporting cross-screen controls in this story |
|---|---|---|---|
| COS-601 | SCR-01 | FR-01; FR-02; NFR-03; NFR-06; TR-01 | NFR-01; NFR-04; NFR-05; NFR-07; NFR-09 |
| COS-602 | SCR-02 | BR-01; FR-04; FR-05; FR-07; FR-17; FR-18; FR-19; FR-20; TR-02; US-01; US-03; US-05 | FR-03; FR-21; FR-31; FR-32; NFR-02; NFR-04; NFR-05; NFR-06; NFR-07 |
| COS-603 | SCR-03 | BR-02; FR-06; FR-21; FR-25; FR-31; FR-32; NFR-08; US-04 | BR-04; FR-05; NFR-04; NFR-05; NFR-06; NFR-07 |
| COS-604 | SCR-04 | BR-02; FR-08; FR-29; NFR-08; US-01 | FR-22; NFR-04; NFR-05; NFR-06; NFR-07 |
| COS-605 | SCR-05 | BR-02; FR-09; NFR-08; US-06 | FR-16; NFR-04; NFR-05; NFR-06; NFR-07 |
| COS-606 | SCR-06 | BR-02; FR-10; FR-27; US-07 | NFR-04; NFR-05; NFR-06; NFR-07 |
| COS-607 | SCR-07 | BR-03; FR-03; FR-12; FR-13; NFR-03; NFR-06; TR-02; US-02; US-03; US-05 | FR-02; NFR-04; NFR-05; NFR-07 |
| COS-608 | SCR-08 | BR-04; FR-15; FR-16; US-06 | NFR-04; NFR-05; NFR-06; NFR-07 |
| COS-609 | SCR-09 | FR-14; FR-33; NFR-03; NFR-07; TR-02 | NFR-04; NFR-05; NFR-06 |
| COS-610 | SCR-10 | BR-02; FR-11; FR-22; FR-24; FR-30; NFR-08; US-08 | NFR-04; NFR-05; NFR-06; NFR-07 |
| ENAB-601 to ENAB-603 | ALL screens | NFR-01; NFR-02; NFR-04; NFR-05; NFR-09 | These five RTM requirements have `Planned Screen ID = ALL`; reusable navigation, synthetic data/state-event logic and accessible components apply them across every screen. |
| QLT-601 to QLT-604 | ALL screens | NFR-01; NFR-02; NFR-04; NFR-05; NFR-09 | Test, accessibility, AI-evaluation, defect and release evidence validates the five `ALL` requirements across the mapped screen stories. |

**Coverage check:** the ten screen stories cover the 48 approved RTM requirements mapped to `SCR-01` through `SCR-10`; ENAB-601 to ENAB-603 and QLT-601 to QLT-604 cover the five approved requirements mapped to `ALL` screens. Together they cover all 53 requirements approved for prototype. FR-23, FR-26 and FR-28 are deliberately absent because the RTM maps them to `ROADMAP` and they remain deferred.

## Build-story detail: user-story and Given/When/Then format

The table above is the backlog view. The following is the ticket-body format a real delivery team would see in Jira. The linked Sprint 5 `AC-*` catalogue remains the full authoritative test set.

### COS-601 — Start an authorised simulated launch

**User story**

> As a Clinic physician, I want to start an authorised simulated read-only launch, so that I can access verified synthetic episode context without exposing protected context after an access failure.

**Acceptance criteria**

- Given launch context is valid, when I select `Start authorised simulated launch`, then minimum verified synthetic context opens SCR-02.
- Given authorisation is denied, expired or unavailable, when the launch ends, then protected patient and episode context is not displayed and the support route is visible.
- Given an invalid or incomplete launch context, when retrieval is attempted, then no episode is attached and the condition remains visible for human/source review.

### COS-602 — View a verified episode workspace

**User story**

> As a Care Coordinator, I want to see the current state, owner, blocker, next task and verified evidence for an episode, so that I can coordinate the next authorised action without changing workflow state by viewing it.

**Acceptance criteria**

- Given verified episode linkage, when I open the workspace, then the canonical state, owner, blocker, age/due context and next task are visible without scrolling past supporting detail.
- Given operational completion and a result are both recorded, when I view the milestone strip, then they appear as distinct statuses and result availability is not presented as acknowledgement.
- Given patient or encounter linkage is uncertain, when I try to open next work, then the item routes to the safe exception path and no valid episode is silently attached.

### COS-603 — Review and acknowledge the current report

**User story**

> As an assigned Clinic physician, I want to review and acknowledge the current diagnostic-report version, so that the next workflow decision has attributable human review evidence.

**Acceptance criteria**

- Given I am the assigned authorised physician and the current report has valid linkage, version and required evidence, when I acknowledge it, then the system records my identity, timestamp, report ID and version and opens follow-up work.
- Given report evidence is incomplete, stale or inconsistent, when I open the review task, then acknowledgement is unavailable and the safe exception route is visible.
- Given an amended report version arrives after acknowledgement, when I open the report, then the prior acknowledgement remains visible as history and a fresh review is required.

### COS-604 — Record a human follow-up direction

**User story**

> As a Clinic physician, I want to record one approved follow-up direction after acknowledging the current report, so that clinic management, referral or escalation remains a human-controlled decision.

**Acceptance criteria**

- Given the current report is acknowledged, when I select clinic management, day-care referral or hospital escalation and record the direction, then the direction, evidence reference, actor and timestamp are retained.
- Given I have not acknowledged the current report or the report version is stale, when I try to record a direction, then the action is blocked and no direction is inferred or recorded.
- Given clinic management is selected, when a Care Coordinator verifies T08 evidence, then only the named owner, timeframe, next task and applicable communication/confirmation evidence can support `Next Step Confirmed`; the coordinator cannot change the physician's direction.

### COS-605 — Prepare and route a referral handoff

**User story**

> As a Referral Coordinator, I want to prepare and route a referral package only after an approved human direction, so that the handoff is complete, attributable and not mistaken for receiving acceptance.

**Acceptance criteria**

- Given there is no approved referral or escalation direction, when I open referral preparation, then package preparation and any AI-02 draft are unavailable with a plain-language reason.
- Given an approved direction and complete required package evidence, when I route the package, then the route remains `Referral Created` pending a separate receiving response.
- Given a required field, approval or destination is missing, when I try to route, then routing is blocked, entered work is preserved and a safe correction path is shown.

### COS-606 — Record a receiving response

**User story**

> As a Receiving team member, I want to record acceptance or rejection of a referral, so that the response is attributable and the next workflow route is correct.

**Acceptance criteria**

- Given a routed referral, when the Receiving team records acceptance, then the receiving role, destination and timeframe are retained and the next-step confirmation route becomes available only when required evidence exists.
- Given a routed referral, when the Receiving team records rejection, then the reason and handoff history are retained and work returns to a new physician follow-up direction.
- Given rejection is recorded, when the response is saved, then the system does not automatically redirect, resend or cancel the referral.

### COS-607 — Investigate and safely resolve an exception

**User story**

> As an accountable exception user, I want to see what failed, who owns resolution and the safe return condition, so that incomplete or unsafe work cannot progress silently.

**Acceptance criteria**

- Given linkage, result, access, duplicate-event or service evidence is invalid, when the exception opens, then the reason, owner, prohibited action, last verified state and safe return condition are visible.
- Given an exception is unresolved, when a user attempts a blocked action, then no clinical direction, acknowledgement, referral or closure is advanced.
- Given an authorised resolution is verified, when the item returns to workflow, then it returns only to the last verified valid state and retains audit evidence.

### COS-608 — Review an optional AI draft with manual fallback

**User story**

> As an authorised reviewer, I want to inspect, correct, reject or discard an AI-generated draft with its source evidence, so that I can use optional assistance without giving AI decision authority or losing the manual workflow.

**Acceptance criteria**

- Given a source-linked AI draft is available, when I open it, then its capability, source references, versions, uncertainty and current disposition are visible.
- Given the draft is stale, unsupported, wrong-patient, wrong-version or unavailable, when I review it, then I can reject/discard it and continue manually from source evidence without a workflow-state change.
- Given I record a disposition, when I return to the calling screen, then the reviewer, time, source-version context and reason where applicable are available in audit evidence.

### COS-609 — Inspect ordered audit evidence

**User story**

> As an authorised governance or operational reviewer, I want to inspect ordered, attributable workflow evidence, so that I can understand what happened without changing prior history.

**Acceptance criteria**

- Given material workflow events exist, when I open audit and trace, then each entry shows outcome, actor/source, timestamp and applicable source/version reference.
- Given AI, exceptions, communication or corrections occurred, when I filter or inspect evidence, then these categories remain visibly distinct from human decisions and source records.
- Given a correction or recovery exists, when I view its chain, then earlier history remains available and no edit/delete control is provided for prior audit evidence.

### COS-610 — Confirm the next step and separately close the workflow

**User story**

> As a Care Coordinator, I want to verify required next-step evidence and then separately record scoped diagnostic-closure completion, so that confirmation and closure are not confused or automated.

**Acceptance criteria**

- Given the applicable direction, owner, destination/timeframe, response and communication evidence are complete, when I record `Next Step Confirmed`, then the evidence, actor and timestamp are retained.
- Given required evidence is missing, a report version is wrong or a safety-blocking exception is open, when I try to confirm or close, then the action is blocked and the safe exception route is available.
- Given `Next Step Confirmed` is already recorded and closure evidence is complete, when I record `Episode Completed`, then it is labelled diagnostic-closure workflow completion and remains distinct from broader care completion.

### Quality stories — test and release evidence

**User story (QLT-601/602)**

> As a Quality/UAT reviewer, I want to execute and record functional, recovery, accessibility and interaction-state checks, so that release readiness is based on evidence rather than screen appearance.

**Acceptance criteria**

- Given a build story is ready for test, when its approved scenario runs, then the actual result, role, interaction state, defect link and evidence reference are recorded.
- Given an accessibility or recovery issue is found, when it is triaged, then it is linked to the affected story and retested after correction.

**User story (QLT-603/604)**

> As the Product Owner and delivery team, I want to evaluate AI controls and triage release defects, so that Release 0.2 is a documented, controlled improvement over Release 0.1.

**Acceptance criteria**

- Given an AI evaluation fixture is executed, when its reviewer disposition is recorded, then source-link, stale-output, unsupported-content and manual-fallback evidence are captured.
- Given release evidence is reviewed, when a Critical defect is open or a safety control fails, then the release is not approved until correction and retest are recorded.

## Definition of Ready

A story may move to **Ready for development** only when:

- it is within the approved 53-requirement prototype baseline and names its linked screen(s);
- its business actor, human authority, state entry/exit and prohibited actions are explicit;
- its atomic `AC-*` references, source/fixture, required audit event and failure/safe-return behaviour are identified;
- its design is traceable to the screen specification and project-local design standards;
- its dependencies are complete or visibly planned in the same increment; and
- any proposed new screen, state, data field, authority, workflow route or AI capability is absent or has an approved controlled change.

## Definition of Done

A story may move to **Done** only when:

- the approved interaction is implemented and peer-reviewed;
- every linked acceptance criterion has an actual recorded result or is explicitly blocked;
- relevant unit, simulated integration, accessibility and interaction/loading/recovery checks are recorded;
- human-control, source/version, exception and audit evidence behave as specified;
- defects are linked, triaged and retested as applicable;
- the change log is updated if the controlled baseline changed; and
- no story is marked Done solely because the screen looks complete.

## Standard sub-tasks

Every screen story should use the following sub-tasks as applicable:

1. Confirm design/specification, actor, state and acceptance criteria.
2. Prepare or validate synthetic fixture and deterministic state/event path.
3. Implement accessible screen and shared-component behaviour.
4. Implement normal, loading, unavailable, error and safe-recovery states.
5. Add or update automated/unit checks where proportionate.
6. Execute simulated integration and role walkthrough checks.
7. Log defects, retest and link evidence.
8. Demonstrate the story at sprint review and update release traceability.

## Backlog rules

- The three deferred requirements, FR-23, FR-26 and FR-28, do not enter Sprint 6 without approved change control.
- AI stories start only after their manual workflow is usable; AI remains optional and cannot create or approve a consequential workflow action.
- A failure never shows as success, and recovery returns only to the last verified valid state.
- No story may claim clinical validation, user research, production integration, model performance, deployment or outcome improvement from prototype completion.
- Points may be refined at backlog refinement, but a story above 8 points must be split or deferred without changing the approved product scope.

## First backlog-refinement session

The first practical session should refine ENAB-601 to ENAB-603, COS-601 and COS-602. Confirm the React/frontend location, local fixture format, navigation approach, test runner and the minimal SCR-07 safe-return implementation. These are implementation choices within the approved prototype boundary; any change to screen scope, workflow, human authority or state vocabulary requires formal change control.
