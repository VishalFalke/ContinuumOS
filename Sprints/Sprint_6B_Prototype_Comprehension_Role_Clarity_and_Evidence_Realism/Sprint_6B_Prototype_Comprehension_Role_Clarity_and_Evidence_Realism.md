# Sprint 6B — Prototype Comprehension, Role Clarity and Evidence Realism

## Status

Implementation in progress. The approved planning and shared-shell enablers plus `COS-6B-01` through `COS-6B-08` are complete. Final whole-prototype regression remains.

Sprint 6B is a bounded prototype-refinement sprint positioned after the completed Sprint 6 baseline and before Sprint 7. It does not reopen the approved workflow, state model, human-control rules or AI boundaries.

The seven supplied wireframe screenshots were reviewed as structural references. The screen-level placement matrix, simulated-session model, major navigation/layout direction and dependency decisions are approved for the bounded Sprint 6B presentation work. The remaining stories still require their named implementation boundaries and focused validation before development.

## Objective

Make the existing prototype easier to understand for both:

- the authorised operational user represented on each screen; and
- a non-expert person viewing the portfolio demonstration.

Each screen should make four points evident in plain English:

1. Who is viewing this screen?
2. Why does this screen exist?
3. What information arrived here, and from whom?
4. What should happen next?

The comprehension target is that a person without healthcare, workflow or software expertise can follow the demonstration. This is a design goal, not a claim that usability testing has already proved it.

## Approved planning direction

### 1. Simulated sign-in and visible session identity

Plan a clearly simulated sign-in transition after **Start authorised simulated launch**. The transition should confirm that access was established for a synthetic user and role before the first operational screen is shown.

Every signed-in prototype screen should then show a compact session identity in the application header, normally at the top right:

- synthetic display name or user ID;
- active role;
- simulated-session label where needed; and
- a non-functional account affordance only if it helps explain the prototype.

This is presentation and orientation, not real authentication. Sprint 6B must not add or collect a real username, password, credential, permission or patient identifier. Any real authentication, authorisation or role-switching capability requires separate approval.

The signed-in user must not be inferred silently from the current route. Several screens contain different accountable owners, decision actors or recording actors, and some screens contain more than one human role. Before implementation, Sprint 6B must define a screen-and-state session matrix that distinguishes:

- the simulated signed-in user;
- the role currently viewing or operating the screen;
- the accountable workflow owner;
- the human decision actor;
- the recording actor or source; and
- the next role receiving the work.

If the demonstration changes role between screens, the transition must be explicit and labelled as a simulated role handoff. It must not imply that real authentication or authorisation occurred, and it must not change a controller decision or workflow state.

### 2. Layered explanation without displacing the primary task

Do not place one large explanation panel on every screen. Split guidance into small layers positioned near the information they explain:

- **Page header:** current role and the screen's purpose.
- **Task context:** current state, accountable owner and next operational action.
- **Evidence context:** where the information came from and who receives it next.
- **Walkthrough help:** subtle demonstration guidance near the bottom of the page.

The primary operational content and primary action must remain visually dominant. Guidance should use progressive disclosure where supporting detail is useful but not essential at first glance.

### 3. Episode overview correction

The Episode overview must explain:

- which authorised role is viewing it;
- why that role needs the overview;
- which sources contributed the displayed information;
- whether the viewer has an operational action on this screen; and
- what the viewer of the prototype can inspect next.

If the real-world user has no action because another role owns the next step, say that directly. A demonstration navigation control may allow the portfolio viewer to preview the next role's screen, but it must be visually and verbally separated from an operational workflow action. Using it must not change workflow state, assignment or approval.

### 4. Evidence and document realism

Plan a read-only preview for evidence already represented by the approved synthetic fixture, such as **View synthetic report**.

The preview may open in an accessible dialog, drawer or dedicated detail treatment after the wireframe review determines the least disruptive option. It should show:

- a prominent **Synthetic demonstration document** label or watermark;
- the approved report name and version;
- source organisation or role;
- received or recorded time when already present in the fixture;
- the evidence content needed for the existing decision; and
- a clear close or return path.

Do not invent new clinical findings, imaging, patient data or a new document type merely to make the screen look realistic. Any visual must be a rendered presentation of approved synthetic evidence rather than generated clinical content, and it must remain traceable to the existing fixture version.

### 5. Information handoff across screens

Where relevant, each screen should explain the handoff in a consistent, compact pattern:

- **Received from**
- **Handled by**
- **Sent to**
- **What happens next**

The labels may be adapted when a screen has no inbound or outbound handoff, but their meaning must remain consistent. Canonical role, state and evidence names must be retained.

## Wireframe structural-reference assessment

The first supplied follow-up-direction wireframe was compared with the matching running prototype screen. It is a design-structure reference only. It does not replace the approved Sprint 5/6 requirements, workflow, fixture, terminology, state model, authority rules or evidence controls.

### Structural patterns to carry into Sprint 6B planning

The reference provides a stronger task-screen hierarchy in these areas:

- a thin global header identifies product context, synthetic status and the signed-in user and active role;
- a compact episode strip keeps patient, encounter, current report, prior human acknowledgement and current state together;
- the authorised human task receives most of the available width;
- each decision option explains both its meaning and its immediate workflow consequence;
- role authority is stated beside the task instead of being left for the viewer to infer;
- journey, safety, source context and post-action outcomes are separated into small supporting panels; and
- a quiet footer reinforces the read-only source-evidence boundary.

These patterns align with the existing Sprint 6B direction for visible identity, layered explanations, state-owner-next-action visibility, evidence realism and understandable handoffs.

### Existing prototype strengths to preserve

Sprint 6B must preserve:

- the calmer ContinuumOS visual system, readable typography, spacing and restrained colour use;
- canonical state names and the explicit current state, accountable owner and next action;
- the existing human-decision boundary and absence of a preselected clinical direction;
- visible exception and safe-return behaviour;
- separation of source evidence, human decisions, workflow evidence and AI assistance;
- current synthetic-data and independent-portfolio labelling; and
- the tested routes, workflow transitions, audit evidence and accessibility foundations.

### Reference details not to copy directly

Do not copy:

- dense small text, compressed controls or reduced hit areas;
- decorative patient imagery or illustrations that do not improve identity, evidence or task comprehension;
- internal `SCR-*`, story or delivery identifiers in normal user-facing navigation;
- example clinical, evidence or state wording that does not match the approved baseline;
- an overloaded episode strip that cannot reflow clearly at narrow widths; or
- a long safety checklist when a shorter, prioritised set of rules and progressive disclosure is sufficient.

### Second reference — referral handoff preparation

The supplied Referral Coordinator workspace was compared with the existing **Prepare handoff** screen. It reinforces the shared task hierarchy above and adds useful handoff-specific structure.

#### Use

- Keep the approved Clinic physician direction and current acknowledged report in a compact, read-only context panel above the package task.
- Identify the Referral Coordinator as the active operational package owner.
- Group destination, approved route information, required package evidence and applicable approvals into one handoff-readiness area.
- Show each unmet requirement as a visible blocker using text and status, not colour alone.
- Explain the route outcome before the user acts:
  - package evidence and send-attempt evidence are recorded;
  - the canonical state remains `Referral Created`;
  - receiving-response work becomes the next operational step; and
  - routing does not mean delivery, receiving-team acceptance or specialist review.
- Keep the operational boundary visible near the primary action and repeat the most important distinction in a quiet footer when needed.

#### Adapt

- Replace the reference's generic **Episode health** panel with the canonical state, accountable owner, blocker and due-context information already represented by `WorkflowStatus`. Do not duplicate the same information in multiple competing panels.
- Derive readiness only from approved package requirements. Show a numeric completion summary only if the authoritative baseline defines the complete denominator and every item can be traced.
- Use the approved destination control and route semantics from the baseline. Do not introduce a route/method selector merely because it appears in the reference.
- Present operational and applicable clinical-content approvals as separate human-owned evidence with explicit status. The interface must not imply that the Referral Coordinator can provide Clinic physician approval.
- Keep optional AI assistance visually secondary. A compact source/provenance summary may link to the existing controlled AI-draft review screen, but AI review must remain optional and separate from package approval and routing.
- Show the package identifier and version according to the existing package lifecycle. The wireframe must not redefine when an identifier is created.

#### Do not use without a separately approved baseline change

- The reference values `6 / 8 complete`, `2 missing`, report `Version 1`, named example timestamps or other reference-specific evidence.
- **Review package** or **Request approval** controls if they introduce a new assignment, notification, approval-request workflow or state.
- Any automatic package approval, route selection, send, delivery confirmation or receiving acceptance.
- AI-generated clinical content, AI approval or AI-triggered routing.
- Decorative illustrations that consume task space without improving evidence, ownership or recovery.

#### Prepare handoff planning outcome

The proposed information order for this screen is:

1. active Referral Coordinator session, synthetic case identity and `Referral Created` state;
2. read-only approved human direction and current acknowledged report;
3. handoff package fields, separate accountable approvals and visible readiness blockers;
4. routing readiness, with the explicit human route action disabled until the approved gate passes;
5. optional secondary AI-assistance entry with provenance and manual-workflow boundary;
6. a concise **What happens when routed** explanation; and
7. journey position, owner, blocker, due context and next receiving-response step.

This reorders and clarifies existing concepts. It does not authorise new package fields, actions, approvals, workflow states or AI behaviour.

### Third reference — receiving-team response

The supplied Receiving response workspace was compared with the existing **Record response** screen. The existing prototype already implements the core deterministic controls represented in the reference. Sprint 6B should improve their hierarchy and explanation without replacing the tested response logic.

#### Use

- Keep the routed package and send evidence in a prominent read-only context panel before the response form.
- Show package/send reference, routed destination, sending actor or source and the boundary that sending is not acceptance.
- Keep the receiving-team decision actor separate from the person recording the response.
- When a Referral Coordinator records received evidence, require the receiving-team source to remain explicit.
- Present **Accept** and **Reject** as equally weighted, unselected human choices.
- Reveal destination and timeframe only for acceptance, and the rejection reason only for rejection.
- Show a visible pre-recording readiness check covering the selected response, decision actor, recording actor/source and conditional evidence.
- Explain before action that:
  - acceptance records the receiving-team response but does not confirm the next step or close the episode;
  - rejection preserves the original package and send history and returns direction ownership to the Clinic physician; and
  - neither route is selected, inferred or completed by AI.
- After recording, show the resulting canonical state, actor attribution, `EVT-14` evidence and next accountable action.

#### Adapt

- Use a calm **Final check before recording** or **Response readiness** treatment instead of applying alarming styling merely because the action is consequential. The content, confirmation and disabled-state behaviour provide the safeguard.
- Combine the reference's context, package summary and notes where they repeat the same evidence. The authorised decision should remain the primary focus.
- Use the existing `WorkflowStatus` owner and blocker logic. Before submission, the receiving team is the response owner and incomplete required evidence is a blocker. After rejection, the Clinic physician becomes the new direction owner.
- Keep the journey and next-step explanation in the shared support rail without duplicating the same state and owner in an additional **Episode health** panel.
- Retain the existing explicit confirmation control unless an equally clear, accessible readiness pattern is approved.

#### Do not use

- Reference-specific package IDs, route names, timestamps, report versions, practitioner IDs or audit values.
- An `EVT-14` **response recorded** message before a response has actually been recorded.
- **Blocker: None** while required actor, response or conditional evidence is incomplete.
- A preselected Accept or Reject response.
- Any capability for the recording actor to substitute for the receiving-team decision actor.
- Acceptance that automatically confirms the next step, closes the episode or implies specialist review.
- Rejection that automatically creates or routes a replacement referral.
- A decorative illustration that competes with the decision or evidence.

#### Record response planning outcome

The proposed information order for this screen is:

1. active receiving-team session, synthetic case identity and current `Referral Created` state;
2. read-only routed package and send-attempt evidence;
3. receiving-team decision actor and separate recording actor/source;
4. unselected Accept/Reject choices with conditional evidence;
5. response readiness and explicit human confirmation;
6. the primary **Record receiving response** action;
7. truthful post-action state, `EVT-14`, actor attribution and next owner; and
8. journey context and the boundary that acceptance is not next-step confirmation.

This is a presentation and comprehension refinement. The existing acceptance, rejection, attribution, evidence and state-transition rules remain authoritative.

### Fourth reference — exception queue and detail

The supplied exception workspace was compared with the existing **Exceptions** screen. The reference provides a strong queue-to-detail-to-recovery structure, while the current prototype already provides the approved exception profiles, accountable resolution roles, deterministic evidence gate and safe return.

#### Use

- State the screen purpose directly: represented workflow failures remain visible, owned and recoverable without silently attaching, advancing or closing the episode.
- Make the queue scannable by showing, for each represented condition:
  - exception condition;
  - affected work;
  - accountable owner; and
  - current exception status when that status is defined by the approved baseline.
- Keep the selected condition visually and semantically connected to its detail.
- In the detail, show:
  - affected work;
  - reason or represented evidence gap;
  - accountable owner;
  - safe action;
  - prohibited action;
  - safe-return condition; and
  - plain-language return destination.
- Show the evidence required for recovery before the resolution action.
- Keep a readiness status immediately before **Record verified resolution** and disable the action until the accountable role, verification outcome and required evidence pass the existing deterministic gate.
- After successful resolution, show the appended recovery event, actor, resulting last-verified state and explicit return control.
- Keep the journey visibly paused and state that no care decision, workflow advancement or closure is implied.

#### Adapt

- A desktop table may improve comparison across exceptions, but it must become labelled stacked rows or cards at narrow widths. Selecting a row must be keyboard operable and expose the selected state without relying on colour.
- Use the existing approved exception set. The four conditions in the reference are examples, not an exhaustive or replacement queue.
- Treat a recovery-evidence checklist as a summary of approved evidence requirements, not as permission to create six new mandatory fields. Conditional items such as correction or supersession evidence should appear only for applicable exception types.
- Keep canonical workflow state and exception condition distinct. Do not rename `Exception open` to a condition label or introduce new queue statuses without baseline approval.
- Replace internal return references such as `SCR-02` with the approved plain-language destination while retaining the internal ID in traceability only.
- Show the active signed-in role and clearly state whether that role may resolve the selected exception. Viewing a queue must not imply resolution authority.
- Use the footer-level support owner and success outcome only when they are derived from the selected exception profile rather than copied as global constants.

#### Do not use

- Reference-specific `EXC-*` identifiers, report versions, affected events, owners or status labels unless mapped to the approved exception fixtures.
- A generic **Record verified resolution** action before the user has reviewed or supplied the required recovery evidence.
- A checklist that appears complete or authoritative when its items are not connected to deterministic validation.
- Automatic return, workflow advancement or recreation of the original clinical, referral, financial or closure action after resolution.
- A selected row, detail heading, state badge and journey state that refer to different exceptions.
- Product/platform support being shown as the accountable resolver when another approved operational role owns the condition.

#### Exceptions planning outcome

The proposed information order for this screen is:

1. active session identity, synthetic case and purpose of the exception workspace;
2. current exception state, accountable owner and safe next action;
3. scannable exception queue with a clear selected row;
4. selected exception detail with safe, prohibited and return conditions;
5. applicable recovery evidence and verification outcome;
6. readiness status followed by **Record verified resolution**;
7. truthful appended audit evidence and return control after success; and
8. paused-journey context with the last verified state and safe return destination.

Changing the queue presentation is a moderate UX refinement. Adding exception types, statuses, evidence rules, authority or automatic recovery behaviour remains outside this planning approval.

### Fifth reference — AI draft review

The supplied AI draft-review workspace was compared with the existing **AI draft review** screen. The reference's source-first review order is useful, while the current prototype already contains the approved AI-01 and AI-02 capabilities, provenance, uncertainty, human dispositions, stale/unavailable states, manual fallback and no-state-change control.

#### Use

- State the purpose plainly: an authorised human reviews optional assistive content using source evidence, uncertainty and a manual fallback.
- Organise the review in this order:
  1. source evidence and calling workflow;
  2. clearly labelled AI-generated draft;
  3. authorised human disposition and fallback.
- For each source, show the approved reference, version and evidence status.
- Identify the calling workflow in plain language and provide a clear return destination.
- Keep the AI capability, generated time, provenance, uncertainty or limitations and current draft status together.
- State beside the draft that it cannot diagnose, acknowledge, select a direction, approve, route, accept, reject, confirm or close workflow work.
- Keep the authorised reviewer role and human disposition explicit.
- Preserve correction, rejection, discard and the capability-specific approved acceptance disposition.
- Keep a complete manual source-based route available when AI is unavailable, stale, unsupported or rejected.
- After a valid review, show the human reviewer, disposition, time, source versions, applicable reason or correction and appended `EVT-20` evidence.

#### Adapt

- Use the source table only when it improves version comparison. It must reflow to labelled source cards or rows at narrow widths.
- Display staleness checks as system-evaluated, read-only comparisons derived from the approved fixture and controller. Do not ask the reviewer to manually tick technical freshness checks unless that responsibility is explicitly approved.
- Use either a well-labelled disposition selector or equally weighted controls. Acceptance must not receive disproportionate size, colour or placement that encourages automation bias.
- Keep AI-01 and AI-02 visibly distinct:
  - AI-01 supports source-linked orientation and may be reviewed by its approved roles;
  - AI-02 supports a post-approval handoff draft and remains dependent on the approved human direction and its approved reviewer.
- Preserve the current correction-note requirement when the reviewer corrects a draft.
- Make the calling workflow and manual return visible without exposing internal `SCR-*` identifiers to normal users.
- Reduce vertical overhead so source, uncertainty, manual fallback and human-review status are understandable in the initial agreed desktop viewport, while retaining readable text and touch targets.

#### Do not use

- Reference-specific source IDs, task references, report versions, timestamps, reviewers or provenance values.
- A new **Supersede** disposition unless separately approved and mapped to deterministic behaviour.
- A large or visually dominant **Accept** action that makes acceptance appear preferred over correction, rejection or discard.
- An `EVT-20` audit-success message before the human disposition has been validly recorded.
- User-editable staleness checkboxes that can falsely mark a stale or mismatched draft as current.
- AI review that changes canonical workflow state, replaces source review or blocks the manual workflow.
- A general statement that all source references are verified unless each displayed source and version actually passes the approved check.

#### AI draft review planning outcome

The proposed information order for this screen is:

1. active reviewer session, synthetic case and optional-assistance purpose;
2. current human workflow state, calling workflow and manual return;
3. source references, versions and evidence status;
4. AI capability, clearly labelled draft, provenance and uncertainty;
5. represented generated, unavailable or stale status;
6. authorised reviewer and human disposition, including correction evidence when applicable;
7. readiness followed by **Record human disposition**;
8. truthful `EVT-20` evidence only after success; and
9. return to the unchanged calling workflow.

This is a presentation and comprehension refinement. AI remains optional, non-authoritative, source-linked, human-reviewed, auditable and unable to change canonical workflow state.

### Sixth reference — audit and trace

The supplied audit-and-trace workspace was compared with the existing **Activity trace** screen. The reference makes the evidence sequence easier to scan, while the current prototype already provides the approved append-oriented entries, category filtering, chronological table and read-only boundary.

#### Use

- Make the audit table the primary visual focus rather than placing it below large orientation panels.
- Keep the screen purpose explicit: reviewing evidence does not edit history or change workflow state.
- Show, for every approved audit row:
  - time with timezone context;
  - event and outcome;
  - actor or source;
  - source/version reference;
  - event identifier when present; and
  - evidence category in text.
- Preserve chronological ordering so the viewer can follow the episode from source evidence through human decisions, workflow events, exceptions, recoveries and AI dispositions.
- Provide category filtering using only categories present in the approved trace.
- Keep colour secondary to text labels and semantic structure.
- Show the active filter and ensure the displayed rows always match it.
- Keep the current canonical state and next expected workflow action available as supporting orientation when both can be derived from approved evidence.
- Retain a persistent append-only, read-only and no-edit/delete boundary.

#### Adapt

- Filter chips may improve recognition for a small stable category set; a labelled select may remain better at narrow widths. Either pattern must expose selected state, result count or empty state, and keyboard operation.
- Use expandable rows only when approved additional detail exists. Each expander needs a specific accessible name such as **View details for Direction recorded**.
- **Open linked evidence** may open only an approved synthetic source preview already mapped in Sprint 6B. It must not imply access to a live source system.
- **View correction chain** should appear only when append-linked correction or supersession evidence exists in the approved trace.
- Keep the signed-in reviewer visible through the shared session identity treatment.
- Use one supporting journey/state treatment. Do not duplicate canonical state, journey phases and next action across multiple competing panels.
- Compact the header and context so meaningful audit rows are visible in the initial agreed desktop viewport without reducing type size or interactive targets.

#### Do not use

- Reference-specific event IDs, sources, practitioners, routes, timestamps, categories or current state.
- A **Communication** category unless approved communication evidence exists in the trace.
- A selected filter whose visible results include categories outside that filter.
- Expanders, linked-evidence controls or correction chains backed only by decorative or invented content.
- Colour-only category meaning.
- Edit, delete, correction, workflow or destructive controls on the trace screen.
- A correction that replaces or hides prior evidence instead of remaining append-linked.

#### Activity trace planning outcome

The proposed information order for this screen is:

1. active reviewer session, synthetic case and read-only audit purpose;
2. compact audit state, accountable review audience and viewer task;
3. category filters with truthful selected state and results;
4. chronological attributable evidence table;
5. optional read-only row detail, linked evidence or correction chain where approved evidence exists;
6. append-only, timezone and synthetic-case boundary; and
7. compact journey, current canonical state and next workflow action as secondary orientation.

This is a presentation and evidence-exploration refinement. It does not authorise new audit events, categories, correction behaviour, source access or workflow actions.

### Seventh reference — next-step confirmation and scoped closure

The supplied next-step confirmation workspace was compared with the existing **Confirm next step** screen. The reference makes evidence readiness easy to scan, while the current prototype already implements the approved human-owned evidence gate, separate `Next Step Confirmed` and scoped `Episode Completed` actions, exception route and deterministic no-automatic-confirmation/closure controls.

#### Use

- Keep the approved human direction, Clinic physician attribution and current report together as read-only context.
- Provide direct access to the approved synthetic report preview planned in Sprint 6B.
- Present confirmation readiness as an evidence-by-evidence view showing, where applicable:
  - evidence requirement;
  - current detail;
  - text status;
  - source/reference;
  - accountable owner; and
  - recorded time after evidence exists.
- Derive **Complete**, **Incomplete** and **Blocked** from approved evidence and deterministic validation. Use **Not applicable** only when an approved rule permits it.
- Keep status meaning independent of colour by pairing text with symbols or accessible labels.
- Keep the Care Coordinator's verification role distinct from the Clinic physician's direction, receiving-team response, authorised communication, delivery and patient/caregiver confirmation sources.
- Explain the current blocker and provide the existing safe exception route when required evidence is missing.
- Keep `Next Step Confirmed` and scoped `Episode Completed` as two separate human actions with separate readiness and audit evidence.
- State that next-step confirmation does not mean all care is complete and that scoped closure applies only to the diagnostic-closure workflow.

#### Adapt

- Treat the evidence checklist as a readiness summary and navigation aid, not automatically as a replacement for required evidence-entry controls. The placement matrix must distinguish:
  - prior read-only evidence;
  - system-derived checks;
  - Care Coordinator verification inputs; and
  - external confirmation evidence.
- Preserve the existing separation between communication approval, authorised sender, channel, delivery evidence and explicit patient/caregiver confirmation. Do not collapse them into one generic row.
- Use the current action as the dominant task. Before confirmation, scoped closure may appear only as a lower-emphasis locked future step or a concise **Then** explanation.
- After `Next Step Confirmed`, update the state and journey before enabling or revealing the separate scoped-closure action.
- Keep the active session identity, case ID and current canonical state in the shared shell without repeating them in a crowded footer.
- Replace user-facing `T*`, `EVT-*` and `SCR-*` labels with plain language while retaining them in evidence detail and internal traceability.
- Keep evidence rows readable at narrow widths through labelled stacked items or an accessible horizontally scrollable table.

#### Do not use

- Reference-specific patient, practitioner, package, evidence, case, timestamp or report-version values.
- A journey indicator that says **Next step confirmed** before the confirmation action succeeds.
- Both **Next step confirmed** and **Confirmed next step** as separate or ambiguous journey stages.
- Equal primary emphasis for confirmation and closure while closure remains unavailable.
- A pre-action recorded time, evidence link or complete status without actual approved evidence.
- **Not applicable** as a way to bypass a required evidence rule.
- Patient or caregiver shown as the accountable operational owner when they are the source of confirmation evidence.
- Automatic confirmation, closure or evidence completion.

#### Confirm next step planning outcome

The proposed information order for this screen is:

1. active Care Coordinator session, synthetic case and current `Referral Accepted` state;
2. read-only human direction, receiving response and current report context;
3. evidence-readiness summary with source, owner, status and recorded time;
4. applicable missing-evidence entry or verification controls;
5. action guidance and safe exception route;
6. readiness followed by the single current **Record Next Step Confirmed** action;
7. truthful `EVT-16`, actor, time and `Next Step Confirmed` state only after success;
8. separate scoped-closure evidence and **Record scoped Episode Completed** action only after confirmation;
9. truthful `EVT-22` and scoped `Episode Completed` result only after closure succeeds; and
10. journey context that always matches the current canonical state.

This is a presentation and evidence-comprehension refinement. Existing evidence requirements, role authority, state transitions, event rules and scoped-closure boundary remain authoritative.

## Supplied wireframe reference-set synthesis

The structural review of the seven wireframes supplied for Sprint 6B is complete. They cover human direction, handoff preparation, receiving response, exceptions, AI draft review, audit/trace and next-step confirmation.

Across the set, the consistent design direction is:

- a compact shared header with visible synthetic session identity and active role;
- decision-relevant case, source and current-state context near the top;
- no more than two persistent task columns;
- the authorised task or evidence as the main visual focus;
- a compact supporting rail for journey, safety, current work and next outcome;
- source, AI, human decision, workflow and audit evidence kept visibly distinct;
- readiness and blockers shown before consequential human actions;
- post-action evidence shown only after success;
- operational actions separated from prototype walkthrough navigation; and
- plain-language user labels with internal identifiers retained only in traceability details.

The references do not approve a new design system or product model. The next planning deliverable is the screen-by-screen placement matrix for all existing prototype screens, followed by explicit approval of the major navigation/layout direction and the regression-safe implementation sequence.

### Controlled wireframe asset location

The seven supplied wireframe references are preserved in the controlled Sprint 6B folder:

`Sprints/Sprint_6B_Prototype_Comprehension_Role_Clarity_and_Evidence_Realism/reference_wireframes/`

The manifest at `reference_wireframes/README.md` records the filename, screen focus and SHA-256 checksum for each image. During implementation, use these assets only for structure and presentation style after checking the approved baseline, the dependency matrix and applicable design/UX controls. They are not evidence for workflow, authority, state, audit or AI behaviour.

## Revised preliminary navigation and sidebar view

The sidebar decision remains open until the complete wireframe set is supplied and compared with the running prototype. The first comparison shows that keeping the full left navigation, main task and right journey rail visible together creates three competing columns and reduces space for the authorised task.

The revised working hypothesis is:

- allow open journey navigation on the Start and Episode overview screens, where orientation is part of the screen purpose;
- on operational task screens, place portfolio navigation behind a clearly labelled **Prototype journey** control so it does not compete with the task;
- retain a compact in-screen journey, guidance and outcome rail where it supports the current task;
- make the navigation an accessible drawer or equivalent treatment at narrow widths;
- do not auto-hide it;
- keep current-screen and current-role orientation evident when collapsed; and
- ensure keyboard access, visible focus and a clear reopen control.

This is a major navigation and layout direction and is not approved for implementation. The remaining wireframe review must determine whether this hybrid treatment works consistently across task, exception, AI-review, audit and closure screens.

## Proposed shared task-screen hierarchy

The working structural model for applicable operational screens is:

1. **Thin global header:** product, care setting, synthetic-prototype label and active session identity.
2. **Compact episode strip:** patient and encounter identity, current source evidence, previous relevant human action and current state.
3. **Primary workspace:** one clearly named authorised task and the evidence required to complete it.
4. **Supporting rail:** journey position, short safety guidance, relevant context and outcome-specific next steps.
5. **Quiet boundary footer:** source-read-only, synthetic-data or scope statement where applicable.
6. **Separate prototype navigation:** a viewer-oriented control that cannot be mistaken for or trigger an operational workflow action.

The strip and rail are conditional patterns, not mandatory containers on every screen. They must be simplified or omitted when they do not help the current role complete or understand the task.

## Planned workstreams

### Workstream 1 — Wireframe and baseline comparison

- Review every supplied wireframe against the current prototype.
- Identify useful structural patterns without assuming the wireframes override approved requirements.
- Record which structural elements should be adopted, adapted, omitted or retained from the current prototype.
- Produce a screen-by-screen placement matrix for role, purpose, task context, evidence context, walkthrough help and navigation.
- Maintain the approved screen-to-screen dependency matrix so every relationship is classified as runtime-carried, controller-local, fixture-represented, support-only or unresolved.
- Record any conflict with the Sprint 5 screen specifications or Sprint 6 baseline before implementation.

### Workstream 2 — Shared session and role orientation

- Specify the simulated sign-in confirmation.
- Specify the persistent signed-in identity treatment.
- Map the correct active role to every existing screen.
- Keep role visibility separate from role switching or access control.

### Workstream 3 — Shared explanation and handoff components

- Define reusable, compact patterns for purpose, ownership, next action and handoff.
- Evaluate a responsive episode-context strip and task-support rail against the content needs of each screen.
- Apply consistent icon, label, punctuation and content rules.
- Prevent explanation content from overtaking the primary task.

### Workstream 4 — Episode overview guidance

- Clarify the real-world user, purpose and information sources.
- Add a clear statement of the real-world next step.
- Define separate, non-state-changing walkthrough navigation for the portfolio viewer.

### Workstream 5 — Prepare handoff clarity

- Map every displayed package requirement and approval to the approved baseline before showing a readiness count.
- Separate source direction, operational package preparation, applicable clinical-content approval and route evidence.
- Define a visible blocker and readiness treatment that supports both normal and failed-send paths.
- Explain the deterministic route outcome before action and the recorded evidence after action.
- Evaluate a secondary link to the existing optional AI-draft review without embedding AI authority or blocking the manual route.
- Do not add approval-request, notification, routing or package-lifecycle behaviour from the reference.

### Workstream 6 — Record response clarity

- Place routed package/send evidence before the response decision without duplicating it across panels.
- Preserve separate receiving-team decision actor and recording actor/source attribution.
- Keep Accept and Reject unselected and reveal only the evidence required for the chosen response.
- Define an accessible readiness summary and explicit confirmation before recording.
- Ensure no audit event or success state is displayed before the recording action succeeds.
- Show the resulting canonical state, `EVT-14`, actor, next owner and recovery direction after recording.
- Preserve the existing rule that acceptance is not next-step confirmation and rejection does not create a replacement referral.

### Workstream 7 — Exception queue and recovery clarity

- Compare a desktop queue table with the existing selectable-card treatment and define an accessible narrow-width fallback.
- Keep the selected queue item, condition badge, detail heading, owner and journey state synchronised.
- Map every queue column, status and recovery-evidence item to the approved exception profiles and controller.
- Place applicable recovery evidence and readiness before the resolution action.
- Preserve accountable-role validation, failed-resolution handling, append-only recovery evidence and manual safe return.
- Ensure success never recreates or advances the original workflow action automatically.

### Workstream 8 — AI draft review clarity

- Reorder the screen into source/calling workflow, AI draft, and human disposition/fallback.
- Map every displayed source, version, reviewer role, disposition and failure state to the approved AI-01 or AI-02 fixture and controller.
- Keep provenance, uncertainty, status and no-state-change boundaries visible before disposition.
- Evaluate disposition controls for equal visual weight and resistance to automation bias.
- Present staleness as deterministic read-only evidence rather than reviewer-created truth.
- Keep the manual workflow continuously available and show `EVT-20` only after successful human recording.
- Verify that the important safety and recovery context is understandable in the initial agreed desktop viewport and remains accessible at narrow widths.

### Workstream 9 — Activity trace clarity

- Make the chronological audit table visible earlier and retain compact read-only orientation.
- Map every column, filter, row, event ID, category and source/version reference to the approved audit trace.
- Ensure active filters and displayed rows cannot contradict one another.
- Evaluate chips versus a select across desktop, narrow-width and keyboard use.
- Define accessible optional row expansion, linked-evidence preview and correction-chain behaviour only where approved evidence supports them.
- Preserve chronological ordering, append-only history and the absence of edit, delete or workflow controls.

### Workstream 10 — Next-step confirmation clarity

- Map every readiness row to approved prior evidence, system-derived checks, Care Coordinator verification inputs or external confirmation evidence.
- Preserve separate communication approval, sender, channel, delivery and explicit confirmation requirements.
- Make the current confirmation action dominant and closure a distinct locked future step until `Next Step Confirmed`.
- Keep evidence status, blocker, action availability, canonical state, event evidence and journey position synchronised.
- Show synthetic report/evidence links only where approved previews exist.
- Preserve the safe exception route, separate `EVT-16`/`EVT-22` evidence and no-automatic-confirmation/closure controls.

### Workstream 11 — Synthetic evidence preview

- Map the preview to the existing approved synthetic evidence fixture.
- Select the least disruptive interaction after wireframe review.
- Provide accessible open, close, focus and descriptive-label behaviour.
- Mark the asset clearly as synthetic.

### Workstream 12 — Navigation and responsive sidebar

- Compare persistent, collapsible and context-sensitive treatments.
- Evaluate the hybrid hypothesis: open journey navigation on orientation screens and user-invoked prototype navigation on operational task screens.
- Prevent the left navigation, main task and right support rail from becoming three competing desktop columns.
- Confirm behaviour at desktop and narrow widths.
- Preserve current routes, back behaviour and workflow actions.

### Workstream 13 — Regression and comprehension validation

- Run all existing applicable checks unchanged.
- Add focused tests only for approved new presentation or navigation behaviour.
- Verify role, purpose, state, owner, next action and handoff content screen by screen.
- Verify that walkthrough controls do not mutate operational state.
- Verify keyboard navigation, focus order, zoom and responsive behaviour.

### Mandatory whole-prototype regression gate

Sprint 6B is not complete when an individual redesigned screen appears correct. After the final approved increment, rerun the complete synthetic prototype from a clean browser session and record factual results for every group below.

| Regression group | Required whole-prototype coverage |
| --- | --- |
| Build and deterministic controls | Run `npm run lint`, the full Node test suite and `npm run build`. Existing tests must remain unchanged unless an approved presentation contract requires a focused addition. No controller test may be weakened or removed. |
| Routes and launch boundary | Open all ten readable hash routes, retain internal `SCR-*` aliases, use browser back/forward and verify invalid-route safe return. Check authorised launch, unavailable launch, protected Episode overview and truthful direct-route treatment. |
| End-to-end demonstrated care paths | Run the normal referral path: launch, overview, result acknowledgement, follow-up direction, handoff routing, receiving acceptance, next-step confirmation and separate scoped closure. Run clinic-management/T08 only to the approved represented boundary. Do not claim cross-screen persistence where the matrix identifies fixture representation. |
| Negative and recovery paths | Check missing/stale report evidence, unavailable clinician/access, incomplete handoff, send failure, missing response evidence, rejection, safety-blocking confirmation evidence, unresolved exception, failed resolution and duplicate-action protection. Confirm no failure shows a success state or unintended progression. |
| Dependency-matrix truthfulness | For every `SCR-01` through `SCR-10`, verify its displayed inbound evidence, owner, next action, destination language and event/status match its matrix classification. Recheck refresh, back and direct-route behaviour. Verify no unresolved `DEP-6B-*` item is visually presented as resolved. |
| Session, role and authority | Verify session identity is distinct from viewer role, accountable owner, decision actor and recording actor. Check every consequential human action still uses the existing authorised controller rule and walkthrough navigation cannot mutate state. |
| AI, audit and evidence | Verify AI-01/AI-02 source, uncertainty, human disposition and manual fallback; audit categories, ordering and read-only boundary; synthetic evidence-preview source/version/watermark and no unsupported content. |
| Accessibility and interaction | Keyboard-test every route, navigation control, form, disabled/enabled action, exception selection, AI disposition, audit filter and any drawer/dialog. Verify visible focus, names, labels, status text, error recovery, Escape/focus return where applicable, colour-independent status, reduced motion and 200% zoom. |
| Responsive and visual regression | Check all ten screens at the agreed desktop and narrow viewports with long synthetic labels, status content and tables. Confirm no clipped primary action, overlapping target, three-column competition, unsupported sticky panel, lost table relationship or unrelated CSS regression. Compare relevant screens against the preserved structural wireframes without copying unsupported behaviours. |
| Evidence and handoff record | Record commands, pass/fail results, browser scenarios, screenshots or other agreed evidence, observed limitations, open defects and any approved deviations in Sprint 6B and the existing Sprint 6 evidence locations where applicable. |

If any Critical or High control, authority, workflow, route, accessibility or dependency-matrix regression fails, stop Sprint 6B closure, record the factual defect through the existing Sprint 6 defect process and retest the full affected path after the smallest approved fix.

## Regression, flow-integrity and implementation-risk review

### Current technical baseline

The Sprint 6 implementation has a strong deterministic control layer, but the frontend is a synthetic scenario demonstration rather than one persistent backend-driven episode:

- routing is controlled by the approved readable hash-route contract while retaining internal `SCR-*` aliases;
- each operational screen calls an existing deterministic controller for its consequential action;
- most form and post-action state is local to the mounted screen;
- screens use approved fixture assumptions to demonstrate different workflow stages;
- changing route unmounts the current screen and can reset unsubmitted local values;
- the shared journey and status components are presentation components rather than a canonical workflow-state store; and
- the current CSS contains shared structural selectors, including DOM-shape-dependent `:has(...)` rules, that can change several screens when markup is reorganised.

Sprint 6B must improve comprehension without presenting these scenario screens as a live, persisted end-to-end case engine. Cross-screen wording must say **represented evidence**, **demonstration sequence** or similarly truthful language where an action on one screen does not technically create the next screen's fixture.

### Protected implementation invariants

These are hard gates for Sprint 6B implementation:

1. **Controller authority:** existing domain controllers remain the only authority for allowed actions, blockers, outcomes, state transitions and audit events. Presentation components must not recreate or weaken controller rules.
2. **Single derivation path:** buttons, readiness summaries, blocker text, journey state and post-action evidence must be derived from the same controlled values and controller result. A new visual checklist must never become a second decision engine.
3. **No premature success:** state badges, completed journey stages, audit events and success messages appear only after the applicable controller returns an allowed result and the user performs the explicit action.
4. **Route stability:** all ten readable hash routes, internal `SCR-*` aliases, browser back behaviour and invalid-route safe return remain intact. No Sprint 6B visual change may rename or repurpose the route contract.
5. **Session truthfulness:** signed-in identity, active role, accountable owner, decision actor and recording actor remain separate concepts. Route selection alone cannot silently change the signed-in user.
6. **Walkthrough isolation:** prototype navigation, **View next screen**, evidence preview and help controls cannot call a domain controller, append audit evidence, change a canonical state or imply an operational action.
7. **Scenario-boundary truthfulness:** the UI must not claim cross-screen persistence that does not exist. Unsaved local values and local success state must not be described as durable or shared across routes.
8. **Fixture and version integrity:** every visible patient, encounter, report, observation, actor, timestamp and evidence reference must trace to the approved synthetic fixture or an already approved controller constant. The current report remains `SYN-DR-6001` version `2` where the baseline requires it.
9. **AI boundary:** AI output remains optional, visibly generated, source-linked and dispositioned by an authorised human. It never becomes the source of state, readiness, role or next-action truth.
10. **Surgical frontend change:** do not combine the visual restructuring with a domain refactor, global state migration, new design system, dependency addition or component-architecture rewrite. Shared presentation components may be introduced only where their inputs and screen-specific meaning are explicit.
11. **CSS containment:** before changing shared markup, identify affected structural selectors. New layout rules must be component- or screen-scoped and checked across all ten screens so a change to one DOM shape does not alter unrelated layouts.
12. **Accessible disclosure:** any drawer, dialog, preview, expandable row or collapsed navigation must have native semantics or an approved accessible primitive, visible focus, focus entry/containment/return where applicable, Escape handling, a 40–44px target, colour-independent status and reduced-motion behaviour.

### Priority findings and required response

| Priority | Finding | Why it can break or misrepresent the prototype | Required Sprint 6B control |
| --- | --- | --- | --- |
| Critical | A signed-in role derived from the route would silently impersonate different users | The prototype spans Clinic physician, Care Coordinator, Referral Coordinator, receiving-team and exception roles; some screens contain multiple roles | Approve a session/role/actor matrix and explicit simulated handoff treatment before implementing the header |
| High | New readiness cards or evidence tables can diverge from controller gates | A visually complete checklist could enable or imply an action that the deterministic controller still blocks, or the reverse | Map each displayed row to its controlled value and controller rule; test summary, button and result together |
| High | The visual journey can imply persisted end-to-end state that the frontend does not hold | Screen-local state resets on unmount and later screens use fixture assumptions rather than the prior screen's output | Keep scenario boundaries truthful; record local-state reset as a known limitation; do not add global state in Sprint 6B |
| High | Direct hash routes do not all pass through the simulated launch gate | A persistent **signed in** header on a direct task route could make a presentation route look authenticated | Decide and document direct-route behaviour; use a clearly labelled demonstration-view state unless a separately approved access-gating change is made |
| High | DOM restructuring can trigger broad CSS `:has(...)` layout rules | A small markup change can move panels or actions on unrelated screens at desktop breakpoints | Create a selector-impact checklist and verify all ten screens at each agreed viewport after every shared-layout increment |
| High | Journey, owner and audit summaries can become temporally inconsistent | Static support content may show completion, a new owner or `EVT-*` evidence before the action succeeds | Derive these elements from the same pre/post-action state and add before/after assertions |
| High | Prototype navigation can discard local form work | A drawer or next-screen control unmounts the active screen; entered evidence can be lost without warning | Preserve current behaviour factually, avoid claiming autosave, and decide whether a non-persistent demo warning is needed without adding a state architecture |
| High | Evidence realism can introduce unsupported or stale clinical content | A decorative report image can conflict with fixture version `2` or invent clinical meaning | Render only approved fixture evidence, watermark it, show version/source and validate every displayed field |
| Medium | Header, episode strip, status row and rail can repeat the same information | Duplication increases cognitive load and creates multiple places that can disagree | The placement matrix must assign one primary location for each role, state, owner, blocker and next-action field |
| Medium | A simultaneous shared-shell refactor and visual redesign would enlarge the regression surface | `App.tsx` is currently monolithic and screen state is local | Implement presentation increments one screen family at a time; defer architecture cleanup |
| Medium | New drawers, tables and previews exceed the current automated UI coverage | Current tests strongly cover deterministic controllers and routes but not rendered focus, keyboard or responsive behaviour | Use focused dependency-free contract tests where possible plus recorded browser walkthroughs; obtain approval before any UI-test dependency |
| Medium | Two rails plus task content can fail at zoom or narrow widths | Sticky/supporting panels and wide evidence tables can crowd or obscure the primary action | Approve viewport/reflow rules and validate keyboard order, 200% zoom, long labels and narrow-width table meaning |

### Regression-safe implementation sequence for later approval

No step below authorises implementation.

1. Freeze and record the current route/controller/fixture baseline and representative screenshots.
2. Approve the screen placement matrix, session-role matrix, direct-route treatment and major hybrid-navigation decision.
3. Add or refine only static screen metadata and shared presentation contracts; do not move controller calls or local action state.
4. Implement the shared header/session treatment with no role switching or access-control claim.
5. Implement orientation screens first, then one operational screen family at a time: review/direction; handoff/response; exceptions; AI; audit; confirmation/closure.
6. Add the synthetic evidence preview only after its fixture-field mapping and accessible interaction are approved.
7. After every increment, run TypeScript lint, all Node tests, the production build, route/deep-link checks and focused before/after browser scenarios.
8. Perform the complete cross-screen accessibility, responsive, comprehension and human-AI boundary review before Sprint 6B exit.

## Screen-to-screen dependency matrix

### Dependency classification

Sprint 6B must label each relationship as one of:

- **Runtime-carried:** the current frontend actually retains or passes the value between screens during the browser session.
- **Controller-local:** the controller validates an action, but its result remains in the current mounted screen.
- **Fixture-represented:** the destination screen starts from an approved synthetic scenario assumption rather than the prior screen's live output.
- **Support-only:** the destination is read-only, optional or a recovery view and does not advance canonical workflow.
- **Unresolved conflict:** the approved navigation baseline and current implementation do not describe the same dependency.

These labels are implementation truth, not user-facing terminology. User-facing content should use plain language while avoiding claims of persistence or automation that the prototype does not provide.

### Current baseline matrix

| Screen | Required inbound condition or evidence | Authoritative gate or action | Successful result | Approved next surface | What the frontend actually carries | Failure or safe return | Refresh, back and direct-route edge case | Sprint 6B dependency rule |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `SCR-01` Start securely | No protected context | `resolveSimulatedLaunch` validates the represented launch outcome and fixture linkage | Authorised simulated context, or an owned access exception | `SCR-02`; access failure to `SCR-07` | **Runtime-carried:** App-level `authorised` and exception detail exist only in memory; the hash changes | Failed/unavailable launch opens `SCR-07` without protected context | Refresh clears `authorised` and exception memory; direct `SCR-02` then shows its access gate | Session confirmation may describe only the represented launch outcome; it cannot claim durable authentication |
| `SCR-02` Episode overview | App-level simulated authorisation and approved episode fixture | No consequential operational action; read-only orientation only | Current verified scenario remains unchanged | Assigned result work is represented on `SCR-03`; missing evidence to `SCR-07` | No review assignment or workflow state is passed forward from this screen | Access recovery or missing evidence uses `SCR-07` | Direct route without launch shows the access gate; leaving the screen carries no episode state | Clearly state that this is orientation and that opening the next demonstration screen does not assign, acknowledge or advance work |
| `SCR-03` Review result | Approved assignment and current report version `2` from the fixture | `evaluateAcknowledgement` | Local `Result Acknowledged`, then `Follow-up Decision Required`; `EVT-10` shown after success | `SCR-04` | **Controller-local:** acknowledgement is held in `acknowledgedAt`; no result or event is passed to `SCR-04` | Incomplete, unavailable or stale evidence uses `SCR-07` | Refresh/back remount resets the acknowledgement display; direct `SCR-04` uses its own acknowledged-report assumption | Describe `SCR-04` as the next represented workflow stage, not as a persisted result of the current click |
| `SCR-04` Choose follow-up | Preconfigured acknowledged report `SYN-DR-6001` version `2` | `evaluateFollowUpDirection`; clinic-management only also uses `evaluateT08Verification` | Referral/escalation: `Referral Created`; clinic management after T08: `Next Step Confirmed`; `EVT-11` and applicable `EVT-16` shown after success | Referral/escalation to `SCR-05`; clinic-management closure path to `SCR-10` | **Controller-local:** direction, evidence and T08 completion remain in this component; no branch value is passed onward | Stale or invalid direction evidence uses `SCR-07` | Refresh/back clears direction and T08 values; `SCR-05` always assumes day-care referral; `SCR-10` currently opens a referral-accepted scenario | Show branch outcomes truthfully. Do not claim that the selected branch configured the destination screen. The clinic-management-to-`SCR-10` dependency is unresolved |
| `SCR-05` Prepare handoff | Preconfigured day-care direction, acknowledged report version `2` and `Referral Created` | `recordReferralRoute` using the package gate | Local route evidence `EVT-12` and send attempt `EVT-13`; state remains `Referral Created` | `SCR-06` | **Controller-local:** destination, approvals and `routed` are not passed to `SCR-06`; that screen uses approved package/send assumptions | Missing approval stays blocked; represented send failure uses `SCR-07` | Refresh/back clears package entries and routed success; direct `SCR-06` starts with its own routed-package evidence | State that `SCR-06` demonstrates the receiving stage for an approved synthetic package; do not imply delivery or runtime transfer |
| `SCR-06` Record response | Preconfigured routed package and send reference | `evaluateReceivingResponse` | Local `Referral Accepted` or `Referral Rejected`; `EVT-14` after success | Accepted to `SCR-10`; rejected to `SCR-04` | **Controller-local:** response, actors and result are not passed to either destination | Invalid or failed recording remains blocked or uses `SCR-07`; no automatic reroute | Refresh/back clears the response; `SCR-10` assumes accepted evidence and `SCR-04` resets to a new direction scenario | Make the next owner and represented destination clear, but do not say navigation itself records acceptance, rejection or a replacement referral |
| `SCR-07` Exceptions | App-level exception detail from launch or an operational screen, or a directly selected approved profile | `evaluateExceptionResolution` | Local verified recovery `EVT-21` and last verified state | App mapping returns to `SCR-03`, `SCR-05`, `SCR-10` or otherwise `SCR-02` | **Runtime-carried:** inbound exception detail and return state are held in memory until refresh; selected profile and resolution are local | Failed/unverified resolution remains open with no progression | Refresh/direct route loses the originating exception and opens the default represented profile; back may reopen a reset source screen | Identify whether the screen shows an originating exception or a standalone demonstration profile. Never imply automatic recreation of the original action |
| `SCR-08` AI draft review | Approved AI-01 or AI-02 fixture, reviewer role, current sources and optional calling context | `evaluateAiDraftReview` | Human disposition evidence `EVT-20`; no canonical state change | AI-01 manual route and AI-02 return route; no workflow advance | **Support-only/controller-local:** capability and disposition remain local; calling-screen context is not carried into the screen | Stale, unavailable or unsupported output retains the manual source-based route | Refresh resets capability and disposition; direct route defaults to AI-01; current AI-01 controller always returns `SCR-03` | Keep the calling workflow and return destination explicit. Do not implement a role-specific AI-01 return until the baseline conflict is resolved |
| `SCR-09` Activity trace | Approved static audit fixture | Read-only category filtering and `validateAuditTrace`; no workflow action | Filtered chronological evidence only | Return through prototype navigation; no canonical next state | **Support-only:** audit entries are static approved constants and are not assembled from actions performed in the current walkthrough | Missing audit evidence is a visible quality issue; no destructive correction | Refresh resets the filter; opening the page after an action does not add that session's event | Label the trace as a representative synthetic history. Do not imply it is a live session audit log |
| `SCR-10` Confirm next step | Preconfigured accepted referral, complete handoff/response context and user-entered confirmation evidence | `evaluateNextStepConfirmation`, followed separately by `evaluateScopedClosure` | Local `Next Step Confirmed`/`EVT-16`, then `Episode Completed`/`EVT-22` | End of scoped diagnostic-closure demonstration | **Controller-local/fixture-represented:** no response data arrives from `SCR-06`; confirmation and closure remain local | Missing evidence or safety-blocking exception uses `SCR-07` | Refresh/back clears entered evidence, confirmation and closure; direct route begins from the referral-accepted scenario | Do not imply it received live response evidence from `SCR-06`. The clinic-management entry mode remains unresolved and must not be visually claimed |

### Runtime relationships that currently exist

Only these cross-screen relationships are carried by the current frontend:

1. authorised or failed launch from `SCR-01` to `SCR-02` or `SCR-07`;
2. exception detail from an operational screen to `SCR-07`;
3. last-verified exception return state from `SCR-07` to the App's fixed return mapping; and
4. AI manual-return screen ID from `SCR-08` to the hash router.

The normal forward care path is otherwise a sequence of fixture-represented screen scenarios. Sprint 6B may make the sequence easier to understand, but it must not describe it as persisted workflow execution.

### Unresolved dependency conflicts

| ID | Conflict | Current evidence | Required decision before implementation |
| --- | --- | --- | --- |
| `DEP-6B-01` | AI-01 return depends on reviewer role in the approved navigation map, but the current controller has one fixed `SCR-03` return | Navigation baseline: Care Coordinator AI-01 returns to `SCR-02`, Clinic physician AI-01 returns to `SCR-03`; controller: AI-01 `returnScreen: 'SCR-03'` | Confirm one approved return rule and propagate it through baseline, controller, tests and Sprint 6B content under controlled change |
| `DEP-6B-02` | The approved clinic-management path reaches `SCR-10` after T08 has already recorded `Next Step Confirmed`, but the current `SCR-10` component always starts from the referral-accepted confirmation scenario | Navigation baseline routes verified T08 to closure mode; current component initially evaluates referral confirmation from `Referral Accepted` | Decide whether Sprint 6B represents only the referral path on `SCR-10` or requires a separately approved scenario/mode; do not infer a state-transfer architecture |
| `DEP-6B-03` | The approved navigation map names success destinations, while current operational screens normally remain in place and rely on viewer navigation | `SCR-03` through `SCR-06` show local post-action evidence but do not automatically open the named success route | Decide whether success destinations remain explanatory/viewer controls or whether any automatic navigation is desired; automatic navigation is a separate behaviour change |
| `DEP-6B-04` | Approved actors are named for task screens, but direct hash routes other than `SCR-02` do not use the simulated launch gate | Current hash router mounts `SCR-03` through `SCR-10` directly | Approve truthful demonstration-view labelling or a separately scoped access-gating change; Sprint 6B must not imply real authorisation |

No conflict above is resolved by this matrix. The Product Owner must choose the intended baseline before implementation.

## Change boundaries

### Planned UX change classification

| Proposed refinement | Change level | Approval position |
| --- | --- | --- |
| Clarify role, purpose, labels, source boundaries and outcome wording | Minor | Approved for planning; implementation still waits for the screen matrix |
| Add a pre-action **What happens when routed** explanation using existing deterministic outcomes | Minor | Approved for planning; wording must match the existing route contract |
| Clarify routed evidence, response consequences and post-action attribution | Minor | Approved for planning; wording must match the existing response contract |
| Reorder context into an episode strip and supporting rail | Moderate | Explain screen impact in the placement matrix before implementation |
| Reorganise Prepare handoff into source direction, package readiness, optional assistance and route outcome | Moderate | Map every element to the approved handoff baseline before implementation |
| Reorganise Record response into routed evidence, actor attribution, conditional decision evidence and readiness | Moderate | Preserve existing deterministic validation and state transitions |
| Reorganise Exceptions into a scannable queue, selected detail, recovery evidence and safe return | Moderate | Map all rows and evidence to approved profiles; validate responsive and keyboard behaviour |
| Reorganise AI draft review into source evidence, draft, and human disposition/fallback | Moderate | Preserve approved capabilities, roles, dispositions, degraded states and no-state-change boundary |
| Reorganise Activity trace around the chronological evidence table and compact orientation | Moderate | Preserve approved entries, categories, ordering and read-only boundary |
| Reorganise Confirm next step around evidence readiness and sequential confirmation/closure | Moderate | Preserve every evidence requirement, role, state transition and separate event |
| Add an evidence-readiness table or summary linked to existing inputs | Moderate | Map every row to approved data and prevent summary/input divergence |
| Add read-only row expansion, linked-evidence preview or correction-chain exploration | Moderate | Implement only when approved source and linkage evidence exists |
| Change disposition input style while keeping approved options | Moderate | Validate equal emphasis, keyboard operation and correction requirements |
| Add a readiness count or change destination/route input methods | Moderate | Requires verified requirement denominator and approved option sources |
| Add progressive evidence preview or guidance disclosure | Moderate | Specify interaction, accessibility and fixture source before implementation |
| Replace the always-visible task-screen sidebar with a hybrid navigation treatment | Major | Explicit Product Owner approval required before implementation |
| Add approval-request, notification or package-lifecycle behaviour from a reference | Major and outside current baseline | Not approved |
| Add an AI disposition, authority, source-verification override or workflow effect | Major and outside current baseline | Not approved |
| Change workflow, role authority, evidence meaning, state or AI boundary | Major and outside Sprint 6B scope | Not approved |

### In scope for planning

- Simulated session confirmation and visible synthetic identity.
- Role and purpose clarification.
- Layered explanation and walkthrough help.
- Episode overview direction.
- Read-only synthetic evidence preview.
- Consistent handoff language.
- Sidebar and navigation evaluation.
- Regression and accessibility test planning.

### Not approved for implementation

- Real authentication, passwords, permissions or role impersonation.
- New workflow states, approvals, assignments or operational actions.
- New clinical findings, patient data or evidence semantics.
- Changes to human decision authority or AI safety controls.
- New routes or screens that alter the approved flow.
- New dependencies, architecture or external integrations.
- Replacement or deletion of the tested Sprint 6 implementation.

## Definition of ready for implementation

Implementation planning is ready only when:

- the wireframe screenshots have been reviewed;
- the screen-by-screen placement matrix is approved;
- the screen-to-screen dependency matrix is reviewed and every unresolved `DEP-6B-*` conflict has a recorded Product Owner decision or explicit implementation deferral;
- the session/role/actor matrix and any simulated role-handoff treatment are approved;
- direct-route behaviour before simulated launch is explicitly documented without implying real access control;
- sidebar behaviour is decided;
- the synthetic document source and format are approved;
- every readiness, blocker, journey and audit display is mapped to its controlled value and deterministic controller result;
- current route aliases, safe-return behaviour, local-state reset behaviour and CSS selector dependencies are recorded as regression constraints;
- agreed desktop, zoom and narrow-width validation viewports are named;
- operational actions and walkthrough navigation are explicitly distinguished;
- allowed and forbidden implementation files are named;
- the regression commands and focused test additions are agreed; and
- any approved change to the baseline is entered in the existing change log.

## Planned exit criteria

- Every existing screen makes the active role and screen purpose evident.
- Signed-in identity, active role, accountable owner, decision actor and recording actor are not conflated.
- A role change is never implied by route selection alone; any represented role handoff is explicit and labelled as simulated.
- Every screen provides an understandable next-step explanation.
- The primary operational action remains visually dominant.
- Applicable task screens keep identity, current evidence, prior relevant human action and current state visibly related without creating an overloaded header.
- Operational actions and portfolio walkthrough navigation cannot be confused.
- The Episode overview explains why it exists and how to continue.
- Approved evidence can be inspected in a realistic but clearly synthetic view.
- Handoff language is consistent across applicable screens.
- Prepare handoff distinguishes the approved human direction, package owner, applicable approval evidence, readiness blockers, route action and receiving-response outcome.
- Prepare handoff states before routing that send evidence is not delivery or receiving acceptance and that the state remains `Referral Created`.
- Optional AI assistance remains secondary, source-linked, human-reviewed and non-blocking.
- Record response distinguishes the receiving-team decision actor from the recording actor/source.
- Accept and Reject have no default and expose only their applicable required evidence.
- No `EVT-14`, success message or accepted/rejected state appears before a valid human recording succeeds.
- After recording, the resulting state, actor attribution, audit evidence, next owner and next action are visible.
- Exceptions presents a scannable queue with affected work, owner and approved status information.
- The selected queue row, condition badge, detail, owner and journey state always refer to the same exception.
- Recovery evidence and readiness appear before the resolution action.
- Successful exception resolution appends evidence and provides a manual return to the last verified work without automatic progression.
- AI draft review presents approved source/version evidence before the draft and makes provenance and uncertainty easy to locate.
- AI-01 and AI-02 retain their distinct approved purposes, roles, sources and acceptance dispositions.
- Accept, correct, reject and discard treatments do not visually imply that acceptance is preferred.
- Unavailable, stale, unsupported and rejected AI paths retain a complete manual source-based workflow.
- `EVT-20` and recorded-disposition evidence appear only after a valid authorised human action; canonical workflow state remains unchanged.
- Activity trace displays time, event/outcome, actor/source, source/version, event identifier and text category for each applicable row.
- Active audit filters always match the visible evidence and provide a clear empty state.
- Audit history remains chronological, append-only and read-only, with no edit, delete or workflow controls.
- Linked evidence and correction chains appear only when backed by approved synthetic evidence and retain the original audit history.
- Next-step evidence status, source, owner and recorded time are visible without combining distinct evidence obligations.
- `Next Step Confirmed` remains the only current primary action until all applicable evidence passes and a human records `EVT-16`.
- Scoped closure remains locked or secondary until confirmation succeeds; `EVT-22` and `Episode Completed` appear only after the separate closure action.
- Journey position, canonical state, blocker and available action remain synchronised before and after both actions.
- Readiness, blocker, journey, action availability and post-action evidence are derived from the same screen values and controller outcome.
- Existing readable routes, internal route aliases, back/deep-link behaviour and invalid-route safe return remain unchanged.
- Every screen relationship is labelled internally as runtime-carried, controller-local, fixture-represented or support-only, and the visible wording matches that technical truth.
- No unresolved `DEP-6B-*` conflict is represented as completed, persisted or approved behaviour.
- Walkthrough navigation and evidence-preview controls do not call controllers or mutate workflow state.
- The interface does not claim that screen-local state is persisted across routes.
- Shared layout changes do not alter an unrelated screen through broad or DOM-shape-dependent CSS selectors.
- Sidebar behaviour supports orientation across agreed viewport sizes.
- Existing workflow, state transitions, human controls and AI boundaries remain unchanged.
- The mandatory whole-prototype regression gate has passed from a clean browser session, with all ten routes, all approved normal/recovery paths, dependency classifications, accessibility checks and responsive checks recorded factually.
- Applicable existing and focused new tests pass.
- Accessibility and responsive checks are recorded with factual results.

## Risks and mitigations

| Risk | Planned mitigation |
| --- | --- |
| Guidance creates visual overload | Split it into contextual layers and use progressive disclosure. |
| Demonstration navigation is mistaken for a real action | Separate its placement, styling and language; ensure it cannot mutate state. |
| Synthetic evidence is mistaken for a real record | Use an unmistakable synthetic label or watermark and approved fixture data only. |
| Three persistent columns compress the authorised task | Test the hybrid navigation hypothesis and keep the primary task dominant at agreed viewports. |
| Collapsed navigation hides the portfolio journey | Retain visible current-step orientation and a clearly labelled, keyboard-accessible reopen control. |
| Episode context becomes too dense | Include only decision-relevant context and define a clear responsive reflow order. |
| A readiness count implies completeness without a controlled denominator | Show counts only after every required item is mapped to the approved baseline; otherwise list the blockers directly. |
| Reference approval controls silently add a new workflow | Treat review/request buttons as out of scope unless a separate baseline change is approved. |
| Optional AI appears necessary for package approval or routing | Keep AI secondary, label it as optional and preserve a complete manual source-based route. |
| Routing is mistaken for delivery or acceptance | Explain the route outcome before action and show recorded send-attempt evidence afterward. |
| A pre-action audit panel falsely implies the response is already recorded | Render `EVT-14` and success evidence only after the deterministic recording succeeds. |
| Owner or blocker information contradicts the incomplete form | Derive the displayed owner, blocker and readiness from the same response state and validation result. |
| Recording actor is mistaken for receiving-team decision authority | Label both roles separately and require the received-response source when another role records the evidence. |
| Acceptance is mistaken for next-step confirmation | Repeat the boundary before recording and in the post-action next-step message. |
| Queue selection and detail show different exception context | Drive the badge, detail, owner, readiness and journey from one selected exception and visibly mark that row. |
| A table becomes unreadable or inoperable on narrow screens | Use semantic headers on desktop and labelled stacked rows/cards with keyboard selection at narrow widths. |
| Recovery checklist invents new evidence requirements | Display only items mapped to the approved profile and deterministic gate; make condition-specific items conditional. |
| Resolution appears to resume or repeat workflow automatically | Show appended recovery evidence and a separate manual return control only after verified success. |
| Source evidence appears after the AI draft and encourages unverified reliance | Present source/version status and calling workflow before the draft. |
| Acceptance styling encourages automation bias | Give approved dispositions balanced emphasis and keep uncertainty and manual fallback adjacent. |
| Reviewer-created staleness checks override deterministic evidence | Render freshness and mismatch checks as read-only system evidence from approved fixture logic. |
| Pre-action audit content implies an AI disposition is already recorded | Show `EVT-20` only after successful authorised human recording. |
| The screen's vertical hierarchy hides source, uncertainty or fallback | Reduce non-task overhead and test the initial desktop viewport without shrinking text or targets. |
| Audit guidance pushes the evidence table below the initial viewport | Compact orientation and make the chronological trace the primary screen content. |
| Filter selection contradicts the visible rows | Derive filter state and displayed results from one category value and test every approved category plus empty results. |
| Category colours become the only distinction | Retain text labels, semantic headers and accessible selected state; use colour only as reinforcement. |
| Linked evidence or correction chains imply data that is not present | Render exploration controls only for approved references and append-linked relationships. |
| Responsive transformation loses table meaning | Preserve header-to-value relationships in horizontal-scroll or labelled-card treatment. |
| Readiness summary and editable evidence diverge | Derive both from the same controlled values and deterministic validation result. |
| Combined checklist rows hide distinct communication obligations | Keep approval, sender, channel, delivery and explicit confirmation separate. |
| Journey indicates confirmation before `EVT-16` succeeds | Drive journey status from canonical state rather than the page or intended action. |
| Closure competes with the current confirmation action | Keep closure locked and visually secondary or reveal it only after confirmation. |
| Dense evidence tables reduce readability | Use progressive row detail and responsive labelled items without shrinking text or targets. |
| Plain-language explanations change canonical meaning | Keep approved role, state and evidence terms and add explanation without renaming them. |
| Session display implies real security | Label the experience as simulated and do not collect credentials or implement permissions. |
| Route-driven identity silently switches or impersonates a user | Separate session, viewer, owner, decision and recording roles; require an explicit simulated handoff where the demonstration changes role. |
| Direct task routes look authenticated when no simulated launch occurred | Define a truthful demonstration-view state; do not expand access-control behaviour without separate approval. |
| Screen-local form or success state is mistaken for persisted episode data | Label the prototype as scenario-based, avoid autosave/persistence claims and record route-change reset as a known limitation. |
| Display summaries duplicate deterministic rules | Derive readiness, blockers, actions and outcomes from one controller result and the same controlled inputs. |
| Shared markup activates unrelated `:has(...)` CSS layouts | Record selector dependencies, scope new rules and visually check all ten screens after shared-structure changes. |
| Evidence preview contains invented or wrong-version clinical content | Render only approved fixture fields, retain the synthetic watermark and validate the report/version/source mapping. |
| New disclosure controls pass visual review but fail keyboard or focus use | Require focus entry, containment and return, Escape, names, target size, reduced motion and recorded keyboard checks. |
| A success destination is mistaken for runtime state transfer | Use the dependency classification and state what is controller-local versus fixture-represented; do not imply persistence. |
| A known baseline/controller conflict is hidden by clearer visual copy | Keep `DEP-6B-*` items open until a Product Owner decision is recorded; do not design around an assumed resolution. |

## Assumptions

- Sprint 6 remains the tested functional baseline.
- Sprint 6B improves comprehension and presentation without changing workflow execution.
- The prototype serves both operational-role demonstration and portfolio walkthrough needs.
- The current frontend remains a set of controlled scenario screens with local interaction state; Sprint 6B does not convert it into a persistent cross-screen workflow engine.
- Existing domain controllers, fixture semantics, route contract and audit constants remain authoritative.
- Supplied wireframes are design references to assess, not automatically approved replacements or sources of product truth.
- Existing synthetic fixture data remains the source of truth for any evidence preview.

## Open decisions

- Final sidebar visibility and collapse behaviour after wireframe review.
- `DEP-6B-01`: the approved role-specific AI-01 return rule.
- `DEP-6B-02`: whether `SCR-10` remains a referral-only scenario or gains a separately approved clinic-management entry mode.
- `DEP-6B-03`: whether success destinations remain explanatory/viewer navigation or introduce automatic navigation.
- `DEP-6B-04`: truthful direct-route treatment before a simulated launch.
- Whether the header represents one continuing simulated session or explicit simulated role handoffs between screen groups.
- The approved session/role/owner/decision-actor/recording-actor mapping for each screen and relevant pre/post-action state.
- How direct task-screen routes are labelled when the simulated launch has not occurred, without introducing a new access-control claim.
- Whether route-change loss of unsaved local values needs a demonstration warning; cross-screen persistence is outside Sprint 6B unless separately approved.
- Whether the proposed task-screen episode strip should remain visible, become sticky or scroll with the task.
- Which screens need the full supporting rail and which need only a compact next-step treatment.
- Whether the approved package requirement set supports a meaningful numeric readiness denominator; otherwise use a blocker list.
- Whether Prepare handoff should show only an optional summary/link to the existing AI-draft review or omit AI from the task screen entirely.
- Exact placement of the route-outcome explanation so it is visible before action without competing with package readiness.
- Whether response readiness is best shown as a compact checklist, a status summary or both without duplicating validation messages.
- Whether the routed-package context should sit above the response form or in its secondary column at agreed desktop widths.
- Whether the exception queue should use a semantic table or a table-like selectable list at desktop widths.
- Which approved recovery requirements can be represented as a checklist for each exception profile without creating new data capture.
- Whether selecting an exception should move focus to the detail heading or retain focus in the queue for efficient comparison.
- Whether human disposition should remain a select control or use equally weighted action controls for the small approved set.
- Whether AI-01 and AI-02 should be selected on this screen or opened with their calling-workflow context already fixed.
- Which source/version comparisons should be visible in the primary view and which belong in progressive provenance detail.
- Whether audit categories should use chips on desktop and a select at narrow widths or retain one control consistently.
- Which approved audit rows have enough additional content for expansion.
- Whether correction-chain exploration belongs in the trace screen or the linked synthetic evidence preview.
- Whether next-step evidence entry should be inline within readiness rows, revealed in row detail or retained in a separate verification section.
- Whether locked scoped closure should remain visible as a low-emphasis future card or appear only after `Next Step Confirmed`.
- Which evidence rows should link to the synthetic report preview or audit trace.
- Exact placement of each explanation layer on each screen.
- Whether walkthrough navigation appears on every screen or only where the real-world user has no next action.
- Dialog, drawer or page-detail treatment for the synthetic evidence preview.
- Exact simulated sign-in confirmation content and transition duration.
- Whether a compact project-wide **How to use this prototype** footer is sufficient or needs an optional expanded walkthrough.

## Decision record

### 2026-07-27 — Sprint 6B planning initiated

- The five agreed design directions above were accepted for planning.
- Sprint 6B was created as a bounded refinement between Sprint 6 and Sprint 7.
- No prototype implementation, authentication change, evidence asset or dependency was authorised.
- Screen structure, sidebar behaviour and the regression-safe implementation sequence remain pending until the wireframes are reviewed.

### 2026-07-27 — First wireframe structural reference assessed

- The supplied follow-up-direction wireframe was assessed against the matching running prototype screen.
- Its compact episode context, task-first two-column hierarchy, visible active role, local safety/context guidance and outcome-specific next-step treatment were accepted as useful planning references.
- The existing prototype's visual restraint, state-owner-next-action clarity, human-control boundaries, exceptions, synthetic labelling and tested behaviour remain protected.
- The previous always-visible desktop-sidebar hypothesis was revised to a hybrid navigation hypothesis because three persistent columns can compete with the operational task.
- No sidebar or shared-layout change is approved for implementation until the remaining wireframes are reviewed and the Product Owner explicitly approves the major navigation direction.

### 2026-07-27 — Referral handoff wireframe structural reference assessed

- The supplied Referral Coordinator handoff wireframe was assessed against the existing **Prepare handoff** screen.
- Its separation of approved human direction, package readiness, optional secondary assistance, route consequences and handoff journey context was accepted as a useful planning reference.
- The existing deterministic controls remain authoritative: only the Referral Coordinator may route the complete approved package; applicable Clinic physician approval remains separate; routing records package/send-attempt evidence, keeps `Referral Created` and does not establish delivery or receiving acceptance.
- Reference-specific counts, versions, timestamps, route choices, approval-request controls and package-lifecycle behaviour were rejected unless independently traced to and approved in the baseline.
- AI remains optional, source-linked and human-reviewed. It cannot approve, route or block the manual handoff workflow.
- No prototype implementation or baseline change was authorised.

### 2026-07-27 — Receiving response wireframe structural reference assessed

- The supplied Receiving response wireframe was assessed against the existing **Record response** screen.
- Its prominent routed evidence, separate decision/recording actors, conditional Accept/Reject evidence, readiness check and next-step boundary were accepted as useful planning references.
- The existing deterministic rules remain authoritative: no default response; conditional evidence is required; actor/source attribution is retained; acceptance and rejection produce their approved states only after a valid recording; and `EVT-14` is created only after success.
- The reference's pre-action `EVT-14` claim and **Blocker: None** statement were rejected because they contradict its incomplete form.
- Acceptance cannot confirm the next step or close the episode. Rejection cannot create or route a replacement referral.
- No prototype implementation, workflow, role, evidence or state change was authorised.

### 2026-07-27 — Exception queue wireframe structural reference assessed

- The supplied exception queue/detail wireframe was assessed against the existing **Exceptions** screen.
- Its scannable queue, affected-work and owner columns, detailed safe/prohibited actions, recovery-evidence summary, paused journey and explicit safe-return outcome were accepted as useful planning references.
- The resolution action will be planned after applicable recovery evidence and readiness, not before them.
- Queue selection, condition badge, detail, accountable owner and journey context must remain visibly synchronised.
- Reference-specific exception IDs, statuses, evidence items, owners and internal screen references were not adopted.
- Existing deterministic exception profiles, accountable-role validation, failed-resolution behaviour, append-only recovery evidence and manual safe return remain authoritative.
- No prototype implementation, exception type, workflow state, authority or automatic recovery change was authorised.

### 2026-07-27 — AI draft-review wireframe structural reference assessed

- The supplied AI draft-review wireframe was assessed against the existing **AI draft review** screen.
- Its source-first order, calling-workflow context, explicit uncertainty, human disposition, degraded-state handling and manual fallback were accepted as useful planning references.
- Approved AI-01 and AI-02 purposes, source links, reviewers, dispositions, correction requirement, stale/unavailable controls and manual routes remain authoritative.
- A new **Supersede** disposition, dominant acceptance styling, reviewer-controlled staleness checks, reference-specific evidence and pre-action `EVT-20` were not adopted.
- Source evidence, uncertainty, manual fallback and the no-state-change boundary must be understandable before the reviewer records a disposition.
- No prototype implementation, AI capability, authority, workflow state or audit rule change was authorised.

### 2026-07-27 — Audit-and-trace wireframe structural reference assessed

- The supplied audit-and-trace wireframe was assessed against the existing **Activity trace** screen.
- Its evidence-first table, attributable columns, text categories, filters, append-only boundary and secondary journey orientation were accepted as useful planning references.
- The table will be planned as the primary focus, with compact context so meaningful rows appear earlier in the desktop viewport.
- The reference's filter/result contradiction, missing signed-in reviewer, unverified communication category and unsupported exploration controls were not adopted.
- Linked evidence, row detail and correction chains may be planned only when backed by approved synthetic evidence and must remain read-only.
- Existing audit entries, categories, chronological order, source/version links and no-edit/delete/workflow boundary remain authoritative.
- No prototype implementation, event, category, correction rule, source access or workflow change was authorised.

### 2026-07-27 — Next-step confirmation wireframe structural reference assessed

- The supplied next-step confirmation wireframe was assessed against the existing **Confirm next step** screen.
- Its evidence-readiness view, source/owner/time attribution, report link, separate confirmation/closure concepts and action guidance were accepted as useful planning references.
- The readiness summary must remain connected to the existing evidence-entry values and deterministic gates; it cannot replace or weaken required evidence.
- The reference's premature journey confirmation, duplicate journey terminology, equal confirmation/closure emphasis, internal user-facing identifiers and reference-specific evidence were not adopted.
- Existing communication, delivery and explicit-confirmation separation, Care Coordinator verification authority, safe exception route, `EVT-16`, `EVT-22` and scoped closure boundary remain authoritative.
- No prototype implementation, evidence requirement, state, role, event or closure rule change was authorised.

### 2026-07-27 — Supplied wireframe structural review completed

- Seven supplied wireframes were assessed as structural references rather than sources of truth.
- Common patterns and protected ContinuumOS controls were consolidated in the reference-set synthesis above.
- The next planning deliverable is the screen-by-screen placement matrix across all existing prototype screens.

### 2026-07-27 — Regression, flow-integrity and implementation-risk review completed

- Sprint 6B was traced against the current hash-route contract, screen-local React state, deterministic domain controllers, approved synthetic fixture, audit constants, shared components, CSS layout selectors and existing Node tests.
- The review confirmed that the deterministic controller layer is the protected source for action permission, blockers, outcomes, state transitions and audit events.
- It also confirmed that the frontend demonstrates controlled workflow scenarios rather than one persisted cross-screen episode. Sprint 6B must not imply persistence or causal handoff between screens where the implementation uses independent fixture assumptions.
- Silent route-driven user changes were classified as a critical representation risk. A session/role/owner/actor matrix and explicit simulated role-handoff decision are now required before a persistent identity header can be implemented.
- Controller/display divergence, direct-route authentication implication, local-state loss, premature journey/audit completion, broad CSS selector coupling, fixture-version mismatch and inaccessible disclosure controls were added as implementation gates.
- The planned sequence now separates shared presentation contracts from controller logic, stages changes by screen family and requires route, controller, accessibility, responsive and browser verification after each increment.
- Current baseline verification recorded for this planning review: TypeScript lint passed; all 32 Node tests passed; the Vite production build passed after rerunning outside the restricted sandbox so Vite could create its temporary configuration file.
- No prototype source, controller, fixture, test, route, dependency, workflow state, role authority or AI-safety control was changed.
- The hybrid navigation/layout recommendation remains a major unapproved change requiring explicit Product Owner approval before implementation.
- The regression-safe implementation sequence remains pending; Sprint 6 remains the functional baseline.

### 2026-07-27 — Screen-to-screen dependency matrix added

- All ten approved screens were traced against the Sprint 5 navigation map and the current Sprint 6 App, controllers, fixture assumptions and local state.
- Each dependency is now classified as runtime-carried, controller-local, fixture-represented, support-only or unresolved.
- The matrix records prerequisites, controller gates, successful results, approved destinations, data actually carried, safe-return behaviour and refresh/back/direct-route edge cases.
- The review confirms that only launch context, exception context/return and AI manual-route IDs are currently carried across screens. The normal forward care journey otherwise uses controlled fixture-represented scenarios.
- Four unresolved dependencies were recorded: role-specific AI-01 return, clinic-management entry into `SCR-10`, explanatory versus automatic success navigation, and direct task routes before simulated launch.
- These conflicts were not resolved by assumption. Product Owner decisions or explicit deferrals are required before the affected Sprint 6B presentation is implemented.
- No prototype code, controller, fixture, route, test, workflow state, role authority, authentication behaviour or AI-safety control was changed.

### 2026-07-27 — Supplied wireframe assets preserved

- The seven supplied wireframe screenshots were copied without alteration from their temporary locations into the controlled Sprint 6B `reference_wireframes/` folder.
- A manifest records each file's implementation focus and SHA-256 checksum so the visual references remain available after temporary clipboard files expire.
- The assets remain structural and presentation references only. They do not change the approved workflow baseline, dependency matrix, human authority, synthetic fixture, audit semantics or AI controls.

### 2026-07-27 — Whole-prototype regression gate added

- Sprint 6B now requires focused regression after each approved increment and a clean-session full regression after the final increment.
- The final gate covers build, all routes, launch, normal and recovery paths, dependency-matrix truthfulness, session/authority boundaries, AI, audit, synthetic evidence preview, keyboard/focus, reduced motion, zoom, responsive layout and visual regression against approved structural references.
- A Critical or High regression blocks Sprint 6B closure and must use the existing Sprint 6 defect process before full affected-path retest.
- No tests, controllers, routes, workflow controls, dependencies or prototype implementation changed while adding this planning gate.

### 2026-07-27 — PLN-6B-01 implementation decision pack prepared

- A draft implementation decision pack and Sprint 6B handoff contract were added to support controlled backlog refinement.
- The pack contains proposed screen-placement and session/role/actor matrices, dependency recommendations, major-navigation and evidence-preview decision points, acceptance gates and an explicit Product Owner approval record.
- The recommendations do not resolve `DEP-6B-01` through `DEP-6B-04`, approve the hybrid navigation, authorise a session model or change any baseline behaviour. Each remains pending Product Owner action.
- No prototype source, controller, fixture, test, route, workflow state, role authority, authentication behaviour or AI-safety control changed.

### 2026-07-27 — PLN-6B-01 Product Owner decisions recorded

- The Product Owner approved the Sprint 6B decision-pack recommendations: explicit deferral of the role-specific AI-01 return and clinic-management `SCR-10` mode; explanatory user-invoked prototype navigation; truthful direct-route demonstration-view labelling; explicit simulated role handoffs; an accessible read-only synthetic evidence dialog; and the agreed validation viewports.
- The Product Owner also approved the hybrid navigation direction: open navigation on Start and Episode overview, with user-invoked **Prototype journey** navigation on operational screens and a compact task-support treatment only where it helps the current role.
- These decisions authorise bounded Sprint 6B presentation/comprehension work only. They do not authorise real authentication, role switching, persistence, new routes, controller changes, fixture-semantic changes, workflow/state/authority changes, source-system access or AI-safety changes.
- `PLN-6B-01` is complete. `ENAB-6B-01 — Establish regression-safe presentation contracts` is ready for development.

### 2026-07-27 — ENAB-6B-01 presentation contracts implemented

- A typed shared presentation contract now covers all ten approved screens with their approved purpose, represented role, simulated-session wording, received/handled/sent/next handoff language, scenario boundary and direct-route demonstration-view notice.
- The contract is deliberately presentation-only: it imports no domain controller, has no action, navigation, persistence, authentication or fixture-write behaviour, and does not change controller authority, state, audit evidence or route semantics.
- Focused contract checks verify all-screen coverage, direct-route presentation boundaries, AI limitations and fixture-represented cross-screen truthfulness. TypeScript lint, all 35 Node tests and the Vite production build passed.
- No rendered screen, controller, fixture, route, workflow state, role authority, authentication behaviour or AI-safety control changed. `ENAB-6B-02` remains the next approved shell-wiring increment.

### 2026-07-27 — ENAB-6B-02 simulated-session and navigation shell implemented

- A shared shell now displays a truthful simulated-session context separately from screen ownership and decision authority. The simulated session is held only in local React state and remains separate from route state.
- Successful simulated launch creates an explicit pending handoff to Episode overview; a viewer must choose **Continue simulated handoff** before the represented role changes. It does not authenticate, grant permissions, alter owner/actor fields or persist a session.
- Start and Episode overview retain open orientation navigation. Operational screens use a compact, user-invoked native-dialog **Prototype journey**; its viewer navigation neither records, approves nor advances workflow work. Cancelling a role handoff leaves the current screen unchanged.
- Reloaded direct task routes remain usable as independent scenarios and present a demonstration-view notice until a simulated launch is established.
- Focused static shell checks, TypeScript lint, all 38 Node tests, the Vite production build and browser interaction checks for launch, explicit handoff, operational navigation, cancel/recovery and direct-route labelling passed.
- No controller, fixture, route definition, workflow state, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-01` is the next approved increment.

### 2026-07-27 — COS-6B-01 launch and episode orientation implemented

- Successful simulated launch now confirms a represented synthetic outcome, states that no credentials were collected and that no durable authentication or permissions were established, then requires the existing explicit simulated role handoff.
- Episode overview now presents its read-only orientation purpose, contributing synthetic sources, Care Coordinator viewing context, the assigned Clinic physician as the next represented operational owner and a separately labelled **View next demonstration screen** control that invokes viewer navigation only.
- Access, authorisation and linkage failure presentation suppresses synthetic patient, encounter and episode context across both the exception header and support rail while naming the accountable recovery owner and safe action.
- Browser validation identified and corrected two bounded presentation/accessibility regressions: asynchronous launch-dialog focus now returns to the launch control after cancel, and orientation navigation stacks above content at the approved 390×844 narrow viewport.
- TypeScript lint passed; all 42 Node tests passed; the Vite production build passed after the required unsandboxed retry; and clean browser checks passed for launch, handoff, cancel/focus return, overview ownership, viewer-only navigation, unavailable-access recovery, all ten direct routes, 1440×900, 1024×768 and 390×844 layouts.
- Actual browser zoom and physical Escape dispatch were unavailable through the in-app browser. A 720×450 CSS-viewport equivalent for 200% at 1440×900 passed without horizontal overflow. Native dialog cancel semantics remain implemented; physical Escape and actual 200% zoom remain final-regression verification limitations rather than claimed passes.
- No controller, fixture, route definition, workflow state, audit event, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-02` is the next recommended refinement target.

### 2026-07-27 — COS-6B-02 result review and human direction clarified

- SCR-03 now presents the exact current source report version, issued time, assigned reviewer, state, due context and next action before a separate human-acknowledgement panel. The panel states that acknowledgement records review of that exact source version and does not diagnose, approve referral or select follow-up direction.
- The existing acknowledgement controller remains authoritative. Actor, approved timestamp and `EVT-10 result.acknowledgement.recorded` appear only after an allowed result. The next-screen control is separately labelled viewer navigation and states that the local acknowledgement is not persisted or transferred.
- SCR-04 now presents approved fixture-represented acknowledgement context before the decision surface. The three existing direction options remain unselected and each explains only its immediate approved workflow consequence; no option is recommended, ranked or preselected.
- The existing direction controller remains authoritative. Actor, approved timestamp and `EVT-11 care.direction.recorded` appear only after an allowed result. The screen states that later demonstration screens are separate represented scenarios and are not configured by the local direction.
- Five focused story tests were added. TypeScript lint passed; all 47 Node tests passed; the Vite production build passed after the required unsandboxed retry; and browser checks passed for acknowledgement, explicit next-screen handoff, fresh unselected direction state, day-care direction success, clean console and 1024×768, 720×450 and 390×844 layouts without horizontal overflow.
- Native radio semantics, accessible names, focus and mouse selection were confirmed. Synthetic arrow-key traversal did not advance the radio group through the browser automation layer, so physical arrow-key operation remains a manual final-regression check. Actual browser zoom remains covered only by the approved 720×450 CSS-viewport equivalent.
- No controller, fixture, route definition, workflow state, audit meaning, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-03` is the next recommended refinement target.

### 2026-07-27 — COS-6B-03 referral handoff and receiving response clarified

- SCR-05 now exposes the approved direction, current report, package ID/version, destination, required-field completion, Referral Coordinator approval and applicable clinical-content approval as a readable requirements list before routing. The list explains the same existing deterministic gate; it does not add a new validation rule.
- SCR-05 records the existing `EVT-12 referral.package.created` and `EVT-13 referral.sent` outcome only after the route controller permits the action. Its feedback retains `Referral Created` and states that send evidence is neither delivery, receiving acceptance nor next-step confirmation.
- SCR-06 now explicitly separates receiving-team decision authority from recording actor and received-response source. Recording actor selection and Accept/Reject begin without defaults; each response explains only its immediate approved consequence.
- SCR-06 shows the existing `EVT-14 receiving.response.recorded`, resulting state, decision actor, recording actor and next owner only after the response controller permits recording. Acceptance remains separate from next-step confirmation; rejection returns visible Clinic physician direction work and does not reroute the package.
- Four focused story tests were added. TypeScript lint passed; all 51 Node tests passed; the Vite production build passed after the required unsandboxed retry; and browser checks passed for blocked routing, completed route evidence, unselected response controls, accepted and rejected response outcomes, clean console and 1440×900, 1024×768, 720×450 and 390×844 layouts without horizontal overflow.
- No controller, fixture, route definition, workflow state, audit meaning, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-04` is the next recommended refinement target.

### 2026-07-27 — COS-6B-04 exception ownership and safe recovery clarified

- SCR-07 now presents all five approved exception profiles as a scannable queue with condition, affected work, accountable owner and canonical `Exception open` status. A visible **Selected** marker and `aria-pressed` state keep selection understandable without relying on colour.
- The selected queue item and detail are derived from the same approved profile. Affected work, owner, prohibited action, safe action, safe-return condition and plain-language manual destination remain synchronized when selection changes.
- The existing exception controller remains authoritative. The recovery summary restates its accountable-role, evidence and verified-outcome requirements; incomplete evidence, failed verification and non-accountable roles keep **Record verified resolution** disabled.
- Successful recovery shows the existing append-only `EVT-21 recovery.reconciliation_completed`, recording actor, submitted synthetic evidence and resulting last-verified state. Returning is a separate manual control and never recreates the original clinical, referral, financial or closure action.
- Browser review identified and corrected two bounded responsive defects: the master-detail split now waits for a sufficiently wide layout, and the four-part SCR-07 status summary stacks at 390px so long owner/action text remains readable.
- Four focused story tests were added. TypeScript lint passed; all 55 Node tests passed; the Vite production build passed after the required sandbox-permission retry; and browser checks passed for queue/detail synchronization, wrong-role blocking, controller-gated success, append-only evidence, separate manual return, clean console and 1440×900, 1024×768, 720×450 and 390×844 layouts without horizontal overflow.
- Native button semantics, accessible names, visible selected state and mouse selection were confirmed. Synthetic Enter/Tab dispatch did not move queue selection/focus through the browser automation layer, so physical keyboard operation remains a manual final-regression check. Actual browser zoom remains covered only by the approved 720×450 CSS-viewport equivalent.
- No controller, fixture, route definition, workflow state, audit meaning, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-05` is the next recommended refinement target.

### 2026-07-27 — COS-6B-05 AI evidence and manual fallback clarified

- SCR-08 now presents calling workflow, source references/versions, represented evidence status, uncertainty and a plain-language manual fallback before the clearly labelled AI-generated draft. AI-01 and AI-02 remain visibly distinct, using their existing approved sources and purposes.
- The optional draft remains visually and semantically separate from human review. The screen repeats that AI cannot diagnose, acknowledge, select a direction, approve, route, accept, reject, confirm or close work.
- The existing reviewer-role and draft-status controls remain authoritative inputs to the unchanged controller. The approved acceptance disposition, Correct, Reject and Discard are now equally styled radio choices with no default; correction retains its existing required note.
- Stale and unavailable output retains the existing complete manual route. Unsupported source links remain controller-blocked and the UI does not add a user-editable source-verification control.
- Successful review shows `EVT-20`, the selected human reviewer, source/version context and a clearly labelled non-persisted local display time only after the controller allows the disposition. No canonical state changes and the AI-01 return remains the approved Sprint 6B source-based review deferral.
- Four focused story tests were added. TypeScript lint passed; all 59 Node tests passed; the Vite production build passed after the required sandbox-permission retry; and browser checks passed for AI-01 approval, AI-02 unavailable/rejected fallback, no default disposition, controller-gated success, clean console and 1440×900, 1024×768, 720×450 and 390×844 layouts without horizontal overflow.
- Native radios, labels and unselected dispositions were confirmed in the rendered DOM. Physical keyboard traversal and actual browser zoom remain final whole-prototype regression checks because the browser automation layer does not reliably dispatch native keyboard changes.
- No controller, fixture, route definition, workflow state, audit meaning, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-06` is the next recommended refinement target.

### 2026-07-27 — COS-6B-06 trace readability clarified

- SCR-09 now frames the approved fixture as representative synthetic history, not a live session audit log. The compact header and filter context preserve the table as the primary review surface.
- Every approved row now exposes timezone-aware time, event identifier and outcome, actor or source, source/version reference and text category. The active filter and matching represented-entry count derive from the same filtered collection; a defensive empty treatment is included for future approved zero-result filters.
- No linked-evidence, row-detail or correction-chain controls were added because no approved synthetic evidence supports them. The append-only, read-only and no-edit/delete/workflow boundary remains explicit.
- Four focused story tests were added. TypeScript lint passed; all 63 Node tests passed; the Vite production build passed after the required sandbox-permission retry; and browser inspection confirmed full attribution, Exception-filter alignment, no page overflow and a clean console at the available desktop viewport. CSS provides labelled stacked rows at narrow widths; actual browser zoom, physical narrow-width and keyboard verification remain final whole-prototype regression checks.
- No controller, fixture, route definition, workflow state, audit meaning, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-07` is the next recommended refinement target.

### 2026-07-27 — Prototype journey layout corrected and COS-6B-07 confirmation/closure clarified

- The compact Prototype journey dialog now uses full-width native navigation buttons in a two-column wide layout and a one-column narrow layout. This fixes unused space without changing the dialog's focus management, explicit simulated handoff, navigation authority or no-workflow-action boundary.
- SCR-10 now identifies the approved fixture-represented accepted-referral scenario before the Care Coordinator task, then provides a read-only evidence-by-evidence summary of current detail, accountable owner, source/reference and text status. Existing verification inputs and deterministic gates remain authoritative.
- Scoped closure is shown only as a lower-emphasis future step before confirmation. After the existing confirmation controller succeeds, the screen retains separate `EVT-16` feedback and reveals the separate controller-gated scoped-closure action; closure continues to have no automatic inference or completion path.
- Four focused SCR-10 tests and one journey-layout test were added. TypeScript lint passed; all 68 Node tests passed; the Vite production build passed after the required sandbox-permission retry; and browser checks confirmed the journey layout, blocked/allowed confirmation gate, post-confirmation scoped-closure availability, clean console and no page overflow at the available desktop viewport. Actual browser zoom, physical narrow-width and keyboard verification remain final whole-prototype regression checks.
- No controller, fixture, route definition, workflow state, audit meaning, authority, authentication mechanism, persistence, dependency, external integration or AI-safety control changed. `COS-6B-08` remains pending evidence-preview mapping and interaction readiness.
