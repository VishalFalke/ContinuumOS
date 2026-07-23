# Definition of Ready and Definition of Done

## Purpose and evidence status

This control makes the Sprint 5 to Sprint 7 delivery gates explicit. It is a proposed internal delivery standard for the synthetic portfolio case. It does not show that a requirement was built, tested, approved or deployed.

## Definition of Ready: requirement may enter Sprint 6 prototype planning

A requirement is ready only when all applicable checks are true:

- Requirement ID, source, owner, actor, state or transition and business rule are recorded.
- Atomic acceptance criteria, failure behaviour, authorised action and planned screen/test scenario are traceable.
- Required source data, event/audit evidence and missing-data response are defined.
- Human decision rights, source authority and the approved AI boundary remain unchanged or have an approved change record.
- Dependencies and any blocking condition are visible in the prioritisation matrix.
- It is marked `Approved for prototype` only after the Sprint 5 Part 3 review. `Reviewed` alone is not build approval.

## Definition of Done: prototype feature

A feature is done for the clickable prototype only when it is traceable to an approved requirement, implements its intended simulated behaviour, exposes its required failure or safe-return path, preserves authorised actor visibility, records planned audit evidence and passes its linked acceptance checks. A feature is not done merely because a screen exists.

## Definition of Done: test and release

A test is done only when expected and observed behaviour, synthetic data/scenario version, executor, result and evidence reference are recorded. A release is ready only when the approved scope is traceable, critical failure paths are demonstrated, no open Critical defect remains, approved fallback behaviour is available and the release decision is recorded.

## Definition of Done: validation and portfolio evidence

Sprint 7 evidence is complete only when reviewer/pilot findings, limitations, resulting decision or no-change rationale, affected requirement and evidence classification are recorded. This does not establish production readiness, clinical validation or outcome benefit.
