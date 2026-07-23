# Motion

Motion should explain continuity, state change and focus. It must be calm, interruptible and optional where it is not essential.

## Defaults

- Complete user-triggered transitions within 300ms unless there is a clear spatial reason to take longer.
- Use ease-out for entrances and ease-in for exits. Avoid linear easing except for progress indicators.
- Use CSS transitions for interactive state changes so they can reverse cleanly. Reserve keyframes for one-shot sequences.
- Use short, subtle exits; do not make content fly away or disappear dramatically.
- Limit stagger to roughly 40–60ms per item and avoid animating many competing focal points.
- Use press feedback sparingly. A small scale reduction around `0.96` is acceptable for ordinary controls; do not use it on critical approval or confirmation actions when it could suggest the action has completed.
- Do not animate clinically meaningful status changes in a way that delays, obscures or alters the meaning of the status.
- Do not animate on initial page load unless the entrance establishes orientation. Default-state controls should not replay an entrance animation on refresh.
- Respect `prefers-reduced-motion` by removing non-essential transforms, blur and stagger while retaining clear state changes.

## Where motion is useful

- Opening and closing a review drawer or exception panel.
- Moving between workflow steps when the spatial relationship is clear.
- Showing a loading-to-ready transition for synthetic result data.
- Cross-fading contextual icons for save, acknowledgement or permission states.

## Where motion is not appropriate

- AI-generated suggestions, where motion could imply authority or certainty.
- Safety warnings, errors, amended results or permission failures that must be noticed immediately.
- Any action that might be mistaken for clinician approval, referral approval or discharge approval.
