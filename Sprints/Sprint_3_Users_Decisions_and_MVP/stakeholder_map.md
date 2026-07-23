# Sprint 3 — Stakeholder Map

## Purpose

This map translates the approved Sprint 1 user framing and Sprint 2 ownership model into the stakeholder set for Sprint 3. It is a product and workflow map, not evidence that interviews or user research have occurred.

All examples use the synthetic Asha Mehta episode, `SYN-PAT-1001`.

## Stakeholder map

| Stakeholder | Relationship to MVP | Primary job in the workflow | Decisions or authority retained | ContinuumOS support | Key risk or dependency |
|---|---|---|---|---|---|
| Clinic physician | Primary clinical user and authority | Review the current result, acknowledge it, choose the safe follow-up direction and confirm clinically relevant content | Clinical review, acknowledgement, follow-up direction, referral/escalation approval and clinical communication approval | Source-linked episode summary, result version visibility, acknowledgement task, referral decision task and audit trail | AI or workflow status must never substitute for source review or clinical judgement |
| Care Coordinator | Primary operational user and workflow owner | Monitor ageing work, assign owners, coordinate blockers and exceptions, track handoffs and verify next-step evidence | Operational coordination and closure evidence; records `Episode Completed` only when defined human-owned end-state conditions are satisfied; not clinical, identity or financial authority | Active episode workspace, timeline, owner/SLA view, exception queue, reminders, escalation visibility and audit history | Ownership does not permit overriding missing clinical, receiving-team, communication or other required human evidence |
| Diagnostic operations user | Source-workflow operator | Accept and schedule diagnostic work, record completion, maintain operational status and investigate missing results | Diagnostic acceptance, scheduling, completion and operational status; not clinical report authorship or interpretation | Order/status visibility, result version tracking, overdue-result flag and source-linkage context | Completion, result availability and clinical review must remain distinct |
| Authorised reporting professional | Source-side clinical reporting authority | Finalise the diagnostic report and, where authorised, amend or correct the clinical report | Clinical report finalisation, amendment or correction within source policy | Report version, amendment indicator and source provenance visibility; no autonomous correction | Source-side authority clarification, not a new ContinuumOS state or autonomous AI capability |
| Identity reconciliation reviewer | Identity and encounter authority | Resolve uncertain patient, encounter or diagnostic-event linkage before episode attachment | Confirm or reject the match; no silent or autonomous attachment | Reconciliation queue, matching evidence, accept/reject record and audit history | Uncertain linkage must remain outside the valid episode until human resolution |
| Referral Coordinator | Approved-handoff operator | Prepare, route and track an approved referral or escalation handoff and record the receiving response | Operational preparation, routing and response tracking; not clinical referral direction or receiving acceptance | Required-field checklist, source-linked handoff draft, routing status, response and rejection reason | AI may draft only after approval; no automatic routing or redirection |
| Hospital operations | Receiving operational stakeholder for hospital escalation | Receive the approved escalation handoff, coordinate operational readiness and provide destination/timeframe evidence | Operational acceptance inputs; clinical acceptance remains with the receiving team where applicable | Handoff visibility, required-field checklist and response tracking | Hospital escalation cannot be treated as accepted without receiving-team evidence |
| Specialist | Receiving clinical stakeholder | Review an approved referral or escalation handoff and provide clinical review and acceptance recommendation or decision where authorised | Clinical review and clinical acceptance recommendation or decision where authorised; formal operational acceptance remains with the receiving team | Source-linked handoff package, clinical review context and response capture | Specialist authority must not be conflated with formal receiving-team acceptance |
| Receiving team | Formal receiving authority | Record whether the referral or escalation handoff is accepted or rejected, with destination and timeframe evidence | Formal acceptance or rejection, destination and timeframe evidence | Handoff response capture, acceptance status, rejection reason and audit history | Referral Coordinator tracks the response; no automatic redirection after rejection |
| Discharge coordinator | Downstream contextual stakeholder | Understand the broader care-continuity model and future discharge/home-recovery handoffs | No authority in the Sprint 3 MVP end-state unless separately assigned in a future scope | Represent-only visibility in the broader journey; no discharge workflow build | Discharge and home recovery are deferred, not hidden inside MVP completion |
| Billing/RCM | Limited administrative dependency | Provide represent-only administrative readiness information after clinical prerequisites | May prepare or describe synthetic readiness inputs; not final authorisation, claims management or clinical pathway selection | Financial dependency indicator, missing-information flag and evidence placeholder only | MVP does not build pre-authorisation, claim processing or denial management |
| Authorised financial decision-maker | Financial decision authority | Make the final financial-authorisation decision where relevant to the planned pathway | Final financial authorisation; no clinical pathway authority | Represent-only decision status and audit evidence; no autonomous approval | Financial authorisation remains outside the built MVP workflow and does not block urgent approved clinical escalation |
| Payer desk | Limited administrative dependency | Provide represent-only payer-information context where needed to explain an administrative blocker | Administrative information only; no coverage authorisation or clinical pathway authority | Payer-information missing flag and represent-only status; no live payer workflow | Real payer integration, pre-authorisation and denial management are deferred |
| Authorised clinical escalation owner | Escalation authority | Assign authorised clinical coverage when review or direction is blocked or overdue | Assign clinical coverage; does not replace the clinic physician’s clinical decision | Escalation visibility, coverage assignment and audit trail | Escalation preserves the human clinical gate; it does not acknowledge, diagnose or choose a pathway automatically |
| Nursing | Care-team stakeholder | Receive approved status and next-step information relevant to coordination or patient support | No new authority in the diagnostic-closure MVP | Approved communication/status visibility where needed | Must not be assigned unapproved clinical decision rights through a generic care-team role |
| Pharmacy | Downstream contextual stakeholder | Receive approved next-step information when medication-related coordination becomes relevant | No authority in the current MVP end states | Represent-only context, if needed for the broader journey | Pharmacy workflow is not part of the current diagnostic-to-next-step build |
| IT | Technical operating stakeholder | Support access, simulated integration availability, recovery and technical issue escalation | Technical access, outage and recovery controls; no clinical, identity or financial decisions | Integration status, denied-write/outage visibility, audit and recovery evidence | Restored service must not replay or imply an unverified source update |
| Governance | Policy and safety stakeholder | Govern workflow policy, evidence status, clinical safety, AI boundaries and review expectations | Policy and governance oversight; does not perform transaction-level clinical or financial decisions | Auditability, decision-register traceability, AI source links and exception reporting | Governance oversight is not user-research evidence or clinical validation |
| Patient/caregiver | Recipient and participant in approved communication | Receive approved information, confirm contact/appointment details where applicable and understand the next confirmed step | Can confirm receipt or operational details; does not provide clinical approval on behalf of the care team | Communication status, approved message record and confirmation evidence | No unapproved AI-generated clinical communication or assumption that receipt equals understanding |

## Stakeholder grouping

| Group | Roles | Sprint 3 treatment |
|---|---|---|
| Core MVP users | Clinic physician; Care Coordinator; Diagnostic operations user | Define detailed jobs-to-be-done and acceptance conditions first. |
| Decision and handoff authorities | Receiving team; Specialist; Authorised financial decision-maker; Identity reconciliation reviewer; Authorised clinical escalation owner | Preserve authority boundaries in the decision-rights and AI-suitability matrix. |
| Operational support | Hospital operations; Referral Coordinator; Billing/RCM; Payer desk; IT | Define the minimum tasks and data needed to prevent handoff or limited administrative-readiness failure. |
| Contextual or downstream stakeholders | Discharge coordinator; Nursing; Pharmacy | Capture information needs and deferred boundaries without expanding the MVP. |
| Oversight and recipient stakeholders | Governance; Patient/caregiver | Define audit, communication and safety acceptance conditions. |

## Dependency notes

- The Care Coordinator remains the operational visibility and closure owner, but does not gain clinical, identity or financial authority.
- The Care Coordinator records closure only after the defined human-owned end-state conditions and evidence checklist are satisfied; workflow ownership is not unilateral closure authority.
- The clinic physician remains the clinical authority for review, acknowledgement and follow-up direction.
- Diagnostic operations maintains operational status; an authorised reporting professional owns report finalisation, amendment or correction within source policy.
- The Referral Coordinator prepares and routes approved referrals; the receiving team accepts or rejects them.
- Billing/RCM and the payer desk are limited, represent-only dependencies in this MVP; the MVP does not build pre-authorisation, claims or denial management. The authorised financial decision-maker retains final authorisation.
- The authorised clinical escalation owner assigns clinical coverage when review or direction is blocked; this does not transfer clinical decision authority from the authorised clinician.
- The identity reconciliation reviewer resolves uncertain linkage; neither AI nor ContinuumOS may attach an uncertain event automatically.
- Hospital operations, discharge coordination, nursing and pharmacy do not expand the MVP into hospital command-centre, discharge or home-recovery functionality.

## Evidence status

This is a proposed stakeholder and workflow model derived from accepted product decisions and operating-model documentation. It is not user research, stakeholder confirmation or clinical validation. Sprint 3 jobs-to-be-done should identify which assumptions require later validation rather than treating this map as observed behaviour.

## Step 2 completion criteria

- [x] All Sprint 3-required stakeholder and authority roles are represented as explicit rows.
- [x] Each stakeholder has a bounded MVP relationship and job.
- [x] Decision authority is separated from operational support and system visibility.
- [x] Deferred stakeholders are represented without expanding MVP scope.
- [x] Patient/caregiver participation is included without assigning clinical authority.
- [x] Dependencies trace back to Sprint 1 and Sprint 2 canonical roles and controls.

The Sprint 3 tracker remains In Progress. This step is complete as a corrected documentation foundation; the overall Sprint 3 completion checkbox remains unchecked until all later work and cross-artifact review are complete.

## Source trace

- `Sprints/Sprint_1_Product_Case/Sprint_1_Product_Case.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/ownership_matrix.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/canonical_alignment_register.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/decision_rights_matrix.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/failure_path_map.md`
