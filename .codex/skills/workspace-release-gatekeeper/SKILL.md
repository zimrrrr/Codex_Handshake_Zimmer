---
name: workspace-release-gatekeeper
description: Run and interpret release-readiness checks for the Workspace MVP, including lint, typecheck, tests, build, and critical demo-flow validation. Use when preparing milestone completion, demos, or submission packaging.
---
# Workspace Release Gatekeeper

## Workflow

1. Run verification in this order: lint, typecheck, test, build.
2. Verify critical demo flow behavior after checks.
3. Report blockers by severity with the shortest fix path.
4. Confirm trust-boundary constraints still hold.

## Validation

- [ ] `npm run lint` passes
- [ ] `npm run typecheck` passes
- [ ] `npm run test` passes
- [ ] `npm run build` succeeds
- [ ] Primary demo flow is stable
