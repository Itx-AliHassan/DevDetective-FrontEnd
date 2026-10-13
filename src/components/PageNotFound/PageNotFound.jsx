import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-my-bg-primary text-my-text-primary flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-my-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl">
                {/* 404 */}
                <div className="relative inline-block">
                    <h1 className="text-[120px] sm:text-[180px] font-black leading-none tracking-tighter text-my-accent">
                        404
                    </h1>

                    {/* Glow behind 404 */}
                    <div className="absolute inset-0 -z-10 blur-3xl bg-my-accent/10" />
                </div>

                {/* Detective Icon */}
                <div className="mt-2 mb-5 text-my-accent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 15l5 5m-3-9a6 6 0 11-12 0 6 6 0 0112 0z"
                        />
                    </svg>
                </div>

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                    Case Not Found
                </h2>

                {/* Description */}
                <p className="text-my-text-secondary text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-8">
                    The detective searched every possible route, but this page
                    left no trace behind. The case remains unsolved.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-lg bg-my-accent text-my-bg-primary font-semibold transition-all duration-200 hover:bg-my-accent-hover 
                        hover:shadow-[0_0_25px_rgba(32,245,138,0.2)]"
                    >
                        Back to Dashboard
                    </Link>

                    <button
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg border border-my-border text-my-text-secondary font-medium transition-all duration-200 hover:border-my-border-active  hover:text-my-accent hover:bg-my-bg-secondary"
                    >
                        Go Back
                    </button>
                </div>

                {/* Case Number */}
                <div className="mt-10 flex items-center justify-center gap-2 text-xs text-my-text-muted">
                    <span className="w-6 h-px bg-my-border" />
                    <span>CASE #404</span>
                    <span className="w-6 h-px bg-my-border" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;