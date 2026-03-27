export default function ProjectsPage() {
  return (
    <div className="p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2">
          <div className="mb-1 text-xs uppercase tracking-wider text-gray-500">Projects</div>
          <h1 className="text-2xl font-normal">THURSDAY, MARCH 26</h1>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-sm font-medium uppercase">Active Projects</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: "Workspace App",
                desc: "Productivity wireframe & prototype",
                progress: 70,
                status: "In Progress"
              },
              {
                name: "ECON Research Paper",
                desc: "Monetary policy & inflation — due Apr 10",
                progress: 40,
                status: "In Progress"
              },
              {
                name: "Portfolio Website",
                desc: "Personal site redesign",
                progress: 90,
                status: "Review"
              },
              {
                name: "Finance Club Pitch",
                desc: "Investment pitch deck for spring showcase",
                progress: 15,
                status: "Early Stage"
              }
            ].map((project) => (
              <button
                key={project.name}
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
              </button>
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
    </div>
  );
}
