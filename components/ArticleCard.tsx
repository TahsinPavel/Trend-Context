import Link from "next/link";
import type { Article } from "@/lib/queries";

/**
 * Estimates reading time based on word count.
 * Average reading speed: ~238 words per minute (US adult average).
 */
function estimateReadingTime(html: string): string {
    // Strip HTML tags, then count words
    const text = html.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 238));
    return `${minutes} min read`;
}

/**
 * Formats a date string into a human-readable US format.
 */
function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article className="group cursor-pointer border-b border-[var(--color-border)] pb-6 transition-colors duration-200 last:border-b-0">
            <Link href={`/trends/${article.slug}`} className="block">
                <h2 className="font-heading text-xl font-bold leading-snug text-[var(--color-primary)] transition-colors duration-200 group-hover:text-[var(--color-accent)] sm:text-2xl">
                    {article.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-[var(--color-secondary)]">
                    {article.description}
                </p>

                <div className="mt-3 flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                    <span>{article.author}</span>
                    <span aria-hidden="true">&middot;</span>
                    <time dateTime={article.published_at}>
                        {formatDate(article.published_at)}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{estimateReadingTime(article.content || "")}</span>
                </div>
            </Link>
        </article>
    );
}
