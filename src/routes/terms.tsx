import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Triyash Media" },
      { name: "description", content: "The terms governing your use of the Triyash Media website and engagement with the studio." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" copy="The terms that govern our website and engagements." />
      <section className="container-luxe pb-24 max-w-3xl">
        <Block t="Use of the website">By using this site you agree to use it lawfully and respect our intellectual property.</Block>
        <Block t="Intellectual property">All films, photography, designs and copy on this site are © Triyash Media unless explicitly credited.</Block>
        <Block t="Engagements">Every project is governed by a separate Statement of Work that defines scope, deliverables, timelines and ownership.</Block>
        <Block t="Liability">We work hard to keep things accurate. We are not liable for indirect damages arising from use of the website.</Block>
        <Block t="Contact">Questions? <a className="text-gold" href="mailto:info@triyashmedia.com">info@triyashmedia.com</a></Block>
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