import type { Metadata } from "next";
import {
  CredentialCard,
  type CredentialGroup,
} from "@/components/CredentialCard";
import credentialsData from "@/content/credentials.json";

export const metadata: Metadata = {
  title: "Credentials",
  description:
    "Professional credentials held by Japheth Rotich, including CIA, CPA-K, MBA, and ongoing AI, governance, and leadership certifications.",
};

const { groups, affiliations, languages } = credentialsData as {
  groups: CredentialGroup[];
  affiliations: string[];
  languages: { name: string; proficiency: string }[];
};

export default function CredentialsPage() {
  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Credentials
      </h1>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <CredentialCard key={group.category} group={group} />
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Professional Affiliations
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {affiliations.map((affiliation) => (
              <li
                key={affiliation}
                className="rounded-full border border-border px-3 py-1 text-sm text-foreground/80"
              >
                {affiliation}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground">
            Languages
          </h2>
          <ul className="mt-3 space-y-1 text-sm text-foreground/80">
            {languages.map((language) => (
              <li key={language.name}>
                {language.name} &middot;{" "}
                <span className="text-muted">{language.proficiency}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
