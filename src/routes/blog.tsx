import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import workHotel from "@/assets/work-hotel.jpg";
import workDrone from "@/assets/work-drone.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workEditing from "@/assets/work-editing.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Triyash Media" },
      { name: "description", content: "Field notes on cinema, brand strategy, hospitality marketing and creative craft from the Triyash Media studio." },
      { property: "og:title", content: "Triyash Media Journal" },
      { property: "og:description", content: "Field notes on cinema, brand and culture." },
    ],
  }),
  component: Blog,
});

const POSTS = [
  { img: workHotel, cat: "Hospitality", title: "Why luxury hotels are quietly killing their own brand films.", date: "May 2026", read: "8 min" },
  { img: workDrone, cat: "Travel", title: "Drone cinema for resorts: a quiet revolution in storytelling.", date: "Apr 2026", read: "6 min" },
  { img: workRestaurant, cat: "Food", title: "The new visual language of fine-dining restaurants.", date: "Mar 2026", read: "5 min" },
  { img: workEditing, cat: "Craft", title: "Inside our color grade: how we shape mood frame by frame.", date: "Feb 2026", read: "9 min" },
];

function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title={<>Field notes on cinema, brand and <span className="text-gradient-gold italic">culture</span>.</>}
        copy="Once-a-month essays from the studio on craft, hospitality, branding and the business of building beautiful things."
      />
      <section className="container-luxe pb-24 grid md:grid-cols-2 gap-8">
        {POSTS.map((p) => (
          <article key={p.title} className="group">
            <div className="overflow-hidden rounded-3xl aspect-[4/3]">
              <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
            </div>
            <div className="mt-5 flex items-center gap-3 text-xs">
              <span className="eyebrow">{p.cat}</span>
              <span className="text-muted-foreground">{p.date} · {p.read}</span>
            </div>
            <h2 className="mt-3 font-display text-2xl md:text-3xl group-hover:text-gold transition-colors leading-snug">{p.title}</h2>
          </article>
        ))}
      </section>
    </>
  );
}