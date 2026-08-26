import Image from "next/image";

export type Recommendation = {
  id: string;
  author: string;
  role: string;
  relationship: string;
  quote: string;
  avatarUrl: string | null;
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
      <figcaption className="mt-4 flex items-center gap-3">
        <Image
          src={recommendation.avatarUrl ?? "/images/placeholder-avatar.svg"}
          alt={`Portrait of ${recommendation.author}`}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium text-foreground">
            {recommendation.author}
          </p>
          <p className="text-xs text-muted">
            {recommendation.role} &middot; {recommendation.relationship}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
