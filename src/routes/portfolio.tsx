import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { CASES } from "@/data/portfolio";

const FILTERS = ["All", "Hospitality", "Drone", "Restaurants", "Real Estate", "Events", "Post"] as const;
type Filter = typeof FILTERS[number];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Triyash Media" },
      { name: "description", content: "Selected case studies from Triyash Media — cinematic films, photography and brand work for hospitality, real estate, restaurants and lifestyle brands." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Portfolio — Triyash Media" },
      { property: "og:description", content: "Frames that turned into futures. Case studies from the studio." },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: CASES[0].cover },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Portfolio — Triyash Media" },
      { name: "twitter:description", content: "Frames that turned into futures." },
      { name: "twitter:image", content: CASES[0].cover },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Triyash Media Portfolio",
          description: "Selected case studies from Triyash Media.",
          hasPart: CASES.map((c) => ({
            "@type": "CreativeWork",
            name: c.title,
            image: c.cover,
            about: c.category,
          })),
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = filter === "All" ? CASES : CASES.filter((c) => c.category === filter);
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={<>Selected work from the <span className="text-gradient-gold italic">studio</span>.</>}
        copy="A slice of nine years of film, photography and brand work. Every project is a case study — tap any tile to read the full story."
      />
      <section className="container-luxe">
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 font-ui text-sm transition-colors ${
                filter === f ? "bg-gold text-[var(--ink)]" : "border border-border/60 hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <Link
              key={it.slug}
              to="/portfolio/$slug"
              params={{ slug: it.slug }}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5]"
            >
              <img src={it.cover} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/95 via-[var(--ink)]/20 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-[var(--cream)]">
                <p className="eyebrow text-gold">{it.category}</p>
                <h3 className="mt-1 font-display text-2xl leading-tight">{it.title}</h3>
                <p className="text-xs text-white/70 mt-1">{it.meta}</p>
                <p className="mt-3 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">Read case study →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="section" />
    </>
  );
}