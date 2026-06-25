import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio — Austin Tyler",
  description:
    "Live music and concert photography by Austin Tyler. Browse the full portfolio.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 md:pt-44 pb-10 md:pb-14">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow mb-5 fade-up">The work</p>
          <h1 className="display text-[16vw] md:text-[11rem] leading-[0.82] fade-up" style={{ animationDelay: "0.1s" }}>
            Portfolio
          </h1>
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
