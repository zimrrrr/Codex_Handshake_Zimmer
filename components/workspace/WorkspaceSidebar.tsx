"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Folder,
  MessageSquare,
  Plug,
  Search,
  Settings,
  User,
  X,
  Zap,
  BookOpen
} from "lucide-react";

import { cn } from "@/lib/utils";

const primaryNavigation = [
  { href: "/search", label: "Search", icon: Search },
  { href: "/chat", label: "Chat", icon: MessageSquare }
] as const;

const workspaceNavigation = [
  { href: "/agenda", label: "Agenda", icon: Calendar },
  { href: "/school", label: "School", icon: BookOpen },
  { href: "/work", label: "Work", icon: Briefcase },
  { href: "/projects", label: "Projects", icon: Folder }
] as const;

const systemNavigation = [
  { href: "/connectors", label: "Connectors", icon: Plug },
  { href: "/automations", label: "Automations", icon: Zap }
] as const;

const accountNavigation = [
  { href: "/user", label: "User", icon: User },
  { href: "/settings", label: "Settings", icon: Settings }
] as const;

type WorkspaceSidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  onNavigate?: () => void;
};

function NavLink({
  href,
  label,
  icon: Icon,
  collapsed,
  pathname,
  onNavigate,
  compact
}: {
  href: string;
  label: string;
  icon: typeof Search;
  collapsed: boolean;
  pathname: string;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "flex h-9 items-center rounded-md border px-3 text-sm transition-colors",
        collapsed ? "justify-center px-0" : "gap-2",
        compact ? "text-xs uppercase tracking-[0.14em]" : "text-sm",
        active
          ? "border-foreground/50 bg-muted text-foreground"
          : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
      )}
    >
      <Icon size={16} className={active ? "text-foreground" : "text-muted-foreground"} />
      {!collapsed ? <span>{label}</span> : null}
      {!collapsed && !compact && href !== "/agenda" ? (
        <span className="ml-auto text-muted-foreground">›</span>
      ) : null}
    </Link>
  );
}

export function WorkspaceSidebar({
  collapsed,
  onToggleCollapse,
  onNavigate
}: WorkspaceSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex h-screen flex-col overflow-hidden border-r-2 border-border bg-card",
        collapsed ? "w-16" : "w-[90vw] max-w-64 lg:w-56"
      )}
    >
      <div className={cn("flex h-14 items-center border-b-2 border-border", collapsed ? "justify-center px-2" : "px-4")}>
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded border-2 border-muted-foreground/50 text-[10px] text-muted-foreground">
            LOGO
          </div>
          {!collapsed ? (
            <span className="truncate text-sm font-medium lowercase tracking-[0.08em]">
              workspace
            </span>
          ) : null}
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onNavigate}
            className="flex h-6 w-6 items-center justify-center text-muted-foreground lg:hidden"
          >
            <X size={16} />
          </button>
          <button
            type="button"
            aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
            onClick={onToggleCollapse}
            className="hidden h-5 w-5 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:flex"
          >
            {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
          </button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {primaryNavigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              collapsed={collapsed}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <div className="my-3 border-t border-border" />

        <div className="space-y-1">
          {workspaceNavigation.map((item, index) => (
            <div key={item.href}>
              <NavLink
                href={item.href}
                label={item.label}
                icon={item.icon}
                collapsed={collapsed}
                pathname={pathname}
                onNavigate={onNavigate}
              />
              {item.href === "/agenda" ? (
                <div className="my-3 border-t border-border" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="space-y-1">
          {systemNavigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              collapsed={collapsed}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </nav>

      <div className="border-t-2 border-border p-4">
        <div className="space-y-2">
          {accountNavigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              collapsed={collapsed}
              pathname={pathname}
              onNavigate={onNavigate}
              compact
            />
          ))}
        </div>

        {!collapsed ? (
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            No autonomous external actions. Outbound steps stay user-confirmed.
          </p>
        ) : null}
      </div>
    </aside>
  );
}
