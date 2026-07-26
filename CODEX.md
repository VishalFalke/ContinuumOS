# ContinuumOS Codex Working Contract

## Before acting

1. Read `CODEX.md`, `AGENTS.md`, `STATUS.md`, `VOICE.md` and the relevant sprint tracker.
2. Identify the active sprint and the requested deliverable.
3. Inspect relevant existing files before editing.
4. Ask for clarification when a missing decision would materially change scope, structure or content.
5. Do not infer permission to create extra folders, files, integrations or external connections.
6. For prototype UI work, read `design skills/README.md` and the six linked skill files before designing or changing screens.
7. For implementation tasks, read `prototype/docs/source-of-truth-map.md`, `prototype/docs/implementation-guardrails.md` and the active sprint `codex-handoff.md` when they exist; use only the linked story-specific sources.
8. For relevant frontend or workflow changes, apply `behavioral-ux-human-ai-design` alongside the project-local design skills; classify material UX changes and do not alter approved workflow, authority or safety boundaries without approval.

## While working

- Keep the MVP centred on: diagnostic order → result available → clinician acknowledgement → referral decision → next step confirmed.
- Keep ContinuumOS as an overlay and orchestration layer, not an EHR replacement.
- Preserve cross-artifact consistency from Sprint 1 through every Sprint 2 page, later requirements, architecture, prototype screen and presentation. Use the canonical state names, scope boundaries, human gates, tracer data and AI limits already approved; do not invent or silently rename them. Record and propagate any explicitly approved change before using it elsewhere.
- Label claims as external evidence, assumption, proposed capability, pilot hypothesis or roadmap item.
- Keep AI outputs traceable to source data and visibly subject to human review.
- Route uncertain identity, encounter or event reconciliation to an exception queue.
- Use clear, maintainable code and avoid unnecessary dependencies or enterprise technologies in the prototype.
- Use the voice in `VOICE.md` for external-facing writing: clear, direct, practical, specific and evidence-aware.
- Apply the project-local design standards in `design skills/`. Accessibility, human review and workflow clarity override visual polish, motion and implementation convenience.
- Keep deterministic permissions, routing, validation, thresholds, state transitions and export gates in code rather than prompts. AI is optional, traceable and cannot create a consequential action.
- Use `npm run lint`, `npm run test` and `npm run build` for the current prototype runtime when applicable; report unavailable or failed checks without bypassing them.

## Before handoff

- Update the relevant sprint status tracker.
- Update the root `STATUS.md` when task status, sprint status, decisions, risks or blockers change.
- Run the smallest useful validation or test.
- Summarise changed files, validation performed, open risks and the next decision needed.
- Mention any assumption made or blocker encountered.
- For prototype handoff, state which design-skill checks were applied and which were not applicable.
- Use the complete handoff checklist in the active sprint `codex-handoff.md`, including file, feature, test, command, dependency, limitation, security, AI-safety, defect, question and state-update information.
