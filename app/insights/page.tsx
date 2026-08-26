import type { Metadata } from "next";
import Link from "next/link";
import { supabase, type Insight } from "@/lib/supabase";
import insightsSeed from "@/content/insights-seed.json";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and commentary from Japheth Rotich on risk, audit, compliance, and AI adoption.",
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
  const drafts = insightsSeed.drafts;

  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Insights
      </h1>

      {insights.length > 0 && (
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

      <div className={insights.length > 0 ? "mt-16" : "mt-10"}>
        <h2 className="font-heading text-lg font-semibold text-foreground">
          Coming Soon
        </h2>
        <p className="mt-2 max-w-prose text-sm text-muted">
          Draft topics awaiting full write-ups — titles are real, content is
          not published yet.
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {drafts.map((draft) => (
            <article
              key={draft.slug}
              className="rounded-xl border border-dashed border-border p-6"
            >
              <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-accent">
                Draft
              </span>
              <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">
                <Link
                  href={`/insights/${draft.slug}`}
                  className="hover:text-accent"
                >
                  {draft.title}
                </Link>
              </h3>
              <p className="mt-2 text-xs uppercase tracking-wide text-muted">
                {draft.topic}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
