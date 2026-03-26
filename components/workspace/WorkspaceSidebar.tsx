"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const navigation = [
  { href: "/agenda", label: "Agenda" },
  { href: "/projects", label: "Projects" },
  { href: "/school", label: "School" },
  { href: "/work", label: "Work" },
  { href: "/drafts", label: "Drafts" }
] as const;

export function WorkspaceSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-[28px] border border-border/70 bg-card/70 p-5 shadow-[0_24px_80px_rgba(24,33,46,0.05)] backdrop-blur">
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
        AI Workspace
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight">
        Student operations layer
      </h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Google-centered, agenda-first, and deliberately bounded.
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
          No send-email path exists in this architecture. The assistant can draft
          and suggest, but user-controlled systems stay user-controlled.
        </p>
      </div>
    </aside>
  );
}
