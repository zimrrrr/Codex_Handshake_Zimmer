# AI Workspace for Students

This repository now contains the initial application architecture for the student workspace MVP described in the planning docs.

## Development setup

Install project dependencies:

```bash
npm install
```

Run the local app:

```bash
npm run dev
```

The Next.js dev server runs at `http://localhost:3000`.

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

## Dev Browser workflow

This repo supports `dev-browser` for fast local UI inspection and smoke checks while developing the Next app.

Use it for:

- quick route checks against the local dev server
- AI-readable page snapshots when selectors are not obvious
- lightweight interaction checks across `Agenda`, `School`, `Work`, and `Projects`
- screenshots saved to `~/.dev-browser/tmp/`

Do not use it as a replacement for the repo's formal test stack. Keep using Vitest and Playwright for regression coverage and CI-oriented verification.

### One-time machine setup

`dev-browser` is currently expected as a global CLI:

```bash
npm install -g dev-browser
npm run browser:install
```

The install step provisions the Playwright/Chromium dependencies used by `dev-browser`.

### Repo-local commands

Start the app first in one terminal:

```bash
npm run dev
```

Then run any of these in another terminal:

```bash
npm run browser:signin
npm run browser:agenda
npm run browser:agenda:filters
npm run browser:agenda:screenshot
```

What each command does:

- `browser:signin`: opens `/signin` and logs the current URL plus title
- `browser:agenda`: opens `/agenda` and prints an AI-friendly structural snapshot
- `browser:agenda:filters`: opens `/agenda`, clicks `Today` then `School`, and logs the visible card count
- `browser:agenda:screenshot`: opens `/agenda` and saves a screenshot path to `~/.dev-browser/tmp/agenda-home.png`

### Why this matters in this repo

The current product is route- and state-heavy, with most value in the shape and clarity of the UI. `dev-browser` is a good fit for:

- checking first-impression flows quickly during UI work
- confirming seeded or placeholder-backed views render as expected
- reproducing layout or interaction issues without writing a full Playwright test first
- surfacing runtime problems such as missing local API routes or unexpected failed requests while the app is open
