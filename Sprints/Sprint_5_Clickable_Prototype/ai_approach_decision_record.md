# AI Approach Decision Record

| Option | Fit for current MVP | Decision | Rationale | Revisit trigger |
|---|---|---|---|---|
| Controlled prompt-based generation over verified synthetic inputs | Fits the two approved draft/orientation jobs | Proposed for synthetic prototype | Limited inputs, visible sources, human review and manual fallback can be demonstrated without a knowledge corpus | Sprint 6 evaluation evidence shows unsupported-content or completeness issues requiring another approach |
| Retrieval-augmented generation | Not currently justified | Deferred | No approved knowledge corpus is required for the bounded episode summary or handoff draft; uncontrolled retrieval would add provenance and safety risk | A governed, versioned knowledge corpus becomes necessary for a separately approved task |
| Fine-tuning | Not currently justified | Deferred | No labelled dataset, stable task distribution, evaluation result or production model need exists | Repeated, well-labelled failure pattern remains after prompt/rubric improvement |
| XGBoost or similar tabular model | Not currently justified | Deferred | The MVP has no labelled historical dataset and does not automate prioritisation; deterministic workflow controls cover known conditions | A future non-clinical operational-attention problem has governed labels and a separate approval |
| CNN/image model | Out of scope | Rejected for current MVP | ContinuumOS does not interpret diagnostic images; it orchestrates source-linked report/workflow evidence | Separate image-analysis product scope is approved |

No option above is implemented, evaluated or approved for production use.
