import {
  WireframeDetailLayout,
  WireframeList,
  WireframePanel
} from "@/components/workspace/WireframeDetail";

export default function NewSchoolCardPage() {
  return (
    <WireframeDetailLayout
      section="School"
      title="New school card"
      backHref="/school"
      backLabel="Back to school"
      summary="Use this view to define a new academic card before wiring real creation flows to backend storage."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <WireframePanel title="Suggested fields">
          <WireframeList items={["Course or workstream", "Description", "Status", "Progress", "Next step"]} />
        </WireframePanel>
        <WireframePanel title="Why this exists">
          <div className="rounded border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            The add-card route gives the UI a stable place for future create flows instead of overloading the main school dashboard.
          </div>
        </WireframePanel>
      </div>
    </WireframeDetailLayout>
  );
}
