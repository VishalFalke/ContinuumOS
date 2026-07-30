# Decision and Trade-off Story

## Purpose and evidence boundary

This is a concise reading view of recorded ContinuumOS product, workflow, architecture and release decisions. It is derived from existing decision records and does not introduce new scope or retrospectively claim production implementation.

| Decision | Options considered | Selected approach | Why | Accepted trade-off | Impact | Decision owner | Evidence |
|---|---|---|---|---|---|---|---|
| First product wedge | Broad clinic-to-home platform; preventive-health orchestration; diagnostic closure | Diagnostic closure from order to human-confirmed next step | It exposes ownership, evidence and handoff failures while remaining bounded enough for a deep prototype | Gives up breadth and does not demonstrate surgery, discharge or home recovery | Defined one canonical workflow, tracer and completion boundary | Product Owner | [D03 and MVP scope](../../01_Day_1_Product_Framing/mvp_scope.md) |
| Product boundary | Replace the EHR; build a longitudinal record; build a workflow overlay | Vendor-neutral orchestration overlay | The problem is fragmented responsibility and workflow continuity, not absence of source clinical records | ContinuumOS depends on external source availability and cannot correct source truth | Source systems retain authority; ContinuumOS owns tasks, exceptions and workflow evidence | Product Owner | [D01 and decision register](../../01_Day_1_Product_Framing/decision_register.csv) |
| Data and integration strategy | Live integration; production repository; synthetic demonstration | Simulated SMART on FHIR with minimum synthetic FHIR R4-shaped data | It demonstrates source-linked workflow behaviour without using real patient data or claiming interoperability conformance | No live connectivity, source write-back or production feasibility evidence | Created a safe, reproducible local fixture boundary | Product Owner | [D02/D04](../../01_Day_1_Product_Framing/decision_register.csv); [FHIR map](../Sprint_3_Users_Decisions_and_MVP/fhir_resource_map.md) |
| Workflow controls | Use AI for all detection and routing; use explicit rules for predictable conditions | Deterministic validation for linkage, versions, evidence, roles and duplicate actions | Predictable controls are more transparent, testable and auditable as code | More explicit rule design and less apparent “AI automation” | AI remains optional; unsafe progression is blocked by reviewable rules | Product Owner | [D05](../../01_Day_1_Product_Framing/decision_register.csv); [business-rule catalogue](../Sprint_5_Clickable_Prototype/business_rule_and_validation_catalogue.md) |
| AI approach | Open chatbot; RAG; fine-tuning; tabular or image models; bounded drafts | Two source-linked assistive drafts over verified synthetic inputs | The jobs are orientation and post-approval preparation, not diagnosis or prioritisation | Limited AI breadth and no claim of model innovation or deployment | AI-01 and AI-02 have sources, versions, reviewer dispositions and no state effect | Product Owner | [AI approach decision](../Sprint_5_Clickable_Prototype/ai_approach_decision_record.md) |
| Human authority | Allow system or AI actions to complete workflow decisions; retain explicit human gates | Human acknowledgement, direction, receiving response, confirmation and closure | Access or automation must not transfer clinical, identity, referral, financial or closure authority | Additional review steps and slower apparent automation | Every consequential transition requires the accountable human evidence | Product Owner and named accountable roles | [D07](../../01_Day_1_Product_Framing/decision_register.csv); [decision rights](../Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv) |
| AI failure strategy | Wait for AI recovery; fabricate a fallback output; continue manually | Record failure and preserve the complete source-based human workflow | Optional assistance must not become a safety or completion dependency | Continued manual preparation effort when AI is unavailable | Stale/unavailable outputs are rejected or discarded and return to SCR-03/SCR-05 | Product Owner and workflow owner | [D13](../../01_Day_1_Product_Framing/decision_register.csv); [AI evaluation](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/ai_evaluation_results.csv) |
| Evidence semantics | Treat sent as accepted; treat delivery as confirmation; combine closure milestones | Keep package, send, receiving response, communication, confirmation and closure separate | Each event has different authority and evidential meaning | More states, fields and human verification | Prevents false success and makes ownership transfer auditable | Product Owner; Referral Coordinator; Receiving team; Care Coordinator | [D17](../../01_Day_1_Product_Framing/decision_register.csv); [event rules](../Sprint_4_Architecture_and_AI_Operating_Model/event_catalogue_and_recovery_rules.md) |
| Prototype architecture | Production backend and persistent workflow engine; proportional local prototype | React frontend, deterministic local controllers and synthetic fixtures | The portfolio needed testable interaction depth without implying production architecture | Cross-screen activity is partly controller-local and fixture-represented rather than durable | Ten functional demonstration routes with explicit implementation/simulation boundaries | Product Owner; prototype delivery owner | [Runtime architecture](../Sprint_4_Architecture_and_AI_Operating_Model/simplified_architecture.md); [implementation limits](../../STATUS.md) |
| Release decision | Present the prototype as ready; stop after open evidence gaps; permit bounded review | Conditional Go for structured synthetic review only | The recorded controls passed after retest, but real-world readiness evidence does not exist | No production, clinical-validation, external-user or accessibility-certification claim | Preserved a credible release boundary and explicit next-stage gates | Product Owner | [Go/No-Go record](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/go_no_go_rollback_and_pilot_entry_criteria.md) |

## Decision pattern

Across these choices, the consistent pattern is:

1. narrow the problem before adding technology;
2. preserve source authority and accountable human decisions;
3. use deterministic controls for predictable workflow conditions;
4. use AI only for bounded, source-linked assistance;
5. design failure and recovery before claiming automation value;
6. separate implementation evidence from future-readiness requirements;
7. retain limitations instead of converting synthetic results into production claims.

## Detailed sources

- [Product decision register](../../01_Day_1_Product_Framing/decision_register.csv)
- [Decision clarification and propagation log](../Sprint_4_Architecture_and_AI_Operating_Model/decision_clarification_and_propagation_log.md)
- [Technical decisions and roadmap labels](../Sprint_4_Architecture_and_AI_Operating_Model/technical_decisions_and_roadmap_labels.md)
- [AI approach decision record](../Sprint_5_Clickable_Prototype/ai_approach_decision_record.md)
- [Requirements and prototype change log](../Sprint_6_Prototype_Build_Testing_and_Controlled_Release/requirements_and_prototype_change_log.csv)
- [Sprint 7 change-evidence table](change_evidence_table.csv)
