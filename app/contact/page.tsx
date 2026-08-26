import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import profile from "@/content/profile.json";

export const metadata: Metadata = {
  title: "Contact",
  description: profile.contact.formIntro,
};

const hasRealEmail = !profile.contact.email.startsWith("TODO");

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-prose text-muted">{profile.contact.formIntro}</p>
      {hasRealEmail && (
        <p className="mt-2 text-sm text-foreground/80">
          Or email directly:{" "}
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-accent hover:underline"
          >
            {profile.contact.email}
          </a>
        </p>
      )}
      <div className="mt-10 max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
}
