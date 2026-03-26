type WorkspacePageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const architectureAreas = [
  {
    title: "Presentation layer",
    body: "App Router pages stay thin. They compose workspace surfaces and delegate data fetching to route handlers or server-side services."
  },
  {
    title: "Domain layer",
    body: "Agenda items, drafts, auth, and assistant sessions each get typed contracts so the UI never couples directly to provider-specific payloads."
  },
  {
    title: "Integration layer",
    body: "Google APIs and OpenAI calls belong in provider modules behind feature flags and user-triggered actions."
  }
] as const;

export function WorkspacePage({
  eyebrow,
  title,
  description
}: WorkspacePageProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border/80 pb-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="grid gap-4 py-6 xl:grid-cols-3">
        {architectureAreas.map((area) => (
          <section
            key={area.title}
            className="rounded-[24px] border border-border bg-background/80 p-5"
          >
            <h2 className="text-lg font-semibold">{area.title}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.body}</p>
          </section>
        ))}
      </div>

      <section className="rounded-[28px] border border-dashed border-border bg-background/60 p-6">
        <h2 className="text-lg font-semibold">Current phase output</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          This route exists as a stable shell now so later phases can fill in real
          queries, mutations, and interaction states without reworking the workspace
          layout or navigation model.
        </p>
      </section>
    </div>
  );
}
