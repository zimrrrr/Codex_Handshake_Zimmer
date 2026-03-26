# PRD — Workspace

## 1. Product Summary

`Workspace` is a SaaS product for students that turns scattered academic and career inputs into an actionable daily operating and management system.

This repository is being built as a submission for the OpenAI x Handshake Codex Creator Challenge. The product should be scoped and narrated as a contest-ready MVP business product with one clear usefulness story.

## 2. Problem

Students manage classes, deadlines, internships, applications, meetings, and personal projects across fragmented systems. Important context lives in inboxes, calendars, portals, documents, and memory.

Existing tools often store information without turning it into a manageable daily operating layer.

## 3. Product Goal

Help a student open one system, understand what matters now, and move immediately into action across school, work, and projects.

## 4. Target User

Primary user:

- undergraduate or early-career student
- active in both academic and career-building workflows
- already uses digital systems such as Gmail, Calendar, Handshake, and Canvas
- wants AI assistance without surrendering control

## 5. Core Product Experience

The intended submission experience is:

1. The student lands on `Agenda`
2. `Workspace` presents a unified operating view from Gmail, Calendar, and placeholder-backed Handshake and Canvas context
3. The system highlights what matters today
4. The agent suggests next actions and helps organize work
5. The student uses `School`, `Work`, and `Projects` to manage specific areas
6. The right-sidebar agent chat answers questions from full context and prepares app-local actions for confirmation

## 6. Core Surfaces

### Agenda

The temporal dashboard. It should show what is current, urgent, and next.

### School

The academic operating view. It should hold classes, assignments, and school obligations, whether imported or represented through placeholder-backed context.

### Work

The career operating view. It should organize internship work, Handshake-oriented opportunities, applications, and related communications.

### Projects

The self-directed workspace. It should support personal projects and independent goals.

### Agent Chat

The embedded assistant. It should understand cross-surface context and make the workspace feel actionable rather than static.

## 7. Integrations

Real MVP integrations:

- Gmail
- Google Calendar

Placeholder-backed MVP integrations:

- Handshake
- Canvas
- Drive

These placeholder-backed integrations should behave as intentional imported context in demo flows.

## 8. Agent Capabilities

The agent should:

- prioritize
- suggest tasks
- help build and maintain project views
- answer from full contextual understanding
- support user-managed workflows through agent assistance

The agent should not:

- autonomously act in external systems
- send emails
- silently mutate important user data

## 9. Contest Submission Bias

The contest rewards clarity, usefulness, creativity, execution, and polish. This product is intentionally optimized for usefulness.

That means the MVP should bias toward:

- one compelling demo flow
- visible product value in the interface
- clear explanation of how imported context becomes action
- agent behavior that is understandable and trustworthy

## 10. Out Of Scope

- fully productionized Handshake, Canvas, or Drive integrations
- deep sync infrastructure, webhooks, or heavy background jobs
- collaboration and team management
- billing or monetization systems
- native mobile experiences
- enterprise controls or admin dashboards
- full inbox client behavior

## 11. Definition Of Submission-Ready

The product is submission-ready when it has:

- a polished working demo
- seeded or imported context that clearly shows the full product shape
- Gmail and Calendar functioning in MVP scope
- realistic placeholder-backed Handshake and Canvas context in the core flow
- a coherent agent workflow across `Agenda`, `School`, `Work`, and `Projects`
- documentation that supports the showcase submission and pitch narrative
