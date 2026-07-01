import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Triyash Media" },
      { name: "description", content: "Nine disciplines under one cinematic roof — film, photography, videography, branding, web, SEO, social, advertising and growth consulting." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Services — Triyash Media" },
      { property: "og:description", content: "A full creative studio under one cinematic roof." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: SERVICES[0].cover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Services — Triyash Media" },
      { name: "twitter:description", content: "A full creative studio under one cinematic roof." },
      { name: "twitter:image", content: SERVICES[0].cover },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Triyash Media Services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: `/services/${s.slug}`,
          })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title={<>From a single frame to a <span className="text-gradient-gold italic">whole brand</span>.</>}
        copy="Nine disciplines, one studio. Engage us for a specific service or as your long-term creative partner — every engagement is bespoke."
      />
      <section className="section pt-4">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ slug, icon: Icon, title, tagline, offerings }) => (
            <Link
              key={slug}
              to="/services/$slug"
              params={{ slug }}
              className="glass rounded-3xl p-7 hover-lift group flex flex-col"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">{tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {offerings.slice(0, 5).map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />{i}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1 text-sm text-gold group-hover:gap-2 transition-all">
                Read more <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container-luxe text-center">
          <h2 className="font-display text-4xl md:text-5xl">Not sure which service fits?</h2>
          <p className="mt-4 text-muted-foreground">Send us a note — we'll architect the right engagement around your goal.</p>
          <Link to="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-ui font-medium text-[var(--ink)] hover-lift">
            Talk to the studio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}