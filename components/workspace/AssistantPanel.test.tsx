import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { AssistantPanel } from "@/components/workspace/AssistantPanel";

vi.mock("next/navigation", () => ({
  usePathname: () => "/agenda"
}));

describe("AssistantPanel", () => {
  it("frames the assistant as embedded and user-controlled", () => {
    render(
      <AssistantPanel
        collapsed={false}
        onToggleCollapse={() => undefined}
      />
    );

    expect(
      screen.getByText("Recent agent transcript")
    ).toBeInTheDocument();
    expect(screen.getByText("Agenda support")).toBeInTheDocument();
    expect(screen.getByText(/does not send email or take outside action/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Plan, @ for context/i)).toBeInTheDocument();
  });
});
