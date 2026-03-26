# Implementation Rules

## File And Code Conventions

- React components use PascalCase filenames
- utility and library files use camelCase filenames
- shared types belong in `types/index.ts` unless there is a clear reason otherwise
- API route files follow Next.js `route.ts` convention
- split components before they become difficult to reason about

## Product-Biased Engineering Rules

- prefer usefulness over infrastructure depth
- prefer demo-visible behavior over speculative platform work
- prefer realistic placeholder-backed context over half-finished integrations
- preserve clear user control in all agent-assisted workflows

## API And Agent Rules

- return typed JSON responses
- validate request bodies with Zod
- use consistent error shapes: `{ error: string, code?: string }`
- use structured outputs for agent behavior wherever possible
- keep agent interfaces explicit and predictable for UI consumption

## Database Rules

- instantiate Prisma only in `lib/db/prisma.ts`
- avoid route-local Prisma clients
- keep the data model aligned with shared operational views rather than fragmented feature-specific silos

## UX Rules

- `Agenda` is the opening dashboard, but `School`, `Work`, and `Projects` are also first-class
- the right-sidebar assistant should feel embedded in workflow, not like a separate chatbot app
- placeholders should look intentional
- trust boundaries should be obvious in copy and interaction design

## Delivery Rules

- build the contest demo flow before expanding sideways
- keep placeholder and real integration intent explicit in code and UI
- verify changes with the narrowest meaningful checks first, then broader checks when warranted
