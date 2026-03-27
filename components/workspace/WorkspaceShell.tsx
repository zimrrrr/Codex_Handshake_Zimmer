"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { Menu, MessageSquare, X } from "lucide-react";

import { AssistantPanel } from "@/components/workspace/AssistantPanel";
import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";

export function WorkspaceShell({ children }: { children: ReactNode }) {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  const hasMobileOverlay = leftOpen || rightOpen;

  return (
    <div className="relative flex h-screen overflow-hidden bg-background text-foreground">
      <div
        aria-hidden={!hasMobileOverlay}
        className={[
          "fixed inset-0 z-20 bg-black/30 transition-opacity lg:hidden",
          hasMobileOverlay ? "opacity-100" : "pointer-events-none opacity-0"
        ].join(" ")}
        onClick={() => {
          setLeftOpen(false);
          setRightOpen(false);
        }}
      />

      <header className="fixed inset-x-0 top-0 z-10 flex h-12 items-center justify-between border-b border-border bg-card px-3 lg:hidden">
        <button
          type="button"
          aria-label="Open navigation"
          className="flex h-8 w-8 items-center justify-center text-muted-foreground"
          onClick={() => {
            setLeftOpen((current) => !current);
            setRightOpen(false);
          }}
        >
          <Menu size={20} />
        </button>
        <p className="text-sm font-medium lowercase tracking-[0.08em]">workspace</p>
        <button
          type="button"
          aria-label={rightOpen ? "Close assistant" : "Open assistant"}
          className="flex h-8 w-8 items-center justify-center text-muted-foreground"
          onClick={() => {
            setRightOpen((current) => !current);
            setLeftOpen(false);
          }}
        >
          {rightOpen ? <X size={18} /> : <MessageSquare size={18} />}
        </button>
      </header>

      <div
        className={[
          "fixed inset-y-0 left-0 z-30 flex transition-transform duration-200 lg:static lg:translate-x-0",
          leftOpen ? "translate-x-0" : "-translate-x-full"
        ].join(" ")}
      >
        <WorkspaceSidebar
          collapsed={leftCollapsed}
          onToggleCollapse={() => setLeftCollapsed((current) => !current)}
          onNavigate={() => setLeftOpen(false)}
        />
      </div>

      <main className="min-w-0 flex-1 overflow-y-auto pt-12 lg:pt-0">{children}</main>

      <div
        className={[
          "fixed inset-y-0 right-0 z-30 transition-transform duration-200 lg:static lg:translate-x-0",
          rightOpen ? "translate-x-0" : "translate-x-full"
        ].join(" ")}
      >
        <AssistantPanel
          collapsed={rightCollapsed}
          onToggleCollapse={() => setRightCollapsed((current) => !current)}
          onClose={() => setRightOpen(false)}
        />
      </div>
    </div>
  );
}
