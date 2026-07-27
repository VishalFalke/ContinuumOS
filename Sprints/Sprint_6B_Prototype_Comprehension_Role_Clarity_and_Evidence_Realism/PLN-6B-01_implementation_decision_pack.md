# PLN-6B-01 — Implementation decision pack

## Status

**Done — Product Owner decisions recorded on 2026-07-27.**

This package is aligned to the Sprint 6B objective: improve comprehension, role clarity and evidence realism without reopening the approved workflow, state model, human-control rules, AI boundaries, routes or fixture semantics.

The Product Owner approved the recommendations in this package on 2026-07-27. The approvals are bounded to Sprint 6B presentation and comprehension work; they do not authorise a workflow, authority, AI-safety, authentication, persistence, route-contract or fixture-semantics change.

## Product and user understanding

| Topic | Sprint 6B position |
| --- | --- |
| Primary users | The authorised operational role represented on each screen, plus a non-expert portfolio viewer. |
| Job to complete | Understand who is viewing the screen, why it exists, what evidence arrived, and what happens next. |
| Consequential authority | Clinical acknowledgement, clinical direction, receiving response, confirmation and scoped closure remain human-controlled through existing deterministic controllers. |
| AI role | Optional source-linked orientation or handoff drafting only. AI cannot diagnose, acknowledge, choose direction, approve, route, accept, reject, confirm or close work. |
| Main risks | Silent role impersonation, premature success evidence, misleading cross-screen persistence, controller/display divergence, unsupported synthetic evidence, inaccessible disclosure and navigation mistaken for an operational action. |
| Must remain unchanged | Approved workflow states, controllers, routes/internal aliases, fixture version semantics, exception safe returns, audit rules, role authority and AI safety controls. |

## Screen placement matrix — proposed for approval

| Screen | Represented viewer / purpose | Primary task or viewer outcome | Required visible context | Handoff wording | Walkthrough treatment | Change level |
| --- | --- | --- | --- | --- | --- | --- |
| SCR-01 Start securely | Clinic physician; establish a represented synthetic launch outcome | Start authorised simulated launch or inspect the unavailable-access route | Simulated status, no protected context before success, recovery owner | Received from: represented launch context. Next: verified episode orientation or owned access exception. | None before launch; launch itself is operationally styled but explicitly simulated. | Minor |
| SCR-02 Episode overview | Care Coordinator; understand verified scenario context | Inspect the episode and preview the next represented work stage | Synthetic identity, source evidence, state, owner, no current action | Received from: verified fixture and launch context. Next: represented result-review stage. | Clearly labelled **View next demonstration screen**; never assigns, acknowledges or advances work. | Moderate |
| SCR-03 Review result | Assigned Clinic physician; acknowledge the current source report | Review and explicitly acknowledge current version | Report ID/version, source status, assignment, state, owner, due context | Received from: diagnostic source. Next: represented human direction stage after local acknowledgement. | Prototype navigation remains separate from acknowledgement. | Moderate |
| SCR-04 Choose follow-up | Clinic physician; record a human direction | Select and evidence one approved direction | Acknowledged report, decision authority, consequences, no AI recommendation | Received from: acknowledged report. Sent to: Care Coordinator or Referral Coordinator depending on the represented branch. | Explain that later screens are fixture-represented, not configured by navigation. | Moderate |
| SCR-05 Prepare handoff | Referral Coordinator; route a complete approved package | Complete the existing routing gate and record route evidence | Human direction, report, package requirements, separate approvals, blockers | Received from: approved human direction. Sent to: receiving-response work. Routing is not delivery or acceptance. | Optional viewer navigation must not route the package. | Moderate |
| SCR-06 Record response | Receiving team decision actor; Referral Coordinator may record source evidence | Record unselected Accept or Reject with conditional evidence | Routed package/send evidence, decision actor, recording actor/source, readiness | Received from: represented routed package. Next: accepted referral scenario or new physician direction; neither is automatic. | Viewer navigation is distinct from recording `EVT-14`. | Moderate |
| SCR-07 Exceptions | Relevant accountable exception role; inspect and recover a represented failure | Select an exception, record verified recovery only when allowed, then return manually | Affected work, owner, prohibited action, safe action, evidence, return condition | Received from: an originating failure or standalone demonstration profile. Next: manual return to last verified state. | Identify standalone profiles so direct routes do not imply an originating live event. | Moderate |
| SCR-08 AI draft review | Authorised reviewer; assess optional assistance | Inspect source evidence, then record a human disposition or continue manually | Calling workflow, sources/versions, uncertainty, AI label, reviewer, manual fallback | Received from: approved AI fixture and calling context. Sent to: unchanged manual workflow. | Return navigation is manual and cannot claim a live handoff. | Moderate |
| SCR-09 Activity trace | Operational or governance reviewer; inspect representative evidence | Filter and read chronological trace without editing it | Synthetic/read-only boundary, category, time, actor/source, evidence reference | Received from: approved static audit fixture. Next: no operational action. | Label as representative history, not the live record of the current browser session. | Moderate |
| SCR-10 Confirm next step | Care Coordinator; verify evidence and record two distinct human actions | Record `Next Step Confirmed`, then separately record scoped closure when allowed | Accepted-referral scenario, evidence owner/source/status/time, blocker, safe exception route | Received from: represented accepted referral evidence. Next: scoped diagnostic-closure completion only after confirmation. | Direct route must not imply runtime transfer from SCR-06. | Moderate |

## Session, role and actor matrix — proposed for approval

The matrix deliberately separates simulated session identity from workflow responsibility. The displayed session must never be inferred from the current route.

| Screen / state | Simulated signed-in user | Viewing or operating role | Accountable workflow owner | Decision actor | Recording actor / source | Next role or destination | Proposed handoff treatment |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SCR-01 before launch | None | Visitor to synthetic demonstration | Clinic physician for successful launch context; product/platform support for represented unavailable access | None | Simulated launch controller | Care Coordinator overview or exception owner | No signed-in header before success. |
| SCR-01 successful launch | Synthetic Clinic Physician | Clinic physician | Clinic physician | None | Simulated launch controller | Care Coordinator | Show a labelled simulated transition before overview. |
| SCR-02 | Synthetic Care Coordinator | Care Coordinator | Care Coordinator | None | Read-only fixture | Assigned Clinic physician | Explicit simulated role handoff from launch. |
| SCR-03 | Synthetic Clinic Physician | Assigned Clinic physician | Clinic physician | Clinic physician | Clinic physician | Clinic physician direction work | Explicit simulated role handoff from overview. |
| SCR-04 direction | Synthetic Clinic Physician | Clinic physician | Clinic physician | Clinic physician | Clinic physician | Care Coordinator or Referral Coordinator | State branch outcome as represented, not runtime-carried. |
| SCR-04 T08 verification | Synthetic Care Coordinator | Care Coordinator | Care Coordinator for verification; Clinic physician retains direction ownership | Care Coordinator verifies operational evidence only | Care Coordinator | Scoped completion boundary | Explicit in-screen role handoff; do not imply the physician session changed silently. |
| SCR-05 | Synthetic Referral Coordinator | Referral Coordinator | Referral Coordinator | Referral Coordinator routes package | Referral Coordinator | Receiving team | Explicit simulated handoff from direction stage. |
| SCR-06 receiving decision | Synthetic Receiving Team Member | Receiving team | Receiving team before response; Clinic physician after rejection | Receiving team | Receiving team or Referral Coordinator with explicit source | Care Coordinator after acceptance; Clinic physician after rejection | Show decision and recording roles separately in the task. |
| SCR-07 | Synthetic user matched to selected exception profile | Accountable exception role or read-only viewer | Role defined by approved exception profile | Accountable exception role where resolution is permitted | Same accountable role / approved recovery evidence | Last verified work surface | Direct routes identify a standalone demonstration profile. |
| SCR-08 AI-01 / AI-02 | Synthetic authorised reviewer defined by fixture | Authorised reviewer | Human calling-workflow owner remains accountable | Authorised reviewer records disposition only | Authorised reviewer | Manual source-based return | Explicit simulated handoff from calling work; no AI authority. |
| SCR-09 | Synthetic governance or operational reviewer | Read-only reviewer | No operational owner is transferred by the trace | None | Approved static audit fixture | Prototype navigation only | Read-only session label; no workflow control. |
| SCR-10 referral scenario | Synthetic Care Coordinator | Care Coordinator | Care Coordinator | Care Coordinator | Care Coordinator plus external evidence sources represented in fixture/input | End of scoped diagnostic-closure demonstration | Explicit simulated handoff from accepted referral scenario. |

## Dependency decision register — Product Owner decisions recorded

| ID | Decision required | Recommendation | Why | Change level | Product Owner decision |
| --- | --- | --- | --- | --- |
| DEP-6B-01 | AI-01 return rule conflicts between navigation baseline and current controller | Explicitly defer role-specific AI-01 return behaviour for Sprint 6B. Retain the controller's current return to SCR-03 and word the UI as a manual return to the source-based review workflow. | Avoids changing controller/navigation behaviour while keeping the return truthful. | Moderate baseline conflict | Approved — explicit Sprint 6B deferral |
| DEP-6B-02 | SCR-10 clinic-management entry conflicts with its current referral-accepted scenario | Keep SCR-10 referral-only in Sprint 6B. Retain the clinic-management/T08 route at its approved represented boundary and defer any additional SCR-10 mode. | Avoids an unapproved scenario/state-transfer change. | Moderate baseline conflict | Approved — explicit Sprint 6B deferral |
| DEP-6B-03 | Success destinations can be explanatory or automatically navigate | Retain explanatory, user-invoked prototype navigation only; do not add automatic navigation. | Preserves local-state truthfulness and avoids data-loss/route behaviour change. | Moderate behaviour decision | Approved |
| DEP-6B-04 | Direct task routes do not pass through simulated launch | Add truthful **Demonstration view — simulated launch not established** labelling to direct task routes; do not add access gating in Sprint 6B. | Avoids false authentication claims without adding permissions or architecture. | Moderate presentation decision | Approved |

## Other Product Owner decisions recorded

| Area | Approved direction | Change level | Approval status |
| --- | --- | --- | --- |
| Task-screen navigation | Use the hybrid treatment: open navigation on SCR-01/SCR-02; user-invoked **Prototype journey** navigation on operational screens; a compact support rail only where it aids the current task. | Major | Approved — bounded Sprint 6B layout direction. |
| Evidence preview | Use an accessible modal dialog for mapped synthetic report evidence, clearly watermarked and read-only. | Moderate | Approved. |
| Session treatment | Use explicit simulated handoffs between represented role groups; never route-drive identity. | Moderate | Approved. |
| Unsaved local data | Do not introduce persistence. Add an explanatory non-blocking warning only if navigation testing shows users may lose entered local values. | Moderate if added | Approved only as conditional future refinement; no warning is authorised by this decision alone. |
| Validation viewports | 1440×900 and 1024×768 desktop; 390×844 narrow width; 200% zoom at the agreed desktop view. | Minor | Approved. |

## Acceptance gate for PLN-6B-01

PLN-6B-01 completion evidence:

- The Product Owner approved or explicitly deferred every row in the dependency decision register.
- The session, actor and placement matrices are approved for the first implementation increment.
- The hybrid navigation decision is separately recorded as the only major presentation/layout approval.
- Direct-route language, evidence-preview treatment and validation viewports are approved.
- Allowed and forbidden implementation files are confirmed in the Sprint 6B handoff contract.
- The Sprint 6B backlog and tracker state the factual result without claiming prototype implementation or user validation.

## Approval record

| Decision | Product Owner outcome | Date | Evidence / rationale |
| --- | --- | --- | --- |
| DEP-6B-01 | Approved — defer role-specific AI-01 return; retain controller return to SCR-03 | 2026-07-27 | Avoids an unapproved controller/navigation baseline change. |
| DEP-6B-02 | Approved — retain SCR-10 as referral-only; defer clinic-management mode | 2026-07-27 | Avoids an unapproved scenario/state-transfer change. |
| DEP-6B-03 | Approved — explanatory, user-invoked prototype navigation only | 2026-07-27 | Preserves local-state and route truthfulness. |
| DEP-6B-04 | Approved — label direct task routes as demonstration views without launch | 2026-07-27 | Avoids a false authentication implication without adding access control. |
| Hybrid navigation | Approved — open navigation on SCR-01/SCR-02; user-invoked prototype navigation on operational screens | 2026-07-27 | Major presentation/layout approval limited to Sprint 6B. |
| Session handoff model | Approved — explicit simulated role handoffs; no route-driven identity | 2026-07-27 | Maintains separation between session identity, role, owner and actors. |
| Evidence-preview treatment | Approved — accessible, read-only synthetic report dialog mapped to approved fixture fields | 2026-07-27 | Supports evidence realism without source-system access or invented content. |
| Validation viewports | Approved — 1440×900, 1024×768, 390×844 and 200% zoom | 2026-07-27 | Supports proportionate desktop, narrow-width and zoom regression. |

## Implementation boundary after approval

**Expected first implementation files:** `prototype/src/app/App.tsx`, `prototype/src/components/WorkflowContext.tsx`, targeted new presentation components only if approved, `prototype/src/styles/global.css`, focused test files, Sprint 6B evidence/backlog artifacts.

**Forbidden without a separately approved change:** domain controllers, synthetic fixture semantics, route aliases, authentication/authorisation, real role switching, persistence architecture, dependencies, integrations, new workflow states, evidence requirements, human authority or AI safety controls.
