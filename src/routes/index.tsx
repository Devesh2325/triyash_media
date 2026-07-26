import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { SERVICES } from "@/data/services";
import { CASES } from "@/data/portfolio";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import heroFilm from "@/assets/hero-film.jpg";
import founderAsset from "@/assets/founder.png";
import executiveCreativeDirectorAsset from "@/assets/ECD_Image.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triyash Media — We Don't Just Create Content. We Build Brands." },
      {
        name: "description",
        content:
          "A luxury creative house for cinematic films, photography, branding, websites and growth marketing.",
      },
      { property: "og:title", content: "Triyash Media — Cinematic films, brands & growth" },
      { property: "og:description", content: "We don't just create content. We build brands." },
    ],
  }),
  component: Index,
});

const HOME_PORTFOLIO_ITEMS = CASES.flatMap((item) =>
  item.portfolioMedia?.map((media, index) => ({
    slug: item.slug,
    label: item.category,
    title: media.label,
    meta: item.meta,
    cardType: media.type ?? "image",
    cover: media.src,
    poster: media.type === "video" ? media.poster ?? item.cover : undefined,
    size:
      index === 0 && item.category !== "AI Upcoming"
        ? "tall"
        : index % 3 === 1
          ? "wide"
          : "",
  })) ?? [
    {
      slug: item.slug,
      label: item.category,
      title: item.title,
      meta: item.meta,
      cardType: "image" as const,
      cover: item.cover,
      poster: undefined,
      size: "",
    },
  ],
);

const INDUSTRIES = [
  "Hotels",
  "Resorts",
  "Restaurants",
  "Real Estate",
  "Tourism",
  "Healthcare",
  "Education",
  "Corporate",
  "NGO",
  "Startups",
  "Personal Brands",
  "Government",
];
const PROCESS = [
  {
    n: "01",
    t: "Discover",
    d: "Audits, interviews and immersive research to find the soul of the brand.",
  },
  {
    n: "02",
    t: "Design",
    d: "Strategy, identity and creative direction — a single voice across every surface.",
  },
  {
    n: "03",
    t: "Produce",
    d: "Cinematic production with our in-house crew, studio and post pipeline.",
  },
  {
    n: "04",
    t: "Grow",
    d: "Launch, paid amplification and SEO compounding into long-term equity.",
  },
];

const STATS = [
  { v: 320, suffix: "+", label: "Projects shipped" },
  { v: 180, suffix: "+", label: "Happy clients" },
  { v: 9, suffix: "yrs", label: "Of craft" },
  { v: 1200, suffix: "+", label: "Films produced" },
];

const TESTIMONIALS = [
  {
    quote:
      "Triyash didn't shoot a film — they re-framed our brand. Bookings tripled the quarter after launch.",
    name: "Aanya Sethi",
    role: "GM, Maison Lumière",
  },
  {
    quote:
      "The most thoughtful creative partner we've worked with. Every frame, every word, intentional.",
    name: "Rohit Khanna",
    role: "Founder, Costa Verde",
  },
  {
    quote:
      "Their hospitality marketing engine took us from invisible to fully booked. Cinematic and commercial.",
    name: "Priya Menon",
    role: "CMO, Misty Pines",
  },
];

const FAQ = [
  {
    q: "What is Triyash Media?",
    a: "Triyash Media is an independent Indian film production company focused on creating original feature films, web series, documentaries, and AI-powered cinematic experiences.",
  },
  {
    q: "What kind of projects does Triyash Media produce?",
    a: "We develop original feature films, web series, documentary films, brand films, and AI-powered cinematic projects that focus on meaningful storytelling.",
  },
  {
    q: "Where is Triyash Media based?",
    a: "Triyash Media is based in Uttarakhand, India.",
  },
  {
    q: "Can I collaborate with Triyash Media?",
    a: "We welcome collaborations with writers, filmmakers, artists, creative professionals, production partners, and organizations who share our vision for meaningful storytelling.",
  },
  {
    q: "Are your projects currently in production?",
    a: "Our current projects are in different stages of research, development, and pre-production. We will share official updates through our website and social media channels.",
  },
  {
    q: "Are your projects currently in production?",
    a: "Our current projects are in different stages of research, development, and pre-production. We will share official updates through our website and social media channels.",
  },

  {
    q: "How can I contact Triyash Media?",
    a: "You can contact us through the Contact page, email, or our official social media platforms.",
  },


];

function useCounter(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [run, setRun] = useState(false);
  const n = useCounter(value, run);
  return (
    <motion.div
      onViewportEnter={() => setRun(true)}
      viewport={{ once: true, margin: "-80px" }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-6xl text-gradient-gold">
        {n.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 eyebrow">{label}</div>
    </motion.div>
  );
}

function Index() {
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    poster?: string;
    title: string;
    slug: string;
  } | null>(null);

  return (
    <div className="-mt-20">
      {/* HERO */}
      <section className="relative min-h-svh flex items-end overflow-hidden">
        <img
          src={heroFilm}
          alt="Cinematic film set"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />

        <div className="container-luxe relative z-10 pb-20 pt-44 grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-8"
          >
            <p className="eyebrow flex items-center gap-3">
              {/* <span className="h-px w-10 bg-gold" /> An Independent Indian Film Production Company */}
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95] tracking-tight">
              An Independent <span className="italic text-gradient-gold">Indian.</span>
              <br />
              Film <span>Production</span>{" "}
              <span className="italic text-gradient-gold">Company</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
              Triyash Media is an independent Indian film production company creating original
              feature films, web series, documentaries and AI-powered cinematic experiences. We
              believe every meaningful film begins with an honest story and a clear purpose
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-ui font-medium text-ink hover-lift"
              >
                Explore Our Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-7 py-4 font-ui text-foreground/90 hover:border-gold hover:text-gold transition-colors"
              >
                <PlayCircle className="h-4 w-4" /> See the reels
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 grid grid-cols-2 gap-5s lg:pb-4"
          >
            {(
              [
                // ["320+", "Films delivered"],
                // ["180+", "Brands shaped"],
                // ["28", "Cities filmed"],
                // ["9 yrs", "Of craft"],
              ] as [string, string][]
            ).map(([v, l]) => (
              <div key={l} className="glass rounded-2xl p-5">
                <div className="font-display text-3xl text-gradient-gold">{v}</div>
                <div className="mt-1 text-xs text-muted-foreground tracking-wide">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section aria-hidden className="border-y border-border/30 py-7 overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-marquee font-display text-2xl md:text-3xl text-foreground/40">
          {[...Array(2)].flatMap((_, k) =>
            [
              "Documentary",
              "✦",
              "Hospitality",
              "✦",
              "Brand Films",
              "✦",
              "Editorial",
              "✦",
              "Drone",
              "✦",
              "Identity",
              "✦",
              "Growth",
              "✦",
              "SEO",
              "✦",
            ].map((w, i) => (
              <span key={`${k}-${i}`} className={w === "✦" ? "text-gold" : ""}>
                {w}
              </span>
            )),
          )}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-luxe">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow">What we craft</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight max-w-2xl">
                A full creative studio under one cinematic roof.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold font-ui text-sm group"
            >
              All capabilities{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ slug, icon: Icon, title, tagline, offerings }, i) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="glass rounded-3xl p-7 hover-lift group flex flex-col"
              >
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gold/15 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground italic leading-relaxed">
                  {tagline}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {offerings.map((offering) => (
                    <li key={offering} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                      {offering}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug }}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-gold group-hover:gap-2 transition-all"
                >
                  Read more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section bg-[color-mix(in_oklab,var(--card)_40%,transparent)]">
        <div className="container-luxe">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-2xl">
                Frames that turned into futures.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-gold font-ui text-sm group"
            >
              Full portfolio{" "}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[14rem] md:auto-rows-[16rem] gap-4">
            {HOME_PORTFOLIO_ITEMS.map((item, i) => (
              <motion.div
                key={`${item.slug}-${item.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl ${item.size === "wide" ? "col-span-2" : ""
                  } ${item.size === "tall" ? "row-span-2" : ""}`}
              >
                {item.cardType === "video" ? (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveVideo({
                        src: item.cover,
                        poster: item.poster,
                        title: item.title,
                        slug: item.slug,
                      })
                    }
                    className="block h-full w-full cursor-pointer text-left"
                  >
                    <video
                      src={item.cover}
                      poster={item.poster}
                      muted
                      autoPlay
                      loop
                      playsInline
                      aria-label={item.title}
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--ink)/85 via-(--ink)/20 to-transparent" />
                    <div className="absolute right-5 top-5 rounded-full border border-gold/50 bg-black/45 px-4 py-2 text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                      Play Video
                    </div>
                    <div className="absolute inset-0 p-5 flex flex-col justify-end text-cream">
                      <p className="text-[0.7rem] tracking-[0.22em] uppercase text-gold">
                        {item.label}
                      </p>
                      <h3 className="mt-1 font-display text-2xl">{item.title}</h3>
                      <p className="text-xs text-white/70 mt-1">{item.meta}</p>
                    </div>
                  </button>
                ) : (
                  <Link to="/portfolio/$slug" params={{ slug: item.slug }} className="block h-full">
                    <img
                      src={item.cover}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-(--ink)/85 via-(--ink)/20 to-transparent" />
                    <div className="absolute inset-0 p-5 flex flex-col justify-end text-cream">
                      <p className="text-[0.7rem] tracking-[0.22em] uppercase text-gold">
                        {item.label}
                      </p>
                      <h3 className="mt-1 font-display text-2xl">{item.title}</h3>
                      <p className="text-xs text-white/70 mt-1">{item.meta}</p>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Dialog open={Boolean(activeVideo)} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-5xl border-gold/20 bg-ink p-3 sm:p-4">
          {activeVideo ? (
            <div className="space-y-4">
              <div className="pr-10">
                <DialogTitle className="font-display text-2xl text-cream">
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
                <p className="text-xs uppercase tracking-[0.28em] text-gold/80">
                  Click play, pause, or fullscreen anytime
                </p>
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

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Built for brands that move people.
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              We specialize in hospitality, lifestyle and ambition — but the craft travels. Wherever
              the story needs to feel cinematic, we belong.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-gold/30 px-5 py-2.5 font-ui text-sm text-foreground/85 hover:bg-gold hover:text-ink hover:border-gold transition-colors"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-[color-mix(in_oklab,var(--accent)_8%,transparent)]">
        <div className="container-luxe">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl">
            A studio process built around one thing — your brand's truth.
          </h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden">
            {PROCESS.map((p) => (
              <div
                key={p.n}
                className="bg-card p-8 hover:bg-[color-mix(in_oklab,var(--gold)_8%,var(--card))] transition-colors"
              >
                <div className="font-display text-5xl text-gold/40">{p.n}</div>
                <h3 className="mt-4 font-display text-2xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-gold/20 via-transparent to-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-luxe">
              <img
                src={founderAsset}
                alt="Founder, Triyash Media"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-(--ink)/90 to-transparent text-cream">
                <p className="eyebrow text-gold">Founder & Director</p>
                <p className="font-display text-2xl mt-1">Ankit Singh</p>
              </div>
            </div>
          </motion.div>
          <div>
            <p className="eyebrow">Founder's note</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              "I started Triyash Media with a simple belief that meaningful stories can inspire people and preserve culture for future generations."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From a single camera and a notebook to a studio shipping work across hospitality,
              lifestyle and culture — Triyash Media exists at the intersection of cinema and
              commerce. Every project is a small attempt to raise the bar for what an Indian
              creative house can be.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                hash="founder-note"
                className="rounded-full border border-gold/40 px-6 py-3 font-ui text-sm hover:border-gold hover:text-gold transition-colors"
              >
                Read the story
              </Link>
              <Link
                to="/contact"
                className="rounded-full bg-gold px-6 py-3 font-ui text-sm font-medium text-ink hover-lift"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXECUTIVE CREATIVE DIRECTOR */}
      <section className="section bg-[color-mix(in_oklab,var(--card)_50%,transparent)]">
        <div className="container-luxe grid lg:grid-cols-2 gap-14 items-center">
          <div className="lg:order-2 relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-gold/20 via-transparent to-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-luxe">
              <img
                src={executiveCreativeDirectorAsset}
                alt="Executive Creative Director, Triyash Media"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-(--ink)/90 to-transparent text-cream">
                <p className="eyebrow text-gold">Executive Creative Director</p>
                <p className="font-display text-2xl mt-1">Sarthak Sood</p>
              </div>
            </div>
          </div>
          <div className="lg:order-1">
            <p className="eyebrow">Creative director's note</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              "Every creative decision should be intentional, so that the final product feels to the audience exactly as close as possible with the way the filmmaker intended.."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Triyash Media, creativity begins with listening. We look for the human truth inside
              every brief, then shape it through image, rhythm and detail until the story feels
              unmistakably its own.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/about"
                hash="executive-creative-director"
                className="rounded-full border border-gold/40 px-6 py-3 font-ui text-sm hover:border-gold hover:text-gold transition-colors"
              >
                Read the story
              </Link>
              <Link
                to="/contact"
                className="rounded-full bg-gold px-6 py-3 font-ui text-sm font-medium text-ink hover-lift"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS
      <section className="section bg-ink text-cream">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => <Stat key={s.label} value={s.v} suffix={s.suffix} label={s.label} />)}
        </div>
      </section>
      */}

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-luxe">
          <p className="eyebrow">Kind words</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl">
            From the founders & GMs we partner with.
          </h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass rounded-3xl p-8 hover-lift">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl leading-snug">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-full bg-gold/20 text-gold font-display">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-ui text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[color-mix(in_oklab,var(--card)_50%,transparent)]">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              Triyash Media FAQs.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Don't see your question?{" "}
              <Link to="/contact" className="text-gold hover:underline">
                Drop us a line
              </Link>
              .
            </p>
          </div>
          <div className="divide-y divide-border/60">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="cursor-pointer flex items-center justify-between gap-6 font-display text-xl list-none">
                  {f.q}
                  <span className="text-gold transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-luxe relative overflow-hidden rounded-[2.5rem] border border-gold/30 p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_65%)]" />
          <div className="relative">
            <Sparkles className="mx-auto h-7 w-7 text-gold" />
            <h2 className="mt-5 font-display text-4xl md:text-6xl leading-tight">
              Let's build the next <span className="text-gradient-gold italic">unforgettable</span>{" "}
              brand.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
              Tell us about your studio, hotel, label or idea. We reply within one business day with
              a thoughtful note — never a template.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-gold px-8 py-4 font-ui font-medium text-ink hover-lift"
              >
                Start the conversation
              </Link>
              <a
                href="mailto:info@triyashmedia.com"
                className="rounded-full border border-gold/40 px-8 py-4 font-ui hover:border-gold hover:text-gold transition-colors"
              >
                info@triyashmedia.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
