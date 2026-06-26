import { PHOTOS } from "@/data/photos";
import Photo from "@/components/Photo";
import Parallax from "@/components/Parallax";

// Gentle, repeating depth pattern — some cards drift, some hold still, so the
// masonry stays easy to scan instead of sliding around all at once.
const SPEEDS = [0.045, 0, -0.05, 0.03, 0, 0.05, -0.035];

/**
 * Plain masonry portfolio grid — no categories, no filters. Just the work.
 * Cards drift at a subtle parallax speed but are always fully visible: this is
 * the gallery, so the photos should be there immediately, not gated behind a
 * scroll-reveal. Every image also loads eagerly (`priority`) so the page never
 * paints empty.
 */
export default function PortfolioGrid() {
  return (
    <div className="[column-fill:_balance] gap-5 md:gap-6 columns-1 sm:columns-2 lg:columns-3">
      {PHOTOS.map((photo, i) => (
        <div key={photo.src} className="mb-5 md:mb-6 break-inside-avoid">
          <Parallax speed={SPEEDS[i % SPEEDS.length]}>
            <Photo photo={photo} priority />
          </Parallax>
        </div>
      ))}
    </div>
  );
}
