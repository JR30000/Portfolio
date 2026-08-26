import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with J. Rotich.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-container px-6 py-16">
      <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
        Contact
      </h1>
      <p className="mt-4 max-w-prose text-muted">
        TODO: short intro line about the best reasons to reach out (speaking
        engagements, advisory work, collaboration, etc.).
      </p>
      <div className="mt-10 max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
}
