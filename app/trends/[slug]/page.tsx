import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getArticleBySlug, getRecentArticles, type Article } from "@/lib/queries";
import ShareButtons from "@/components/ShareButtons";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

// Revalidate individual articles every 5 minutes
export const revalidate = 300;

// ─── Types ───────────────────────────────────────────────────────

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

// ─── Helpers ─────────────────────────────────────────────────────

function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function estimateReadingTime(html: string): string {
    const text = html.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 238));
    return `${minutes} min read`;
}

/**
 * Extracts h2/h3 headings from HTML content for a table of contents.
 */
function extractHeadings(html: string): { id: string; text: string; level: number }[] {
    const regex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[23]>/gi;
    const headings: { id: string; text: string; level: number }[] = [];

    let match;
    while ((match = regex.exec(html)) !== null) {
        headings.push({
            level: parseInt(match[1]),
            id: match[2],
            text: match[3].replace(/<[^>]*>/g, ""), // Strip nested HTML
        });
    }

    return headings;
}

// AdSense trust: Single authoritative author identity across all articles
const AUTHOR_NAME = "TrendContext Editorial Team";

// ─── Dynamic Metadata ────────────────────────────────────────────

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const article = await getArticleBySlug(slug);
        if (!article) return { title: "Article Not Found" };

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trendcontext.live";
        const articleUrl = `/trends/${article.slug}`;

        // Social CTR: Use article-specific OG image if available, otherwise fall back to default
        const ogImage = "/og-default.png";

        return {
            title: article.title,
            description: article.description,
            // AdSense trust: Consistent editorial author across all content
            authors: [{ name: AUTHOR_NAME }],
            // SEO: Canonical URL prevents duplicate content for each article
            alternates: {
                canonical: articleUrl,
            },
            openGraph: {
                type: "article",
                title: article.title,
                description: article.description,
                url: `${siteUrl}${articleUrl}`,
                publishedTime: article.published_at,
                authors: [AUTHOR_NAME],
                images: [
                    {
                        url: ogImage,
                        width: 1200,
                        height: 630,
                        alt: article.title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: article.title,
                description: article.description,
                images: [ogImage],
            },
        };
    } catch {
        return { title: "Article Not Found" };
    }
}

// ─── Page Component ──────────────────────────────────────────────

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;

    let article;
    let relatedArticles: Article[] = [];

    try {
        article = await getArticleBySlug(slug);
        if (article) {
            relatedArticles = await getRecentArticles(slug, 4);
        }
    } catch {
        notFound();
    }

    if (!article) {
        notFound();
    }

    const headings = extractHeadings(article.content);

    return (
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
            {/* ── Article Header ────────────────────────────────────── */}
            <header>
                <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
                    {article.title}
                </h1>

                <p className="mt-4 text-lg text-[var(--color-secondary)]">
                    {article.description}
                </p>

                {/* AdSense trust: Visible consistent author byline */}
                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--color-text-muted)]">
                    <span className="font-medium text-[var(--color-text)]">
                        {AUTHOR_NAME}
                    </span>
                    <span aria-hidden="true">&middot;</span>
                    <time dateTime={article.published_at}>
                        {formatDate(article.published_at)}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{estimateReadingTime(article.content)}</span>
                </div>

                <div className="mt-4">
                    <ShareButtons title={article.title} slug={article.slug} />
                </div>
            </header>

            {/* ── Table of Contents (only if headings exist) ─────── */}
            {headings.length > 0 && (
                <nav
                    aria-label="Table of contents"
                    className="mt-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
                >
                    <h2 className="font-heading text-lg font-bold text-[var(--color-primary)]">
                        In This Article
                    </h2>
                    <ul className="mt-3 space-y-2">
                        {headings.map((heading) => (
                            <li
                                key={heading.id}
                                className={heading.level === 3 ? "ml-4" : ""}
                            >
                                <a
                                    href={`#${heading.id}`}
                                    className="cursor-pointer text-sm text-[var(--color-secondary)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                                >
                                    {heading.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            {/* ── Article Content ───────────────────────────────────── */}
            <div
                className="prose mt-10"
                dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* ── Bottom Share ──────────────────────────────────────── */}
            <div className="mt-12 border-t border-[var(--color-border)] pt-6">
                <ShareButtons title={article.title} slug={article.slug} />
            </div>

            {/* SEO crawl depth: Internal links to related articles with descriptive anchor text.
                Each ArticleCard links to /trends/[slug] using the article title as anchor text.
                Gracefully skips if no related articles exist (no placeholders, no errors). */}
            {relatedArticles.length > 0 && (
                <section className="mt-16 border-t border-[var(--color-border)] pt-10">
                    <h2 className="font-heading text-2xl font-bold text-[var(--color-primary)]">
                        More to Read
                    </h2>
                    <div className="mt-6 space-y-6">
                        {relatedArticles.map((related) => (
                            <ArticleCard key={related.id} article={related} />
                        ))}
                    </div>
                </section>
            )}

            {/* ── Back to Home ──────────────────────────────────────── */}
            <div className="mt-12 text-center">
                <Link
                    href="/"
                    className="cursor-pointer text-sm font-medium text-[var(--color-accent)] transition-colors duration-200 hover:text-[#be185d]"
                >
                    &larr; Back to all articles
                </Link>
            </div>
        </article>
    );
}
