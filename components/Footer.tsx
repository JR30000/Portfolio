const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/TODO-linkedin-handle", label: "LinkedIn" },
  { href: "https://github.com/TODO-github-handle", label: "GitHub" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto flex max-w-container flex-col gap-4 px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>&copy; {year} J. Rotich. All rights reserved.</p>
        <nav aria-label="Social links" className="flex gap-5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
