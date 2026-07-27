# Release 0.1 Notes

## Intended scope

The first usable version based on the approved Sprint 5 requirements baseline.

## Included capability

Valid launch; episode display; result review; acknowledgement; follow-up direction; referral handoff; receiving response; next-step confirmation; exceptions; audit timeline.

## Actual build and test evidence

The local synthetic clickable prototype includes the ten approved workflow surfaces: simulated access, episode workspace, report acknowledgement, human direction, handoff preparation, receiving response, exception recovery, optional AI review, read-only audit and separate next-step confirmation/closure. QLT-601 recorded passing deterministic, simulated-integration and represented-role walkthrough evidence; QLT-602 recorded a pass with an outstanding physical-keyboard/assistive-technology verification limitation; QLT-603 recorded four fixture-level AI-control dispositions with safe manual fallback. Thirty-one Node tests, TypeScript lint and the local Vite production build passed.

## Known limitations and release decision

This is a local synthetic prototype only. No live authentication, source integration, source write-back, real communication/referral service, deployed AI, clinical validation, real-user research, accessibility certification, production security assessment, deployment or Product Owner approval occurred.

QLT-604 records a Builder recommendation of No-Go / change and retest for Release 0.2: physical-keyboard and assistive-technology verification remain open, and a duplicate reconciliation evidence row requires controlled correction. This is not a Product Owner release decision.
