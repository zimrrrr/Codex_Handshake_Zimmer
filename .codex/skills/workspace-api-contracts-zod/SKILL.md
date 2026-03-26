---
name: workspace-api-contracts-zod
description: Implement and enforce typed API contracts in Next.js route handlers using Zod validation and consistent typed JSON error shapes. Use when creating or updating API endpoints, assistant routes, or integration adapters consumed by Workspace UI surfaces.
---
# Workspace API Contracts (Zod)

## Workflow

1. Define request schema and response contract first.
2. Validate all route inputs with Zod.
3. Return the consistent error shape: `{ error: string, code?: string }`.
4. Keep contracts aligned with UI expectations and agent consumers.
5. Keep route outputs explicit and typed end to end.

## Validation

- [ ] Invalid input returns a stable 4xx shape
- [ ] Success payload matches the declared type
- [ ] No `any` appears in route contracts
