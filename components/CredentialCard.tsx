export type Credential = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
      <h3 className="font-heading text-lg font-semibold text-foreground">
        {credential.title}
      </h3>
      <p className="mt-1 text-sm text-accent">
        {credential.issuer} &middot; {credential.year}
      </p>
      {credential.description && (
        <p className="mt-3 text-sm text-muted">{credential.description}</p>
      )}
    </div>
  );
}
