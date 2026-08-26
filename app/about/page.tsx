import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About J. Rotich — background, philosophy, and areas of focus in risk, audit, and compliance leadership.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        About
      </h1>
      <div className="prose prose-neutral mt-6 max-w-prose text-foreground/90">
        <p>
          TODO: Write a first-person or third-person bio covering background,
          career philosophy, and what drives J. Rotich&apos;s work in risk,
          audit, and compliance leadership across 25+ countries.
        </p>
        <p>
          TODO: Mention current focus — Global Internal Audit Lead at an
          international NGO, co-leading the organization&apos;s AI adoption
          pilot for audit and compliance functions.
        </p>
      </div>
    </section>
  );
}
