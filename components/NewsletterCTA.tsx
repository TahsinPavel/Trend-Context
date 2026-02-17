"use client";

export default function NewsletterCTA() {
    return (
        <section className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center sm:p-10">
            <h3 className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                Stay in the loop
            </h3>
            <p className="mx-auto mt-2 max-w-md text-[var(--color-text-muted)]">
                Get the latest explainers and trend breakdowns delivered to your inbox.
                No spam, unsubscribe anytime.
            </p>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row"
            >
                <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                </label>
                <input
                    id="newsletter-email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20"
                />
                <button
                    type="submit"
                    className="cursor-pointer rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#db2777]"
                >
                    Subscribe
                </button>
            </form>

            <p className="mt-3 text-xs text-[var(--color-text-muted)]">
                Join 1,000+ readers. Free forever.
            </p>
        </section>
    );
}
