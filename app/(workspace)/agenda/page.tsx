import { WorkspacePage } from "@/components/workspace/WorkspacePage";
import { createFilterStateKey, getAgendaView } from "@/lib/workspace/demoData";

export default function AgendaPage() {
  const filterGroups = [
    {
      id: "window",
      label: "Time slice",
      options: [
        { id: "TODAY", label: "Today" },
        { id: "SEVEN_DAYS", label: "7 days" }
      ]
    },
    {
      id: "focus",
      label: "Surface focus",
      options: [
        { id: "ALL", label: "All" },
        { id: "SCHOOL", label: "School" },
        { id: "WORK", label: "Work" },
        { id: "PROJECTS", label: "Projects" }
      ]
    }
  ] as const;

  const views = {
    [createFilterStateKey(["TODAY", "ALL"])]: getAgendaView("TODAY", "ALL"),
    [createFilterStateKey(["TODAY", "SCHOOL"])]: getAgendaView("TODAY", "SCHOOL"),
    [createFilterStateKey(["TODAY", "WORK"])]: getAgendaView("TODAY", "WORK"),
    [createFilterStateKey(["TODAY", "PROJECTS"])]: getAgendaView("TODAY", "PROJECTS"),
    [createFilterStateKey(["SEVEN_DAYS", "ALL"])]: getAgendaView("SEVEN_DAYS", "ALL"),
    [createFilterStateKey(["SEVEN_DAYS", "SCHOOL"])]: getAgendaView("SEVEN_DAYS", "SCHOOL"),
    [createFilterStateKey(["SEVEN_DAYS", "WORK"])]: getAgendaView("SEVEN_DAYS", "WORK"),
    [createFilterStateKey(["SEVEN_DAYS", "PROJECTS"])]: getAgendaView("SEVEN_DAYS", "PROJECTS")
  };

  return (
    <WorkspacePage
      eyebrow="Agenda"
      title="What matters now"
      description="Agenda is the temporal dashboard for the student’s week. It should make pressure, momentum, and cross-surface context obvious before the user drills into School, Work, or Projects."
      status="Temporal dashboard"
      statusDetail="This view stays read-only for Milestone 2, but it already shows how one shared work model can become a credible operating layer."
      filterGroups={filterGroups}
      defaultFilters={{
        window: "SEVEN_DAYS",
        focus: "ALL"
      }}
      views={views}
      supportTitle="Why Agenda leads the product"
      supportDescription="Agenda is the fastest way to explain Workspace in a demo: one place to see what needs attention now, how the week is shaping up, and where work should be routed next."
    />
  );
}
