import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/credentials", label: "Credentials" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          J. Rotich
        </Link>
        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Mobile nav intentionally kept minimal at scaffold stage. */}
        <nav aria-label="Primary" className="flex gap-4 md:hidden">
          <Link href="/contact" className="text-sm font-medium text-accent">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
