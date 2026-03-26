"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/agenda", label: "Agenda" },
  { href: "/school", label: "School" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" }
] as const;

export function WorkspaceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-[28px] border border-border/70 bg-card/70 p-5 shadow-[0_24px_80px_rgba(24,33,46,0.05)] backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Workspace
        </p>
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
          Student OS
        </span>
      </div>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight">
        Run school, career work, and personal projects from one operating view.
      </h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Agenda keeps time in focus while School, Work, and Projects give every
        commitment a clear home.
      </p>

      <nav className="mt-8 space-y-2">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "block rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-8 rounded-2xl border border-border bg-background/80 p-4">
        <p className="text-sm font-medium">Trust boundary</p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          No autonomous external actions, no outbound email sending, and every
          app-local action stays user-confirmed.
        </p>
      </div>
    </aside>
  );
}
