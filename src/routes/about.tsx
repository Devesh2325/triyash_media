import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import founderAsset from "@/assets/founder.png";
import executiveCreativeDirectorAsset from "@/assets/ECD_Image.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Triyash Media" },
      {
        name: "description",
        content:
          "The story, vision and values behind Triyash Media — a luxury creative house for cinematic films, brand and growth.",
      },
      { property: "og:title", content: "About Triyash Media" },
      { property: "og:description", content: "A studio built on cinema, craft and commerce." },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    t: "Craft over convenience",
    d: "We'd rather miss a deadline than ship a frame we don't believe in. Almost never happens — but the standard matters.",
  },
  {
    t: "Strategy is invisible",
    d: "The strongest creative is built on the deepest thinking. Our work looks effortless because the strategy did the heavy lifting.",
  },
  {
    t: "Quietly cinematic",
    d: "Restraint is the rarest luxury. We pull back so the story can breathe — and stay with you.",
  },
  {
    t: "Partners, not vendors",
    d: "We sign on for outcomes, not deliverables. Long-term partnership is the only way real brands get built.",
  },
];

const TIMELINE = [
  {
    y: "2017",
    t: "The first frame",
    d: "Triyash Media opens with one camera, one founder and a notebook full of films.",
  },
  {
    y: "2019",
    t: "Hospitality focus",
    d: "We narrow into hotels, resorts and lifestyle — and never looked back.",
  },
  {
    y: "2021",
    t: "Studio era",
    d: "Studio opens. A full in-house post pipeline, color suite and writers' room.",
  },
  {
    y: "2023",
    t: "Growth division",
    d: "SEO, performance and brand growth join the studio. Films + funnels under one roof.",
  },
  {
    y: "2026",
    t: "Worldwide",
    d: "320+ projects across 28 cities. Now shooting and shipping across three continents.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the studio"
        title={
          <>
            A cinematic creative house, built around{" "}
            <span className="text-gradient-gold italic">one obsession</span> — craft.
          </>
        }
        copy="Triyash Media is an Indian luxury studio for cinematic films, editorial photography, brand identity and growth. We work with founders, GMs and visionaries who want to build something that lasts."
      />

      <section id="founder-note" className="section pt-0 scroll-mt-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-gold/20 to-accent/20 blur-2xl" />
            <img
              src={founderAsset}
              alt="Founder"
              className="relative rounded-[2rem] border border-gold/20 shadow-luxe w-full h-auto"
            />
          </div>
          <div>
            <p className="eyebrow">Founder's message</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">
              "We're not here to make content. We're here to make something the brand can stand on
              for years."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              When I started Triyash, I had one rule: never ship work I wouldn't put my name to.
              Nine years later, with hundreds of films, dozens of brands and a studio full of
              incredible people, that rule still writes our calendar. We pick our partners
              carefully, and we go deep.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The studio exists at the intersection of cinema, brand and growth — three crafts that
              almost never sit in the same room. That intersection is our edge.
            </p>
          </div>
        </div>
      </section>

      <section id="executive-creative-director" className="section scroll-mt-24">
        <div className="container-luxe grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-2">
            <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-gold/20 to-accent/20 blur-2xl" />
            <img
              src={executiveCreativeDirectorAsset}
              alt="Executive Creative Director"
              className="relative rounded-[2rem] border border-gold/20 shadow-luxe w-full h-auto"
            />
          </div>
          <div className="lg:order-1">
            <p className="eyebrow">Creative director's message</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">
              "Every frame should feel intentional — beautiful enough to remember, clear enough to
              move people."
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Triyash Media, creativity begins with listening. We look for the human truth inside
              every brief, then shape it through image, rhythm and detail until the story feels
              unmistakably its own.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our role is to protect the idea from the first conversation to the final frame — and
              make sure it reaches people with the feeling it deserves.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-[color-mix(in_oklab,var(--card)_50%,transparent)]">
        <div className="container-luxe grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow">Our vision</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">
              Our vision is to build Triyash Media into one of the world's most respected and trusted film production companies, known for creating timeless stories that inspire humanity and leave a lasting legacy.
              We aspire to become a global home for storytellers, where creativity is valued, talent is nurtured, and meaningful opportunities are created for thousands of people across the film and entertainment industry.
              Through feature films, web series, documentaries, AI-powered cinema, and our future OTT platform, we aim to bring original Indian stories to audiences across the world while embracing innovation without compromising authenticity.
              We envision a future where Triyash Media is recognized not only for cinematic excellence but also for ethical leadership, respect for every language, every culture, every faith, and every community.
              Our dream is not simply to create successful films—it is to build a legacy of meaningful stories, create opportunities for generations of creators, and prove that honesty, hard work, and purpose can build a world-class production company.
            </h3>
          </div>
          <div>
            <p className="eyebrow">Our mission</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">

              At Triyash Media, our mission is to create meaningful cinema that inspires people, preserves culture, and tells stories that live beyond generations.
              We are committed to producing original feature films, web series, documentaries, and AI-powered cinematic experiences with honesty, creativity, and excellence.
              Our vision goes beyond making films. We aim to build a production company that creates opportunities for thousands of talented writers, filmmakers, artists, technicians, and creative professionals, empowering them to build meaningful careers through dedication, skill, and integrity.
              We are building a creative ecosystem where every story is respected, every voice has value, and talent is given the opportunity to shine—regardless of language, background, or religion.
              In the years ahead, we aspire to launch our own OTT platform to support independent storytellers and bring original Indian stories to audiences across the world.
              At Triyash Media, we believe that cinema has the power to educate, unite, inspire, and create positive change. Every film we create will be guided by truth, purpose, respect, and a commitment to excellence.
              We proudly respect every language, every culture, every faith, and every community. Our stories will always stand for humanity, unity, and the timeless values that bring people together.

            </h3>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-luxe">
          <p className="eyebrow">What we believe</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl max-w-3xl">
            Four quiet rules behind every project.
          </h2>
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

      <section className="section bg-ink text-cream">
        <div className="container-luxe">
          <p className="eyebrow">Journey</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Nine years, one quiet obsession.
          </h2>
          <div className="mt-14 relative pl-8 md:pl-0">
            <div className="absolute md:left-1/2 left-2 top-0 bottom-0 w-px bg-gold/30" />
            <div className="space-y-12">
              {TIMELINE.map((e, i) => (
                <div
                  key={e.y}
                  className={`md:grid md:grid-cols-2 md:gap-12 items-start ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
                >
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
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full bg-gold px-8 py-4 font-ui font-medium text-ink hover-lift"
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
