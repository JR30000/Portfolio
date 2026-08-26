import type { Metadata } from "next";
import {
  RecommendationCard,
  type Recommendation,
} from "@/components/RecommendationCard";
import recommendationsData from "@/content/recommendations.json";

export const metadata: Metadata = {
  title: "Recommendations",
  description:
    "Testimonials and recommendations from colleagues and stakeholders who have worked with Japheth Rotich.",
};

const recommendations = recommendationsData.recommendations as Recommendation[];

export default function RecommendationsPage() {
  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Recommendations
      </h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.name}
            recommendation={recommendation}
          />
        ))}
      </div>
    </section>
  );
}
