# Screen Specifications and Low-Fidelity Wireframe Pack

## Purpose and status

This is a pre-development specification for the synthetic clickable prototype. It translates the approved Sprint 1–4 baseline and Sprint 5 requirements into planned screen behaviour. It does not claim that any screen, integration, animation or AI service has been built or tested.

The pack was completed in three reviewable groups and now covers `SCR-01` to `SCR-10`. It remains a planned specification until the Sprint 5 Part 3 readiness decision.

## Shared visual and story treatment

The approved synthetic tracer patient is **Asha Mehta** (`SYN-PAT-1001`), age 48. Her abdominal-ultrasound episode is the single workflow thread represented by this prototype. The interface shall label the case as synthetic wherever patient context is shown.

Each main workflow screen may include one reusable, compact right-side **Asha journey rail**. It is supporting context, not a primary control or source record. It shows a non-photorealistic avatar or line illustration, the current story phase in a text-labelled progress sequence, one sentence of source-linked workflow context, and the visible next workflow action.

The rail must not include real-person imagery, diagnostic interpretation, an ambient transcription, a treatment recommendation or a new AI capability. It must not compete with the current state, accountable owner, source evidence or required human action. On narrower screens, it moves below the primary action area. Optional non-essential visual transitions are disabled by `prefers-reduced-motion`; no motion communicates a clinical status, approval or error.

The rail uses narrative phases only: `Order`, `Diagnostic progress`, `Result`, `Clinical review`, `Human direction`, `Handoff` and `Confirmed next step`. These are not canonical workflow states. Every screen continues to show the exact canonical state separately and more prominently. The rail uses the same width, stage order, avatar treatment and label hierarchy on every desktop screen; on narrow screens it moves below the primary task without changing reading order. Decorative artwork has empty alternative text, while the phase, current state and next action remain available as text.

```text
Story phases: Order → Diagnostic progress → Result → Clinical review → Human direction → Handoff → Confirmed next step
Canonical state: shown separately using the approved state vocabulary
```

## Shared interaction and accessibility rules

- Statuses use text and icons/shapes as well as colour.
- Critical controls are native, keyboard-operable and visibly focused; a 44px target is preferred.
- Source evidence, internal workflow evidence, AI output and human decisions are visibly distinct.
- A failure preserves the last verified state, explains the known condition in plain language and names the safe next action/owner.
- The primary action names the actual workflow action. Generic `Continue` is not used.
- A high-risk action shows its actor, applicable source/version and recorded evidence before confirmation. The confirmation does not replace source review.

## Traceability interpretation

Each screen distinguishes:

- **RTM-primary requirements** — requirements whose planned screen in the Requirements Traceability Matrix is this screen;
- **supporting controls** — requirements enforced or displayed on the screen but owned by another primary screen or applied across the prototype; and
- **acceptance criteria** — explicit atomic `AC-*` references from the acceptance-criteria catalogue.

This prevents supporting visibility from silently changing the RTM’s primary screen assignment. User stories and technical requirements remain visible in the RTM-primary list where assigned.

---

## SCR-01 — Simulated SMART launch and access status

| Item | Specification |
|---|---|
| Purpose | Start the simulated clinician-only launch and make access outcome clear before protected context is displayed. |
| RTM-primary requirements | FR-01; FR-02; NFR-03; NFR-06; TR-01. |
| Supporting controls | BR-01; NFR-01; NFR-04; NFR-05; NFR-07; NFR-09. |
| Acceptance criteria | AC-FR-01-01 to AC-FR-01-02; AC-FR-02-01 to AC-FR-02-02; AC-NFR-01-01 to AC-NFR-01-02; AC-NFR-03-01 to AC-NFR-03-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03; AC-NFR-09-01 to AC-NFR-09-02. |
| Authorised actors | Clinic physician. Product/platform administrator may view the represented technical condition and support route. |
| Entry state | Pre-episode launch; no workflow state is created by opening this screen. |
| Primary action | `Start authorised simulated launch`. |
| Success outcome | Verified minimum context opens `SCR-02`. |
| Failure outcome | Protected retrieval stops. No patient or episode context is displayed; the represented condition and support route remain visible. |
| Audit evidence | EVT-01 `smart.launch.context_received`; EVT-02 `smart.authorization.completed`; EVT-03 `source.resource.retrieved`. |

### Visible information and source boundary

| Field or element | Source / rule | Missing or failure behaviour |
|---|---|---|
| `Synthetic prototype` label | Prototype boundary | Always visible. |
| Signed-in clinician display and role | FM-03; simulated SMART `fhirUser` context | Missing or mismatched role stops protected retrieval. Do not infer authority. |
| Access mode | Simulated EHR/SMART launch context | State that this is simulated and read-only. |
| Requested/granted read-only scopes | Approved Sprint 4 candidate scope set | Authorisation denial shows no protected patient context. |
| Launch / authorisation / retrieval status | EVT-01 to EVT-03 | Use explicit text: Ready, authorisation denied, expired, unavailable or incomplete context. |
| Support route | Sprint 4 SMART recovery rules | Name Product/platform administrator or accountable source/access owner. |

### Permitted actions and validation

- The Clinic physician may start launch and view the access result.
- Retry is available only after the represented access condition is resolved or a new authorised session begins.
- No role may enter, select or infer a patient, encounter, endpoint, scope or credential.
- No raw token, secret, full authorisation response or protected source data is displayed or retained.

### Planned states

| State | Presentation and safe behaviour |
|---|---|
| Ready | Explain that the simulated launch will retrieve minimum read-only synthetic context. |
| Loading | Show a labelled, non-blocking loading state for launch, authorisation and retrieval; no animated clinical signal. |
| Authorised | Show a concise success message and open `SCR-02` only after minimum context and linkage checks pass. |
| Denied / expired / endpoint unavailable | Show the condition, last verified safe state, support owner and safe retry condition. Do not show Asha data. |
| Invalid or incomplete launch context | Stop protected retrieval and route to the accountable human/source review. Do not attach an episode. |

### Low-fidelity wireframe

```text
┌────────────────────────────────────────────────────────────────────┐
│ ContinuumOS                                      Synthetic prototype │
│ Simulated clinician launch                                             │
├────────────────────────────────────────────────────────────────────┤
│ Signed in: Synthetic Clinic Physician · SYN-PRAC-3001                 │
│ Access: Simulated EHR SMART launch · Read-only source context         │
│                                                                        │
│ [ Start authorised simulated launch ]                                 │
│                                                                        │
│ Launch status                                                         │
│ ○ Ready — no protected patient context has been retrieved yet         │
│                                                                        │
│ What happens next                                                     │
│ Verify authorised synthetic context, then open the episode workspace. │
│                                                                        │
│ Support: Product/platform administrator                               │
└────────────────────────────────────────────────────────────────────┘
```

The Asha journey rail is deliberately absent until authorised minimum context has been retrieved and linkage has passed.

---

## SCR-02 — Episode workspace and timeline

| Item | Specification |
|---|---|
| Purpose | Give authorised operational users one reliable view of the active synthetic episode: current state, verified linkage, owner, age, blocker, next task and ordered evidence. |
| RTM-primary requirements | BR-01; FR-04; FR-05; FR-07; FR-17; FR-18; FR-19; FR-20; TR-02; US-01; US-03; US-05. |
| Supporting controls | FR-03; FR-21; FR-31; FR-32; NFR-02; NFR-04; NFR-05; NFR-06; NFR-07. |
| Acceptance criteria | AC-FR-03-01 to AC-FR-03-02; AC-FR-04-01 to AC-FR-04-02; AC-FR-05-01 to AC-FR-05-02; AC-FR-07-01 to AC-FR-07-02; AC-FR-17-01 to AC-FR-17-02; AC-FR-18-01 to AC-FR-18-02; AC-FR-19-01 to AC-FR-19-02; AC-FR-20-01 to AC-FR-20-02; AC-FR-21-01 to AC-FR-21-02; AC-FR-31-01 to AC-FR-31-03; AC-FR-32-01 to AC-FR-32-03; AC-NFR-02-01 to AC-NFR-02-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03. |
| Authorised actors | Care Coordinator and role-authorised operational users. This is separate from the clinician-only SMART launch path. |
| Entry state | Any active core state; only the current verified state is displayed. |
| Primary action | Role-aware: Care Coordinator uses `View assigned review task`; the assigned Clinic physician uses `Open current result review`. |
| Success outcome | User opens an authorised next-work screen without changing state merely by viewing the workspace. |
| Failure outcome | Missing or uncertain evidence routes to `SCR-07`; no state advance or silent episode attachment. |
| Audit evidence | EVT-04 to EVT-22 are viewable as ordered evidence; no audit event is created merely by opening the screen unless the later implementation records access. |

### Required layout and hierarchy

1. Header: synthetic patient/episode context, current canonical state, verified-linkage status and primary next action.
2. Operational summary: accountable owner, age/due context, blocker and next task.
3. Workflow milestone strip: order, operational progress, result availability and review task. Operational completion and result availability remain visibly distinct.
4. Source-linked evidence and internal workflow evidence in separate panels.
5. Asha journey rail at the right, or below on a narrow screen.

### Visible information and source boundary

| Field or element | Source / rule | Missing or failure behaviour |
|---|---|---|
| Asha Mehta, synthetic identifier, age | FM-01; approved tracer case | Label as synthetic. Uncertain linkage routes to `Patient Match Failed`; do not show a valid attached episode. |
| Encounter reference and status | FM-02 | Missing verification routes to `Encounter Missing`. |
| Current canonical state | FM-16 | Show text label, not colour alone. Only approved state is shown. |
| Linkage status and source references | FM-13; EVT-04 | Display verified, uncertain or missing with supporting evidence reference. |
| Order ID, ultrasound context and source status | FM-04 to FM-07 | Missing/conflicting order remains pending or exception; do not infer acceptance/scheduling. |
| Acceptance, scheduling and completion evidence | FM-05A; FM-08 | Keep each operational milestone separate. Completion does not mean result available. |
| Current report status and version | FM-11, FM-12, FM-14 | Incomplete/conflicting evidence routes to `Result Incomplete`; a changed version makes dependent work visibly stale. |
| Owner, age/due, blocker and next task | FM-18, FM-19 | Missing/unavailable owner or overdue work creates visible escalation/exception work. |
| Ordered evidence timeline | FM-24 | Source records are read-only; internal task/audit evidence is labelled separately. |

### Permitted actions and validation

- Care Coordinator may view, filter and open authorised operational work or exception detail.
- Care Coordinator cannot acknowledge a result, choose clinical direction, reconcile identity, accept a referral or close the episode from this screen.
- `Open current result review` is shown only to the assigned Clinic physician after the fixture-specific Result Available evidence rule passes and a current-version review task exists. Other roles see `View assigned review task`.
- An amended report version marks prior dependent work as stale and opens the appropriate human reassessment route; it does not transfer acknowledgement.

### Asha journey rail for this screen

```text
ASHA MEHTA — SYNTHETIC CASE
Story phases: Order → Diagnostic progress → [Result]
   Current work: clinical review assigned to Clinic physician.
   Next: clinician reviews the current report version.
```

Use a small neutral avatar and a report/diagnostic icon only. It is not a patient photo, clinical interpretation or AI output.

### Low-fidelity wireframe

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ ContinuumOS · Care coordination                           Synthetic prototype │
│ Asha Mehta · SYN-PAT-1001 · Encounter SYN-ENC-2001                           │
│ STATE: Clinical Review Pending       Linkage: ✓ Verified                       │
├───────────────────────────────────────────────┬──────────────────────────────┤
│ Next action                                   │ ASHA'S JOURNEY                │
│ Review current report                         │ Order → Completed → [Result]  │
│ Owner: SYN-PRAC-3001 · Age: calculated        │ Current: review assigned      │
│ [ View assigned review task ]                 │ Next: clinician review        │
├───────────────────────────────────────────────┼──────────────────────────────┤
│ Workflow evidence                             │ Episode health                │
│ Order created ✓   Completion ✓                │ Owner: SYN-PRAC-3001          │
│ Result available ✓  Version: 1                │ Blocker: none                 │
│ Review task: assigned                          │ Due threshold: pending OQ-01  │
├───────────────────────────────────────────────┴──────────────────────────────┤
│ Source evidence (read-only)       Internal workflow evidence                  │
│ Order / report references          Task, state history and audit events       │
│ [View ordered timeline]            [View exception details if applicable]     │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SCR-03 — Result review and acknowledgement

| Item | Specification |
|---|---|
| Purpose | Enable the authorised Clinic physician to review the current source diagnostic report and explicitly acknowledge that exact current version. |
| RTM-primary requirements | BR-02; FR-06; FR-21; FR-25; FR-31; FR-32; NFR-08; US-04. |
| Supporting controls | BR-04; FR-05; NFR-04; NFR-05; NFR-06; NFR-07. |
| Acceptance criteria | AC-FR-05-01 to AC-FR-05-02; AC-FR-06-01 to AC-FR-06-02; AC-FR-21-01 to AC-FR-21-02; AC-FR-25-01 to AC-FR-25-02; AC-FR-31-01 to AC-FR-31-03; AC-FR-32-01 to AC-FR-32-03; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03; AC-NFR-08-01 to AC-NFR-08-03. |
| Authorised actor | Clinic physician only for acknowledgement. Other roles do not receive the acknowledgement control. |
| Entry state | `Result Available`, `Clinical Review Pending`, `Result Acknowledged` or `Amended Result Received`, as applicable to the current version. |
| Primary action | `Acknowledge current report version`. |
| Success outcome | Records acknowledgement actor, time, review evidence and current report version; opens follow-up work on `SCR-04`. |
| Failure outcome | `Result Incomplete`, clinician-unavailable or stale-version handling routes to `SCR-07`; no acknowledgement is recorded. |
| Audit evidence | EVT-07 report available; EVT-08 amended/corrected report; EVT-09 review assignment; EVT-10 acknowledgement; EVT-20 only if a separately opened optional AI summary is reviewed. |

### Required layout and hierarchy

1. State and safety header: report status, current version, source/provenance, assigned physician and any amended/stale warning.
2. Source report panel: the minimum source-linked report information needed for review; source remains read-only.
3. Review task panel: assignment, age/due context and the explicit human acknowledgement control.
4. Optional AI summary entry point: visually secondary, clearly labelled `AI-generated orientation draft`, with source links, uncertainty and manual fallback. It cannot acknowledge or decide clinical direction.
5. Asha journey rail: simple consultation context, current story phase and next action—not an ambient transcription or diagnosis.

### Visible information and source boundary

| Field or element | Source / rule | Missing or failure behaviour |
|---|---|---|
| Synthetic patient and confirmed encounter context | FM-01, FM-02, FM-13 | If linkage is no longer verified, stop action and route to reconciliation. |
| Diagnostic report ID, source status, current version and last updated time | FM-11, FM-12 | Missing or non-accepted current status prevents Result Available/acknowledgement. |
| Order link and required result-reference evidence | FM-14 | Missing/conflicting configured references route to `Result Incomplete`. |
| Source-linked supporting observations where configured | FM-09, FM-10 | Presence alone is not sufficient result evidence. Do not infer clinical meaning. |
| Reporting professional/source reference | FM-15 | Missing context is visible; it does not grant authority. |
| Assigned physician, task age/due and review status | FM-03, FM-18, FM-20 | Missing owner or stale version remains visible and routes to the appropriate exception. |
| Prior acknowledgement and amendment history | FM-11, FM-24 | Prior acknowledgement is historical only; never silently transfers to a new report version. |
| Optional AI summary draft | FM-25; BR-04 | Unavailable, stale or unsupported draft falls back to source-based human review without blocking acknowledgement. |

### Permitted actions and validation

- Only the assigned/authorised Clinic physician may acknowledge the current report version.
- Before confirmation, the screen displays the action, report ID/version, source reference, physician identity and timestamp to be recorded.
- The acknowledgement control is disabled with a plain-language reason when linkage, current-version, report-status, required-reference or authority evidence is invalid.
- Acknowledgement never means diagnosis, referral approval or patient communication.
- A changed report version produces a high-visibility `New version requires review` notice and returns work to `Clinical Review Pending`. Prior acknowledgement remains in the audit history.
- The optional AI summary may be opened, corrected, rejected, discarded or ignored. It has no direct state effect and cannot be used as acknowledgement evidence.

### Planned states

| State | Presentation and safe behaviour |
|---|---|
| Ready for review | Current report source/version, assigned physician and explicit acknowledgement action are visible. |
| Acknowledged current version | Show actor/time/version and the resulting `Follow-up Decision Required` work; do not imply a clinical outcome. |
| Amended/corrected | Show new version, prior-version history and reassessment flags. Require fresh review; do not auto-cancel or resend downstream actions. |
| Result incomplete | Explain which evidence is missing or inconsistent, name the accountable source/human route and block acknowledgement. |
| Stale review task / clinician unavailable | Preserve source evidence and create visible exception/escalation work. |
| AI unavailable or stale | Show the AI condition in its secondary panel and keep source-based human review fully usable. |

### Asha journey rail for this screen

```text
ASHA MEHTA — SYNTHETIC CASE
Order → Diagnostic completed → Result available → [Clinical review]
Context: clinic physician is reviewing the current ultrasound report version.
Next: human acknowledgement, then a human follow-up direction.
```

The rail may use a small neutral line illustration of a clinician reviewing a report with a patient-context icon. It must not depict or claim a live ambient conversation, captured audio, transcription or diagnostic interpretation.

### Low-fidelity wireframe

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE                     STATE: Clinical Review Pending│
│ Current report: SYN-DR-6001 · Version 1 · Status: final · Read-only            │
├───────────────────────────────────────────────┬──────────────────────────────┤
│ Current source report                          │ ASHA'S JOURNEY                │
│ Source: Diagnostic system · Reported by: ...   │ Result available → [Review]   │
│ Required references: ✓ Complete                │ Next: human acknowledgement   │
│ [View source-linked evidence]                  │ (neutral consultation icon)   │
├───────────────────────────────────────────────┼──────────────────────────────┤
│ Review task                                    │ Optional assistance            │
│ Assigned to: SYN-PRAC-3001 · Age: calculated   │ AI-generated orientation draft │
│ Report version to acknowledge: 1               │ Source links · uncertainty     │
│ [ Acknowledge current report version ]         │ [Review draft]                 │
├───────────────────────────────────────────────┴──────────────────────────────┤
│ Confirmation records SYN-PRAC-3001, report version 1, source reference/time. │
│ This does not make a diagnosis or choose the next care direction.             │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SCR-04 — Follow-up direction

| Item | Specification |
|---|---|
| Purpose | Enable the Clinic physician to record the required, human-controlled direction after acknowledging the current report version. |
| RTM-primary requirements | BR-02; FR-08; FR-29; NFR-08; US-01. |
| Supporting controls | FR-22; NFR-04; NFR-05; NFR-06; NFR-07. |
| Acceptance criteria | AC-FR-08-01 to AC-FR-08-02; AC-FR-22-01 to AC-FR-22-02; AC-FR-29-01 to AC-FR-29-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03; AC-NFR-08-01 to AC-NFR-08-03. |
| Authorised actors | Clinic physician records the human follow-up direction. For clinic management only, the Care Coordinator verifies the non-clinical T08 evidence and records `Next Step Confirmed`; the Care Coordinator cannot choose or alter the direction. |
| Entry state | `Follow-up Decision Required`. `Result Acknowledged` is the immediately preceding state and remains visible as linked history. |
| Primary action | Role-aware: Clinic physician uses `Record follow-up direction`; for a clinic-management direction, Care Coordinator then uses `Verify T08 evidence and record Next Step Confirmed`. Referral/escalation direction uses T09. |
| Success outcome | The Clinic physician's complete clinic-management direction remains attributable; after Care Coordinator verification of the required T08 evidence, `Next Step Confirmed` is recorded and `SCR-10` opens in closure mode. Day-care referral or hospital escalation records EVT-11/T09, creates `Referral Created` and opens `SCR-05`. |
| Failure outcome | Missing acknowledgement, stale report version, missing authority or missing required evidence remains pending or opens `SCR-07`. |
| Audit evidence | EVT-11 `care.direction.recorded`. |

### Required layout and source boundary

The header must show the acknowledged report ID/current version, acknowledgement actor/time, current state, and the Clinic physician who may act. The source report remains read-only. A direction is a recorded human decision, not a clinical recommendation from ContinuumOS or AI.

| Field or element | Source / rule | Missing or failure behaviour |
|---|---|---|
| Current report ID/version and acknowledgement evidence | FM-11, FM-20; FR-06 | Stale, missing or amended version blocks direction and creates review/reassessment work. |
| Available directions | FR-08; DR10 | Show only: clinic management, day-care referral and hospital escalation. No option is preselected. |
| Direction rationale/evidence reference | FM-20; EVT-11 | Required before recording; it does not turn the prototype into a diagnostic decision-support tool. |
| Clinic-management owner, timeframe and next task | FM-22; FR-22 | Missing evidence prevents `Next Step Confirmed`; route to the appropriate safe action. |
| Clinic-management communication / applicable confirmation evidence | FM-26; FR-22; FR-24 | Required for T08 according to pathway policy. Sent/delivered alone cannot be promoted to explicit confirmation. |
| Referral/escalation route | Approved direction in EVT-11 | Creates visible `Referral Created` work; it does not send a referral or establish receiving acceptance. |

### Permitted actions and validation

- Only the Clinic physician may record one of the three approved directions. The Care Coordinator may verify T08 evidence only after the Clinic physician has selected clinic management; this verification never changes the selected direction.
- The direction record shows the selected direction, acknowledged report version, evidence reference, actor and timestamp before confirmation. The separate T08 verification shows the named owner, timeframe, next task and applicable communication/confirmation evidence before `Next Step Confirmed` is recorded.
- AI cannot choose, rank, recommend, approve or infer a direction or urgency.
- Clinic management is not a default selection. T08 remains in `Follow-up Decision Required` until the Clinic physician has recorded the direction and the Care Coordinator has verified the named clinic owner, timeframe, next task and applicable communication/confirmation evidence.
- Referral and hospital-escalation selections use T09 and do not require receiving-response evidence on this screen.
- A high-risk confirmation records EVT-11 once. Repeated submission returns the original outcome rather than creating duplicate direction evidence.
- The low-fidelity wireframe's `Record direction` control represents the Clinic physician's action. For clinic management, the implemented screen must also show the distinct Care Coordinator T08 verification control; it remains disabled until the required non-clinical evidence is complete.

### Asha journey rail

```text
ASHA MEHTA — SYNTHETIC CASE
Result acknowledged → [Human direction] → Handoff / clinic follow-up
Current work: Clinic physician decides the next workflow route.
Next: prepare the selected path; no route is chosen by AI.
```

### Low-fidelity wireframe

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE        STATE: Follow-up Decision Required        │
│ Current report: SYN-DR-6001 · version 1 · acknowledged by SYN-PRAC-3001       │
├────────────────────────────────────────────────────┬─────────────────────────┤
│ Record human follow-up direction                    │ ASHA'S JOURNEY           │
│ ( ) Clinic management                               │ Review → [Direction]     │
│ ( ) Day-care referral                               │ Next: human-owned route  │
│ ( ) Hospital escalation                             │                         │
│                                                     │                         │
│ Rationale / source evidence reference [__________] │                         │
│ If clinic management: owner [____] timeframe [____]│                         │
│ next task [____] communication evidence [________] │                         │
│                                                     │                         │
│ [ Record direction — disabled until applicable evidence is complete ]        │
├────────────────────────────────────────────────────┴─────────────────────────┤
│ Recording captures physician, report version, selected direction, evidence   │
│ and time. It does not make a diagnosis or route a referral automatically.    │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SCR-05 — Referral handoff preparation and routing

| Item | Specification |
|---|---|
| Purpose | Enable the Referral Coordinator to prepare, review and route an operationally complete handoff only after a human-approved referral or hospital-escalation direction. |
| RTM-primary requirements | BR-02; FR-09; NFR-08; US-06. |
| Supporting controls | BR-04; FR-16; NFR-04; NFR-05; NFR-06; NFR-07. |
| Acceptance criteria | AC-FR-09-01 to AC-FR-09-02; AC-FR-16-01 to AC-FR-16-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03; AC-NFR-08-01 to AC-NFR-08-03. |
| Authorised actors | Referral Coordinator prepares, approves for operational use and routes the package. Clinic physician separately approves clinically contextual content where applicable. |
| Entry state | `Referral Created`. |
| Primary action | `Route approved handoff`. |
| Success outcome | Records routing evidence and opens response tracking on `SCR-06`; state remains `Referral Created` pending a receiving-team response. |
| Failure outcome | Missing direction, required field, required approval or failed send remains visible for safe human correction/retry. No automatic reroute or assumed acceptance. |
| Audit evidence | EVT-12 `referral.package.created`; EVT-13 `referral.sent`; EVT-20 only for an optional AI draft/review disposition. |

### Required layout and source boundary

Separate source-linked clinical/context evidence from the internal handoff package. The package is an operational artefact, not a source-record update and not receiving acceptance. The optional AI referral-handoff draft is visually secondary, labelled as a draft, and is unusable before the approved direction exists.

| Field or element | Source / rule | Missing or failure behaviour |
|---|---|---|
| Approved direction and acknowledged report version | FM-20; EVT-11 | Package preparation unavailable before approved referral/escalation direction or with stale version evidence. |
| Destination, required fields, readiness and route time | FM-21 | Missing fields remain visible and prevent routing. |
| Referral Coordinator owner and approval evidence | FM-18, FM-21; DR13 | Missing operational approval prevents route. |
| Clinically contextual content approval, if applicable | DR14 | Physician approval is distinct from Referral Coordinator package approval. Missing approval blocks the affected content/package. |
| Optional source-linked AI handoff draft | FM-25; DR12 | Show draft status, provenance summary and an `Open AI draft review` link to `SCR-08`. Correction/rejection occurs in one review surface; AI never creates, approves or sends the package. |
| Route/delivery attempt | EVT-13 | Failed send remains unresolved with a safe human retry or alternate route; it does not imply delivery or acceptance. |

### Permitted actions and validation

- Referral Coordinator may prepare and approve the operational package after approved direction.
- The Clinic physician may approve clinically contextual content only where applicable; this does not replace the Referral Coordinator’s package approval.
- Before route confirmation, show package ID/version, destination, required-field completeness, source evidence references, approving actor and sender.
- Routing creates a single EVT-13 record. A duplicate send action must not resend automatically.
- No actor may use this screen to approve a referral decision, accept on behalf of the receiving team, change source clinical records or let AI send the handoff.

### Asha journey rail

```text
ASHA MEHTA — SYNTHETIC CASE
Human direction → [Handoff preparation] → Receiving-team response
Current work: Referral Coordinator prepares the approved route.
Next: route a complete, human-approved package for receiving-team review.
```

### Low-fidelity wireframe

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE                  STATE: Referral Created          │
│ Human direction: Day-care referral · Report: SYN-DR-6001 version 1            │
├───────────────────────────────────────────────┬──────────────────────────────┤
│ Handoff package                                │ ASHA'S JOURNEY                │
│ Destination                 [____________]     │ Direction → [Handoff]         │
│ Required fields             ✓ / ! missing      │ Next: receiving response      │
│ Package owner: Referral Coordinator            │                              │
│ Clinical content approval: [if applicable]     │                              │
│                                                │                              │
│ Optional assistance                             │                              │
│ AI handoff draft — source-linked, review only  │                              │
│ [Open AI draft review]                         │                              │
│                                                │                              │
│ Missing: destination                            │                              │
│ [ Route approved handoff — disabled ]          │                              │
├───────────────────────────────────────────────┴──────────────────────────────┤
│ Route records package/version, destination, sender and send attempt. It does │
│ not mean the receiving team has accepted the referral.                         │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SCR-06 — Receiving response

| Item | Specification |
|---|---|
| Purpose | Record or display the receiving team’s formal acceptance or rejection, keeping response authority, destination, timeframe and recovery work explicit. |
| RTM-primary requirements | BR-02; FR-10; FR-27; US-07. |
| Supporting controls | NFR-04; NFR-05; NFR-06; NFR-07; NFR-08. |
| Acceptance criteria | AC-FR-10-01 to AC-FR-10-02; AC-FR-27-01 to AC-FR-27-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03; AC-NFR-08-01 to AC-NFR-08-03. |
| Authorised actors | Receiving team records acceptance/rejection. Referral Coordinator may track or record received evidence, but cannot decide on the receiving team’s behalf. |
| Entry state | `Referral Created`; `Referral Accepted`; `Referral Rejected`. |
| Primary action | Contextual: an authorised receiving-team user uses `Record receiving response`; a Referral Coordinator uses `Record received response evidence` and must identify the receiving-team decision actor/source. |
| Success outcome | Acceptance opens `SCR-10` when confirmation evidence is ready. Rejection records its reason and returns visible work to `SCR-04`. |
| Failure outcome | Missing receiving authority/evidence remains pending; no automatic redirect, alternative selection or state advance occurs. |
| Audit evidence | EVT-14 `receiving.response.recorded`. |

### Required layout and source boundary

The screen presents the routed package/send evidence separately from the receiving response. It must make clear that a referral being sent is not accepted and that receiving-team acceptance is distinct from specialist review.

| Field or element | Source / rule | Missing or failure behaviour |
|---|---|---|
| Package/send reference and destination | FM-21; EVT-12/EVT-13 | Missing valid route/package evidence prevents response recording. |
| Receiving-team decision actor/role | FM-20; DR11 | Required for the human acceptance/rejection decision. Missing authority remains pending. |
| Recording actor/source | FM-20; audit actor contract | Required when the Referral Coordinator records response evidence received from the team. It remains distinct from the receiving-team decision actor. |
| Response | EVT-14 | Use explicit acceptance or rejection choices. No default selection. |
| Destination and timeframe on acceptance | FM-21; FR-10 | Required before an acceptance outcome can be recorded. |
| Rejection reason | EVT-14; FR-27 | Required for rejection; preserve original package and send history. |
| Return work after rejection | FR-27 | Return to `Follow-up Decision Required` on `SCR-04` for a new Clinic physician decision. Never auto-reroute. |

### Permitted actions and validation

- An authorised receiving-team user can record acceptance or rejection with the required evidence.
- The Referral Coordinator may view/track the response and record received evidence only within the represented role boundary; the response remains attributed to the receiving team.
- Before recording, a high-risk confirmation shows response, receiving-team decision actor, recording actor where different, package/version, destination and acceptance timeframe or rejection reason.
- A changed response is a linked correction, not destructive replacement of prior history.
- Acceptance does not itself confirm the next step or close the episode. Required owner, timeframe, communication and other applicable confirmation evidence are handled on `SCR-10`.

### Asha journey rail

```text
ASHA MEHTA — SYNTHETIC CASE
Handoff routed → [Receiving response] → Next step confirmation
Current work: receiving team responds to the human-approved package.
Next: confirm accountable follow-up only after applicable evidence exists.
```

### Low-fidelity wireframe

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE                  STATE: Referral Created          │
│ Routed package: [internal package reference] · Destination: Day-care service  │
├───────────────────────────────────────────────┬──────────────────────────────┤
│ Receiving-team response                        │ ASHA'S JOURNEY                │
│ Receiving decision actor   [____________]      │ Handoff → [Response]          │
│ Recording actor/source     [____________]      │                              │
│ ( ) Accept                                  │ Next: confirm accountable step│
│     Destination            [____________]      │                              │
│     Timeframe              [____________]      │                              │
│ ( ) Reject                                    │                              │
│     Reason                 [____________]      │                              │
│                                                │                              │
│ [ Record receiving response ]                 │                              │
├───────────────────────────────────────────────┴──────────────────────────────┤
│ Acceptance opens next-step confirmation when ready. Rejection returns work to │
│ the Clinic physician; it never redirects Asha automatically.                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SCR-07 — Exception queue and exception detail

| Item | Specification |
|---|---|
| Purpose | Make material workflow failures visible, owned and recoverable without silently attaching, advancing or closing Asha’s episode. |
| RTM-primary requirements | BR-03; FR-03; FR-12; FR-13; NFR-03; NFR-06; TR-02; US-02; US-03; US-05. |
| Supporting controls | FR-02; NFR-04; NFR-05; NFR-07. |
| Acceptance criteria | AC-FR-02-01 to AC-FR-02-02; AC-FR-03-01 to AC-FR-03-02; AC-FR-12-01 to AC-FR-12-02; AC-FR-13-01 to AC-FR-13-02; AC-NFR-03-01 to AC-NFR-03-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03. |
| Authorised actors | Care Coordinator; the accountable exception-specific role; Product/platform administrator for represented technical conditions. |
| Entry state | Approved exception states or represented operational conditions, including `Patient Match Failed`, `Encounter Missing`, `Result Incomplete`, `Duplicate Event Suspected`, `Clinician Unavailable` and integration failure. |
| Primary action | `Record verified resolution`—only when the accountable role has met the safe-return condition. |
| Success outcome | Verified resolution returns to the last verified safe core-work screen. |
| Failure outcome | Unresolved or failed reconciliation stays open with no workflow progression. |
| Audit evidence | EVT-04 linkage evidence; EVT-19 deterministic exception detection; EVT-21 recovery/reconciliation. |

### Required layout and validation

Every exception detail must show its reason, affected work, accountable owner, prohibited action, source/evidence references, safe action and safe-return condition. A Care Coordinator coordinates work but does not gain clinical, identity, referral, financial or closure authority.

| Condition | Safe action and return rule |
|---|---|
| Patient / encounter linkage uncertain | Identity reconciliation reviewer verifies or rejects attachment. After verified resolution, return through `SCR-02` to the last verified core state; no valid episode attachment before verification. |
| Result incomplete or conflicting | Diagnostic operations/source owner resolves evidence. Return to `Result Available` only after T04 passes; show the valid current state in `SCR-02`, then permit assigned review on `SCR-03`. |
| Duplicate event suspected | Preserve duplicate/replay evidence and investigate. Return through `SCR-02` to the verified originating state; never create a second state advance. |
| Clinician unavailable / missing owner | Authorised clinical escalation owner records approved coverage. Return to the applicable `Clinical Review Pending` or `Follow-up Decision Required` task through `SCR-02`; only the authorised physician action opens `SCR-03` or `SCR-04`. |
| Integration unavailable / failed write | Preserve last verified state and failure evidence. Product/platform administrator verifies recovery before reprocessing, then return to the exact calling/core screen recorded by the exception. |

- A represented deterministic rule may create/refresh exception work but cannot make a clinical, referral, financial or closure decision.
- `Record verified resolution` is unavailable until the safe-return condition and accountable actor are present.
- Recovery evidence must identify the affected event, source verification, actor, time, resolution and linked correction/supersession where applicable.
- Duplicate, retry and recovery states are separately labelled; an error is never shown only through colour or a transient toast.

### Asha journey rail and wireframe

```text
ASHA MEHTA — SYNTHETIC CASE
… → [Journey paused: needs review] → return to last verified step
Current work: resolve the evidence gap safely; no care decision is implied.
```

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE          EXCEPTION: Result Incomplete             │
│ Affected work: Current report SYN-DR-6001 version 1 cannot be acknowledged    │
├─────────────────────────────────────────────────┬────────────────────────────┤
│ Reason and evidence                              │ ASHA'S JOURNEY              │
│ Missing configured result reference              │ Journey paused              │
│ Owner: Diagnostic operations / source owner      │ Return: result review       │
│ Safe action: verify source evidence              │                            │
│ Prohibited: acknowledge or advance workflow      │                            │
│ Safe return: current report passes evidence rule │                            │
│ [ Record verified resolution ]                   │                            │
├─────────────────────────────────────────────────┴────────────────────────────┤
│ Audit: rule/event, source version, owner, last verified state and recovery.  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SCR-08 — AI draft review

| Item | Specification |
|---|---|
| Purpose | Let authorised people review either approved assistive draft with visible provenance, uncertainty and a manual fallback. |
| RTM-primary requirements | BR-04; FR-15; FR-16; US-06. |
| Supporting controls | NFR-04; NFR-05; NFR-06; NFR-07. |
| Acceptance criteria | AC-FR-15-01 to AC-FR-15-02; AC-FR-16-01 to AC-FR-16-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03. |
| Authorised actors | Clinic physician or Care Coordinator for AI-01 orientation summary; Referral Coordinator for AI-02 handoff draft; Clinic physician separately approves clinically contextual content where applicable. |
| Entry state | No direct canonical state effect. AI-01 requires verified linkage/source evidence; AI-02 requires a valid human-approved referral/escalation direction. |
| Primary action | `Record review disposition`. |
| Success outcome | Returns to the calling human workflow: Care Coordinator AI-01 to `SCR-02`, Clinic physician AI-01 to `SCR-03`, or Referral Coordinator AI-02 to `SCR-05`; no AI action changes state. |
| Failure outcome | Unavailable, timeout, stale or unsupported draft is recorded and the user continues manually from approved source evidence. |
| Audit evidence | EVT-20 `ai.assistive.disposition_recorded`. |

### Required layout and validation

The screen must distinguish source data, AI draft and human decision. The AI panel is visually secondary to the source evidence and manual workflow action; it is not animated in a way that implies authority or confidence.

| Element | Required behaviour |
|---|---|
| Capability label | Show `AI-01: source-linked episode summary` or `AI-02: post-approval referral-handoff draft`. |
| Draft status | Label as AI-generated draft, with generated time, uncertainty/limitations and current disposition. |
| Provenance | Show minimum input source references and versions. A missing source link or wrong patient/version is unsupported content. |
| Human controls | Edit/correct, reject, discard, supersede and the permitted accept-for-orientation/use action are available by role. |
| Staleness | Changed report version, direction, assignment, destination or communication constraint marks the draft stale; it cannot be accepted without regeneration or source-based human review. |
| Fallback | AI failure never blocks clinician source review, referral package preparation or another valid human action. |

- AI-01 may orient a clinician/Care Coordinator; it cannot diagnose, determine urgency, acknowledge a result or choose direction.
- AI-02 is unavailable before human direction and cannot create, approve, send, accept, reject, redirect or cancel a referral.
- Record the reviewer, disposition, time, source versions and failure reason where applicable. Do not silently overwrite unsupported output.

### Asha journey rail and wireframe

```text
ASHA MEHTA — SYNTHETIC CASE
AI assistance is optional. The human workflow continues with source evidence.
```

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE              AI review — no workflow state change │
├─────────────────────────────────────────────────┬────────────────────────────┤
│ AI-01 source-linked episode summary              │ ASHA'S JOURNEY              │
│ AI-generated draft · Generated: [time]           │ Optional assistance         │
│ Sources: SYN-DR-6001 v1 · SYN-SR-4001 · task ref │ Human workflow remains      │
│ Uncertainty: [visible missing/stale context]     │ available                   │
│                                                 │                            │
│ [Correct] [Reject] [Discard]                     │                            │
│ [Accept for orientation]                         │                            │
│                                                 │                            │
│ Manual route: [Return to calling workflow]       │                            │
└─────────────────────────────────────────────────┴────────────────────────────┘
```

---

## SCR-09 — Audit and trace

| Item | Specification |
|---|---|
| Purpose | Give authorised reviewers an attributable, ordered view of workflow, human decision, AI, exception, communication, correction and recovery evidence. |
| RTM-primary requirements | FR-14; FR-33; NFR-03; NFR-07; TR-02. |
| Supporting controls | NFR-04; NFR-05; NFR-06. |
| Acceptance criteria | AC-FR-14-01 to AC-FR-14-02; AC-FR-33-01 to AC-FR-33-03; AC-NFR-03-01 to AC-NFR-03-02; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03. |
| Authorised actors | Governance; Product/platform administrator; authorised operational reviewer. |
| Entry state | Any material workflow stage; no direct state effect. |
| Primary action | `Open linked evidence` or `View correction chain`; viewing does not change state. |
| Success outcome | Evidence supports review and later test/UAT traceability. |
| Failure outcome | Missing or failed audit evidence is visible as a defect/exception; no destructive correction is available. |
| Audit evidence | EVT-01 to EVT-22, including linked correction/recovery entries. |

### Required layout and validation

- Each timeline entry displays event/outcome, actor/source, timestamp and applicable source/version reference.
- Show source evidence, internal workflow evidence, human decisions, AI dispositions and derived/read-only measures as distinct categories.
- One logical event may have multiple linked entries (receipt, validation, outcome, review, correction and recovery). Earlier entries remain visible.
- Corrections/supersessions show `correction_of` or `supersedes_ref`, reason, correcting actor and time. There is no edit/delete control for prior audit history.
- AI never appears as a human decision actor. Access mode and actor role do not prove decision authority.
- This screen exposes audit evidence only; it does not calculate or claim an operational metric result.

### Asha journey rail and wireframe

```text
ASHA MEHTA — SYNTHETIC CASE
Ordered evidence from launch to current status. Every correction stays linked.
```

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE                 Audit and trace                    │
│ Filters: [Workflow] [Human decisions] [AI] [Exceptions] [Communication]       │
├─────────────────────────────────────────────────┬────────────────────────────┤
│ Time       Event/outcome       Actor/source      │ ASHA'S JOURNEY              │
│ 11:15      Result available    Diagnostic source │ Ordered evidence             │
│            SYN-DR-6001 v1 · EVT-07             │ Current: [canonical state]   │
│ [time]     Review assigned     ContinuumOS task  │                            │
│ [time]     Acknowledged        SYN-PRAC-3001     │                            │
│ [time]     Direction recorded  SYN-PRAC-3001     │                            │
│ [Open linked evidence] [View correction chain]  │                            │
├─────────────────────────────────────────────────┴────────────────────────────┤
│ Append-oriented history: corrections are linked; failed events are not success│
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## SCR-10 — Next-step confirmation and scoped closure

| Item | Specification |
|---|---|
| Purpose | Let the Care Coordinator verify the applicable human-owned evidence for the next safe step and separately record scoped diagnostic-closure workflow completion. |
| RTM-primary requirements | BR-02; FR-11; FR-22; FR-24; FR-30; NFR-08; US-08. |
| Supporting controls | NFR-04; NFR-05; NFR-06; NFR-07. |
| Acceptance criteria | AC-FR-11-01 to AC-FR-11-03; AC-FR-22-01 to AC-FR-22-02; AC-FR-24-01 to AC-FR-24-02; AC-FR-30-01 to AC-FR-30-03; AC-NFR-04-01 to AC-NFR-04-03; AC-NFR-05-01 to AC-NFR-05-03; AC-NFR-06-01 to AC-NFR-06-03; AC-NFR-07-01 to AC-NFR-07-03; AC-NFR-08-01 to AC-NFR-08-03. |
| Authorised actors | Care Coordinator records confirmation/closure evidence. Clinic physician owns clinical direction; authorised communication owner records communication; receiving team supplies response where required. |
| Entry state | `Referral Accepted` for T11 confirmation, or `Next Step Confirmed` for T14 scoped closure. A clinic-management T08 route enters this screen only after `Next Step Confirmed` was recorded on `SCR-04`. |
| Primary action | Contextual: `Record Next Step Confirmed` from `Referral Accepted`, or `Record scoped Episode Completed` from `Next Step Confirmed`. The two actions are never enabled together. |
| Success outcome | From `Referral Accepted`, EVT-16/T11 creates `Next Step Confirmed`. From `Next Step Confirmed`, a separate complete human-owned evidence check enables EVT-22/T14 and `Episode Completed`. |
| Failure outcome | Missing evidence, wrong report version or open safety-blocking exception prevents confirmation/closure and opens `SCR-07`. |
| Audit evidence | EVT-16 next-step confirmation; EVT-17 communication delivery; EVT-18 patient confirmation where required; EVT-22 scoped closure. |

### Required layout and validation

Present the evidence checklist above both high-risk actions. Delivery and explicit confirmation remain distinct. `Episode Completed` is labelled as **diagnostic-closure workflow completion**, never broader care completion.

| Evidence | Required rule |
|---|---|
| Human direction | Show approved direction, Clinic physician and current report/version reference. |
| Owner, destination/team and timeframe | Required for Next Step Confirmed. |
| Handoff / receiving response | Required where the selected route requires it; clinic-management route is shown as not applicable where appropriate. |
| Communication | Show approved content reference, authorised sender and delivery separately. |
| Explicit patient/caregiver confirmation | Show only where pathway policy requires it. Delivery cannot be promoted to confirmation. |
| Exception and version check | Any unresolved safety-blocking exception or wrong current report version blocks confirmation/closure. |
| Scoped closure evidence | Require complete applicable evidence and accountable closer after Next Step Confirmed; never close automatically. |

- The Care Coordinator verifies visible evidence but cannot decide clinical safety, invent missing evidence or bypass the human direction.
- Before each confirmation, show the action, applicable evidence, actor and recorded timestamp. Repeated confirmation/closure submissions are idempotent.
- If communication fails or a patient question remains unresolved, preserve the evidence, make the gap visible and keep the workflow open.
- For clinic management, T08/EVT-11 has already created `Next Step Confirmed` on `SCR-04`; this screen displays the T08 evidence and offers only the separate T14 closure action when complete. It must not create EVT-16 for that path.

### Asha journey rail and wireframe

```text
ASHA MEHTA — SYNTHETIC CASE
Human direction → accepted/owned path → [Next step confirmed] → scoped closure
Current work: evidence, ownership and communication must be complete.
```

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Asha Mehta · SYNTHETIC CASE                   Next-step confirmation           │
│ Direction: Day-care referral · Report: SYN-DR-6001 version 1                  │
├─────────────────────────────────────────────────┬────────────────────────────┤
│ Evidence checklist                               │ ASHA'S JOURNEY              │
│ ✓ Human direction / Clinic physician             │ [Next step confirmed]       │
│ ✓ Receiving response / destination / timeframe   │ Then: scoped workflow close │
│ ✓ Owner                                           │                            │
│ ! Communication approval / delivery / confirmation│                            │
│ ✓ No safety-blocking exception                   │                            │
│                                                   │                            │
│ [ Record Next Step Confirmed — disabled: communication evidence missing ]     │
│                                                   │                            │
│ Scoped closure (enabled only after confirmation) │                            │
│ [ Record scoped Episode Completed — disabled ]   │                            │
├─────────────────────────────────────────────────┴────────────────────────────┤
│ “Episode Completed” ends the diagnostic-closure workflow only; it does not   │
│ claim all care is complete.                                                   │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Part 2A completion check

| Check | SCR-01 | SCR-02 | SCR-03 |
|---|---:|---:|---:|
| RTM-primary, supporting-control and acceptance references reconciled | Yes | Yes | Yes |
| Authorised actor and prohibited authority explicit | Yes | Yes | Yes |
| Source fields and missing-data route specified | Yes | Yes | Yes |
| Loading, error and exception behaviour specified | Yes | Yes | Yes |
| Navigation/state outcome and audit evidence specified | Yes | Yes | Yes |
| Low-fidelity wireframe included | Yes | Yes | Yes |
| Clickable prototype claimed as built | No | No | No |

## Part 2B completion check

| Check | SCR-04 | SCR-05 | SCR-06 |
|---|---:|---:|---:|
| RTM-primary, supporting-control and acceptance references reconciled | Yes | Yes | Yes |
| Authorised actor and prohibited authority explicit | Yes | Yes | Yes |
| Source fields and missing-data route specified | Yes | Yes | Yes |
| Human decision, AI or source boundary explicit | Yes | Yes | Yes |
| Navigation/state outcome and audit evidence specified | Yes | Yes | Yes |
| Low-fidelity wireframe included | Yes | Yes | Yes |
| Clickable prototype claimed as built | No | No | No |

## Part 2C completion check

| Check | SCR-07 | SCR-08 | SCR-09 | SCR-10 |
|---|---:|---:|---:|---:|
| RTM-primary, supporting-control and acceptance references reconciled | Yes | Yes | Yes | Yes |
| Authorised actor and prohibited authority explicit | Yes | Yes | Yes | Yes |
| Source fields and missing-data route specified | Yes | Yes | Yes | Yes |
| Failure/recovery or fallback behaviour specified | Yes | Yes | Yes | Yes |
| Navigation/state outcome and audit evidence specified | Yes | Yes | Yes | Yes |
| Low-fidelity wireframe included | Yes | Yes | Yes | Yes |
| Clickable prototype claimed as built | No | No | No | No |

## Source trace

- `01_Day_1_Product_Framing/tracer_patient.md`
- `01_Day_1_Product_Framing/state_transition_table.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/failure_path_map.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/field_mapping.csv`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/smart_on_fhir_launch_sequence.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/synthetic_fhir_resource_definitions.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/event_catalogue_and_recovery_rules.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/ai_service_cards_and_control_matrix.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/audit_and_analytics_data_contract.md`
- `Sprints/Sprint_5_Clickable_Prototype/consolidated_requirements_register.csv`
- `Sprints/Sprint_5_Clickable_Prototype/requirements_traceability_matrix.csv`
- `Sprints/Sprint_5_Clickable_Prototype/acceptance_criteria_catalogue.md`
- `Sprints/Sprint_5_Clickable_Prototype/state_to_screen_navigation_map.csv`
