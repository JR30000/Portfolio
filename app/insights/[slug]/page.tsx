import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase, type Insight } from "@/lib/supabase";
import insightsSeed from "@/content/insights-seed.json";

export const revalidate = 3600;

export function generateStaticParams() {
  return insightsSeed.drafts.map((draft) => ({ slug: draft.slug }));
}

function getDraft(slug: string) {
  return insightsSeed.drafts.find((draft) => draft.slug === slug) ?? null;
}

async function getInsight(slug: string): Promise<Insight | null> {
  const { data, error } = await supabase
    .from("insights")
    .select("id, slug, title, excerpt, body, published_at")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const draft = getDraft(params.slug);
  if (draft) {
    return {
      title: draft.title,
      description: `Draft — ${draft.topic}. Full content not yet published.`,
      robots: { index: false, follow: true },
    };
  }

  const insight = await getInsight(params.slug);
  if (!insight) {
    return { title: "Insight not found" };
  }

  return {
    title: insight.title,
    description: insight.excerpt,
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      type: "article",
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const draft = getDraft(params.slug);

  if (draft) {
    return (
      <article className="mx-auto max-w-prose px-6 py-16">
        <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-accent">
          Draft
        </span>
        <h1 className="mt-3 font-heading text-3xl font-semibold text-foreground md:text-4xl">
          {draft.title}
        </h1>
        <p className="mt-2 text-sm uppercase tracking-wide text-muted">
          {draft.topic}
        </p>
        <p className="mt-8 text-foreground/90">
          This piece hasn&apos;t been written up yet — check back soon for
          the full post.
        </p>
      </article>
    );
  }

  const insight = await getInsight(params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-prose px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        {insight.title}
      </h1>
      {insight.published_at && (
        <p className="mt-2 text-sm text-muted">
          {new Date(insight.published_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      <div className="prose prose-neutral mt-8 whitespace-pre-wrap text-foreground/90">
        {insight.body}
      </div>
    </article>
  );
}
