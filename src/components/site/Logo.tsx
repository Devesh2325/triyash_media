import logo from "@/assets/triyash_logo.jpg";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Triyash Media"
      className={`inline-block rounded-xl border border-gold/35 bg-white/70 object-cover shadow-[0_8px_24px_-14px_rgba(64,35,8,0.55)] dark:bg-black/20 dark:shadow-[0_8px_24px_-14px_rgba(0,0,0,0.8)] ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
