import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with the TrendContext team. We'd love to hear your feedback, corrections, or story suggestions.",
    // SEO: Canonical URL for this static page
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
                Contact Us
            </h1>

            <div className="prose mt-8">
                <p>
                    We&apos;d love to hear from you. Whether you have a story suggestion,
                    spotted an error, or just want to share feedback — our inbox is
                    always open.
                </p>

                <h2 id="how-to-reach-us">How to Reach Us</h2>
                <p>
                    The best way to get in touch is by email:
                </p>
                <p>
                    <strong>
                        <a href="mailto:hello@trendcontext.live">hello@trendcontext.live</a>
                    </strong>
                </p>
                <p>
                    We aim to respond within 48 hours on business days.
                </p>

                <h2 id="what-to-send">What You Can Send Us</h2>
                <ul>
                    <li>
                        <strong>Story corrections:</strong> If we got something wrong, tell
                        us. We take accuracy seriously and will issue corrections promptly.
                    </li>
                    <li>
                        <strong>Topic suggestions:</strong> Have a trend or event you want
                        us to cover? Let us know — we prioritize stories our readers care
                        about.
                    </li>
                    <li>
                        <strong>Partnership inquiries:</strong> If you&apos;re interested in
                        collaboration, syndication, or advertising, please reach out.
                    </li>
                    <li>
                        <strong>General feedback:</strong> Good or bad — it all helps us
                        improve.
                    </li>
                </ul>

                <h2 id="response-time">Response Time</h2>
                <p>
                    We&apos;re a small team, so please allow 1–2 business days for a
                    response. Urgent corrections are prioritized.
                </p>
            </div>
        </article>
    );
}
