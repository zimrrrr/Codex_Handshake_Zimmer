# AI Workspace for Students

This repository now contains the initial application architecture for the student workspace MVP described in the planning docs.

## Architecture shape

- `app/` contains App Router pages, workspace layout, and API route shells.
- `components/workspace/` contains the durable shell components that anchor the product UX.
- `lib/` contains shared utilities, environment parsing, auth configuration, API helpers, and domain contracts.
- `prisma/` contains the data model and future seed entrypoint.
- `types/` contains shared TypeScript declarations.

## First implementation goals

- lock in the agenda-first workspace layout
- define the route map and trust boundaries
- establish the Prisma schema for users, connected accounts, agenda items, drafts, and assistant sessions
- keep integrations behind typed contracts and placeholder endpoints until later phases
