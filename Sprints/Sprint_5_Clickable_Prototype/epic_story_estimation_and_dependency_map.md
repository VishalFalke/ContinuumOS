# Epic, Story, Estimation and Dependency Map

## Purpose and boundary

This creates a delivery hierarchy without changing the requirement baseline. Epics organise the work; requirements and acceptance criteria remain the authoritative scope. Estimates are relative planning inputs, not delivery promises, hours, staffing capacity or monetary budget.

| Epic | Outcome | User stories / primary requirements | Key dependency | Initial priority |
|---|---|---|---|---|
| EP-01 Safe episode entry and visibility | Authorised users can open only verified synthetic context and see the active episode | US-01; US-02; US-05; FR-01 to FR-04; FR-17 | Synthetic source fixture and verified linkage | P1 |
| EP-02 Diagnostic result integrity and human review | Current source report, acknowledgement and amended re-review remain controlled | US-03; US-04; FR-05; FR-06; FR-18 to FR-21; FR-25; FR-31; FR-32 | EP-01; report version/completion evidence | P1 |
| EP-03 Human direction, handoff and confirmation | Human-approved path reaches an accountable next step | US-06 to US-08; FR-08 to FR-11; FR-22; FR-24; FR-27; FR-29; FR-30 | EP-02; authorised direction and receiving response evidence | P1 |
| EP-04 Exceptions, recovery and audit | Unsafe or missing evidence remains visible, owned and traceable | FR-12 to FR-14; NFR-03; NFR-05; TR-02 | EP-01 to EP-03; event/recovery contract | P1 |
| EP-05 Optional assistive AI | Source-linked summary and post-approval draft remain reviewable and non-blocking | FR-15; FR-16 | EP-01 to EP-04; AI review/fallback controls | P2 |

## Relative-estimation method

Use Fibonacci-style relative points only after the Part 3 baseline is approved: 1, 2, 3, 5 and 8. Estimate one story against a small, agreed reference story, considering implementation complexity, unknowns, integration/fixture dependence, validation effort and failure-state coverage.

- A story estimated above 8 must be split or explicitly deferred.
- Estimate the implementation slice, not the business importance; priority remains governed by safety, impact, urgency and dependencies.
- Record estimate owner, assumptions and date in Sprint 6. Do not infer velocity, delivery dates or capacity from a single synthetic prototype.

## Budget boundary

No story-level currency budget is credible in this portfolio case because there is no team rate, staffing plan, vendor quote, capacity baseline or production cost model. The prioritisation matrix therefore uses qualitative effort and delay consequence. A future notional release-level cost scenario may be added only with explicit assumptions, sensitivity ranges and a clear non-factual label.
