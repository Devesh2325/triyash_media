import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowUpRight, Camera, Clapperboard, Globe, LineChart, Megaphone, Palette, PenTool, PlayCircle, Rocket, Search, Share2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Triyash Media" },
      { name: "description", content: "Cinematic films, photography, branding, websites, SEO and growth marketing — a full creative studio under one roof." },
      { property: "og:title", content: "Services · Triyash Media" },
      { property: "og:description", content: "A full creative studio under one cinematic roof." },
    ],
  }),
  component: Services,
});

const GROUPS = [
  { icon: Clapperboard, title: "Film & Documentary", items: ["Documentary films", "Corporate films", "Short films", "Web series", "Music videos", "Promotional films", "Brand storytelling"] },
  { icon: Camera, title: "Photography", items: ["Hotel photography", "Resort photography", "Real estate photography", "Café photography", "Restaurant photography", "Product photography", "Event photography", "Drone photography"] },
  { icon: PlayCircle, title: "Videography", items: ["Cinematic videos", "Promotional videos", "Hotel & resort videos", "Travel films", "Drone videos", "Real estate videos", "Reels & shorts"] },
  { icon: Globe, title: "Website Development", items: ["Business websites", "Hotel websites", "Portfolio websites", "Landing pages", "Maintenance", "Speed & SEO optimization"] },
  { icon: Megaphone, title: "Digital Marketing", items: ["Social media marketing", "Brand promotion", "Content marketing", "Lead generation", "Email marketing", "Online reputation"] },
  { icon: Share2, title: "Social Media Management", items: ["Instagram & Facebook", "LinkedIn", "YouTube", "Monthly planning", "Daily posting", "Community management"] },
  { icon: Search, title: "Search Engine Optimization", items: ["Website SEO", "Local SEO", "Technical SEO", "Keyword research", "Google Business Profile", "Blog SEO", "Content writing"] },
  { icon: PenTool, title: "Content Creation", items: ["Blog writing", "Copywriting", "Website content", "Business profiles", "Script writing", "Documentary research"] },
  { icon: Palette, title: "Branding", items: ["Logo design", "Brand identity systems", "Company profiles", "Business portfolios", "Brochures", "Brand consulting"] },
  { icon: Rocket, title: "Hospitality Marketing", items: ["Hotel branding", "Resort promotion", "Homestay marketing", "Café & restaurant branding", "Yoga & wellness", "Tourism campaigns"] },
  { icon: LineChart, title: "Advertising", items: ["Meta Ads", "Google Ads", "YouTube promotion", "Launch campaigns", "Creative production"] },
  { icon: Rocket, title: "Business Growth", items: ["Business consultation", "Marketing planning", "Growth strategy", "Customer engagement", "Long-term brand building"] },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title={<>From a single frame to a <span className="text-gradient-gold italic">whole brand</span>.</>}
        copy="Twelve disciplines, one studio. Engage us for a specific service or as your long-term creative partner — every engagement is bespoke."
      />
      <section className="section pt-4">
        <div className="container-luxe grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map(({ icon: Icon, title, items }) => (
            <div key={title} className="glass rounded-3xl p-7 hover-lift">
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gold/15 text-gold">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />{i}
                  </li>
                ))}
              </ul>
            </div>
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