# 06 — Navigation and Structure

## Current Main Navigation (header, all pages)
`[austintylerartistry. logo → /]  ·  Services  ·  Photos  ·  Videos  ·  Contact (→ /information)  ·  [Instagram icon]`

- Identical on desktop and mobile (mobile is a hamburger "Open Menu / Close Menu" with the same items).
- No dropdowns/folders.
- **The Store/booking is NOT in the nav.** Neither is an About page (none exists).

## Current Footer Navigation
Not a link menu — just: **"AUSTIN TYLER" · "available to tour" · "austintylerartistry@gmail.com" · Instagram icon.** No footer nav links.

## Current Sitemap (from /sitemap.xml + crawl)
```
/                                         (homepage)
/services
/photos
/videos
/information                              (nav "Contact")
/contact                                  (orphan duplicate)
/the-ecosystem                            (orphan template junk)
/store                                    (orphan; not in nav)
  /store/p/standard-package-czhc3                 (Live Start-Up)
  /store/p/standard-package-re4ga-xnrch           (Live Showcase)
  /store/p/standard-package-re4ga-gpn7e-pd7jz     (Photo Shoot)
  /store/p/standard-package-re4ga-pnmej-tl32m     (Video Shoot)
  /store/p/standard-package-re4ga-pnmej-tl32m-gl68b (Photo+Video)
/sereno-sofia-parazi-photography          (orphan; duplicate of homepage)
```

## URL Structure
- Mostly clean (`/services`, `/photos`).
- **Problem URLs:** `/information` (should be `/contact`), `/the-ecosystem`, `/sereno-sofia-parazi-photography`, and `/store/p/standard-package-…` (gibberish template slugs).

## Page Hierarchy
Flat — all top-level, no nesting. Fine for a small site, but 3 of the 10 indexable URLs are junk/duplicate.

## Problems With Current Structure
1. **"Contact" nav label points to `/information`** — confusing label/URL mismatch.
2. **Two contact pages** (`/information` in nav, `/contact` orphaned).
3. **Store/booking absent from nav** — primary money path is hidden.
4. **No About** in nav (and the "About Austin" button mis-targets the form).
5. **Junk pages publicly live & indexable** (`/the-ecosystem`, `/sereno-sofia-parazi-photography`).
6. **Pricing lives in two places** (`/services` and `/store`).
7. Photos vs Videos split is fine, but neither links onward to booking.

## Recommended New Navigation
`[logo → /]  ·  Work  ·  About  ·  Services  ·  Contact  ·  [Book — button, emphasized]  ·  [IG]`

- **Work** = portfolio hub (Photos + Videos, optionally split into Live / Promotional / Studio).
- **About** = real bio page (new).
- **Services** = packages + pricing (merged with Store; each package has a Book CTA).
- **Contact** = single inquiry page.
- **Book** = emphasized button → Services/booking (or direct checkout). Always visible.

## Recommended New Sitemap
```
/                       Home (hero + CTA, featured work, collections, about preview, social proof, contact CTA)
/work                   Portfolio hub
   /work/live           (optional) Live performance gallery
   /work/promotional    (optional) Promotional photo + video
   /work/studio         (optional) Studio sessions
/about                  Bio + headshot + named clients/credits
/services               Packages + pricing + FAQ + Book CTAs   (Store merged in)
/contact                Single inquiry form + email + IG
404 → friendly redirect
Redirects: /information → /contact ; /sereno-sofia-parazi-photography → / ; /the-ecosystem → (gone/410) ; old /store/p/* → new package URLs
```

## Pages to keep / merge / remove / add
- **Keep:** Home, Photos, Videos (→ under Work), Services, one Contact.
- **Merge:** `/services` + `/store` → one Services/Book page; `/information` + `/contact` → one `/contact`.
- **Remove:** `/the-ecosystem`, `/sereno-sofia-parazi-photography`, "Store 2" wrapper.
- **Add:** `/about`, FAQ (on Services or its own), optional per-collection galleries.

## Notes for Developer
- Set canonical + 301 redirects for all removed/renamed URLs (esp. `/information` → `/contact`).
- Submit a clean sitemap; make sure junk pages are removed (not just unlinked).
- Add the Store/booking link to global nav; keep pricing in ONE source.
- Rename product slugs to human-readable.
- Verify the contact form fields on the live site before rebuilding the form (JS-rendered; not captured here).
