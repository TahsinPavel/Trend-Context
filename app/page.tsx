import { getPublishedArticles, type Article } from "@/lib/queries";
import ArticleList from "@/components/ArticleList";
import NewsletterCTA from "@/components/NewsletterCTA";

// Revalidate homepage every 60 seconds for fresh content
export const revalidate = 60;

export default async function HomePage() {
    let articles: Article[] = [];

    try {
        articles = await getPublishedArticles(20);
    } catch {
        // DB may not be connected during development — show empty state gracefully
        articles = [];
    }

    return (
        <>
            {/* ── Hero Section ─────────────────────────────────────── */}
            <section className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
                    <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
                        What&apos;s happening today
                        <span className="text-[var(--color-accent)]"> — </span>
                        <br className="hidden sm:block" />
                        explained clearly.
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-[var(--color-secondary)] sm:text-xl">
                        TrendContext breaks down the biggest stories and trending topics
                        with clear, concise explainers. No hype, no jargon — just the
                        context you need.
                    </p>
                </div>
            </section>

            {/* ── Latest Articles ──────────────────────────────────── */}
            <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
                <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
                    Latest Articles
                </h2>
                <p className="mt-1 text-[var(--color-text-muted)]">
                    The stories and topics everyone&apos;s searching for, explained for real people.
                </p>

                <div className="mt-8">
                    <ArticleList articles={articles} />
                </div>
            </section>

            {/* ── Newsletter CTA ───────────────────────────────────── */}
            <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
                <NewsletterCTA />
            </section>
        </>
    );
}
