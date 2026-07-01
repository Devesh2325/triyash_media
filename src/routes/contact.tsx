import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
            email: "hello@triyashmedia.com",
            telephone: "+91 90000 00000",
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
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(msg);
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
        <div className="container-luxe grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <form
            onSubmit={onSubmit}
            className="glass rounded-3xl p-8 md:p-10 space-y-5"
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
              className="w-full md:w-auto rounded-full bg-gold px-8 py-4 font-ui font-medium text-[var(--ink)] hover-lift disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {busy ? "Sending…" : sent ? "Thanks — we'll be in touch ✦" : "Send the brief"}
            </button>
          </form>

          <aside className="space-y-6">
            <Info icon={Phone} label="Phone" value="+91 90000 00000" href="tel:+919000000000" />
            <Info icon={Mail} label="Email" value="hello@triyashmedia.com" href="mailto:hello@triyashmedia.com" />
            <Info icon={MessageCircle} label="WhatsApp" value="Chat with the studio" href="https://wa.me/919000000000" />
            <Info icon={MapPin} label="Studio" value="Pune · Mumbai · Worldwide" />

            <div className="glass rounded-3xl p-6">
              <p className="eyebrow mb-4">Follow the work</p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="grid place-items-center h-11 w-11 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors" aria-label="Social">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border/40 aspect-[5/3]">
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