"use client";

import type { ReactNode } from "react";
import { format } from "date-fns";

type WireframeScaffoldProps = {
  eyebrow: string;
  title: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function WireframeScaffold({
  eyebrow,
  title,
  actions,
  children
}: WireframeScaffoldProps) {
  return (
    <div className="px-5 py-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
            <h1 className="text-2xl font-medium uppercase tracking-[0.04em] text-foreground">
              {title}
            </h1>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {format(new Date(), "EEEE, MMMM d").toUpperCase()}
            </p>
          </div>
          {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
        </div>
        {children}
      </div>
    </div>
  );
}

export function WireframePanel({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
