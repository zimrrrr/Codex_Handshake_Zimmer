# AGENTS.md — Instructions for Codex

This file defines how Codex should operate on this repository. Read this before writing any code.

---

## What You Are Building

An AI workspace for students. A Google-centered operational layer that shows a unified agenda, lets students add tasks and events, and provides a bounded AI assistant for preparation and follow-up drafting.

This is **not** a general chatbot. It is **not** an autonomous agent. It is a structured workspace with a clearly bounded copilot.

The full product definition is in `PRD.md`. The technical stack and data model are in `ARCHITECTURE.md`. The decision log is in `DECISIONS.md`.

---

## Stack

- Next.js 14 (App Router), TypeScript (strict)
- Tailwind CSS + shadcn/ui
- NextAuth.js v5 (Google OAuth)
- PostgreSQL via Prisma ORM
- OpenAI API (gpt-4o)
- Vitest + Playwright for testing

---

## Non-Negotiable Rules

1. **No send-email path.** Do not create any API route, server action, function, or tool call that sends email. Not even as a stub. If you think sending email is needed, stop and ask.
2. **TypeScript only.** No `.js` files except config files that require it (e.g., `tailwind.config.js`). Use strict mode.
3. **No secrets in code.** All credentials go in `.env.local` (gitignored). Reference `process.env.*` only. Never hardcode tokens, keys, or IDs.
4. **No autonomous agent actions.** The assistant suggests and prepares. It does not write to calendar, send drafts, delete items, or take external actions without an explicit user-triggered API call.
5. **No `any` types.** Use proper TypeScript types. If a type is genuinely unknown, use `unknown` and narrow it.

---

## Conventions

### Branch naming
`feature/[short-description]`, `fix/[short-description]`, `chore/[short-description]`

### Commit style
`type(scope): description` — e.g., `feat(agenda): add 7-day rolling view`, `fix(auth): handle token refresh failure`

### File naming
- React components: PascalCase (`AgendaView.tsx`)
- Utilities, lib files: camelCase (`calendar.ts`)
- API routes: follow Next.js App Router convention (`route.ts`)

### Component structure
- Keep components focused. If a component exceeds ~150 lines, consider splitting.
- Co-locate component-specific types in the same file unless shared.
- Shared types go in `types/index.ts`.

### API routes
- All routes return typed JSON responses.
- Use Zod for request body validation.
- Return consistent error shapes: `{ error: string, code?: string }`.

### Database
- Always use the Prisma singleton from `lib/db/prisma.ts`.
- Never instantiate `new PrismaClient()` directly in route files.

---

## Commands

```bash
npm install           # install dependencies
npm run dev           # start dev server
npm run build         # production build
npm run lint          # ESLint check
npm run typecheck     # TypeScript check (no emit)
npm run test          # Vitest unit + component tests
npm run test:e2e      # Playwright E2E tests
npm run db:push       # sync Prisma schema to DB (dev only)
npm run db:seed       # seed demo data
npm run db:studio     # open Prisma Studio
```

---

## Environment Variables

See `.env.example` for the full list. For local development, copy to `.env.local` and fill in values.

External calls to Google APIs and OpenAI are expected during development. You will need real credentials in `.env.local` to test integrations. Use a personal Google account or a test account for development.

---

## Phase Instructions

Work through phases in order. Do not start a new phase until the current phase is buildable and passing lint + typecheck.

### Phase 1 — Foundation
- Initialize Next.js 14 project with TypeScript, Tailwind, ESLint
- Install and configure: NextAuth.js v5, Prisma, shadcn/ui, Zod, OpenAI SDK
- Create `.env.example` with all required variables
- Create `prisma/schema.prisma` with full data model from ARCHITECTURE.md
- Scaffold all routes as empty shells (no UI yet, just route files)
- Set up `lib/db/prisma.ts` singleton
- Set up `package.json` scripts: dev, build, lint, typecheck, test, db:push, db:seed

### Phase 2 — Integration
- Implement Google OAuth via NextAuth (scopes: openid, email, profile, calendar, gmail.readonly)
- Store tokens in ConnectedAccount table (encrypted)
- Implement token refresh callback
- Implement `/api/calendar/sync` — pull events from Google Calendar, upsert into AgendaItem table
- Implement `/api/tasks` — CRUD for app-local tasks

### Phase 3 — Core product
- Build `AgendaView` component — 7-day rolling view, grouped by day
- Show events (source=GOOGLE_CALENDAR) and tasks (source=APP) unified in one list
- Distinguish visually between events and tasks
- Add category badge (SCHOOL / WORK / PROJECTS)
- Build sidebar navigation: Agenda, Projects, School, Work, Drafts & Follow-ups
- Implement category-filtered views for Projects, School, Work (same data, filtered query)
- Build AddItemButton + task/event creation form

### Phase 4 — Assistant
- Build AssistantPanel (right collapsible panel)
- Implement `/api/assistant` — takes messages + optional contextItemId, returns structured response
- Structured output: `{ suggestions: string[], draftSubject?: string, draftBody?: string }`
- Wire panel to selected agenda item context
- Implement "Save as draft" flow from assistant output → creates Draft record

### Phase 5 — Trust layer
- Build permission explanation screen during onboarding (before Google OAuth redirect)
- Add clear "suggestions only" labeling on all assistant outputs
- Add "Save to Drafts" and "Discard" buttons — never "Send"
- Add empty states for all views (no agenda items, no drafts, etc.)
- First-run state: prompt user to sync calendar after connecting Google

### Phase 6 — Demo
- Build `prisma/seed.ts` with demo user, 7 days of realistic calendar events and tasks across all three categories
- Build onboarding flow: sign in → permission screen → agenda
- Polish happy-path: view agenda → click item → open assistant → get prep help → save draft → view in Drafts
- Add demo mode flag (`NEXT_PUBLIC_FLAG_DEMO_MODE`) that loads seed data instead of real Google data

### Phase 7 — Validation
- Add basic analytics events (agenda open, task created, assistant used, draft saved)
- End-to-end Playwright tests covering the three happy-path flows in PRD.md section 23
- Run full lint, typecheck, test suite — all must pass

---

## What "Done" Means

A phase is done when:
- `npm run lint` passes with zero errors
- `npm run typecheck` passes with zero errors
- `npm run test` passes (all tests green)
- The feature works end-to-end in dev (not just compiles)

---

## What Not To Build

Do not build any of the following, even if they seem helpful:
- Autonomous email sending
- Full Gmail inbox view or inbox triage
- Google Tasks sync
- LinkedIn or Handshake integrations
- CRM contact tracking
- Recurring task logic (defer to post-MVP)
- Team or collaboration features
- Admin dashboards
- Mobile-native UI (responsive is fine, native app is not in scope)
