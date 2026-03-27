# AGENTS.md — Instructions for Codex

Read this file before writing code in this repository.

## What You Are Building

`Workspace` is a contest-bound SaaS product for students.

Its purpose is to help students turn scattered academic and career inputs into an actionable daily operating and management system.

This repository is being built for the OpenAI x Handshake Codex Creator Challenge. The contest rules are an outer constraint on eligibility, submission format, and conduct. They do not replace the product definition in `.codex/context/*`.

This is not a generic chatbot and not a long-range platform build. It is a demoable MVP business product optimized to win on usefulness.

## Product Shape

Core surfaces:

- `Agenda` — the default landing view and live dashboard with temporal focus
- `School` — class- and coursework-oriented view backed by imported or placeholder academic context
- `Work` — applications, internships, and career work backed by Gmail, Calendar, and Handshake-oriented context
- `Projects` — sandbox for personal projects and self-directed work
- right-sidebar agent chat — context-aware assistant embedded in the workspace

Integration intent:

- real MVP integrations: Gmail and Google Calendar
- placeholder-backed MVP sources: Handshake, Canvas, Drive
- placeholder sources should behave like realistic imported context in the product narrative and UI, not as dead or hidden future work

Agent responsibilities:

- prioritize what matters today
- suggest next actions and app-local tasks
- organize work into the right view
- answer questions using integrated context
- help the user manage work, but never take external action autonomously

## Primary Demo Flow

Build toward this flow first:

1. User opens `Agenda`
2. User sees unified context from Gmail, Calendar, and placeholder-backed Handshake and Canvas imports
3. Agent surfaces priorities and next actions
4. User routes or reviews work across `School`, `Work`, and `Projects`
5. Agent chat explains context and prepares app-local actions that the user can explicitly confirm

If a feature does not improve this flow, question whether it belongs in scope.

## Stack

- Next.js 14 App Router
- TypeScript strict mode
- Tailwind CSS + shadcn/ui
- NextAuth.js v5 / Auth.js
- Prisma ORM + PostgreSQL
- OpenAI SDK for agent and structured AI behavior
- Vitest + Playwright

## Non-Negotiable Rules

1. No outbound email sending path anywhere in the codebase.
2. No autonomous external actions. The product may recommend and prepare, but never silently act on Gmail, Calendar, Handshake, Canvas, Drive, or other external systems.
3. App-local mutations require explicit user confirmation.
4. TypeScript only, except where config formats require otherwise.
5. No secrets in code. Use environment variables only.
6. No `any`. Use concrete types or `unknown` with narrowing.
7. Placeholder integrations must be intentional and visible as imported context, not accidental stubs with unclear behavior.

## Shipping Priorities

Optimize for:

- visible usefulness over infrastructure depth
- product clarity over broad platform ambition
- demo readiness over speculative backend completeness
- agent value that is easy to explain in a 3-minute pitch
- current-scope shipping, not long-term architecture for every future connector

Prefer:

- polished, understandable flows
- seeded or placeholder-backed data when that strengthens the demo
- explicit trust boundaries in UI copy and behavior
- agent-assisted workflows that keep the user in control

## Audit Trail

Maintain `AUDIT_TRAIL.md` as part of the build process.

The audit trail is the running record of how `Workspace` was built and should remain useful for final contest submission materials.

Update `AUDIT_TRAIL.md` whenever work materially changes:

- product scope
- milestone status
- core UX or demo flow
- connector behavior
- agent capabilities
- trust boundaries

Each update should capture:

- date
- short title
- what changed
- why it mattered
- affected milestones or surfaces
- verification performed, if any

Do not update the audit trail for trivial copy edits or purely mechanical refactors unless they change the submission story.

## Conventions

### Branch naming

`feature/[short-description]`, `fix/[short-description]`, `chore/[short-description]`

### Commit style

`type(scope): description`

### File naming

- React components: PascalCase
- utility and library files: camelCase
- API routes: Next.js `route.ts` convention

### API routes

- return typed JSON
- validate request bodies with Zod
- use consistent error shapes: `{ error: string, code?: string }`
- prefer structured outputs for agent endpoints

### Database

- use the shared Prisma client from `lib/db/prisma.ts`
- do not instantiate route-local Prisma clients

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run browser:install
npm run browser:signin
npm run browser:agenda
npm run browser:agenda:filters
npm run browser:agenda:screenshot
npm run db:push
npm run db:seed
npm run db:studio
```

## Dev Browser

Use `dev-browser` for local development inspection when working on route behavior, shell composition, filters, empty states, and first-impression flows.

Expectations:

- the CLI is installed globally on the machine via `npm install -g dev-browser`
- browser dependencies are installed with `npm run browser:install`
- the local app is already running with `npm run dev`

Preferred use cases:

- inspect `/signin`, `/agenda`, `/school`, `/work`, and `/projects` during implementation
- get `page.snapshotForAI()` output before choosing selectors on unfamiliar UI
- run small persistent-page checks instead of writing throwaway Playwright tests
- save screenshots for visual confirmation or debugging

Constraints:

- `dev-browser` scripts run in a sandboxed QuickJS runtime, not Node.js
- no `require`, `import`, `process`, `fetch`, or direct filesystem access
- keep scripts small and single-purpose
- use Vitest and Playwright for durable regression coverage; use `dev-browser` for interactive local verification

Repo-local helper scripts live in `scripts/dev-browser/`.

Suggested workflow:

1. start `npm run dev`
2. run one of the `browser:*` scripts for the surface you are changing
3. use snapshots or screenshots to verify structure and visual state
4. convert important regressions into formal tests when appropriate

## What Not To Build

Do not build any of the following unless the documented scope changes:

- autonomous outbound communication
- email sending flows
- deep bidirectional sync engines
- webhook-heavy background integration architecture
- full inbox client behavior
- full Handshake, Canvas, or Drive production integrations for this contest MVP
- collaboration or multi-user workflows
- billing, admin, or enterprise management features
- native mobile app work
- broad settings and customization systems that do not improve the demo

## Definition Of Progress

Meaningful progress is measured by milestone completion in `TASKS.md`, not by raw infrastructure volume.

A feature is only meaningfully complete when:

- it improves the primary demo flow or a directly supporting flow
- it respects the trust and autonomy boundaries above
- it remains legible and useful to a judge seeing the product for the first time
- relevant verification passes
