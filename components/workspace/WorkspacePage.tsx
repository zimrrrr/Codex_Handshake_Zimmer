"use client";

import { useMemo, useState } from "react";

import {
  createFilterStateKey,
  type WorkspaceSection,
  type WorkspaceSummaryMetric
} from "@/lib/workspace/demoData";

type WorkspacePageFilterGroup = {
  id: string;
  label: string;
  options: ReadonlyArray<{
    id: string;
    label: string;
  }>;
};

type WorkspacePageProps = {
  eyebrow: string;
  title: string;
  description: string;
  status: string;
  statusDetail: string;
  filterGroups?: ReadonlyArray<WorkspacePageFilterGroup>;
  defaultFilters?: Record<string, string>;
  views: Record<
    string,
    {
      summary: WorkspaceSummaryMetric[];
      sections: WorkspaceSection[];
      emptyTitle: string;
      emptyDescription: string;
    }
  >;
  supportTitle: string;
  supportDescription: string;
};

export function WorkspacePage({
  eyebrow,
  title,
  description,
  status,
  statusDetail,
  filterGroups = [],
  defaultFilters = {},
  views,
  supportTitle,
  supportDescription
}: WorkspacePageProps) {
  const initialFilters = useMemo(
    () =>
      filterGroups.reduce<Record<string, string>>((result, group) => {
        result[group.id] = defaultFilters[group.id] ?? group.options[0]?.id ?? "";
        return result;
      }, {}),
    [defaultFilters, filterGroups]
  );
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(initialFilters);

  const viewKey = createFilterStateKey(
    filterGroups.map((group) => activeFilters[group.id] ?? defaultFilters[group.id] ?? "")
  );
  const activeView = views[viewKey] ?? views.default ?? Object.values(views)[0];
  const hasItems = activeView.sections.some((section) => section.items.length > 0);

  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border/80 pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
            {eyebrow}
          </p>
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {status}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-foreground/80">{statusDetail}</p>
      </div>

      <div className="grid gap-4 py-6 md:grid-cols-3">
        {activeView.summary.map((metric) => (
          <section
            key={metric.label}
            className="rounded-[24px] border border-border bg-background/80 p-5"
          >
            <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight">{metric.value}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
          </section>
        ))}
      </div>

      {filterGroups.length > 0 ? (
        <section className="rounded-[24px] border border-border bg-background/75 p-5">
          <div className="flex flex-col gap-4">
            {filterGroups.map((group) => (
              <div key={group.id}>
                <p className="text-sm font-medium text-muted-foreground">{group.label}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.options.map((option) => {
                    const active = activeFilters[group.id] === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() =>
                          setActiveFilters((current) => ({
                            ...current,
                            [group.id]: option.id
                          }))
                        }
                        className={
                          active
                            ? "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                            : "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/70"
                        }
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-6 grid gap-4">
        {hasItems ? (
          activeView.sections.map((section) => (
            <section
              key={section.id}
              className="rounded-[24px] border border-border bg-background/80 p-5"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {section.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {section.items.length} visible
                </span>
              </div>

              {section.items.length > 0 ? (
                <div className="mt-4 grid gap-3 lg:grid-cols-2">
                  {section.items.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-[22px] border border-border/80 bg-card p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                          {item.category}
                        </span>
                        <span className="rounded-full bg-secondary/70 px-3 py-1 text-xs font-medium text-secondary-foreground">
                          {item.type}
                        </span>
                        <span className="rounded-full bg-background px-3 py-1 text-xs text-muted-foreground">
                          {item.source}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-foreground/80">
                        {item.timeLabel}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.notes}
                      </p>
                      <div className="mt-4 rounded-2xl border border-dashed border-border px-3 py-2 text-sm text-foreground/80">
                        {item.status}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-[22px] border border-dashed border-border bg-card/70 p-4">
                  <p className="text-sm font-medium">{section.emptyTitle}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {section.emptyDescription}
                  </p>
                </div>
              )}
            </section>
          ))
        ) : (
          <section className="rounded-[24px] border border-dashed border-border bg-background/70 p-6">
            <h2 className="text-lg font-semibold">{activeView.emptyTitle}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
              {activeView.emptyDescription}
            </p>
          </section>
        )}
      </div>

      <section className="mt-6 rounded-[28px] border border-dashed border-border bg-background/60 p-6">
        <h2 className="text-lg font-semibold">{supportTitle}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          {supportDescription}
        </p>
      </section>
    </div>
  );
}
