# Sprint 6B Codex handoff contract

## Current story

**Current 2026-07-27:** `COS-6B-08` is done. Next: `QLT-6B-02` final whole-prototype regression.

`COS-6B-07 — Done; COS-6B-08 — Pending evidence-preview mapping and interaction readiness`

## Current delivery boundary

- Active sprint: Sprint 6B only.
- Current work: COS-6B-08 approved evidence preview is complete. The current SYN-DR-6001 v2 fixture is available as a read-only, labelled synthetic document on the approved mapped screens; final whole-prototype regression is next.
- Prototype implementation status: the approved simulated session, explicit role handoff, hybrid viewer-navigation shell and bounded SCR-01 through SCR-10 comprehension treatments are in place; existing workflow behaviour remains unchanged.
- Product Owner decisions recorded: `DEP-6B-01` to `DEP-6B-04`, session handoff model, hybrid navigation, evidence-preview treatment and validation viewports.

## Allowed files used for the completed COS-6B-08 task

- `Sprints/Sprint_6B_Prototype_Comprehension_Role_Clarity_and_Evidence_Realism/jira_style_sprint_6b_delivery_backlog.md`
- `Sprints/Sprint_6B_Prototype_Comprehension_Role_Clarity_and_Evidence_Realism/Sprint_6B_Prototype_Comprehension_Role_Clarity_and_Evidence_Realism.md`
- This handoff contract
- `prototype/src/components/PrototypeShell.tsx` (shared read-only report preview and dialog recovery only)
- `prototype/src/styles/global.css` (preview presentation only)
- `prototype/src/tests/evidence-preview-story.test.mjs`
- `prototype/src/tests/prototype-shell.test.mjs`
- Root `STATUS.md`

## Forbidden files and changes

- Controllers, fixtures, route definitions and any prototype source outside the named orientation/shell modules.
- Existing user-owned uncommitted prototype files unless a surgical overlap is required and validated.
- Authentication, permissions, role switching, persistence, dependencies, integrations, workflow/state/authority changes and AI-safety changes.

## Acceptance and validation

- Record recommendations separately from Product Owner decisions.
- Preserve approved state names, role authority, synthetic fixture boundaries, exception recovery and AI limits.
- Validate Markdown structure, decision-ID traceability and backlog alignment.
- Focused evidence-preview and journey-shell checks; TypeScript lint; all Node tests; Vite production build; and browser checks for approved fixture fields, mapped screen access, Escape recovery, focus return, console errors and page overflow.
- Actual browser zoom remains unavailable through the in-app browser. Physical narrow-width/zoom and keyboard verification remain final whole-prototype regression checks.

## Stop conditions

- A requested decision changes workflow, authority, state, evidence meaning, AI boundary, architecture, authentication or fixture semantics.
- A source conflict cannot be resolved by an explicit Product Owner decision.
- A planned edit overlaps user-owned uncommitted work without explicit authority.

## Next recommended story

`QLT-6B-02 — Final whole-prototype regression`.

`COS-6B-08 — Preview approved synthetic evidence read-only`, pending evidence-preview mapping and interaction readiness.
