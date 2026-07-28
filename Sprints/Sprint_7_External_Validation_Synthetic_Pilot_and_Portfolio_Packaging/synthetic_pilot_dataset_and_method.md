# Synthetic Pilot Dataset and Method

## Approved method: repeated-run synthetic pilot

**Decision date:** 2026-07-28

**Dataset boundary:** The prototype contains one approved synthetic tracer: `SYN-EP-8001` / Asha Mehta (synthetic), `SYN-DR-6001` version `2`, fixture version `ENAB-602.1`. The pilot therefore uses **20 controlled scenario runs of that one tracer**, not 20 distinct patient episodes. Results must use the term *scenario run*.

**Prototype release:** PR #3 commit `aa07012`, the Sprint 6B clean-session regression baseline.

**Execution boundary:** Local prototype only; simulated roles, integrations and AI drafts only. No real patient data, live system, model call, clinical decision, production SLA or user-research claim is involved.

### Run protocol

1. Start each run from its listed route or documented represented context, with the local Vite preview ready.
2. Use the required represented role and complete the stated action, invalid action, recovery or manual fallback.
3. Start the protocol stopwatch when the task content is available. Stop it when the recorded result, blocked feedback, or safe-recovery instruction is visible. Record it as **scripted pilot elapsed time**, not an operational turnaround time or SLA.
4. Record state, owner, next action, handoff evidence, exception outcome, AI disposition and completion result exactly as observed.
5. Run the approved Node test suite before and after the browser walkthrough. A failed control, authority bypass, false success, or missing recovery stops the affected run and is recorded for change-and-retest.

### Scenario-run matrix

| Run | Path | Represented role | Expected observable result | Timing / evidence field |
|---|---|---|---|---|
| P-01 | Authorised launch and episode orientation | Care Coordinator | Protected context opens; Clinic physician is next owner | Owner visible; launch outcome |
| P-02 | Current report acknowledgement | Clinic physician | `EVT-10`; human acknowledgement only | Result-to-acknowledgement elapsed |
| P-03 | Day-care referral direction | Clinic physician | `EVT-11`; `Referral Created` | Direction handoff evidence |
| P-04 | Referral package and send | Referral Coordinator | `EVT-12` and `EVT-13`; acceptance remains separate | Handoff elapsed / package evidence |
| P-05 | Receiving-team acceptance | Receiving team | `EVT-14`; `Referral Accepted`; Care Coordinator next | Receiving-response elapsed |
| P-06 | Next-step confirmation then scoped closure | Care Coordinator | `EVT-16`, then separate closure availability | Completion elapsed / completion result |
| P-07 | Authorisation unavailable | Care Coordinator | Context remains hidden; accountable recovery named | Safe recovery visible |
| P-08 | Patient-match failure | Care Coordinator | Context remains hidden; exception recovery named | Safe recovery visible |
| P-09 | Wrong-role acknowledgement attempt | Non-assigned role | Action is blocked; no acknowledgement evidence | Unsafe action prevented |
| P-10 | Stale-report acknowledgement attempt | Clinic physician | Action is blocked; current source remains required | Unsafe action prevented |
| P-11 | No direction selected | Clinic physician | Direction recording stays blocked | Unsafe action prevented |
| P-12 | Incomplete referral package | Referral Coordinator | Routing stays blocked; missing requirement is visible | Unsafe action prevented |
| P-13 | Receiving response without recording attribution | Receiving team | Recording stays blocked; role/source required | Unsafe action prevented |
| P-14 | Receiving-team rejection | Receiving team | `Referral Rejected`; Clinic physician direction work returns | Rejection handoff / next owner |
| P-15 | Exception resolution blocked | Wrong exception role | Recovery stays blocked | Unsafe action prevented |
| P-16 | Exception resolution and safe return | Accountable exception owner | `EVT-21`; verified recovery; manual return named | Exception elapsed / recovery evidence |
| P-17 | AI-01 current draft accepted | Clinic physician | `EVT-20`; no canonical state change; manual workflow remains | AI disposition / source links |
| P-18 | AI-01 stale draft rejected | Clinic physician | Acceptance blocked; manual return to SCR-03 | AI fallback visible |
| P-19 | AI-02 human correction | Referral Coordinator | Corrected `EVT-20` requires rationale; no canonical state change | AI correction / source links |
| P-20 | AI-02 unavailable draft discarded | Referral Coordinator | Acceptance blocked; manual return to SCR-05 | AI fallback visible |

## Measures

- Time to identify current owner
- Workflow completion time
- Result-to-acknowledgement time
- Referral acceptance time
- Missed handoffs
- Unresolved tasks
- Exception rate
- Correction rate
- AI summary acceptance
- AI correction rate
- Audit completeness
- Task completion rate
- Usability findings

## Evidence rule

Report observed values only. Do not invent improvement percentages. Pilot execution and results are not yet recorded.

## Run evidence log

All runs were executed on 2026-07-28 against the stated local release. Browser interaction elapsed times are recorded only where a browser action was performed; controller/story-test runs confirm deterministic rule and presentation outcomes but do not represent human task time.

| Run | Scripted pilot elapsed | Observed outcome | Result | Evidence reference | Notes |
|---|---:|---|---|---|---|
| P-01 | 0.339 s | Authorised launch opened the episode overview; Clinic physician was next owner | Pass | Browser walkthrough; `orientation-story.test.mjs` | No protected context before launch. |
| P-02 | 0.311 s | Current v2 acknowledgement showed `EVT-10` only after human action | Pass | Browser walkthrough; `review-direction-story.test.mjs` | No diagnosis or direction selected. |
| P-03 | 0.695 s | Day-care referral recorded `EVT-11` and `Referral Created` | Pass | Browser walkthrough; `review-direction-story.test.mjs` | No preselected direction. |
| P-04 | 0.748 s | Package/send evidence recorded `EVT-12` and `EVT-13`; acceptance stayed separate | Pass | Browser walkthrough; `handoff-response-story.test.mjs` | Browser console: 0 errors. |
| P-05 | N/A — rule test | Receiving acceptance recorded `EVT-14` and named Care Coordinator next | Pass | `handoff-response-story.test.mjs` | No cross-screen persistence implied. |
| P-06 | N/A — rule test | Confirmation and scoped closure stayed separate actions | Pass | `confirmation-closure-story.test.mjs` | `EVT-16` before closure. |
| P-07 | N/A — rule test | Unavailable launch hid protected context and named recovery | Pass | `orientation-story.test.mjs`; `launch-controller.test.mjs` | Safe recovery only. |
| P-08 | N/A — rule test | Patient-match failure hid protected context and named recovery | Pass | `orientation-story.test.mjs` | Safe recovery only. |
| P-09 | N/A — rule test | Unassigned acknowledgement was blocked with no `EVT-10` | Pass | `review-controller.test.mjs` | Authority preserved. |
| P-10 | N/A — rule test | Stale-report acknowledgement was blocked | Pass | `review-controller.test.mjs` | Current version required. |
| P-11 | N/A — rule test | No direction selected stayed blocked | Pass | `review-direction-story.test.mjs` | No unsafe default. |
| P-12 | N/A — rule test | Incomplete referral package stayed blocked | Pass | `handoff-response-story.test.mjs`; `referral-controller.test.mjs` | Missing requirement visible. |
| P-13 | N/A — rule test | Response without attribution stayed blocked | Pass | `handoff-response-story.test.mjs`; `receiving-response-controller.test.mjs` | Decision and recording roles separate. |
| P-14 | N/A — rule test | Rejection returned work to Clinic physician without rerouting | Pass | `handoff-response-story.test.mjs`; `receiving-response-controller.test.mjs` | Manual recovery. |
| P-15 | N/A — rule test | Wrong-role exception resolution stayed blocked | Pass | `exception-recovery-story.test.mjs`; `exception-controller.test.mjs` | Exception stayed open. |
| P-16 | N/A — rule test | Verified recovery recorded `EVT-21` and named manual return | Pass | `exception-recovery-story.test.mjs`; `exception-controller.test.mjs` | Original action not recreated. |
| P-17 | N/A — rule test | Current AI-01 draft accepted for orientation with `EVT-20` | Pass | `ai-review-story.test.mjs`; `ai-draft-controller.test.mjs` | No canonical state change. |
| P-18 | N/A — rule test | Stale AI-01 acceptance blocked; manual SCR-03 return available | Pass | `ai-review-story.test.mjs`; `ai-draft-controller.test.mjs` | Human fallback preserved. |
| P-19 | N/A — rule test | AI-02 correction required rationale and recorded `EVT-20` | Pass | `ai-review-story.test.mjs`; `ai-draft-controller.test.mjs` | No canonical state change. |
| P-20 | N/A — rule test | Unavailable AI-02 discarded; manual SCR-05 return available | Pass | `ai-review-story.test.mjs`; `ai-draft-controller.test.mjs` | No model-quality claim. |

### Execution result and limitation

All 20 controlled scenario runs passed against the approved deterministic prototype evidence. Four representative interactions were observed in the browser; their action elapsed times were 0.311–0.748 seconds. The remaining runs were freshly executed through the controller/story-test suite because they cover represented local states and do not persist a cross-screen episode. These timings are not human task-completion times, operational turnaround times or service-level results.
