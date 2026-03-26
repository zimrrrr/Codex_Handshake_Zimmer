import { WorkspacePage } from "@/components/workspace/WorkspacePage";

export default function WorkPage() {
  return (
    <WorkspacePage
      eyebrow="Work"
      title="Career work, applications, and opportunities"
      description="Work is where internships, applications, recruiting follow-through, shifts, and professional obligations become manageable as part of the same student operating system."
      useCases={[
        "Internships, applications, interviews, shifts, and recruiting follow-ups.",
        "Career-oriented work surfaced from inbox, calendar, and Handshake-style context.",
        "A clean place to see what professional momentum needs next."
      ]}
      outcome="The user will use Work to stay on top of opportunities, prepare for career commitments, and confirm app-local actions before anything changes."
      emptyStateTitle="Work is waiting for imported career context"
      emptyStateDescription="This milestone establishes the career-management surface now so Gmail, Calendar, and Handshake-oriented context can strengthen it later."
    />
  );
}
