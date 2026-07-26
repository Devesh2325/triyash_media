import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { POSTS, getPost, type Post, type PostBlock } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): Post => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [] };
    const path = `/blog/${params.slug}`;
    return {
      meta: [
        { title: loaderData.seoTitle },
        { name: "description", content: loaderData.seoDescription },
        { property: "og:type", content: "article" },
        { property: "og:title", content: loaderData.seoTitle },
        { property: "og:description", content: loaderData.seoDescription },
        { property: "og:url", content: path },
        { property: "og:image", content: loaderData.cover },
        { property: "article:published_time", content: loaderData.isoDate },
        { property: "article:author", content: loaderData.author },
        { property: "article:section", content: loaderData.category },
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
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.seoDescription,
            image: loaderData.cover,
            datePublished: loaderData.isoDate,
            author: { "@type": "Organization", name: loaderData.author },
            publisher: {
              "@type": "Organization",
              name: "Triyash Media",
            },
            articleSection: loaderData.category,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="section container-luxe text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl">Post not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-gold underline">
        Back to Blog
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="section container-luxe text-center">
      <h1 className="font-display text-4xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogPost,
});

function renderBlock(b: PostBlock, i: number) {
  switch (b.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-16 mb-6 font-display text-3xl md:text-4xl leading-tight">
          {b.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-12 border-l-2 border-gold pl-6 md:pl-8">
          <p className="font-display italic text-2xl md:text-3xl leading-snug">"{b.text}"</p>
          {b.cite && <cite className="mt-4 block eyebrow not-italic">— {b.cite}</cite>}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="my-6 space-y-3">
          {b.items.map((it) => (
            <li key={it} className="flex items-start gap-3 text-lg leading-relaxed">
              <span className="mt-3 h-1 w-3 shrink-0 rounded-full bg-gold" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p key={i} className="my-5 text-lg leading-relaxed text-foreground/85">
          {b.text}
        </p>
      );
  }
}

function BlogPost() {
  const post = Route.useLoaderData() as Post;
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <section className="container-luxe pt-16 pb-8 max-w-3xl">
        <Link to="/blog" className="eyebrow text-gold hover:opacity-80">
          ← Blog
        </Link>
        <p className="eyebrow mt-8">{post.category}</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05]">{post.title}</h1>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-gold" /> {post.date}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" /> {post.readMinutes} min read
          </span>
          <span>· by {post.author}</span>
        </div>
      </section>

      <div className="container-luxe max-w-5xl">
        <div className="overflow-hidden rounded-3xl aspect-[16/9]">
          <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
        </div>
      </div>

      <article className="container-luxe max-w-3xl py-16">
        <p className="font-display text-xl md:text-2xl italic text-foreground/80 leading-snug border-b border-border/50 pb-8 mb-8">
          {post.excerpt}
        </p>
        {post.body.map(renderBlock)}
      </article>

      <section className="section pt-8">
        <div className="container-luxe">
          <p className="eyebrow mb-6">Keep reading</p>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
                <div className="overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                </div>
                <p className="mt-4 eyebrow">{p.category}</p>
                <h3 className="mt-2 font-display text-xl group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-ui font-medium text-[var(--ink)] hover-lift"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
