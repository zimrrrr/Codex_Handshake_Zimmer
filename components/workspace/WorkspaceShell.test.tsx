import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";

vi.mock("next/navigation", () => ({
  usePathname: () => "/agenda"
}));

describe("WorkspaceShell", () => {
  it("opens the assistant drawer from the mobile top bar", async () => {
    const user = userEvent.setup();

    render(
      <WorkspaceShell>
        <div>Main content</div>
      </WorkspaceShell>
    );

    expect(screen.getByRole("button", { name: "Open assistant" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open assistant" }));

    expect(screen.queryByRole("button", { name: "Open assistant" })).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Close assistant" }).length).toBeGreaterThan(0);
    expect(screen.getByText("Main content")).toBeInTheDocument();
  });
});
