export type CredentialItem = {
  name: string;
  issuer: string;
  issued?: string;
};

export type CredentialGroup = {
  category: string;
  items: CredentialItem[];
};

function formatIssued(issued?: string) {
  if (!issued) return null;
  const [year, month] = issued.split("-");
  if (!month) return year;
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function CredentialCard({ group }: { group: CredentialGroup }) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {group.category}
      </h3>
      <ul className="mt-4 space-y-3">
        {group.items.map((item) => (
          <li key={item.name} className="text-sm">
            <p className="text-foreground/90">{item.name}</p>
            <p className="text-muted">
              {item.issuer}
              {item.issued && <> &middot; {formatIssued(item.issued)}</>}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
