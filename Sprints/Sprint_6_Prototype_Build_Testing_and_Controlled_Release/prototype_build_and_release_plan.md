# Prototype Build and Release Plan

## Prototype boundary

Build all ten approved screens, `SCR-01` through `SCR-10`, from the Sprint 5 approved baseline only. Use synthetic patient and episode data, simulated FHIR responses, simulated events, mocked failures, pre-written AI outputs, visible audit records and explicit evidence-status labels.

Implement the prototype using the `Sprint 6 prototype runtime architecture` in `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/simplified_architecture.md`: a real clickable frontend, approved deterministic interaction/state logic and project-controlled JSON fixtures accessed locally or through a mock endpoint. Do not add a live hospital API, production backend, real model call or external-system write.

## Strategic and resource boundary

- Demonstrate one diagnostic-closure pathway within one synthetic provider-network context; do not imply organisation-wide adoption.
- Use the approved lean delivery roles as planning responsibilities only; no staffing capacity, velocity, budget, vendor availability or delivery-date commitment is assumed.
- Build the differentiated workflow, exception, evidence and AI-control experience. Keep production identity, security, consent, source integration, foundation-model service and external communication/referral capability outside the implemented prototype.
- Treat market size, named-company alignment and competitor ranking as separate evidence needs. They are not release criteria and must not be inferred from prototype completion.

## Usage-based validation profiles

| Profile | Authorised roles represented | Sprint 6 validation focus |
|---|---|---|
| Frequent workflow coordinators | Care Coordinator; Diagnostic operations user | Current state, owner, next action, ageing, blockers, exception recovery and audit orientation are clear across repeated tasks. |
| Episodic decision users | Clinic physician; Identity reconciliation reviewer; Receiving team | The current evidence, human authority, blocked behaviour and attributable action are clear at the specific decision gate. |
| Handoff operators | Referral Coordinator | Package preparation, AI-draft review, human approval, routing and receiving response remain separate and recoverable. |
| Oversight and technical users | Product/platform administrator; Governance or safety reviewer | Access/recovery status, evidence limitations, AI disposition and audit trace can be reviewed without creating decision authority. |
| Represented participant | Patient/caregiver | Communication, delivery and confirmation evidence remain distinct; no direct patient-facing product or clinical approval is implied. |

The UAT and test records must identify the authorised role used in each scenario. A synthetic role walkthrough tests clarity and control behaviour; it is not adoption evidence or user research.

## Release 0.1

Build valid launch, episode display, result review, acknowledgement, follow-up direction, referral handoff, receiving response, next-step confirmation, exceptions and audit timeline.

## Test execution

Execute approved scenarios, not just document them. Cover happy-path completion, state transitions, required-field validation, permission behaviour, referral ownership and closure gating. Cover missing encounter, uncertain linkage, duplicate event, amended report, failed write, AI outage, downstream service outage and missing audit entry.

For each applicable screen and scenario, record the authorised validation profile, interaction state checked and observed feedback for initial, loading, unavailable, error, success and safe-recovery behaviour. Record a usability or loading defect when the current state, accountable owner, required action, system response or recovery path is unclear. Do not add a synthetic latency counter or claim response-time performance unless an explicit measurement method is approved and executed.

Evaluate AI outputs using `ai_evaluation_rubric_and_release_thresholds.md`. Record output-level evidence and reviewer disposition in `ai_evaluation_results.csv`; aggregate model-quality measures only from those reviewed rows.

## Release 0.2

Correct the highest-value defects. Update the requirements, business rules, acceptance criteria, prototype, traceability, test scenarios, decision log and change log.

## Evidence-led decision signals

These signals guide a recorded Sprint 6 decision. They are qualitative until executed evidence supports a threshold.

| Decision signal | Evidence pattern | Required response |
|---|---|---|
| Continue to structured review | Critical workflow and failure scenarios pass; authorised roles can distinguish evidence gates, owner and next action; no open Critical defect remains; both AI assists have usable manual fallback. | Record the conditional release decision, limitations and evidence references. |
| Change and retest | Repeated confusion exists between result availability and acknowledgement, preparation and receiving response, delivery and confirmation, or AI draft and human decision; material Medium/High defects affect comprehension or recovery. | Correct the smallest affected requirement, rule, interaction or content through change control; retest the linked scenario before release. |
| Defer an AI assist | Wrong-patient handling, source linkage, stale-version control, unsupported-content disposition or manual fallback fails its approved test. | Remove the assist from the release path or keep it visibly unavailable; preserve the complete manual workflow and record the reason. |
| Stop the release | A Critical defect permits unsafe progression, bypasses human authority, attaches uncertain identity/encounter evidence, hides a failed action as success or prevents safe recovery. | Record No-Go, retain the last verified build/evidence set and do not proceed until correction and retest pass. |
| Reconsider product direction after review | Structured evidence shows the selected users cannot identify the accountable owner/next action, the workflow adds material coordination burden, or the bounded problem is not meaningful to intended reviewers. | Do not expand features reflexively. Revisit the problem, user profile, first-adopter assumption or delivery slice and record a continue/change/stop rationale. |

## AI output control card

Every AI output must show source data, output type, uncertainty, source links, human owner, approval status, permitted action and fallback behaviour.

## Evidence boundary

Do not claim actual test execution until it is recorded in `test_execution_evidence.csv`. All test data and integrations remain simulated.
