# Repo Rules

## Source Of Truth

Use sources in this order:

1. The Handshake contest rules PDF as an outer constraint on eligibility, submission behavior, and conduct
2. `.codex/context/*` as the product and implementation source of truth
3. `TASKS.md` as the execution order and milestone checklist
4. `AGENTS.md` as the operating instructions for Codex in this repository

If these conflict, preserve contest compliance first and product clarity second.

## Non-Negotiables

1. No outbound email sending path may exist anywhere in the codebase.
2. No autonomous external actions may exist anywhere in the codebase.
3. App-local actions must require explicit user confirmation before execution.
4. Use TypeScript only, except where another format is required.
5. Never hardcode secrets, tokens, keys, or account identifiers.
6. Do not use `any`; prefer concrete types or `unknown` with narrowing.

## Scope Guardrails

Do build:

- the core student operating surfaces
- Gmail and Calendar integration in MVP scope
- realistic placeholder-backed Handshake, Canvas, and Drive context where needed for the demo
- agent-assisted but user-controlled workflows

Do not build:

- autonomous outbound communication
- deep bidirectional sync
- webhook-first integration architecture
- full production Handshake, Canvas, or Drive integration scope for this contest MVP
- collaboration, admin, billing, or enterprise features
- native mobile product work

## Placeholder Rule

Placeholder-backed sources must surface as realistic imported context in the product experience. Do not hide them as vague future features if they are part of the intended demo story.

## Workflow Guardrails

- prioritize milestone progress over speculative architecture
- choose usefulness and demo clarity over backend completeness
- surface any change that would weaken the locked trust model
- if a requested change conflicts with the contest-optimized product story, call that out explicitly
