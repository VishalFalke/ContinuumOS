# Prototype readiness review and approval baseline

## Purpose and decision

This review records the Product Owner decision on 2026-07-25 to approve the controlled Sprint 6 clickable-prototype baseline. It authorises prototype work against the approved requirements only. It does not claim that any screen, integration, test, user review, pilot or release has occurred.

The review uses the Sprint 1-4 source decisions and the authoritative Sprint 5 requirement, traceability, screen, data and rule controls. The static wireframe PDF and PNG archive are not a source of truth for this decision.

## Readiness evidence reviewed

| Control | Result |
|---|---|
| Controlled requirements register | 56 rows reviewed: 53 approved for prototype; 3 retained as deferred roadmap scope. |
| Traceability | Each register row has one structured RTM record linking source, state or transition, capability, screen, event, data reference, acceptance and planned prototype scenario. |
| Screen and navigation controls | SCR-01 to SCR-10 are specified in the authoritative screen specification and state-to-screen map. |
| Data and missing-data controls | All 27 approved field groups, including FM-05A, are controlled in the data dictionary; the visual guide is a derived reading aid only. |
| Business rules and failure behaviour | Nineteen reviewed rules cover protected access, linkage, results, decisions, handoff, exception recovery, AI review and audit evidence. |
| Human and AI boundary | Identity matching, clinical acknowledgement, follow-up direction, referral response and scoped closure remain human-controlled. AI remains optional, source-linked review support with human review and manual fallback. |

## Scope decision

All 53 requirements whose status changed from `Reviewed` to `Approved for prototype` in the consolidated register and RTM are approved for the Sprint 6 baseline.

The following roadmap requirements remain deferred and are not part of the Sprint 6 prototype baseline:

- FR-23 - detailed financial-readiness workflow
- FR-26 - detailed cancellation, no-show and provider-rejection workflow
- FR-28 - detailed denial-recovery workflow

The approved prioritisation is recorded in `moscow_impact_effort_prioritisation_matrix.csv`. PRI-01 to PRI-07 are P1 foundations; PRI-08 and PRI-09 are P2 controlled AI samples. PRI-10 to PRI-12 remain deferred P3 items. Scores are qualitative planning signals, not estimates of cost, benefit or delivery duration.

## Definition-of-ready assessment

| Sprint 5 exit control | Baseline assessment |
|---|---|
| Every MVP screen is supported by approved requirements | Met - SCR-01 to SCR-10 are traced from approved requirements. |
| Important actions have an authorised actor | Met - screen, RACI and rule controls define authority and blocking behaviour. |
| Functional requirements have acceptance criteria | Met - the register and RTM retain acceptance references and planned scenarios. |
| Critical workflow states have entry and exit conditions | Met - navigation map and business-rule catalogue provide the controlled routes. |
| Significant failures have defined behaviour | Met - access, incomplete data, exceptions, duplicate events, failed writes and unavailable service are controlled. |
| Important fields have source and missing-data response | Met - controlled in the 27-row data dictionary. |
| MVP requirements trace to a test scenario | Met - planned synthetic prototype/UAT scenarios are present; execution has not begun. |
| Deferred scope is separated | Met - FR-23, FR-26 and FR-28 remain deferred in both controlled registers. |
| No new untraced feature is introduced | Met - this decision adds no feature, state, screen or role. |

## Open-question decision

OQ-03 is resolved for the requirements baseline: mandatory synthetic source fields and safe-return mapping are defined in the authoritative data dictionary, with the visual guide as a derived aid. The defined controls must be validated against synthetic fixtures during Sprint 6. No live source integration is implied.

OQ-01 remains a Sprint 6 planning item. OQ-04 was open at this baseline approval and was resolved for Sprint 6 planning on 2026-07-26 through `Sprints/Sprint_6_Prototype_Build_Testing_and_Controlled_Release/ai_evaluation_rubric_and_release_thresholds.md`; evaluation execution remains pending. OQ-02 and OQ-05 remain Sprint 7 validation items. None changes the approved workflow vocabulary or authorises a new feature.

## Conditions for Sprint 6 handoff

- Build only the approved baseline and use formal change control for any new requirement, screen, state, data field or workflow route.
- Use synthetic data only, including the planned fixture validation for OQ-03.
- Demonstrate planned scenarios PS-01 to PS-05, including critical exception, amended-result re-review and controlled AI review/fallback; this is a build-and-test obligation, not evidence already obtained.
- Apply the project-local prototype design standards before screen work, including accessibility, human control and failure-state checks.
- Keep the three deferred requirements out of the clickable-prototype scope.

## Proposed prototype-learning hypotheses

These hypotheses guide planned Sprint 6/Sprint 7 evidence collection. They add no requirement, acceptance criterion, feature or success claim to the approved baseline.

| ID | Hypothesis | Planned observation | Boundary |
|---|---|---|---|
| H-01 | Users can distinguish `Result Available` from clinician acknowledgement. | Scenario walkthrough and observed action/interpretation. | No clinical-outcome claim. |
| H-02 | The current owner and next action are clear from the episode workspace. | Structured scenario review. | No claim of reduced delay or workload. |
| H-03 | Incomplete or mismatched evidence prevents unsafe progression. | Exception and safe-return scenarios. | Synthetic fixtures only. |
| H-04 | Referral preparation and receiving-team response are understood as separate human-controlled steps. | Handoff scenario review. | No claim about real referral operations. |
| H-05 | Users understand AI output as a reviewable draft and can continue when it is unavailable. | AI review, rejection and fallback scenarios. | No model-performance claim. |
| H-06 | The audit timeline explains what happened, who acted and the source/evidence basis. | Audit-trace walkthrough. | No production audit-assurance claim. |

## Approval record

| Item | Decision |
|---|---|
| Decision owner | Product Owner (user direction recorded 2026-07-25) |
| Decision | Approved for Sprint 6 clickable-prototype baseline |
| Scope | 53 approved requirements; 3 deferred roadmap requirements |
| Evidence | Controlled requirements register, RTM, prioritisation matrix, data dictionary, rule catalogue, screen specification and navigation map |
| Limit | Approval is for a synthetic clickable prototype only; it is not approval of clinical use, live integration, testing results or release. |
