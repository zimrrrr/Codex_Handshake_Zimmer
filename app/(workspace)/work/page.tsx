import Link from "next/link";

import { WireframeActionLink } from "@/components/workspace/WireframeDetail";
import { WireframeScaffold } from "@/components/workspace/WireframeScaffold";
import { workCards } from "@/lib/workspace/surfaceData";

export default function WorkPage() {
  return (
    <WireframeScaffold
      eyebrow="Career"
      title="THURSDAY, MARCH 26"
      actions={<WireframeActionLink href="/work/new" label="Add new card" />}
    >
      <div className="mx-auto max-w-4xl">

        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-sm font-medium uppercase">Applications</h3>
            <p className="text-xs uppercase tracking-[0.14em] text-gray-400">
              Open a card to view details
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {workCards.map((app) => (
              <Link
                key={app.id}
                href={`/work/${app.id}`}
                className="rounded-lg border border-gray-300 bg-white p-4 text-left transition-all hover:border-gray-500 hover:shadow-sm"
              >
                <div className="mb-1 flex items-start justify-between">
                  <div className="text-sm font-medium text-gray-800">{app.company}</div>
                  <span
                    className={[
                      "ml-2 flex-shrink-0 rounded border px-1.5 py-0.5 text-xs",
                      app.stage === "Offer"
                        ? "border-green-300 text-green-600"
                        : app.stage === "Rejected"
                          ? "border-red-200 text-red-400"
                          : app.stage === "Interview"
                            ? "border-blue-300 text-blue-600"
                            : "border-gray-300 text-gray-500"
                    ].join(" ")}
                  >
                    {app.stage}
                  </span>
                </div>
                <div className="text-xs text-gray-500">{app.role}</div>
                <div className="mt-2 text-xs text-gray-400">{app.note}</div>
                <div className="mt-1 text-xs text-gray-300">Applied {app.date}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3 text-sm font-medium uppercase">Email Follow-ups</h3>
            <div className="space-y-3">
              {[
                {
                  to: "Hiring Manager — Northfield",
                  subject: "Thank you + case study confirmation",
                  due: "Today",
                  urgent: true
                },
                {
                  to: "Prof. Chen",
                  subject: "Request for recommendation letter",
                  due: "Mar 28",
                  urgent: false
                },
                {
                  to: "Clearview HR",
                  subject: "Confirm phone screen time slot",
                  due: "Mar 29",
                  urgent: false
                },
                {
                  to: "Summit Analytics",
                  subject: "Follow up on application status",
                  due: "Apr 1",
                  urgent: false
                }
              ].map((email) => (
                <button
                  key={email.to}
                  className="w-full rounded-lg border border-gray-300 bg-white p-3 text-left transition-all hover:border-gray-500 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-xs font-medium text-gray-700">{email.to}</div>
                    <span
                      className={[
                        "ml-2 flex-shrink-0 text-xs",
                        email.urgent ? "text-red-400" : "text-gray-400"
                      ].join(" ")}
                    >
                      {email.due}
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-gray-500">{email.subject}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium uppercase">Resume & Achievements</h3>
            <div className="space-y-3">
              {[
                {
                  section: "Experience",
                  item: "Campus Café — Shift Lead",
                  note: "Update end date & add metrics"
                },
                {
                  section: "Projects",
                  item: "Workspace App",
                  note: "Add to portfolio & resume"
                },
                {
                  section: "Achievement",
                  item: "Finance Club VP elected",
                  note: "Add to leadership section"
                },
                {
                  section: "Skills",
                  item: "Python (Pandas, NumPy)",
                  note: "Update proficiency level"
                },
                {
                  section: "Certifications",
                  item: "Bloomberg Market Concepts",
                  note: "Add certificate date"
                }
              ].map((entry) => (
                <button
                  key={entry.item}
                  className="w-full rounded-lg border border-gray-300 bg-white p-3 text-left transition-all hover:border-gray-500 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="text-xs font-medium text-gray-700">{entry.item}</div>
                    <span className="ml-2 flex-shrink-0 text-xs text-gray-400">
                      {entry.section}
                    </span>
                  </div>
                  <div className="mt-0.5 text-xs text-gray-500">{entry.note}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-medium uppercase">Handshake</h3>
            <span className="rounded border border-gray-300 px-2 py-0.5 text-xs text-gray-400">
              Read Only
            </span>
          </div>
          <div className="overflow-hidden rounded-lg border-2 border-gray-300 bg-white">
            <div className="grid grid-cols-[1fr_120px_100px_90px] border-b border-gray-200 bg-gray-50">
              {["Role", "Company", "Location", "Posted"].map((header) => (
                <div
                  key={header}
                  className="border-r border-gray-200 p-3 text-xs font-medium uppercase tracking-wider text-gray-500 last:border-r-0"
                >
                  {header}
                </div>
              ))}
            </div>
            {[
              {
                role: "Financial Analyst Intern",
                company: "Ironwood Group",
                location: "Minneapolis, MN",
                posted: "Today"
              },
              {
                role: "Investment Research Intern",
                company: "Lake Capital",
                location: "Remote",
                posted: "Mar 25"
              },
              {
                role: "Corporate Finance Intern",
                company: "Regent Partners",
                location: "Chicago, IL",
                posted: "Mar 24"
              },
              {
                role: "Strategy & Ops Intern",
                company: "Vertex Holdings",
                location: "Remote",
                posted: "Mar 23"
              }
            ].map((listing) => (
              <div
                key={`${listing.role}-${listing.company}`}
                className="grid grid-cols-[1fr_120px_100px_90px] border-b border-gray-100 last:border-b-0"
              >
                <div className="border-r border-gray-100 p-3 text-sm text-gray-700">
                  {listing.role}
                </div>
                <div className="border-r border-gray-100 p-3 text-sm text-gray-600">
                  {listing.company}
                </div>
                <div className="border-r border-gray-100 p-3 text-sm text-gray-500">
                  {listing.location}
                </div>
                <div className="p-3 text-xs text-gray-400">{listing.posted}</div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-400">
            Synced from Handshake · listings are read-only and cannot be applied to from here
          </p>
        </div>
      </div>
    </WireframeScaffold>
  );
}
