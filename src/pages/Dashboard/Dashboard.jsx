import { SignOutButton, useUser } from "@clerk/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const displayName = user?.fullName || user?.username || "Developer";
  const email = user?.primaryEmailAddress?.emailAddress;
  const initials = displayName
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-my-bg-primary text-my-text-primary">
      <header className="border-b border-my-border bg-my-bg-secondary">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="text-xl text-my-accent" aria-hidden="true">⌕</span>
            <span>
              Dev<span className="text-my-accent">Detective</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            {isLoaded && user && (
              <div className="flex items-center gap-3">
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={`${displayName}'s profile`}
                    className="h-10 w-10 rounded-full border border-my-border object-cover"
                  />
                ) : (
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-my-border bg-my-bg-elevated text-sm font-bold text-my-accent"
                    aria-label={`${displayName}'s profile`}
                  >
                    {initials}
                  </div>
                )}
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold">{displayName}</p>
                  {email && <p className="text-xs text-my-text-muted">{email}</p>}
                </div>
              </div>
            )}
            <SignOutButton redirectUrl="/">
              <button
                type="button"
                className="rounded-lg border border-my-border px-4 py-2 text-sm font-semibold text-my-text-secondary transition-colors hover:border-my-border-active hover:text-my-text-primary"
              >
                Log out
              </button>
            </SignOutButton>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-my-accent">
            Your workspace
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome back, {displayName}
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-my-text-secondary sm:text-base">
            Connect your GitHub account to start exploring your repositories with DevDetective.
          </p>
        </div>

        <section className="overflow-hidden rounded-2xl border border-my-border bg-my-bg-secondary">
          <div className="grid gap-8 p-6 sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-my-border bg-my-bg-elevated text-my-accent">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.95 1.95 3.16 1.47.1-.73.39-1.23.7-1.52-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.32-2.64 5.27-5.15 5.55.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold sm:text-2xl">Connect GitHub</h2>
              <p className="mt-2 text-sm leading-6 text-my-text-secondary">
                Install the DevDetective GitHub App to grant access to the repositories you choose.
                Your permissions stay in your control.
              </p>
            </div>

            <a
              href="https://github.com/apps/bugdetect-app/installations/new/"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-my-accent px-5 py-3 text-sm font-bold text-my-bg-primary transition-all hover:bg-my-accent-hover hover:shadow-[0_0_25px_rgba(32,245,138,0.2)]"
            >
              Install GitHub App
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex items-center gap-2 border-t border-my-border px-6 py-4 text-xs text-my-text-muted sm:px-9">
            <span className="h-2 w-2 rounded-full bg-my-accent" />
            Secure connection • You choose which repositories to share
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
