export type ConcurrentInitiative = {
  title: string;
  period: string;
  description: string;
};

export type ExperienceRole = {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string | null;
  summary: string;
  highlights: string[];
  concurrentInitiatives?: ConcurrentInitiative[];
};

function formatRange(start: string, end: string | null) {
  return `${start} — ${end ?? "Present"}`;
}

export function Timeline({ items }: { items: ExperienceRole[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-6">
      {items.map((item) => (
        <li key={`${item.company}-${item.startDate}`} className="relative">
          <span
            className="absolute -left-[1.65rem] top-1.5 h-3 w-3 rounded-full bg-accent"
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-accent">
            {formatRange(item.startDate, item.endDate)}
          </p>
          <h3 className="mt-1 font-heading text-xl font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="text-sm text-muted">
            {item.company} &middot; {item.location}
          </p>
          <p className="mt-3 text-foreground/90">{item.summary}</p>
          {item.highlights.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/80">
              {item.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          )}
          {item.concurrentInitiatives && item.concurrentInitiatives.length > 0 && (
            <div className="mt-4 space-y-3 border-l-2 border-border pl-4">
              {item.concurrentInitiatives.map((initiative) => (
                <div key={initiative.title}>
                  <p className="text-sm font-medium text-foreground">
                    {initiative.title}{" "}
                    <span className="font-normal text-muted">
                      &middot; {initiative.period}
                    </span>
                  </p>
                  <p className="text-sm text-foreground/80">
                    {initiative.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
