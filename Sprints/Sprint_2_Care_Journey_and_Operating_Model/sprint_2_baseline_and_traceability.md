# Sprint 2 — Baseline and Traceability

## Purpose

This artifact freezes the Sprint 1 product case as the decision baseline for Sprint 2. Every Sprint 2 journey, operating-model rule, ownership assignment, system-of-record assumption and failure path must be traceable to this baseline or be recorded as an explicit proposed change.

This is an independent hypothetical portfolio case using synthetic data and simulated integrations. It does not claim user research, clinical validation, implementation, production readiness or achieved outcomes.

## Baseline status

| Item | Baseline |
|---|---|
| Product | ContinuumOS |
| Product role | Vendor-neutral care-orchestration overlay; not an EHR or system-of-record replacement |
| Broad vision | AI-assisted care orchestration across clinic, diagnostics, hospital and home recovery |
| Sprint 2 focus | Care journey and operating model |
| MVP name | Diagnostic Closure and Care Escalation |
| MVP start | Diagnostic order created for the synthetic episode |
| MVP end | Human-confirmed next safe care step |
| Governing principle | One patient, one care episode, one shared workflow status, many care settings |
| Tracer patient | Asha Mehta, age 48, `SYN-PAT-1001` |
| Primary diagnostic event | Abdominal ultrasound; laboratory tests remain supporting context |
| Allowed MVP end paths | Clinic management; day-care referral; hospital escalation with financial preparation beginning where required |
| Deferred continuation | Surgery, discharge and home recovery |
| Data boundary | Synthetic Patient, Encounter, ServiceRequest, Observation, DiagnosticReport and Task data only |
| Interoperability boundary | One limited SMART on FHIR launch demonstration; detailed implementation remains out of Sprint 2 |

## Non-negotiable operating rules

1. Result Available does not mean Clinically Reviewed. Explicit clinician acknowledgement is required.
2. ContinuumOS coordinates status, ownership, tasks, blockers, exceptions, communication status and audit history. Source systems remain authoritative for their records.
3. Uncertain patient, encounter or event linkage routes to reconciliation. It must never silently attach to an episode.
4. Clinical review, acknowledgement, follow-up direction, referral or escalation approval, receiving-team acceptance where required, facility or appointment confirmation, patient-facing content approval and final financial authorisation remain human-controlled.
5. Deterministic rules manage predictable conditions such as missing owner, overdue acknowledgement, missed SLA and suspected duplicate events.
6. MVP AI is limited to source-linked episode summarisation and human-reviewed referral handoff preparation after an approved referral or escalation. AI cannot independently change episode state or exercise clinical, identity, referral or financial authority.
7. Financial readiness is a supporting status on selected escalation paths. It is not autonomous authorisation and does not independently confirm a next step.
8. Sprint 2 must not introduce prototype screens, detailed FHIR mapping, enterprise event-platform implementation, real integrations, real healthcare data or production outcome claims.

## Sprint 1 reference register

| Reference | Sprint 2 use | Authority for |
|---|---|---|
| `Sprints/Sprint_1_Product_Case/Sprint_1_Product_Case.md` | Sprint objective, boundary and exit criteria | Product case scope and guardrails |
| `01_Day_1_Product_Framing/product_case_foundation.md` | Product framing and broad journey context | Problem, thesis, outcome, wedge, audience and overlay position |
| `01_Day_1_Product_Framing/tracer_patient.md` | Detailed journey walkthrough | Asha’s synthetic episode, diagnostic trigger and case context |
| `01_Day_1_Product_Framing/current_state_workflow.md` | Current-state journey and failure analysis | Fragmented workflow, handoff gaps and evidence status |
| `01_Day_1_Product_Framing/future_state_workflow.md` | Future-state workflow and action classes | System actions, AI assistance, human decisions, source linkage and audit controls |
| `01_Day_1_Product_Framing/care_episode_state_model.md` | Operating state definitions | Core and exception states, owners, blockers, exits and human controls |
| `01_Day_1_Product_Framing/state_transition_table.csv` | Transition-level traceability | Allowed transitions, triggers, owners, human controls and safe-return logic |
| `01_Day_1_Product_Framing/mvp_scope.md` | Scope control | Build-now, represent-only, deferred scope, end conditions and failure scenarios |
| `01_Day_1_Product_Framing/decision_register.csv` | Decision-rights and system-boundary control | Recorded product decisions and review triggers |
| `01_Day_1_Product_Framing/assumption_register.csv` | Validation and uncertainty control | Unvalidated operating assumptions and proposed validation methods |
| `01_Day_1_Product_Framing/success_metrics.md` | Evidence discipline | Metric definitions, source events, owners and evidence status; no invented results |
| `01_Day_1_Product_Framing/day_1_completion_checklist.md` | Readiness reference | Documented Sprint 1 controls and remaining evidence gaps |
| `canonical_alignment_register.md` | Canonical dependency control | Authority hierarchy, canonical roles, AI scope and urgent-escalation policy before Sprint 3 |

## Sprint 2 traceability method

## External learning and design rationale

This section is contextual and does not change the canonical workflow, state model, scope boundary or human-control rules.

- **Superhealth:** informs the hypothesis that better-coordinated flow can improve use of existing capacity without assuming new beds or construction economics.
- **Commure:** informs the overlay, interoperability and low-risk workflow-assistance model; current MVP AI remains limited to source-linked summaries and human-reviewed referral handoff preparation.
- **BIHS:** informs the broader right-care-setting vision across clinic, diagnostics, hospital and home; home recovery remains outside the MVP build.

These external examples are design references, not ContinuumOS performance evidence. Any future claim about capacity, cost, workforce productivity or financial impact requires baseline discovery and a defined pilot measurement plan.

Each Sprint 2 decision must include these fields in the working artifact where relevant:

| Field | Required content |
|---|---|
| Decision or rule | The operating-model statement being made |
| Sprint 1 reference | File and section, table or transition that supports it |
| Evidence status | Product decision, assumption, proposed capability, validation requirement, pilot hypothesis or roadmap item |
| Scope impact | Build now, represent only, deferred or no scope change |
| Human-control impact | Which human gate is preserved or introduced |
| Open question | What remains to be validated or reviewed |

If a Sprint 2 artifact cannot cite a Sprint 1 reference, it must be marked as a proposed change and not treated as an approved baseline.

Where earlier Sprint 1 wording conflicts with the accepted Product Case Charter or an approved Decision Register entry, the Charter and latest approved decision take precedence. Superseded wording must be updated or explicitly marked as deprecated. The canonical role and policy register records the approved cross-sprint vocabulary and policy normalizations.

## Sprint 2 decision mapping

| Sprint 2 workstream | Required baseline decision |
|---|---|
| High-level Pre-Care → Home journey | Show the broad vision without implying that home recovery is part of the MVP build |
| Detailed diagnostic workflow | Preserve diagnostic order → result available → acknowledgement → follow-up decision → confirmed next step |
| State operating model | Use the Sprint 1 core and exception states unless an explicit change is approved |
| Ownership matrix | Preserve the Care Coordinator as the operational visibility and closure owner; preserve physician clinical authority |
| Decision-rights matrix | Keep clinical, identity, referral and financial decisions human-controlled |
| System-of-record table | Keep ContinuumOS as the overlay for orchestration state, tasks, exceptions and audit history |
| Failure-path map | Route uncertain or unavailable information to visible exceptions with an owner and safe return condition |
| AI operating boundary | Limit MVP AI to source-linked summary and approved referral-handoff preparation; deterministic workflow rules handle predictable exceptions |
| Financial-readiness flow | Represent readiness after clinical and referral prerequisites; do not make authorisation autonomous; urgent approved escalation may proceed with readiness still visible and unresolved |

## Status discrepancy and handling

The following repository status update is recorded for review:

- `STATUS.md` now identifies Sprint 2 as the active sprint and Sprint 1 as “Complete.”
- `Sprints/Sprint_1_Product_Case/Sprint_1_Product_Case.md` now marks Sprint 1 “Complete.”
- `01_Day_1_Product_Framing/day_1_completion_checklist.md` marks the documented Sprint 1 work as ready for Day 2, while separately stating that validation, implementation and testing are not evidenced.
- `00_Project_Charter/product_case_charter.md` has been completed and accepted as the consolidated Product Case Charter.

For Sprint 2 planning, the completed Sprint 1 framing artifacts and accepted Product Case Charter are treated as the working baseline because they define the product, workflow, scope and controls. Validation, implementation and outcome evidence remain future work and must not be implied.

## Step 0 completion criteria

- [x] Sprint 1 baseline is recorded.
- [x] Sprint 1 reference artifacts are mapped to Sprint 2 use.
- [x] Non-negotiable safety, scope and operating rules are recorded.
- [x] A traceability method is defined for every Sprint 2 decision.
- [x] The status update is recorded in the Sprint 1 tracker and root project status.
- [x] The Product Case Charter has been completed and accepted.
- [x] No implementation, research, testing or outcome claim has been added.

## Step 1 handoff

Step 1 is complete in `high_level_care_journey.md`. The broad Pre-Care → Clinic → Diagnostics → Acute Care → Home journey is documented as context, and the detailed diagnostic-to-next-step lane is visually separated. Home monitoring, discharge coordination, device integration and a hospital command centre remain outside the Sprint 2 build scope.

## Next step

Proceed to the detailed diagnostic workflow handoff below.

## Step 2 handoff

Step 2 is complete in `mvp_diagnostic_workflow.md`, with companion artifacts `mvp_happy_path_workflow.md`, `mvp_exception_workflow.md` and `mvp_operating_control_table.md`. The artifacts use Asha’s synthetic episode, preserve the canonical Sprint 1 states, separate current-state gaps from future-state controls, cover the three allowed MVP pathways, record audit evidence and route failures to explicit exception states. The preliminary/final result rule is recorded as an open operating assumption requiring validation.

## Next step

Proceed to the care-episode operating model handoff below.

## Step 3 handoff

Step 3 is complete in `care_episode_operating_model.md`. Every Sprint 1 core and exception state now has an entry trigger, responsible role, required data, system action, AI boundary, exit condition, escalation condition, prohibited automation and audit evidence. No new canonical state was added.

## Next step

Proceed to the ownership and decision-rights handoff below.

## Step 4 handoff

Step 4 is complete in `ownership_matrix.md`. The matrix separates accountability, execution, consultation and information flow while preserving the Care Coordinator as the operational owner and the clinic physician as the clinical authority.

## Next step

## Step 5 handoff

Step 5 is complete in `decision_rights_matrix.csv`. The matrix assigns one accountable role for each material decision, separates performing roles from authority, preserves human control for clinical, identity, referral, financial and patient-facing decisions, and labels each row as a product decision, proposed capability or validation requirement. It reuses the ownership matrix and Sprint 1 decision, assumption and transition registers.

## Step 6 handoff

Step 6 is complete in `system_of_record_table.csv`. The table preserves the operating principle that source systems own clinical and administrative records while ContinuumOS owns orchestration visibility, tasks, exceptions and workflow history. It covers patient identity, encounter, diagnostic order, schedule/completion, observation, report/version, workflow task, referral, financial readiness, communication, exception and audit timeline. Denied writes and service outages remain visible without being represented as successful source updates.

## Step 7 handoff

Step 7 is complete in `failure_path_map.md`. It covers the seven required Sprint 2 failure paths plus cancellation/no-show, test-not-performed, provider rejection, result-never-arrives and stale/abandoned work. Each path identifies detection, affected state, exception handling, accountable owner, safe action, prohibited action, human decision, safe return, audit evidence and communication implication. No new canonical state was introduced.

## Step 8 reconciliation

The new artifacts were reconciled against `decision_register.csv`, `assumption_register.csv`, `success_metrics.md`, `day_1_completion_checklist.md` and `canonical_alignment_register.md`. Statements are labelled as product decision, proposed capability, assumption, validation requirement, pilot hypothesis or roadmap item. Sprint 1 role and transition wording was aligned to the canonical register: `clinic manager` became `authorised clinical escalation owner`, referral accountability was separated, financial preparation was separated from final authorisation, and the urgent-escalation policy was recorded as D12. No new canonical state was added.

## Review handoff

`sprint_2_review_and_exit_checklist.md` records the documentation review and unresolved validation work. Sprint 2 is complete as a documented package after internal portfolio product-owner self-review; open assumptions and validation requirements carry into Sprint 3. No prototype or architecture implementation is included.

## Sprint 2 completion decision

Portfolio product-owner self-review completed on July 16, 2026. The review cleanup was incorporated: both CSVs were regenerated with valid quoting, accountability rows were split and standardized, the Encounter row was repaired, and four additional data/write failure cases were added. Sprint 2 remains **Complete** as a documented care-journey and operating-model package. This completion confirms documented and internally reconciled exit criteria; it does not convert assumptions into validation evidence or claim implementation, research, testing, production readiness or outcomes. Open assumptions A01/A02/A03/A08/A09/A10/A11, pilot hypotheses A05/A07/A12 and represent-only outage/write-failure behaviours continue into later validation and implementation work.
