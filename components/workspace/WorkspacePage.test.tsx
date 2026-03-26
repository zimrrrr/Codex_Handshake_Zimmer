import React from "react";
import { render, screen } from "@testing-library/react";

import { WorkspacePage } from "@/components/workspace/WorkspacePage";

describe("WorkspacePage", () => {
  it("renders the supplied page content", () => {
    render(
      <WorkspacePage
        eyebrow="Agenda"
        title="What matters now"
        description="Agenda is the time-based operating view for the week ahead."
        useCases={[
          "Time-bound obligations and deadlines.",
          "A starting point for routing work.",
          "Preparation for the next seven days."
        ]}
        outcome="The user will review priorities and decide where to focus."
        emptyStateTitle="Agenda is ready for live context"
        emptyStateDescription="Calendar events and tasks will land here later."
      />
    );

    expect(screen.getByText("Agenda")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What matters now" })).toBeInTheDocument();
    expect(screen.getByText("What belongs here")).toBeInTheDocument();
    expect(screen.queryByText("Presentation layer")).not.toBeInTheDocument();
  });
});
