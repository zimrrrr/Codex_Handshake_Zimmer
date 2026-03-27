export default function SchoolPage() {
  return (
    <div className="p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2">
          <div className="mb-1 text-xs uppercase tracking-wider text-gray-500">School</div>
          <h1 className="text-2xl font-normal">THURSDAY, MARCH 26</h1>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-sm font-medium uppercase">Courses</h3>
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
            <h3 className="mb-3 text-sm font-medium uppercase">Assignments</h3>
            <div className="space-y-2">
              {[
                "ECON 3851 — Problem Set 4",
                "FIN 2200 — Case Study",
                "SPAN 101 — Vocab Quiz",
                "ECON 3851 — Reading Response"
              ].map((item) => (
                <div
                  key={item}
                  className="flex h-10 items-center rounded border border-gray-300 px-3 text-sm text-gray-600"
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase">Classes Today</h3>
            <div className="space-y-2">
              <div className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-600">
                <div className="font-medium text-gray-700">FIN 2200</div>
                <div className="text-xs text-gray-500">9:30 AM — Room 204, Carlson Hall</div>
              </div>
              <div className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-600">
                <div className="font-medium text-gray-700">ECON 3851</div>
                <div className="text-xs text-gray-500">11:15 AM — Room 110, Hanson Hall</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
