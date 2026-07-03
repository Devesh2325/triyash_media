import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Triyash Media" },
      { name: "description", content: "How Triyash Media collects, uses and protects your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" copy="A short, plain-English summary of how we handle your information." />
      <section className="container-luxe pb-24 max-w-3xl prose prose-invert">
        <Block t="What we collect">Information you share via our contact form — name, email, phone and project notes. Basic analytics about how the site is used.</Block>
        <Block t="How we use it">To reply to enquiries, send the occasional newsletter (only if you opt in), and improve the site.</Block>
        <Block t="Sharing">We do not sell your information. We share only with trusted tools strictly required to run the studio.</Block>
        <Block t="Your rights">Email <a className="text-gold" href="mailto:info@triyashmedia.com">info@triyashmedia.com</a> any time to access, correct or delete your data.</Block>
        <Block t="Cookies">We use minimal first-party cookies to keep the theme preference and basic analytics. No third-party tracking.</Block>
      </section>
    </>
  );
}

function Block({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <div className="mt-10">
      <h2 className="font-display text-2xl text-gold">{t}</h2>
      <p className="mt-3 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}