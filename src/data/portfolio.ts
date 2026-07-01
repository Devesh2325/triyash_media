import workHotel from "@/assets/work-hotel.jpg";
import workDrone from "@/assets/work-drone.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import workEditing from "@/assets/work-editing.jpg";
import workEvent from "@/assets/work-event.jpg";
import heroFilm from "@/assets/hero-film.jpg";

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Hospitality" | "Drone" | "Restaurants" | "Real Estate" | "Post" | "Events" | "Films";
  meta: string;
  cover: string;
  gallery: string[];
  brief: string;
  approach: string[];
  deliverables: string[];
  results: { value: string; label: string }[];
  testimonial?: { quote: string; author: string };
  year: string;
  seoTitle: string;
  seoDescription: string;
};

export const CASES: CaseStudy[] = [
  {
    slug: "maison-lumiere",
    title: "Maison Lumière — a hotel rewritten in light.",
    client: "Maison Lumière Boutique Hotel",
    category: "Hospitality",
    meta: "Brand film · Stills · Website",
    cover: workHotel,
    gallery: [workHotel, workEditing, heroFilm, workDrone],
    brief:
      "A 32-key boutique hotel in the Sahyadris wanted to move from an 82% OTA-dependent revenue mix to a majority direct-booked business — without lowering rates. They came to us with a five-year-old brand film that felt like it belonged to a different property.",
    approach: [
      "Rewrote the brand narrative around a single promise: a hotel that lives inside its own weather.",
      "Shot a two-day cinematic campaign across pre-dawn, golden hour and post-storm light.",
      "Rebuilt the website around one action — direct booking — with a story-led homepage.",
      "Rolled the imagery across paid, OTA, PR and organic in a single content system.",
    ],
    deliverables: [
      "One hero brand film (2:30)",
      "Six cutdowns for paid & social",
      "180 retouched stills across 12 categories",
      "Custom website with direct-booking engine",
      "Six months of monthly content",
    ],
    results: [
      { value: "+63%", label: "Direct bookings, 90 days" },
      { value: "4.1×", label: "Website conversion rate" },
      { value: "+38%", label: "Average daily rate" },
      { value: "72%", label: "Direct revenue mix" },
    ],
    testimonial: {
      quote:
        "We stopped feeling like a listing on a booking site. We started feeling like a place people search for by name.",
      author: "Ananya R., General Manager, Maison Lumière",
    },
    year: "2025",
    seoTitle: "Maison Lumière — Case Study — Triyash Media",
    seoDescription:
      "How we helped a boutique hotel triple direct bookings in 90 days with a rebrand, cinematic brand film and a story-led website.",
  },
  {
    slug: "misty-pines-resort",
    title: "Misty Pines Resort — aerials that sold out a season.",
    client: "Misty Pines Resort",
    category: "Drone",
    meta: "Drone film · Photography · Ads",
    cover: workDrone,
    gallery: [workDrone, workHotel, heroFilm, workEditing],
    brief:
      "A 60-key hill resort with a spectacular property, an outdated visual identity, and a marketing team burned out on Instagram content. The property deserved to be seen. It wasn't being.",
    approach: [
      "Deployed FPV and cinema drones for a three-day capture across weather windows.",
      "Built a story-led 90-second film + 40 short-form cutdowns.",
      "Fed the drone library into a Meta and YouTube advertising engine.",
    ],
    deliverables: [
      "One brand film (1:30)",
      "Forty vertical reels for Instagram & Shorts",
      "Ninety hero stills",
      "Paid ads production kit",
    ],
    results: [
      { value: "Sold out", label: "Monsoon season, 60 days" },
      { value: "9.2×", label: "Ad ROAS" },
      { value: "+310%", label: "Instagram followers" },
      { value: "12M+", label: "Combined organic views" },
    ],
    testimonial: {
      quote:
        "The drone reels literally sold out our monsoon season inside two months. We've never had a marketing asset work this hard.",
      author: "Vikrant S., Founder, Misty Pines Resort",
    },
    year: "2025",
    seoTitle: "Misty Pines Resort — Case Study — Triyash Media",
    seoDescription:
      "How cinematic drone films and vertical reels helped a hill resort sell out an entire monsoon season and 9.2× ad ROAS.",
  },
  {
    slug: "atelier-noir",
    title: "Atelier Noir — a restaurant identity, restated.",
    client: "Atelier Noir",
    category: "Restaurants",
    meta: "Brand identity · Photography · Web",
    cover: workRestaurant,
    gallery: [workRestaurant, workEditing, workHotel, workEvent],
    brief:
      "A modern-Indian tasting-menu restaurant relaunching after a two-year pandemic pause, with a new chef, a new menu and an audience that had moved on. They needed to feel new without discarding everything they'd built.",
    approach: [
      "Refreshed the identity system — same mark, new type, new tone of voice.",
      "Shot the entire menu twice: once for the restaurant, once for the way people actually look at food on a phone.",
      "Built a reservations-first website that felt like a magazine.",
    ],
    deliverables: [
      "Identity refresh & brand guidelines",
      "Full menu photography — 42 dishes",
      "Reservations-first website",
      "Launch campaign across paid & PR",
    ],
    results: [
      { value: "6 weeks", label: "Fully booked out" },
      { value: "+92%", label: "Instagram engagement" },
      { value: "5", label: "Editorial features (Vogue, Condé Nast)" },
      { value: "4.9★", label: "Google rating, sustained" },
    ],
    year: "2024",
    seoTitle: "Atelier Noir — Case Study — Triyash Media",
    seoDescription:
      "How a modern-Indian tasting-menu restaurant relaunched to a fully-booked calendar in six weeks with a brand refresh and cinematic menu photography.",
  },
  {
    slug: "costa-verde-villas",
    title: "Costa Verde — real estate that sells like art.",
    client: "Costa Verde Villas",
    category: "Real Estate",
    meta: "Architecture film · Stills · Sales collateral",
    cover: workRealestate,
    gallery: [workRealestate, workDrone, workHotel, workEditing],
    brief:
      "A boutique developer with eight ultra-luxury villas priced at ₹18–34 Cr. The properties were unlike anything else in the region; the marketing collateral looked like a spreadsheet with photos.",
    approach: [
      "Treated the marketing like a fashion campaign, not a real estate listing.",
      "Directed a three-day cinematic shoot with architectural discipline.",
      "Built a private, invite-only microsite for qualified buyers.",
    ],
    deliverables: [
      "Architecture film (2:15)",
      "One hundred and forty editorial stills",
      "Print-quality sales book",
      "Invite-only buyer microsite",
    ],
    results: [
      { value: "6 of 8", label: "Villas sold in 90 days" },
      { value: "+22%", label: "Achieved price vs. asking" },
      { value: "3", label: "International buyers" },
      { value: "₹0", label: "Broker commissions paid" },
    ],
    year: "2025",
    seoTitle: "Costa Verde Villas — Case Study — Triyash Media",
    seoDescription:
      "How cinematic real estate marketing sold six of eight ultra-luxury villas in 90 days at 22% above asking — with zero broker commissions.",
  },
  {
    slug: "riti-wedding-film",
    title: "Riti — a wedding film that became a family archive.",
    client: "Private commission",
    category: "Events",
    meta: "Documentary · Photography",
    cover: workEvent,
    gallery: [workEvent, workEditing, heroFilm, workHotel],
    brief:
      "A four-day destination wedding in Udaipur for a family who wanted a film they'd still want to watch in thirty years — not a highlight reel scored to a Coldplay song.",
    approach: [
      "Shot documentary-style, three cameras, no posing outside the ceremony itself.",
      "Followed a shot list built from a two-hour interview with the couple, not a template.",
      "Delivered a 22-minute long-form film + a 3-minute short + a family archive book.",
    ],
    deliverables: [
      "Long-form film (22:00)",
      "Short film (3:00)",
      "Six hundred archival stills",
      "Printed family archive book",
    ],
    results: [
      { value: "22 min", label: "Long-form film" },
      { value: "600+", label: "Archival stills" },
      { value: "9 refs", label: "Referred client families" },
    ],
    testimonial: {
      quote: "It doesn't feel like a wedding film. It feels like a memory somebody bottled.",
      author: "The bride's father",
    },
    year: "2024",
    seoTitle: "Riti Wedding Film — Case Study — Triyash Media",
    seoDescription:
      "How we produced a documentary-style wedding film in Udaipur designed to be a thirty-year family archive, not a highlight reel.",
  },
  {
    slug: "color-and-craft",
    title: "Colour & Craft — a post-production case study.",
    client: "Studio internal / mixed clients",
    category: "Post",
    meta: "Editing · Colour grade · Sound",
    cover: workEditing,
    gallery: [workEditing, workRestaurant, heroFilm, workHotel],
    brief:
      "A behind-the-scenes look at the post-production discipline that separates our films from the rest — how we approach editing, colour and sound as a system, not three separate departments.",
    approach: [
      "Every edit locked before colour begins — no going back.",
      "Three-pass colour grade: correction, creative, finishing.",
      "Sound designed to the picture, not chosen from a library.",
    ],
    deliverables: [
      "Standard post workflow doc",
      "Reference LUTs & grade templates",
      "Sound design toolkit",
      "Client review platform",
    ],
    results: [
      { value: "48 hrs", label: "Average turnaround: rough to fine cut" },
      { value: "3 passes", label: "Colour grade discipline" },
      { value: "100%", label: "In-house — no outsourced post" },
    ],
    year: "2025",
    seoTitle: "Colour & Craft — Post-production case study — Triyash Media",
    seoDescription:
      "A behind-the-scenes look at our post-production discipline: editing, colour and sound designed as a system.",
  },
];

export function getCase(slug: string) {
  return CASES.find((c) => c.slug === slug);
}