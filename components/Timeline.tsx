export type ExperienceItem = {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
};

function formatRange(start: string, end: string | null) {
  return `${start} — ${end ?? "Present"}`;
}

export function Timeline({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-6">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full bg-accent"
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-accent">
            {formatRange(item.startDate, item.endDate)}
          </p>
          <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
            {item.role}
          </h3>
          <p className="text-sm text-muted">
            {item.organization} &middot; {item.location}
          </p>
          <p className="mt-3 text-foreground/90">{item.summary}</p>
          {item.highlights.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/80">
              {item.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
