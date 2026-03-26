# Decision Context

These are the durable decisions that should shape implementation unless explicitly changed.

## Product and Platform

- Web app, not native
- Google-only auth in MVP
- desktop-primary responsive design

## Data and Scope

- tasks are app-local, not Google Tasks
- Projects / School / Work are category filters, not separate models
- agenda horizon is exactly 7 days: today + 6

## AI and Trust

- assistant lives in a right-side panel
- OpenAI is the AI provider
- Gmail context is read-only and feature-flagged
- there must be no send-email code path anywhere in the codebase

## Sync and Ops

- production DB is Supabase Postgres
- local DB is Docker Postgres
- calendar sync is pull-on-load + manual refresh
- no webhook or push sync in MVP

## Build Process

- Codex is expected to implement, not just plan
- work should advance phase by phase
- each phase must be buildable and pass lint/typecheck before moving on
