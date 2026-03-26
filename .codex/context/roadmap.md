# Delivery Context

## Phase Order

1. Foundation
2. Integration
3. Core product
4. Assistant
5. Trust layer
6. Demo
7. Validation

## Phase Gates

A phase is complete only when:

- `npm run lint` passes
- `npm run typecheck` passes
- `npm run test` passes
- the feature works end-to-end in dev

## Early Priorities

Phase 1 should establish:

- Next.js 14 project scaffold
- strict TypeScript
- Prisma schema from `ARCHITECTURE.md`
- route shells and API route shells
- environment variable documentation
- package scripts
- Vitest configuration

## Validation Bias

The repo should evolve toward:

- clear empty and loading states
- demo mode support
- stable happy-path flows
- end-to-end coverage for agenda, task creation, and draft saving
