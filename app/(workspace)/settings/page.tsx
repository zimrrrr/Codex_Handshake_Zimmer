import { ChevronDown } from "lucide-react";

import { WireframePanel, WireframeScaffold } from "@/components/workspace/WireframeScaffold";

export default function SettingsPage() {
  return (
    <WireframeScaffold eyebrow="Settings" title="Settings">
      <div className="grid gap-8 md:grid-cols-2">
        <WireframePanel title="General">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            {[
              ["Language", "English (US)"],
              ["Timezone", "Central Time (CT)"],
              ["Date format", "MM/DD/YYYY"],
              ["Start of week", "Sunday"]
            ].map(([label, value], index, array) => (
              <div
                key={label}
                className={[
                  "flex items-center justify-between px-4 py-3 text-sm",
                  index < array.length - 1 ? "border-b border-border" : ""
                ].join(" ")}
              >
                <span className="text-foreground">{label}</span>
                <button type="button" className="flex items-center gap-1 rounded border border-border px-2 py-1 text-xs text-muted-foreground">
                  {value}
                  <ChevronDown size={10} />
                </button>
              </div>
            ))}
          </div>
        </WireframePanel>

        <WireframePanel title="Appearance">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            {[
              ["Theme", "System"],
              ["Sidebar density", "Comfortable"],
              ["Font size", "Default"]
            ].map(([label, value], index, array) => (
              <div
                key={label}
                className={[
                  "flex items-center justify-between px-4 py-3 text-sm",
                  index < array.length - 1 ? "border-b border-border" : ""
                ].join(" ")}
              >
                <span className="text-foreground">{label}</span>
                <button type="button" className="flex items-center gap-1 rounded border border-border px-2 py-1 text-xs text-muted-foreground">
                  {value}
                  <ChevronDown size={10} />
                </button>
              </div>
            ))}
          </div>
        </WireframePanel>
      </div>
    </WireframeScaffold>
  );
}
