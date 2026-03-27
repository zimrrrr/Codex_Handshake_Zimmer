import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { WorkspacePage } from "@/components/workspace/WorkspacePage";
import { createFilterStateKey } from "@/lib/workspace/demoData";

describe("WorkspacePage", () => {
  it("renders the supplied operational content and switches filter views", async () => {
    const user = userEvent.setup();

    render(
      <WorkspacePage
        eyebrow="Agenda"
        title="What matters now"
        description="Agenda is the time-based operating view for the week ahead."
        status="Temporal dashboard"
        statusDetail="A shared work model can already explain the week."
        filterGroups={[
          {
            id: "window",
            label: "Time slice",
            options: [
              { id: "TODAY", label: "Today" },
              { id: "SEVEN_DAYS", label: "7 days" }
            ]
          }
        ]}
        defaultFilters={{
          window: "TODAY"
        }}
        views={{
          [createFilterStateKey(["TODAY"])]: {
            summary: [
              { label: "Upcoming items", value: "2", detail: "Two items today." },
              { label: "Deadlines and tasks", value: "1", detail: "One active task." },
              { label: "Surface mix", value: "1 school · 1 project", detail: "Two surfaces." }
            ],
            sections: [
              {
                id: "today",
                title: "Today",
                description: "What needs attention now.",
                emptyTitle: "Nothing today",
                emptyDescription: "The day is clear.",
                items: [
                  {
                    id: "today-item",
                    title: "Studio critique with product design team",
                    category: "SCHOOL",
                    type: "EVENT",
                    timeLabel: "Today · 1:30 PM",
                    notes: "Bring the walkthrough.",
                    status: "Prep before class",
                    source: "Calendar soon"
                  }
                ]
              }
            ],
            emptyTitle: "No items today",
            emptyDescription: "The current slice is quiet."
          },
          [createFilterStateKey(["SEVEN_DAYS"])]: {
            summary: [
              { label: "Upcoming items", value: "5", detail: "Five items this week." },
              { label: "Deadlines and tasks", value: "4", detail: "Four tasks this week." },
              { label: "Surface mix", value: "2 school · 2 work · 1 project", detail: "Cross-surface." }
            ],
            sections: [
              {
                id: "next-up",
                title: "Next up",
                description: "What is coming soon.",
                emptyTitle: "Nothing next",
                emptyDescription: "The week is light.",
                items: [
                  {
                    id: "week-item",
                    title: "Prepare questions for recruiter screen",
                    category: "WORK",
                    type: "TASK",
                    timeLabel: "Tomorrow · 9:00 AM",
                    notes: "Prep talking points.",
                    status: "Interview prep",
                    source: "Workspace"
                  }
                ]
              }
            ],
            emptyTitle: "No items this week",
            emptyDescription: "The current slice is quiet."
          }
        }}
        supportTitle="Why Agenda leads the product"
        supportDescription="It explains the operating system the fastest."
      />
    );

    expect(screen.getByText("Agenda")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "What matters now" })).toBeInTheDocument();
    expect(screen.getByText("Upcoming items")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Today" })).toBeInTheDocument();
    expect(screen.queryByText("Presentation layer")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "7 days" }));

    expect(screen.getByText("Next up")).toBeInTheDocument();
    expect(screen.getAllByText(/Prepare questions for recruiter screen/).length).toBeGreaterThan(0);
  });
});
