# ContinuumOS Agent Instructions

## Purpose

ContinuumOS is an independent, hypothetical portfolio case for AI-assisted care orchestration across clinic, diagnostic, hospital and home-recovery settings.

## Working rules

- At the start of every task, read `CODEX.md`, `AGENTS.md`, `STATUS.md`, `VOICE.md` and the relevant sprint tracker before making changes. If one is missing, report it and create it only when requested or clearly required by the task.
- Work only on the current sprint unless the user explicitly expands scope.
- Preserve existing user work and do not delete or reorganise files without explicit confirmation.
- Prefer small, reviewable changes and keep artifacts aligned with the sprint exit criteria.
- Maintain one canonical product vocabulary and scope from Sprint 1 through the operating model, requirements, architecture, pages and prototype. Reuse approved state names, workflow boundaries, human-control rules, tracer data and AI boundaries exactly; do not invent near-duplicate states or silently change approved decisions. Any proposed change must be recorded, traced to its source and propagated consistently across affected artifacts before use.
- Use synthetic data only. Never add real patient, payer or credential information.
- Verify prototype code and artifact outputs proportionately before handoff.
- Record meaningful decisions, assumptions, defects and scope changes in the appropriate sprint artifact.
- Do not claim implementation, testing, user research or outcomes that have not actually occurred.
- For clickable prototype work, use the project-local standards in `design skills/README.md` and all six referenced skill files. Do not skip accessibility, human-control or failure-state checks.
- Treat the design skills as adapted project guidance, not permission to add visual effects, dependencies or architecture outside the active sprint.

## Voice

For external-facing content written on Victor's behalf, follow `VOICE.md`: clear, direct, practical, senior but not inflated, specific and evidence-aware. Use plain English, short paragraphs and concrete examples. Avoid buzzwords, hype, fake certainty and overclaiming. This style guidance does not override product, technical, safety or scope rules.

## Healthcare safety boundary

Clinical decisions, patient matching, referral approval, financial authorisation and discharge approval remain human-controlled. AI may summarise, suggest, route or identify possible workflow gaps, subject to review.
