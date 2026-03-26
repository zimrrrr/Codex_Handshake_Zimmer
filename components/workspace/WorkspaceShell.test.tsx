import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { WorkspaceShell } from "@/components/workspace/WorkspaceShell";

vi.mock("next/navigation", () => ({
  usePathname: () => "/agenda"
}));

describe("WorkspaceShell", () => {
  it("opens the assistant drawer from the mobile entry point", async () => {
    const user = userEvent.setup();

    render(
      <WorkspaceShell>
        <div>Main content</div>
      </WorkspaceShell>
    );

    expect(screen.queryByRole("button", { name: "Close" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open" }));

    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
    expect(screen.getByText("Main content")).toBeInTheDocument();
  });
});
