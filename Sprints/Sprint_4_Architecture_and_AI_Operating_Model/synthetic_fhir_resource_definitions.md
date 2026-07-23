# Sprint 4 — Synthetic FHIR Resource Definitions

## Purpose and evidence status

This artifact defines the synthetic resource fixture boundary for the limited ContinuumOS demonstration. The structures are FHIR R4-shaped requirements examples for source-linked workflow orchestration. They are not a live FHIR server, production conformance package, terminology validation, clinical dataset or source write implementation.

All data is synthetic and tied to the approved tracer patient Asha Mehta, `SYN-PAT-1001`. No definitive disease is asserted. The example finding is intentionally workflow-oriented and requires human review.

## Resource boundary

The MVP reads six source FHIR R4 resource types:

`Patient`, `Encounter`, `Practitioner`, `ServiceRequest`, `Observation` and `DiagnosticReport`.

ContinuumOS also maintains an internal/simulated orchestration Task model. It is not claimed to be a FHIR R4 `Task`, and no FHIR `Task` write-back is included.

## Synthetic fixture set

| Resource | Synthetic ID | Source role | Minimum workflow use | Canonical states or controls |
|---|---|---|---|---|
| Patient | `SYN-PAT-1001` | Simulated identity source | Display minimum patient context and verify the subject reference. | Patient linkage; `Patient Match Failed`. |
| Encounter | `SYN-ENC-2001` | Simulated clinic encounter source | Verify the care context before episode attachment. | Encounter linkage; `Encounter Missing`. |
| Practitioner — clinic physician | `SYN-PRAC-3001` | Simulated source directory/context | Attribute the ordering and reviewing clinician; role authority comes from workflow policy. | Human decision attribution. |
| Practitioner — reporting professional | `SYN-PRAC-3002` | Simulated diagnostic source directory/context | Attribute the diagnostic source performer; does not gain reviewing-clinician authority. | Source report/Observation attribution. |
| ServiceRequest | `SYN-SR-4001` | Simulated clinic ordering source | Provide diagnostic order evidence and link it to the encounter. | `Order Created` only; does not prove acceptance or scheduling. |
| Observation | `SYN-OBS-5001` | Simulated diagnostic source | Provide source-linked supporting evidence where relevant. | `Result Available` support only when required references resolve; presence alone is insufficient. |
| DiagnosticReport | `SYN-DR-6001` | Simulated authorised reporting source | Provide current report status, version, order link and result references. | T04 completeness; `Result Incomplete`; `Amended Result Received`; renewed review. |
| Internal orchestration Task | `SYN-TASK-7001` | ContinuumOS internal workflow layer | Track owner, SLA, blocker, exception, human decision request and evidence. | All active states; exception queue; closure evidence. |

## Minimum synthetic examples

These examples show the minimum fields and relationships. They are illustrative fixtures, not claims of server response or implementation.

### Patient

```json
{
  "resourceType": "Patient",
  "id": "SYN-PAT-1001",
  "identifier": [{"system": "https://continuumos.example/synthetic/patient", "value": "SYN-PAT-1001"}],
  "name": [{"text": "Asha Mehta"}],
  "gender": "female",
  "birthDate": "1978-04-12"
}
```

### Encounter

```json
{
  "resourceType": "Encounter",
  "id": "SYN-ENC-2001",
  "status": "in-progress",
  "class": {"code": "AMB"},
  "subject": {"reference": "Patient/SYN-PAT-1001"},
  "period": {"start": "2026-07-18T09:00:00+05:30"}
}
```

### Practitioner — clinic physician

```json
{
  "resourceType": "Practitioner",
  "id": "SYN-PRAC-3001",
  "active": true,
  "name": [{"text": "Synthetic Clinic Physician"}]
}
```

### Practitioner — reporting professional

```json
{
  "resourceType": "Practitioner",
  "id": "SYN-PRAC-3002",
  "active": true,
  "name": [{"text": "Synthetic Reporting Professional"}]
}
```

### ServiceRequest

```json
{
  "resourceType": "ServiceRequest",
  "id": "SYN-SR-4001",
  "status": "active",
  "intent": "order",
  "code": {"coding": [{"system": "https://continuumos.example/synthetic/procedure", "code": "SYN-US-ABDOMEN", "display": "Synthetic abdominal ultrasound"}]},
  "subject": {"reference": "Patient/SYN-PAT-1001"},
  "encounter": {"reference": "Encounter/SYN-ENC-2001"},
  "requester": {"reference": "Practitioner/SYN-PRAC-3001"},
  "authoredOn": "2026-07-18T09:05:00+05:30"
}
```

### Observation

```json
{
  "resourceType": "Observation",
  "id": "SYN-OBS-5001",
  "status": "final",
  "code": {"coding": [{"system": "https://continuumos.example/synthetic/finding", "code": "SYN-FINDING-01", "display": "Synthetic non-specific finding requiring review"}]},
  "subject": {"reference": "Patient/SYN-PAT-1001"},
  "encounter": {"reference": "Encounter/SYN-ENC-2001"},
  "basedOn": [{"reference": "ServiceRequest/SYN-SR-4001"}],
  "issued": "2026-07-18T11:10:00+05:30",
  "performer": [{"reference": "Practitioner/SYN-PRAC-3002"}],
  "valueString": "Synthetic non-specific imaging finding documented for clinician review."
}
```

### DiagnosticReport

```json
{
  "resourceType": "DiagnosticReport",
  "id": "SYN-DR-6001",
  "meta": {"versionId": "1", "lastUpdated": "2026-07-18T11:15:00+05:30"},
  "status": "final",
  "code": {"coding": [{"system": "https://continuumos.example/synthetic/procedure", "code": "SYN-US-ABDOMEN", "display": "Synthetic abdominal ultrasound"}]},
  "subject": {"reference": "Patient/SYN-PAT-1001"},
  "encounter": {"reference": "Encounter/SYN-ENC-2001"},
  "basedOn": [{"reference": "ServiceRequest/SYN-SR-4001"}],
  "issued": "2026-07-18T11:15:00+05:30",
  "performer": [{"reference": "Practitioner/SYN-PRAC-3002"}],
  "result": [{"reference": "Observation/SYN-OBS-5001"}],
  "conclusion": "Synthetic report requires clinician review and follow-up direction."
}
```

### Amended supporting Observation and report version

These small version-two examples are synthetic deltas for version-change handling. They are not an assertion that every DiagnosticReport requires an Observation result.

```json
{
  "resourceType": "Observation",
  "id": "SYN-OBS-5002",
  "status": "final",
  "code": {"coding": [{"system": "https://continuumos.example/synthetic/finding", "code": "SYN-FINDING-02", "display": "Synthetic amended supporting finding"}]},
  "subject": {"reference": "Patient/SYN-PAT-1001"},
  "encounter": {"reference": "Encounter/SYN-ENC-2001"},
  "basedOn": [{"reference": "ServiceRequest/SYN-SR-4001"}],
  "issued": "2026-07-18T13:25:00+05:30",
  "performer": [{"reference": "Practitioner/SYN-PRAC-3002"}],
  "valueString": "Synthetic amended non-specific finding documented for renewed clinician review."
}
```

```json
{
  "resourceType": "DiagnosticReport",
  "id": "SYN-DR-6001",
  "meta": {"versionId": "2", "lastUpdated": "2026-07-18T13:30:00+05:30"},
  "status": "amended",
  "subject": {"reference": "Patient/SYN-PAT-1001"},
  "encounter": {"reference": "Encounter/SYN-ENC-2001"},
  "basedOn": [{"reference": "ServiceRequest/SYN-SR-4001"}],
  "result": [{"reference": "Observation/SYN-OBS-5002"}],
  "performer": [{"reference": "Practitioner/SYN-PRAC-3002"}],
  "conclusion": "Synthetic amended report requiring renewed clinician review."
}
```

Version 1 acknowledgement remains historical evidence. Version 2 creates a renewed review obligation; downstream referral and communication are flagged for human reassessment, with no automatic reversal of a prior human decision.

### Simulated source-completion event

This is simulated operational evidence, not a FHIR resource in the minimum resource set. It supplies the separate source-specific completion evidence required by the fixture rule.

```json
{
  "eventType": "diagnostic.report.completed",
  "eventId": "SYN-EVT-6101",
  "sourceSystem": "synthetic-ris",
  "serviceRequestRef": "ServiceRequest/SYN-SR-4001",
  "diagnosticReportRef": "DiagnosticReport/SYN-DR-6001",
  "reportVersion": "1",
  "completedAt": "2026-07-18T11:15:00+05:30"
}
```

### Internal orchestration Task

```json
{
  "model": "continuum_task",
  "id": "SYN-TASK-7001",
  "episodeRef": "SYN-EP-8001",
  "patientRef": "Patient/SYN-PAT-1001",
  "encounterRef": "Encounter/SYN-ENC-2001",
  "state": "Clinical Review Pending",
  "ownerRole": "Clinic physician",
  "ownerRef": "Practitioner/SYN-PRAC-3001",
  "dueAt": "2026-07-18T15:15:00+05:30",
  "sourceReportRef": "DiagnosticReport/SYN-DR-6001",
  "sourceVersion": "1",
  "reason": "Current report requires human acknowledgement",
  "auditRef": "SYN-AUD-9001"
}
```

## Resource relationship and state rules

```text
Patient/SYN-PAT-1001
  └── Encounter/SYN-ENC-2001
        ├── ServiceRequest/SYN-SR-4001 ── requester → Practitioner/SYN-PRAC-3001
        ├── Observation/SYN-OBS-5001 ── performer → Practitioner/SYN-PRAC-3002
        └── DiagnosticReport/SYN-DR-6001 ── performer → Practitioner/SYN-PRAC-3002
              └── result → Observation/SYN-OBS-5001

ContinuumOS internal episode SYN-EP-8001
  └── continuum_task SYN-TASK-7001
```

- `ServiceRequest` supports `Order Created` evidence only. Acceptance, scheduling and completion require operational evidence.
- For the approved synthetic fixture, `Result Available` requires an accepted current DiagnosticReport status (`final`, `amended` or `corrected`), the current source version, resolution of the configured required result references and the separate source-specific completion evidence. Observation or preliminary/partial evidence alone is insufficient.
- `DiagnosticReport.meta.versionId` and `meta.lastUpdated` are source version/timestamp evidence; re-review after amended/corrected content is ContinuumOS workflow policy.
- For this approved synthetic ultrasound fixture, the configured `DiagnosticReport.result` reference must resolve to the expected supporting Observation or the result routes to `Result Incomplete`. This is a ContinuumOS fixture completion rule, not a claim that every valid FHIR DiagnosticReport must contain an Observation reference.
- An amended or corrected report creates a new version-change event. Prior acknowledgement remains historical evidence only; renewed review and downstream reassessment are required.
- Patient, Encounter and event linkage must satisfy the linkage contract before episode attachment.
- The internal Task is orchestration evidence and cannot substitute for acknowledgement, follow-up direction, referral acceptance, financial authorisation or closure.
- The `https://continuumos.example/synthetic/procedure` and `https://continuumos.example/synthetic/finding` coding systems are deliberately non-clinical placeholders. They are not validated SNOMED CT, LOINC, RadLex or production local terminology.

## Minimum-necessary data and write boundary

- Retrieve and retain only fields required for the approved workflow job, evidence trace and evaluation.
- Keep source IDs, versions, references and timestamps so displays and AI outputs remain source-linked.
- Do not copy complete clinical reports or create a longitudinal clinical repository in ContinuumOS.
- ContinuumOS may write internal episode, task, exception, workflow, AI-review and audit evidence within the demonstration boundary.
- ContinuumOS does not write Patient, Encounter, ServiceRequest, Observation or DiagnosticReport source records.
- No FHIR `Task` write-back is claimed.
- Raw access tokens, secrets and full authorisation responses are never stored.

## Fixture failure variants for later event/UAT work

| Variant | Expected handling |
|---|---|
| Missing Patient or Encounter reference | `Patient Match Failed` or `Encounter Missing`; no episode attachment. |
| Observation present without complete current DiagnosticReport | Remain pending or route to `Result Incomplete`; do not create `Result Available`. |
| DiagnosticReport status `preliminary` or `partial` | Remain pending; final-result acknowledgement obligation is not satisfied. |
| Amended/corrected report before acknowledgement | Route through E05/E06; current version requires human review/acknowledgement. |
| Amended/corrected report after acknowledgement | Preserve prior acknowledgement as historical; reopen review and flag downstream referral/communication for human reassessment. |
| Duplicate resource/event version | `Duplicate Event Suspected`; preserve all evidence and pause downstream progression. |
| Source read unavailable | Preserve pending/last verified state; no assumed success. |

## Scope classification

| Item | Classification |
|---|---|
| Synthetic FHIR-shaped Patient, Encounter, Practitioner, ServiceRequest, Observation and DiagnosticReport fixtures | Build-now demonstration data definition; not a live FHIR integration claim. |
| Internal `continuum_task` model | Build-now orchestration definition; not FHIR R4 `Task`. |
| Real terminology/profile/server conformance validation | Deferred validation/readiness item. |
| Real EHR, LIS, RIS/PACS or source write-back | Deferred; represented through simulated evidence only. |

## Source trace

- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/architecture_principles_and_boundary.md`
- `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/smart_on_fhir_launch_sequence.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/fhir_resource_map.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/field_mapping.csv`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/permissions_and_interoperability_assumptions.md`
- `Sprints/Sprint_3_Users_Decisions_and_MVP/integration_flow_ehr_launch_to_audit.md`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/system_of_record_table.csv`
- `Sprints/Sprint_2_Care_Journey_and_Operating_Model/failure_path_map.md`
- `01_Day_1_Product_Framing/state_transition_table.csv`
