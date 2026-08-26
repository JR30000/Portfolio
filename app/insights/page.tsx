import type { Metadata } from "next";
import Link from "next/link";
import { supabase, type Insight } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and commentary from J. Rotich on risk, audit, compliance, and AI adoption.",
};

export const revalidate = 3600; // ISR: re-check for new insights hourly

async function getInsights(): Promise<Insight[]> {
  const { data, error } = await supabase
    .from("insights")
    .select("id, slug, title, excerpt, body, published_at")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load insights:", error.message);
    return [];
  }

  return data ?? [];
}

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Insights
      </h1>

      {insights.length === 0 ? (
        <p className="mt-10 text-muted">
          No insights published yet. Check back soon.
        </p>
      ) : (
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="rounded-xl border border-border p-6"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">
                <Link
                  href={`/insights/${insight.slug}`}
                  className="hover:text-accent"
                >
                  {insight.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-muted">{insight.excerpt}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
