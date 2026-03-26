import React from "react";
import { render, screen } from "@testing-library/react";

import { AssistantPanel } from "@/components/workspace/AssistantPanel";

describe("AssistantPanel", () => {
  it("frames the assistant as embedded and user-controlled", () => {
    render(<AssistantPanel />);

    expect(
      screen.getByRole("heading", { name: "Embedded guidance for what to handle next" })
    ).toBeInTheDocument();
    expect(screen.getByText("What this shell will support")).toBeInTheDocument();
    expect(screen.getByText(/does not send email or take outside action/i)).toBeInTheDocument();
    expect(screen.queryByText("Suggestion workspace")).not.toBeInTheDocument();
  });
});
