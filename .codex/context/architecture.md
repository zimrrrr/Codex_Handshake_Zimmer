# Architecture Context

## Platform

- web app
- desktop-primary, responsive
- optimized for a polished contest demo

## Stack

- Next.js 14 App Router
- TypeScript strict mode
- Tailwind CSS + shadcn/ui
- NextAuth.js v5 / Auth.js
- PostgreSQL with Prisma ORM
- OpenAI SDK for agent chat and structured outputs
- Vitest + React Testing Library + Playwright

## Product Surfaces

- `Agenda` default dashboard
- `School` view
- `Work` view
- `Projects` view
- right-sidebar agent chat

These surfaces should share a coherent data model rather than behave like isolated mini-products.

## Integration Boundaries

Real MVP integrations:

- Gmail for read-oriented context
- Google Calendar for time-based context and scheduling visibility

Placeholder-backed MVP sources:

- Handshake as read-only imported career context
- Canvas as read-only imported academic context
- Drive as read-only contextual source

Placeholder-backed sources are valid architecture for the contest MVP as long as the product presents them as intentional imported context rather than hidden or broken integrations.

## Agent Layer

The agent layer should support:

- prioritization
- next-action suggestion
- contextual question answering
- view organization support
- preparation of app-local actions for explicit user approval

The agent layer should use structured outputs where possible so UI behavior remains predictable and typed.

## Trust Model

- no autonomous external mutations
- no outbound email sending
- no silent background changes to user-visible app state
- app-local actions may be prepared by the system but require explicit user confirmation before execution

## Data Model Direction

Core entities likely remain centered on:

- `User`
- `ConnectedAccount`
- imported and app-local work items
- categorized views for `School`, `Work`, and `Projects`
- assistant sessions and outputs

The implementation may evolve, but the architecture should keep unified context available to both the dashboard and the agent layer.
