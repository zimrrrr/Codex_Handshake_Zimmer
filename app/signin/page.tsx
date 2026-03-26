import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl items-center px-6 py-16">
      <div className="w-full rounded-[32px] border border-border bg-card/90 p-8 shadow-[0_24px_80px_rgba(24,33,46,0.08)]">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Google-first onboarding
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          Connect your workspace without giving up control.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          This screen will become the trust layer before OAuth. It should explain
          what the app reads, what it never sends, and why the assistant only
          suggests instead of acting autonomously.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/agenda"
            className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            Continue to workspace shell
          </Link>
          <span className="rounded-full border border-border px-5 py-3 text-sm text-muted-foreground">
            OAuth wiring pending
          </span>
        </div>
      </div>
    </div>
  );
}
