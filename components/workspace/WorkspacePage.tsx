"use client";

import { useMemo, useState } from "react";

import { WireframePanel, WireframeScaffold } from "@/components/workspace/WireframeScaffold";
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

function SummaryMetricCard({ metric }: { metric: WorkspaceSummaryMetric }) {
  return (
    <div className="rounded-md border border-border bg-card p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{metric.label}</p>
      <p className="mt-3 text-2xl font-medium text-foreground">{metric.value}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{metric.detail}</p>
    </div>
  );
}

function SectionRow({
  label,
  value,
  trailing
}: {
  label: string;
  value: string;
  trailing?: string;
}) {
  return (
    <div className="flex h-10 items-center justify-between rounded border border-border px-3 text-sm text-foreground">
      <div className="min-w-0">
        <span className="truncate">• {label}</span>
        {value ? <span className="ml-3 text-xs text-muted-foreground">{value}</span> : null}
      </div>
      {trailing ? <span className="ml-3 flex-shrink-0 text-xs text-muted-foreground">{trailing}</span> : null}
    </div>
  );
}

function SectionCard({ section }: { section: WorkspaceSection }) {
  return (
    <WireframePanel title={section.title}>
      <p className="mb-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">
        {section.description}
      </p>
      <div className="space-y-2">
        {section.items.length > 0 ? (
          section.items.map((item) => (
            <SectionRow
              key={item.id}
              label={item.title}
              value={`${item.category} · ${item.type}`}
              trailing={item.timeLabel}
            />
          ))
        ) : (
          <div className="rounded border border-dashed border-border px-3 py-4">
            <p className="text-sm font-medium text-foreground">{section.emptyTitle}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {section.emptyDescription}
            </p>
          </div>
        )}
      </div>
    </WireframePanel>
  );
}

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
  const visibleItems = activeView.sections.flatMap((section) => section.items);
  const milestoneItems = visibleItems.slice(0, 3);
  const recentItems = [...visibleItems].reverse().slice(0, 3);

  return (
    <WireframeScaffold eyebrow={eyebrow} title={title}>
      <div className="mb-8 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded border border-border px-3 py-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            {status}
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>
        <p className="mt-3 text-sm leading-6 text-foreground">{statusDetail}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {activeView.summary.map((metric) => (
          <SummaryMetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      {filterGroups.length > 0 ? (
        <div className="mt-8 rounded-md border border-border bg-card p-4">
          <div className="space-y-4">
            {filterGroups.map((group) => (
              <div key={group.id}>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-foreground">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
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
                        className={[
                          "rounded border px-3 py-2 text-sm transition-colors",
                          active
                            ? "border-foreground/50 bg-muted text-foreground"
                            : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                        ].join(" ")}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {hasItems ? (
          activeView.sections.map((section) => <SectionCard key={section.id} section={section} />)
        ) : (
          <div className="rounded border border-dashed border-border px-4 py-5 lg:col-span-2">
            <p className="text-sm font-medium text-foreground">{activeView.emptyTitle}</p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              {activeView.emptyDescription}
            </p>
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <WireframePanel title="Upcoming milestones">
          <div className="space-y-2">
            {milestoneItems.map((item) => (
              <SectionRow
                key={`milestone-${item.id}`}
                label={item.title}
                value={item.category}
                trailing={item.timeLabel}
              />
            ))}
          </div>
        </WireframePanel>

        <WireframePanel title="Recent activity">
          <div className="space-y-2">
            {recentItems.map((item) => (
              <SectionRow
                key={`recent-${item.id}`}
                label={item.status}
                value={item.source}
              />
            ))}
          </div>
        </WireframePanel>
      </div>

      <div className="mt-8 rounded-md border border-border bg-card p-4">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-foreground">
          {supportTitle}
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          {supportDescription}
        </p>
      </div>
    </WireframeScaffold>
  );
}
