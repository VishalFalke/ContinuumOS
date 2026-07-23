# Test Strategy and Test-Level Matrix

## Purpose and boundary

All testing uses synthetic data and simulated integrations. This strategy demonstrates test discipline; it does not claim production testing, live integration conformance or clinical validation.

| Test level | Primary purpose | Owner | Example ContinuumOS evidence | Entry / exit condition |
|---|---|---|---|---|
| Unit | Verify individual prototype logic, validation and permission behaviour | Prototype delivery owner | Acknowledgement action is unavailable to an unauthorised role; required field validation blocks an unsafe action | Runs against a controlled component/state condition; result recorded in test evidence |
| SIT | Verify the simulated source fixture, events, workflow state, task/exception and audit evidence work together | Prototype delivery owner with Lead BA review | Amended DiagnosticReport version reopens review, marks dependent draft stale and preserves audit history | Required synthetic fixture/event version is available; discrepancy is reconciled and retested |
| UAT | Verify that an authorised role can complete an end-to-end scenario against approved acceptance criteria | Quality/UAT reviewer with relevant workflow role | Clinic physician review through Care Coordinator confirmation; linkage exception; AI manual fallback | UAT readiness criteria met; expected/observed result and sign-off status recorded |
| Release gate | Decide whether the synthetic prototype is suitable for structured review | Product owner | No open Critical defect; required fallback and limitations documented | Go/no-go record links test, defect and change evidence |

Test evidence must identify test level, requirement, scenario, synthetic data version, expected result, observed result, executor, date, defect reference and result. A pass is not inferred from a completed screen or a draft test case.
