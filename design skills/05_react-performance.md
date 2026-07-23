# React Performance

Apply performance guidance proportionately. This is a synthetic, frontend-only portfolio prototype, so clarity and maintainability come before premature infrastructure or optimisation.

## Required practices

- Avoid unnecessary client-side data fetching and request waterfalls in simulated workflow loading.
- Keep static content and configuration outside components where that improves clarity.
- Split expensive or rarely opened surfaces, such as trace views or large result panels, when there is a demonstrated benefit.
- Avoid broad barrel imports and unnecessary dependencies.
- Keep state local to the workflow area that needs it. Do not create global state for values that can remain in a screen or component.
- Derive display state during render where possible; avoid effects that merely mirror existing state.
- Avoid defining components inside other components when it causes avoidable remounts.
- Animate compositor-friendly properties such as transform and opacity. Do not animate layout properties unnecessarily.
- Specify transition properties; never use `transition: all`.
- Use `will-change` only after observing a real first-frame problem, and only for transform, opacity or filter.

## Prototype boundary

Do not add production caching, analytics, authentication, FHIR infrastructure or enterprise integration solely to satisfy performance guidance. Keep synthetic data local and transparent unless the active sprint explicitly expands scope.

## Verification

Check the prototype at the target viewport with a cold refresh, a slow-loading simulated result, a long table and a drawer open/close cycle. Confirm that controls remain responsive and that performance changes did not remove readable status or audit context.
