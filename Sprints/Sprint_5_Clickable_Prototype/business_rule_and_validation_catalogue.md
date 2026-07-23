# Business-rule and Validation Catalogue

| Rule area | Required rule | Validation or failure behaviour | Source | Status |
|---|---|---|---|---|
| Result availability | A result cannot become available unless the report status is accepted as final. | Define pass/fail behaviour in the requirements baseline. | Sprint 1–4 reference required | Draft |
| Clinical acknowledgement | Requires patient, encounter, report version, actor and timestamp. | Define required-field validation. | Sprint 1–4 reference required | Draft |
| Amended report | Creates a re-review requirement. | Define re-review route and audit event. | Sprint 1–4 reference required | Draft |
| Patient linkage | Uncertain patient linkage blocks clinical action. | Route to exception management. | Sprint 1–4 reference required | Draft |
| Referral authority | Referral coordinator cannot make the clinical referral decision. | Enforce authorised actor. | Sprint 1–4 reference required | Draft |
| Receiving response | Receiving team owns referral acceptance. | Record response and route. | Sprint 1–4 reference required | Draft |
| AI control | AI-generated content cannot be sent without human approval. | Display approval and fallback behaviour. | Sprint 1–4 reference required | Draft |
| Closure | Episode closure requires confirmed next-step evidence. | Block closure when evidence is missing. | Sprint 1–4 reference required | Draft |
| Failed write | Failed writes remain visible and recoverable. | Show recovery status. | Sprint 1–4 reference required | Draft |
| Duplicate event | Duplicate events must not create duplicate workflow tasks. | Define duplicate handling. | Sprint 1–4 reference required | Draft |
