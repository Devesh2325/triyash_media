import logoAsset from "@/assets/triyash-logo.png.asset.json";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Triyash Media"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}