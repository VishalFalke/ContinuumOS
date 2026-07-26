# Implementation guardrails

## Builder boundary

Codex is the Builder, not the Product Owner or architect. It may implement approved sprint requirements, add relevant tests, fix approved defects and update technical documentation when requested. It must not interpret a full PRD into new work, invent requirements, create future-sprint functionality, alter architecture/product rules/AI safety controls, or silently resolve conflicting instructions. Stop and report any conflict or material ambiguity.

## Surgical change rule

Make the smallest reasonable change set needed for the approved sprint acceptance criteria. Do not rewrite whole files, reformat untouched files, refactor unrelated code, remove tests to make checks pass, replace working code without explaining why, or add speculative abstractions.

## Deterministic and safe behaviour

- Trace every implementation change to a story, requirement/acceptance criterion, implementation file and test or recorded verification evidence.
- Keep permissions, routing, validation, retries, thresholds, state transitions and export gates as explicit deterministic rules. Do not hide them in prompts or generic fallbacks.
- Use explicit types, local state where it belongs, controlled local JSON fixtures and append-oriented mock audit evidence.
- Never show a failed action as successful. Preserve entered work and provide a readable safe recovery path.
- Do not add live APIs, source write-back, real AI calls, authentication, production data, secrets or external integrations without explicit approval.
- Preserve human-controlled clinical acknowledgement, direction, referral response, identity reconciliation and closure.

## Dependency control

Before adding a package, state its name, purpose, usage location, existing alternative, maintenance/security consideration and approval status. Obtain approval before a major dependency. Do not install a package only for convenience.

## Before and after editing

Before editing, inspect the relevant folder, implementation, related tests, project conventions, generated-file markers, Git status and user-owned uncommitted work. Before code changes, provide a short plan: task interpretation, expected and forbidden files, sequence, tests, commands, risks and assumptions.

After editing, run every applicable available command. For the current runtime these are `npm run lint`, `npm run test` and `npm run build`; report a missing or failed command plainly. Also run the relevant acceptance, regression, AI-evaluation, security or manual-flow checks when they exist and apply.

## Files that must not be changed without explicit approval

Do not delete, rename, move, overwrite, reset, revert or replace existing files/folders/branches/data; edit original PRD/reference material; edit generated files; alter production configuration; change `.env`, credentials, tokens or API keys; use destructive Git commands; push to main; merge; or deploy. Before a destructive action, identify the exact target, reason, dependencies/impact and recovery path, then obtain explicit approval. Prefer additive and reversible changes.
