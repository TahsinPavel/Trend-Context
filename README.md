# TrendContext

A modern, editorial-style blog optimized for Google SEO and AdSense approval. Built with Next.js, TypeScript, and Tailwind CSS. Content served from Neon PostgreSQL via Server Components.

## Getting Started

### 1. Clone & Install

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env.local` and fill in your Neon connection string:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
DATABASE_URL=postgresql://username:password@ep-xxxxx.us-east-2.aws.neon.tech/trendcontext?sslmode=require
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Create the Articles Table

Run this SQL in your Neon dashboard (SQL Editor):

```sql
CREATE TABLE IF NOT EXISTS articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('published', 'draft')),
  author TEXT NOT NULL DEFAULT 'TrendContext',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);

-- Index for homepage listing
CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(status, published_at DESC);
```

### 4. Run Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Adding Articles Manually

Insert articles directly in the Neon SQL Editor:

```sql
INSERT INTO articles (title, slug, description, content, status, author, published_at)
VALUES (
  'Your Article Title',
  'your-article-slug',
  'A short description for SEO and card previews.',
  '<h2 id="section-1">Section 1</h2><p>Your HTML content here.</p><h2 id="section-2">Section 2</h2><p>More content...</p>',
  'published',
  'TrendContext',
  NOW()
);
```

> **Tip:** Add `id` attributes to your `<h2>` and `<h3>` tags to enable the automatic Table of Contents on article pages.

## Deploying to Vercel

1. Push the repo to GitHub
2. Import in [Vercel](https://vercel.com)
3. Set `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
4. Deploy — Vercel auto-detects the Next.js framework

## Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Framework   | Next.js 16 (App Router)       |
| Language    | TypeScript                    |
| Styling     | Tailwind CSS v4               |
| Database    | Neon PostgreSQL (serverless)  |
| Hosting     | Vercel                        |

## Project Structure

```
TrendContext/
├── app/
│   ├── layout.tsx              # Root layout (fonts, meta, header/footer)
│   ├── page.tsx                # Homepage
│   ├── trends/[slug]/page.tsx  # Article page (SSR)
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   ├── contact/page.tsx
│   └── not-found.tsx           # Custom 404
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ArticleCard.tsx
│   ├── ArticleList.tsx
│   ├── ShareButtons.tsx
│   └── NewsletterCTA.tsx
├── lib/
│   ├── db.ts                   # Neon connection helper
│   └── queries.ts              # SQL queries
├── public/
│   └── og-default.png          # Default OpenGraph image
└── .env.example
```
