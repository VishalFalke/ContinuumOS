# ContinuumOS Portfolio Artifact Index

## Start here

This index provides a short route through the strongest ContinuumOS evidence. It is organised by product, analysis, delivery and governance questions rather than by job title.

| Question | Best starting artifact |
|---|---|
| What problem did this case address, and what did I do? | [Case at a glance](portfolio_case_at_a_glance.md) |
| What choices shaped the product and delivery approach? | [Decision and trade-off story](decision_and_tradeoff_story.md) |
| What was validated, why did it matter, and what remains unproven? | [UAT business-reasoning readout](uat_business_reasoning_readout.md) |
| How are source authority, data quality, audit and metrics governed? | [Data-governance overview](data_governance_overview.md) |
| What would be required before a real pilot? | [Future pilot readiness](future_pilot_readiness.md) |
| What is actually clickable? | [Run the local prototype](../../README.md#run-the-local-prototype) |
| Where are the visual models? | [README diagram gallery](../../README.md#diagram-gallery) |

## Evidence-status key

| Label | Meaning |
|---|---|
| Designed | Product, workflow, requirement or architecture decision documented |
| Implemented locally | Present in the coded synthetic prototype |
| Tested synthetically | Verified with local fixtures, automated tests or controlled walkthroughs |
| Represented/simulated | Shown without a live external system or real operational action |
| Future readiness | Required before a real pilot or deployment; not completed evidence |

## Product case and strategy

| Evidence | Why it matters | Status |
|---|---|---|
| [Product case foundation](../../01_Day_1_Product_Framing/product_case_foundation.md) | Problem framing, users, assumptions and product direction | Designed |
| [Case-study summary](../../portfolio_case_study_summary.md) | Product selection, strategy, trade-offs and evidence boundaries | Designed with final recorded evidence |
| [Final case-study PDF](ContinuumOS.pdf) | Interview-ready narrative | Portfolio packaging |
| [Competitive approach appendix](competitive_approach_evidence_plan.md) | Bounded public-source comparison of adjacent approaches | External evidence; not ContinuumOS results |

## Stakeholders, authority and operating model

| Evidence | Why it matters | Status |
|---|---|---|
| [Stakeholder map](../Sprint_3_Users_Decisions_and_MVP/stakeholder_map.md) | Jobs, authority, dependencies and risks by role | Designed; not interview research |
| [Decision-rights matrix](../Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv) | Separates human authority from system/AI support | Designed |
| [RACI and decision-authority matrix](../Sprint_5_Clickable_Prototype/raci_and_decision_authority_matrix.csv) | Approval, consultation and delivery accountability | Designed |
| [Stakeholder engagement and decision plan](../Sprint_5_Clickable_Prototype/stakeholder_engagement_and_decision_plan.md) | Proposed decision cadence and escalation | Designed |

## Process, journey and exception models

| Visual artifact | What it shows |
|---|---|
| [High-level care journey](../Sprint_2_Care_Journey_and_Operating_Model/high_level_care_journey.md) | Broad clinic-to-home context and bounded MVP lane |
| [Detailed diagnostic workflow](../Sprint_2_Care_Journey_and_Operating_Model/mvp_diagnostic_workflow.md) | End-to-end workflow, human gates and exceptions |
| [Happy-path workflow](../Sprint_2_Care_Journey_and_Operating_Model/mvp_happy_path_workflow.md) | Scan-friendly state progression |
| [Exception workflow](../Sprint_2_Care_Journey_and_Operating_Model/mvp_exception_workflow.md) | Failure ownership, prohibited actions and safe return |
| [Four-diagram traceability pack](../Sprint_5_Clickable_Prototype/four_diagram_traceability_pack.md) | Business process, system context, logical data relationships and lifecycle |

## Requirements, rules and traceability

| Evidence | Why it matters | Status |
|---|---|---|
| [BRD-lite](../Sprint_5_Clickable_Prototype/brd_lite.md) | Business problem, objectives, scope, requirements and constraints | Approved prototype baseline |
| [Requirements register](../Sprint_5_Clickable_Prototype/consolidated_requirements_register.csv) | Business, functional, non-functional and technical requirements | Approved prototype baseline |
| [Business-rule and validation catalogue](../Sprint_5_Clickable_Prototype/business_rule_and_validation_catalogue.md) | Trigger, evidence, role, block, recovery and audit rules | Designed and selectively implemented |
| [Acceptance criteria catalogue](../Sprint_5_Clickable_Prototype/acceptance_criteria_catalogue.md) | Testable outcome conditions | Approved prototype baseline |
| [Requirements traceability matrix](../Sprint_5_Clickable_Prototype/requirements_traceability_matrix.csv) | Requirement → story → acceptance → test/defect/sign-off chain | Maintained through prototype evidence |

## MVP, prioritisation and delivery

| Evidence | Why it matters | Status |
|---|---|---|
| [MVP scope](../../01_Day_1_Product_Framing/mvp_scope.md) | Build, represent and defer boundaries | Designed |
| [MVP scope freeze](../Sprint_3_Users_Decisions_and_MVP/mvp_scope_freeze.md) | Controlled capability boundary | Frozen baseline |
| [Prioritised backlog and scenarios](../Sprint_5_Clickable_Prototype/prioritised_backlog_and_prototype_scenarios.md) | Value/risk ordering and validation scenarios | Approved delivery plan |
| [MoSCoW impact/effort matrix](../Sprint_5_Clickable_Prototype/moscow_impact_effort_prioritisation_matrix.csv) | Priority rationale and dependencies | Designed |
| [Epic/story estimation and dependency map](../Sprint_5_Clickable_Prototype/epic_story_estimation_and_dependency_map.md) | Delivery structure without invented cost commitments | Designed |
| [Roadmap and delivery horizons](../Sprint_5_Clickable_Prototype/product_roadmap_and_delivery_horizons.md) | MVP, readiness and later options | Designed |
| [Jira-style Sprint 6 backlog](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/jira_style_sprint_6_delivery_backlog.md) | Build/test sequencing and acceptance controls | Executed through recorded stories |

## Decisions, risks and change control

| Evidence | Why it matters |
|---|---|
| [Decision and trade-off story](decision_and_tradeoff_story.md) | Concise interview reading view |
| [Decision register](../../01_Day_1_Product_Framing/decision_register.csv) | Canonical product decisions and review triggers |
| [Technical decisions](../Sprint_4_Architecture_and_AI_Operating_Model/technical_decisions_and_roadmap_labels.md) | Architecture boundary and delivery-status labels |
| [RAID register](../Sprint_5_Clickable_Prototype/raid_register.csv) | Scope, data, AI, validation and cost risks |
| [Requirements/prototype change log](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/requirements_and_prototype_change_log.csv) | Controlled baseline changes |
| [Sprint 7 change-evidence table](change_evidence_table.csv) | Finding → decision → implementation → retest chain |

## Architecture, interoperability and data

| Visual or control artifact | What it shows |
|---|---|
| [Logical and prototype runtime architecture](../Sprint_4_Architecture_and_AI_Operating_Model/simplified_architecture.md) | Source boundary, logical services and coded local runtime |
| [SMART launch sequence](../Sprint_4_Architecture_and_AI_Operating_Model/smart_on_fhir_launch_sequence.md) | Simulated clinician access and minimum data retrieval |
| [FHIR resource map](../Sprint_3_Users_Decisions_and_MVP/fhir_resource_map.md) | Six source resource types plus bounded internal Task |
| [Data dictionary visual guide](../Sprint_5_Clickable_Prototype/data_dictionary_visual_guide.md) | Cross-screen data/control dependencies |
| [Data-governance overview](data_governance_overview.md) | Source → verification → workflow → audit → KPI chain |

## AI governance and evaluation

| Evidence | Why it matters | Status |
|---|---|---|
| [Decision rights and AI suitability](../Sprint_3_Users_Decisions_and_MVP/decision_rights_and_ai_suitability_matrix.csv) | Separates human, deterministic and AI-suitable work | Designed |
| [AI service cards and control matrix](../Sprint_4_Architecture_and_AI_Operating_Model/ai_service_cards_and_control_matrix.md) | Inputs, outputs, provenance, review, failure and prohibited actions | Designed and carried into prototype |
| [AI approach decision](../Sprint_5_Clickable_Prototype/ai_approach_decision_record.md) | Prompt/RAG/fine-tuning/model trade-offs | Designed |
| [AI evaluation rubric](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/ai_evaluation_rubric_and_release_thresholds.md) | Source, patient, version, omission, recommendation and fallback gates | Applied to fixtures |
| [AI evaluation results](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/ai_evaluation_results.csv) | Four controlled human-disposition scenarios | Tested synthetically |
| [Safety hazard/control register](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/product_safety_hazard_and_control_register.csv) | Prevention, detection, recovery and residual uncertainty | Designed with linked local evidence |

## Testing, UAT and release evidence

| Evidence | Why it matters | Status |
|---|---|---|
| [UAT business-reasoning readout](uat_business_reasoning_readout.md) | Risk and decision meaning behind the critical tests | Derived from recorded evidence |
| [Test strategy](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/test_strategy_and_test_level_matrix.md) | Test levels, owners and evidence expectations | Applied locally |
| [Test execution evidence](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/test_execution_evidence.csv) | Executed unit, build, browser and control checks | Tested synthetically |
| [UAT readiness/sign-off tracker](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/uat_readiness_and_signoff_tracker.csv) | Bounded synthetic walkthrough and disposition | Conditional Go for synthetic review only |
| [Defect log](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/defect_log_and_triage_matrix.csv) | Defect impact, correction and retest | Recorded |
| [Go/No-Go and rollback criteria](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/go_no_go_rollback_and_pilot_entry_criteria.md) | Continue/change/defer/stop decision rules | Applied to synthetic release |
| [Synthetic pilot method](synthetic_pilot_dataset_and_method.md) | Twenty controlled runs of one tracer | Tested synthetically |
| [Final evidence pack](final_portfolio_evidence_pack.md) | Final evidence and limitation summary | Current |

## Prototype and screen evidence

- [Run the React/Vite prototype](../../README.md#run-the-local-prototype)
- [Screen specifications and wireframe pack](../Sprint_5_Clickable_Prototype/screen_specifications_and_wireframe_pack.md)
- [Wireframe PDF](../Sprint_5_Clickable_Prototype/Wireframes%20ContinuumOS.pdf)
- [State-to-screen navigation map](../Sprint_5_Clickable_Prototype/state_to_screen_navigation_map.csv)
- [Prototype implementation boundary](../../prototype/README.md)

## Future readiness

- [Future pilot readiness](future_pilot_readiness.md)
- [Illustrative deployment-readiness checklist](../Sprint_4_Architecture_and_AI_Operating_Model/illustrative_hie_deployment_readiness_checklist.md)
- [Final open evidence needs](final_portfolio_evidence_pack.md#open-evidence-needed)

No external structured review, clinical validation, production integration, real AI model, operational KPI baseline, training delivery, rollout or hypercare is claimed.
