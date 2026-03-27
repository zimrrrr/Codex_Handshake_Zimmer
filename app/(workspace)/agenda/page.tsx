export default function AgendaPage() {
  return (
    <div className="p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2">
          <div className="mb-1 text-xs uppercase tracking-wider text-gray-500">Agenda</div>
          <h1 className="text-2xl font-normal">THURSDAY, MARCH 26</h1>
        </div>

        <div className="mt-6 rounded-lg border-2 border-gray-300 bg-white p-6">
          <h2 className="mb-3 text-sm font-medium uppercase">Morning Briefing</h2>
          <div className="text-sm text-gray-600">
            <p>
              Classes today: ECON 3851 @ 11:15 Today and FIN @ 9:30pm. You have 5
              assignments due this week. You have 8 bookmarked applications to fill out.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase">Tasks</h3>
            <div className="space-y-2">
              <div className="flex h-10 items-center rounded border border-gray-300 px-3 text-sm text-gray-600">
                • Assignment 1
              </div>
              <div className="flex h-10 items-center rounded border border-gray-300 px-3 text-sm text-gray-600">
                • Assignment 2
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase">Suggestions</h3>
            <div className="space-y-2">
              <div className="flex h-10 items-center rounded border border-gray-300 px-3 text-sm text-gray-600">
                • Apply to <span className="ml-1 inline-block h-5 w-16 border border-gray-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-sm font-medium uppercase">Timeline</h3>
          <div className="overflow-hidden rounded-lg border-2 border-gray-300 bg-white">
            <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-gray-200 bg-gray-50">
              <div className="p-2" />
              <div className="border-l border-gray-200 p-2 text-center">
                <div className="text-xs text-gray-500">Sun 22</div>
              </div>
              <div className="border-l border-gray-200 p-2 text-center">
                <div className="text-xs text-gray-500">Mon 23</div>
              </div>
              <div className="border-l border-gray-200 p-2 text-center">
                <div className="text-xs text-gray-500">Tue 24</div>
              </div>
              <div className="border-l border-gray-200 p-2 text-center">
                <div className="text-xs text-gray-500">Wed 25</div>
              </div>
              <div className="border-l border-gray-200 p-2 text-center">
                <div className="text-xs text-gray-500">Thu</div>
                <div className="mx-auto mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                  26
                </div>
              </div>
              <div className="border-l border-gray-200 p-2 text-center">
                <div className="text-xs text-gray-500">Fri 27</div>
              </div>
              <div className="border-l border-gray-200 p-2 text-center">
                <div className="text-xs text-gray-500">Sat 28</div>
              </div>
            </div>

            <div className="h-96 overflow-y-auto">
              <div className="grid grid-cols-[80px_repeat(7,1fr)]">
                {Array.from({ length: 24 }).map((_, hour) => (
                  <div key={hour} className="contents">
                    <div className="border-b border-gray-100 p-2 pr-3 text-right text-xs text-gray-500">
                      {hour === 0
                        ? "12 AM"
                        : hour < 12
                          ? `${hour} AM`
                          : hour === 12
                            ? "Noon"
                            : `${hour - 12} PM`}
                    </div>
                    {Array.from({ length: 7 }).map((_, day) => (
                      <div
                        key={`${hour}-${day}`}
                        className="relative min-h-[60px] border-b border-l border-gray-100 p-1"
                      >
                        {hour === 10 && day === 2 ? (
                          <div className="absolute inset-1 rounded border-l-2 border-orange-400 bg-orange-100 p-1 text-xs">
                            <div className="font-medium text-orange-700">Walk-in clinic</div>
                            <div className="text-orange-600">10:10 - 11:00AM</div>
                          </div>
                        ) : null}
                        {hour === 14 && day === 3 ? (
                          <div className="absolute inset-1 rounded border-l-2 border-blue-400 bg-blue-100 p-1 text-xs">
                            <div className="font-medium text-blue-700">ECON 3851</div>
                            <div className="text-blue-600">Office Hour...</div>
                          </div>
                        ) : null}
                        {hour === 15 && day === 4 ? (
                          <div className="absolute inset-1 rounded border-l-2 border-orange-400 bg-orange-100 p-1 text-xs">
                            <div className="font-medium text-orange-700">Spanish</div>
                          </div>
                        ) : null}
                        {hour === 18 && day === 3 ? (
                          <div className="absolute inset-1 rounded border-l-2 border-pink-400 bg-pink-100 p-1 text-xs">
                            <div className="font-medium text-pink-700">Reveres</div>
                            <div className="text-pink-600">6:45 - 7:45PM</div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
