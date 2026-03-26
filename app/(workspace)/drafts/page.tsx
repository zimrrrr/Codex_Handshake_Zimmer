import { WorkspacePage } from "@/components/workspace/WorkspacePage";

export default function DraftsPage() {
  return (
    <WorkspacePage
      eyebrow="Drafts"
      title="Drafts and follow-ups"
      description="Drafts remain reviewable artifacts inside Workspace. They can be refined, kept, or discarded here, but they are never sent by the product."
      useCases={[
        "Reviewing assistant-prepared writing before the user decides what to do with it.",
        "Keeping saved draft artifacts visible without making them a primary shell surface.",
        "Preserving trust by separating suggestions from outbound action."
      ]}
      outcome="The user will inspect, edit, or discard draft material while staying in full control of anything that could leave the product."
      emptyStateTitle="Draft management can stay secondary"
      emptyStateDescription="Drafts are still part of the codebase, but Milestone 1 intentionally keeps them out of the main shell while the core operating surfaces take priority."
    />
  );
}
