import {
  WireframeDetailLayout,
  WireframeList,
  WireframePanel
} from "@/components/workspace/WireframeDetail";

export default function NewWorkCardPage() {
  return (
    <WireframeDetailLayout
      section="Work"
      title="New work card"
      backHref="/work"
      backLabel="Back to work"
      summary="Use this route to stage a new application, opportunity, or recruiting thread before backend persistence exists."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <WireframePanel title="Suggested fields">
          <WireframeList items={["Company", "Role", "Stage", "Source", "Next step"]} />
        </WireframePanel>
        <WireframePanel title="Why this exists">
          <div className="rounded border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            The main work view stays focused on active cards while this route becomes the natural entry point for a future creation workflow.
          </div>
        </WireframePanel>
      </div>
    </WireframeDetailLayout>
  );
}
