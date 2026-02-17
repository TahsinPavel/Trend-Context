import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "TrendContext's privacy policy. Learn how we collect, use, and protect your information.",
    // SEO: Canonical URL for this static page
    alternates: {
        canonical: "/privacy",
    },
};

export default function PrivacyPage() {
    return (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
            <h1 className="font-heading text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
                Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Last updated: February 17, 2026
            </p>

            <div className="prose mt-8">
                <p>
                    At TrendContext (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to
                    protecting your privacy. This Privacy Policy explains how we collect,
                    use, and safeguard information when you visit our website at
                    trendcontext.live (the &quot;Site&quot;).
                </p>

                <h2 id="information-we-collect">Information We Collect</h2>
                <p>
                    We may collect the following types of information:
                </p>
                <ul>
                    <li>
                        <strong>Log Data:</strong> When you visit the Site, our servers
                        automatically record information such as your IP address, browser
                        type, referring/exit pages, and timestamps. This data is used for
                        analytics and site performance improvements.
                    </li>
                    <li>
                        <strong>Cookies:</strong> We use cookies and similar tracking
                        technologies to analyze site traffic and understand user behavior.
                        You can control cookie preferences through your browser settings.
                    </li>
                    <li>
                        <strong>Voluntarily Provided Information:</strong> If you subscribe
                        to our newsletter or contact us via the contact form, we may collect
                        your email address and any information you choose to share.
                    </li>
                </ul>

                <h2 id="how-we-use-information">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Operate, maintain, and improve the Site</li>
                    <li>Analyze usage patterns to improve content and user experience</li>
                    <li>
                        Send you newsletters or updates (only if you have opted in)
                    </li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2 id="third-party-services">Third-Party Services</h2>
                <p>We may use the following third-party services:</p>
                <ul>
                    <li>
                        <strong>Google AdSense:</strong> We may display advertisements served
                        by Google. Google uses cookies to serve ads based on your prior
                        visits to this Site and other websites. You may opt out of
                        personalized advertising by visiting{" "}
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Ads Settings
                        </a>
                        .
                    </li>
                    <li>
                        <strong>Google Analytics:</strong> We may use Google Analytics to
                        track and analyze website traffic. Google Analytics uses cookies to
                        collect anonymous usage data. You can learn more about Google&apos;s
                        privacy practices at{" "}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google Privacy Policy
                        </a>
                        .
                    </li>
                </ul>

                <h2 id="data-sharing">Data Sharing</h2>
                <p>
                    We do not sell, trade, or otherwise transfer your personally
                    identifiable information to outside parties. This does not include
                    trusted third-party service providers who assist us in operating our
                    Site, so long as they agree to keep this information confidential.
                </p>

                <h2 id="data-retention">Data Retention</h2>
                <p>
                    We retain collected information for as long as necessary to fulfill
                    the purposes outlined in this Privacy Policy, unless a longer
                    retention period is required or permitted by law.
                </p>

                <h2 id="childrens-privacy">Children&apos;s Privacy</h2>
                <p>
                    Our Site is not directed to individuals under the age of 13. We do not
                    knowingly collect personal information from children under 13. If we
                    become aware that a child under 13 has provided us with personal
                    information, we will take steps to delete such information promptly.
                </p>

                <h2 id="your-rights">Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction or deletion of your personal data</li>
                    <li>Opt out of data processing for marketing purposes</li>
                    <li>Withdraw consent at any time</li>
                </ul>

                <h2 id="changes-to-this-policy">Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Changes will be
                    posted on this page with an updated revision date. We encourage you
                    to review this Privacy Policy periodically.
                </p>

                <h2 id="contact-us">Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us
                    through our <a href="/contact">contact page</a>.
                </p>
            </div>
        </article>
    );
}
