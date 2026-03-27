import { notFound } from "next/navigation";

import {
  WireframeActionLink,
  WireframeDetailLayout,
  WireframeList,
  WireframePanel,
  WireframeStat
} from "@/components/workspace/WireframeDetail";
import { schoolCards } from "@/lib/workspace/surfaceData";

export default function SchoolCardDetailPage({
  params
}: {
  params: { courseId: string };
}) {
  const card = schoolCards.find((item) => item.id === params.courseId);

  if (!card) {
    notFound();
  }

  return (
    <WireframeDetailLayout
      section="School"
      title={card.name}
      backHref="/school"
      backLabel="Back to school"
      summary={card.desc}
      actions={<WireframeActionLink href="/school/new" label="Add new card" />}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <WireframeStat label="Status" value={card.status} detail="Current state of this school card." />
        <WireframeStat label="Progress" value={`${card.progress}%`} detail="How far this work has moved." />
        <WireframeStat label="Next step" value="Ready" detail={card.nextStep} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <WireframePanel title="Current focus">
          <div className="rounded border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            {card.focus}
          </div>
        </WireframePanel>
        <WireframePanel title="Deliverables">
          <WireframeList items={card.deliverables} />
        </WireframePanel>
      </div>
    </WireframeDetailLayout>
  );
}
