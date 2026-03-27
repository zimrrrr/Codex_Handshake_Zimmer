import {
  WireframeDetailLayout,
  WireframeList,
  WireframePanel
} from "@/components/workspace/WireframeDetail";

export default function NewProjectCardPage() {
  return (
    <WireframeDetailLayout
      section="Projects"
      title="New project card"
      backHref="/projects"
      backLabel="Back to projects"
      summary="Use this route to frame a new self-directed initiative before saving it into the app's backend model."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <WireframePanel title="Suggested fields">
          <WireframeList items={["Project name", "Description", "Status", "Owner", "Next milestone"]} />
        </WireframePanel>
        <WireframePanel title="Why this exists">
          <div className="rounded border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            Separating creation into its own route makes future form logic and user-confirmed mutations much easier to add cleanly.
          </div>
        </WireframePanel>
      </div>
    </WireframeDetailLayout>
  );
}
