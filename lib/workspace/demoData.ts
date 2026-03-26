export type WorkspaceCategory = "SCHOOL" | "WORK" | "PROJECTS";
export type WorkspaceItemType = "TASK" | "EVENT";
export type AgendaWindow = "TODAY" | "SEVEN_DAYS";
export type AgendaFocus = "ALL" | WorkspaceCategory;
export type SchoolGrouping = "ACADEMIC_LOAD" | "COURSE";
export type WorkGrouping = "PIPELINE" | "URGENCY";
export type ProjectGrouping = "MOMENTUM" | "STAGE";

export type WorkspaceSummaryMetric = {
  label: string;
  value: string;
  detail: string;
};

export type WorkspaceSectionItem = {
  id: string;
  title: string;
  category: WorkspaceCategory;
  type: WorkspaceItemType;
  timeLabel: string;
  notes: string;
  status: string;
  source: string;
};

export type WorkspaceSection = {
  id: string;
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
  items: WorkspaceSectionItem[];
};

export type WorkspaceViewState = {
  summary: WorkspaceSummaryMetric[];
  sections: WorkspaceSection[];
  emptyTitle: string;
  emptyDescription: string;
};

type DemoWorkItem = WorkspaceSectionItem & {
  agendaBucket: "TODAY" | "NEXT_UP" | "LATER_THIS_WEEK";
  course?: string;
  academicLane?: "PREP" | "DEADLINE" | "LOOKING_AHEAD";
  workLane?: "APPLICATIONS" | "INTERVIEWS" | "FOLLOW_THROUGH";
  urgency?: "ACTIVE" | "SOON" | "LATER";
  projectMomentum?: "SHIPPING" | "MOVING" | "QUEUED";
  projectStage?: "BUILDING" | "POLISHING" | "PLANNING";
};

const demoWorkItems: DemoWorkItem[] = [
  {
    id: "item-agenda-studio-crit",
    title: "Studio critique with product design team",
    category: "SCHOOL",
    type: "EVENT",
    timeLabel: "Today · 1:30 PM",
    notes:
      "Bring the onboarding flow walkthrough and annotate the three feedback questions you still need answered.",
    status: "Prep before class",
    source: "Calendar soon",
    agendaBucket: "TODAY",
    course: "Design Studio",
    academicLane: "PREP"
  },
  {
    id: "item-hci-deck",
    title: "Ship HCI deck for Thursday presentation",
    category: "SCHOOL",
    type: "TASK",
    timeLabel: "Tomorrow · Due 10:00 AM",
    notes:
      "Finish the prototype caption slide and rehearse the three-minute narrative once before submission.",
    status: "High leverage",
    source: "Workspace",
    agendaBucket: "NEXT_UP",
    course: "HCI 410",
    academicLane: "DEADLINE"
  },
  {
    id: "item-econ-reading",
    title: "Read labor market case notes",
    category: "SCHOOL",
    type: "TASK",
    timeLabel: "Friday · Before seminar",
    notes:
      "Pull two evidence points that connect directly to your internship discussion section.",
    status: "Looking ahead",
    source: "Imported context soon",
    agendaBucket: "LATER_THIS_WEEK",
    course: "Econ Seminar",
    academicLane: "LOOKING_AHEAD"
  },
  {
    id: "item-recruiter-prep",
    title: "Prepare questions for recruiter screen",
    category: "WORK",
    type: "TASK",
    timeLabel: "Tomorrow · 9:00 AM",
    notes:
      "Align talking points with the product internship role and save two examples about systems thinking.",
    status: "Interview prep",
    source: "Workspace",
    agendaBucket: "NEXT_UP",
    workLane: "INTERVIEWS",
    urgency: "ACTIVE"
  },
  {
    id: "item-application-pass",
    title: "Finalize two internship applications",
    category: "WORK",
    type: "TASK",
    timeLabel: "Thursday · End of day",
    notes:
      "Use the updated resume bullets and keep both applications in the same momentum block.",
    status: "Needs focus block",
    source: "Imported context soon",
    agendaBucket: "LATER_THIS_WEEK",
    workLane: "APPLICATIONS",
    urgency: "SOON"
  },
  {
    id: "item-mentor-followup",
    title: "Log mentor feedback from coffee chat",
    category: "WORK",
    type: "TASK",
    timeLabel: "Friday · 4:00 PM",
    notes:
      "Capture the portfolio feedback and decide whether it changes the internship narrative this weekend.",
    status: "Follow-through",
    source: "Workspace",
    agendaBucket: "LATER_THIS_WEEK",
    workLane: "FOLLOW_THROUGH",
    urgency: "LATER"
  },
  {
    id: "item-demo-polish",
    title: "Polish the Workspace demo walkthrough",
    category: "PROJECTS",
    type: "TASK",
    timeLabel: "Today · Before 6:00 PM",
    notes:
      "Tighten the opening three screens so the value proposition lands before the assistant appears.",
    status: "Shipping this week",
    source: "Workspace",
    agendaBucket: "TODAY",
    projectMomentum: "SHIPPING",
    projectStage: "POLISHING"
  },
  {
    id: "item-portfolio-case-study",
    title: "Outline the portfolio case study narrative",
    category: "PROJECTS",
    type: "TASK",
    timeLabel: "Thursday · 7:30 PM",
    notes:
      "Frame the problem, the decision points, and the measurable outcome before you draft visuals.",
    status: "In motion",
    source: "Workspace",
    agendaBucket: "LATER_THIS_WEEK",
    projectMomentum: "MOVING",
    projectStage: "BUILDING"
  },
  {
    id: "item-side-tooling",
    title: "Plan analytics pass for the side project",
    category: "PROJECTS",
    type: "TASK",
    timeLabel: "Weekend · Queue next",
    notes:
      "Define the two signals that would prove the habit loop is improving instead of adding noise.",
    status: "Queued next",
    source: "Imported context soon",
    agendaBucket: "LATER_THIS_WEEK",
    projectMomentum: "QUEUED",
    projectStage: "PLANNING"
  }
];

export function createFilterStateKey(filterIds: string[]) {
  return filterIds.join("|");
}

function countByType(items: DemoWorkItem[], type: WorkspaceItemType) {
  return items.filter((item) => item.type === type).length;
}

function summarizeCategories(items: DemoWorkItem[]) {
  return `${items.filter((item) => item.category === "SCHOOL").length} school · ${
    items.filter((item) => item.category === "WORK").length
  } work · ${items.filter((item) => item.category === "PROJECTS").length} projects`;
}

function toSectionItem(item: DemoWorkItem): WorkspaceSectionItem {
  return {
    id: item.id,
    title: item.title,
    category: item.category,
    type: item.type,
    timeLabel: item.timeLabel,
    notes: item.notes,
    status: item.status,
    source: item.source
  };
}

function buildSection(
  id: string,
  title: string,
  description: string,
  emptyTitle: string,
  emptyDescription: string,
  items: DemoWorkItem[]
): WorkspaceSection {
  return {
    id,
    title,
    description,
    emptyTitle,
    emptyDescription,
    items: items.map(toSectionItem)
  };
}

export function getAgendaView(window: AgendaWindow, focus: AgendaFocus): WorkspaceViewState {
  const scopedItems = demoWorkItems.filter((item) => focus === "ALL" || item.category === focus);
  const visibleItems =
    window === "TODAY"
      ? scopedItems.filter((item) => item.agendaBucket === "TODAY")
      : scopedItems;

  const sections =
    window === "TODAY"
      ? [
          buildSection(
            "agenda-now",
            "Today",
            "The commitments already pressing on today.",
            "No items are pressing today",
            "That focus is clear for today. Switch to seven days to see what is building next.",
            visibleItems.filter((item) => item.agendaBucket === "TODAY")
          ),
          buildSection(
            "agenda-ready-next",
            "Coming into view",
            "The next obligations that will matter as soon as today is closed out.",
            "Nothing new is stacking up right after today",
            "This is a good sign. The current slice is concentrated on what is already in front of the student.",
            scopedItems.filter((item) => item.agendaBucket === "NEXT_UP").slice(0, 1)
          )
        ]
      : [
          buildSection(
            "agenda-today",
            "Today",
            "Work that deserves immediate attention.",
            "Today is intentionally clear",
            "The agenda is showing a lighter day. The next-up section should guide where to create momentum.",
            visibleItems.filter((item) => item.agendaBucket === "TODAY")
          ),
          buildSection(
            "agenda-next-up",
            "Next up",
            "Items that shape the next one to two days.",
            "Nothing is landing next",
            "This slice is not hiding any short-term pressure. The later-this-week section becomes the planning view.",
            visibleItems.filter((item) => item.agendaBucket === "NEXT_UP")
          ),
          buildSection(
            "agenda-later",
            "Later this week",
            "Commitments worth seeing before they turn urgent.",
            "The week ahead is light",
            "That focus is intentionally sparse right now. Later milestones will add more imported context here.",
            visibleItems.filter((item) => item.agendaBucket === "LATER_THIS_WEEK")
          )
        ];

  return {
    summary: [
      {
        label: "Upcoming items",
        value: String(visibleItems.length),
        detail: "Visible in the current agenda slice."
      },
      {
        label: "Deadlines and tasks",
        value: String(countByType(visibleItems, "TASK")),
        detail: "Work the student can actively prepare or complete."
      },
      {
        label: "Surface mix",
        value: summarizeCategories(visibleItems),
        detail: "Cross-surface context stays visible in one timeline."
      }
    ],
    sections,
    emptyTitle: "No commitments match this agenda slice yet",
    emptyDescription:
      "This view stays intentional even when it is sparse. Change the focus or widen the window to see what is building across the rest of the week."
  };
}

export function getSchoolView(grouping: SchoolGrouping): WorkspaceViewState {
  const schoolItems = demoWorkItems.filter((item) => item.category === "SCHOOL");

  const sections =
    grouping === "ACADEMIC_LOAD"
      ? [
          buildSection(
            "school-prep",
            "Prep that changes class quality",
            "Sessions and work that improve how the student shows up.",
            "No live prep is queued",
            "That is okay for now. This section will grow when calendar and classroom context start flowing in.",
            schoolItems.filter((item) => item.academicLane === "PREP")
          ),
          buildSection(
            "school-deadlines",
            "Deadlines in motion",
            "Academic work that needs execution, not just awareness.",
            "No active academic deadlines",
            "The load is lighter here right now. The next section still keeps the upcoming academic story visible.",
            schoolItems.filter((item) => item.academicLane === "DEADLINE")
          ),
          buildSection(
            "school-looking-ahead",
            "Looking ahead",
            "Reading, prep, and assignments that are not urgent yet but should not be lost.",
            "Nothing is queued beyond the immediate load",
            "Later milestones can make this richer with imported academic context.",
            schoolItems.filter((item) => item.academicLane === "LOOKING_AHEAD")
          )
        ]
      : [
          buildSection(
            "school-design-studio",
            "Design Studio",
            "Coursework tied to studio critique and design reviews.",
            "No studio work is visible",
            "When more course context arrives, this section will show critique prep and artifact reviews.",
            schoolItems.filter((item) => item.course === "Design Studio")
          ),
          buildSection(
            "school-hci",
            "HCI 410",
            "Presentation and product-thinking work for the HCI course.",
            "No HCI work is visible",
            "This course slice is ready for more task and deadline context when later milestones land.",
            schoolItems.filter((item) => item.course === "HCI 410")
          ),
          buildSection(
            "school-econ",
            "Econ Seminar",
            "Reading and seminar prep tied to labor market work.",
            "No seminar prep is visible",
            "That is intentional for now. This surface is proving the academic grouping model before integrations exist.",
            schoolItems.filter((item) => item.course === "Econ Seminar")
          )
        ];

  return {
    summary: [
      {
        label: "Academic items",
        value: String(schoolItems.length),
        detail: "Shared work items currently routed into School."
      },
      {
        label: "Courses active",
        value: "3",
        detail: "The current placeholder set spans multiple classes."
      },
      {
        label: "Next pressure point",
        value: "Deck due tomorrow",
        detail: "School should make academic urgency obvious quickly."
      }
    ],
    sections,
    emptyTitle: "School is ready for more academic context",
    emptyDescription:
      "This surface is intentionally usable before live integrations. Later milestones can deepen it with imported academic signals without changing the operating model."
  };
}

export function getWorkView(grouping: WorkGrouping): WorkspaceViewState {
  const workItems = demoWorkItems.filter((item) => item.category === "WORK");

  const sections =
    grouping === "PIPELINE"
      ? [
          buildSection(
            "work-applications",
            "Applications moving",
            "Opportunities that still need tailored output and submission energy.",
            "No applications are active right now",
            "That lane is intentionally clear in this placeholder slice. Other work can still show career momentum.",
            workItems.filter((item) => item.workLane === "APPLICATIONS")
          ),
          buildSection(
            "work-interviews",
            "Interview prep",
            "Upcoming conversations where preparation changes the outcome.",
            "No interviews are in motion",
            "This section will become more important once real calendar and inbox context connect.",
            workItems.filter((item) => item.workLane === "INTERVIEWS")
          ),
          buildSection(
            "work-follow-through",
            "Follow-through",
            "Career tasks that keep momentum after the visible milestone passes.",
            "Nothing needs follow-through yet",
            "That does not mean the lane is unimportant. It is here so the product story is complete before integrations arrive.",
            workItems.filter((item) => item.workLane === "FOLLOW_THROUGH")
          )
        ]
      : [
          buildSection(
            "work-active",
            "Active now",
            "Career work that changes the next couple of days.",
            "No urgent career work is visible",
            "This focus is clear at the moment. Switch back to pipeline to see where the work sits overall.",
            workItems.filter((item) => item.urgency === "ACTIVE")
          ),
          buildSection(
            "work-soon",
            "Soon",
            "Items that are close enough to plan, but not yet same-day urgent.",
            "Nothing is landing soon",
            "The current placeholder set is light here. Later imported context will make this slice denser.",
            workItems.filter((item) => item.urgency === "SOON")
          ),
          buildSection(
            "work-later",
            "Later",
            "Career follow-through that still deserves a home before it gets buried.",
            "No lower-pressure career work is visible",
            "That keeps the current slice focused. The lane still exists so the user understands the full model.",
            workItems.filter((item) => item.urgency === "LATER")
          )
        ];

  return {
    summary: [
      {
        label: "Career items",
        value: String(workItems.length),
        detail: "Opportunities and follow-through visible in Work."
      },
      {
        label: "Most urgent lane",
        value: "Interview prep",
        detail: "This view should make the next professional obligation obvious."
      },
      {
        label: "Pipeline coverage",
        value: "Applications to follow-through",
        detail: "Work is more than deadlines; it is career management."
      }
    ],
    sections,
    emptyTitle: "Work is quiet in this grouping",
    emptyDescription:
      "That is intentional rather than broken. The view is still defining where career context will live once Gmail, Calendar, and Handshake-style sources are connected."
  };
}

export function getProjectsView(grouping: ProjectGrouping): WorkspaceViewState {
  const projectItems = demoWorkItems.filter((item) => item.category === "PROJECTS");

  const sections =
    grouping === "MOMENTUM"
      ? [
          buildSection(
            "projects-shipping",
            "Shipping this week",
            "Personal work with near-term output or demo pressure.",
            "Nothing is shipping this week",
            "The slice is lighter for now. This section exists so high-agency work has a visible home when it becomes urgent.",
            projectItems.filter((item) => item.projectMomentum === "SHIPPING")
          ),
          buildSection(
            "projects-moving",
            "In motion",
            "Projects that already have momentum and should keep it.",
            "No project is actively moving",
            "That would be a signal to start or revive work, not a product failure.",
            projectItems.filter((item) => item.projectMomentum === "MOVING")
          ),
          buildSection(
            "projects-queued",
            "Queued next",
            "Ideas and follow-up work worth keeping visible before they disappear.",
            "Nothing is waiting in queue",
            "This section is intentionally calm right now and will become more useful as the project load grows.",
            projectItems.filter((item) => item.projectMomentum === "QUEUED")
          )
        ]
      : [
          buildSection(
            "projects-building",
            "Building",
            "Hands-on creation and implementation work.",
            "No build work is visible",
            "That does not remove the category. It just means the current slice is light in active implementation.",
            projectItems.filter((item) => item.projectStage === "BUILDING")
          ),
          buildSection(
            "projects-polishing",
            "Polishing",
            "Refinement work that improves clarity, demo readiness, or finish.",
            "No polish work is visible",
            "When demo pressure rises, this stage should become one of the most useful project views.",
            projectItems.filter((item) => item.projectStage === "POLISHING")
          ),
          buildSection(
            "projects-planning",
            "Planning",
            "Ideas and setup work that deserve structure before execution starts.",
            "No planning work is visible",
            "This lane is still valuable because self-directed work often dies before it becomes concrete.",
            projectItems.filter((item) => item.projectStage === "PLANNING")
          )
        ];

  return {
    summary: [
      {
        label: "Project items",
        value: String(projectItems.length),
        detail: "Self-directed work routed into Projects."
      },
      {
        label: "Immediate push",
        value: "Demo polish today",
        detail: "Projects should preserve momentum, not just store ideas."
      },
      {
        label: "Modes visible",
        value: "Shipping, moving, queued",
        detail: "The student can see what is active versus what is waiting."
      }
    ],
    sections,
    emptyTitle: "Projects is clear in this grouping",
    emptyDescription:
      "That is still useful. Projects exists so personal initiatives remain visible alongside school and career work, even before richer data arrives."
  };
}
