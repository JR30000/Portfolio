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
