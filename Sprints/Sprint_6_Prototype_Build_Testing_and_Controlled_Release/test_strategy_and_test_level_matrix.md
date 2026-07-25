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

## Interaction, loading and usability evidence

For each applicable `SCR-01` to `SCR-10` scenario, record:

- the authorised validation profile and role;
- the interaction state exercised: initial, loading, unavailable, empty, error, blocked, success or recovery;
- whether the current state, accountable owner, permitted action and consequence are understandable;
- whether action feedback distinguishes in-progress, completed, failed and safely recoverable behaviour; and
- any linked defect and retest evidence.

Use qualitative findings unless a separate timing method is defined before execution. A simulated delay or visible loading state does not establish production latency, and an unmeasured interaction must not be described as fast.

## Safety hazard traceability

Use `product_safety_hazard_and_control_register.csv` as the safety-test index. Before release review:

- link each Critical or High hazard to the relevant requirement, screen, scenario and test evidence;
- record whether the preventive control blocked the unsafe path;
- record whether detection made the condition visible to the authorised role;
- demonstrate the defined recovery or containment path where applicable;
- link any failure to the defect and change-control records; and
- leave residual uncertainty explicit where synthetic testing cannot support a production conclusion.

An unexecuted planned test is not evidence that a hazard is controlled.
