import { WireframePanel, WireframeScaffold } from "@/components/workspace/WireframeScaffold";

export default function SearchPage() {
  return (
    <WireframeScaffold eyebrow="Search" title="Search">
      <WireframePanel title="Search bar">
        <input
          type="text"
          placeholder="Search..."
          className="h-11 w-full rounded border border-border bg-card px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </WireframePanel>

      <div className="mt-8">
        <WireframePanel title="Recent searches">
          <div className="space-y-2">
            {["ECON 3851", "Finance Club", "Workspace app", "Project report"].map((query) => (
              <div
                key={query}
                className="flex h-11 items-center rounded border border-border px-3 text-sm text-foreground"
              >
                • {query}
              </div>
            ))}
          </div>
        </WireframePanel>
      </div>
    </WireframeScaffold>
  );
}
