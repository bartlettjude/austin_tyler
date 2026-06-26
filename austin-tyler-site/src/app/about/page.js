import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Photo from "@/components/Photo";
import { ABOUT_PHOTO, SERVICES_PHOTO } from "@/data/photos";
import { SITE } from "@/data/site";

export const metadata = {
  title: "About — Austin Tyler",
  description:
    "Austin Tyler is a Nashville-based photographer specializing in live music, artists, dance and country work. Available to tour.",
};

const FACTS = [
  { k: "Based", v: "Nashville, TN" },
  { k: "Shooting since", v: "the first front-row show" },
  { k: "Focus", v: "Live music · Dance · Country" },
  { k: "Travel", v: "Available to tour" },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 md:pt-44 pb-10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow mb-5 fade-up">About</p>
          <h1 className="display text-[14vw] md:text-[10rem] leading-[0.84] fade-up" style={{ animationDelay: "0.1s" }}>
            Hi, I’m<br /><span className="italic font-normal text-brown">Austin.</span>
          </h1>
        </div>
      </section>

      {/* Bio + portrait */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <Parallax speed={0.07} className="md:col-span-5 ticks text-clay">
            <Reveal variant="clip">
              <Photo
                photo={{ src: ABOUT_PHOTO, orientation: "portrait", title: "Austin Tyler", caption: "Behind the camera", category: "lifestyle" }}
                showMeta={false}
                priority
              />
            </Reveal>
          </Parallax>

          <Reveal className="md:col-span-7 md:pt-4" delay={100}>
            <p className="font-display text-2xl md:text-3xl leading-snug text-ink mb-6">
              I’m a Nashville photographer chasing the feeling of live music — the
              sweat, the light, and the half-second a song actually lands.
            </p>
            <div className="space-y-5 text-ink-soft text-lg leading-relaxed">
              <p>
                I started in the photo pit and never really left. Concerts taught me to
                shoot fast, read a room, and find the frame everyone else misses. That
                same instinct carries into artist branding, promo shoots, and the studio.
              </p>
              <p>
                Lately I’ve been leaning into <span className="text-ink font-semibold">dance</span> and
                <span className="text-ink font-semibold"> country</span> work — movement and warm,
                story-driven light with a little Americana to it. Different subjects, same
                goal: photos that feel honest, not staged.
              </p>
              <p>
                Whether it’s a sold-out show or a quiet portrait, I want to document the
                moment the way it actually felt — and hand you images that still hit a
                year from now.
              </p>
            </div>

            {/* facts */}
            <dl className="mt-10 grid grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-xl overflow-hidden">
              {FACTS.map((f) => (
                <div key={f.k} className="bg-paper p-5">
                  <dt className="eyebrow mb-2">{f.k}</dt>
                  <dd className="font-display text-xl text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/portfolio" variant="dark">See the work</Button>
              <Button href="/contact" variant="outline">Book a shoot</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Wide image band — left→right mask wipe + slow parallax drift */}
      <section className="py-10 md:py-16 overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Parallax speed={0.05}>
            <Reveal variant="mask">
              <div className="frame aspect-[16/8] md:aspect-[16/6]">
                <img src={SERVICES_PHOTO} alt="Austin filming a live performance on stage" />
              </div>
            </Reveal>
          </Parallax>
        </div>
      </section>

      {/* Pull quote */}
      <section className="mx-auto max-w-[1100px] px-5 md:px-10 py-20 md:py-28 text-center">
        <Reveal as="p" className="eyebrow mb-6">The whole point</Reveal>
        <Reveal as="blockquote" className="display text-[8vw] md:text-6xl leading-[1.02]" delay={80}>
          “It’s not posed.<br /><span className="italic font-normal text-brown">It’s alive.”</span>
        </Reveal>
        <Reveal as="p" className="mt-8 text-muted" delay={140}>
          — Austin · {SITE.location}
        </Reveal>
      </section>
    </>
  );
}
