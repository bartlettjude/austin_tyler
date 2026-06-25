/**
 * Presentational photo card with a clean frame + hover caption.
 * Uses a plain <img> so real client photos drop straight into /public/photos.
 */
const RATIO = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  square: "aspect-square",
};

// Pass `heightClass` (e.g. "h-[30rem]") to force a fixed height instead of the
// orientation aspect ratio — used for clean, aligned grid rows.
export default function Photo({ photo, priority = false, className = "", showMeta = true, heightClass }) {
  const size = heightClass || RATIO[photo.orientation] || RATIO.landscape;
  return (
    <figure className={`frame group ${size} ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt || `${photo.title} — ${photo.caption}`}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      {showMeta && (
        <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <p className="font-display font-black text-paper text-lg leading-none drop-shadow">
            {photo.title}
          </p>
          <p className="text-paper/80 text-xs mt-1.5 tracking-wide drop-shadow">
            {photo.caption}
          </p>
        </figcaption>
      )}
      {/* gradient scrim for caption legibility */}
      {showMeta && (
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
    </figure>
  );
}
