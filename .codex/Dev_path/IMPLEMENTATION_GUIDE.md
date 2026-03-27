# IMPLEMENTATION_GUIDE.md — What Must Be Defined Before Continuing

This document explains what must be decided and documented before `Workspace` keeps expanding.

The current repo is no longer in a pure exploration phase. The shell, view model, and high-level product story now exist. The next risk is building too much UI without stable data contracts, mutation rules, and placeholder definitions.

## Why This Comes Next

The wireframe-first approach was the correct first move because it clarified:

- the product shape
- the major surfaces
- the assistant shell
- the contest narrative

The next move is not “more views by default.”

The next move is to define the internal structure that those views depend on so later forms, integrations, and assistant logic fit without rework.

## Definitions To Lock

### 1. Card Models

Define the canonical card shape for:

- `School`
- `Work`
- `Projects`

Each model should answer:

- what the card represents
- what fields are required
- what fields are optional
- which statuses are valid
- what source metadata is required
- what detail-view fields must exist
- what edit/create flows need to support

### 2. Source Types

Every surfaced object should clearly identify its origin.

Use an explicit source model such as:

- `user`
- `placeholder`
- `imported`

This matters because:

- user-created items need create/edit/archive flows
- placeholder items need realistic demo behavior
- imported items may need read-only treatment and visible trust boundaries

### 3. Imported Context Policy

Define how placeholder-backed imported context behaves for:

- Handshake
- Canvas
- Drive

This should include:

- where the data appears in the UI
- what the user is allowed to do with it
- what stays read-only
- how clearly the source is labeled
- how the assistant can refer to it

### 4. Card Lifecycle

Before implementing backend or forms, define the MVP lifecycle:

- create
- inspect
- edit
- archive or close
- imported/read-only

Do not let each route invent its own rules.

### 5. Assistant Interaction Contract

Define what the assistant can do with these entities.

At minimum:

- summarize current pressure
- suggest next actions
- prepare app-local changes
- require explicit user confirmation for mutations
- never take external action autonomously

The assistant should operate on structured context, not raw page copy.

## Recommended Build Sequence

### Phase 1 — Contract Lock

Goal:

- stabilize the product model

Do:

- define all card and placeholder types
- define source semantics
- define create/edit/detail expectations
- define allowed assistant action shapes

Do not:

- build more broad UI surfaces
- implement live integrations yet

### Phase 2 — Placeholder-Backed Flows

Goal:

- make the existing routes structurally real

Do:

- replace placeholder `new` routes with real wireframe forms
- add edit flows for detail views
- centralize seeded placeholder data
- load route data through shared adapters or typed local APIs

### Phase 3 — Demo Data And Backend Scaffolding

Goal:

- make the product demoable without live dependencies

Do:

- add seed-backed or adapter-backed data for all core surfaces
- implement empty/loading/error states
- define stable local data loaders or API responses

### Phase 4 — Real Integrations

Goal:

- connect real value to the existing product model

Do:

- Google auth
- Calendar sync
- Gmail read-oriented context

Delay unless necessary:

- deeper production-grade connector architecture

### Phase 5 — Assistant Grounding

Goal:

- make the assistant useful inside the real product shape

Do:

- feed structured card + connector context into the assistant
- support contextual prioritization
- support prepared but user-confirmed app-local actions

## What To Avoid

Avoid these traps:

- adding views before their entities are defined
- inventing route-specific field models
- mixing placeholder and imported data without source labels
- building final UI polish before flow contracts are stable
- implementing live integrations before seeded demo flows are reliable

## End-Date Planning

If this repo is going to run on a proper track with an end date, define:

- target MVP completion date: April 29, 2026
- contract lock date: April 2, 2026
- create/edit flow lock date: April 8, 2026
- integration lock date: April 15, 2026
- demo-path lock date: April 20, 2026
- demo polish date: April 24, 2026
- validation/submission date: April 27-29, 2026

Until those dates exist, velocity will feel real but direction can drift.

## Practical Next Step

The best immediate next implementation step is:

1. document the card contracts
2. turn the new routes into real forms
3. centralize placeholder-backed data
4. expose it through typed loaders or API contracts

That creates a stable base for integrations and the assistant without forcing another UI rewrite later.
