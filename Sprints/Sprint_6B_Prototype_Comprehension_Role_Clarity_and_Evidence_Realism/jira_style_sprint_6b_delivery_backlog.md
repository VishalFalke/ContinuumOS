# Sprint 6B — Jira-style delivery backlog

## Purpose and status

This is a portfolio-style delivery backlog for Sprint 6B: **Prototype Comprehension, Role Clarity and Evidence Realism**. It translates the approved planning direction into independently refinable stories while retaining the completed Sprint 6 prototype as the functional baseline.

**Current status:** Implementation in progress. `PLN-6B-01`, `ENAB-6B-01`, `ENAB-6B-02` and `COS-6B-01` through `COS-6B-08` are complete with local verification evidence. Product Owner presentation defects `DEF-6B-UX-01` through `DEF-6B-UX-04` are resolved with a task-first shell, non-interrupting represented-role treatment, secondary task status, wide desktop task layout, left-aligned evidence preview, one portfolio-data disclaimer and separate portfolio navigation. TypeScript lint, all 74 Node tests, the Vite production build and focused browser checks passed. Final whole-prototype regression remains. Existing workflow controllers, authority, AI-safety controls, route contracts and fixture semantics remain unchanged.

**Sprint objective:** Make the synthetic prototype understandable to the represented operational user and a non-expert portfolio viewer. Each screen must make clear who is viewing it, why it exists, what information arrived and what should happen next.

## Product backlog

| ID | Type | Title | User story / outcome | Screen(s) | Dependencies | Estimate | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| PLN-6B-01 | Planning | Approve implementation decision pack | As the Product Owner, I want the placement, session-role, dependency and navigation decisions recorded, so that implementation does not silently change scope or authority. | All | Product Owner decisions for `DEP-6B-01` to `DEP-6B-04` | 3 | Done — Product Owner decisions recorded 2026-07-27 |
| ENAB-6B-01 | Enabler | Establish regression-safe presentation contracts | As the delivery team, we need controlled screen metadata and presentation inputs, so that visual summaries remain derived from existing deterministic rules. | All | PLN-6B-01 | 5 | Done — typed contract and focused checks passed 2026-07-27 |
| ENAB-6B-02 | Enabler | Implement simulated-session and navigation shell | As a portfolio viewer, I need to see a truthful simulated-session context and separate walkthrough navigation, so that I do not mistake demonstration navigation for an operational action. | SCR-01 to SCR-10 | Approved session model and major navigation decision | 5 | Done — shell and focused checks passed 2026-07-27 |
| COS-6B-01 | Story | Orient the viewer at launch and episode overview | As a Care Coordinator or portfolio viewer, I want a clear purpose, source context and non-operational next-screen explanation, so that orientation does not imply an assignment or state change. | SCR-01, SCR-02 | ENAB-6B-01, ENAB-6B-02 | 3 | Done — focused checks, all 42 tests, build and browser regression recorded 2026-07-27 |
| COS-6B-02 | Story | Clarify result review and human direction | As an assigned Clinic physician, I want the source report, my decision authority and the consequence of each approved direction presented clearly, so that acknowledgement and direction remain distinct human actions. | SCR-03, SCR-04 | ENAB-6B-01 | 5 | Done — focused checks, all 47 tests, build and browser regression recorded 2026-07-27 |
| COS-6B-03 | Story | Clarify referral handoff and receiving response | As a Referral Coordinator or Receiving team member, I want evidence, accountable roles, blockers and outcome boundaries shown before I act, so that routing, acceptance and next-step confirmation are not conflated. | SCR-05, SCR-06 | ENAB-6B-01; `DEP-6B-03` resolved or deferred | 5 | Done — focused checks, all 51 tests, build and browser regression recorded 2026-07-27 |
| COS-6B-04 | Story | Make exception ownership and safe recovery scannable | As an accountable exception user, I want to compare represented failures and inspect selected recovery requirements, so that no unsafe work silently advances or resumes. | SCR-07 | ENAB-6B-01 | 5 | Done — focused checks, all 55 tests, build and browser regression recorded 2026-07-27 |
| COS-6B-05 | Story | Put AI evidence before the optional draft | As an authorised reviewer, I want to inspect source/version evidence, uncertainty and manual fallback before recording a human disposition, so that AI remains optional and non-authoritative. | SCR-08 | ENAB-6B-01; `DEP-6B-01` resolved or explicitly deferred | 5 | Done — focused checks, all 59 tests, build and browser regression recorded 2026-07-27 |
| COS-6B-06 | Story | Improve trace readability without changing history | As an operational or governance reviewer, I want to scan attributable chronological evidence and use truthful filters, so that I can understand the represented workflow without editing history. | SCR-09 | ENAB-6B-01 | 3 | Done — focused checks, all 63 tests, build and browser regression recorded 2026-07-27 |
| COS-6B-07 | Story | Clarify evidence-gated confirmation and scoped closure | As a Care Coordinator, I want readiness evidence, source ownership and the distinct closure sequence presented clearly, so that `Next Step Confirmed` and `Episode Completed` are never confused or automated. | SCR-10 | ENAB-6B-01; `DEP-6B-02` resolved or explicitly deferred | 5 | Done — focused checks, all 68 tests, build and browser regression recorded 2026-07-27 |
| COS-6B-08 | Story | Preview approved synthetic evidence read-only | As a portfolio viewer or represented operational user, I want to inspect approved synthetic report evidence in an accessible read-only treatment, so that the prototype feels realistic without inventing clinical content. | SCR-03, SCR-05, SCR-10, SCR-09 where mapped | Approved interaction treatment and fixture-field mapping | 3 | Done — focused checks, all 72 tests, build and browser regression recorded 2026-07-27 |
| QLT-6B-01 | Quality | Execute focused increment regression | As a Quality reviewer, I want focused route, controller-result, accessibility and responsive checks after each increment, so that a presentation refinement cannot weaken existing controls. | Cross-cutting | Relevant implementation stories | 5 | Planned after each increment |
| QLT-6B-02 | Quality | Execute clean-session whole-prototype regression | As the Product Owner and Quality reviewer, I want a factual end-to-end regression record, so that Sprint 6B completion is based on evidence rather than screen appearance. | Cross-cutting | All approved Sprint 6B stories | 5 | Planned before sprint closure |

## Story details and acceptance criteria

### PLN-6B-01 — Approve implementation decision pack

**User story**

> As the Product Owner, I want the remaining design and dependency decisions recorded before development, so that the portfolio prototype remains consistent with the approved workflow, authority and AI boundaries.

**Acceptance criteria**

- Given Sprint 6B has open dependency conflicts, when the backlog is refined, then each `DEP-6B-*` item has a Product Owner decision or an explicit implementation deferral.
- Given the prototype presents multiple human roles, when the session model is approved, then simulated signed-in user, viewing role, workflow owner, decision actor, recording actor and next role are separately defined.
- Given the hybrid navigation proposal changes task-screen layout, when it is considered, then its approval or rejection is recorded before implementation.
- Given a direct task route is opened before launch, when the behaviour is documented, then it does not imply real authentication or authorisation.

### ENAB-6B-01 — Establish regression-safe presentation contracts

**User story**

> As the delivery team, we need presentation contracts mapped to existing controlled values, so that readiness, blockers, state, journey and post-action evidence cannot diverge from deterministic controller outcomes.

**Acceptance criteria**

- Given a new summary, readiness row or outcome message is displayed, when the underlying action state changes, then it is derived from the same controlled inputs and controller result as the relevant action.
- Given an action has not succeeded, when a screen is rendered, then it does not show completed state, audit evidence or success feedback prematurely.
- Given shared markup changes, when regression runs, then all ten routes are checked for unrelated CSS selector effects.

### ENAB-6B-02 — Implement simulated-session and navigation shell

**User story**

> As a portfolio viewer, I want a visible simulated-session treatment and separate prototype navigation, so that I can distinguish role context from operational authority and walkthrough movement from workflow action.

**Acceptance criteria**

- Given a simulated launch has succeeded, when an operational screen opens, then the synthetic session identity is visible without conflating it with accountable owner, decision actor or recording actor.
- Given the demonstration changes represented roles, when a role transition occurs, then it is explicit and labelled as simulated.
- Given a user opens prototype navigation, when they move to another screen, then no controller is called, no audit evidence is appended and no workflow state changes.
- Given narrow-width or keyboard use, when navigation opens or closes, then focus, visible focus, Escape behaviour and focus return meet the project accessibility standard.

### COS-6B-01 — Orient the viewer at launch and episode overview

**User story**

> As a Care Coordinator or portfolio viewer, I want to understand the purpose, evidence sources and available next action at launch and overview, so that I can distinguish a read-only orientation surface from workflow work.

**Acceptance criteria**

- Given the simulated launch succeeds, when the confirmation is shown, then it describes a synthetic represented outcome and does not collect credentials or claim durable authentication.
- Given I view the episode overview, when another role owns the next operational step, then that fact is explicit and any demonstration navigation is clearly non-operational.
- Given linkage or access is unavailable, when the safe route opens, then protected context remains hidden and the accountable recovery route is visible.

### COS-6B-02 — Clarify result review and human direction

**User story**

> As an assigned Clinic physician, I want source evidence, acknowledgement status, decision authority and direction consequences shown in a clear order, so that I can make an attributable human decision without AI influence or accidental progression.

**Acceptance criteria**

- Given I am reviewing a report, when the screen loads, then the current source report version, human acknowledgement boundary, owner and next action are visible before the action.
- Given I choose a follow-up direction, when options are displayed, then no direction is preselected and each option explains only its approved immediate workflow consequence.
- Given acknowledgement or direction succeeds, when the outcome is shown, then actor, time and event evidence appear only after the existing controller allows the action.
- Given the viewer opens the next demonstration screen, when the route changes, then the interface does not claim the local action was persisted across screens.

### COS-6B-03 — Clarify referral handoff and receiving response

**User story**

> As a Referral Coordinator or Receiving team member, I want package evidence, role attribution, readiness and response boundaries presented before action, so that a routed package is not mistaken for delivery, acceptance or next-step confirmation.

**Acceptance criteria**

- Given a handoff package is incomplete, when the coordinator views routing, then each approved blocker is visible and routing remains unavailable under the existing deterministic gate.
- Given a package is routed, when outcome feedback appears, then it records only package/send-attempt evidence and retains `Referral Created` pending receiving response.
- Given a receiving response is recorded, when the form is shown, then Accept and Reject have no default and the decision actor remains distinct from any recording actor or source.
- Given a response succeeds, when feedback appears, then `EVT-14`, resulting state and next owner are shown only after valid recording; acceptance does not confirm the next step and rejection does not create a replacement referral.

### COS-6B-04 — Make exception ownership and safe recovery scannable

**User story**

> As an accountable exception user, I want a scannable queue and synchronised detail, so that I can understand what failed, what I may not do, and the evidence required for safe recovery.

**Acceptance criteria**

- Given an exception is selected, when its detail is shown, then selected condition, affected work, owner, prohibited action, safe action and return condition refer to the same approved profile.
- Given recovery evidence is incomplete or the role is not accountable, when the user views resolution, then the existing resolution action remains blocked and no workflow advancement is implied.
- Given recovery succeeds, when feedback appears, then append-only recovery evidence and a separate manual return to the last verified state are visible; the original action is not recreated automatically.
- Given a narrow viewport or keyboard navigation, when the queue is used, then selection remains labelled, operable and understandable without colour alone.

### COS-6B-05 — Put AI evidence before the optional draft

**User story**

> As an authorised reviewer, I want source evidence, uncertainty and manual fallback before AI content and disposition, so that I can use optional assistance without treating it as a clinical or workflow authority.

**Acceptance criteria**

- Given AI-01 or AI-02 is opened, when the screen is rendered, then calling workflow, source/version references, evidence status and uncertainty appear before or alongside the clearly labelled AI-generated draft.
- Given I choose a disposition, when controls are displayed, then accept, correct, reject and discard do not visually bias acceptance and correction retains its existing evidence requirement.
- Given a draft is stale, unavailable or unsupported, when it is reviewed, then a complete manual route remains available and no canonical workflow state changes.
- Given a human disposition succeeds, when evidence appears, then `EVT-20`, reviewer, time and source/version context appear only after the authorised controller result.

### COS-6B-06 — Improve trace readability without changing history

**User story**

> As an operational or governance reviewer, I want chronological, attributable evidence and truthful filters, so that I can understand the represented history without changing it.

**Acceptance criteria**

- Given I open the trace, when the primary table is shown, then each applicable row includes time, event/outcome, actor/source, source/version reference, event identifier and text category.
- Given I apply a filter, when results are displayed, then the visible filter state, result set and empty state remain consistent.
- Given linked evidence, row details or correction chains are offered, when a control appears, then it is backed by approved synthetic evidence and remains read-only.
- Given the trace is viewed after another screen action, when no persisted event has been added to its approved fixture, then it is labelled as representative synthetic history rather than a live session audit log.

### COS-6B-07 — Clarify evidence-gated confirmation and scoped closure

**User story**

> As a Care Coordinator, I want the status, source, owner and recorded time for each evidence obligation clearly separated, so that I can confirm the next step only when the existing gate allows it and close the scoped workflow separately.

**Acceptance criteria**

- Given confirmation evidence is incomplete, when readiness is displayed, then each approved requirement remains distinct and the current blocker and safe exception route are visible.
- Given required evidence passes, when `Next Step Confirmed` is recorded, then `EVT-16`, actor, time and state appear only after the existing confirmation controller succeeds.
- Given confirmation has not succeeded, when scoped closure is displayed, then it is locked or secondary and cannot compete with the current confirmation action.
- Given closure succeeds, when the outcome is shown, then `EVT-22` and `Episode Completed` are explicitly scoped to diagnostic-closure workflow completion.

### COS-6B-08 — Preview approved synthetic evidence read-only

**User story**

> As a portfolio viewer or represented operational user, I want an accessible read-only preview of approved synthetic evidence, so that I can inspect decision-relevant source material without introducing invented clinical content or source-system access.

**Acceptance criteria**

- Given I open an approved report preview, when it appears, then it is labelled **Synthetic demonstration document** and displays only approved fixture fields for `SYN-DR-6001` version `2`.
- Given the preview opens in a dialog, drawer or detail treatment, when keyboard navigation is used, then focus entry, containment where applicable, Escape and return to the invoking control work correctly.
- Given I close the preview, when I return to the calling screen, then no workflow state, audit event or source record changes.

### QLT-6B-01 — Execute focused increment regression

**User story**

> As a Quality reviewer, I want focused regression evidence after each approved increment, so that shared presentation changes do not weaken the existing deterministic workflow controls.

**Acceptance criteria**

- Given an increment changes a shared component or layout, when verification runs, then `npm run lint`, `npm run test`, `npm run build`, route/deep-link checks and focused browser scenarios are recorded.
- Given a focused check finds a Critical or High regression, when it is triaged, then work stops, the defect is recorded through the Sprint 6 process and the affected path is retested after the smallest approved fix.
- Given an accessibility disclosure, navigation or table treatment is changed, when it is verified, then keyboard, focus, visible status, reduced motion, 200% zoom and narrow-width behaviour are recorded.

### QLT-6B-02 — Execute clean-session whole-prototype regression

**User story**

> As the Product Owner and Quality reviewer, I want a clean-session whole-prototype regression record, so that Sprint 6B closure is based on factual evidence across all routes and recovery paths.

**Acceptance criteria**

- Given all approved Sprint 6B increments are complete, when the final regression runs, then all ten routes, launch states, normal paths, recovery paths, browser navigation and direct-route truthfulness are checked from a clean session.
- Given AI, audit and evidence-preview surfaces are reviewed, when results are recorded, then human/AI separation, source/version integrity, read-only boundaries and scenario-based limitations are explicit.
- Given final results are handed off, when Sprint 6B is considered for closure, then defects, limitations, screenshots or agreed evidence, command results and unresolved decisions are recorded factually.

## Definition of Ready

A Sprint 6B story may move to **Ready for development** only when:

- its relationship to the approved Sprint 5/Sprint 6 baseline and the Sprint 6B tracker is traceable;
- the screen placement and session-role implications are approved for that story;
- relevant `DEP-6B-*` conflicts are resolved or explicitly deferred;
- allowed implementation, test and evidence files are named, with current uncommitted work protected;
- its controller, fixture, route and audit constraints are identified;
- its failure, safe return, accessibility and AI/human-control implications are explicit; and
- it does not introduce authentication, role switching, persistence, new workflow behaviour, new evidence semantics, a dependency or an integration.

## Definition of Done

A Sprint 6B story may move to **Done** only when:

- the approved presentation change is implemented without changing controller authority, workflow state, route contract, fixture semantics or AI boundary;
- the relevant user story and acceptance criteria have actual recorded verification results;
- required route, controller, accessibility, responsive and recovery checks have passed or a factual blocker is recorded;
- walkthrough controls and evidence previews have been verified not to mutate workflow state;
- related defects and retests are linked where applicable; and
- Sprint 6B and project status artifacts are updated factually, without claiming user research, clinical validation, production readiness or deployment.

## Suggested refinement and delivery order

1. `PLN-6B-01` is complete; Product Owner decisions were recorded on 2026-07-27.
2. `ENAB-6B-02` and `COS-6B-01` through `COS-6B-08` are complete; execute final whole-prototype regression.
3. Continue approved evidence-preview and later refinements as small independently verified increments.
4. Deliver evidence preview only after its source and dependency mappings are approved.
5. Run `QLT-6B-01` after every increment and `QLT-6B-02` only after the approved backlog scope is complete.

## Backlog rules

- Sprint 6B is a comprehension and evidence-realism refinement, not a workflow redesign.
- Existing deterministic controllers remain the only authority for permitted actions, blockers, state transitions and audit events.
- The prototype remains a controlled set of synthetic scenario screens; it must not claim persisted cross-screen workflow execution where the dependency matrix identifies fixture representation.
- AI remains optional, source-linked, visibly uncertain and human-reviewed. It cannot diagnose, approve, route, accept, reject, confirm or close work.
- Real authentication, credentials, permissions, patient data, source-system access, integrations, dependencies and architecture changes are outside this backlog unless separately approved.
- Estimates are planning aids, not delivery evidence. Any story above 8 points must be split or deferred through controlled refinement.
