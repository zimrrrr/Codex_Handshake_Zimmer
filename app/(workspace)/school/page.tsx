import { WorkspacePage } from "@/components/workspace/WorkspacePage";

export default function SchoolPage() {
  return (
    <WorkspacePage
      eyebrow="School"
      title="Academic obligations in one view"
      description="School keeps classes, assignments, readings, and academic deadlines visible without forcing the student to manage them in a separate planning system."
      useCases={[
        "Classes, coursework, due dates, and prep that affect academic performance.",
        "Imported academic context that should feel intentional and easy to scan.",
        "A dedicated view for understanding what school requires this week."
      ]}
      outcome="The user will use School to understand academic load, review upcoming obligations, and get help deciding what to finish or prepare next."
      emptyStateTitle="School will become the academic control panel"
      emptyStateDescription="This shell is intentionally empty today so later Canvas and calendar-backed context can arrive without changing the product story."
    />
  );
}
