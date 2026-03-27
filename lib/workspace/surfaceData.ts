export type SchoolCard = {
  id: string;
  name: string;
  desc: string;
  progress: number;
  status: string;
  focus: string;
  nextStep: string;
  deliverables: string[];
};

export type WorkCard = {
  id: string;
  company: string;
  role: string;
  stage: string;
  date: string;
  note: string;
  source: string;
  nextStep: string;
  checklist: string[];
};

export type ProjectCard = {
  id: string;
  name: string;
  desc: string;
  progress: number;
  status: string;
  owner: string;
  nextMilestone: string;
  deliverables: string[];
};

export const schoolCards: SchoolCard[] = [
  {
    id: "workspace-app",
    name: "Workspace App",
    desc: "Productivity wireframe & prototype",
    progress: 70,
    status: "In Progress",
    focus: "Lock the interaction model for the core dashboard demo.",
    nextStep: "Refine detail views and capture demo screenshots.",
    deliverables: ["Agenda shell", "Card detail flows", "Contest demo script"]
  },
  {
    id: "econ-research-paper",
    name: "ECON Research Paper",
    desc: "Monetary policy & inflation — due Apr 10",
    progress: 40,
    status: "In Progress",
    focus: "Tighten the argument and gather final supporting sources.",
    nextStep: "Draft the inflation response section before seminar.",
    deliverables: ["Working thesis", "Source annotations", "First full draft"]
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    desc: "Personal site redesign",
    progress: 90,
    status: "Review",
    focus: "Prepare for launch and clean the remaining copy rough edges.",
    nextStep: "Review mobile spacing and publish the refreshed homepage.",
    deliverables: ["Home page refresh", "Project case studies", "Resume download"]
  },
  {
    id: "finance-club-pitch",
    name: "Finance Club Pitch",
    desc: "Investment pitch deck for spring showcase",
    progress: 15,
    status: "Early Stage",
    focus: "Get the narrative and evidence structure into place early.",
    nextStep: "Outline the investment thesis and define slide ownership.",
    deliverables: ["Narrative outline", "Supporting data", "Deck structure"]
  }
];

export const workCards: WorkCard[] = [
  {
    id: "northfield-capital",
    company: "Northfield Capital",
    role: "Finance Intern",
    stage: "Interview",
    date: "Mar 28",
    note: "Final round — case study prep needed",
    source: "Applied directly",
    nextStep: "Prepare a concise case walkthrough and confirm logistics.",
    checklist: ["Review case packet", "Practice 2 mock interviews", "Send confirmation note"]
  },
  {
    id: "summit-analytics",
    company: "Summit Analytics",
    role: "Research Intern",
    stage: "Applied",
    date: "Mar 20",
    note: "Applied via Handshake",
    source: "Handshake",
    nextStep: "Follow up if there is no movement by next week.",
    checklist: ["Track response window", "Prepare follow-up draft", "Research team background"]
  },
  {
    id: "acme-corp",
    company: "Acme Corp",
    role: "Operations Intern",
    stage: "Offer",
    date: "Mar 15",
    note: "Deadline to respond: Apr 1",
    source: "Career fair",
    nextStep: "Compare compensation and growth path against other active roles.",
    checklist: ["Review offer terms", "List decision criteria", "Discuss with mentor"]
  },
  {
    id: "bridgewater-co",
    company: "Bridgewater & Co.",
    role: "Analyst Intern",
    stage: "Rejected",
    date: "Mar 10",
    note: "No feedback provided",
    source: "Company portal",
    nextStep: "Capture lessons and move the energy to open interviews.",
    checklist: ["Archive materials", "Note interview learnings", "Reallocate prep time"]
  },
  {
    id: "midwest-partners",
    company: "Midwest Partners",
    role: "Strategy Intern",
    stage: "Applied",
    date: "Mar 24",
    note: "Referral from Prof. Chen",
    source: "Referral",
    nextStep: "Follow up through the referral channel after the review window.",
    checklist: ["Thank Prof. Chen", "Monitor status", "Prepare talking points"]
  },
  {
    id: "clearview-advisors",
    company: "Clearview Advisors",
    role: "Risk Intern",
    stage: "Screening",
    date: "Mar 22",
    note: "Phone screen scheduled Apr 2",
    source: "Handshake",
    nextStep: "Prepare concise answers for screening questions and firm fit.",
    checklist: ["Review job description", "Practice intro pitch", "Confirm availability"]
  }
];

export const projectCards: ProjectCard[] = [
  {
    id: "workspace-app",
    name: "Workspace App",
    desc: "Productivity wireframe & prototype",
    progress: 70,
    status: "In Progress",
    owner: "Aidan",
    nextMilestone: "Detail views + seed-backed demo story",
    deliverables: ["Workspace shell", "School/Work/Projects views", "Assistant narrative"]
  },
  {
    id: "econ-research-paper",
    name: "ECON Research Paper",
    desc: "Monetary policy & inflation — due Apr 10",
    progress: 40,
    status: "In Progress",
    owner: "Aidan",
    nextMilestone: "Complete first draft by Apr 2",
    deliverables: ["Thesis", "Evidence bank", "Draft outline"]
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    desc: "Personal site redesign",
    progress: 90,
    status: "Review",
    owner: "Aidan",
    nextMilestone: "Ship refreshed homepage and case-study links",
    deliverables: ["Responsive landing page", "Selected work section", "Resume link"]
  },
  {
    id: "finance-club-pitch",
    name: "Finance Club Pitch",
    desc: "Investment pitch deck for spring showcase",
    progress: 15,
    status: "Early Stage",
    owner: "Finance Club Team",
    nextMilestone: "Frame the core pitch argument",
    deliverables: ["Thesis", "Deck outline", "Sector research"]
  }
];
