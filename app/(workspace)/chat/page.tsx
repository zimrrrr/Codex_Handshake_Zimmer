import { ArrowUp, Check, Mic, Plus } from "lucide-react";

import { WireframeScaffold } from "@/components/workspace/WireframeScaffold";

const tools = [
  { label: "G", title: "Gmail" },
  { label: "Ca", title: "Calendar" },
  { label: "N", title: "Notion" },
  { label: "Do", title: "Docs" },
  { label: "Dr", title: "Drive" },
  { label: "Db", title: "Dropbox" },
  { label: "S", title: "Stripe" },
  { label: "Sl", title: "Slack" },
  { label: "Gh", title: "GitHub" }
] as const;

export default function ChatPage() {
  return (
    <WireframeScaffold eyebrow="Chat" title="Chat">
      <div className="flex min-h-[65vh] items-center justify-center">
        <div className="w-full max-w-2xl rounded-2xl border-2 border-border bg-card">
          <textarea
            rows={2}
            placeholder="Type and press enter to start chatting..."
            className="w-full resize-none bg-transparent px-5 pb-2 pt-4 text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          <div className="flex items-center justify-between px-4 pb-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted-foreground"
              >
                <Plus size={14} />
              </button>
              <button
                type="button"
                className="flex h-7 items-center gap-1.5 rounded-full border border-border px-3 text-sm text-foreground"
              >
                <span>Auto</span>
                <Check size={12} className="text-muted-foreground" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" className="text-muted-foreground">
                <Mic size={16} />
              </button>
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground"
              >
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
          <div className="mx-4 border-t border-border" />
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Connect your tools
            </span>
            <div className="flex items-center gap-1.5">
              {tools.map((tool) => (
                <div
                  key={tool.title}
                  title={tool.title}
                  className="flex h-6 w-6 items-center justify-center rounded-md border border-border text-[8px] text-muted-foreground"
                >
                  {tool.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WireframeScaffold>
  );
}
