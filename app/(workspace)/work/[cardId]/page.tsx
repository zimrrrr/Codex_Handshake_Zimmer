import { notFound } from "next/navigation";

import {
  WireframeActionLink,
  WireframeDetailLayout,
  WireframeList,
  WireframePanel,
  WireframeStat
} from "@/components/workspace/WireframeDetail";
import { workCards } from "@/lib/workspace/surfaceData";

export default function WorkCardDetailPage({
  params
}: {
  params: { cardId: string };
}) {
  const card = workCards.find((item) => item.id === params.cardId);

  if (!card) {
    notFound();
  }

  return (
    <WireframeDetailLayout
      section="Work"
      title={`${card.company} · ${card.role}`}
      backHref="/work"
      backLabel="Back to work"
      summary={card.note}
      actions={<WireframeActionLink href="/work/new" label="Add new card" />}
    >
      <div className="grid gap-4 md:grid-cols-3">
        <WireframeStat label="Stage" value={card.stage} detail="Where this opportunity sits right now." />
        <WireframeStat label="Applied" value={card.date} detail={`Source: ${card.source}`} />
        <WireframeStat label="Next step" value="Move" detail={card.nextStep} />
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <WireframePanel title="Priority checklist">
          <WireframeList items={card.checklist} />
        </WireframePanel>
        <WireframePanel title="Why it matters">
          <div className="rounded border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            This detail view creates space for job-specific prep, follow-through, and decision support without crowding the main recruiting dashboard.
          </div>
        </WireframePanel>
      </div>
    </WireframeDetailLayout>
  );
}
