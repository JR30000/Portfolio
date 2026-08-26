import type { Metadata } from "next";
import profile from "@/content/profile.json";

export const metadata: Metadata = {
  title: "About",
  description: profile.about.short,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        About
      </h1>
      <div className="prose prose-neutral mt-6 max-w-prose space-y-4 text-foreground/90">
        {profile.about.long.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10">
        <h2 className="font-heading text-lg font-semibold text-foreground">
          Top Skills
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {profile.topSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-sm text-foreground/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
