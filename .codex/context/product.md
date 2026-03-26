# Product Context

## Product

`Workspace` is a student SaaS product.

It is an operational layer that helps students turn scattered academic and career inputs into an actionable daily operating and management system.

## Core Outcome

The product succeeds when a student can understand what matters now, what to do next, and where each obligation belongs across school, work, and projects.

## Core Surfaces

- `Agenda` — the default dashboard with a temporal view of what matters today and next
- `School` — a structured surface for courses, assignments, and class-related obligations
- `Work` — a surface for internships, applications, and career activity
- `Projects` — a workspace for personal projects and self-directed initiatives
- right-sidebar agent chat — an embedded assistant that reasons across the user's context

## Target User

- undergraduate or early-career student
- actively managing academic and career obligations
- comfortable using AI tools
- already uses digital systems such as Gmail, Calendar, Canvas, and Handshake
- wants a system that helps organize action without taking control away

## Integration Model

Real MVP integrations:

- Gmail
- Google Calendar

Placeholder-backed MVP sources:

- Handshake
- Canvas
- Drive

The placeholder-backed sources should appear as realistic imported context in the product experience so the system can demonstrate the full intended shape without requiring all live integrations before submission.

## Agent Role

The agent helps the user:

- prioritize today
- identify next actions
- organize work into the right view
- understand context across integrations
- prepare app-local actions for explicit confirmation

The agent does not autonomously act in external systems.

## Product Principles

- usefulness over novelty
- clear operational surfaces over generic AI chat
- imported context should feel unified
- user control remains visible and explicit
- demo clarity matters because the product is being judged quickly

## Out Of Scope For Contest MVP

- autonomous external actions
- outbound email sending
- deep production integrations for Handshake, Canvas, or Drive
- collaboration and team workflows
- billing, admin, or enterprise surfaces
- native mobile product work
