# Accessibility

Accessibility is a release requirement for every prototype interaction. A polished clinical workflow is not useful if a reviewer cannot understand status, operate controls, or recover from an error.

## Non-negotiable rules

- Use native `button`, `a`, `input`, `select`, `textarea`, `table`, `th` and `label` elements wherever possible.
- Give every control an accessible name. Icon-only controls require a specific label; decorative icons are hidden from assistive technology.
- Make every interaction keyboard reachable with a visible focus state. Do not use positive `tabindex` values.
- Dialogs, sheets and popovers must set focus on open, trap focus while open, close with Escape where appropriate, and return focus to the triggering control.
- Link helper text and errors to fields. Use `aria-invalid` for invalid fields and live status messaging for important asynchronous changes.
- Never communicate clinical status through colour alone. Pair colour with text, icon, shape or position.
- Support `prefers-reduced-motion`; essential state and safety information must remain visible without animation.
- Aim for a 44px interactive hit area. Dense desktop controls may use 40px only when spacing prevents collisions.

## ContinuumOS checks

- The current owner, human review state, allowed action and uncertainty must be readable without hover.
- AI suggestions must not be announced as completed clinical actions.
- Loading, amended-result, permission-denied and reconciliation states require visible text, not toast-only feedback.
- Do not hide a failure state behind a colour change or animation.

## Review output

For each issue, record: file and control, user impact, smallest safe fix, and verification method. Prefer targeted fixes over unrelated refactors.
