"use client";

import { useState } from "react";
import {
  ArrowUp,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Copy,
  Mic,
  Plus,
  X
} from "lucide-react";
import { usePathname } from "next/navigation";

const assistantContextByPath = {
  "/agenda": {
    title: "Agenda support",
    prompt: "Summarize the pressure across the week and point to the next best surface.",
    transcript: "Start with today, then explain what is coming into view next."
  },
  "/school": {
    title: "School support",
    prompt: "Highlight academic load, prep quality, and which classes are bunching up.",
    transcript: "Point out where prep work will change the quality of class time."
  },
  "/work": {
    title: "Work support",
    prompt: "Keep applications, interviews, and follow-through organized without taking outside action.",
    transcript: "Show the highest leverage professional task that is ready to move."
  },
  "/projects": {
    title: "Projects support",
    prompt: "Protect momentum on self-directed work and suggest the next thing worth shipping.",
    transcript: "Keep projects visible even when school and recruiting are louder."
  }
} as const;

type AssistantPanelProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onClose?: () => void;
};

export function AssistantPanel({
  collapsed,
  onToggleCollapse,
  onClose
}: AssistantPanelProps) {
  const pathname = usePathname();
  const routeContext =
    assistantContextByPath[pathname as keyof typeof assistantContextByPath] ??
    assistantContextByPath["/agenda"];
  const [draft, setDraft] = useState("");

  return (
    <aside
      className={[
        "flex h-full min-h-screen border-l border-border bg-card transition-[width] duration-200",
        collapsed ? "w-10" : "w-[90vw] max-w-80 lg:w-72"
      ].join(" ")}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        <div
          className={[
            "flex h-14 items-center border-b border-border",
            collapsed ? "justify-center px-0" : "justify-between px-4"
          ].join(" ")}
        >
          <button
            type="button"
            aria-label={collapsed ? "Expand assistant" : "Collapse assistant"}
            onClick={onToggleCollapse}
            className="hidden h-5 w-5 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:flex"
          >
            {collapsed ? <ChevronLeft size={13} /> : <ChevronRight size={13} />}
          </button>

          {!collapsed ? (
            <>
              <span className="mx-2 flex-1 truncate text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Recent agent transcript
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="New thread"
                  className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Plus size={14} />
                </button>
                <button
                  type="button"
                  aria-label="Close assistant"
                  onClick={onClose}
                  className="flex h-5 w-5 items-center justify-center text-muted-foreground transition-colors hover:text-foreground lg:hidden"
                >
                  <X size={14} />
                </button>
              </div>
            </>
          ) : null}
        </div>

        {!collapsed ? (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="rounded border border-border bg-background px-3 py-2 text-sm text-foreground">
                test
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <p className="text-xs leading-6 text-muted-foreground">{routeContext.prompt}</p>
                <button
                  type="button"
                  aria-label="Copy message"
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Copy size={12} />
                </button>
              </div>

              <div className="mt-6 rounded border border-border p-3">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {routeContext.title}
                </p>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{routeContext.transcript}</p>
              </div>
            </div>

            <div className="border-t border-border p-3">
              <div className="rounded-lg border border-border px-3 py-2">
                <textarea
                  rows={3}
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Plan, @ for context, / for commands"
                  className="w-full resize-none bg-transparent text-xs leading-5 text-foreground outline-none placeholder:text-muted-foreground"
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-muted-foreground"
                  >
                    <Plus size={12} />
                  </button>
                  <button
                    type="button"
                    className="flex h-6 items-center gap-1.5 rounded-full border border-border px-2 text-[11px] text-foreground"
                  >
                    Agent
                    <ChevronDown size={10} />
                  </button>
                  <button
                    type="button"
                    className="flex h-6 items-center gap-1.5 rounded-full border border-border px-2 text-[11px] text-foreground"
                  >
                    Premium
                    <Check size={10} className="text-muted-foreground" />
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" className="text-muted-foreground">
                    <Mic size={15} />
                  </button>
                  <button
                    type="button"
                    className="flex h-6 w-6 items-center justify-center rounded-full border border-border text-foreground"
                  >
                    <ArrowUp size={12} />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-[11px] leading-5 text-muted-foreground">
                Workspace can prepare and recommend. It does not send email or take outside action.
              </p>
            </div>
          </>
        ) : null}
      </div>
    </aside>
  );
}
