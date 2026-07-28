# ContinuumOS

> An independent portfolio case study for an AI-assisted diagnostic-closure workflow. It makes the path from a result being available to a human-confirmed next care step visible, attributable and recoverable.

[View the final case study (PDF)](Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/ContinuumOS.pdf) · [Run the local prototype](#run-the-local-prototype) · [Read the evidence pack](Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/final_portfolio_evidence_pack.md)

[![ContinuumOS case-study cover](docs/assets/continuumos-case-study-cover-01.png)](Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/ContinuumOS.pdf)

The PDF above is the primary portfolio artifact. Select the cover to open or download the full case study.

## What this repository demonstrates

ContinuumOS is a hypothetical care-orchestration overlay, not an EHR replacement. The bounded MVP follows one diagnostic-closure workflow:

```text
Result available
  -> clinician acknowledgement
  -> human follow-up direction
  -> referral handoff or clinic-management work
  -> receiving response where required
  -> next step confirmed or documented exception
```

The repository brings together product framing, operating-model decisions, requirements, architecture, a runnable React prototype, controlled test evidence and a final interview-ready case study.

## Start here

| If you want to... | Open |
|---|---|
| Understand the case in a few minutes | [Final case study PDF](Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/ContinuumOS.pdf) |
| Explore the interactive workflow | [Run the local prototype](#run-the-local-prototype) |
| Review final claims and limits | [Final portfolio evidence pack](Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/final_portfolio_evidence_pack.md) |
| Inspect requirements and traceability | [Sprint 5 baseline](Sprints/Sprint_5_Clickable_Prototype/prototype_readiness_review_and_approval_baseline.md) and [requirements traceability matrix](Sprints/Sprint_5_Clickable_Prototype/requirements_traceability_matrix.csv) |
| Inspect safety and AI controls | [Hazard and control register](Sprints/Sprint_6_Prototype_Build_Testing_and_Controlled_Release/product_safety_hazard_and_control_register.csv) and [AI service cards](Sprints/Sprint_4_Architecture_and_AI_Operating_Model/ai_service_cards_and_control_matrix.md) |
| See the detailed project record | [Project status](STATUS.md) |

## Run the local prototype

The prototype is a local, synthetic demonstration. It has no production backend, live hospital connection, real patient data or model call.

```powershell
git clone https://github.com/VishalFalke/ContinuumOS.git
cd ContinuumOS\prototype
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). The prototype uses pre-approved synthetic fixtures and represented workflow states; it is designed for exploration, not for clinical use.

If a Windows-managed folder prevents Vite from using its default configuration loader, start the same local app with:

```powershell
node node_modules/vite/bin/vite.js --configLoader runner --host 127.0.0.1
```

## Product and safety boundary

- Clinical acknowledgement, follow-up direction, referral routing, receiving-team response, next-step confirmation and scoped closure remain human-controlled.
- AI is limited to source-linked, reviewable drafts. It cannot diagnose, choose a pathway, approve or send a referral, accept a referral, confirm a next step or close an episode.
- Uncertain identity, encounter or event linkage is routed to an exception path rather than silently attached.
- The prototype uses only synthetic data. It is not clinical advice, production software, clinical validation, regulatory evidence or evidence of a live deployment.

## Evidence at a glance

| Area | Recorded evidence | Important limit |
|---|---|---|
| Prototype quality | TypeScript lint and 85 Node tests passed; browser walkthroughs and an isolated production bundle passed | The standard build remains limited by managed-workspace output permissions |
| Synthetic pilot | 20 controlled runs of one approved tracer passed | This is not 20 unique episodes, a human task-time study or operational performance evidence |
| Product refinement | Six documented internal Product Owner findings led to bounded changes and retests | This is internal review, not external reviewer research |
| AI controls | Source references, authorised human disposition, correction rationale and manual fallback are demonstrated | This is not deployed-model quality, fairness or supplier-assurance evidence |

For sources, decisions, retests and open evidence needs, see the [final portfolio evidence pack](Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/final_portfolio_evidence_pack.md) and [Sprint 7 change-evidence table](Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/change_evidence_table.csv).

## Repository guide

| Area | Contents |
|---|---|
| `00_Project_Charter/` | Case boundary, objectives, constraints and evidence status |
| `01_Day_1_Product_Framing/` | Product case, workflow model, tracer patient and decision baseline |
| `Sprints/Sprint_2_Care_Journey_and_Operating_Model/` | Care journey, decision rights, sources of record and failure paths |
| `Sprints/Sprint_3_Users_Decisions_and_MVP/` | Users, jobs, MVP scope, field mapping and integration assumptions |
| `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/` | Logical architecture, simulated interoperability boundary, AI controls and audit model |
| `Sprints/Sprint_5_Clickable_Prototype/` | Requirements baseline, traceability and screen specifications |
| `Sprints/Sprint_6_Prototype_Build_Testing_and_Controlled_Release/` | Prototype, testing, safety and controlled-release evidence |
| `Sprints/Sprint_7_External_Validation_Synthetic_Pilot_and_Portfolio_Packaging/` | Synthetic-pilot evidence, change record, final PDF and final presentation |
| `prototype/` | Runnable React and Vite prototype with synthetic fixtures and tests |

## Delivery position

Sprints 1 through 7 are complete as a local synthetic portfolio package. The retained final presentation is `ContinuumOS.pptx`; the featured PDF above contains the same portfolio case in a GitHub-friendly format.

External structured reviewer sessions were explicitly waived for this portfolio case. The repository does not represent internal Product Owner feedback as external research, and it retains open real-world evidence needs: external review, clinical validation, live operational performance, fairness evaluation, production security assurance and external-model supplier assurance.

## License and use

This repository is provided for portfolio review and local exploration. Please preserve the synthetic-data and non-production boundaries when sharing or adapting the work.
