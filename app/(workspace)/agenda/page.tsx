import { WorkspacePage } from "@/components/workspace/WorkspacePage";

export default function AgendaPage() {
  return (
    <WorkspacePage
      eyebrow="Agenda"
      title="What matters now"
      description="Agenda is the time-based operating view for the week ahead. It will pull priorities, deadlines, meetings, and preparation into one place so the student always knows what needs attention next."
      useCases={[
        "Time-bound obligations, deadlines, and upcoming preparation.",
        "The clearest picture of what needs attention today and over the next seven days.",
        "A starting point for routing work into School, Work, or Projects."
      ]}
      outcome="The user will review what is coming up, understand what is urgent, and decide where to focus or re-route work across the rest of Workspace."
      emptyStateTitle="Agenda is ready for live context"
      emptyStateDescription="Calendar events, tasks, and imported signals will land here in later milestones. For now, this surface defines the operational center of the product."
    />
  );
}
