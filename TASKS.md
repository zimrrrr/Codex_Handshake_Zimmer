# TASKS.md — Milestones And Acceptance Criteria

## Milestone 1 — Core Workspace Shell
**User-visible outcome:** The product clearly presents itself as `Workspace`, with the right navigation, right-sidebar agent chat shell, and a product story centered on student operations rather than a generic assistant.

Required artifacts:

- [ ] app shell expresses `Agenda`, `School`, `Work`, and `Projects` as first-class navigation targets
- [ ] right-sidebar agent panel exists as a durable workspace surface
- [ ] top-level copy and framing reflect `Workspace` as a student operating system
- [ ] authentication and basic routing support the primary demo flow

Acceptance:

- [ ] a first-time viewer can identify the product shape in under a minute
- [ ] `npm run dev` starts and the app shell loads without crashing

## Milestone 2 — Agenda And Operational Views
**User-visible outcome:** The user lands on `Agenda` and can understand how work is organized across time and across the `School`, `Work`, and `Projects` views.

Required artifacts:

- [ ] `Agenda` works as the default temporal dashboard
- [ ] `School`, `Work`, and `Projects` exist as distinct operational views
- [ ] shared work items can be filtered or grouped into the right surfaces
- [ ] empty states explain what each view is for

Acceptance:

- [ ] the product story is visible even before live integrations are fully connected
- [ ] navigation and state transitions between views feel coherent

## Milestone 3 — Gmail And Calendar Integration
**User-visible outcome:** Real user context from Gmail and Calendar strengthens the dashboard and gives the agent meaningful information to reason over.

Required artifacts:

- [ ] Google auth is configured for MVP integration scope
- [ ] Calendar sync surfaces time-based obligations in the workspace
- [ ] Gmail-derived context is available in a read-oriented, trust-safe way
- [ ] revoked or missing permissions fail clearly without breaking the product

Acceptance:

- [ ] Gmail and Calendar improve the core demo flow
- [ ] no outbound email sending path exists
- [ ] no autonomous external action path exists

## Milestone 4 — Placeholder Connector Context For Handshake / Canvas / Drive
**User-visible outcome:** The product demonstrates the full intended operating system by showing realistic imported context from Handshake, Canvas, and Drive without requiring full production integrations.

Required artifacts:

- [ ] Handshake placeholder-backed data appears as career-oriented imported context
- [ ] Canvas placeholder-backed data appears as academic imported context
- [ ] Drive placeholder-backed data appears as contextual support where helpful
- [ ] placeholder sources are visible and understandable in the UI

Acceptance:

- [ ] placeholders behave like intentional imported context, not disabled future features
- [ ] the user can see how `School` and `Work` become more useful because of these sources

## Milestone 5 — Agent System And Contextual Chat
**User-visible outcome:** The agent helps the user understand priorities, suggests next actions, and supports management of `School`, `Work`, and `Projects` from full available context.

Required artifacts:

- [ ] `/api/assistant` or equivalent agent entrypoint returns structured output
- [ ] agent can prioritize current work
- [ ] agent can suggest app-local tasks or next actions
- [ ] agent can reason across Gmail, Calendar, and placeholder-backed context
- [ ] user can explicitly confirm app-local actions prepared by the agent

Acceptance:

- [ ] the assistant feels useful for management, not just drafting
- [ ] mutations remain user-controlled
- [ ] the system is easy to explain in a short demo

## Milestone 6 — Demo Data And Seeded Scenarios
**User-visible outcome:** The product can be demonstrated reliably even without all live integrations.

Required artifacts:

- [ ] seed data supports the primary demo story
- [ ] seeded data includes school, career, and project context
- [ ] placeholder-backed Handshake and Canvas records appear realistic
- [ ] demo mode and loading states are coherent

Acceptance:

- [ ] the product can be demoed end-to-end on demand
- [ ] the demo still communicates the full intended product shape

## Milestone 7 — Submission Polish And Pitch Readiness
**User-visible outcome:** The product looks intentional, polished, and clearly useful in screenshots, walkthroughs, and a 3-minute pitch.

Required artifacts:

- [ ] trust boundaries are visible in copy and controls
- [ ] key screens are polished for first impressions
- [ ] the primary demo path is smooth and repeatable
- [ ] the product narrative is obvious from the UI

Acceptance:

- [ ] a judge can quickly understand the value proposition
- [ ] the app feels like a real MVP business product, not a rough prototype

## Milestone 8 — Validation And Acceptance
**User-visible outcome:** The submission is reliable enough to show live and strong enough to support contest evaluation.

Required artifacts:

- [ ] happy-path tests cover the main demo flow
- [ ] major user-visible regressions are caught by validation checks
- [ ] analytics or lightweight instrumentation capture core interactions if useful
- [ ] build, lint, typecheck, and relevant tests are green

Acceptance:

- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run test` passes
- [ ] `npm run build` succeeds
- [ ] the product is ready for showcase submission and pitch support
