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

Not yet recorded. A decision must be based on executed test evidence and the defect log.
