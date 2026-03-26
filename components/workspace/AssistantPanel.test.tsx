import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { AssistantPanel } from "@/components/workspace/AssistantPanel";

vi.mock("next/navigation", () => ({
  usePathname: () => "/agenda"
}));

describe("AssistantPanel", () => {
  it("frames the assistant as embedded and user-controlled", () => {
    render(<AssistantPanel />);

    expect(
      screen.getByRole("heading", { name: "Embedded guidance for what to handle next" })
    ).toBeInTheDocument();
    expect(screen.getByText("Agenda support")).toBeInTheDocument();
    expect(screen.getByText(/does not send email or take outside action/i)).toBeInTheDocument();
    expect(screen.queryByText("Suggestion workspace")).not.toBeInTheDocument();
  });
});
