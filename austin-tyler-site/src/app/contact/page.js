import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Contact — Book a Shoot — Austin Tyler",
  description:
    "Book Austin Tyler for concert, artist, dance or country photography. Nashville-based, available to tour. Tell me about your project.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 md:pt-44 pb-24">
      <div className="mx-auto max-w-[1300px] px-5 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — pitch */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-5 fade-up">Let’s work together</p>
            <h1 className="display text-[14vw] md:text-[7rem] leading-[0.84] fade-up" style={{ animationDelay: "0.1s" }}>
              Book a<br /><span className="italic font-normal text-brown">shoot.</span>
            </h1>
            <p className="mt-6 text-ink-soft text-lg leading-relaxed max-w-md fade-up" style={{ animationDelay: "0.2s" }}>
              Live show, promo run, dance or country project — tell me what you’re
              planning and I’ll get back to you within 24–48 hours.
            </p>

            <div className="mt-10 space-y-5">
              <Reveal>
                <p className="eyebrow mb-1">Email</p>
                <a href={`mailto:${SITE.email}`} className="font-display text-xl text-ink hover:text-brown transition-colors break-all">
                  {SITE.email}
                </a>
              </Reveal>
              <Reveal delay={60}>
                <p className="eyebrow mb-1">Instagram</p>
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="font-display text-xl text-ink hover:text-brown transition-colors">
                  {SITE.instagramHandle}
                </a>
              </Reveal>
              <Reveal delay={120}>
                <p className="eyebrow mb-1">Based in</p>
                <p className="font-display text-xl text-ink">{SITE.location} — {SITE.availability.toLowerCase()}</p>
              </Reveal>
            </div>
          </div>

          {/* Right — form */}
          <Reveal className="md:col-span-7" delay={120}>
            <div className="rounded-2xl bg-cream border border-ink/10 p-6 md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
