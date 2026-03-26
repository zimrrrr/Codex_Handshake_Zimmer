# TASKS.md — Build Phases and Acceptance Criteria

---

## Phase 1 — Foundation
**Goal:** Repo is set up, runs, and all tooling works. No real features yet.

- [ ] `npx create-next-app` with TypeScript, Tailwind, ESLint, App Router
- [ ] Install: `next-auth@beta`, `@prisma/client`, `prisma`, `zod`, `openai`, `@auth/prisma-adapter`
- [ ] Install and init shadcn/ui
- [ ] Create `prisma/schema.prisma` — full schema from ARCHITECTURE.md
- [ ] Create `lib/db/prisma.ts` — Prisma singleton
- [ ] Create `.env.example` — all required variables documented
- [ ] Create all route shells: `/agenda`, `/projects`, `/school`, `/work`, `/drafts`, `/signin`, all API routes
- [ ] Add `package.json` scripts: dev, build, lint, typecheck, test, db:push, db:seed, db:studio
- [ ] Configure Vitest
- [ ] `npm run lint` → 0 errors
- [ ] `npm run typecheck` → 0 errors
- [ ] `npm run dev` → app loads without crashing

---

## Phase 2 — Integration
**Goal:** User can sign in with Google and their calendar events appear in the database.

- [ ] NextAuth v5 config with Google provider, correct scopes
- [ ] Token stored encrypted in ConnectedAccount on first sign-in
- [ ] Token refresh working in NextAuth callbacks
- [ ] `/api/calendar/sync` — fetches events from Google Calendar for next 7 days, upserts into AgendaItem
- [ ] `/api/tasks` — GET (list), POST (create), PATCH (update), DELETE for app-local tasks
- [ ] Revoked permission handling — redirects to reconnect screen
- [ ] `npm run test` → passing

---

## Phase 3 — Core Product
**Goal:** Agenda view shows real data. User can navigate and add tasks.

- [ ] `AgendaView` — 7-day rolling, grouped by day, events + tasks unified
- [ ] Visual distinction between EVENTs and TASKs
- [ ] Category badges: SCHOOL, WORK, PROJECTS, UNCATEGORIZED
- [ ] Sidebar with navigation to all 5 views
- [ ] Projects/School/Work pages — filtered agenda views (category param)
- [ ] AddItemButton — opens form to create task or event
- [ ] Task creation writes to DB and appears in agenda without reload
- [ ] Empty state for all views
- [ ] `npm run lint && npm run typecheck && npm run test` → all passing

---

## Phase 4 — Assistant
**Goal:** User can open assistant panel, ask for help on an agenda item, and save a draft.

- [ ] AssistantPanel — right collapsible panel
- [ ] Panel opens contextually when user clicks "Ask assistant" on item
- [ ] Panel also openable globally (no item context)
- [ ] `/api/assistant` — accepts messages + optional contextItemId, returns structured JSON
- [ ] Structured output: `{ suggestions: string[], draftSubject?: string, draftBody?: string }`
- [ ] "Save as Draft" button → creates Draft record → user lands in Drafts view
- [ ] No send button exists anywhere
- [ ] `npm run test` → passing

---

## Phase 5 — Trust Layer
**Goal:** User always knows what the product will and won't do. Boundaries are visible.

- [ ] Permission explanation screen before Google OAuth redirect (plain language, no jargon)
- [ ] All assistant outputs labeled "Suggestion" — not "Action"
- [ ] Draft editor has "Save" and "Discard" — no "Send"
- [ ] Drafts view shows copy: "Send through Gmail when ready"
- [ ] First-run state: prompt to sync calendar after connecting
- [ ] `npm run test` → passing

---

## Phase 6 — Demo
**Goal:** App can be demoed end-to-end without a real Google account.

- [ ] `prisma/seed.ts` — demo user with 7 days of events and tasks across all categories
- [ ] `NEXT_PUBLIC_FLAG_DEMO_MODE=true` loads seed data instead of Google API calls
- [ ] Onboarding: sign in → permission screen → agenda
- [ ] Happy path polished: agenda → select item → assistant → prep help → save draft → drafts view
- [ ] All empty states and loading states handled
- [ ] `npm run db:seed` → seeds without errors

---

## Phase 7 — Validation
**Goal:** Codebase is clean, tested, and ready for user testing.

- [ ] Playwright E2E: happy-path sign in → view agenda
- [ ] Playwright E2E: add task → appears in agenda
- [ ] Playwright E2E: ask assistant → save draft → draft appears in drafts
- [ ] Basic analytics events logged: agenda_opened, task_created, assistant_used, draft_saved
- [ ] `npm run lint` → 0 errors
- [ ] `npm run typecheck` → 0 errors
- [ ] `npm run test` → all passing
- [ ] `npm run test:e2e` → all passing
- [ ] `npm run build` → successful production build
