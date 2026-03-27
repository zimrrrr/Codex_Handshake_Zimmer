import { WireframePanel, WireframeScaffold } from "@/components/workspace/WireframeScaffold";

export default function UserPage() {
  return (
    <WireframeScaffold eyebrow="Profile" title="User">
      <div className="grid gap-8 md:grid-cols-2">
        <WireframePanel title="Account">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-border text-muted-foreground">
                JD
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Jane Doe</p>
                <p className="text-xs text-muted-foreground">janedoe@umn.edu</p>
              </div>
            </div>
          </div>
        </WireframePanel>

        <WireframePanel title="Usage">
          <div className="rounded-lg border border-border bg-card p-5">
            <div className="space-y-4">
              {[
                ["API usage this month", "73%"],
                ["Storage", "1.2 GB / 5 GB"],
                ["Automations run", "48 / 100"],
                ["Connectors active", "5 / 10"]
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </WireframePanel>
      </div>
    </WireframeScaffold>
  );
}
