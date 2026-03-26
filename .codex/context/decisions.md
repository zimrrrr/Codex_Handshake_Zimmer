# Decision Context

These are durable decisions unless explicitly changed.

## Product Shape

- The product name is `Workspace`
- `Agenda` is the default landing view, not the only meaningful surface
- `School`, `Work`, and `Projects` are first-class views
- the assistant lives in a right-side panel embedded in workflow

## Integrations

- Gmail and Google Calendar are the real MVP integrations
- Handshake is first-class in product intent
- Canvas is first-class in product intent
- Drive is a placeholder-backed contextual source in MVP
- placeholder-backed imported context is valid for the contest demo

## Agent And Trust

- the agent should prioritize, suggest tasks, organize views, and answer from context
- the agent may prepare app-local actions, but the user must explicitly confirm them
- no autonomous external actions are allowed
- no outbound email send path may exist anywhere in the repo

## Delivery Bias

- optimize for usefulness first
- optimize for demo clarity and pitch clarity
- prefer visible product value over infrastructure completeness
- prefer realistic placeholders over incomplete live integrations when they strengthen the submission

## Build Process

- preserve the existing `.codex/` document structure
- rewrite content heavily instead of creating a new documentation layout
- use milestone-driven execution in `TASKS.md` rather than old technical phase progression
