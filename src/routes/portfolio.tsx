import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useState } from "react";
import workHotel from "@/assets/work-hotel.jpg";
import workDrone from "@/assets/work-drone.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import workEditing from "@/assets/work-editing.jpg";
import workEvent from "@/assets/work-event.jpg";
import heroFilm from "@/assets/hero-film.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Triyash Media" },
      { name: "description", content: "Selected cinematic films, photography and brand work for hospitality, real estate, restaurants and lifestyle brands." },
      { property: "og:title", content: "Portfolio · Triyash Media" },
      { property: "og:description", content: "Frames that turned into futures." },
      { property: "og:image", content: workHotel },
    ],
  }),
  component: Portfolio,
});

const FILTERS = ["All", "Hospitality", "Films", "Drone", "Real Estate", "Restaurants", "Events", "Post"] as const;

const ITEMS: { img: string; title: string; cat: typeof FILTERS[number]; meta: string }[] = [
  { img: workHotel, title: "Maison Lumière", cat: "Hospitality", meta: "Hotel · Film + Stills" },
  { img: workDrone, title: "Misty Pines Resort", cat: "Drone", meta: "Drone · Film" },
  { img: workRestaurant, title: "Atelier Noir", cat: "Restaurants", meta: "Food · Branding" },
  { img: workRealestate, title: "Costa Verde Villas", cat: "Real Estate", meta: "Architecture · Film" },
  { img: workEditing, title: "Color & Craft", cat: "Post", meta: "Editing · Grade" },
  { img: workEvent, title: "Riti Wedding Film", cat: "Events", meta: "Documentary · Edit" },
  { img: heroFilm, title: "Night Set", cat: "Films", meta: "Brand Film · Direction" },
  { img: workHotel, title: "The Palms Suite", cat: "Hospitality", meta: "Resort · Stills" },
  { img: workDrone, title: "Highland Above", cat: "Drone", meta: "Aerial · Travel" },
];

function Portfolio() {
  const [filter, setFilter] = useState<typeof FILTERS[number]>("All");
  const items = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={<>Selected work from the <span className="text-gradient-gold italic">studio</span>.</>}
        copy="A small slice of nine years of film, photography and brand work. Reach out for the case studies — most live behind a quiet shelf."
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
          {items.map((it, i) => (
            <div key={`${it.title}-${i}`} className="group relative overflow-hidden rounded-3xl aspect-[4/5]">
              <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/10 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-[var(--cream)]">
                <p className="eyebrow text-gold">{it.cat}</p>
                <h3 className="mt-1 font-display text-2xl">{it.title}</h3>
                <p className="text-xs text-white/70 mt-1">{it.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section" />
    </>
  );
}