# Implementation Rules

## File and Code Conventions

- React components use PascalCase filenames
- utility and library files use camelCase filenames
- shared types belong in `types/index.ts`
- API route files follow Next.js `route.ts` convention
- split components before they become monolithic

## API Conventions

- return typed JSON responses
- validate request bodies with Zod
- use a consistent error shape: `{ error: string, code?: string }`

## Database Conventions

- instantiate Prisma only in `lib/db/prisma.ts`
- avoid route-local Prisma clients
- preserve the schema described in `ARCHITECTURE.md` unless a documented decision changes it

## UX Conventions

- agenda is the default center surface
- assistant remains contextual to workflow, not a standalone chat product
- label assistant output as suggestions
- preserve visible user control for drafts and mutations

## Delivery Conventions

- prefer building runnable shells before adding complexity
- keep demoability in mind throughout, not just at the final phase
- verify changes with lint, typecheck, and tests relevant to the phase
