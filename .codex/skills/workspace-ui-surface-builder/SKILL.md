---
name: workspace-ui-surface-builder
description: Build and refactor Next.js App Router UI surfaces using project Tailwind and shadcn patterns with consistent layout, navigation, and component composition. Use when implementing or polishing Agenda, School, Work, Projects, sidebar chat shell, page layout, shared UI primitives, or responsive behavior.
---
# Workspace UI Surface Builder

## Workflow

1. Read product constraints and trust boundaries from `AGENTS.md`.
2. Identify existing primitives before creating new components.
3. Implement structure first: layout, hierarchy, and navigation.
4. Add visual polish only after the surface is understandable.
5. Keep surfaces scannable for first-time demo viewers.
6. Verify responsive behavior and component consistency.

## Rules

- Prefer shared primitives over one-off styles.
- Keep route and page responsibilities clear; extract reusable UI.
- Avoid generic "AI app" chrome that conflicts with the Workspace narrative.
- Treat the right-sidebar chat as a durable surface, not a temporary modal.

## Validation

- [ ] Surface goal is obvious in under one minute
- [ ] Navigation and hierarchy are clear
- [ ] Right-sidebar chat shell feels durable, not modal or temporary
- [ ] Styling aligns with existing tokens and components
