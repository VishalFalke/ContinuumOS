# Four-Diagram Traceability Pack

## Purpose and boundary

This pack gives one interview-friendly view of the four diagram types used in the case: business process, system context, logical data relationships and state lifecycle. It is derived from the approved canonical artifacts below. It introduces no new state, integration, data authority or implementation claim.

| Diagram type | Governing source | Use in the case |
|---|---|---|
| Business process | `mvp_diagnostic_workflow.md`; `future_state_workflow.md` | Shows people, decisions and handoffs. |
| System context | `simplified_architecture.md`; `system_of_record_table.csv` | Shows source authority and ContinuumOS boundaries. |
| Logical data relationship | `fhir_resource_map.md`; `field_mapping.csv`; `synthetic_fhir_resource_definitions.md` | Shows workflow-relevant information relationships, not a physical database ERD. |
| State lifecycle | `care_episode_state_model.md`; `state_transition_table.csv` | Shows permitted workflow progression and exception return. |

## 1. Business process diagram

```mermaid
flowchart LR
  A[Verified order and linkage] --> B[Diagnostic completion and current result]
  B --> C[Clinic physician reviews and acknowledges]
  C --> D{Human follow-up direction}
  D -->|Clinic management| E[Owner timeframe and communication evidence]
  D -->|Referral or escalation| F[Referral Coordinator prepares approved handoff]
  F --> G[Receiving team responds]
  E --> H[Next Step Confirmed]
  G --> H
  H --> I[Care Coordinator records Episode Completed]
  B --> X[Exception or reconciliation queue]
  X --> A
```

## 2. System context diagram

```mermaid
flowchart LR
  EHR[Clinic EHR or order source] -->|read-only synthetic context| COS[ContinuumOS orchestration overlay]
  DIAG[Diagnostic operations and reporting source] -->|status report version evidence| COS
  REF[Referral and receiving-team evidence] -->|represented or simulated response| COS
  COS --> TASK[Internal task exception and audit records]
  COS --> AI[Optional source-linked AI assists]
  AI -->|draft only; human review required| COS
```

## 3. Logical data relationship diagram

```mermaid
erDiagram
  PATIENT ||--o{ ENCOUNTER : has
  ENCOUNTER ||--o{ SERVICE_REQUEST : contains
  SERVICE_REQUEST ||--o{ DIAGNOSTIC_REPORT : based_on
  DIAGNOSTIC_REPORT ||--o{ OBSERVATION : references_when_configured
  PATIENT ||--o{ ORCHESTRATION_EPISODE : linked_after_verification
  ENCOUNTER ||--o{ ORCHESTRATION_EPISODE : linked_after_verification
  ORCHESTRATION_EPISODE ||--o{ INTERNAL_TASK : coordinates
  ORCHESTRATION_EPISODE ||--o{ AUDIT_EVENT : records
```

`INTERNAL_TASK`, `ORCHESTRATION_EPISODE` and `AUDIT_EVENT` are logical internal records, not asserted FHIR resources or a physical production schema.

## 4. State lifecycle diagram

```mermaid
stateDiagram-v2
  [*] --> Order_Created
  Order_Created --> Order_Accepted
  Order_Accepted --> Diagnostic_Scheduled
  Diagnostic_Scheduled --> Diagnostic_Completed
  Diagnostic_Completed --> Result_Available
  Result_Available --> Clinical_Review_Pending
  Clinical_Review_Pending --> Result_Acknowledged
  Result_Acknowledged --> Follow_up_Decision_Required
  Follow_up_Decision_Required --> Referral_Created
  Follow_up_Decision_Required --> Next_Step_Confirmed
  Referral_Created --> Referral_Accepted
  Referral_Accepted --> Next_Step_Confirmed
  Next_Step_Confirmed --> Episode_Completed
  Result_Available --> Result_Incomplete
  Clinical_Review_Pending --> Amended_Result_Received
  Amended_Result_Received --> Clinical_Review_Pending
```

The complete exception and safe-return semantics remain governed by the canonical state-transition table.
