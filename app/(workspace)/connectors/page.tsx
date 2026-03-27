import { WireframePanel, WireframeScaffold } from "@/components/workspace/WireframeScaffold";

export default function ConnectorsPage() {
  return (
    <WireframeScaffold eyebrow="Connectors" title="Connectors">
      <WireframePanel title="Active connectors">
        <div className="space-y-1">
          {[
            ["Google Calendar", "Sync events and reminders", "Connected"],
            ["Gmail", "Read and draft emails", "Connected"],
            ["Google Drive", "Access and manage files", "Connected"],
            ["Handshake", "Browse job and internship listings", "Connected"],
            ["Canvas LMS", "View courses, assignments, and grades", "Connected"]
          ].map(([name, desc, status]) => (
            <div
              key={name}
              className="flex h-11 items-center justify-between rounded border border-border px-3 text-sm"
            >
              <div className="min-w-0">
                <span className="text-foreground">{name}</span>
                <span className="ml-3 text-xs text-muted-foreground">{desc}</span>
              </div>
              <span className="ml-3 flex-shrink-0 text-xs text-muted-foreground">{status}</span>
            </div>
          ))}
        </div>
      </WireframePanel>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <WireframePanel title="Needs configuration">
          <div className="space-y-2">
            {[
              "Microsoft Teams",
              "Asana"
            ].map((name) => (
              <div key={name} className="flex h-11 items-center rounded border border-border px-3 text-sm text-foreground">
                • {name}
              </div>
            ))}
          </div>
        </WireframePanel>

        <WireframePanel title="Disabled connectors">
          <div className="rounded border border-border px-3 py-3 text-sm text-foreground">
            Dropbox
            <p className="mt-1 text-xs text-muted-foreground">File storage and sharing</p>
          </div>
        </WireframePanel>
      </div>
    </WireframeScaffold>
  );
}
