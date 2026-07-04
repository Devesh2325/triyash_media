import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import founderAsset from "@/assets/founder.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Triyash Media" },
      { name: "description", content: "The story, vision and values behind Triyash Media — a luxury creative house for cinematic films, brand and growth." },
      { property: "og:title", content: "About Triyash Media" },
      { property: "og:description", content: "A studio built on cinema, craft and commerce." },
    ],
  }),
  component: About,
});

const VALUES = [
  { t: "Craft over convenience", d: "We'd rather miss a deadline than ship a frame we don't believe in. Almost never happens — but the standard matters." },
  { t: "Strategy is invisible", d: "The strongest creative is built on the deepest thinking. Our work looks effortless because the strategy did the heavy lifting." },
  { t: "Quietly cinematic", d: "Restraint is the rarest luxury. We pull back so the story can breathe — and stay with you." },
  { t: "Partners, not vendors", d: "We sign on for outcomes, not deliverables. Long-term partnership is the only way real brands get built." },
];

const TIMELINE = [
  { y: "2017", t: "The first frame", d: "Triyash Media opens with one camera, one founder and a notebook full of films." },
  { y: "2019", t: "Hospitality focus", d: "We narrow into hotels, resorts and lifestyle — and never looked back." },
  { y: "2021", t: "Studio era", d: "Studio opens. A full in-house post pipeline, color suite and writers' room." },
  { y: "2023", t: "Growth division", d: "SEO, performance and brand growth join the studio. Films + funnels under one roof." },
  { y: "2026", t: "Worldwide", d: "320+ projects across 28 cities. Now shooting and shipping across three continents." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the studio"
        title={<>A cinematic creative house, built around <span className="text-gradient-gold italic">one obsession</span> — craft.</>}
        copy="Triyash Media is an Indian luxury studio for cinematic films, editorial photography, brand identity and growth. We work with founders, GMs and visionaries who want to build something that lasts."
      />

      <section className="section pt-0">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-gold/20 to-accent/20 blur-2xl" />
            <img src={founderAsset} alt="Founder" className="relative rounded-[2rem] border border-gold/20 shadow-luxe w-full h-auto" />
          </div>
          <div>
            <p className="eyebrow">Founder's message</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">
              "We're not here to make content. We're here to make something the brand can stand on for years."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              When I started Triyash, I had one rule: never ship work I wouldn't put my name to. Nine years later,
              with hundreds of films, dozens of brands and a studio full of incredible people, that rule still
              writes our calendar. We pick our partners carefully, and we go deep.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The studio exists at the intersection of cinema, brand and growth — three crafts that almost never
              sit in the same room. That intersection is our edge.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[color-mix(in_oklab,var(--card)_50%,transparent)]">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">Our vision</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">To make Indian brands look as cinematic as the world's best — and as deeply rooted as the cultures they come from.</h3>
          </div>
          <div>
            <p className="eyebrow">Our mission</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">Pair strategy with craft, and craft with growth — so every story we tell compounds into real brand equity.</h3>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <p className="eyebrow">What we believe</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-3xl">Four quiet rules behind every project.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {VALUES.map((v, i) => (
              <div key={v.t} className="glass rounded-3xl p-8 hover-lift">
                <div className="font-display text-5xl text-gold/40">0{i + 1}</div>
                <h3 className="mt-3 font-display text-2xl">{v.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-luxe">
          <p className="eyebrow">Journey</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Nine years, one quiet obsession.</h2>
          <div className="mt-14 relative pl-8 md:pl-0">
            <div className="absolute md:left-1/2 left-2 top-0 bottom-0 w-px bg-gold/30" />
            <div className="space-y-12">
              {TIMELINE.map((e, i) => (
                <div key={e.y} className={`md:grid md:grid-cols-2 md:gap-12 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                    <div className="font-display text-5xl text-gradient-gold">{e.y}</div>
                    <h3 className="mt-2 font-display text-2xl">{e.t}</h3>
                  </div>
                  <p className="mt-2 md:mt-3 text-white/70 leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe text-center">
          <h2 className="font-display text-4xl md:text-5xl">Let's build the next chapter.</h2>
          <Link to="/contact" className="mt-7 inline-flex rounded-full bg-gold px-8 py-4 font-ui font-medium text-[var(--ink)] hover-lift">Start a project</Link>
        </div>
      </section>
    </>
  );
}