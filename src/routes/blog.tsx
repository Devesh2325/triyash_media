import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { PageHeader } from "@/components/site/PageHeader";
import { POSTS } from "@/data/blog";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

const PAGE_SIZE = 4;

const searchSchema = z.object({
  page: fallback(z.number().int().min(1), 1).default(1),
});

export const Route = createFileRoute("/blog")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Blog — Triyash Media" },
      {
        name: "description",
        content:
          "Field notes on cinema, brand strategy, hospitality marketing and creative craft from the Triyash Media studio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Blog — Triyash Media" },
      { property: "og:description", content: "Field notes on cinema, brand and culture." },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog — Triyash Media" },
      { name: "twitter:description", content: "Field notes on cinema, brand and culture." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Triyash Media Blog",
          description: "Field notes on cinema, brand and culture.",
          publisher: { "@type": "Organization", name: "Triyash Media" },
        }),
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  const { page } = Route.useSearch();
  const totalPages = Math.max(1, Math.ceil(POSTS.length / PAGE_SIZE));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * PAGE_SIZE;
  const items = POSTS.slice(start, start + PAGE_SIZE);
  const featured = current === 1 ? items[0] : null;
  const rest = current === 1 ? items.slice(1) : items;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Field notes on cinema, brand and{" "}
            <span className="text-gradient-gold italic">culture</span>.
          </>
        }
        copy="Monthly essays from the studio on craft, hospitality, branding and the business of building beautiful things."
      />
      <section className="container-luxe pb-8">
        {featured && (
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-center"
          >
            <div className="overflow-hidden rounded-3xl aspect-[4/3]">
              <img
                src={featured.cover}
                alt={featured.title}
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </div>
            <div>
              <span className="eyebrow">Featured · {featured.category}</span>
              <h2 className="mt-5 font-display text-3xl md:text-5xl leading-[1.1] group-hover:text-gold transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gold" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" />
                  {featured.readMinutes} min read
                </span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-gold font-ui text-sm">
                Read the essay <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        )}

        <div className="grid md:grid-cols-2 gap-10">
          {rest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
              <div className="overflow-hidden rounded-3xl aspect-[4/3]">
                <img
                  src={p.cover}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs">
                <span className="eyebrow">{p.category}</span>
                <span className="text-muted-foreground">
                  {p.date} · {p.readMinutes} min
                </span>
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl group-hover:text-gold transition-colors leading-snug">
                {p.title}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {p.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-24 pt-8">
        <nav
          className="flex items-center justify-between gap-4 border-t border-border/40 pt-8"
          aria-label="Pagination"
        >
          {current > 1 ? (
            <Link
              to="/blog"
              search={{ page: current - 1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Newer
            </Link>
          ) : (
            <span />
          )}
          <p className="eyebrow text-[0.65rem]">
            Page {current} of {totalPages}
          </p>
          {current < totalPages ? (
            <Link
              to="/blog"
              search={{ page: current + 1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm hover:border-gold hover:text-gold transition-colors"
            >
              Older <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </section>
    </>
  );
}
