import Link from "next/link";

import { WireframeActionLink } from "@/components/workspace/WireframeDetail";
import { WireframeScaffold } from "@/components/workspace/WireframeScaffold";
import { projectCards } from "@/lib/workspace/surfaceData";

export default function ProjectsPage() {
  return (
    <WireframeScaffold
      eyebrow="Projects"
      title="THURSDAY, MARCH 26"
      actions={<WireframeActionLink href="/projects/new" label="Add new card" />}
    >
      <div className="mx-auto max-w-4xl">

        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-medium uppercase">Active Projects</h3>
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
              Open a card to view details
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projectCards.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="rounded-lg border border-gray-300 bg-white p-4 text-left transition-all hover:border-gray-500 hover:shadow-sm"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-800">{project.name}</div>
                    <div className="mt-0.5 text-xs text-gray-500">{project.desc}</div>
                  </div>
                  <span className="ml-2 flex-shrink-0 text-xs text-gray-500">
                    {project.status}
                  </span>
                </div>
                <div className="text-xs text-gray-400">{project.progress}% complete</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase">Upcoming Milestones</h3>
            <div className="space-y-2">
              {[
                { label: "Portfolio — Final Deploy", date: "Mar 28" },
                { label: "ECON Paper — First Draft", date: "Apr 2" },
                { label: "Finance Club Pitch Deck", date: "Apr 14" }
              ].map((milestone) => (
                <div
                  key={milestone.label}
                  className="flex h-10 items-center justify-between rounded border border-gray-300 px-3 text-sm text-gray-600"
                >
                  <span>• {milestone.label}</span>
                  <span className="ml-2 flex-shrink-0 text-xs text-gray-400">
                    {milestone.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase">Recent Activity</h3>
            <div className="space-y-2">
              {[
                "Updated Workspace wireframe layout",
                "Added intro section to Portfolio",
                "Outlined ECON paper thesis"
              ].map((activity) => (
                <div
                  key={activity}
                  className="flex h-10 items-center rounded border border-gray-300 px-3 text-sm text-gray-600"
                >
                  • {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WireframeScaffold>
  );
}
