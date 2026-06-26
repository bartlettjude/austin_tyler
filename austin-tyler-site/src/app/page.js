import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Photo from "@/components/Photo";
import { SITE, SERVICES } from "@/data/site";
import { PHOTOS, HERO_PHOTO, ABOUT_PHOTO } from "@/data/photos";

export default function HomePage() {
  const featured = PHOTOS.filter((p) => p.featured).slice(0, 5);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative min-h-[100svh] flex flex-col justify-end pt-28 pb-10 md:pb-14 overflow-hidden">
        {/* background photo — drifts slower than scroll (extra height = headroom) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Parallax speed={0.18} className="absolute inset-x-0 -top-[16%] h-[132%]">
            <img
              src={HERO_PHOTO}
              alt="Live concert under stage lights"
              className="h-full w-full object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/35 to-paper/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-paper/40 to-transparent" />
          {/* stage light-leaks */}
          <span className="light-leak w-[42vw] h-[42vw] -top-[6%] right-[4%]" aria-hidden="true" />
          <span className="light-leak leak-cool w-[34vw] h-[34vw] top-[28%] -left-[8%]" aria-hidden="true" />
        </div>

        {/* floating film sticker — subtle parallax + sway */}
        <Parallax
          speed={-0.08}
          className="hidden sm:block absolute top-28 right-6 md:right-12 z-10"
          aria-hidden="true"
        >
          <span className="sticker sway -rotate-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-clay" />
            Roll 01 · Live in Nashville
          </span>
        </Parallax>

        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow mb-5 fade-up" style={{ animationDelay: "0.1s" }}>
            {SITE.location} — {SITE.tagline}
          </p>

          <Parallax as="h1" speed={-0.05} className="display text-[13.5vw] sm:text-[14vw] lg:text-[12.5rem] xl:text-[14rem] leading-[0.82] -ml-1">
            <span className="rise-line"><span style={{ animationDelay: "0.15s" }}>Capturing</span></span>
            <br />
            <span className="rise-line">
              <span style={{ animationDelay: "0.28s" }} className="italic font-normal">the&nbsp;</span>
            </span>
            <span className="rise-line"><span style={{ animationDelay: "0.34s" }}>noise.</span></span>
          </Parallax>

          <div
            className="mt-8 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-10 fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="max-w-md text-ink-soft text-lg leading-relaxed">
              I’m Austin Tyler — a Nashville photographer shooting live music,
              artists, dance and country. Real moments, the way they actually felt.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/portfolio" variant="dark">View Portfolio</Button>
              <Button href="/contact" variant="outline">Book a Shoot</Button>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10 mt-10 hidden md:block">
          <div className="flex items-center gap-3 text-muted text-xs uppercase tracking-[0.25em] fade-up" style={{ animationDelay: "0.9s" }}>
            <span className="inline-block w-10 h-px bg-muted" />
            Scroll to wander
          </div>
        </div>
      </section>

      {/* ============ INTRO / STATEMENT ============ */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <Reveal as="p" className="eyebrow mb-6">What I do</Reveal>
            <Reveal as="h2" className="display text-[8vw] md:text-6xl lg:text-7xl" delay={80}>
              Photos that sound<br />like the room felt.
            </Reveal>
          </div>
          <Reveal className="md:col-span-5 md:pb-3" delay={160}>
            <p className="text-ink-soft text-lg leading-relaxed">
              From the front row of a sold-out show to a quiet studio portrait, I shoot
              for energy and honesty over polish. A little grit, a little Americana, and
              a whole lot of attention to the moment most people miss.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 mt-6 font-semibold text-ink border-b-2 border-gold pb-1 hover:gap-3 transition-all">
              More about me <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section className="bg-cream py-20 md:py-28 border-y border-ink/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <Reveal as="p" className="eyebrow mb-4">Selected frames</Reveal>
              <Reveal as="h2" className="display text-[10vw] md:text-7xl" delay={60}>Featured Work</Reveal>
            </div>
            <Reveal delay={120}>
              <Button href="/portfolio" variant="dark">See full portfolio</Button>
            </Reveal>
          </div>

          {/* clean, aligned editorial grid — fixed heights so rows line up.
              Each card drifts at a slightly different speed for layered depth. */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 md:gap-6">
            <Parallax speed={0.05} className="sm:col-span-7">
              <Reveal variant="clip">
                <Photo photo={featured[0]} priority heightClass="h-[18rem] sm:h-[24rem] lg:h-[31rem]" />
              </Reveal>
            </Parallax>
            <Parallax speed={-0.05} className="sm:col-span-5">
              <Reveal variant="clip" delay={120}>
                <Photo photo={featured[1]} priority heightClass="h-[18rem] sm:h-[24rem] lg:h-[31rem]" />
              </Reveal>
            </Parallax>
            <Parallax speed={0.07} className="sm:col-span-4">
              <Reveal variant="clip" delay={60}>
                <Photo photo={featured[2]} heightClass="h-[16rem] lg:h-[22rem]" />
              </Reveal>
            </Parallax>
            <Parallax speed={-0.03} className="sm:col-span-4">
              <Reveal variant="clip" delay={120}>
                <Photo photo={featured[3]} heightClass="h-[16rem] lg:h-[22rem]" />
              </Reveal>
            </Parallax>
            <Parallax speed={0.06} className="sm:col-span-4">
              <Reveal variant="clip" delay={180}>
                <Photo photo={featured[4]} heightClass="h-[16rem] lg:h-[22rem]" />
              </Reveal>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE TICKER ============ */}
      <section className="bg-ink text-paper py-5 md:py-6 overflow-hidden" aria-hidden="true">
        <div className="marquee">
          <div className="marquee-track display text-3xl md:text-5xl text-paper">
            {Array.from({ length: 2 }).map((_, r) => (
              ["Live Music", "Concerts", "Dance", "Country", "Nashville", "On Tour"].map((w) => (
                <span key={`${r}-${w}`} className="inline-flex items-center gap-10">
                  {w}
                  <span className="text-gold text-2xl md:text-4xl not-italic">✦</span>
                </span>
              ))
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT PREVIEW ============ */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Parallax speed={0.06} className="order-2 md:order-1 ticks text-clay">
            <Reveal variant="clip">
              <Photo
                photo={{ src: ABOUT_PHOTO, orientation: "landscape", title: "Austin Tyler", caption: "Behind the camera", category: "lifestyle" }}
                showMeta={false}
              />
            </Reveal>
          </Parallax>
          <Reveal className="order-1 md:order-2" delay={100}>
            <p className="eyebrow mb-6">The photographer</p>
            <h2 className="display text-[9vw] md:text-6xl mb-6">
              Nashville-based.<br />
              <span className="italic font-normal text-brown">Always on tour.</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-4">
              I got into this chasing the feeling of live music — the sweat, the light,
              the split-second a song lands. These days that means concerts, artist
              branding, dance and country work across the country.
            </p>
            <p className="text-ink-soft text-lg leading-relaxed mb-8">
              If it moves and means something, I want to shoot it.
            </p>
            <Button href="/about" variant="outline">Read the full story</Button>
          </Reveal>
        </div>
      </section>

      {/* ============ SERVICES STRIP ============ */}
      <section className="relative bg-ink text-paper py-20 md:py-28 overflow-hidden">
        {/* drifting stage light */}
        <span className="light-leak w-[40vw] h-[40vw] top-[10%] -right-[6%] opacity-70" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <Reveal as="p" className="eyebrow !text-gold mb-4">How we work together</Reveal>
              <Reveal as="h2" className="display text-[10vw] md:text-7xl text-paper" delay={60}>Services</Reveal>
            </div>
            <Reveal delay={120}>
              <Link href="/services" className="btn btn-outline !border-paper/50 !text-paper">
                <span>All services</span><span className="btn-arrow">→</span>
              </Link>
            </Reveal>
          </div>

          <div className="divide-y divide-paper/15 border-y border-paper/15">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <Link
                  href="/services"
                  className="group grid md:grid-cols-12 gap-3 md:gap-6 items-center py-6 md:py-7"
                >
                  <span className="md:col-span-1 font-display text-tan text-xl">{s.n}</span>
                  <h3 className="md:col-span-4 display text-3xl md:text-4xl text-paper group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="md:col-span-6 text-paper/65 leading-relaxed">{s.blurb}</p>
                  <span className="md:col-span-1 text-right text-paper/50 group-hover:text-gold group-hover:translate-x-1 transition-all text-2xl">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT CTA ============ */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 pb-20 md:pb-28">
          <Reveal className="relative overflow-hidden rounded-2xl bg-clay/10 border border-clay/20 p-10 md:p-20 text-center">
            <span className="light-leak w-[36vw] h-[36vw] -top-[10%] left-[10%]" aria-hidden="true" />
            <p className="eyebrow mb-6 relative">Let’s make something</p>
            <Parallax as="h2" speed={-0.04} className="display text-[11vw] md:text-8xl mb-8 relative">
              Book your<br /><span className="italic font-normal text-brown">next shoot.</span>
            </Parallax>
            <div className="relative flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="dark">Start a project</Button>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn btn-outline" >
                <span>Follow on Instagram</span><span className="btn-arrow">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
