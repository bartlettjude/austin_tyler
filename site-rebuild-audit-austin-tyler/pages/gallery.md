# Pages: Photos (gallery) + Videos

This file covers the two portfolio pages: **/photos** and **/videos**.

---

# Page: Photos

## URL
https://www.austintylerartistry.com/photos

## Page Purpose
Main photography portfolio — a lightbox grid of Austin's best live-performance, portrait, and lifestyle shots.

## Original Page Title
`Photos | Capture Your Moments - Book Now — Your Site Title`

## Original Headings
None (no on-page headings — just a grid). ⚠️ No intro copy, no section labels.

## Original Body Copy
None besides "View fullsize" lightbox labels. The page is **images only**.

## Buttons / CTAs
- Lightbox open/close on each image. **No booking CTA** anywhere on the page.

## Images Used (~17 portfolio photos — all real, high quality)
Live performance + portrait + lifestyle mix. Highlights with verbatim alt text:
- `DSC09519.jpg` — country singer in cowboy hat + Hawaiian shirt, yellow stage lights + smoke.
- `DSC05222.jpg` — man in "Southern" cap, acoustic guitar, singing on stage.
- `DSC07045.jpg` — bearded man in cowboy hat + two women on stage, colorful lighting.
- `DSC02699.jpg` — female singer + 4 band members, blue/purple lights, "CATEGOR… NASHVILLE" backdrop.
- `DSC01963.jpg` — blonde singer in pink floral dress, man in pink suit, pink/purple lights.
- `DSC06334.jpg` — man playing guitar in a dimly lit bar with neon signs.
- `DSC09366.jpg` — woman singing under blue lights, denim vest + cargo pants.
- `DSC07831-2.jpg` — man in cap + cream tee performing, pointing.
- `DSC09103.jpg` — man sitting on a tree branch in a green forest (portrait).
- `DSC07066.jpg` — red-haired woman with tattoos eating from a jar in a kitchen (lifestyle).
- `DSC05281.jpg` — young man with tattoos, sunglasses, cap, against a stone wall.
- `5 (24 of 44).jpg` — man in hoodie + denim jacket in a graffiti alley.
- `DSC02024.JPG` — man in paint-covered graduation gown by a lake.
- `DSC07976.jpg` — woman in wide-brim hat + orange jacket leaning on a vintage vehicle.
- `DSC00553.jpg` — woman in garden, black hat + floral dress, brick wall.
- (plus `Brian Russell Collins Invoice.png` spacers — remove)

Full alt text preserved in `data/all-images.csv`. All downloaded to `assets/images/gallery/`.

## SEO / Metadata
- Meta title: `Photos | Capture Your Moments - Book Now — Your Site Title`
- Meta description: "Explore professional photography services and galleries. Book your session today to capture memorable moments with top photographers." ⚠️ generic/auto-written ("top photographers" — it's one person).
- OG image: none.

## Design Notes
Masonry/grid lightbox, mixed portrait + landscape. Strong, varied, professional imagery — the site's biggest asset.

## Issues
- Zero copy / no categories — just a wall of images.
- No CTA to book after viewing.
- Generic auto-generated meta description.
- Spacer images mixed in.

## Rebuild Notes
This is the strongest content on the site — feature it. Add light category filtering (Live / Portrait / Promo / Studio), lazy-load, and a "Book a session" CTA at the bottom. Keep the alt text (it's detailed and great for SEO/accessibility). Curate to the strongest ~20–30; consider per-collection galleries linked from the homepage's three collections.

---

# Page: Videos

## URL
https://www.austintylerartistry.com/videos

## Page Purpose
Video portfolio / reel showcase.

## Original Page Title
`Videos | Discover and book your video sessions now — Your Site Title`

## Original Headings
- `H4` — PROMOTIONAL VIDEO   *(the only label on the page)*

## Original Body Copy
None besides that single heading.

## Videos / Embeds
**6 self-hosted Squarespace videos**, all vertical 9:16 (1080×1920), ~22–45s each. No titles, no captions. Full URLs/IDs in `assets/videos/VIDEO_MANIFEST.md`. (Could not be downloaded — collect masters from client.)

## Buttons / CTAs
None. No booking CTA.

## SEO / Metadata
- Meta description: "Explore our collection of videos showcasing services and sessions available **in Austin and Tyler**…" ⚠️ **Auto-generated SEO mistakenly treats the name "Austin Tyler" as the cities Austin & Tyler, Texas.** Must rewrite.

## Issues
- Only one heading; no context/titles on any clip.
- All vertical — awkward on desktop without framing.
- Broken-by-misunderstanding SEO ("Austin and Tyler").
- No CTA.

## Rebuild Notes
Re-collect high-res masters from Austin. Add a title + artist + purpose under each clip. Consider commissioning/editing one horizontal sizzle reel for the homepage hero. Present vertical clips in a tidy grid or phone-frame mockups. Rewrite SEO to be about Nashville music photo/video.
