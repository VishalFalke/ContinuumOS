# Sprint 7 — External Validation, Synthetic Pilot and Portfolio Packaging

## Objective

Validate the workflow with relevant reviewers, measure prototype performance using synthetic episodes, revise the product from evidence and package the final case for Lead/Senior BA and AI PM interviews.

## Workstreams and required artifacts

1. Reviewer selection and structured review plan — `reviewer_plan_and_discussion_guide.md`
2. Evidence capture and feedback register — `review_notes_and_feedback_register.csv`
3. Synthetic pilot dataset and measurement method — `synthetic_pilot_dataset_and_method.md`
4. Pilot results — `pilot_result_summary.csv`
5. Product revision and change-evidence table — `change_evidence_table.csv`
6. Final portfolio evidence pack — `final_portfolio_evidence_pack.md`
7. Final interview presentation — `ContinuumOS.pptx`
8. Final portfolio delivery narrative — represented in the retained final presentation
9. Competitive-approach evidence plan and optional sourced appendix — `competitive_approach_evidence_plan.md`

## Artifact readiness at Sprint 7 entry

These files were created in advance as controlled plans, templates or narrative scaffolding. They are not completed reviewer, pilot or portfolio evidence.

| Artifact group | Entry status | Sprint 7 obligation |
|---|---|---|
| `reviewer_plan_and_discussion_guide.md`, `synthetic_pilot_dataset_and_method.md` and `competitive_approach_evidence_plan.md` | Pre-created planning artifacts | Confirm the method and record any approved change before execution |
| `review_notes_and_feedback_register.csv`, `pilot_result_summary.csv` and `change_evidence_table.csv` | Pre-created evidence templates; no observations or results recorded | Populate only from documented reviews, measurements and decisions |
| `final_portfolio_evidence_pack.md`, `portfolio_ba_control_scorecard.md` and `ContinuumOS.pptx` | Final portfolio artifacts | Retain cited Sprint 6–7 evidence and unresolved limitations |

## Planned roadmap and governance evidence update

Sprint 7 will record, within `change_evidence_table.csv` and `final_portfolio_evidence_pack.md`, whether structured reviewer evidence changes a roadmap priority, stakeholder-engagement assumption, project-governance control or product-governance readiness question. Reviewer participation is not approval for a real pilot or production governance.

The final evidence pack will distinguish project-governance evidence from clinical, data, AI and operational governance readiness.

`portfolio_ba_control_scorecard.md` is the compact final view of requirements, traceability, stakeholder/governance, RAID/dependencies, priority/roadmap, data/process, UAT/release and AI-control evidence. It reports only sourced evidence and is not a personal-performance dashboard.

## Controls

- Target three to five reviewers across the roles specified in the approved plan.
- Do not describe sessions as production user research unless participants genuinely represent target users and the sessions are documented accordingly.
- Use approximately 20 synthetic diagnostic episodes, three main roles, repeated happy and failure paths, one agreed prototype release and one consistent measurement method.
- Report observed values only; do not invent improvement percentages.
- Keep public artifacts free of sensitive personal information.
- Clearly distinguish design, prototype, test and production evidence.
- Report KPI or SLA/OLA values only from the approved synthetic measurement method, with scenario/data version, window and limitations. Do not present them as operational performance or production service levels.
- Present alternatives considered, the selected approach, trade-offs and rejected options without converting approach comparisons into unsupported competitor claims.
- Include named products or organisations in a competitive appendix only when each material capability claim has a dated public source and consistent comparison criteria. Use `Not evidenced` rather than inference.
- Present one safety decision from the Sprint 6 hazard register with its prevention, detection, recovery, accepted operating cost, executed evidence and unresolved uncertainty.
- State that the bounded synthetic prototype does not evaluate subgroup fairness, production adversarial security or external-model supplier assurance. Treat those as unresolved future-readiness obligations, not achieved controls.

## Sprint exit criteria

- At least three structured reviews are completed.
- Reviewer feedback produces visible product decisions.
- Synthetic pilot results are reported honestly.
- Final claims distinguish design, prototype, test and production evidence.
- Requirements, prototype and test results are internally aligned.
- The final case shows at least one meaningful change driven by evidence.
- The presentation can be delivered in under ten minutes.
- The prototype demo can be delivered in under five minutes.
- The case clearly demonstrates both Lead/Senior BA and AI PM capability.
- The final interview narrative distinguishes decisions made before testing, changes supported by recorded evidence and questions that remain open.
- Any competitive appendix is sourced, dated and clearly separated from ContinuumOS prototype evidence.
- The interview safety segment separates proposed hazard analysis, executed prototype evidence and residual real-world uncertainty.

## Status

- [ ] Not started
- [ ] In progress
- [x] Complete

- Repository landing-page update (2026-07-28): the completed package is now presented from the repository root. The README links the final `ContinuumOS.pdf` as the primary GitHub case-study artifact, provides bounded local prototype instructions and accurately distinguishes local synthetic evidence, internal Product Owner review and open real-world evidence needs. Its preview is a read-only rendering of the final PDF's first page at `docs/assets/continuumos-case-study-cover-01.png`; `ContinuumOS.pptx` remains retained as the final presentation and is not duplicated in the README. No prototype code, workflow, authority, dependency, integration or AI-safety control changed.

- Sprint closure update (2026-07-28): Sprint 7 is complete as a local synthetic-pilot and portfolio-packaging package. The retained final presentation is `ContinuumOS.pptx`; the created alternative deck and its presentation-outline and demo-narrative Markdown files were explicitly removed. Six documented Product Owner findings remain labelled as internal review evidence, not external reviewer research. The planned external structured-review work was explicitly waived for this portfolio case, and the empty reviewer register accurately records that no external sessions occurred. The package retains local synthetic-pilot limits, open real-world evidence and the managed-workspace build limitation. No prototype code, workflow, authority, dependency, integration or AI-safety control changed.

- Build-environment retention update (2026-07-28): `prototype/package.json` now invokes Vite's supported `--configLoader runner`, avoiding the default bundled-config write to `node_modules/.vite-temp`. The standard build still cannot complete inside the managed workspace because native filesystem operations are denied while Vite clears, copies to or creates generated content under the existing `prototype/dist` directory. TypeScript lint and all 85 Node tests passed; the same runner build succeeded when directed to a fresh temporary output directory. This is retained as a managed-environment/output-directory limitation, not a prototype or runtime defect. No dependency, prototype source code, workflow, authority or AI-safety control changed. Next environment check: run `npm.cmd run build` from a normally writable local checkout or after the generated `dist` output can be safely cleaned.

- Competitive-approach appendix update (2026-07-28): the optional comparison is complete in `competitive_approach_evidence_plan.md`. It compares four adjacent named approaches using dated or explicitly undated official public sources retrieved on 2026-07-28. The compact table is non-ranked and separates documented product boundaries from `Not evidenced in reviewed sources`; it neither claims competitor weakness nor changes ContinuumOS scope, architecture, workflow, AI controls or prototype implementation.

- Sprint 7 product-revision update (2026-07-28): Product Owner feedback identified generic role labels, technical source wording and invisible cross-system handoffs as a prototype-credibility problem. The approved bounded presentation update now uses one fictional demonstration network across all ten screens: Meadowbrook Community Clinic, Meridian Diagnostics Centre, Willow Day-care Unit and Central Hospital; named synthetic staff; five generated fictional portraits; and screen-specific simulated exchanges for the clinic EHR, legacy RIS, illustrative Philips Enterprise Imaging / PACS source, referral portal and scheduling/communications evidence. SCR-02 and SCR-03 now explain in plain language what happened, who owns the next action, where each person works and where the report/image evidence came from. All system surfaces state simulated, illustrative or no live connection. The report and image identifiers remain source-linked, and human clinical/referral/acceptance/confirmation/closure decisions plus AI review controls are unchanged. TypeScript lint, 82 Node tests and a temporary-output production bundle passed. Browser verification covered all ten routes at 1352×912 and 390×844 with no broken images, horizontal overflow or console errors; the secure launch through SCR-02 and SCR-03 also passed. This is internal Product Owner-directed revision evidence, not external reviewer research, a live integration, vendor partnership, clinical validation or production-readiness claim. The decision and retest are recorded in `change_evidence_table.csv` and `prototype/docs/synthetic-care-network-presentation-note.md`.

- Sprint 7 presentation-refinement update (2026-07-28): Product Owner review found that the large global exchange panel, repeated simulation wording and header ordering obscured the real task. The approved revision keeps one highlighted global boundary, places the named session identity at the far right on desktop, and moves a compact source-to-owner connected-evidence path into the case-journey rail. Named people, organisations and source systems now appear in task context; generic “synthetic case” and “synthetic owner” labels were removed from the visible workflow. Browser review caught and corrected one narrow-rail text-collision defect. TypeScript lint, 82/82 Node tests, a temporary-output production bundle, all ten desktop routes at 1440×900, all ten mobile routes at 390×844, secure launch to the episode overview and an AI human-review interaction passed. No horizontal overflow or obsolete global exchange panel remained. The standard build command still hits the existing workspace Vite temporary-file `EPERM`; the isolated production bundle passed. No workflow controller, canonical state, route, architecture, persistence, authentication, live integration, vendor partnership, human authority or AI-safety boundary changed.

- Sprint 7 patient-context refinement (2026-07-28): Product Owner review identified that the Clinic physician could see Asha’s name but not enough verified identity and episode context while reviewing the ultrasound report. The approved progressive-disclosure change now shows `Asha Mehta · 48 years` in the report and journey rail, plus a reusable read-only patient-context dialog on verified-patient workflow screens. The dialog exposes the existing synthetic patient, episode, encounter, diagnostic request, current report, workflow phase and next action. It explicitly marks order reason, allergies, medicines and medical history as not supplied and prohibits inference; access-failure routes still suppress patient context. Browser review found and corrected a mobile initial-focus defect so the dialog opens at Asha’s identity, closes with Escape or its button and returns focus to the trigger. TypeScript lint, 83/83 Node tests, an isolated production bundle, route-presence checks and 390×844 dialog layout passed without horizontal overflow or console errors. The standard build remains blocked by the existing Vite `.vite-temp` `EPERM`. No controller, route, canonical state, clinical interpretation, architecture, authentication, integration, persistence, human authority or AI-safety boundary changed.

- Sprint 7 confirmed-summary refinement (2026-07-28): Product Owner review identified that successful next-step confirmation left no concise reference for Kavya Rao or the next authorised handler. The approved presentation-only change adds a read-only `Confirmed next-step summary` after EVT-16 succeeds. It reuses the entered owner, destination, timeframe, communication, delivery and patient/caregiver-confirmation evidence and groups these with Asha’s verified episode, current report, human direction, referral package, receiving acceptance, actor and timestamp. The summary explicitly remains an operational transition reference, not a new clinical report, live transfer, source-system write-back or proof that all care is complete. It is unavailable before confirmation and does not replace the separate scoped-closure action. TypeScript lint, 85/85 Node tests, an isolated production bundle and the complete browser interaction passed. Desktop/default and 390px responsive checks showed no horizontal overflow or console errors; initial focus, Escape, close-button and trigger-focus return passed. The standard build remains blocked by the existing Vite `.vite-temp` `EPERM`. No controller, route, canonical state, clinical interpretation, architecture, authentication, integration, persistence, export, human authority or AI-safety boundary changed.
