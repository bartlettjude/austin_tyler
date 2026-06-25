# 02 — Page-by-Page Audit

Full, verbatim per-page detail (copy, headings, CTAs, images, SEO, issues, rebuild notes) lives in the **`pages/`** folder. This file is the index + at-a-glance matrix. Open the linked page file for the deep capture.

## Page map (all discovered pages)

| Page | URL | In nav? | Real content? | Status | Detail file |
|---|---|---|---|---|---|
| Home | `/` | yes (logo) | ✅ | Keep (rebuild hero) | [pages/home.md](pages/home.md) |
| Services | `/services` | yes | ✅ | Keep → merge w/ Store | [pages/services.md](pages/services.md) |
| Photos | `/photos` | yes | ✅ (strong) | Keep (enhance) | [pages/gallery.md](pages/gallery.md) |
| Videos | `/videos` | yes | ✅ (6 clips) | Keep (add context) | [pages/gallery.md](pages/gallery.md) |
| Information (= "Contact" in nav) | `/information` | yes (as "Contact") | ✅ | Keep → becomes the Contact page | [pages/contact.md](pages/contact.md) |
| Contact (orphan duplicate) | `/contact` | no | ✅ but dup | Merge & delete | [pages/contact.md](pages/contact.md) |
| The Ecosystem | `/the-ecosystem` | no | ❌ template junk | **Delete** | [pages/other-pages/the-ecosystem.md](pages/other-pages/the-ecosystem.md) |
| Store | `/store` | no | ⚠️ partial (stock imgs) | Merge into Book page | [pages/products.md](pages/products.md) |
| → 5 product pages | `/store/p/standard-package-…` | no | ⚠️ 3 empty descs | Rebuild | [pages/products.md](pages/products.md) |
| Sereno / Sofia Parazi | `/sereno-sofia-parazi-photography` | no | ❌ dup of home | **Delete** | [pages/other-pages/sereno-duplicate-homepage.md](pages/other-pages/sereno-duplicate-homepage.md) |
| About | *(does not exist)* | — | ❌ missing | **Create** | [pages/about.md](pages/about.md) |

## At-a-glance highlights per page

### Home — `/`
Hero `H1` "austintylerartistry." (no CTA). Strong bio + three collection write-ups (showcase/promotional/studio). "About Austin →" mis-links to the contact form. Title typo "Entertainement". OG image is the logo, not a photo. **Best copy on the site — keep it.**

### Services — `/services`
Five packages with prices: Live Start-Up $75, Live Showcase $150, Photoshoot $125, Videoshoot $175, Photo+Video $250. Detailed inclusions. **No "Book" button on any package.** Browser title still "Our Story"; empty meta description.

### Photos — `/photos`
~17 strong, varied portfolio photos in a lightbox grid. No copy, no categories, no CTA. Detailed alt text (good). Generic auto-written meta description.

### Videos — `/videos`
One heading "PROMOTIONAL VIDEO" + 6 vertical 9:16 self-hosted clips (no titles/captions). SEO description broken — treats name as cities "Austin and Tyler." No CTA. See `assets/videos/VIDEO_MANIFEST.md`.

### Information (nav "Contact") — `/information`
"TELL ME ABOUT YOUR PROJECT!" inquiry form; 24–48h reply promise; "based in nashville. available for travel." Typo "AUTHENITICTY". Meta description names the **wrong person ("Sofia Parazi")** and wrong city. The actual conversion endpoint.

### Contact (orphan) — `/contact`
Duplicate inquiry form. Better headline ("Let's Work Together") and better/correct meta description than /information, but "tell about your project" is missing "me". Merge the best of both, keep one.

### Store — `/store`
"Store 2". Five products = the five services. 3/5 use **Stocksy stock images**; 3/5 have **empty descriptions**. Not in nav. Live-package fine print has typos ("SCHEDUKED", "AQUIRED"). Decide commerce vs inquiry.

### The Ecosystem — `/the-ecosystem`
**Unfinished Squarespace template demo** (fake testimonial "– Former Customer", fake "Echo/Brightline Project", demo stock images from another site). Delete; salvage one real live-stage banner photo.

### Sereno / Sofia Parazi — `/sereno-sofia-parazi-photography`
**Exact duplicate of the homepage** under the old template slug. Delete (301 → `/`).
