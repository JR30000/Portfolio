import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-container flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:py-24">
      <div className="flex-1">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-accent">
          Risk, Audit &amp; Compliance Leadership
        </p>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          J. Rotich
        </h1>
        <p className="mt-4 max-w-prose text-lg text-muted">
          Global Internal Audit Lead with 15+ years driving risk, audit, and
          compliance outcomes across 25+ countries — currently co-leading an
          AI adoption pilot for internal audit at an international NGO.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/experience"
            className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-cream transition-opacity hover:opacity-90"
          >
            View Experience
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/images/placeholder-avatar.svg"
          alt="Portrait of J. Rotich"
          width={480}
          height={480}
          priority
          className="mx-auto w-full max-w-sm rounded-2xl object-cover"
        />
      </div>
    </section>
  );
}
