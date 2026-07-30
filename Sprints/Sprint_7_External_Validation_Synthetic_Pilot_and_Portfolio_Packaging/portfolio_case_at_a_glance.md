# ContinuumOS — Case at a Glance

## Independent portfolio case

ContinuumOS is an independently developed, hypothetical product case for AI-assisted care orchestration. It uses one synthetic patient episode, simulated integrations and pre-written AI outputs. It is not a client implementation, production system, clinical-validation study or claim of achieved business outcomes.

## The problem

A diagnostic result becoming available does not prove that a clinician reviewed it, chose a follow-up direction, completed a handoff or confirmed the next care step. The work can cross clinic, diagnostic and receiving teams while ownership, evidence and exceptions remain fragmented across systems.

The product question was:

> How might an orchestration layer make diagnostic-closure work visible, owned and safely recoverable without replacing source systems or automating consequential human decisions?

## What I did

I developed the case from problem framing through a coded local prototype and controlled synthetic evaluation. The work included:

- framing the workflow problem, assumptions, states and success measures;
- mapping stakeholders, decision authority, source systems, handoffs and exceptions;
- defining the MVP and explicitly deferring broader clinic-to-home scope;
- translating the workflow into business, functional, non-functional, data and AI-control requirements;
- prioritising delivery slices, stories, acceptance criteria and failure scenarios;
- defining logical architecture, simulated SMART on FHIR access, data provenance and audit requirements;
- building a ten-screen React/TypeScript prototype with deterministic workflow controls and synthetic fixtures;
- executing local automated tests, browser walkthroughs, synthetic scenario runs and controlled AI-disposition checks;
- recording defects, decisions, change evidence, release limits and future-pilot readiness gaps.

This work demonstrates independent product analysis, business analysis, delivery control and AI-product governance. It does not imply that I held authority in a real healthcare organisation or led a production delivery team.

## Users and decision authorities

| Role | Primary job | Authority retained |
|---|---|---|
| Clinic physician | Review the current report and choose the follow-up direction | Clinical acknowledgement, direction and applicable clinical-content approval |
| Care Coordinator | Monitor ownership, exceptions and confirmation evidence | Operational coordination and evidence-based scoped closure |
| Diagnostic operations | Record acceptance, scheduling and completion evidence | Diagnostic operational status, not clinical interpretation |
| Identity reconciliation reviewer | Resolve uncertain patient or encounter linkage | Human linkage confirmation or rejection |
| Referral Coordinator | Prepare and route an approved handoff | Operational package preparation and routing, not clinical direction |
| Receiving team | Accept or reject the handoff | Formal receiving response, destination and timeframe |
| Governance and platform roles | Govern policy, safety, access and recovery | Oversight and technical recovery, not clinical authority |

See the full [stakeholder map](../Sprint_3_Users_Decisions_and_MVP/stakeholder_map.md) and [decision-rights matrix](../Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv).

## Product decision and MVP

ContinuumOS is a vendor-neutral orchestration overlay, not an EHR replacement. The bounded workflow is:

```text
Diagnostic order
  → result available
  → clinician acknowledgement
  → human follow-up direction
  → referral handoff where required
  → receiving response
  → next step confirmed or documented exception
```

The wider clinic-to-home opportunity remains product context. Surgery, discharge, home recovery, live payer processing and enterprise command-centre operation are outside the implemented prototype.

See [MVP scope](../../01_Day_1_Product_Framing/mvp_scope.md), [scope freeze](../Sprint_3_Users_Decisions_and_MVP/mvp_scope_freeze.md) and the [prioritised backlog](../Sprint_5_Clickable_Prototype/prioritised_backlog_and_prototype_scenarios.md).

## Five defining decisions

| Decision | Why it mattered |
|---|---|
| Select diagnostic closure as the first wedge | It exposes ownership and handoff risk while remaining small enough to demonstrate deeply. |
| Build an orchestration overlay, not another clinical record | Source systems retain authority while ContinuumOS owns workflow visibility, tasks, exceptions and evidence. |
| Put deterministic controls before optional AI | Missing evidence, duplicate events, stale versions and role checks are transparent rules rather than hidden model behaviour. |
| Keep consequential decisions human-controlled | AI cannot diagnose, acknowledge, choose a pathway, approve or accept a referral, confirm the next step or close the episode. |
| Require source-linked AI outputs and complete manual fallback | Stale, unavailable, rejected or corrected assistance cannot block the underlying human workflow. |

The evidence behind these choices is summarised in the [decision and trade-off story](decision_and_tradeoff_story.md).

## Proposed value

The case proposes that an evidence-gated orchestration layer could:

- make the current state, owner and next action easier to identify;
- distinguish result availability from clinical acknowledgement;
- prevent unsafe progression when identity, version or handoff evidence is incomplete;
- keep referral preparation, receiving response and next-step confirmation separate;
- make exceptions recoverable through an accountable owner and last verified state;
- use AI for bounded preparation work without making it a workflow dependency.

These are proposed benefits and product hypotheses. No live operational improvement, cost saving, adoption or clinical outcome is claimed.

## What is implemented and what is simulated

| Implemented locally | Simulated, represented or future |
|---|---|
| Ten clickable React/TypeScript screens | Live EHR, RIS/PACS, referral or communications integrations |
| Deterministic role, evidence, version and transition controls | Production authentication, consent, permissions and identity services |
| Synthetic FHIR R4-shaped fixture data | A conformant FHIR server or source write-back |
| Exception, recovery and duplicate-action controls | Production workflow engine, durable persistence and live audit ingestion |
| Pre-written AI draft review, correction, rejection and fallback | Real model calls, training, model monitoring or supplier assurance |
| Read-only representative audit trace | Production telemetry, immutable storage and operational dashboards |

See the [coded prototype runtime architecture](../Sprint_4_Architecture_and_AI_Operating_Model/simplified_architecture.md) and [run instructions](../../README.md#run-the-local-prototype).

## Validation evidence

| Evidence | Recorded result | Boundary |
|---|---|---|
| Deterministic Node test suite | 85/85 tests passed at the final recorded prototype state | Local code and fixtures only |
| Browser walkthrough and responsive checks | Approved routes and critical interactions passed at recorded desktop and narrow viewports | Not real-user research or accessibility certification |
| Synthetic pilot | 20/20 controlled scenario runs passed for one tracer | Not 20 patients, operational performance or an SLA |
| AI control evaluation | Current, stale, corrected and unavailable scenarios retained human review and manual fallback | Pre-written fixtures, not deployed-model performance |
| Internal Product Owner review | Six recorded findings produced bounded changes and retests | Internal review, not external clinical or user validation |

The release position is **Conditional Go for structured synthetic review and synthetic workflow evaluation only**. See the [UAT business-reasoning readout](uat_business_reasoning_readout.md) and [final evidence pack](final_portfolio_evidence_pack.md).

## Open evidence

Before any real pilot, ContinuumOS would require external clinical and operational validation, participant-specific workflow policy, production identity and security design, interoperability conformance, privacy and consent assessment, real-model supplier assurance, training, support, monitoring and a separately approved pilot plan.

See [future pilot readiness](future_pilot_readiness.md).

## Continue through the evidence

- [Portfolio artifact index](portfolio_artifact_index.md)
- [Decision and trade-off story](decision_and_tradeoff_story.md)
- [UAT business-reasoning readout](uat_business_reasoning_readout.md)
- [Data-governance overview](data_governance_overview.md)
- [Future pilot readiness](future_pilot_readiness.md)
- [Final case-study PDF](ContinuumOS.pdf)
- [Repository README and diagram gallery](../../README.md)
