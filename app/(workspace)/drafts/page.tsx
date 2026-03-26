import { WorkspacePage } from "@/components/workspace/WorkspacePage";

export default function DraftsPage() {
  return (
    <WorkspacePage
      eyebrow="Drafts"
      title="Drafts and follow-ups"
      description="Drafts are reviewable artifacts. They can be edited, saved, or discarded here, but never sent by the product."
    />
  );
}
