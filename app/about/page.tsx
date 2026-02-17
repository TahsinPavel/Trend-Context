import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about TrendContext — a news explainer site that breaks down trending topics for US readers with clarity and context.",
    // SEO: Canonical URL for this static page
    alternates: {
        canonical: "/about",
    },
};

export default function AboutPage() {
    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
                About TrendContext
            </h1>

            <div className="prose mt-8">
                <p>
                    TrendContext is an independent editorial site dedicated to breaking
                    down the stories everyone is searching for. We cover the biggest
                    trends, events, and topics — and explain them clearly, without
                    sensationalism.
                </p>

                <h2 id="what-we-do">What We Do</h2>
                <p>
                    Every day, millions of people search for context on major events,
                    cultural moments, and emerging trends. Most sources either over-hype
                    the story or bury the signal in noise. TrendContext fills the gap:
                    concise, well-researched explainers that respect your time.
                </p>

                <h2 id="our-approach">Our Approach</h2>
                <p>
                    We believe in a few core principles:
                </p>
                <ul>
                    <li>
                        <strong>Clarity over cleverness.</strong> We write for real people,
                        not algorithms. Every article is structured to answer "what
                        happened?" and "why does it matter?" first.
                    </li>
                    <li>
                        <strong>Context over clicks.</strong> We don&apos;t chase outrage or
                        misleading headlines. Trends are worth covering when they genuinely
                        affect people&apos;s lives.
                    </li>
                    <li>
                        <strong>Speed with substance.</strong> We aim to publish fast — but
                        never at the cost of accuracy or depth.
                    </li>
                </ul>

                <h2 id="who-we-are-for">Who This Is For</h2>
                <p>
                    TrendContext is built for US readers who want to stay informed without
                    doomscrolling. Whether you&apos;re catching up on a breaking story or
                    trying to understand why something is trending, we&apos;ve got you
                    covered.
                </p>

                <h2 id="contact-us">Get in Touch</h2>
                <p>
                    Have a suggestion, correction, or just want to say hello? Visit our{" "}
                    <a href="/contact">contact page</a> — we read everything.
                </p>
            </div>
        </article>
    );
}
