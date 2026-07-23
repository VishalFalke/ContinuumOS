# Prototype Build and Release Plan

## Prototype boundary

Build the seven required screens from the Sprint 5 approved baseline only. Use synthetic patient and episode data, simulated FHIR responses, simulated events, mocked failures, pre-written AI outputs, visible audit records and explicit evidence-status labels.

## Release 0.1

Build valid launch, episode display, result review, acknowledgement, follow-up direction, referral handoff, receiving response, next-step confirmation, exceptions and audit timeline.

## Test execution

Execute approved scenarios, not just document them. Cover happy-path completion, state transitions, required-field validation, permission behaviour, referral ownership and closure gating. Cover missing encounter, uncertain linkage, duplicate event, amended report, failed write, AI outage, downstream service outage and missing audit entry.

## Release 0.2

Correct the highest-value defects. Update the requirements, business rules, acceptance criteria, prototype, traceability, test scenarios, decision log and change log.

## AI output control card

Every AI output must show source data, output type, uncertainty, source links, human owner, approval status, permitted action and fallback behaviour.

## Evidence boundary

Do not claim actual test execution until it is recorded in `test_execution_evidence.csv`. All test data and integrations remain simulated.
