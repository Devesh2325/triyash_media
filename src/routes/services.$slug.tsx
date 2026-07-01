import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES, getService } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const path = `/services/${params.slug}`;
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
            "@type": "Service",
            name: loaderData.title,
            description: loaderData.seoDescription,
            provider: { "@type": "Organization", name: "Triyash Media" },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: loaderData.title,
              itemListElement: loaderData.offerings.map((o) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: o },
              })),
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="section container-luxe text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl">Service not found</h1>
      <Link to="/services" className="mt-6 inline-block text-gold underline">Back to all services</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="section container-luxe text-center">
      <h1 className="font-display text-4xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={service.cover} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/70 via-[var(--ink)]/60 to-[var(--background)]" />
        </div>
        <div className="container-luxe pt-32 pb-24 md:pt-40 md:pb-32 text-[var(--cream)]">
          <Link to="/services" className="eyebrow text-gold hover:opacity-80">← All services</Link>
          <p className="eyebrow mt-8 text-gold">{service.eyebrow}</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl md:text-2xl font-display italic text-white/85">
            {service.tagline}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe grid lg:grid-cols-[1.5fr_1fr] gap-16">
          <div>
            <p className="eyebrow mb-4">Overview</p>
            <p className="font-display text-2xl md:text-3xl leading-[1.35]">{service.intro}</p>
          </div>
          <aside className="glass rounded-3xl p-8 self-start">
            <p className="eyebrow mb-4">What's included</p>
            <ul className="space-y-3">
              {service.offerings.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-luxe">
          <p className="eyebrow mb-4">The process</p>
          <h2 className="font-display text-4xl md:text-5xl max-w-2xl">
            Four steps. No <span className="text-gradient-gold italic">improvisation</span>.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <div key={step.title} className="glass rounded-3xl p-7 hover-lift">
                <p className="font-display text-6xl text-gold/40">0{i + 1}</p>
                <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-luxe">
          <p className="eyebrow mb-4">The outcome</p>
          <div className="grid md:grid-cols-3 gap-5">
            {service.outcomes.map((o) => (
              <div key={o} className="rounded-3xl border border-gold/25 p-8 bg-gold/[0.03]">
                <p className="font-display text-xl leading-snug">{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-luxe grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Ready to talk?</h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Every engagement starts with a single call. Tell us about your brand, your goal, your timeline.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-ui font-medium text-[var(--ink)] hover-lift">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <p className="eyebrow mb-5">Explore more</p>
            <ul className="space-y-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: o.slug }}
                    className="group flex items-center justify-between gap-4 border-b border-border/50 pb-3 hover:border-gold transition-colors"
                  >
                    <span className="font-display text-xl group-hover:text-gold transition-colors">{o.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}