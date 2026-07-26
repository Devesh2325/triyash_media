import workHotel from "@/assets/work-hotel.jpg";
import workDrone from "@/assets/work-drone.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";
import workEditing from "@/assets/work-editing.jpg";
import workEvent from "@/assets/work-event.jpg";
import workRealestate from "@/assets/work-realestate.jpg";
import heroFilm from "@/assets/hero-film.jpg";
import serviceSeo from "@/assets/service-seo.jpg";

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  isoDate: string;
  readMinutes: number;
  cover: string;
  author: string;
  body: PostBlock[];
  seoTitle: string;
  seoDescription: string;
};

export const POSTS: Post[] = [
  {
    slug: "why-luxury-hotels-are-quietly-killing-their-own-brand-films",
    title: "Why luxury hotels are quietly killing their own brand films.",
    excerpt:
      "The most common mistake we see in hotel marketing isn't cheap production — it's a beautiful film that speaks to the wrong person. Here's how to fix it.",
    category: "Hospitality",
    date: "May 2026",
    isoDate: "2026-05-14",
    readMinutes: 8,
    cover: workHotel,
    author: "Studio Editorial",
    seoTitle: "Why luxury hotels are quietly killing their own brand films — Triyash Media",
    seoDescription:
      "Most hotel brand films look beautiful and convert nobody. Here's the strategic mistake behind it and how to fix it without spending more.",
    body: [
      {
        type: "p",
        text: "We audit roughly one hotel brand film a week. Most of them share the same problem — and it isn't budget.",
      },
      {
        type: "p",
        text: 'The typical brief goes something like: "we want something cinematic, aspirational, and emotional." The output is technically beautiful. Slow dolly of a lit facade. A wine glass, backlit. A couple laughing on a terrace at 4 p.m. Everything the director learned in film school, executed with taste.',
      },
      { type: "p", text: "And it converts nobody." },
      { type: "h2", text: "The mistake: filming for the awards panel, not the traveller" },
      {
        type: "p",
        text: "The tell is always the same. Every frame is a hotel showing off to other hotels. It's beautiful, it's tasteful — and it's aimed at an audience that will never book a room.",
      },
      {
        type: "p",
        text: "Real travellers make decisions the way real people make decisions: fast, emotionally, on a phone, in a moment of tension between what they want and what they can afford. The brand film has to close that gap in six seconds. Most hotel films spend the first fifteen seconds proving that the director owns a good camera.",
      },
      {
        type: "quote",
        text: "A brand film that wins awards but doesn't book rooms is a portfolio piece for the director. Not an asset for the hotel.",
        cite: "Priyansh Bhatia, Founder",
      },
      { type: "h2", text: "The fix: three questions before you write the treatment" },
      {
        type: "list",
        items: [
          "What is the single emotional promise this property makes that no competitor can copy?",
          "What is the traveller giving up in the next six months to stay here?",
          "What is the exact frame that shows both, at once, in silence?",
        ],
      },
      {
        type: "p",
        text: "Answer those three questions and you've written 80% of the treatment. Everything else — the drone shot, the food montage, the couple on the terrace — is service to that one frame.",
      },
      {
        type: "p",
        text: "The best hotel films we've made in the last five years all pass this test. So do the ones that consistently drive direct bookings. It's not a coincidence.",
      },
      { type: "h2", text: "What we do differently" },
      {
        type: "p",
        text: "Every brand film we shoot starts with a one-page treatment that answers those three questions in plain English. If we can't answer them, we don't shoot — no matter how big the budget. That discipline is the entire difference between a beautiful film and a booked hotel.",
      },
    ],
  },
  {
    slug: "drone-cinema-for-resorts-a-quiet-revolution",
    title: "Drone cinema for resorts: a quiet revolution in storytelling.",
    excerpt:
      "FPV drones changed what a two-minute resort film can feel like. But most operators are still shooting like it's 2018.",
    category: "Travel",
    date: "April 2026",
    isoDate: "2026-04-02",
    readMinutes: 6,
    cover: workDrone,
    author: "Studio Editorial",
    seoTitle: "Drone cinema for resorts: a quiet revolution — Triyash Media",
    seoDescription:
      "How FPV and cinema drones transformed resort storytelling — and why most operators are still shooting like it's 2018.",
    body: [
      {
        type: "p",
        text: "In 2018, drone footage for a resort meant an orbit shot of the pool, a top-down of the beach, and a slow reveal of the sunset. Beautiful in isolation. Interchangeable in aggregate.",
      },
      {
        type: "p",
        text: "In 2026, the drone is a director's camera. FPV rigs weave through infinity pools, chase a jeep down a mountain road, then break through a curtain into a candle-lit dinner. The audience doesn't feel like they're watching drone footage. They feel like they're moving through the property.",
      },
      { type: "h2", text: "The technical shift, in one paragraph" },
      {
        type: "p",
        text: "Cinema drones now carry the same sensors as our A-cameras. FPV rigs are stable enough for indoor work. Software-defined obstacle avoidance means we can fly closer to guests and structure without spooking either. The result: sequences that were unthinkable, or wildly expensive, five years ago are now a normal shoot day.",
      },
      { type: "h2", text: "The creative shift is the real story" },
      {
        type: "p",
        text: "Because the technology is trivial, the differentiator has moved back to direction. The best resort films of the last two years aren't the ones with the fanciest drones — they're the ones that treat the drone like an invisible character with a point of view.",
      },
      {
        type: "list",
        items: [
          "One long take that shows the whole property, not seventeen orbits.",
          "A drone that follows a specific guest through a specific afternoon.",
          "A shot that starts wide, dives into a moment, and pulls back before the audience realises they've been moved.",
        ],
      },
      { type: "p", text: "That's the revolution. The rest is hardware." },
    ],
  },
  {
    slug: "the-new-visual-language-of-fine-dining",
    title: "The new visual language of fine-dining restaurants.",
    excerpt:
      "The dark, moody, over-saturated food shot is finally dead. What's replacing it looks a lot like editorial fashion photography.",
    category: "Food",
    date: "March 2026",
    isoDate: "2026-03-10",
    readMinutes: 5,
    cover: workRestaurant,
    author: "Studio Editorial",
    seoTitle: "The new visual language of fine-dining restaurants — Triyash Media",
    seoDescription:
      "The dark, moody food shot is finally dead. What's replacing it looks a lot like editorial fashion photography. Here's what changed.",
    body: [
      {
        type: "p",
        text: "For most of the last decade, food photography was ruled by one aesthetic: dark, moody, over-saturated, shot from above, with the chef's hand entering the frame from the right.",
      },
      {
        type: "p",
        text: "It's finally dead. What's replacing it is more interesting than what it replaced.",
      },
      { type: "h2", text: "The new grammar" },
      {
        type: "list",
        items: [
          "Natural light, treated with the discipline of fashion editorial.",
          "The plate as one element of a wider environment — not the whole frame.",
          "Grain restored. Digital sharpness quietly removed.",
          "The chef and the guest, not just the food.",
        ],
      },
      {
        type: "p",
        text: "The shift makes sense. When every restaurant looks the same on Instagram, the restaurants that look like editorial magazines stand out. And the ones that treat their food photography like brand photography — same crew, same director, same visual system as the interiors, the menu, the website — quietly compound advantage.",
      },
    ],
  },
  {
    slug: "inside-our-colour-grade",
    title: "Inside our colour grade: how we shape mood frame by frame.",
    excerpt:
      "Colour is the last conversation a viewer has with your film before they decide how they feel about it.",
    category: "Craft",
    date: "February 2026",
    isoDate: "2026-02-04",
    readMinutes: 9,
    cover: workEditing,
    author: "Studio Editorial",
    seoTitle: "Inside our colour grade — Triyash Media",
    seoDescription:
      "How we approach colour grading brand films and documentaries — the process, the tools, and the philosophy that shapes mood frame by frame.",
    body: [
      {
        type: "p",
        text: "Colour is the last conversation your viewer has with the film before they decide how they feel about it. Everything else is negotiable. Colour isn't.",
      },
      { type: "h2", text: "The three-pass grade" },
      {
        type: "p",
        text: "We grade in three passes. The first is correction: matching cameras, fixing exposure, honouring skin tones. The second is creative: the film's palette, its temperature, its emotional register. The third is finishing: subtle vignettes, halation, film grain, and the tiny touches that separate a graded film from a colour-corrected one.",
      },
      {
        type: "quote",
        text: "A good grade is invisible. A great grade is the reason you can't look away.",
        cite: "Studio grading room",
      },
      { type: "h2", text: "The tools matter less than you'd think" },
      {
        type: "p",
        text: "We work in DaVinci Resolve on calibrated reference monitors, but the tool is 10% of the outcome. The other 90% is the colourist's eye and the director's willingness to protect the palette when the client's team asks for it to be brighter, warmer, or more like a competitor.",
      },
      { type: "p", text: "The best colour work is a conversation, not a control panel." },
    ],
  },
  {
    slug: "seo-for-hotels-a-2026-playbook",
    title: "SEO for hotels: a 2026 playbook.",
    excerpt:
      "Google's local pack decides your room nights. Here's how the best-performing independent hotels win it — without spending a fortune on ads.",
    category: "Growth",
    date: "January 2026",
    isoDate: "2026-01-19",
    readMinutes: 10,
    cover: serviceSeo,
    author: "Studio Editorial",
    seoTitle: "SEO for hotels: a 2026 playbook — Triyash Media",
    seoDescription:
      "How independent hotels win Google's local pack, direct bookings and organic traffic in 2026 — the playbook we use for our clients.",
    body: [
      {
        type: "p",
        text: 'For independent hotels, the local pack is the entire game. Rank in the top three for "boutique hotel Pune" and your calendar fills itself. Miss it and you\'re funding Booking.com forever.',
      },
      { type: "h2", text: "The three levers" },
      {
        type: "list",
        items: [
          "A Google Business Profile treated like your homepage: photos, posts, Q&A, reviews.",
          "A website that answers city + intent + property queries with real content, not marketing copy.",
          "A steady rhythm of authentic reviews. Not review-farming — actual guest asks, done well.",
        ],
      },
      {
        type: "p",
        text: "That's roughly 80% of what moves the needle. The other 20% is technical: fast site, structured data, clean URLs, mobile-first design, no janky third-party booking widgets.",
      },
      { type: "h2", text: "What changed in 2026" },
      {
        type: "p",
        text: "Google's AI-generated overviews now sit above the local pack for most travel queries. Ranking is no longer enough — you need to be quoted. The hotels winning right now are the ones with genuine editorial content on their sites: neighbourhood guides, chef interviews, sustainability reports. Content that AI wants to cite.",
      },
      {
        type: "p",
        text: 'The rules of the game have moved from "be visible" to "be quotable." The good news: quotable content also converts better with humans.',
      },
    ],
  },
  {
    slug: "documentary-storytelling-for-founders",
    title: "Documentary storytelling for founders — a new marketing category.",
    excerpt:
      "The founder documentary is the most under-priced marketing asset of the decade. Here's why every serious founder should have one.",
    category: "Brand",
    date: "December 2025",
    isoDate: "2025-12-08",
    readMinutes: 7,
    cover: heroFilm,
    author: "Studio Editorial",
    seoTitle: "Documentary storytelling for founders — Triyash Media",
    seoDescription:
      "Why the founder documentary is the most under-priced marketing asset of the decade — and how to make one that isn't cringe.",
    body: [
      {
        type: "p",
        text: "Every serious founder has an audience of at least a thousand people who care what they think — customers, investors, employees, journalists, peers. The founder documentary is the most under-priced way to speak to all of them at once.",
      },
      { type: "h2", text: "Why now" },
      {
        type: "p",
        text: "Podcasts trained the audience. YouTube made the format viable. Cinema-quality cameras got cheap enough that a two-day shoot produces a film that would have cost a hundred thousand dollars a decade ago. The window is open.",
      },
      { type: "h2", text: "The three failure modes" },
      {
        type: "list",
        items: [
          "The corporate video pretending to be a documentary. The audience can smell it.",
          "The vanity project: 40 minutes of the founder monologuing without a story.",
          "The over-produced hero edit that feels like a Netflix trailer for a founder nobody has heard of.",
        ],
      },
      {
        type: "p",
        text: "The good ones share a trait: they treat the founder as a character, not a spokesperson. Character has flaws, moments of doubt, and a real stake. Spokespeople have talking points. Audiences remember characters.",
      },
    ],
  },
  {
    slug: "wedding-films-that-outlive-the-day",
    title: "Wedding films that outlive the day.",
    excerpt:
      "Most wedding films are watched once, twice, and never again. The great ones become family archives. Here's the difference.",
    category: "Events",
    date: "November 2025",
    isoDate: "2025-11-15",
    readMinutes: 6,
    cover: workEvent,
    author: "Studio Editorial",
    seoTitle: "Wedding films that outlive the day — Triyash Media",
    seoDescription:
      "How to commission a wedding film that becomes a family archive, not a highlight reel — the questions to ask before you book a team.",
    body: [
      {
        type: "p",
        text: "Most wedding films are watched twice: on the honeymoon, and again on the first anniversary. Then they live on a hard drive nobody knows how to find.",
      },
      {
        type: "p",
        text: "The great ones are watched every anniversary for thirty years. The difference isn't camera work. It's editorial.",
      },
      { type: "h2", text: "The archive test" },
      {
        type: "p",
        text: "Before we shoot, we ask the couple one question: what will you want to see on your fifteenth anniversary that no other camera will capture? The answers are almost never the ceremony or the first dance. They're the tiny, unrehearsed moments — a father adjusting his tie, a grandmother asleep at 3 a.m., a friend crying at the bar.",
      },
      {
        type: "p",
        text: "That answer becomes the treatment. The ceremony gets covered because it has to be. The archive is where we actually shoot.",
      },
    ],
  },
  {
    slug: "why-your-real-estate-photography-isnt-selling",
    title: "Why your real estate photography isn't selling.",
    excerpt:
      "The gap between a house that shows well online and one that doesn't is almost never the house. It's the photography.",
    category: "Real Estate",
    date: "October 2025",
    isoDate: "2025-10-04",
    readMinutes: 5,
    cover: workRealestate,
    author: "Studio Editorial",
    seoTitle: "Why your real estate photography isn't selling — Triyash Media",
    seoDescription:
      "The gap between a listing that shows well online and one that doesn't is almost never the property — it's the photography. Here's how to fix it.",
    body: [
      {
        type: "p",
        text: "We've walked into 200-crore properties whose listings looked like a WhatsApp forward, and 3-crore properties whose listings looked like Architectural Digest. The gap is almost never the property.",
      },
      { type: "h2", text: "The five-shot rule" },
      {
        type: "list",
        items: [
          "One establishing shot that tells the buyer where the house is in the world.",
          "One hero shot — the room the buyer is actually buying the house for.",
          "One light-of-day shot at the property's best hour (which is almost never noon).",
          "One detail that hints at craftsmanship: a hinge, a stone, a joinery detail.",
          "One human moment — a chair with a book on it, a kitchen with the light on.",
        ],
      },
      {
        type: "p",
        text: "Five shots. Done well, they'll do more work than sixty done badly. Every additional shot after those five should either add information or add mood — nothing else.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
