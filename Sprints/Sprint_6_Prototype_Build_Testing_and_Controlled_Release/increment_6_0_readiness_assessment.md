# Increment 6.0 readiness assessment

## Purpose and evidence boundary

This assessment records the pre-implementation readiness check requested on 2026-07-26 for ENAB-601, ENAB-602 and ENAB-603. It confirms what is defined in the approved baseline, what remains an implementation gate, and what is excluded. It does not record code, tests, integration, security assurance, clinical validation, release approval or production readiness.

## Decision

**Increment 6.0 may proceed only as foundation work.** No screen story may enter development until its prerequisite fixture, deterministic state/event rule, authorised actor, failure route and acceptance criteria are confirmed. The prototype folder scaffold has been created; it contains no executable application code or package configuration.

## Readiness check

| Area | Baseline evidence checked | Assessment | Implementation gate / next action |
|---|---|---|---|
| Workflow owners and human authority | Sprint 5 RACI; Sprint 2 ownership and decision-rights controls | Defined. Clinical acknowledgement, follow-up direction, referral response, identity reconciliation and closure remain human-controlled. | Encode role/authority guard rules before relevant screens; do not infer authority from a route or access mode. |
| Sources of truth | Sprint 2 system-of-record table | Defined. Authoritative sources retain identity, encounter, order, report/version and referral truth; ContinuumOS owns workflow tasks, exceptions and append-oriented workflow history. | Model source references separately from internal workflow data; use only synthetic fixtures. |
| SOP / operating controls | Sprint 2 MVP operating controls; Sprint 5 business-rule catalogue; Sprint 5 acceptance catalogue | Defined as controlled workflow and recovery rules, not validated operating procedures. | Implement only the approved rule paths and explicitly label the prototype synthetic. |
| Data flow | Sprint 3 launch-to-audit flow; Sprint 4 architecture, event catalogue and audit contract | Defined: simulated read-only launch/context -> synthetic source evidence -> deterministic validation/state logic -> workflow display/task/exception -> append-oriented audit evidence. | Create traceable local fixtures and pure event logic in ENAB-602. |
| Tools and runtime | Sprint 6 backlog and local workspace inspection | Resolved for ENAB-601: a local React 19, TypeScript and Vite 6 scaffold exists in `prototype/`. | Retain this minimal local-only toolchain unless an approved change is required. |
| QA rules | Sprint 6 test strategy, defect/release policy, design skills and backlog Definition of Done | Defined, but no execution evidence exists. | Add proportionate unit, interaction, keyboard/focus, loading/unavailable/recovery and fixture checks; record only observed results. |
| RACI | `raci_and_decision_authority_matrix.csv` | Complete as a planning control for scope, requirements, change, testing and release decisions. All rows remain planned; it is not evidence of participant assignment or approval activity. | Use Product Owner escalation for scope/change decisions; record actual delivery assignee/reviewer only when work begins. |
| RAID | `raid_register.csv` | Complete as a planning control. RAID-01 scope control and RAID-04 fixture/event consistency directly gate Increment 6.0. | Keep RAID-01 and RAID-04 open; add only actual new risks, assumptions, issues or dependencies. |
| Screen definition | Sprint 5 screen specification and navigation map | Defined for SCR-01 to SCR-10. Foundation may carry the navigation contract but must not build unapproved screen behaviour. | Render placeholders only if needed by ENAB-601; build screens only in their planned increments. |
| Services / APIs / integrations | Sprint 4 architecture boundary and technical-decision register | Defined as simulated read-only SMART/FHIR-shaped access and simulated events only. | Use local JSON fixture adapters; no network calls, live APIs, source writes or enterprise broker. |
| Permissions and security | Sprint 3 permissions assumptions; Sprint 4 boundary | Prototype access/role presentation is defined. Production OAuth, IdP, consent, RBAC/ABAC, secrets and certification are future readiness. | Do not add authentication or claim production security; enforce only deterministic mock role guards. |
| MVP versus future architecture | Sprint 4 simplified architecture and architecture principles | Separated. The MVP is a local, synthetic, frontend demonstration. Production integration, security, deployment, scaling and AI operations are future-readiness topics. | Keep all runtime choices proportionate; do not add production infrastructure. |

## Red items: excluded from Increment 6.0 and screen scope

| Red item | Why it cannot enter scope | Controlled disposition |
|---|---|---|
| Live EHR/LIS/RIS/referral/payer/communication APIs or source write-back | The approved MVP is local and synthetic; source systems remain authoritative. | Excluded; future integration discovery and approval required. |
| Production authentication, OAuth, identity provider, consent, MPI, RBAC/ABAC, secrets or security certification | These are future-readiness controls, not portfolio-prototype functionality. | Excluded; mock role guards only. |
| Real patient, payer or credential data | Synthetic-data-only project boundary. | Prohibited. |
| Real AI calls, model training, autonomous decisions or state changes | AI-01/AI-02 are later optional, pre-written, source-linked and human-reviewed assistance only. | Excluded from 6.0; no AI implementation. |
| New screens, states, fields, actors, workflow routes or dependencies | The Sprint 5 baseline is controlled. | Requires approved change logging before implementation. |
| Clinical validation, user research, production readiness or release claims | No actual evidence exists. | Do not claim; record only executed evidence in later increments. |

## Foundation entry criteria

ENAB-601 to ENAB-603 are ready to start when the following are retained as explicit implementation checks:

1. The prototype remains isolated under `prototype/` and contains no live connection or production data.
2. The navigation contract uses only approved screen IDs and routes uncertain context to the approved SCR-07 safe-return route.
3. Fixtures preserve source-versus-workflow ownership, report-version history, linkage uncertainty and append-oriented audit evidence.
4. State/event logic makes prohibited transitions impossible and never presents a failed action as success.
5. Shared components meet the project accessibility controls: semantic controls, keyboard access, visible focus, textual statuses and readable loading/unavailable/error/recovery states.
6. Actual checks, defects and changes are recorded in the existing Sprint 6 evidence artifacts when they occur.

## Open implementation blockers

| ID | Blocker | Owner | Impact | Required resolution |
|---|---|---|---|---|
| BLK-601 | No frontend package/runtime configuration exists yet. | Prototype delivery owner | Prevents executable scaffold and automated checks. | Resolved 2026-07-26: local React/TypeScript/Vite toolchain installed and build validated. |
| BLK-602 | Synthetic fixture and deterministic event/state implementation has not been created or validated. | Prototype delivery owner | Prevents safe screen work and test execution. | Complete ENAB-602 and record fixture reconciliation evidence before dependent screen stories. |
| BLK-603 | No executed QA, accessibility or interaction-state evidence exists. | Quality/UAT reviewer | Prevents any release or Done claim. | Execute and record checks as each increment is built. |

## Trace sources

- `Sprints/Sprint_5_Clickable_Prototype/raci_and_decision_authority_matrix.csv`
- `Sprints/Sprint_5_Clickable_Prototype/raid_register.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/system_of_record_table.csv`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/permissions_and_interoperability_assumptions.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/integration_flow_ehr_launch_to_audit.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/architecture_principles_and_boundary.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/technical_decisions_and_roadmap_labels.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/event_catalogue_and_recovery_rules.md`
- `Sprints/Sprint_6_Prototype_Build_Testing_and_Controlled_Release/jira_style_sprint_6_delivery_backlog.md`
