import { Show, UserButton, SignOutButton } from "@clerk/react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-my-bg-primary text-my-text-primary flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-my-border bg-my-bg-secondary sticky top-0 z-20">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <span className="text-my-accent text-2xl">🔍</span>
          <span>
            Dev<span className="text-my-accent">Detective</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-6 text-sm text-my-text-secondary">
          <li>
            <a href="#features" className="hover:text-my-accent transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="hover:text-my-accent transition-colors">
              How It Works
            </a>
          </li>
          <li>
            <a href="#security" className="hover:text-my-accent transition-colors">
              Security
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Show when="signed-in">
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded-xl bg-my-accent text-my-bg-primary font-bold text-xs hover:bg-my-accent-hover transition-all"
            >
              Dashboard ↗
            </Link>
            <UserButton afterSignOutUrl="/" />
          </Show>

          <Show when="signed-out">
            <Link
              to="/auth/sign-in"
              className="px-4 py-2 rounded-xl border border-my-border text-my-text-primary text-xs font-semibold hover:border-my-border-active transition-all"
            >
              Sign In
            </Link>
            <Link
              to="/auth/sign-up"
              className="px-4 py-2 rounded-xl bg-my-accent text-my-bg-primary text-xs font-bold hover:bg-my-accent-hover transition-all"
            >
              Get Started
            </Link>
          </Show>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-my-bg-surface border border-my-border text-xs text-my-text-secondary">
          <span className="w-2 h-2 rounded-full bg-my-accent animate-pulse" />
          <span>GitHub App Integration Enabled</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
          Supercharge Your Code Security with{" "}
          <span className="text-my-accent">DevDetective</span>
        </h1>

        <p className="text-base sm:text-lg text-my-text-secondary max-w-2xl leading-relaxed">
          Connect your GitHub account using our official GitHub App. Inspect repositories,
          track security vulnerabilities, and monitor code quality seamlessly.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Show when="signed-in">
            <Link
              to="/dashboard"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-my-accent text-my-bg-primary font-bold text-sm hover:bg-my-accent-hover hover:shadow-[0_0_25px_rgba(32,245,138,0.3)] transition-all"
            >
              Open Dashboard & Repositories →
            </Link>
          </Show>

          <Show when="signed-out">
            <Link
              to="/auth/sign-up"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-my-accent text-my-bg-primary font-bold text-sm hover:bg-my-accent-hover hover:shadow-[0_0_25px_rgba(32,245,138,0.3)] transition-all"
            >
              Start Free with Clerk →
            </Link>
            <Link
              to="/auth/sign-in"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-my-border text-my-text-secondary hover:text-my-text-primary text-sm font-semibold hover:border-my-border-active transition-all"
            >
              Sign In
            </Link>
          </Show>
        </div>

        {/* Feature Cards */}
        <section id="features" className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left">
          <div className="bg-my-bg-secondary border border-my-border rounded-2xl p-6 space-y-3">
            <div className="text-2xl">🔐</div>
            <h3 className="text-base font-bold text-my-text-primary">Fine-Grained Permissions</h3>
            <p className="text-xs text-my-text-secondary leading-relaxed">
              GitHub App architecture ensures DevDetective only accesses the repositories you explicitly grant access to.
            </p>
          </div>

          <div className="bg-my-bg-secondary border border-my-border rounded-2xl p-6 space-y-3">
            <div className="text-2xl">⚡</div>
            <h3 className="text-base font-bold text-my-text-primary">Clerk Authentication</h3>
            <p className="text-xs text-my-text-secondary leading-relaxed">
              Sign in with your preferred identity provider. Your Clerk user account links safely to your GitHub App installation.
            </p>
          </div>

          <div className="bg-my-bg-secondary border border-my-border rounded-2xl p-6 space-y-3">
            <div className="text-2xl">🛡️</div>
            <h3 className="text-base font-bold text-my-text-primary">Zero Token Exposure</h3>
            <p className="text-xs text-my-text-secondary leading-relaxed">
              Installation access tokens and private keys are strictly kept on the server, never exposed to browser clients.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-my-border py-6 text-center text-xs text-my-text-muted">
        DevDetective • Continuous Code & Security Intelligence
      </footer>
    </div>
  );
};

export default LandingPage;