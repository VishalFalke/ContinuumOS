# Competitive-Approach Evidence Plan

## Purpose

Prepare an optional, interview-supporting comparison of solution approaches without inventing market position, vendor capability or company alignment. This work is separate from ContinuumOS prototype validation.

## Comparison scope

Compare only approaches relevant to the documented product decision:

- EHR workflow modules or extensions;
- generic task or work-management tools;
- healthcare integration or orchestration platforms;
- care-coordination products; and
- AI-assisted or agentic workflow approaches.

The portfolio case may remain at category level. Named products are optional and must be supported by current public evidence.

## Consistent criteria

| Criterion | Question |
|---|---|
| Primary product boundary | Is the approach a source record, integration layer, workflow overlay, task tool or AI assist? |
| Workflow ownership | Does public evidence describe named ownership, ageing, handoff and next-action control? |
| Source and interoperability boundary | Which source systems or interoperability patterns are explicitly supported? |
| Human decision control | Which decisions remain human-controlled, and is that boundary stated? |
| Exception and recovery | Is blocked, uncertain, failed or stale work visibly recoverable? |
| AI role | Is AI summarising, drafting, recommending, deciding or acting? |
| Audit and provenance | What decision, source, version and correction evidence is described? |
| Evidence status | Is the statement documented capability, marketing claim, independent evidence or not evidenced? |

## Source and claim rules

- Record source title, publisher, direct link, publication/update date where available and retrieval date.
- Prefer official product documentation for capability claims and independent or regulatory sources for broader performance or risk claims.
- Apply the same criteria to every compared approach.
- Write `Not evidenced in reviewed sources` when a capability cannot be verified.
- Do not infer adoption, safety, interoperability conformance, outcomes, pricing or market leadership.
- Do not rank products unless a transparent method and complete comparable evidence are available.
- Keep ContinuumOS statements labelled as proposed design, prototype evidence or later validation evidence.

## Planned output

If completed, produce one compact appendix table showing approach, verified boundary, relevant strengths, relevant limitations, source/date and implication for the ContinuumOS decision. If adequate evidence is not available, retain the category-level alternatives table in `portfolio_case_study_summary.md` and state that named competitive analysis was not completed.

## Sourced comparison appendix

Research completed 28 July 2026. This is a compact comparison of publicly described product boundaries, not a market evaluation, procurement recommendation, outcome claim or prototype-validation result. Capability statements below are limited to the linked vendor documentation. A missing statement means `Not evidenced in reviewed sources`, not that the capability is absent.

| Approach / example | Verified public boundary | Relevant strength for the decision | Relevant limitation for the decision | Implication for ContinuumOS |
|---|---|---|---|---|
| EHR interoperability / Epic Care Everywhere | Epic describes Care Everywhere as an interoperability platform for exchange with other institutions, HIEs and government agencies; its published standards page describes query and push exchange, including C-CDA and transition-of-care patterns. | Source-system record exchange and standards-based connectivity are explicitly documented. | Named workflow ageing, accountable next-action ownership and exception-recovery behaviour for this diagnostic-closure use case are not evidenced in the reviewed source. | Retain the EHR/interoperability layer as a source and exchange boundary; do not position the prototype as a replacement for it. |
| Integration platform / Redox | Redox documents FHIR notifications, queries and writeback messages; its product materials describe healthcare data exchange and integration across source systems. | A reusable technical exchange layer can support source-system connectivity. | Human clinical/referral decision rights, workflow ownership and safe exception recovery are not evidenced in the reviewed sources. | An integration layer could supply events and writeback patterns, but it does not by itself establish the human-controlled orchestration rules represented in the prototype. |
| Care-management platform / Innovaccer Care Management | Innovaccer describes AI-supported care management, automated documentation, care insights, care-plan suggestions and predictive risk analysis. | The public material demonstrates a care-management and AI-assistance framing relevant to coordinator workflows. | The reviewed material does not evidence the specific diagnostic-result-to-referral state model, named handoff ownership, or human decision boundaries used by ContinuumOS. | Care-management capability is an adjacent approach; the portfolio case remains scoped to one bounded diagnostic-closure workflow rather than a broad care-management product. |
| Operations automation / Qventus AI Operational Assistants | Qventus describes AI operational assistants that perform administrative tasks and its healthcare-automation platform as integrated with EHR workflows. | Operational automation can reduce administrative effort around hospital workflows. | The reviewed material describes assistants that act on administrative tasks; it does not evidence the prototype's stricter rule that AI cannot create consequential clinical, referral, acceptance, confirmation or closure actions. | The case deliberately keeps AI as source-linked drafting and routing support, with consequential workflow actions retained by authorised humans. |

## Source register

| Source | Publisher | Publication/update date shown | Retrieved | Use in appendix |
|---|---|---|---|---|
| [Care Everywhere Supported Standards](https://open.epic.com/Home/CareEverywhereSupportedStandards) | Epic | Not stated on the reviewed page | 28 July 2026 | Exchange boundary, standards and transition-of-care patterns |
| [IHE Integration Statement: Care Everywhere, November 2023](https://open.epic.com/Tech/GetTechSpec?spec=CareEverywhere+IntegrationStatement.pdf) | Epic | 11 April 2024 | 28 July 2026 | Dated implementation-statement context |
| [FHIR API](https://developer.redoxengine.com/api-reference/fhir-api-reference/) | Redox | Not stated on the reviewed page | 28 July 2026 | FHIR notifications, queries and writeback |
| [Healthcare data integration platform](https://redoxengine.com/) | Redox | Not stated on the reviewed page | 28 July 2026 | Product-boundary context |
| [Care Management](https://innovaccer.com/products/care-management) | Innovaccer | Not stated on the reviewed page | 28 July 2026 | Care-management and AI-assistance boundary |
| [Healthcare Operations Automation Platform](https://www.qventus.com/solutions/healthcare-automation-platform/) | Qventus | Not stated on the reviewed page | 28 July 2026 | Operations-automation and EHR-integration boundary |
| [AI Operational Assistants](https://www.qventus.com/solutions/ai-operational-assistants/) | Qventus | Not stated on the reviewed page | 28 July 2026 | Administrative-action boundary |

## Status

Completed 28 July 2026. The appendix is deliberately non-ranked, sourced and separate from ContinuumOS prototype evidence. It does not claim competitor weakness, adoption, safety, interoperability conformance, outcome, pricing or market position.
