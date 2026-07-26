import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_12%,transparent),transparent_60%)]" />
      <div className="container-luxe relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] max-w-4xl">
          {title}
        </h1>
        {copy && (
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            {copy}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
