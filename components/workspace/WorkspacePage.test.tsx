import React from "react";
import { render, screen } from "@testing-library/react";

import { WorkspacePage } from "@/components/workspace/WorkspacePage";

describe("WorkspacePage", () => {
  it("renders the supplied page content", () => {
    render(
      <WorkspacePage
        eyebrow="Agenda"
        title="Your next seven days"
        description="Unified events, tasks, and preparation prompts."
      />
    );

    expect(screen.getByText("Agenda")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Your next seven days" })).toBeInTheDocument();
    expect(screen.getByText("Presentation layer")).toBeInTheDocument();
  });
});
