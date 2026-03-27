import { notFound } from "next/navigation";

import {
  WireframeActionLink,
  WireframeDetailLayout,
  WireframeList,
  WireframePanel,
  WireframeStat
} from "@/components/workspace/WireframeDetail";
import { projectCards } from "@/lib/workspace/surfaceData";

export default function ProjectCardDetailPage({
  params
}: {
  params: { projectId: string };
}) {
  const card = projectCards.find((item) => item.id === params.projectId);

  if (!card) {
    notFound();
  }

  return (
    <WireframeDetailLayout
      section="Projects"
      title={card.name}
      backHref="/projects"
      backLabel="Back to projects"
      summary={card.desc}
      actions={<WireframeActionLink href="/projects/new" label="Add new card" />}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <WireframeStat label="Status" value={card.status} detail="Current state of this project card." />
        <WireframeStat label="Progress" value={`${card.progress}%`} detail="Progress toward the next milestone." />
        <WireframeStat label="Owner" value={card.owner} detail={card.nextMilestone} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <WireframePanel title="Deliverables">
          <WireframeList items={card.deliverables} />
        </WireframePanel>
        <WireframePanel title="Next milestone">
          <div className="rounded border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            {card.nextMilestone}
          </div>
        </WireframePanel>
      </div>
    </WireframeDetailLayout>
  );
}
