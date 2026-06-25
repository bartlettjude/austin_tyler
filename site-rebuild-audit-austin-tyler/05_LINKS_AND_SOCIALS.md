# 05 — Links and Socials

Machine-readable versions: `data/all-links.csv`, `data/all-socials.csv`.

## Internal Links
| Link text | URL | Where | Recommendation |
|---|---|---|---|
| (logo) | `/` | Header, all pages | Keep. |
| Services | `/services` | Header nav | Keep (merge into Book). |
| Photos | `/photos` | Header nav | Keep. |
| Videos | `/videos` | Header nav | Keep. |
| Contact | `/information` | Header nav | **Fix** — label "Contact" but URL `/information`; rename URL to `/contact`. |
| About Austin → | `/information` | Home bio | **Fix** — should go to a real About page. |
| View full gallery → | `/photos` | Home (×3) | Keep (consider per-collection targets). |
| 5 product tiles | `/store/p/standard-package-…` | Store | Keep but **rename slugs** (currently template gibberish). |

## External Links
None except the Instagram social link below. (No outbound links to venues, artists, press, streaming, etc. — an opportunity.)

## Social Media Links
| Platform | Handle | URL | Where | Active? | Include on new site? |
|---|---|---|---|---|---|
| **Instagram** | @austintylerartistry | https://www.instagram.com/austintylerartistry/ | Header + footer (all pages) | Linked (added ~Jan 2026) | **YES** — header, footer, contact. Primary social channel. |

> Only **one** social account is connected. No TikTok, YouTube, Facebook, X, Threads, Spotify, etc. Given the vertical promo videos, a **TikTok/YouTube** presence likely exists or should — **ask client** and link them.

## Streaming / Music Links
None. *Opportunity:* link the artists' releases he shot (Spotify/Apple) as proof, with permission.

## Store / Commerce Links
`/store` + 5 product pages (Squarespace Commerce). Not in nav. See `pages/products.md`.

## Booking / Ticket Links
None (no Calendly/Acuity/external booking detected — booking is via the on-site form/store).

## Press Links
None.

## Email Links
| Value | Where | Note |
|---|---|---|
| austintylerartistry@gmail.com | Footer (all pages) | Shown as text. **Make it a `mailto:` link** on rebuild. Consider a branded domain address (austin@austintylerartistry.com). |

## Phone Links
None. No phone number anywhere. Add only if Austin wants calls/texts.

## Broken / Suspicious / Orphaned Links
| Item | Issue | Fix |
|---|---|---|
| `/the-ecosystem` | Template-junk page, public, in sitemap, not in nav | **Delete** page. |
| `/sereno-sofia-parazi-photography` | Duplicate of homepage, public, in sitemap | **Delete** → 301 to `/`. |
| `/contact` | Orphaned duplicate contact page | **Merge** into one contact page. |
| `The Echo Project →`, `The Brightline Project →` | Placeholder CTAs on Ecosystem (go nowhere meaningful) | **Remove** with the page. |
| "Contact" → `/information` | Label/URL mismatch | Normalize to `/contact`. |

## Recommended social/footer inclusion for the new site
- **Header:** Instagram icon (+ TikTok/YouTube if they exist).
- **Footer:** Instagram, TikTok, YouTube (if any), email (mailto), "based in Nashville · available for travel / tour", copyright.
- **Contact page:** form + email + Instagram, all visible.
