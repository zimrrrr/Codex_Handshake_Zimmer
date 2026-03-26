async function main() {
  console.info("Seed data is not implemented yet. Demo-mode seeding belongs to Phase 6.");
}

main().catch((error: unknown) => {
  console.error("Seed failed", error);
  process.exit(1);
});
