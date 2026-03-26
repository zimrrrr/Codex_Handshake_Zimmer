import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
      <div className="w-full rounded-[32px] border border-border bg-card/90 p-8 shadow-[0_24px_80px_rgba(24,33,46,0.08)]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Workspace onboarding
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Start from a student operating system, not a generic assistant.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          This entry point will become the trust layer before OAuth. Workspace
          can read context, prepare guidance, and suggest app-local actions, but
          it never sends email or takes outside action autonomously.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/agenda"
            className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Enter Workspace
          </Link>
          <span className="rounded-full border border-border px-5 py-3 text-sm text-muted-foreground">
            OAuth wiring pending
          </span>
        </div>
      </div>
    </div>
  );
}
