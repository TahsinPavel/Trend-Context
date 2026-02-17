import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
                {/* Top section */}
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <div>
                        <Link href="/" className="font-heading text-lg font-bold tracking-tight">
                            Trend<span className="text-[var(--color-accent)]">Context</span>
                        </Link>
                        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                            What&apos;s happening today — explained clearly.
                        </p>
                    </div>

                    <nav>
                        <ul className="flex flex-wrap gap-6 text-sm text-[var(--color-text-muted)]">
                            <li>
                                <Link
                                    href="/about"
                                    className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-text)]"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-text)]"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-text)]"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Bottom divider + copyright */}
                <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-text-muted)]">
                    <p>&copy; {currentYear} TrendContext. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
