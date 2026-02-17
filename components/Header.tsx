import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="group flex items-center gap-2 transition-colors duration-200"
                >
                    <span className="font-heading text-xl font-bold tracking-tight text-[var(--color-primary)] sm:text-2xl">
                        Trend
                        <span className="text-[var(--color-accent)]">Context</span>
                    </span>
                </Link>

                {/* Navigation links */}
                <ul className="flex items-center gap-6 text-sm font-medium text-[var(--color-secondary)]">
                    <li>
                        <Link
                            href="/"
                            className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-text)]"
                        >
                            Home
                        </Link>
                    </li>
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
                            href="/contact"
                            className="cursor-pointer transition-colors duration-200 hover:text-[var(--color-text)]"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
