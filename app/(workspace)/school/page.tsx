import { WorkspacePage } from "@/components/workspace/WorkspacePage";
import { createFilterStateKey, getSchoolView } from "@/lib/workspace/demoData";

export default function SchoolPage() {
  const filterGroups = [
    {
      id: "grouping",
      label: "View by",
      options: [
        { id: "ACADEMIC_LOAD", label: "Academic load" },
        { id: "COURSE", label: "Course" }
      ]
    }
  ] as const;

  const views = {
    [createFilterStateKey(["ACADEMIC_LOAD"])]: getSchoolView("ACADEMIC_LOAD"),
    [createFilterStateKey(["COURSE"])]: getSchoolView("COURSE")
  };

  return (
    <WorkspacePage
      eyebrow="School"
      title="Academic obligations in one view"
      description="School keeps classes, assignments, readings, and prep work organized as an operational workload instead of scattering them across course tools."
      status="Academic control panel"
      statusDetail="Milestone 2 proves that academic work can feel distinct without needing a separate product or live LMS integration yet."
      filterGroups={filterGroups}
      defaultFilters={{
        grouping: "ACADEMIC_LOAD"
      }}
      views={views}
      supportTitle="What School should communicate"
      supportDescription="School should make academic load legible at a glance: what needs prep, what is nearing a deadline, and how coursework stacks across classes."
    />
  );
}
