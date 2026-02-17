import type { Article } from "@/lib/queries";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
    articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
    if (articles.length === 0) {
        return (
            <div className="py-16 text-center">
                <p className="font-heading text-xl text-[var(--color-text-muted)]">
                    No articles yet.
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                    Check back soon — we&apos;re working on fresh content.
                </p>
            </div>
        );
    }

    return (
        <div className="divide-y divide-[var(--color-border)]">
            {articles.map((article) => (
                <div key={article.id} className="py-6 first:pt-0">
                    <ArticleCard article={article} />
                </div>
            ))}
        </div>
    );
}
