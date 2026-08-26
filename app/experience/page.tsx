import type { Metadata } from "next";
import { Timeline, type ExperienceItem } from "@/components/Timeline";
import experienceData from "@/content/experience.json";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Career timeline and roles held by J. Rotich in risk, audit, and compliance leadership.",
};

const experience = experienceData as ExperienceItem[];

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Experience
      </h1>
      <div className="mt-10">
        <Timeline items={experience} />
      </div>
    </section>
  );
}
