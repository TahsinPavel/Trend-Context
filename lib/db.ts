import { neon } from "@neondatabase/serverless";

/**
 * Creates a SQL query function connected to Neon PostgreSQL.
 * Uses the serverless driver — ideal for Vercel Edge/Serverless Functions.
 *
 * Requires DATABASE_URL environment variable set in .env.local
 */
export function getDB() {
    const databaseUrl = process.env.DATABASE_URL;

    if (!databaseUrl) {
        throw new Error(
            "DATABASE_URL is not set. Copy .env.example to .env.local and configure your Neon connection string."
        );
    }

    return neon(databaseUrl);
}
