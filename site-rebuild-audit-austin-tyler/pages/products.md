# Page: Store / Products

## URL
https://www.austintylerartistry.com/store
> ⚠️ NOT linked anywhere in the site navigation — only reachable via direct URL / sitemap. The five products mirror the five Services packages.

## Original Page Title
`Store 2 — Your Site Title`
> ⚠️ "Store 2" (template leftover) + "Your Site Title" placeholder. Empty meta description.

## Original Headings
- `H2` — Store
- `H4` — Filters
- `H4` — No results found  *(default empty-filter state text rendered in markup)*

## Products *(verbatim names & prices)*
| Product | Price | Product URL (slug is template gibberish) | Image | Description |
|---|---|---|---|---|
| PHOTOSHOOT & VIDEOSHOOT | $250.00 | /store/p/standard-package-re4ga-pnmej-tl32m-gl68b | Stocksy stock photo ⚠️ | "AUSTIN TYLER" (effectively empty) |
| LIVE START-UP | $75.00 | /store/p/standard-package-czhc3 | DSC07052.jpg (real) | Has venue/audio fine print (below) |
| LIVE SHOWCASE | $150.00 | /store/p/standard-package-re4ga-xnrch | DSC07408.jpg (real) | Same venue/audio fine print |
| VIDEO SHOOT | $175.00 | /store/p/standard-package-re4ga-pnmej-tl32m | Stocksy stock photo ⚠️ | "AUSTIN TYLER" (empty) |
| PHOTO SHOOT | $125.00 | /store/p/standard-package-re4ga-gpn7e-pd7jz | Stocksy stock photo ⚠️ | "AUSTIN TYLER" (empty) |

## Product fine print *(verbatim — on the two LIVE packages)*
> IF VENUE REQUIRES AUDIO FEE, IT IS UP TO THE ARTISTS DISCRETION TO PURCHASE AUDIO FILE FOR VIDEO USE. IT IS THE ARTISTS RESPONSIBILITY TO SECURE VENUE ACCESS AND NOTIFY VENUE/HOST OF THE PHOTOGRAPHERS PRESENCE. AUSTINTYLERARTISTRY IS NOT RESPONSIBLE FOR MISSED COVERAGE DUE TO VENUE ENTRY RESTRICTIONS. EVENT SCHEDUKED FOR 1 HOUR MAX, OR UNTIL SUFFICIENT CONTENT HAS BEEN AQUIRED.
> ⚠️ Typos: "SCHEDUKED" → "scheduled", "AQUIRED" → "acquired".

## Buttons / CTAs
- Product tiles link to product detail pages.
- Product detail pages have a Squarespace **Add To Cart** button (commerce enabled).
- Store page has Filters UI (pointless for 5 items).

## Images Used
- 3 products use **Stocksy stock photos** (`Stocksy_comp_4338103-min.jpg`, `Stocksy_comp_3880512-min.jpg`) pulled from a Squarespace template — **not Austin's work**. Replace with real shoot photos.
- 2 products use real photos (`DSC07052.jpg`, `DSC07408.jpg`).

## SEO / Metadata
- Title `Store 2 — Your Site Title`, empty description, no OG image. All weak.

## Issues
- Not in navigation → effectively hidden commerce.
- Duplicates `/services` pricing (two places to maintain).
- 3 of 5 products use stock images.
- 3 of 5 product descriptions are empty ("AUSTIN TYLER" placeholder).
- Template title "Store 2", gibberish product slugs.
- Fine-print typos.
- Pointless filter UI for 5 items.

## Rebuild Notes
**Decision needed (client):** does Austin want true e-commerce checkout (pay upfront) or inquiry-first booking? Recommend **merging Services + Store into one "Book" page**: each package shows price + inclusions + a single CTA (either "Reserve / Pay deposit" via commerce or "Request this package" → form). Replace all stock images with Austin's real photos. Rewrite the three empty descriptions using the Services inclusions. Clean up slugs (`/book/live-startup`, etc.), fix typos, drop the filter UI.
