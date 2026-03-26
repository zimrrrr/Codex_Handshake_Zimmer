export function AssistantPanel() {
  return (
    <aside className="rounded-[28px] border border-border/70 bg-card/70 p-5 shadow-[0_24px_80px_rgba(24,33,46,0.05)] backdrop-blur">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
        Assistant
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
        Suggestion workspace
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        This panel is part of the product architecture from day one so assistant
        behavior remains contextual to the agenda instead of turning into a free-form
        chatbot.
      </p>
      <div className="mt-8 rounded-2xl border border-dashed border-border bg-background/70 p-4">
        <p className="text-sm font-medium">Planned contract</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Structured output only: suggestions plus optional draft subject and body.
        </p>
      </div>
    </aside>
  );
}
