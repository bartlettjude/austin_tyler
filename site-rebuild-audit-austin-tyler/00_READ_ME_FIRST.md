# 00 — READ ME FIRST

## What this folder is
A complete pre-rebuild **content & asset archive + audit** of the existing Austin Tyler website. Everything useful from the current site has been collected, organized, and documented so a designer/developer can rebuild from scratch without ever needing to re-scrape the old site.

| | |
|---|---|
| **Website audited** | https://www.austintylerartistry.com/ |
| **Brand / artist** | Austin Tyler — "austintylerartistry." |
| **What he does** | Nashville-based photographer & videographer for music artists (live, promotional, studio) |
| **Platform (current)** | Squarespace 7.1 (cloned from a template — origin slug "sereno-sofia-parazi-photography") |
| **Date of audit** | 2026-06-25 |
| **Audited by** | Pre-rebuild content/asset extraction pass |
| **Site age** | New build — assets/socials added ~Jan 2026, content last modified ~Apr 2026 |

## Purpose
Collect EVERYTHING useful (copy, images, videos, links, contacts, SEO, brand voice) and flag everything broken/placeholder, so the rebuild is cleaner, more modern, easier to navigate, and more conversion-focused — while preserving the genuinely good brand copy and the strong photography.

## How this folder is organized
- `00`–`12` numbered Markdown files = the audit (overview → page-by-page → inventories → issues → recommended new structure → handoff).
- `pages/` = per-page captured content (verbatim copy, headings, CTAs, images, SEO, issues, rebuild notes).
- `assets/` = downloaded real images (logo, gallery, team, product, promo covers), plus a `videos/VIDEO_MANIFEST.md` for the self-hosted videos.
- `data/` = machine-readable CSVs (pages, links, images, socials, contacts, CTAs).
- `notes/` = working notes (quick wins, missing content, broken links, design/copy/dev observations).
- `screenshots/` = see `screenshots/README.md` (screenshots could not be auto-captured — see limitations).

## Most important files to read first
1. **`12_REBUILD_HANDOFF_SUMMARY.md`** — the executive summary + top-10 priorities.
2. **`10_ISSUES_AND_REBUILD_NOTES.md`** — everything wrong, prioritized.
3. **`11_RECOMMENDED_NEW_SITE_STRUCTURE.md`** — the proposed new sitemap + homepage order.
4. **`03_CONTENT_INVENTORY.md`** — all the good copy worth keeping.
5. **`pages/`** — page-level detail when building each page.

## What still needs human review (do not skip)
- **Contact form fields** — JS-rendered; not captured statically. Verify the live form before rebuilding.
- **Videos** — 6 self-hosted clips couldn't be downloaded; collect master files from Austin.
- **Real client/artist names & testimonials** — confirm which artists can be named (Lindstrom, Anthony Gal, "Well To Do", "Wine or Whiskey" appear on promo covers).
- **Commerce decision** — does Austin want pay-online checkout or inquiry-first booking?
- **Anything marked "client confirmation needed"** throughout the docs.

## Limitations during this audit
- The browser automation extension was **not connected**, so: no screenshots were taken, JS-rendered form fields weren't read, and the self-hosted videos (adaptive HLS streams) weren't downloaded. Everything else was extracted from the live HTML + Squarespace JSON and is complete.
- Static-stock/template images were documented but intentionally **not** downloaded (they're not Austin's work).
