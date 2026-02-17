import Link from "next/link";

export default function NotFound() {
    return (
        <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
            <p className="font-heading text-6xl font-bold text-[var(--color-accent)]">
                404
            </p>
            <h1 className="mt-4 font-heading text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                Page not found
            </h1>
            <p className="mt-4 max-w-md text-[var(--color-text-muted)]">
                The page you&apos;re looking for doesn&apos;t exist or may have been
                moved. Try heading back to the homepage.
            </p>
            <Link
                href="/"
                className="mt-8 cursor-pointer rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#db2777]"
            >
                Back to Home
            </Link>
        </div>
    );
}
