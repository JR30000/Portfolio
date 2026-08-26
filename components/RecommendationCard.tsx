export type Recommendation = {
  name: string;
  title: string;
  relationship: string;
  quote: string;
};

export function RecommendationCard({
  recommendation,
}: {
  recommendation: Recommendation;
}) {
  return (
    <figure className="rounded-xl border border-border bg-background p-6 shadow-sm">
      <blockquote className="text-foreground/90">
        <p>&ldquo;{recommendation.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="mt-4">
        <p className="text-sm font-medium text-foreground">
          {recommendation.name}
        </p>
        <p className="text-xs text-muted">{recommendation.title}</p>
        <p className="text-xs text-muted">{recommendation.relationship}</p>
      </figcaption>
    </figure>
  );
}
