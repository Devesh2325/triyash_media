import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const NOTIFY_EMAIL = import.meta.env.VITE_NOTIFY_EMAIL || "dmchaturvedi@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Triyash Media" },
      { name: "description", content: "Start a project with Triyash Media. Cinematic films, brand and growth — replies within one business day." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Contact · Triyash Media" },
      { property: "og:description", content: "Tell us about your studio, hotel or idea." },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Contact · Triyash Media" },
      { name: "twitter:description", content: "Tell us about your studio, hotel or idea." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact — Triyash Media",
          url: "/contact",
            contactPoint: {
            "@type": "ContactPoint",
            email: NOTIFY_EMAIL,
            telephone: "+91 86790 07159",
            contactType: "customer service",
            areaServed: "Worldwide",
          },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
    };
    setBusy(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "We couldn't send your message. Please try again in a moment.");
      }
      setSent(true);
      form.reset();
      toast.success("Your note has landed at the studio. We'll reply within one business day.");
    } catch (err) {
      // Graceful fallback: open the user's email client with the message pre-filled.
      const subject = encodeURIComponent(`New enquiry from ${payload.name}${payload.company ? ` · ${payload.company}` : ""}`);
      const body = encodeURIComponent(
        `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nPhone: ${payload.phone}\nInterest: ${payload.service}\n\n${payload.message}`,
      );
      window.location.href = `mailto:${NOTIFY_EMAIL}?subject=${subject}&body=${body}`;
      toast.message("Opening your email app so your note reaches us directly.", {
        description: err instanceof Error ? err.message : undefined,
      });
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Let's talk"
        title={<>Tell us about your <span className="text-gradient-gold italic">next chapter</span>.</>}
        copy="A thoughtful note beats a contact-form ping. Share what you're building and we'll reply within one business day."
      />
      <section className="section pt-4">
        <div className="container-luxe grid grid-cols-1 gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <form
            onSubmit={onSubmit}
            className="glass rounded-3xl p-6 md:p-10 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your name" name="name" placeholder="Aanya Sethi" />
              <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Brand / Company" name="company" placeholder="Maison Lumière" />
              <Field label="Phone (optional)" name="phone" placeholder="+91 …" required={false} />
            </div>
            <div>
              <label className="block eyebrow mb-2">Service of interest</label>
              <select name="service" className="w-full rounded-2xl bg-background/40 border border-border/60 px-4 py-3.5 text-sm outline-none focus:border-gold">
                {["Film & Documentary", "Photography", "Branding", "Website", "SEO & Growth", "Hospitality Marketing", "Not sure yet"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block eyebrow mb-2">Tell us more</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="The brand, the goal, the timeline, anything else we should know…"
                className="w-full rounded-2xl bg-background/40 border border-border/60 px-4 py-3.5 text-sm outline-none focus:border-gold resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={busy}
              className="w-full rounded-full bg-gold px-6 py-4 font-ui font-medium text-[var(--ink)] hover-lift disabled:opacity-70 disabled:cursor-not-allowed text-center"
            >
              {busy ? "Sending…" : sent ? "Thanks — we'll be in touch ✦" : "Send the brief"}
            </button>
          </form>

          <aside className="space-y-6">
            <Info icon={Phone} label="Phone" value="+91 86790 07159" href="tel:+91+918679007159" />
            <Info icon={Mail} label="Email" value={NOTIFY_EMAIL} href={`mailto:${NOTIFY_EMAIL}`} />
            <Info icon={MessageCircle} label="WhatsApp" value="Chat with the studio" href="https://wa.me/91+918679007159" />
            <Info icon={MapPin} label="Studio" value="Pune · Mumbai · Worldwide" />

            <div className="glass rounded-3xl p-6">
              <p className="eyebrow mb-4">Follow the work</p>
              <div className="grid grid-cols-4 gap-3">
                <a href="https://www.instagram.com/triyashmedia1/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid place-items-center h-11 w-11 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.facebook.com/share/1Czy5CiZWg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center h-11 w-11 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/ankit-singh-49955a3a7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid place-items-center h-11 w-11 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://youtube.com/@triyashmedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid place-items-center h-11 w-11 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/40 w-full h-72 md:h-auto md:aspect-[5/3]">
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=73.79%2C18.49%2C73.95%2C18.59&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required = true }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block eyebrow mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl bg-background/40 border border-border/60 px-4 py-3.5 text-sm outline-none focus:border-gold"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 glass rounded-2xl p-5 hover-lift">
      <div className="grid place-items-center h-11 w-11 rounded-xl bg-gold/15 text-gold shrink-0"><Icon className="h-4 w-4" /></div>
      <div>
        <p className="eyebrow text-[0.65rem]">{label}</p>
        <p className="mt-1 font-ui">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}