# Illustrative regional HIE deployment-readiness checklist

## Purpose and status

This is an illustrative future-readiness checklist for considering a regional HIE-connected deployment after the synthetic MVP. It is not a deployment plan, certification claim, conformance assessment, security assessment, legal advice or evidence that any HIE, participant organisation or production control exists.

The checklist may also be used as an initial question set for other multi-organisation exchange models, including direct provider-to-provider exchange, private health networks, local integration partners, national exchanges, payer or referral partners. Requirements, legal basis and certification obligations differ by deployment model.

ContinuumOS remains an overlay: source systems retain authority for patient, encounter, diagnostic and administrative records; human decision rights remain unchanged; uncertain linkage must not attach to an episode.

## Readiness gate

No connection, data exchange, source write-back, patient-facing capability or automated workflow should proceed from this checklist alone. Each item needs a named owner, agreed evidence and an approved local decision before a pilot or deployment can be considered.

## Future evidence-maturity scale

For later reuse, a checklist item may be marked `not assessed`, `owner identified`, `evidence requested`, `partially assessed`, `gap open`, `conditionally accepted`, `approved for scoped pilot` or `not approved`. Every current item remains `not assessed`.

## Checklist

| Domain | Readiness question | Minimum evidence to assess later | Owner role | Current portfolio status |
|---|---|---|---|---|
| Governance and participation | Are participating organisations, permitted use cases, accountability and escalation paths agreed? | Signed participation/governance terms; RACI; incident/escalation route | Participating-organisation governance lead | Not assessed; future readiness |
| Legal basis and consent | Is there an approved legal basis, consent/notice approach and purpose limitation for each data flow? | Jurisdiction-specific legal/privacy review; consent/notice design; data-use register | Privacy/legal lead | Not assessed; future readiness |
| Patient identity and linkage | Can patient, encounter and event linkage be verified with a defined reconciliation process? | Identifier policy; matching/reconciliation evidence; accountable reviewer; exception process | Identity governance lead | Not assessed; no production identity matching claimed |
| Participant/source authority | Are source-of-truth, correction, amendment and retention responsibilities agreed per data type? | Source-authority matrix; amendment/correction policy; data stewardship approval | Clinical/data governance lead | Not assessed; architecture principle only |
| Interoperability | Are required exchange methods, FHIR profiles/versions, terminology mappings, capability discovery and error semantics agreed and tested? | Interface specification; capability statement; profile validation; terminology ownership; mapping versioning; unknown-code handling; mapping-change approval; test results | Interoperability lead | Not assessed; synthetic FHIR R4-shaped fixtures only |
| SMART and access | Are user-facing launch, workforce access, scopes, identity-provider behaviour and session controls approved? | SMART configuration; approved scopes; role/access model; security test evidence | Security and application-access lead | Not assessed; simulated clinician launch only |
| Minimum-necessary data | Is each requested/read/retained field justified by workflow job and role? | Field-level data inventory; access review; retention/minimisation approval | Privacy/data governance lead | Not assessed; synthetic minimum-data design only |
| Workflow and human authority | Are human decision rights, receiving-team authority, financial boundaries and closure evidence preserved across participants? Exchange participation, routing logic or receipt acknowledgement must not create clinical, referral, financial or closure authority. | Cross-organisation decision-rights matrix; workflow/SLA agreement; exception ownership | Clinical operations lead | Not assessed; canonical workflow policy only |
| Hosting and data residency | Are hosting location, cross-border processing, backup location and third-party access approved for each data class? | Hosting/data-flow diagram; residency assessment; processor/subprocessor register; approval | Privacy, security and infrastructure leads | Not assessed; future readiness |
| Audit and correction | Can each material exchange, decision, amendment, correction and recovery be attributed and linked without destructive overwrite? | Audit schema; correction/supersession design; audit access/review procedure; test evidence | Platform/audit lead | Not assessed; target audit behaviour only |
| Security and resilience | Are authentication, authorisation, encryption, logging, incident response, availability and recovery controls assessed for the actual deployment? | Threat/risk assessment; security testing; recovery/incident runbooks; service agreements | Security/platform lead | Not assessed; production security and resilience deferred |
| AI governance | Are approved AI inputs, source links, reviewer roles, stale-output handling, evaluation and fallback controls accepted by participants? | AI governance review; service-card approval; evaluation/UAT plan; fallback procedure | Clinical AI governance lead | Not assessed; two assistive capabilities only |
| External AI supplier, rights and model security | If a real AI service is proposed, are supplier/model identity and version, intended use, licensing and IP terms, input/output rights, retention/training use, subprocessors, model-change notice, adversarial threats, monitoring, rollback and exit controls approved? | Supplier and model register; contract/data-processing and rights review; model card or equivalent; threat assessment and security tests; representative-data evaluation plan; change, incident, rollback and exit procedure | AI governance, procurement, legal/privacy and security leads | Not assessed; no external model or AI API is selected or called |
| Communication and confirmation | Are authorised sender, channel, delivery evidence, confirmation applicability and accessibility/language policy defined? | Communication policy; approval workflow; accessibility review; exception handling | Patient communication lead | Not assessed; synthetic evidence model only |
| Operational readiness | Are support model, training, adoption approach, monitoring, data-quality review and manual fallback defined? | Operating procedure; training plan; support/on-call model; pilot acceptance criteria | Service operations lead | Not assessed; no pilot operated |
| Operational downgrade and exit | Are participant offboarding, credential revocation, data retention after exit, pending-work ownership, unresolved referrals, audit preservation and manual fallback defined? | Offboarding/run-down procedure; credential revocation plan; retention/audit policy; pending-work transfer evidence | Participant governance, security and service operations leads | Not assessed; future readiness |
| Implementation assurance | Has a controlled synthetic/test environment demonstrated the approved integration, failure and recovery cases? | Test plan/results for linkage, amended report, duplicate/replay, access failure, AI fallback and closure | Delivery/test lead | Not assessed; future validation required |

## Conditions that remain explicitly out of scope

- A claim of HIE connectivity, participant onboarding, consent capture, production security, FHIR conformance or regional deployment.
- EHR replacement, source clinical correction, FHIR Task write-back, live payer workflow, discharge/home-recovery workflow or enterprise command-centre operation.
- AI diagnosis, triage, identity matching, acknowledgement, referral acceptance, financial decision or autonomous workflow progression.

## Suggested readiness sequence

1. Agree governance, legal basis, source authority and human decision rights.
2. Validate identity/linkage, minimum data and interoperability against a synthetic/test environment.
3. Validate access, audit/correction, security, failure/recovery and AI fallback controls; if a real AI service is proposed, complete supplier, rights, representative-data and model-security assurance.
4. Define participant-specific operating procedures, communication policy, support model and pilot acceptance evidence.
5. Seek separate approval before any controlled pilot; this checklist does not grant it.

## Traceability and evidence status

- AP-01 to AP-14, particularly source authority, verified linkage, human authority, audit/correction, minimum data and non-triggering analytics.
- S4-AD01 to S4-AD14; no decision is changed by this illustrative checklist.
- Sprint 3 permissions/interoperability assumptions and the Sprint 4 SMART, event, AI and audit artifacts.
- Evidence status: **illustrative future-readiness checklist only**.
