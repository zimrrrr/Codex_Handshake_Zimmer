"use client";

import type { ReactNode } from "react";
import { useState } from "react";

import { AssistantPanel } from "@/components/workspace/AssistantPanel";
import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";

export function WorkspaceShell({ children }: { children: ReactNode }) {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl flex-col gap-4 lg:grid lg:grid-cols-[240px_minmax(0,1fr)_320px]">
        <WorkspaceSidebar />

        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex items-center justify-between rounded-[24px] border border-border/70 bg-card/70 px-4 py-3 shadow-[0_16px_40px_rgba(24,33,46,0.05)] backdrop-blur lg:hidden">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Workspace assistant
              </p>
              <p className="mt-1 text-sm text-foreground">
                Open the embedded guide for priorities and next actions.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setAssistantOpen(true)}
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              Open
            </button>
          </div>

          <main className="rounded-[28px] border border-border/70 bg-card/80 p-5 shadow-[0_24px_80px_rgba(24,33,46,0.08)] backdrop-blur">
            {children}
          </main>
        </div>

        <div className="hidden lg:block">
          <AssistantPanel />
        </div>
      </div>

      {assistantOpen ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-[rgba(24,33,46,0.28)] p-3 lg:hidden">
          <div className="flex h-full w-full max-w-sm flex-col gap-3">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setAssistantOpen(false)}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[0_12px_32px_rgba(24,33,46,0.12)]"
              >
                Close
              </button>
            </div>
            <AssistantPanel />
          </div>
        </div>
      ) : null}
    </div>
  );
}
