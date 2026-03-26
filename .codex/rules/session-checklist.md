# Session Checklist

Before implementing:

- read the relevant `.codex/context/*` document
- confirm the current task supports the contest demo flow or a direct supporting flow
- confirm whether the feature is real MVP integration work or placeholder-backed product work
- check for conflicts with the trust model and scope guardrails

While implementing:

- keep usefulness visible
- preserve explicit user control over mutations
- make placeholder-backed behavior intentional and understandable
- avoid adding invisible infrastructure that does not improve the submission

Before finishing:

- confirm the result still matches the `Workspace` product story
- confirm no forbidden send-email or autonomous external action path was introduced
- confirm milestone alignment with `TASKS.md`
- run relevant verification for the change
