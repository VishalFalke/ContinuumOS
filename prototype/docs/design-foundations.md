# ContinuumOS design foundations

## Purpose

This is the visual reference for the synthetic Sprint 6 prototype. It controls presentation consistency only. Product vocabulary, workflow states, roles, fields, rules and acceptance criteria remain authoritative in the approved Sprint 5 artifacts.

## Design intent

Calm, clear and professional care-orchestration software. Emphasise the current task, accountable owner, required human decision and safe recovery without making the interface feel like a dashboard or a consumer health application.

## Visual tokens

| Token | Use | Value |
|---|---|---|
| `--navy-deep` | Header and highest-level shell | `#101b30` |
| `--navy` | Primary headings | `#172b4d` |
| `--ink` | Body text | `#16213a` |
| `--muted` | Supporting text | `#5c6b82` |
| `--canvas` | Page background | `#f4f7fb` |
| `--surface` | Primary panels | `#ffffff` |
| `--line` | Dividers and boundaries | `#d5e0eb` |
| `--teal` | Informational emphasis and active navigation | `#087e8b` |
| `--teal-soft` | Informational panel fill | `#e4f5f4` |
| `--focus` | Keyboard focus indicator | `#155eef` |

Use semantic tokens in CSS rather than new raw colours. Error, warning and success colours may be added only with the relevant screen’s approved status language and must always be paired with text and an icon, shape or placement.

## Type, layout and surfaces

- Use the system sans-serif stack already configured in `src/styles/global.css`.
- Use one strong page title, a small uppercase context label, and readable body text with comfortable line height.
- Use a 4px spacing rhythm; keep main content panels generous rather than dense.
- Use one soft elevation level for primary cards and borders for internal separation.
- Use modest 10–16px radii; nested surfaces should use a smaller radius than their parent.
- Preserve desktop-first workflow orientation with a responsive stacked layout below 700px.

## Components and interaction

- Use native buttons, links, fields and tables before custom controls.
- Make the selected navigation item visible through text, border and background—not colour alone.
- Reserve visual emphasis for an unresolved workflow decision, exception, safe recovery or primary next action.
- Keep source evidence, AI assistance, human decision and audit evidence visually distinct when those surfaces are introduced.
- Use transitions only for ordinary navigation/hover feedback, under 300ms, and honour reduced-motion preferences.

## Accessibility floor

- Every interaction is keyboard reachable and has a visible focus state.
- Maintain colour-independent status meaning, readable labels and at least 40px dense desktop hit targets.
- Do not hide critical state, owner, uncertainty, allowed action or recovery instruction behind hover.
- Label this as a synthetic portfolio prototype wherever it is shown.

## Do not change here

This file does not authorise a new screen, state, actor, field, workflow route, AI capability, clinical decision, or source boundary. Those changes require the controlled Sprint 6 change process.
