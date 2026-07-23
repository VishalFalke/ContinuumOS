# Component Foundation

Use accessible, composable primitives as the prototype foundation. The referenced shadcn workflow is a strong source for structure, but ContinuumOS must not look like an unmodified component-library demo.

## Preferred composition

- Use cards and panels for episode context, result review and next-step confirmation.
- Use tabs only when views represent equivalent perspectives; do not hide critical status in an inactive tab.
- Use tables for structured orders, results, ownership and timestamps. Use badges for compact status labels with text.
- Use dialogs or sheets for focused review tasks, not for the primary workflow state.
- Use alerts for important warnings, empty states for missing workflow data, skeletons for loading and separators for visual grouping.
- Use semantic design tokens such as background, foreground, muted, primary, destructive and focus rather than scattered raw colours.
- Compose existing components before writing custom markup. Use established accessible primitives for dialogs, menus, comboboxes and tabs.

## ContinuumOS composition rules

- Every screen must support the diagnostic order → result available → acknowledgement → referral decision → next step confirmed flow.
- Keep the patient, encounter, care episode, source result, AI assistance and human decision visibly related.
- The primary action must reflect the next workflow decision, not a generic “Continue”.
- Destructive styling is for destructive actions, not for every urgent or clinically important state.
- Do not add a component solely to make the screen look fuller. Workflow depth and traceability matter more than dashboard density.

## Visual identity

Use the component system for consistency, then apply a distinct ContinuumOS hierarchy, type scale, spacing rhythm and status language. Do not copy default shadcn colours, radius values or demo layouts without deciding how they support the care workflow.
