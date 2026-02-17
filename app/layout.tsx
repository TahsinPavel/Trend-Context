import type { Metadata } from "next";
import { Newsreader, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// ─── Fonts ───────────────────────────────────────────────────────

const newsreader = Newsreader({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-body",
    display: "swap",
});

// ─── Global Metadata ─────────────────────────────────────────────

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://trendcontext.live";

export const metadata: Metadata = {
    title: {
        default: "TrendContext — Today's Trends, Explained Clearly",
        template: "%s | TrendContext",
    },
    description:
        "TrendContext breaks down the biggest stories and trending topics with clear, concise explainers written for real people. No hype — just context.",
    metadataBase: new URL(siteUrl),
    // SEO: Canonical URL prevents duplicate content across www/non-www and trailing slash variants
    alternates: {
        canonical: "/",
    },
    // AdSense trust: Consistent editorial identity across the site
    authors: [{ name: "TrendContext Editorial Team" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteUrl,
        siteName: "TrendContext",
        title: "TrendContext — Today's Trends, Explained Clearly",
        description:
            "TrendContext breaks down the biggest stories and trending topics with clear, concise explainers written for real people.",
        // Social CTR: Default OG image fallback for all pages without a specific image
        images: [
            {
                url: "/og-default.png",
                width: 1200,
                height: 630,
                alt: "TrendContext",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TrendContext — Today's Trends, Explained Clearly",
        description:
            "TrendContext breaks down the biggest stories and trending topics with clear, concise explainers.",
        images: ["/og-default.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

// ─── Root Layout ─────────────────────────────────────────────────

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${newsreader.variable} ${roboto.variable}`}>
            <body className="flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-text)] antialiased">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
