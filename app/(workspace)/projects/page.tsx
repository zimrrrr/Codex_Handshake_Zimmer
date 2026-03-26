import { WorkspacePage } from "@/components/workspace/WorkspacePage";

export default function ProjectsPage() {
  return (
    <WorkspacePage
      eyebrow="Projects"
      title="Self-directed work that should keep moving"
      description="Projects gives personal initiatives, side builds, and independent goals a durable home inside Workspace so they are not lost behind classes and career tasks."
      useCases={[
        "Personal initiatives, portfolio work, and self-directed builds.",
        "Ongoing efforts that need momentum even when they are not tied to a class or job.",
        "A focused view for work the student owns end to end."
      ]}
      outcome="The user will use Projects to keep personal work visible, break it into next actions, and prevent high-agency goals from disappearing."
      emptyStateTitle="Projects will hold momentum, not just ideas"
      emptyStateDescription="Later milestones can add tasks and imported support context here. This shell already defines why the surface matters."
    />
  );
}
