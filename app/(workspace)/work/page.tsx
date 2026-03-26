import { WorkspacePage } from "@/components/workspace/WorkspacePage";
import { createFilterStateKey, getWorkView } from "@/lib/workspace/demoData";

export default function WorkPage() {
  const filterGroups = [
    {
      id: "grouping",
      label: "View by",
      options: [
        { id: "PIPELINE", label: "Pipeline" },
        { id: "URGENCY", label: "Urgency" }
      ]
    }
  ] as const;

  const views = {
    [createFilterStateKey(["PIPELINE"])]: getWorkView("PIPELINE"),
    [createFilterStateKey(["URGENCY"])]: getWorkView("URGENCY")
  };

  return (
    <WorkspacePage
      eyebrow="Work"
      title="Career work, applications, and opportunities"
      description="Work is where opportunities, applications, interviews, and follow-through become manageable as part of the same student operating system."
      status="Career management"
      statusDetail="This view is intentionally trust-safe and read-only for now, but it already shows how professional context will become actionable inside Workspace."
      filterGroups={filterGroups}
      defaultFilters={{
        grouping: "PIPELINE"
      }}
      views={views}
      supportTitle="What Work should communicate"
      supportDescription="Work should feel different from School immediately: less about classes and more about opportunity flow, preparation quality, and professional momentum."
    />
  );
}
