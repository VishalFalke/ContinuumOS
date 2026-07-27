# ContinuumOS Project Rules

## Product scope

- Vision: AI-assisted care orchestration across clinic, hospital and home.
- MVP: Diagnostic Closure and Care Escalation.
- MVP endpoint: a confirmed next care step or a documented exception.
- The broader clinic-to-home journey may be represented in strategy, architecture or roadmap material but is not claimed as implemented.

## Safety and privacy

- Use synthetic patient Asha Mehta (`SYN-PAT-1001`) unless the user explicitly defines another synthetic case.
- Do not use real patient data, real credentials, real payer data or production identifiers.
- Never silently attach uncertain events to a patient or encounter.
- Clinical interpretation and action require a human decision gate.
- AI must not diagnose, approve referrals, approve discharge, authorise payment or autonomously prioritise clinical care.

## Interoperability

- Demonstrate SMART on FHIR conceptually or with synthetic data only.
- Prefer the minimum relevant resources: Patient, Encounter, Practitioner, ServiceRequest, Observation, DiagnosticReport and Task.
- Use least-privilege scopes and document permission failures.
- Treat Kafka, Flink, Spark, openEHR and production HIE integrations as roadmap or architecture concepts unless explicitly implemented and tested.

## Evidence and claims

- Clearly display the independent portfolio disclaimer.
- Do not present vendor references, benchmarks or public case studies as ContinuumOS results.
- Do not invent metrics, pilot findings, user interviews, production readiness or business outcomes.
- Distinguish source data, AI-generated content, human decisions and simulated results in prototypes.

## Delivery discipline

- At the start of every task, Codex must read `CODEX.md`, `AGENTS.md`, `STATUS.md`, `VOICE.md` and the relevant sprint tracker.
- Work sprint by sprint using the tracker in each `Sprints/Sprint_*` folder.
- Keep changes within the active sprint unless approved.
- Maintain acceptance criteria, failure cases, decisions, risks and test evidence as the project evolves.
- Prefer workflow depth, failure handling and auditability over additional screens or technology names.
- Do not add files or folders that are not required by the active sprint without confirmation.

## Human approval gates and execution limits

- Codex is the Builder. Product ownership, architecture, scope, clinical authority, AI safety, release and deployment decisions remain human-controlled.
- Do not resolve conflicting source artifacts by assumption. Stop, identify the conflict and request a Product Owner decision.
- The approved Sprint 5/6 controls are the source of truth. New project-local guidance may point to them but must not duplicate or silently alter requirements.
- Do not delete, rename, move, overwrite, reset, revert or replace an existing file, folder, branch, data set, migration, test or configuration without explicit task authority and prior human approval. Identify target, purpose, impact/dependencies and recovery path first.
- Production configuration, credentials, secrets, external connections, authentication, permissions, health/PII data, payment, encryption, exports, database changes, architecture changes, AI-safety changes, merges and deployments require explicit human approval.
- Use dedicated branch/worktree isolation only when explicitly approved by the user and compatible with the existing workspace; parallel agents must not edit one working tree.
- Automated loops are disabled unless the project has a documented readiness check and explicit human approval. A loop must have a maximum iteration count and stop after two materially unchanged failures.

## Prototype design standards

- The authoritative project-local design guidance is in `design skills/README.md` and its six linked files.
- Read the design skills before prototype screen design, React implementation or UI review in Sprint 5 and later prototype work.
- Apply `01_accessibility.md` first. Native semantics, keyboard access, focus management, contrast, reduced motion and non-colour status communication are release requirements.
- Use `02_component-foundation.md` for composable accessible UI primitives, while avoiding an unmodified component-library look.
- Use `03_interface-polish.md` for typography, surfaces, spacing, optical alignment and restrained visual hierarchy.
- Use `04_motion.md` only where motion clarifies continuity or feedback. Never let motion delay, obscure or imply clinical approval.
- Use `05_react-performance.md` and `06_react-quality.md` for proportionate implementation review. Do not add production infrastructure or claim quality scores that were not verified.
- Human-controlled clinical decisions and traceable failure handling take precedence over every visual or engineering preference.
- Use the local `behavioral-ux-human-ai-design` skill whenever it is relevant to frontend/workflow work. It must preserve approved roles, authority, user intent, cognitive clarity, recovery and AI-human separation; it cannot create new scope or override the project controls.

## Writing voice

- Follow `VOICE.md` for external-facing project content.
- Write clearly, directly and practically.
- Use short paragraphs, plain English and concrete examples.
- Separate what is known, assumed and open.
- Avoid corporate buzzwords, generic AI language, hype, fake certainty and unsupported claims.
