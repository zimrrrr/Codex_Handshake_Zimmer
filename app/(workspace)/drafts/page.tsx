import { WorkspacePage } from "@/components/workspace/WorkspacePage";
import { createFilterStateKey } from "@/lib/workspace/demoData";

export default function DraftsPage() {
  return (
    <WorkspacePage
      eyebrow="Drafts"
      title="Drafts and follow-ups"
      description="Drafts remain reviewable artifacts inside Workspace. They are intentionally secondary while Milestone 2 focuses on the core operational surfaces."
      status="Secondary route"
      statusDetail="This route stays available for compatibility, but it is not part of the primary Milestone 2 navigation story."
      views={{
        [createFilterStateKey([])]: {
          summary: [
            {
              label: "Drafts visible",
              value: "0",
              detail: "No draft artifacts are being surfaced in this milestone."
            },
            {
              label: "Role in product",
              value: "Secondary",
              detail: "Drafts stay outside the main operational shell."
            },
            {
              label: "Trust model",
              value: "User-reviewed only",
              detail: "Nothing here implies outbound sending or autonomous action."
            }
          ],
          sections: [],
          emptyTitle: "Drafts stay out of the way for Milestone 2",
          emptyDescription:
            "This route remains available, but the main product narrative now lives in Agenda, School, Work, and Projects."
        }
      }}
      supportTitle="Why Drafts is quiet here"
      supportDescription="Draft review still matters to the long-term trust model, but this milestone is focused on helping the user understand how work is organized across the main operating surfaces."
    />
  );
}
