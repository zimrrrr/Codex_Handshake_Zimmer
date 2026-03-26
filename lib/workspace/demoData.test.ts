import {
  getAgendaView,
  getProjectsView,
  getSchoolView,
  getWorkView
} from "@/lib/workspace/demoData";

describe("demoData selectors", () => {
  it("filters agenda content by window and focus", () => {
    const agendaToday = getAgendaView("TODAY", "PROJECTS");

    expect(agendaToday.summary[0]?.value).toBe("1");
    expect(agendaToday.sections[0]?.items[0]?.title).toContain("Workspace demo walkthrough");
  });

  it("returns distinct grouped views for school, work, and projects", () => {
    const schoolByCourse = getSchoolView("COURSE");
    const workByPipeline = getWorkView("PIPELINE");
    const projectsByStage = getProjectsView("STAGE");

    expect(schoolByCourse.sections[0]?.title).toBe("Design Studio");
    expect(workByPipeline.sections[1]?.title).toBe("Interview prep");
    expect(projectsByStage.sections[2]?.title).toBe("Planning");
  });
});
