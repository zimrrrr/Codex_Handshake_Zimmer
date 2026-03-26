"use client";

import { usePathname } from "next/navigation";

const assistantContextByPath = {
  "/agenda": {
    title: "Agenda support",
    description: "Summarize pressure across the week and point the user toward the next best surface."
  },
  "/school": {
    title: "School support",
    description: "Help the user see academic load, prep quality, and where coursework is starting to bunch up."
  },
  "/work": {
    title: "Work support",
    description: "Keep opportunities, interviews, and follow-through organized without taking outside action."
  },
  "/projects": {
    title: "Projects support",
    description: "Protect momentum on self-directed work and suggest the next step worth shipping."
  }
} as const;

export function AssistantPanel() {
  const pathname = usePathname();
  const routeContext =
    assistantContextByPath[pathname as keyof typeof assistantContextByPath] ??
    assistantContextByPath["/agenda"];

  return (
    <aside className="rounded-[28px] border border-border/70 bg-card/70 p-5 shadow-[0_24px_80px_rgba(24,33,46,0.05)] backdrop-blur">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
        Assistant
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight">
        Embedded guidance for what to handle next
      </h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        The assistant stays inside Workspace so priorities, follow-through, and
        next actions stay grounded in the student’s actual operating context.
      </p>
      <div className="mt-8 rounded-2xl border border-border bg-background/70 p-4">
        <p className="text-sm font-medium">{routeContext.title}</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {routeContext.description}
        </p>
      </div>
      <div className="mt-4 rounded-2xl border border-dashed border-border bg-background/50 p-4">
        <p className="text-sm font-medium">Control stays visible</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Workspace can prepare and recommend. It does not send email or take
          outside action on the user’s behalf.
        </p>
      </div>
    </aside>
  );
}
