# Sprint 3 — Minimum FHIR Resource Map

## Purpose and evidence status

This is the minimum resource map for the synthetic diagnostic-closure MVP and limited SMART on FHIR demonstration. It defines the data needed for the workflow; it does not claim a live FHIR server, production conformance, production identity matching or source-system write implementation.

## Resource boundary

The demonstration is mapped conceptually to FHIR R4 resources. This is a conceptual/limited demonstration, not a claim of server conformance.

The MVP reads only these six source FHIR R4 resource types:

`Patient`, `Encounter`, `Practitioner`, `ServiceRequest`, `Observation` and `DiagnosticReport`.

The seventh item in this map, Task, is an internal or simulated ContinuumOS orchestration record for this MVP; it is not claimed to be a FHIR R4 resource or FHIR R4-conformant. A real FHIR `Task` write back to an EHR is represent-only unless a separate working write demonstration is explicitly approved.

## Minimum resource map

| Resource | MVP purpose | Minimum fields or references | Source authority | ContinuumOS use | Write boundary | Related states or decisions |
|---|---|---|---|---|---|---|
| Patient | Display and verify the synthetic patient context. | `id`; synthetic `identifier`; display name; limited demographic context needed for safe display. | Source identity system in the simulated launch context. | Link the verified patient to the orchestration record and display the minimum context. | No autonomous identity update or production matching. | `Patient Match Failed`; episode attachment. |
| Encounter | Verify the care context before attaching diagnostic work. | `id`; `status`; `subject`; `class`; limited `period`; source/service context where needed. | Source encounter system. | Confirm the episode encounter and prevent silent attachment. | No autonomous encounter creation or correction. | `Encounter Missing`; episode attachment. |
| Practitioner | Identify the source clinician, reporting professional or relevant actor context. | `id`; limited `identifier`; display name; `active` where available; source role/display context. | Source directory or resource context. | Display accountable/performing context and support attribution. | Role authority comes from workflow configuration, access policy or possibly `PractitionerRole`, not `Practitioner` alone. | Clinical review, reporting and task attribution. |
| ServiceRequest | Retrieve the synthetic diagnostic order and its context. | `id`; `status`; `intent`; `code`; `subject`; `encounter`; `requester`; `authoredOn`; relevant priority or reason only where needed. | Ordering source system. | Create/update the internal orchestration record from a verified source order; display order context. Do not infer provider acceptance or scheduling from resource presence or status. | No autonomous clinical order creation or source-order write. | `Order Created` only; acceptance and scheduling require operational evidence. |
| Observation | Display supporting diagnostic values or structured findings where relevant. | `id`; `status`; `code`; `subject`; `encounter`; `effective[x]`; `issued`; `basedOn`; `performer`; `value[x]` where present; `component` or other valid structure where applicable; `interpretation` where source-provided; `derivedFrom`/reference context only where needed. | Diagnostic source system. | Link supporting values to the current report and expose source context for human review. A single `value[x]` is not required for every Observation, and Observation presence alone does not establish `Result Available`. | No silent source correction, AI resolution of conflicting values or result-completion inference from Observation presence. | `Diagnostic Completed`; `Result Available`; `Result Incomplete`. |
| DiagnosticReport | Display the current report, version, configured result-reference context and amendment context for clinical review. | `id`; `meta.versionId`; `meta.lastUpdated`; `status`; `code`; `subject`; `encounter`; `basedOn`; `issued`; `performer`; `result` references; `conclusion` or source narrative where available. | Authorised reporting source/professional. | For the approved synthetic fixture, `Result Available` requires accepted current status (`final`, `amended` or `corrected`), current source version, configured required result-reference resolution and separate source-specific completion evidence; preserve renewed-review requirements. | No autonomous report authoring, amendment, interpretation or completion inference from preliminary/partial or missing fixture evidence. | `Result Available`; `Result Incomplete`; `Clinical Review Pending`; `Amended Result Received`; `Result Acknowledged`. |
| Task | Represent ContinuumOS internal orchestration work, owner, due time, exception or human decision request. | Internal/simulated `continuum_task` ID, status, focus, patient/encounter references, owner, authored time, due/SLA, reason, exception and output references. | ContinuumOS for internal orchestration task visibility; source tasks remain source-authoritative if encountered. | Assign owners, age work, route exceptions, request human decisions and record workflow evidence. | This is an internal orchestration task inspired by FHIR `Task`, not claimed to be FHIR R4-conformant; no real EHR FHIR `Task` write. | All active states; exception queue; `Next Step Confirmed`; `Episode Completed`. |

## Resource relationship view

```text
Patient
   └── Encounter
         ├── ServiceRequest ── Practitioner (requester)
         ├── Observation
         └── DiagnosticReport ── Practitioner (reporting context)

ContinuumOS orchestration record
   └── internal/simulated Task(s) ── owner, SLA, exception, human decision and audit references
```

## Retrieval and minimum-use rules

- Retrieve only the fields required for the diagnostic-closure workflow and the approved user job.
- Apply minimum-necessary data to retrieval, display, internal retention, audit payloads and AI inputs. Reference complete source records where possible; do not copy them into a duplicate clinical or longitudinal repository.
- Preserve source IDs, versions and timestamps so AI summaries and workflow decisions remain source-linked.
- Do not treat a resource being present as proof of clinical review, referral acceptance, financial authorisation or next-step confirmation.
- `ServiceRequest` presence or status can support `Order Created`, but cannot advance `Order Accepted` or `Diagnostic Scheduled`; those states require a simulated/source operational event, appointment/slot evidence or internal orchestration task evidence.
- For the approved synthetic fixture, `Result Available` requires an accepted current DiagnosticReport status (`final`, `amended` or `corrected`), the current source version, resolution of configured required result references and separate source-specific completion evidence. Observation or preliminary/partial evidence alone is insufficient; missing or inconsistent configured evidence routes to `Result Incomplete`.
- Conflicting or incomplete source data remains visible and routes to the appropriate canonical exception or human review.
- Patient, Encounter and event linkage must be verified before attachment.
- The later linkage contract must define required identifiers, acceptable references, Encounter requirements, version handling, permitted manual reconciliation and the accountable resolver. Manual reconciliation may establish the internal reference but cannot silently alter source identity or encounter records.
- FHIR resource presence does not create a new workflow state or grant a role decision authority.

## Resource-map completion criteria

- [x] All six source FHIR R4 resource types and the bounded internal/simulated Task model are mapped.
- [x] Each resource has a bounded MVP purpose and minimum field set.
- [x] Source authority and ContinuumOS write boundaries are explicit.
- [x] Internal/simulated Task handling is distinguished from real FHIR Task writes.
- [x] FHIR R4 is stated explicitly, with technical report version, report status and orchestration re-review kept distinct.
- [x] No new workflow state or autonomous clinical capability is introduced.

## Version and status distinction

- `DiagnosticReport.meta.versionId` identifies the technical version of the same source resource.
- `DiagnosticReport.meta.lastUpdated` records the source resource update timestamp.
- `DiagnosticReport.status` describes the report workflow status, such as preliminary, final, amended or corrected where provided by the source.
- ContinuumOS re-review after an amendment or correction is an orchestration policy and does not change the meaning of the FHIR fields. The current amended/corrected version must be reviewed and acknowledged; any earlier acknowledgement remains historical evidence only.

## Source trace

- `Sprints/Sprint_3_Users_Decisions_and_MVP/integration_flow_ehr_launch_to_audit.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/mvp_scope_freeze.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/sprint_3_baseline_and_alignment.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/system_of_record_table.csv`
- `01_Day_1_Product_Framing/state_transition_table.csv`
