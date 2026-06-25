import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import { SERVICES, SITE } from "@/data/site";

export const metadata = {
  title: "Services — Austin Tyler",
  description:
    "Concert photography, artist promo shoots, dance, country & event, and product/content photography. Simple, client-friendly packages.",
};

const STEPS = [
  { n: "01", t: "Reach out", d: "Tell me the date, the vibe, and what you need the photos for." },
  { n: "02", t: "We plan it", d: "Locations, shot list, must-gets — kept simple and clear." },
  { n: "03", t: "Shoot day", d: "I show up early, stay loose, and capture it as it happens." },
  { n: "04", t: "Delivery", d: "A tight, color-graded edit delivered fast — usually 48 hours." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 md:pt-44 pb-12">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow mb-5 fade-up">What I offer</p>
          <h1 className="display text-[15vw] md:text-[10.5rem] leading-[0.82] fade-up" style={{ animationDelay: "0.1s" }}>
            Services
          </h1>
          <p className="mt-6 max-w-xl text-ink-soft text-lg leading-relaxed fade-up" style={{ animationDelay: "0.2s" }}>
            Straightforward photography built around music and movement. Pick the one
            that fits — or reach out and we’ll shape something around your project.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.n}
              delay={(i % 3) * 90}
              className="group relative flex flex-col rounded-2xl bg-cream border border-ink/10 p-7 md:p-8 hover:bg-ink hover:border-ink transition-colors duration-500"
            >
              <span className="font-display text-tan text-2xl group-hover:text-gold transition-colors">{s.n}</span>
              <h2 className="display text-3xl md:text-4xl mt-3 mb-4 text-ink group-hover:text-paper transition-colors">
                {s.title}
              </h2>
              <p className="text-ink-soft group-hover:text-paper/70 transition-colors leading-relaxed flex-1">
                {s.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase tracking-[0.14em] rounded-full border border-ink/15 group-hover:border-paper/25 px-3 py-1 text-muted group-hover:text-paper/60 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}

          {/* CTA card filling the 6th slot */}
          <Reveal
            delay={180}
            className="flex flex-col justify-center rounded-2xl bg-clay/12 border border-clay/25 p-7 md:p-8"
          >
            <h2 className="display text-3xl md:text-4xl mb-3">Something else?</h2>
            <p className="text-ink-soft leading-relaxed mb-6">
              Tours, multi-day shoots, branding bundles — if it involves a camera and
              good music, let’s talk.
            </p>
            <Button href="/contact" variant="dark">Tell me about it</Button>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink text-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal as="p" className="eyebrow !text-gold mb-4">How it goes</Reveal>
          <Reveal as="h2" className="display text-[10vw] md:text-7xl text-paper mb-14" delay={60}>
            The process
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <span className="font-display text-tan text-xl">{s.n}</span>
                <h3 className="display text-2xl text-paper mt-2 mb-2">{s.t}</h3>
                <p className="text-paper/60 leading-relaxed">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28 text-center">
        <Reveal as="h2" className="display text-[11vw] md:text-7xl mb-8">
          Ready when you are.
        </Reveal>
        <Reveal delay={80} className="flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="dark">Book a shoot</Button>
          <a href={`mailto:${SITE.email}`} className="btn btn-outline">
            <span>Email me</span><span className="btn-arrow">→</span>
          </a>
        </Reveal>
      </section>
    </>
  );
}
