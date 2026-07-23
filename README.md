# ContinuumOS

> A portfolio case study for an AI-assisted healthcare workflow that helps teams track diagnostic results, clinician review, referrals and next-step confirmation—while keeping clinical decisions human-controlled.

## Overview

ContinuumOS is a hypothetical care-orchestration overlay for the diagnostic-closure workflow: the period between a diagnostic result becoming available and the next human-confirmed care step.

The case explores how authorised clinic, diagnostic and receiving-team users could see verified context, workflow state, ownership, blockers, handoff evidence and audit history without replacing the source EHR.

All patient, encounter and workflow data in this repository is synthetic.

## The problem addressed

A result being available does not prove that it has been clinically reviewed, has an accountable owner or has been converted into a safe next step. ContinuumOS defines a bounded workflow to make those gaps visible and recoverable.

```text
Diagnostic result available
  → clinician review and acknowledgement
  → human follow-up direction
  → referral handoff or clinic-management work
  → receiving response where required
  → next step confirmed
  → scoped diagnostic-closure workflow completion
```

## Product principles

- Source systems remain authoritative; ContinuumOS is an overlay, not an EHR replacement.
- Clinical acknowledgement, follow-up direction, referral acceptance, financial authorisation and scoped closure remain human-controlled.
- Exceptions such as uncertain identity, incomplete results, duplicate events and unavailable clinicians stay visible until safely resolved.
- Audit history is attributable and append-oriented; corrections do not erase prior evidence.
- AI is optional and cannot be required for safe workflow progression.

## Controlled AI boundary

The case permits only two assistive AI capabilities:

1. A source-linked episode summary to help authorised users orient to verified context.
2. A post-approval referral-handoff draft to help prepare an operational package.

AI may not diagnose, determine urgency, match identity, acknowledge a result, choose a pathway, approve or send a referral, accept a referral, confirm a next step or close an episode. Every AI output is a reviewable draft with source references, uncertainty handling and a manual fallback.

## Repository structure

| Area | Contents |
|---|---|
| `01_Day_1_Product_Framing/` | Product case, workflow model, tracer patient and decision baseline. |
| `Sprints/Sprint_2_Care_Journey_and_Operating_Model/` | Care journey, decision rights, source-of-record and failure paths. |
| `Sprints/Sprint_3_Users_Decisions_and_MVP/` | Users, jobs, MVP scope, field mapping and integration assumptions. |
| `Sprints/Sprint_4_Architecture_and_AI_Operating_Model/` | Logical architecture, simulated SMART/FHIR boundary, AI controls and audit model. |
| `Sprints/Sprint_5_Clickable_Prototype/` | Requirements baseline, traceability, planned screen specifications and low-fidelity wireframes. |

## Current status

Sprint 5 is in progress. The requirements baseline, traceability controls and planned specifications for ten prototype screens are documented. The clickable prototype has **not** been built yet, and no live integration, deployed model, user research, clinical validation or outcome claim is made.

Next, the project will complete the cross-screen data dictionary and detailed business-rule/validation catalogue before the prototype-readiness review.

## Key artifacts

- [Business requirements baseline](Sprints/Sprint_5_Clickable_Prototype/brd_lite.md)
- [Screen specifications and low-fidelity wireframes](Sprints/Sprint_5_Clickable_Prototype/screen_specifications_and_wireframe_pack.md)
- [Requirements traceability matrix](Sprints/Sprint_5_Clickable_Prototype/requirements_traceability_matrix.csv)
- [AI service cards and control matrix](Sprints/Sprint_4_Architecture_and_AI_Operating_Model/ai_service_cards_and_control_matrix.md)
- [Project status](STATUS.md)

## Scope note

This repository is an independent portfolio case study. It uses synthetic data only and is not production software, clinical advice, a clinical validation study or evidence of regulatory compliance.
