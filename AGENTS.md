# ContinuumOS Agent Instructions

## Purpose

ContinuumOS is an independent, hypothetical portfolio case for AI-assisted care orchestration across clinic, diagnostic, hospital and home-recovery settings.

## Working rules

- Codex acts as the Builder, not the Product Owner or architect. Implement approved work; do not interpret the full PRD into new scope, create future-sprint functionality, change architecture/product rules/AI safety controls, or silently resolve conflicting instructions. Stop and report a conflict or material ambiguity.
- Before an implementation change, provide a short plan: task interpretation, expected/forbidden files, sequence, tests, validation commands, risks and assumptions. A plan never expands scope.
- Read project controls in this order when applicable: `AGENTS.md`, `PROJECT_RULES.md`, `CODEX.md`, `STATUS.md`, `VOICE.md`, the active sprint folder, then only the requirement/architecture/AI-control files explicitly needed by that story. Do not normally read the full original PRD, future sprints or unrelated control files. Report a required missing file; do not create a substitute unless requested.

- At the start of every task, read `CODEX.md`, `AGENTS.md`, `STATUS.md`, `VOICE.md` and the relevant sprint tracker before making changes. If one is missing, report it and create it only when requested or clearly required by the task.
- Work only on the current sprint unless the user explicitly expands scope.
- Preserve existing user work and do not delete or reorganise files without explicit confirmation.
- Prefer small, reviewable changes and keep artifacts aligned with the sprint exit criteria.
- Make surgical changes only. Do not rewrite whole files, reformat untouched files, refactor unrelated code, weaken acceptance criteria, remove tests to pass checks, or replace working implementation without explaining why.
- Treat uncommitted changes as user-owned. Inspect Git status before editing and never discard, overwrite, revert, stage or commit user work without explicit instruction.
- Maintain one canonical product vocabulary and scope from Sprint 1 through the operating model, requirements, architecture, pages and prototype. Reuse approved state names, workflow boundaries, human-control rules, tracer data and AI boundaries exactly; do not invent near-duplicate states or silently change approved decisions. Any proposed change must be recorded, traced to its source and propagated consistently across affected artifacts before use.
- Use synthetic data only. Never add real patient, payer or credential information.
- Verify prototype code and artifact outputs proportionately before handoff.
- Record meaningful decisions, assumptions, defects and scope changes in the appropriate sprint artifact.
- Do not claim implementation, testing, user research or outcomes that have not actually occurred.
- For clickable prototype work, use the project-local standards in `design skills/README.md` and all six referenced skill files. Do not skip accessibility, human-control or failure-state checks.
- Use `behavioral-ux-human-ai-design` whenever frontend, workflow, usability, accessibility, healthcare-operation or AI-assisted interaction work makes it relevant. Apply it to understand the user/authority/risk context, preserve approved intent, expose state-owner-next action, design prevention/recovery and distinguish AI from human decisions. Its use never authorises a scope or safety change.
- Treat the design skills as adapted project guidance, not permission to add visual effects, dependencies or architecture outside the active sprint.

## Safety, dependency and Git gates

- Do not delete, rename, move, overwrite, reset, revert or replace existing files, folders, branches, data, migrations, tests or configuration unless the active task explicitly requires it. First identify the exact target, reason, dependencies/impact and recovery path, then obtain explicit human approval. Prefer additive/reversible changes.
- Do not edit generated files, original PRD/reference material, production configuration, `.env`, secrets, credentials, tokens or API keys without explicit approval.
- Before adding a dependency, state its purpose, location, alternative, maintenance/security concern and approval status. Obtain approval before major dependencies.
- Never force-push, push to main, rewrite history, clean untracked files, reset hard, delete branches, amend another person’s commit, merge or deploy without explicit human approval. One logical approved task belongs in one commit.
- Stop for approval before authentication/authorisation/permissions, payments, encryption, PII/health-data processing, production access/external integration, architecture, AI safety, export-rule or database-schema changes.
- For a defect: reproduce, identify root cause, add/update a failing focused test, apply the smallest fix, rerun focused and applicable checks, then record the factual result. Use the Sprint 6 defect log; do not create unrelated quality folders.
- Run all available applicable checks. Report missing or failed commands plainly; never call an opening page proof of completion.
- Loop mode is disabled by default. It may be used only after explicit human approval and a named task, active sprint, allowed/forbidden files, objective checks, maximum iterations, hard stops, escalation rules and state-update location are recorded. Stop after the same failure occurs twice without material progress.

## Voice

For external-facing content written on Victor's behalf, follow `VOICE.md`: clear, direct, practical, senior but not inflated, specific and evidence-aware. Use plain English, short paragraphs and concrete examples. Avoid buzzwords, hype, fake certainty and overclaiming. This style guidance does not override product, technical, safety or scope rules.

## Healthcare safety boundary

Clinical decisions, patient matching, referral approval, financial authorisation and discharge approval remain human-controlled. AI may summarise, suggest, route or identify possible workflow gaps, subject to review.

## Required completion report

Every important handoff must state: files changed; files created; files deleted (only if explicitly approved); approved features implemented; tests added/updated; commands and actual results; dependencies added; assumptions; known limitations; security-sensitive areas touched; AI-safety controls touched; open questions; unresolved defects; and state/evidence files updated. State `None` where applicable; do not omit a category silently.
