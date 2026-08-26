// Reusable JSON-LD structured data component. Renders a <script> tag with
// application/ld+json — safe here because `data` is always our own typed
// object (JSON.stringify), never raw user input.

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Person schema for J. Rotich. Fill in the TODOs with real values —
// these are placeholders so the site ships with valid structured data
// from day one.
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "J. Rotich",
  jobTitle: "Global Internal Audit Lead",
  description:
    "Risk, Audit & Compliance leader with 15+ years of experience across 25+ countries.",
  url: "https://TODO-your-domain.example",
  image: "https://TODO-your-domain.example/images/placeholder-avatar.svg",
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "TODO: MBA-granting institution",
    },
  ],
  knowsAbout: [
    "Internal Audit",
    "Enterprise Risk Management",
    "Regulatory Compliance",
    "Governance",
    "AI Adoption in Audit",
    "TODO: additional expertise areas",
  ],
  sameAs: [
    "https://www.linkedin.com/in/TODO-linkedin-handle",
    "https://github.com/TODO-github-handle",
  ],
};
