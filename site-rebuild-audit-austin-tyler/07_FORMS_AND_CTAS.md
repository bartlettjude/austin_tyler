# 07 — Forms and CTAs

Machine-readable CTA list: `data/all-ctas.csv`.

## Forms

### Form 1 — Project inquiry (PRIMARY) · `/information` (nav "Contact")
| Field | Detail |
|---|---|
| Purpose | Booking / project inquiry — the site's main conversion endpoint. |
| Heading | "TELL ME ABOUT YOUR PROJECT!" |
| Subhead | "I work with artists, brands, and creatives who care about authenticity, presence, and storytelling. If that sounds like you, fill out the form below and I'll get back to you within 24-48 hours." *(live copy has typo "AUTHENITICTY")* |
| Fields | ⚠️ **JS-rendered — not captured statically.** Standard Squarespace inquiry form. Likely: Name, Email, (Phone), message/details, possibly project type. **Verify on the live site.** |
| Submit button | Not captured (JS). Verify wording. |
| Confirmation msg | Not captured. Verify. |
| Destination/action | Squarespace form handler → emails austintylerartistry@gmail.com (assumed). |
| Issues | Typo in subhead; fields unknown; duplicate of Form 2. |
| Rebuild rec | Make this THE contact form. Keep it short: Name, Email, Project type (Live / Promo / Studio / Other), Date (optional), Budget (optional), Message. Keep the 24–48h promise. Add success state + autoresponder. |

### Form 2 — "Let's Work Together" (DUPLICATE) · `/contact` (orphaned)
| Field | Detail |
|---|---|
| Purpose | Same as Form 1. |
| Heading | "Let's Work Together" |
| Subhead | "Whether it's a live show or promotional content for an upcoming release, tell about your project below and i'll be in touch" *(missing "me" → "tell me about your project")* |
| Fields / submit / confirmation | JS-rendered — not captured. |
| Rebuild rec | **Merge into Form 1** and delete. Use this page's better headline ("Let's Work Together") + its (correct) meta description. |

> **Action for human:** open both forms in a browser and record exact fields, required flags, submit text, and confirmation message before rebuilding.

---

## CTAs / Buttons (current)

| Button | Page · Section | Destination | Clear? | Recommendation |
|---|---|---|---|---|
| About Austin → | Home · bio | `/information` | ❌ misleading | **Fix** → point to real About page. |
| View full gallery → (×3) | Home · each collection | `/photos` | ✅ | Keep; consider per-collection targets. |
| Add To Cart | Product pages | cart/checkout | ⚠️ ok | **Rewrite** → "Book this package". |
| Instagram icon | Header + footer | IG profile | ✅ | Keep; add aria-label. |
| Nav "Contact" | Header | `/information` | ⚠️ | **Fix** label/URL mismatch. |
| The Echo / Brightline Project → | Ecosystem | placeholder | ❌ | **Remove** (delete page). |
| Form submit | Contact forms | handler | ❓ | Verify wording. |

## ⚠️ Missing CTAs (biggest conversion gaps)
1. **No primary hero CTA** on the homepage — the hero is a heading only. **Add "Book a session" + secondary "View work".**
2. **No "Book" button on any Services package** — visitors can't act on the pricing page.
3. **No booking link in the main navigation.**
4. **No CTA at the end of Photos/Videos** — people leave the portfolio with nowhere to go.
5. **No newsletter/Instagram-follow prompt** beyond the icon.

## Recommended CTA system for the rebuild
- **Primary (everywhere):** "Book a session" / "Book a package" → Services/checkout.
- **Secondary:** "View work" → /work, "Get in touch" → /contact, "Follow on Instagram".
- Put a primary CTA in: hero, end of each portfolio page, each package card, About page, and a sticky header **Book** button.
- Per-package CTA wording: "Reserve Live Showcase →", "Book Photo Shoot →", etc.
