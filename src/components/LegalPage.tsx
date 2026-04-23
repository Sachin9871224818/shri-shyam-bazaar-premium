import { Layout } from "./Layout";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <section className="bg-brand-cream py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-ink">
            Legal
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </section>

      <section className="py-16">
        <article className="mx-auto max-w-3xl space-y-6 px-4 text-foreground/85 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-base [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-brand-red [&_a]:underline">
          {children}
        </article>
      </section>
    </Layout>
  );
}
