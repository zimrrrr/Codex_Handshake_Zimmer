import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/agenda"
}));

describe("WorkspaceSidebar", () => {
  it("renders the milestone-one navigation and trust copy", () => {
    render(<WorkspaceSidebar />);

    expect(screen.getByText("Workspace")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Agenda" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "School" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Work" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Drafts" })).not.toBeInTheDocument();
    expect(screen.getByText(/No autonomous external actions/i)).toBeInTheDocument();
  });
});
