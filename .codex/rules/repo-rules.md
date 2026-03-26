# Repo Rules

## Source of Truth

- Product intent comes from `PRD.md`
- technical structure comes from `ARCHITECTURE.md`
- durable tradeoffs come from `DECISIONS.md`
- delivery sequence comes from `TASKS.md`
- operational build instructions come from `AGENTS.md`

## Non-Negotiables

1. No email sending path may exist anywhere in the codebase.
2. Use TypeScript only, except config files that require another format.
3. Never hardcode secrets, tokens, keys, or account identifiers.
4. The assistant may suggest and draft, but must not autonomously act.
5. Do not use `any`; prefer concrete types or `unknown` with narrowing.

## Architectural Guardrails

- use Next.js App Router conventions
- use Prisma through a single shared client
- use Zod for API validation
- keep tasks app-local
- keep Projects/School/Work as filtered views on shared agenda data
- keep Gmail integration read-only and behind a feature flag
- avoid webhook-first or infra-heavy MVP additions

## Scope Guardrails

Do not build:

- autonomous outbound communication
- full inbox triage
- Google Tasks sync
- LinkedIn or Handshake integrations
- CRM features
- recurring task systems
- collaboration/admin surfaces
- native mobile app work

## Workflow Guardrails

- work in phase order unless explicitly redirected
- do not start a new phase before the current one passes lint and typecheck
- prefer narrow, shippable increments over broad speculative architecture
- if a requested change conflicts with a documented decision, surface the conflict explicitly
