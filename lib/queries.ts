import { getDB } from "./db";

// ─── Types ───────────────────────────────────────────────────────

export interface Article {
    id: string;
    title: string;
    slug: string;
    description: string;
    content: string;
    published_at: string;
    status: string;
    author: string;
    created_at: string;
    updated_at: string;
}

// ─── Queries ─────────────────────────────────────────────────────

/**
 * Fetch latest published articles, ordered by publish date (newest first).
 * Used on the homepage.
 */
export async function getPublishedArticles(limit = 20): Promise<Article[]> {
    const sql = getDB();
    const rows = await sql`
    SELECT id, title, slug, description, content, published_at, status, author, created_at, updated_at
    FROM articles
    WHERE status = 'published'
    ORDER BY published_at DESC
    LIMIT ${limit}
  `;
    return rows as Article[];
}

/**
 * Fetch a single article by its slug.
 * Returns null if not found or not published.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
    const sql = getDB();
    const rows = await sql`
    SELECT id, title, slug, description, content, published_at, status, author, created_at, updated_at
    FROM articles
    WHERE slug = ${slug} AND status = 'published'
    LIMIT 1
  `;
    return (rows[0] as Article) ?? null;
}

/**
 * Fetch recent articles excluding a given slug (for "Related Articles" section).
 */
export async function getRecentArticles(
    excludeSlug: string,
    limit = 4
): Promise<Article[]> {
    const sql = getDB();
    const rows = await sql`
    SELECT id, title, slug, description, published_at, status, author, created_at, updated_at
    FROM articles
    WHERE status = 'published' AND slug != ${excludeSlug}
    ORDER BY published_at DESC
    LIMIT ${limit}
  `;
    return rows as Article[];
}
