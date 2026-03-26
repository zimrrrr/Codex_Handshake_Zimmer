import type { ReactNode } from "react";

import { AssistantPanel } from "@/components/workspace/AssistantPanel";
import { WorkspaceSidebar } from "@/components/workspace/WorkspaceSidebar";

export default function WorkspaceLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-7xl grid-cols-1 gap-4 lg:grid-cols-[240px_minmax(0,1fr)_320px]">
        <WorkspaceSidebar />
        <main className="rounded-[28px] border border-border/70 bg-card/80 p-5 shadow-[0_24px_80px_rgba(24,33,46,0.08)] backdrop-blur">
          {children}
        </main>
        <AssistantPanel />
      </div>
    </div>
  );
}
