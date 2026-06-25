// ============================================================
// PHOTO MANIFEST — edit here to swap in real client photos.
// Drop files into /public/photos and update `src`.
// orientation: "portrait" | "landscape" | "square" (controls grid sizing)
// The portfolio shows these in order — reorder the array to re-sequence.
// (`category` is kept only as an optional internal label; it isn't shown.)
// ============================================================

const P = "/photos/";

export const PHOTOS = [
  // ---- Concerts (live performance) ----
  { src: P + "austin-tyler-gallery-home-01.jpg", category: "concerts", orientation: "landscape", title: "Spotlights", caption: "Live set — Nashville", featured: true },
  { src: P + "austin-tyler-gallery-photos-12.jpg", category: "concerts", orientation: "landscape", title: "Front Row", caption: "Stage lights & smoke" },
  { src: P + "austin-tyler-gallery-photos-14.jpg", category: "concerts", orientation: "landscape", title: "The Headliner", caption: "Main stage" },
  { src: P + "austin-tyler-gallery-photos-15.jpg", category: "concerts", orientation: "landscape", title: "Blue Hour", caption: "Live performance" },
  { src: P + "austin-tyler-gallery-photos-16.jpg", category: "concerts", orientation: "landscape", title: "Crowd Glow", caption: "Nashville venue" },
  { src: P + "austin-tyler-gallery-photos-19.jpg", category: "concerts", orientation: "landscape", title: "Encore", caption: "Under the lights" },
  { src: P + "austin-tyler-gallery-home-04.jpg", category: "concerts", orientation: "landscape", title: "Duet", caption: "Stage lights" },

  // ---- Music Artists (portraits / promo) ----
  { src: P + "austin-tyler-gallery-home-05.jpg", category: "artists", orientation: "landscape", title: "Studio I", caption: "Artist portrait", featured: true },
  { src: P + "austin-tyler-gallery-home-08.jpg", category: "artists", orientation: "portrait", title: "Low Light", caption: "Studio session" },
  { src: P + "austin-tyler-promo-cover-wine-or-whiskey-01.png", category: "artists", orientation: "square", title: "Wine or Whiskey", caption: "Single cover" },
  { src: P + "austin-tyler-promo-cover-drive-away-her-memory-anthony-gal-01.jpg", category: "artists", orientation: "square", title: "Drive Away Her Memory", caption: "Anthony Gal" },
  { src: P + "austin-tyler-gallery-photos-13.jpg", category: "artists", orientation: "portrait", title: "Red Room", caption: "Promo shoot" },

  // ---- Dance (movement / figure) ----
  { src: P + "austin-tyler-gallery-photos-17.jpg", category: "dance", orientation: "portrait", title: "Motion I", caption: "Movement study", featured: true },
  { src: P + "austin-tyler-gallery-photos-18.jpg", category: "dance", orientation: "portrait", title: "Motion II", caption: "Movement study" },
  { src: P + "austin-tyler-gallery-home-02.jpg", category: "dance", orientation: "landscape", title: "On Stage", caption: "Performance" },

  // ---- Country ----
  { src: P + "austin-tyler-gallery-home-06.jpg", category: "country", orientation: "portrait", title: "Hat & Six-String", caption: "Country session", featured: true },
  { src: P + "austin-tyler-gallery-home-07.jpg", category: "country", orientation: "portrait", title: "Outlaw", caption: "Studio portrait" },
  { src: P + "austin-tyler-promo-cover-well-to-do-lindstrom-01.png", category: "country", orientation: "square", title: "Well To Do", caption: "Lindstrom" },
  { src: P + "austin-tyler-gallery-photos-20.jpg", category: "country", orientation: "landscape", title: "Honky-Tonk", caption: "Live country" },

  // ---- Lifestyle ----
  { src: P + "austin-tyler-gallery-photos-21.jpg", category: "lifestyle", orientation: "landscape", title: "Open Road", caption: "Lifestyle", featured: true },
  { src: P + "austin-tyler-gallery-photos-22.jpg", category: "lifestyle", orientation: "landscape", title: "Golden Field", caption: "Outdoor portrait" },
  { src: P + "austin-tyler-gallery-photos-23.jpg", category: "lifestyle", orientation: "portrait", title: "Greenhouse", caption: "Editorial" },
  { src: P + "austin-tyler-gallery-photos-24.jpg", category: "lifestyle", orientation: "portrait", title: "Alleyway", caption: "Street portrait" },
  { src: P + "austin-tyler-gallery-photos-25.jpg", category: "lifestyle", orientation: "portrait", title: "Quiet Kitchen", caption: "At home" },
  { src: P + "austin-tyler-gallery-photos-26.jpg", category: "lifestyle", orientation: "landscape", title: "Garden", caption: "Portrait" },
];

// Curated hero / home selections
export const HERO_PHOTO = P + "austin-tyler-gallery-home-01.jpg";
export const HERO_SECONDARY = P + "austin-tyler-gallery-home-06.jpg";
export const ABOUT_PHOTO = P + "austin-tyler-team-portrait-with-camera-01.jpg";
export const SERVICES_PHOTO = P + "austin-tyler-team-filming-live-on-stage-01.jpg";
export const CTA_PHOTO = P + "austin-tyler-ecosystem-banner-live-stage-orange-01.png";
