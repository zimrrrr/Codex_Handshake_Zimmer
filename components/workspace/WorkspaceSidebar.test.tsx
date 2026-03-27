import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";

vi.mock("next/navigation", () => ({
  usePathname: () => "/agenda"
}));

describe("WorkspaceSidebar", () => {
  it("renders the wireframe navigation and trust copy", () => {
    render(
      <WorkspaceSidebar
        collapsed={false}
        onToggleCollapse={() => undefined}
      />
    );

    expect(screen.getByText("workspace")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Search/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Chat/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Agenda" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^School/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Work/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Projects/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Connectors/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Automations/ })).toBeInTheDocument();
    expect(screen.getByText(/No autonomous external actions/i)).toBeInTheDocument();
  });
});
