"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { WireframePanel, WireframeScaffold } from "@/components/workspace/WireframeScaffold";

export function WireframeActionLink({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 items-center rounded border border-border px-3 text-sm text-foreground transition-colors hover:bg-muted"
    >
      {label}
    </Link>
  );
}

export function WireframeBackLink({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}

export function WireframeStat({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="rounded border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <p className="mt-3 text-2xl font-medium text-foreground">{value}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
    </div>
  );
}

export function WireframeList({
  items
}: {
  items: string[];
}) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex min-h-10 items-center rounded border border-border px-3 py-2 text-sm text-foreground"
        >
          • {item}
        </div>
      ))}
    </div>
  );
}

export function WireframeDetailLayout({
  section,
  title,
  backHref,
  backLabel,
  summary,
  actions,
  children
}: {
  section: string;
  title: string;
  backHref: string;
  backLabel: string;
  summary: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <WireframeScaffold
      eyebrow={section}
      title={title}
      actions={
        <div className="flex flex-wrap items-center gap-3">
          <WireframeBackLink href={backHref} label={backLabel} />
          {actions}
        </div>
      }
    >
      <div className="max-w-4xl">
        <div className="rounded border border-border bg-card p-4">
          <p className="text-sm leading-6 text-muted-foreground">{summary}</p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </WireframeScaffold>
  );
}

export { WireframePanel };
