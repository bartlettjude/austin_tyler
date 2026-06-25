# Developer Notes

## Current platform
- **Squarespace 7.1**, section-based pages. Cloned from a template (origin slug "sereno-sofia-parazi-photography"; demo assets reference site IDs `5ec321c2…` and `635062e6…`).
- Site ID: `6968478fc6fc477d1fb25942`. Primary domain: `www.austintylerartistry.com`. Timezone: America/Chicago (CDT).
- Commerce is enabled (Squarespace Store, 5 products).
- Images served from `images.squarespace-cdn.com` — re-pull at higher res via `?format=2500w` / `?format=original`.
- Videos are **self-hosted Squarespace ("alexandria") adaptive streams** — not portable as simple MP4s; get masters from client.

## If rebuilding OFF Squarespace (recommended for control)
- Good fit: **Next.js** (App Router) + an image CDN, or Astro for a fast static portfolio. (User's environment already favors Next.js.)
- Host on Vercel; use next/image for the heavy galleries; lazy-load.
- Forms: a simple API route + email (Resend/SendGrid) or a form service; keep fields minimal.
- Commerce decision pending — if pay-online is wanted, Stripe Checkout/Payment Links per package is simplest; otherwise inquiry-first (form → email/CRM).
- Content is small/static → consider MDX or a light CMS (Sanity/Contentlayer) so Austin can add galleries.

## Migration / data
- All copy is captured in `pages/` + `03_…`; all image URLs + alt text in `data/all-images.csv`; 35 real images already downloaded to `assets/images/`.
- Video URLs/IDs in `assets/videos/VIDEO_MANIFEST.md`.
- Set up the **redirect map** in `notes/broken-links.md` (esp. `/information`→`/contact`, `/sereno…`→`/`).

## SEO/tech cleanup checklist
- [ ] Set real `<title>` + meta description per page (see `08_…`); add one **H1 per page**.
- [ ] Remove duplicate/junk pages so they're gone, not just unlinked; regenerate sitemap.
- [ ] OG image = a real photo per page (not the logo); add Twitter card.
- [ ] Real **favicon** + touch icons.
- [ ] Add **LocalBusiness** + **Service** + **ImageObject** schema.
- [ ] Single source of truth for pricing (don't duplicate services/store).
- [ ] Human-readable URLs/slugs.
- [ ] Analytics + consent as needed; basic privacy page if forms collect PII.
- [ ] Accessibility: alt text (already good), form labels, focus states, color contrast (dark theme), aria-labels on icon links.

## Verification still needed (browser was unavailable this pass)
- Exact **contact form fields**, required flags, submit text, confirmation message, and submission destination.
- **Screenshots** (desktop + mobile) for every page.
- **Mobile/responsive** behavior and performance on cellular.
