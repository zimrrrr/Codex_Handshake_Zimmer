# Architecture Context

## Platform

- web app
- desktop-primary, responsive
- deployed to Vercel

## Stack

- Next.js 14 App Router
- TypeScript strict mode
- Tailwind CSS + shadcn/ui
- NextAuth.js v5 / Auth.js with Google OAuth
- PostgreSQL with Prisma ORM
- local dev DB: Docker Postgres 15
- hosted DB: Supabase Postgres
- OpenAI API with `gpt-4o` and `gpt-4o-mini`
- Vitest + React Testing Library + Playwright

## Primary Data Model

Core entities:

- `User`
- `ConnectedAccount`
- `AgendaItem`
- `Draft`
- `AssistantSession`

Key modeling decisions:

- tasks and events share `AgendaItem`
- category drives filtered views: `SCHOOL`, `WORK`, `PROJECTS`, `UNCATEGORIZED`
- source distinguishes app-local items from synced calendar items
- drafts are saved artifacts, not send actions

## Key Routes

Workspace:

- `/agenda`
- `/projects`
- `/school`
- `/work`
- `/drafts`
- `/signin`

API:

- `/api/auth/[...nextauth]`
- `/api/agenda`
- `/api/calendar/sync`
- `/api/tasks`
- `/api/drafts`
- `/api/assistant`

## Integration Boundaries

Google APIs in MVP:

- Calendar read/write for calendar event creation flows only when explicitly user-triggered
- Gmail read-only for context, behind feature flag

Never in MVP:

- Gmail send/write
- Google Tasks
- Drive/Docs integrations
- background webhook complexity for calendar sync

## UI Shape

- left navigation shell
- center agenda/workspace surface
- right collapsible assistant panel

The assistant should feel embedded in workflow, not like a separate chatbot app.
