# Go/No-Go, Rollback and Pilot-entry Criteria

## Proposed decision

Conditional go for structured external review and synthetic workflow evaluation, subject to no open Critical defects and documented workarounds for accepted Medium defects.

## Required decision content

- Entry criteria
- Exit criteria
- Open-defect thresholds
- Critical and High hazard disposition
- Rollback criteria
- Known limitations
- Evidence boundary

## Continue, change, defer and stop interpretation

| Outcome | Minimum interpretation |
|---|---|
| Continue | Required scenarios and guardrails pass, no Critical defect remains and limitations are explicit. This permits structured synthetic review only. |
| Change and retest | A correctable workflow, comprehension, recovery or evidence defect affects one or more validation profiles. The affected scope returns through change control and linked retest. |
| Defer AI | An assist fails source-link, stale-version, unsupported-content, wrong-patient or fallback controls while the manual workflow remains complete. The assist is removed or disabled without blocking the core journey. |
| Stop / No-Go | Unsafe progression, authority bypass, uncertain attachment, false success or unrecoverable failure remains possible. No structured release proceeds. |
| Reconsider direction | Later structured review challenges the selected problem, user profile or first-adopter assumption. Record the evidence and decision before expanding the roadmap. |

No threshold, outcome or decision is achieved by this plan. Apply these interpretations only to recorded Sprint 6 evidence.

The release record must reference `product_safety_hazard_and_control_register.csv` and identify the executed prevention, detection and recovery evidence for each Critical or High hazard. A qualitative hazard classification does not prove likelihood, harm incidence or real-world safety.

## Decision record

2026-07-27 Builder assessment: a No-Go / change-and-retest recommendation was recorded after QLT-604 triage. It reviewed `T-QLT-601-01` through `T-QLT-604-01`, `AI-EVAL-QLT-603-01` through `AI-EVAL-QLT-603-04`, the safety-hazard register and the defect log.

2026-07-27 corrective evidence: the Product Owner reported passing physical-keyboard and assistive-technology checks (`T-QLT-604-02`), resolving `DEF-QLT-604-01`. The duplicate reconciliation row was formally retained as `SDR-ENAB-602-01-SUPERSEDED`, resolving `DEF-QLT-604-02` without changing the primary result or prototype behaviour.

2026-07-27 Product Owner decision: **Conditional Go for structured synthetic review and synthetic workflow evaluation only.** No open Critical or High defect remains in this synthetic prototype evidence set. This decision does not approve production deployment, clinical use, live integration, accessibility certification, real-user research or external data processing.
