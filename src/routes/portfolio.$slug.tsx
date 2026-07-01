import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CASES, getCase, type CaseStudy } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }): CaseStudy => {
    const c = getCase(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const path = `/portfolio/${params.slug}`;
    return {
      meta: [
        { title: loaderData.seoTitle },
        { name: "description", content: loaderData.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:title", content: loaderData.seoTitle },
        { property: "og:description", content: loaderData.seoDescription },
        { property: "og:url", content: path },
        { property: "og:image", content: loaderData.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: loaderData.seoTitle },
        { name: "twitter:description", content: loaderData.seoDescription },
        { name: "twitter:image", content: loaderData.cover },
      ],
      links: [{ rel: "canonical", href: path }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: loaderData.title,
            headline: loaderData.title,
            description: loaderData.seoDescription,
            image: loaderData.gallery,
            dateCreated: loaderData.year,
            creator: { "@type": "Organization", name: "Triyash Media" },
            about: loaderData.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="section container-luxe text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl">Case study not found</h1>
      <Link to="/portfolio" className="mt-6 inline-block text-gold underline">Back to portfolio</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="section container-luxe text-center">
      <h1 className="font-display text-4xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: CaseDetail,
});

function CaseDetail() {
  const c = Route.useLoaderData();
  const others = CASES.filter((x) => x.slug !== c.slug).slice(0, 3);
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={c.cover} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/60 via-[var(--ink)]/70 to-[var(--background)]" />
        </div>
        <div className="container-luxe pt-32 pb-28 md:pt-40 md:pb-36 text-[var(--cream)]">
          <Link to="/portfolio" className="eyebrow text-gold hover:opacity-80">← Portfolio</Link>
          <p className="eyebrow mt-8 text-gold">{c.category} · {c.year}</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">{c.title}</h1>
          <p className="mt-5 text-xl text-white/80 max-w-2xl">{c.meta}</p>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <p className="eyebrow mb-3">Client</p>
            <h2 className="font-display text-2xl">{c.client}</h2>
            <p className="eyebrow mt-8 mb-3">Deliverables</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />{d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">The brief</p>
            <p className="font-display text-2xl md:text-3xl leading-[1.35]">{c.brief}</p>
            <p className="eyebrow mt-10 mb-4">Approach</p>
            <ul className="space-y-4">
              {c.approach.map((a, i) => (
                <li key={a} className="flex items-start gap-4">
                  <span className="font-display text-2xl text-gold/60 shrink-0">0{i + 1}</span>
                  <span className="text-lg leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-luxe">
          <p className="eyebrow mb-6">Gallery</p>
          <div className="grid md:grid-cols-2 gap-4">
            {c.gallery.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-3xl ${i === 0 ? "md:col-span-2 aspect-[16/8]" : "aspect-[4/3]"}`}>
                <img src={img} alt={`${c.title} — ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[1.2s]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-luxe">
          <p className="eyebrow mb-6">Results</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.results.map((r) => (
              <div key={r.label} className="rounded-3xl border border-gold/30 p-8 bg-gold/[0.04]">
                <p className="font-display text-5xl text-gradient-gold">{r.value}</p>
                <p className="mt-3 eyebrow text-[0.65rem]">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {c.testimonial && (
        <section className="section pt-0">
          <div className="container-luxe">
            <blockquote className="glass rounded-3xl p-10 md:p-16 max-w-4xl mx-auto text-center">
              <p className="font-display italic text-2xl md:text-4xl leading-snug">"{c.testimonial.quote}"</p>
              <cite className="mt-8 block eyebrow not-italic">— {c.testimonial.author}</cite>
            </blockquote>
          </div>
        </section>
      )}

      <section className="section pt-0">
        <div className="container-luxe">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow mb-3">More work</p>
              <h2 className="font-display text-4xl md:text-5xl">Next case</h2>
            </div>
            <Link to="/portfolio" className="text-sm text-gold hover:underline">All projects →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link key={o.slug} to="/portfolio/$slug" params={{ slug: o.slug }} className="group">
                <div className="overflow-hidden rounded-3xl aspect-[4/5]">
                  <img src={o.cover} alt={o.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                </div>
                <p className="mt-4 eyebrow">{o.category}</p>
                <h3 className="mt-2 font-display text-xl group-hover:text-gold transition-colors">{o.title}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-ui font-medium text-[var(--ink)] hover-lift">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}