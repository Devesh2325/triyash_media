import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-luxe flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Triyash Media — Home">
          <Logo className="h-12 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105" />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl tracking-wide text-gradient-gold">TRIYASH</span>
            <span className="eyebrow text-[0.62rem] mt-1">MEDIA</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 font-ui text-sm tracking-wide transition-colors ${
                  active ? "text-gold" : "text-foreground/80 hover:text-gold"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent transition-opacity duration-300 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid place-items-center h-10 w-10 rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-ui text-sm font-medium text-[var(--ink)] hover-lift"
          >
            Start a project
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-border/60"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-nav border-t border-border/40 mt-2 animate-fade-in">
          <nav className="container-luxe py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="py-3 font-ui text-base text-foreground/85 hover:text-gold border-b border-border/40 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-3 inline-flex justify-center rounded-full bg-gold py-3 font-ui font-medium text-[var(--ink)]">
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}