# 04 — Asset Inventory

**Downloaded:** 35 real assets (logo + 26 gallery photos + 2 team/BTS + 3 promo covers + 2 product photos + 1 banner) into `assets/images/…` at up to 2500px. Full machine-readable list with every URL + alt text in **`data/all-images.csv`**. Self-hosted videos: **`assets/videos/VIDEO_MANIFEST.md`**.

Squarespace serves these from `images.squarespace-cdn.com` and they can be re-pulled at higher res by changing the `?format=` param (e.g. `format=2500w`, `format=original`). All real photos are high quality (mostly 2500px, originals larger).

Recommendation key: **Keep** / **Replace** / **Edit** / **Remove**.

---

## Logos
| Asset | Source | Dims | Folder | Quality | Rec |
|---|---|---|---|---|---|
| `LOGO.png` → `austin-tyler-logo-primary-01.png` | squarespace-cdn …/LOGO.png | 1500×844 (≈30 KB) | `images/logos/` | 7/10 | **Keep / get vector** — currently only a raster PNG and it's used as the OG/social image too. Ask client for an SVG/master + a square + a light/dark version. Favicon is still the default Squarespace icon — **make a real favicon.** |

---

## Hero Images
The current site has **no dedicated hero image** (hero is just the H1 wordmark). Best candidates already collected for a new hero:
| Candidate | File | Why |
|---|---|---|
| Austin with camera | `team-photos/austin-tyler-team-portrait-with-camera-01.jpg` | Puts a face to the brand. |
| B&W performer + spotlights | `gallery/austin-tyler-gallery-home-01.jpg` | Dramatic, full-bleed friendly. |
| Orange-light live stage + crew | `misc/austin-tyler-ecosystem-banner-live-stage-orange-01.png` | Shows him at work, cinematic. |
*Rec: **Edit/select** one strong full-bleed image (or commission a horizontal video reel) for the new hero.*

---

## Gallery Images (real portfolio — the site's crown jewels)
**26 photos** downloaded to `images/gallery/`. Mix of B&W live performance, color live, studio portraits, and lifestyle/outdoor portraits. Mostly 2500px; portraits 2500×3750, landscapes 2500×1667. Quality **8–9/10**. **Keep all**; curate to the strongest for the rebuild.

Representative (full alt text in CSV):
- `…home-01..08` — B&W live performers, Bluebird Cafe shot, studio cowboy-hat portraits.
- `…services-09..11` — performance shots used on the services page.
- `…photos-12..26` — the full /photos set: country-stage shots, neon-bar performer, forest portrait, graffiti-alley portrait, vintage-car portrait, garden portrait, etc.

---

## Promotional Cover Art (named artist releases — social proof)
| File | Release / Artist (from on-image text) | Dims | Rec |
|---|---|---|---|
| `misc/austin-tyler-promo-cover-well-to-do-lindstrom-01.png` | "'WELL TO DO' — LINDSTROM" | 2500×2500 | **Keep** — feature as named work. |
| `misc/austin-tyler-promo-cover-drive-away-her-memory-anthony-gal-01.jpg` | "Drive Away Her Memory — Anthony Gal" | 2000×2000 | **Keep.** |
| `misc/austin-tyler-promo-cover-wine-or-whiskey-01.png` | "Wine or Whiskey" | 2500×2500 | **Keep.** |
*These prove real paying artist clients — use them (with permission) as a "Featured work / Clients" strip.*

---

## Team / Behind-the-Scenes Photos
| File | Description | Dims | Rec |
|---|---|---|---|
| `team-photos/austin-tyler-team-portrait-with-camera-01.jpg` | Austin in camo cap holding a camera ("Shoot and Share on the Bridge"). | 2500×3750 | **Keep** — About/hero. |
| `team-photos/austin-tyler-team-filming-live-on-stage-01.jpg` | Cameraman filming a guitarist live. | 2500×3750 | **Keep** — Services/Contact visual. |

---

## Product Images
| File | Used for | Rec |
|---|---|---|
| `product-images/austin-tyler-product-live-startup-01.jpg` (DSC07052) | Live Start-Up product | **Keep** (real). |
| `product-images/austin-tyler-product-live-showcase-01.jpg` (DSC07408) | Live Showcase product | **Keep** (real). |
| ⚠️ `Stocksy_comp_4338103-min.jpg`, `Stocksy_comp_3880512-min.jpg` (NOT downloaded) | Photo Shoot / Video Shoot / Photo+Video products | **Replace** — these are **Stocksy stock photos**, not Austin's work. |

---

## Background Images
| File | Rec |
|---|---|
| `White.jpg` (plain white card bg, not downloaded) | **Remove** — use CSS, not an image. |

---

## Banner / Misc
| File | Description | Rec |
|---|---|---|
| `misc/austin-tyler-ecosystem-banner-live-stage-orange-01.png` (The Ecosystem.png) | Real orange-lit live stage w/ crew. 1536×1024. | **Keep** — reuse though the Ecosystem page is deleted. |

---

## Videos
**6 self-hosted Squarespace videos**, vertical 9:16, ~22–45s. **Could not be downloaded** (adaptive HLS). URLs/IDs in `assets/videos/VIDEO_MANIFEST.md`. **Collect master files from client.**

---

## Audio
None on the site. (Live packages mention "audio/master recording sync" as a *deliverable*, but no audio is published on the site.) — **N/A.**

## PDFs / Documents
None. — **N/A.**

## Icons
Only the Instagram social icon (Squarespace built-in) + default favicon. **Make a real favicon**; otherwise N/A.

---

## ⚠️ Junk / template / placeholder assets (document — do NOT reuse)
| Asset | Where | Why discard |
|---|---|---|
| `Brian Russell Collins Invoice.png` | ~12× sitewide as a spacer/divider | Blank spacer with a bizarre, unprofessional source filename (reads like a scanned invoice). Replace with CSS spacing. |
| `White.jpg` | services/videos | Placeholder background. |
| `imgg-demo-uJn12BIr.png`, `imgg-demo-9d2jDe4u.png`, `imgg-demo-ZRjbSa11.png` | The Ecosystem | Squarespace **template demo** images from a different site ID. |
| `Stocksy_comp_4338103-min.jpg`, `Stocksy_comp_3880512-min.jpg` | Store products | Licensed **stock** placeholders. |

---

## Asset needs from client (missing)
- Logo in **vector (SVG/AI/EPS)** + square + light/dark variants; a real **favicon**.
- **Master video files** (and a horizontal demo reel).
- A confident **headshot** for the About page.
- Replacement **real photos** for the 3 stock-image products.
- Confirmation to publicly name promo-cover artists (Lindstrom, Anthony Gal, etc.).
