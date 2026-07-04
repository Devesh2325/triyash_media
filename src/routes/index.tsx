import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight, Camera, Clapperboard, Globe, LineChart, Megaphone,
  Palette, PenTool, PlayCircle, Search, Sparkles, Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroFilm from "@/assets/hero-film.jpg";
import workHotel from "@/assets/work-hotel.jpg";
import workDrone from "@/assets/work-drone.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import workEditing from "@/assets/work-editing.jpg";
import workEvent from "@/assets/work-event.jpg";
import founderAsset from "@/assets/founder.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triyash Media — We Don't Just Create Content. We Build Brands." },
      { name: "description", content: "A luxury creative house for cinematic films, photography, branding, websites and growth marketing." },
      { property: "og:title", content: "Triyash Media — Cinematic films, brands & growth" },
      { property: "og:description", content: "We don't just create content. We build brands." },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { icon: Clapperboard, title: "Film & Documentary", copy: "Cinematic stories that move people — and markets.", tags: ["Documentary", "Brand films", "Music videos"] },
  { icon: Camera, title: "Photography", copy: "Editorial frames for hotels, resorts, products and people.", tags: ["Hospitality", "Product", "Drone"] },
  { icon: PlayCircle, title: "Videography", copy: "Reels, promos and cinematic edits that travel further.", tags: ["Reels", "Promos", "Travel films"] },
  { icon: Palette, title: "Branding & Identity", copy: "Strategic logos, guidelines and brand worlds with soul.", tags: ["Identity", "Brand books", "Profiles"] },
  { icon: Globe, title: "Website Design & Build", copy: "Award-grade websites engineered for speed and story.", tags: ["Hotels", "Portfolios", "Landing"] },
  { icon: Search, title: "SEO & Content", copy: "Long-tail growth through technical SEO and editorial craft.", tags: ["Technical", "Local", "Content"] },
  { icon: Megaphone, title: "Digital Marketing", copy: "Paid, organic and influencer engines built around the brand.", tags: ["Meta Ads", "Google", "Influencer"] },
  { icon: PenTool, title: "Hospitality Marketing", copy: "Niche playbooks for hotels, resorts, cafés and tourism.", tags: ["Hotels", "Resorts", "Tourism"] },
  { icon: LineChart, title: "Business Growth", copy: "Consulting and roadmaps to scale beyond a single campaign.", tags: ["Strategy", "Funnels", "Retention"] },
];

const WORK = [
  { img: workHotel, label: "Hospitality", title: "Maison Lumière", meta: "Hotel · Film + Stills", size: "tall" },
  { img: workDrone, label: "Travel", title: "Misty Pines Resort", meta: "Drone · Film", size: "wide" },
  { img: workRestaurant, label: "Restaurants", title: "Atelier Noir", meta: "Food · Branding", size: "" },
  { img: workRealestate, label: "Real Estate", title: "Costa Verde Villas", meta: "Architecture · Film", size: "wide" },
  { img: workEditing, label: "Post", title: "Color & Craft", meta: "Editing · Grade", size: "" },
  { img: workEvent, label: "Events", title: "Riti Wedding Film", meta: "Documentary · Edit", size: "tall" },
];

const INDUSTRIES = ["Hotels", "Resorts", "Restaurants", "Real Estate", "Tourism", "Healthcare", "Education", "Corporate", "NGO", "Startups", "Personal Brands", "Government"];
const PROCESS = [
  { n: "01", t: "Discover", d: "Audits, interviews and immersive research to find the soul of the brand." },
  { n: "02", t: "Design", d: "Strategy, identity and creative direction — a single voice across every surface." },
  { n: "03", t: "Produce", d: "Cinematic production with our in-house crew, studio and post pipeline." },
  { n: "04", t: "Grow", d: "Launch, paid amplification and SEO compounding into long-term equity." },
];

const STATS = [
  { v: 320, suffix: "+", label: "Projects shipped" },
  { v: 180, suffix: "+", label: "Happy clients" },
  { v: 9, suffix: "yrs", label: "Of craft" },
  { v: 1200, suffix: "+", label: "Films produced" },
];

const TESTIMONIALS = [
  { quote: "Triyash didn't shoot a film — they re-framed our brand. Bookings tripled the quarter after launch.", name: "Aanya Sethi", role: "GM, Maison Lumière" },
  { quote: "The most thoughtful creative partner we've worked with. Every frame, every word, intentional.", name: "Rohit Khanna", role: "Founder, Costa Verde" },
  { quote: "Their hospitality marketing engine took us from invisible to fully booked. Cinematic and commercial.", name: "Priya Menon", role: "CMO, Misty Pines" },
];

const FAQ = [
  { q: "What kind of brands do you work with?", a: "Hospitality, lifestyle, real estate, tourism, healthcare and ambitious founders. If the brand has a soul, we want to film it." },
  { q: "Do you take on small or single-service projects?", a: "Yes — from a single film to a full multi-year retainer. We tailor the engagement to the brand's stage." },
  { q: "Where are you based and do you travel?", a: "Studios in Pune & Mumbai; we shoot worldwide. Roughly half of our work happens on location." },
  { q: "How long does a project usually take?", a: "A flagship film: 4–6 weeks. A website or brand identity: 4–8 weeks. We move fast without sacrificing craft." },
];

function useCounter(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0; const start = performance.now();
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
        {n.toLocaleString()}{suffix}
      </div>
      <div className="mt-2 eyebrow">{label}</div>
    </motion.div>
  );
}

function Index() {
  return (
    <div className="-mt-20">
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroFilm}
          alt="Cinematic film set"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />

        <div className="container-luxe relative z-10 pb-20 pt-44 grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-8"
          >
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-10 bg-gold" /> A cinematic creative house · Est. 2017
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.95] tracking-tight">
              We don't just create <span className="italic text-gradient-gold">content.</span>
              <br />We build <span className="text-gradient-gold">brands</span> with soul.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed">
              Triyash Media is a luxury studio for cinematic films, editorial photography,
              brand identity and growth — built for hotels, lifestyle labels and the founders
              shaping what comes next.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 font-ui font-medium text-[var(--ink)] hover-lift">
                Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-3 rounded-full border border-gold/40 px-7 py-4 font-ui text-foreground/90 hover:border-gold hover:text-gold transition-colors">
                <PlayCircle className="h-4 w-4" /> See the reel
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 grid grid-cols-2 gap-5 lg:pb-4"
          >
            {[
              ["320+", "Films delivered"],
              ["180+", "Brands shaped"],
              ["28", "Cities filmed"],
              ["9 yrs", "Of craft"],
            ].map(([v, l]) => (
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
          {[...Array(2)].flatMap((_, k) => ["Documentary", "✦", "Hospitality", "✦", "Brand Films", "✦", "Editorial", "✦", "Drone", "✦", "Identity", "✦", "Growth", "✦", "SEO", "✦"].map((w, i) => (
            <span key={`${k}-${i}`} className={w === "✦" ? "text-gold" : ""}>{w}</span>
          )))}
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
            <Link to="/services" className="inline-flex items-center gap-2 text-gold font-ui text-sm group">
              All capabilities <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, copy, tags }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="glass rounded-3xl p-7 hover-lift group"
              >
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground/30 group-hover:text-gold transition-colors" />
                </div>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="text-[0.7rem] tracking-wider uppercase rounded-full border border-border/60 px-3 py-1 text-foreground/70">{t}</span>
                  ))}
                </div>
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
              <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-2xl">Frames that turned into futures.</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-gold font-ui text-sm group">
              Full portfolio <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[14rem] md:auto-rows-[16rem] gap-4">
            {WORK.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className={`group relative overflow-hidden rounded-3xl ${
                  w.size === "wide" ? "col-span-2" : ""
                } ${w.size === "tall" ? "row-span-2" : ""}`}
              >
                <img src={w.img} alt={w.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/20 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-[var(--cream)]">
                  <p className="text-[0.7rem] tracking-[0.22em] uppercase text-gold">{w.label}</p>
                  <h3 className="mt-1 font-display text-2xl">{w.title}</h3>
                  <p className="text-xs text-white/70 mt-1">{w.meta}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container-luxe grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <p className="eyebrow">Industries</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Built for brands that move people.</h2>
            <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
              We specialize in hospitality, lifestyle and ambition — but the craft travels.
              Wherever the story needs to feel cinematic, we belong.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="rounded-full border border-gold/30 px-5 py-2.5 font-ui text-sm text-foreground/85 hover:bg-gold hover:text-[var(--ink)] hover:border-gold transition-colors">
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
          <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl">A studio process built around one thing — your brand's truth.</h2>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-3xl overflow-hidden">
            {PROCESS.map((p) => (
              <div key={p.n} className="bg-card p-8 hover:bg-[color-mix(in_oklab,var(--gold)_8%,var(--card))] transition-colors">
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
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-accent/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-gold/20 shadow-luxe">
              <img src={founderAsset} alt="Founder, Triyash Media" className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[var(--ink)]/90 to-transparent text-[var(--cream)]">
                <p className="eyebrow text-gold">Founder & Director</p>
                <p className="font-display text-2xl mt-1">Triyash Media & Production</p>
              </div>
            </div>
          </motion.div>
          <div>
            <p className="eyebrow">Founder's note</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              "I built Triyash media to make Indian brands look like the global ones we admire — without losing our soul."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From a single camera and a notebook to a studio shipping work across hospitality,
              lifestyle and culture — Triyash Media exists at the intersection of cinema and commerce.
              Every project is a small attempt to raise the bar for what an Indian creative house can be.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/about" className="rounded-full border border-gold/40 px-6 py-3 font-ui text-sm hover:border-gold hover:text-gold transition-colors">Read the story</Link>
              <Link to="/contact" className="rounded-full bg-gold px-6 py-3 font-ui text-sm font-medium text-[var(--ink)] hover-lift">Work with us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((s) => <Stat key={s.label} value={s.v} suffix={s.suffix} label={s.label} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-luxe">
          <p className="eyebrow">Kind words</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl max-w-3xl">From the founders & GMs we partner with.</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass rounded-3xl p-8 hover-lift">
                <div className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-5 font-display text-xl leading-snug">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid place-items-center h-11 w-11 rounded-full bg-gold/20 text-gold font-display">{t.name[0]}</div>
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
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">Things founders ask us first.</h2>
            <p className="mt-5 text-muted-foreground">Don't see your question? <Link to="/contact" className="text-gold hover:underline">Drop us a line</Link>.</p>
          </div>
          <div className="divide-y divide-border/60">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="cursor-pointer flex items-center justify-between gap-6 font-display text-xl list-none">
                  {f.q}
                  <span className="text-gold transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
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
              Let's build the next <span className="text-gradient-gold italic">unforgettable</span> brand.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
              Tell us about your studio, hotel, label or idea. We reply within one business day with a thoughtful note — never a template.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-gold px-8 py-4 font-ui font-medium text-[var(--ink)] hover-lift">Start the conversation</Link>
              <a href="mailto:info@triyashmedia.com" className="rounded-full border border-gold/40 px-8 py-4 font-ui hover:border-gold hover:text-gold transition-colors">info@triyashmedia.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
