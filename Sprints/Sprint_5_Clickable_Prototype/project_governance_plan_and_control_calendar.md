# Project Governance Plan and BA Control Calendar

## Purpose and boundary

This is project governance for delivery control: how the portfolio case is planned, reviewed, changed and evidenced. It is separate from product governance, which covers clinical decision rights, data/source authority, AI controls, audit and operational safety.

## Delivery roles and decision rights

| Role | Project-governance responsibility | Does not own |
|---|---|---|
| Product owner | Scope priority, baseline approval, roadmap and release decision | Clinical or financial decisions outside assigned product role |
| Lead BA | Requirement quality, traceability, dependencies, RAID, decision/open-question/change records and evidence alignment | Unilateral approval of clinical authority or production readiness |
| Prototype delivery owner | Build plan, implementation traceability, defect resolution evidence and release notes | Requirement scope changes without change control |
| Quality/UAT reviewer | Test readiness, execution evidence, retest and sign-off input | Clinical validation or production deployment approval |
| Governance/safety reviewer | Product-governance boundary review and evidence-status challenge | Day-to-day delivery prioritisation |

## Proposed control calendar

| Gate or cadence | Sprint | Purpose | Required evidence | Outcome label |
|---|---|---|---|---|
| Requirements control review | Sprint 5 Part 2 | Check traceability, RACI, RAID, data, dependencies and open questions | Register, RTM, RAID, RACI, prioritisation matrix | Planned / reviewed only |
| Prototype baseline gate | Sprint 5 Part 3 | Decide whether a requirement may enter Sprint 6 | Definition of Ready, approved scope, dependency status and planned test coverage | Approved for prototype or deferred |
| Build and change-control review | Sprint 6 | Review defects, scope changes and release impact | Change log, defect log, tests, traceability updates | Recorded delivery decision |
| Release readiness gate | Sprint 6 | Decide whether the synthetic release may proceed to structured review | Go/no-go, critical defects, fallback and limitations | Synthetic release decision only |
| Evidence and roadmap review | Sprint 7 | Convert documented feedback/test evidence into product decisions | Feedback register, pilot results, change evidence, scorecard | Evidence-backed update |

## BA control stack

| Control | Primary artifact | Planned use |
|---|---|---|
| Requirements tracker | `consolidated_requirements_register.csv` | Controlled requirement baseline |
| RTM | `requirements_traceability_matrix.csv` | Source-to-test traceability |
| Stakeholder/RACI | `stakeholder_engagement_and_decision_plan.md`; `raci_and_decision_authority_matrix.csv` | Engagement and delivery accountability |
| RAID | `raid_register.csv` | Risks, assumptions, issues and dependencies |
| Decisions and open questions | Sprint 1 decision/assumption registers; `open_questions_and_resolution_log.csv` | Record resolution path without duplicate decisions |
| Prioritisation/dependencies | `moscow_impact_effort_prioritisation_matrix.csv` | Transparent sequencing and trade-offs |
| Change control | `requirements_and_prototype_change_log.csv` | Sprint 6 controlled baseline changes |
| UAT and defects | `uat_readiness_and_signoff_tracker.csv`; `defect_log_and_triage_matrix.csv` | Readiness, execution and retest evidence |
| Data reconciliation | `synthetic_data_validation_and_reconciliation_tracker.csv` | Synthetic source/fixture integrity |
| Evidence scorecard | `portfolio_ba_control_scorecard.md` | Sprint 7 final evidence status |

## Reporting rule

Every project report must distinguish planned, reviewed, approved-for-prototype, executed and validated evidence. No governance forum, sign-off or participant approval is claimed until a dated record exists.
