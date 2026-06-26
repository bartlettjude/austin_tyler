import PortfolioGrid from "@/components/PortfolioGrid";
import Parallax from "@/components/Parallax";
import { PHOTOS } from "@/data/photos";

const PHOTOS_COUNT = PHOTOS.length;

export const metadata = {
  title: "Portfolio — Austin Tyler",
  description:
    "Live music and concert photography by Austin Tyler. Browse the full portfolio.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative pt-32 md:pt-44 pb-10 md:pb-14 overflow-hidden">
        <Parallax
          speed={-0.1}
          className="hidden sm:block absolute top-32 right-6 md:right-12 z-10"
          aria-hidden="true"
        >
          <span className="sticker sway-slow rotate-3">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-clay" />
            {PHOTOS_COUNT} frames & counting
          </span>
        </Parallax>
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow mb-5 fade-up">The work</p>
          <Parallax as="h1" speed={-0.05} className="display text-[16vw] md:text-[11rem] leading-[0.82] fade-up" style={{ animationDelay: "0.1s" }}>
            Portfolio
          </Parallax>
          <p className="mt-6 max-w-xl text-ink-soft text-lg leading-relaxed fade-up" style={{ animationDelay: "0.2s" }}>
            A growing archive of live shows, artists and warm, story-driven light.
            No labels, no fuss — just the photos.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-16 md:pb-24">
        <PortfolioGrid />
      </section>
    </>
  );
}
