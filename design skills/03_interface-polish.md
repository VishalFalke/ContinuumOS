# Interface Polish

Small, consistent details should make ContinuumOS feel calm, credible and deliberate. Polish must improve comprehension or confidence; it must not compete with clinical review.

## Typography

- Use a readable sans-serif with a clear hierarchy and comfortable line height.
- Use balanced wrapping for short headings and natural wrapping for descriptions.
- Use tabular numerals for changing counts, timestamps, SLAs and table columns.
- Keep labels specific: “Awaiting clinician acknowledgement” is better than “Pending”.
- Check long patient, encounter and report labels at realistic widths; never rely on truncation without an accessible full value.

## Surfaces and spacing

- Use a small, consistent radius scale. For nested surfaces, use concentric radii so the inner surface follows the outer shape.
- Prefer subtle layered shadows for elevation and reserve borders for inputs, dividers and clear table boundaries.
- Align icons optically, especially arrows, carets and asymmetric status icons.
- Keep panels visually grouped by workflow responsibility: source evidence, AI assistance, human decision and audit trace.
- Keep interactive hit areas large enough for reliable use and prevent overlapping click targets.

## Healthcare-specific restraint

- Avoid excessive gradients, glass effects, decorative illustrations, oversized metrics and playful empty states.
- Use visual emphasis to direct attention to an unresolved workflow decision or exception.
- Never make the AI panel more visually authoritative than the human decision control.
- Use synthetic data labels and the independent portfolio disclaimer where the prototype is shown.

## Review format

When reviewing a UI change, report a concise Before / After table grouped by principle. Include the specific file and property when known. Omit principles where no change is needed.
