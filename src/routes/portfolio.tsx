import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import { CASES } from "@/data/portfolio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const FILTERS = [
  "All",
  "Hospitality",
  "Drone",
  "Restaurants",
  "Real Estate",
  "Events",
  "Post",
  "AI Upcoming",
] as const;
type Filter = (typeof FILTERS)[number];

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Triyash Media" },
      {
        name: "description",
        content:
          "Selected case studies from Triyash Media — cinematic films, photography and brand work for hospitality, real estate, restaurants and lifestyle brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Portfolio — Triyash Media" },
      {
        property: "og:description",
        content: "Frames that turned into futures. Case studies from the studio.",
      },
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
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    poster?: string;
    title: string;
    slug: string;
  } | null>(null);
  const items = filter === "All" ? CASES : CASES.filter((c) => c.category === filter);
  const portfolioItems = items.flatMap((item) =>
    item.portfolioMedia?.map((media) => ({
      ...item,
      cardKey: `${item.slug}-${media.label}`,
      cardTitle: media.label,
      cardType: media.type ?? "image",
      cover: media.src,
      poster: media.type === "video" ? media.poster : undefined,
    })) ?? [{ ...item, cardKey: item.slug, cardTitle: item.title, cardType: "image" as const }],
  );
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Selected work from the <span className="text-gradient-gold italic">studio</span>.
          </>
        }
        copy="A slice of nine years of film, photography and brand work. Every project is a case study — tap any tile to read the full story."
      />
      <section className="container-luxe">
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 font-ui text-sm transition-colors ${
                filter === f
                  ? "bg-gold text-ink"
                  : "border border-border/60 hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioItems.map((it) =>
            it.cardType === "video" ? (
              <button
                key={it.cardKey}
                type="button"
                onClick={() =>
                  setActiveVideo({
                    src: it.cover,
                    poster: it.poster,
                    title: it.cardTitle,
                    slug: it.slug,
                  })
                }
                className="group relative overflow-hidden rounded-3xl aspect-4/5 text-left cursor-pointer"
              >
                <video
                  src={it.cover}
                  poster={it.poster}
                  muted
                  autoPlay
                  loop
                  playsInline
                  aria-label={`${it.cardTitle} — ${it.category}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--ink)/95 via-(--ink)/20 to-transparent" />
                <div className="absolute right-5 top-5 rounded-full border border-gold/50 bg-black/45 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                  Play Video
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream">
                  <p className="eyebrow text-gold">{it.category}</p>
                  <h3 className="mt-1 font-display text-2xl leading-tight">{it.cardTitle}</h3>
                  <p className="text-xs text-white/70 mt-1">{it.meta}</p>
                  <p className="mt-3 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to play →
                  </p>
                </div>
              </button>
            ) : (
              <Link
                key={it.cardKey}
                to="/portfolio/$slug"
                params={{ slug: it.slug }}
                className="group relative overflow-hidden rounded-3xl aspect-4/5"
              >
                <img
                  src={it.cover}
                  alt={`${it.cardTitle} — ${it.category}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-(--ink)/95 via-(--ink)/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream">
                  <p className="eyebrow text-gold">{it.category}</p>
                  <h3 className="mt-1 font-display text-2xl leading-tight">{it.cardTitle}</h3>
                  <p className="text-xs text-white/70 mt-1">{it.meta}</p>
                  <p className="mt-3 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    Read case study →
                  </p>
                </div>
              </Link>
            ),
          )}
        </div>
      </section>
      <Dialog open={Boolean(activeVideo)} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-5xl border-gold/20 bg-[var(--ink)] p-3 sm:p-4">
          {activeVideo ? (
            <div className="space-y-4">
              <div className="pr-10">
                <DialogTitle className="font-display text-2xl text-[var(--cream)]">
                  {activeVideo.title}
                </DialogTitle>
                <p className="mt-1 text-sm text-white/65">
                  Video starts automatically. Use the fullscreen control in the player if you want a larger view.
                </p>
              </div>
              <video
                src={activeVideo.src}
                poster={activeVideo.poster}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="max-h-[75vh] w-full rounded-2xl bg-black"
              />
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.28em] text-gold/80">Click play, pause, or fullscreen anytime</p>
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: activeVideo.slug }}
                  className="text-sm text-gold hover:underline"
                  onClick={() => setActiveVideo(null)}
                >
                  Read case study →
                </Link>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
      <section className="section" />
    </>
  );
}
