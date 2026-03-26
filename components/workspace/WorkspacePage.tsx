type WorkspacePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  useCases: readonly string[];
  outcome: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
};

export function WorkspacePage({
  eyebrow,
  title,
  description,
  useCases,
  outcome,
  emptyStateTitle,
  emptyStateDescription
}: WorkspacePageProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border/80 pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </p>
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            Milestone 1 shell
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="grid gap-4 py-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
        <section className="rounded-[24px] border border-border bg-background/80 p-5">
          <h2 className="text-lg font-semibold">What belongs here</h2>
          <div className="mt-4 grid gap-3">
            {useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-2xl border border-border/80 bg-card px-4 py-3 text-sm leading-6 text-foreground"
              >
                {useCase}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[24px] border border-border bg-background/80 p-5">
          <h2 className="text-lg font-semibold">What the user will do next</h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">{outcome}</p>
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/70 p-4">
            <p className="text-sm font-medium">{emptyStateTitle}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {emptyStateDescription}
            </p>
          </div>
        </section>
      </div>

      <section className="rounded-[28px] border border-dashed border-border bg-background/60 p-6">
        <h2 className="text-lg font-semibold">Why this surface exists now</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          This shell makes the product story legible before live integrations
          arrive, so the user can understand how Workspace will manage time,
          obligations, and next actions across the student operating system.
        </p>
      </section>
    </div>
  );
}
