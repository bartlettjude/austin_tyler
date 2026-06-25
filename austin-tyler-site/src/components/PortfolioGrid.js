import { PHOTOS } from "@/data/photos";
import Photo from "@/components/Photo";

/**
 * Plain masonry portfolio grid — no categories, no filters. Just the work.
 */
export default function PortfolioGrid() {
  return (
    <div className="[column-fill:_balance] gap-5 md:gap-6 columns-1 sm:columns-2 lg:columns-3">
      {PHOTOS.map((photo, i) => (
        <div key={photo.src} className="mb-5 md:mb-6 break-inside-avoid">
          <Photo photo={photo} priority={i < 3} />
        </div>
      ))}
    </div>
  );
}
