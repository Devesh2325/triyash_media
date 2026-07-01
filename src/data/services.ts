import serviceFilm from "@/assets/service-film.jpg";
import servicePhoto from "@/assets/service-photo.jpg";
import serviceVideo from "@/assets/service-videography.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceAds from "@/assets/service-ads.jpg";
import serviceGrowth from "@/assets/service-growth.jpg";
import {
  Camera,
  Clapperboard,
  Globe,
  LineChart,
  Megaphone,
  Palette,
  PlayCircle,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  eyebrow: string;
  cover: string;
  icon: LucideIcon;
  intro: string;
  offerings: string[];
  process: { title: string; copy: string }[];
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
};

export const SERVICES: Service[] = [
  {
    slug: "film-and-documentary",
    title: "Film & Documentary Production",
    tagline: "Cinematic storytelling that outlives the campaign.",
    eyebrow: "Craft",
    cover: serviceFilm,
    icon: Clapperboard,
    intro:
      "We produce brand films, documentaries and short films for hospitality, lifestyle and lifestyle-adjacent brands. Every frame is directed, lit and graded like a feature — because your audience decides in six seconds whether to keep watching.",
    offerings: [
      "Brand & corporate films",
      "Documentary storytelling",
      "Short films & web series",
      "Music videos & artist films",
      "Promotional & launch films",
      "Founder & culture stories",
    ],
    process: [
      { title: "Discovery", copy: "A single call to map the story, the audience and the frames only you can own." },
      { title: "Pre-production", copy: "Treatment, storyboard, casting, locations, schedule. Nothing improvised on set." },
      { title: "Direction", copy: "Cinema cameras, cinematic lighting, a director who's shot for the world's most-loved brands." },
      { title: "Post", copy: "Edit, sound design, colour grade and delivery in every ratio your channels need." },
    ],
    outcomes: [
      "12M+ combined views across delivered brand films",
      "Films used across paid, PR and sales for 2+ years on average",
      "3× lift in conversion when hero video replaces static imagery",
    ],
    seoTitle: "Documentary & Brand Film Production — Triyash Media",
    seoDescription:
      "Cinematic brand films, documentaries and short films for hospitality and lifestyle brands. Direction, cinematography, edit and colour under one roof.",
  },
  {
    slug: "photography",
    title: "Photography",
    tagline: "Stills that carry your brand for the next five years.",
    eyebrow: "Stills",
    cover: servicePhoto,
    icon: Camera,
    intro:
      "Hotel, resort, restaurant, product and lifestyle photography built around a single question: will this frame still feel modern in 2030? We shoot with the print, the pitch deck and the campaign in mind.",
    offerings: [
      "Hotel & resort photography",
      "Restaurant & café photography",
      "Real estate & architecture",
      "Product & e-commerce",
      "Lifestyle & campaign",
      "Event & documentary stills",
    ],
    process: [
      { title: "Shot list", copy: "We architect every frame against your booking journey, not a generic checklist." },
      { title: "Production", copy: "Lighting, styling, talent and a director on set to keep the aesthetic consistent." },
      { title: "Retouching", copy: "Elegant, restrained retouching. Never plastic, never overworked." },
      { title: "Delivery", copy: "Web, print, OTA and social crops delivered in a single organised library." },
    ],
    outcomes: [
      "Booking-page CTR up 42% on average after re-shoot",
      "Content library sized for 12+ months of marketing",
      "OTA-ready crops for Booking.com, Airbnb and Expedia",
    ],
    seoTitle: "Hotel, Restaurant & Brand Photography — Triyash Media",
    seoDescription:
      "Editorial photography for hotels, resorts, restaurants, real estate and lifestyle brands. Directed, styled and retouched for 5-year longevity.",
  },
  {
    slug: "videography",
    title: "Videography & Drone",
    tagline: "Aerials, reels and cinematic verticals for every channel.",
    eyebrow: "Motion",
    cover: serviceVideo,
    icon: PlayCircle,
    intro:
      "Beyond long-form films, we shoot the everyday content that keeps your channels alive — cinematic reels, drone aerials, travel films and vertical edits designed for how people actually watch.",
    offerings: [
      "Cinematic reels & shorts",
      "Drone & aerial cinematography",
      "Travel & destination films",
      "Hotel & resort walkthroughs",
      "Real estate video tours",
      "Vertical edits for Instagram & TikTok",
    ],
    process: [
      { title: "Concept", copy: "One idea, one hook, one reason to watch — before a single frame is shot." },
      { title: "Capture", copy: "FPV & cinema drones, gimbal rigs, and directors who know the algorithm." },
      { title: "Edit", copy: "Cuts scored to the beat, colour graded, delivered in every aspect ratio." },
      { title: "Rollout", copy: "A monthly content plan so the shoot fuels 30+ pieces of usable output." },
    ],
    outcomes: [
      "8× average watch-time on reels vs. previous benchmark",
      "Aerial footage licensed to OTAs and tourism boards",
      "One shoot day = one month of premium content",
    ],
    seoTitle: "Videography, Drone & Reels — Triyash Media",
    seoDescription:
      "Cinematic videography, drone aerials, travel films and vertical edits for hospitality, real estate and lifestyle brands.",
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    tagline: "Brand systems built to hold their value.",
    eyebrow: "Identity",
    cover: serviceBranding,
    icon: Palette,
    intro:
      "We design identities that behave like heirlooms — a considered mark, a defensible typographic system, and the guardrails to keep every touchpoint on-brand as you scale.",
    offerings: [
      "Brand strategy & positioning",
      "Logo & mark design",
      "Typographic & colour systems",
      "Brand guidelines",
      "Print collateral & packaging",
      "Company profiles & pitch decks",
    ],
    process: [
      { title: "Insight", copy: "Founder interviews, competitor teardown, positioning and a written brand narrative." },
      { title: "Direction", copy: "Two considered directions. Not seven. Not thirty. Ever." },
      { title: "System", copy: "Logo, palette, type, motion, iconography, photography direction, tone of voice." },
      { title: "Guardrails", copy: "A guidelines doc your future team can actually use." },
    ],
    outcomes: [
      "60% faster design turnaround for internal teams after guidelines",
      "Rebrands used verbatim for 3+ years on average",
      "Positioning strong enough to raise, sell or license against",
    ],
    seoTitle: "Branding & Identity Design — Triyash Media",
    seoDescription:
      "Brand strategy, logo design, identity systems and guidelines for founders, hotels and lifestyle brands. Built to hold value.",
  },
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Websites that convert on a phone in 3 seconds.",
    eyebrow: "Web",
    cover: serviceWeb,
    icon: Globe,
    intro:
      "Hand-crafted, lightning-fast websites for hotels, studios and premium brands. Every page is designed around the one action you want a visitor to take.",
    offerings: [
      "Hotel & resort booking sites",
      "Portfolio & studio sites",
      "Business & corporate sites",
      "High-converting landing pages",
      "Speed & SEO optimisation",
      "Ongoing maintenance & care",
    ],
    process: [
      { title: "Architecture", copy: "Sitemap, key journeys and conversion goals mapped before design." },
      { title: "Design", copy: "Editorial art direction. Typography treated like a brand asset." },
      { title: "Build", copy: "Modern React stack. 95+ Lighthouse. CMS your team can actually run." },
      { title: "Care", copy: "Uptime monitoring, performance reviews and quarterly content refreshes." },
    ],
    outcomes: [
      "Average Lighthouse: 96 · 98 · 100 · 100",
      "Direct-booking uplift of 3-6× within 90 days for hotels",
      "Sub-2s load on mobile, worldwide",
    ],
    seoTitle: "Website Design & Development — Triyash Media",
    seoDescription:
      "Cinematic, high-converting websites for hotels, studios and premium brands. Lightning-fast, SEO-first, hand-crafted.",
  },
  {
    slug: "seo-and-content",
    title: "SEO & Content",
    tagline: "Get found by the people ready to spend.",
    eyebrow: "Search",
    cover: serviceSeo,
    icon: Search,
    intro:
      "Technical SEO, editorial content and local search — the three levers that quietly turn your website into your best-performing sales channel.",
    offerings: [
      "Technical SEO audits",
      "Keyword & intent research",
      "On-page & content SEO",
      "Local SEO & Google Business Profile",
      "Blog & editorial content",
      "Link outreach",
    ],
    process: [
      { title: "Audit", copy: "Crawl, index and content audit. A ranked list of what's actually costing you traffic." },
      { title: "Strategy", copy: "A quarterly content calendar mapped to real search demand, not vibes." },
      { title: "Execution", copy: "Content, on-page, technical fixes and outreach — done, not just recommended." },
      { title: "Reporting", copy: "One dashboard. Ranking, traffic, leads. Reviewed live every month." },
    ],
    outcomes: [
      "Average 4× organic traffic growth in 6 months",
      "Top-3 rankings for high-intent city + service queries",
      "Content that ranks and converts, not just ranks",
    ],
    seoTitle: "SEO & Content Marketing — Triyash Media",
    seoDescription:
      "Technical SEO, editorial content and local search for hotels, restaurants and premium brands. Rank, convert, repeat.",
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    tagline: "A feed that looks like a magazine, not a marketplace.",
    eyebrow: "Social",
    cover: serviceSocial,
    icon: Megaphone,
    intro:
      "We plan, shoot and publish content for Instagram, LinkedIn and YouTube — with the visual standard of a print magazine and the discipline of a paid channel.",
    offerings: [
      "Monthly content planning",
      "Instagram & Facebook management",
      "LinkedIn & YouTube management",
      "Reels, shorts & carousels",
      "Community management",
      "Reporting & optimisation",
    ],
    process: [
      { title: "Positioning", copy: "A visual identity, tone of voice and content pillars — before we post anything." },
      { title: "Production", copy: "One monthly shoot day producing 30-60 pieces of premium content." },
      { title: "Publishing", copy: "Scheduled posts, live stories, and a reels-first strategy." },
      { title: "Growth", copy: "Monthly reports. Doubled down on what works, killed what doesn't." },
    ],
    outcomes: [
      "Average 220% follower growth in year one",
      "Reels that consistently outperform paid ads on cost-per-view",
      "DMs that turn into direct bookings",
    ],
    seoTitle: "Social Media Management — Triyash Media",
    seoDescription:
      "Instagram, LinkedIn and YouTube management for premium brands. Editorial content, disciplined publishing, real growth.",
  },
  {
    slug: "digital-advertising",
    title: "Digital Advertising",
    tagline: "Meta, Google and YouTube — profitably.",
    eyebrow: "Paid",
    cover: serviceAds,
    icon: LineChart,
    intro:
      "Performance advertising for hotels, D2C brands and services. Creative-led, tightly measured, and reported honestly — including when we recommend spending less.",
    offerings: [
      "Meta Ads (Instagram + Facebook)",
      "Google Search & Performance Max",
      "YouTube pre-roll & shorts ads",
      "Launch & seasonal campaigns",
      "Creative production for paid",
      "Landing page optimisation",
    ],
    process: [
      { title: "Setup", copy: "Pixel, conversions API, attribution and creative library — properly plumbed." },
      { title: "Creative", copy: "Ads produced from your existing brand assets. Every hook tested." },
      { title: "Launch", copy: "Structured campaigns, budget guardrails, and honest daily monitoring." },
      { title: "Scale", copy: "Weekly optimisation. Kill losers fast. Compound the winners." },
    ],
    outcomes: [
      "Average ROAS of 6-9× for hotels & D2C brands",
      "Cost-per-booking down 55% within 90 days",
      "Creative that also fuels organic — one library, two channels",
    ],
    seoTitle: "Meta, Google & YouTube Advertising — Triyash Media",
    seoDescription:
      "Performance advertising for hotels, D2C and premium services. Creative-led, tightly measured, ROAS-obsessed.",
  },
  {
    slug: "business-growth",
    title: "Business Growth & Consulting",
    tagline: "A partner in the room when the big decisions happen.",
    eyebrow: "Strategy",
    cover: serviceGrowth,
    icon: Rocket,
    intro:
      "For founders scaling from local brand to national name — a monthly retainer engagement covering brand, marketing, hiring and category positioning.",
    offerings: [
      "Category & brand positioning",
      "Marketing planning & budgeting",
      "Founder & leadership coaching",
      "Team hiring & structure",
      "Long-term brand building",
      "M&A & partnership strategy",
    ],
    process: [
      { title: "Immersion", copy: "A structured audit of brand, marketing, ops and category over 30 days." },
      { title: "Plan", copy: "A 12-month growth plan with weekly rituals, quarterly OKRs and one clear north star." },
      { title: "Partnership", copy: "Weekly working sessions with your leadership team. In the room, not on the sidelines." },
      { title: "Compounding", copy: "Every quarter, the plan gets sharper. Every year, the brand gets more valuable." },
    ],
    outcomes: [
      "Portfolio brands grown from 1 to 8 locations",
      "Founders raising from angels to series A on our positioning",
      "The clarity to say no to the wrong opportunities",
    ],
    seoTitle: "Business Growth Consulting — Triyash Media",
    seoDescription:
      "Long-term brand and growth partnership for founders scaling from local brand to national name. Monthly retainer, weekly rituals, quarterly OKRs.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}