import logoAsset from "@/assets/triyash-logo-light.png";

/**
 * Logo mark wrapped in a soft cream chip so the artwork stays legible on
 * both the dark navy and light ivory themes.
 */
export function Logo({
  className = "h-14 w-auto",
  bare = false,
}: {
  className?: string;
  bare?: boolean;
}) {
  const img = (
    <img
      src={logoAsset}
      alt="Triyash Media"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
  if (bare) return img;
  return (
    <span className="inline-flex items-center justify-center rounded-2xl bg-[#FAF7F2] px-3 py-1.5 ring-1 ring-gold/40 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)]">
      {img}
    </span>
  );
}