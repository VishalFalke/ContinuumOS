# Defect Triage and Release Policy

## Severity versus priority

Severity describes the harm or control impact if the defect is present. Priority describes the order in which the team fixes it. They are related but not identical.

| Classification | Definition | Release treatment |
|---|---|---|
| Critical / P1 | Could bypass a human gate, misattach an episode, misrepresent source/version evidence, create an unsafe state advance or prevent the core journey | No release while open |
| High / P1 or P2 | Breaks a core workflow, required exception/safe return or audit evidence without an acceptable controlled workaround | Fix before release unless Product owner records a reasoned synthetic-review limitation |
| Medium / P2 | Material usability, validation or non-core workflow problem with a documented workaround | Triage, plan fix/retest or record accepted limitation |
| Low / P3 | Cosmetic or minor clarity issue without workflow/control impact | Backlog or fix when practical |

## Triage workflow

1. Link the defect to requirement, scenario, test level and observed evidence.
2. Assess clinical/operational control impact before assigning severity.
3. Assign a delivery priority, owner, workaround and proposed release.
4. Fix and retest against the same scenario/data version.
5. Record the release decision. No result may be recorded until the test occurs.
