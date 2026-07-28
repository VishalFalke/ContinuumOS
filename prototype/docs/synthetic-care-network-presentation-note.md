# Synthetic care-network presentation note

## Purpose

This note records the bounded presentation layer added to make the ContinuumOS portfolio prototype easier to understand and more credible in an interview walkthrough. It does not change the approved workflow, architecture, source authority, canonical states, human decision rights or AI controls.

## Fictional demonstration network

All people, patients, facilities and exchanges below are synthetic or fictional:

- Asha Mehta — synthetic patient.
- Kavya Rao — Care Coordinator, Meadowbrook Community Clinic.
- Dr Neha Kapoor — Clinic physician, Meadowbrook Community Clinic.
- Rohan Malik — Referral Coordinator, Meadowbrook Community Clinic.
- Priya Nair — Intake nurse, Willow Day-care Unit.
- Meridian Diagnostics Centre — diagnostic provider.
- Central Hospital — represented escalation destination.

## Contextual connected-evidence path

The compact path inside the case-journey rail explains where the evidence for the current task comes from and where it goes next:

1. Meadowbrook Clinic EHR supplies simulated patient, encounter and order context through a read-only SMART/FHIR representation.
2. Meridian Legacy RIS supplies the simulated versioned report through an HL7 v2 representation.
3. Philips Enterprise Imaging / PACS is named only as an illustrative simulated DICOM image source.
4. ContinuumOS links evidence and work for human review; it does not make clinical, referral, acceptance, confirmation or closure decisions.
5. Willow Referral Portal represents referral-package and response exchange.
6. Meadowbrook Scheduling & Communications represents delivery and confirmation evidence.

The global header carries the single visible portfolio boundary: `Portfolio prototype · Synthetic data · No live connections`. Repetitive per-screen simulation notices and the large top-of-page exchange strip were removed. System names now appear only when they explain the current task’s evidence path.

No vendor logo, product partnership, source-system access, live integration or data write-back is represented.

The Philips product reference is used only to make the PACS example concrete. Public product context was checked against the official [Philips Enterprise Imaging](https://www.usa.philips.com/healthcare/enterprise-solutions/medical-imaging) and [Philips interoperability standards](https://www.usa.philips.com/healthcare/support/interoperability-standards) pages on 2026-07-28.

## Patient-context disclosure

Verified-patient workflow screens expose one compact `View patient context` action in the Asha journey rail. The report itself shows `Asha Mehta · 48 years`; the dialog adds the existing synthetic patient, episode, encounter, diagnostic-request, current-report, workflow and next-action references.

The dialog does not invent clinical history. It explicitly states that the order reason, allergies, medicines and medical history are not supplied in this prototype record and must not be inferred. Access-failure routes continue to suppress patient context.

## Portrait provenance

Five square headshots were generated with the built-in image-generation tool and saved as optimized 384×384 PNG assets under `prototype/public/assets/people/`.

Common prompt controls: fictional person; natural professional headshot; neutral pale blue-grey background; centered shoulders-up composition; soft clinical-office light; realistic skin texture; no organisation logo; no text; no watermark; suitable for a small healthcare-workflow avatar.

Role-specific prompts:

- `asha-mehta.png` — fictional Indian woman in her early 40s, calm neutral expression, simple everyday clothing; synthetic patient.
- `kavya-rao.png` — fictional Indian woman in her mid-30s, warm competent expression, professional clinic attire; Care Coordinator.
- `neha-kapoor.png` — fictional Indian woman physician in her early 40s, calm authoritative expression, white coat over professional attire, no visible branding; Clinic physician.
- `rohan-malik.png` — fictional Indian man in his late 30s, approachable professional expression, business-casual clinic attire; Referral Coordinator.
- `priya-nair.png` — fictional Indian woman in her early 30s, attentive confident expression, simple navy clinical scrubs without logo; intake nurse.

These portraits are demonstration assets, not photographs of real staff or a real patient.
