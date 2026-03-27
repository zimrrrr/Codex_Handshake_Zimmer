import { WireframePanel, WireframeScaffold } from "@/components/workspace/WireframeScaffold";

export default function AutomationsPage() {
  return (
    <WireframeScaffold eyebrow="Automations" title="Automations">
      <WireframePanel title="Active automations">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            ["Email reminder", "Send reminders for upcoming deadlines", "Active"],
            ["Task assignment", "Automatically assign tasks to team members", "Active"],
            ["Data backup", "Regularly back up project data", "Active"]
          ].map(([name, desc, status]) => (
            <div key={name} className="rounded-lg border border-border bg-card p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-foreground">{name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                </div>
                <span className="text-xs text-muted-foreground">{status}</span>
              </div>
            </div>
          ))}
        </div>
      </WireframePanel>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <WireframePanel title="Paused automations">
          <div className="flex h-11 items-center rounded border border-border px-3 text-sm text-foreground">
            • Project report
          </div>
        </WireframePanel>
        <WireframePanel title="Disabled automations">
          <div className="rounded border border-border px-3 py-3 text-sm text-foreground">
            File sync
            <p className="mt-1 text-xs text-muted-foreground">Synchronize files across devices</p>
          </div>
        </WireframePanel>
      </div>
    </WireframeScaffold>
  );
}
