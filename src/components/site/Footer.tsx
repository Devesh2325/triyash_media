import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/40 bg-[color-mix(in_oklab,var(--card)_60%,transparent)] safe-padding-bottom">
      <div className="gold-divider" />
      <div className="container-luxe pt-20 pb-10 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo className="h-16 md:h-20 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Triyash Media is a luxury creative house crafting cinematic stories,
            world-class brands and growth systems for hospitality, lifestyle and ambition.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/triyashmedia1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid place-items-center h-10 w-10 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.facebook.com/share/1Czy5CiZWg/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid place-items-center h-10 w-10 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/ankit-singh-49955a3a7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center h-10 w-10 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>

            <a
              href="https://youtube.com/@triyashmedia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="grid place-items-center h-10 w-10 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-5">Studio</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            {[
              ["About", "/about"],
              ["Services", "/services"],
              ["Portfolio", "/portfolio"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Craft</p>
          <ul className="space-y-3 text-sm text-foreground/80">
            {["Film & Documentary", "Photography", "Branding", "Web Design", "SEO & Growth", "Hospitality Marketing"].map((s) => (
              <li key={s} className="hover:text-gold transition-colors">{s}</li>
            ))}
          </ul>
        </div>

    
    {/* This is now not working so now its hide */}
    {/* 
   <div>
          <p className="eyebrow mb-5">Stay in the frame</p>
          <p className="text-sm text-muted-foreground mb-4">
            Field notes on cinema, brand and culture — once a month.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="you@studio.com"
              className="flex-1 rounded-full bg-background/60 border border-border/60 px-4 py-2.5 text-sm outline-none focus:border-gold"
            />
            <button className="rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-[var(--ink)] hover-lift">Join</button>
          </form> */}

        <div>
          <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 86790 07159</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gold" /> info@triyashmedia.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Mumbai Andheri</li>
          </ul>
        </div>
      </div>

      <div className="container-luxe pb-10">
        <div className="gold-divider mb-6 opacity-50" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Triyash Media. Crafted with intention.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}