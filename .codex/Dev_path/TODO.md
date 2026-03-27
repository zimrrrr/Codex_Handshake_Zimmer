# TODO.md — Active Development Track

Use this file as the active execution board for `Workspace`.

This is not just a loose task list. It is the working build track for the MVP so UI, placeholder data, backend scaffolding, and demo readiness move in the right order.

## Current Direction

The current development path is correct:

- keep the wireframe-first UI direction
- stop adding broad new surfaces unless they unlock a concrete flow
- define placeholder-backed product contracts before more backend or polished forms
- move next into placeholder models, create/edit flows, and lightweight backend scaffolding

## Build Order

Follow this sequence unless scope changes:

1. lock product definitions for `School`, `Work`, `Projects`, and imported placeholder context
2. define which entities are `user-created`, `placeholder-backed`, or future `imported/read-only`
3. convert new/detail routes into proper create/edit/view flows
4. expose those flows through typed local loaders or API contracts
5. add seeded/demo data that supports the primary demo path
6. implement Gmail + Calendar integration with clear trust boundaries
7. connect the assistant to structured context
8. polish the demo path and finish validation

## Immediate Next Actions

- [ ] define the canonical card model for `School`
- [ ] define the canonical card model for `Work`
- [ ] define the canonical card model for `Projects`
- [ ] define the canonical placeholder model for `Handshake`, `Canvas`, and `Drive`
- [ ] define the card lifecycle: create, inspect, edit, archive, read-only imported
- [ ] define which cards can be user-created in MVP
- [ ] define which cards must remain read-only imported context in MVP
- [ ] convert `/school/new`, `/work/new`, and `/projects/new` into real wireframe forms
- [ ] add edit routes or inline edit states for the new detail views
- [ ] centralize placeholder/demo data away from page-local arrays
- [ ] define typed contracts for assistant-readable context summaries
- [ ] define typed contracts for app-local, user-confirmed actions

## Backend Before More UI

These items should be defined before broad new surface work continues:

- [ ] source-of-truth type definitions for cards and placeholder imports
- [ ] typed route or server-loader shape for dashboard/detail/create flows
- [ ] explicit `source` semantics: `user`, `placeholder`, `imported`
- [ ] mutation policy for app-local actions
- [ ] error/loading/empty states for card flows
- [ ] seed/demo data plan that supports the main contest walkthrough

## Questions That Must Be Answered

- [ ] Is `School` primarily coursework cards, course cards, or mixed academic workstreams?
- [ ] Is `Work` a unified opportunity tracker or a mixed surface of opportunities, follow-ups, and career tasks?
- [ ] Is `Projects` only self-directed work, or can it also mirror cross-listed school/work projects?
- [ ] What is the smallest valid create flow for each surface?
- [ ] What fields are required vs optional in MVP?
- [ ] What data is editable by the user vs read-only imported context?
- [ ] What assistant actions are allowed to be prepared but not executed automatically?

## Demo Readiness Track

- [ ] define the exact 3-minute demo path
- [ ] define the seeded user story used for screenshots and live demo
- [ ] define which routes must be stable for the contest build
- [ ] define what “ready for showcase” means in concrete terms

## Schedule

Target end date:

- [x] final MVP target date: April 29, 2026

Milestone checkpoints:

- [x] placeholder-contract lock date: April 2, 2026
- [x] create/edit flow lock date: April 8, 2026
- [x] integration scaffolding lock date: April 15, 2026
- [x] demo-path lock date: April 20, 2026
- [x] demo polish date: April 24, 2026
- [x] validation and submission date: April 27-29, 2026

Recommended pacing:

- March 27 to April 2: lock entity definitions, source semantics, and placeholder contracts
- April 3 to April 8: finish create/detail/edit wireframe flows for core surfaces
- April 9 to April 15: centralize demo data and backend scaffolding, then stabilize typed loaders or API routes
- April 16 to April 20: connect real Gmail/Calendar context and lock the primary demo walkthrough
- April 21 to April 24: improve polish, trust-boundary clarity, and screenshot/video readiness
- April 25 to April 29: run validation, fix regressions, and prepare the final contest build

## Exit Criteria

This track is working if:

- product shape stays coherent
- placeholder models are explicit and typed
- create/edit flows do not require route redesign later
- integrations plug into existing surfaces instead of forcing rewrites
- the demo path improves every week without growing scope randomly
