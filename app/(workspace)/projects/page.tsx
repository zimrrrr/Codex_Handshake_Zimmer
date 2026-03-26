import { WorkspacePage } from "@/components/workspace/WorkspacePage";
import { createFilterStateKey, getProjectsView } from "@/lib/workspace/demoData";

export default function ProjectsPage() {
  const filterGroups = [
    {
      id: "grouping",
      label: "View by",
      options: [
        { id: "MOMENTUM", label: "Momentum" },
        { id: "STAGE", label: "Stage" }
      ]
    }
  ] as const;

  const views = {
    [createFilterStateKey(["MOMENTUM"])]: getProjectsView("MOMENTUM"),
    [createFilterStateKey(["STAGE"])]: getProjectsView("STAGE")
  };

  return (
    <WorkspacePage
      eyebrow="Projects"
      title="Self-directed work that should keep moving"
      description="Projects gives side builds, portfolio work, and self-directed initiatives a durable place to keep momentum even when school and career work are louder."
      status="Momentum view"
      statusDetail="Projects stays in the same shared work model, but it emphasizes self-directed progress instead of deadlines alone."
      filterGroups={filterGroups}
      defaultFilters={{
        grouping: "MOMENTUM"
      }}
      views={views}
      supportTitle="What Projects should communicate"
      supportDescription="Projects proves Workspace is not only a deadline manager. It also protects high-agency work that can disappear when it has no external system enforcing it."
    />
  );
}
