import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { supabase, type Insight } from "@/lib/supabase";

export const revalidate = 3600;

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
