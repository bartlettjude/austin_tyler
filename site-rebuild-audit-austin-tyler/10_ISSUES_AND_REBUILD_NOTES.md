# 10 — Issues and Rebuild Notes

Each issue: what · where · why it matters · fix · priority.

## Critical Issues
1. **Half-finished template content is publicly live.** · The Ecosystem (demo content, fake testimonial, demo stock images) + "/sereno-sofia-parazi-photography" (duplicate homepage) + "Store 2"/"Our Story"/"Your Site Title" placeholders. · Reads as unfinished/unprofessional and pollutes SEO. · Delete junk pages, scrub placeholders, set the real site title. · **High.**
2. **No real About page; "About Austin" → contact form.** · Home bio CTA. · Visitors expecting a story hit a form; trust-building is lost. · Build a real `/about`, retarget the CTA. · **High.**
3. **Booking/Store is hidden (not in nav) and pricing is duplicated.** · `/store` orphaned; `/services` separate. · The money path is hard to find and can drift out of sync. · Merge into one Services/Book page, add to nav, single source of pricing. · **High.**
4. **Hero has no CTA; pages have no onward CTA.** · Home hero, end of Photos/Videos/Services. · Major conversion leak. · Add primary "Book a session" CTAs throughout. · **High.**
5. **Broken/auto-generated SEO with wrong facts.** · Videos ("Austin and Tyler" cities), /information ("Sofia Parazi", "Austin"), home title typo. · Misrepresents the brand; hurts search. · Hand-write all titles/descriptions. · **High.**

## Broken Links
- No truly *broken* (404) links found. Issues are **orphaned/duplicate/placeholder** links: `/the-ecosystem`, `/sereno-sofia-parazi-photography`, `/contact` duplicate, "Echo/Brightline Project →" placeholders, and the "Contact"→`/information` label/URL mismatch. · See `notes/broken-links.md`. · **High/Med.**

## Missing Content
- **About page**, **real testimonials/reviews**, **FAQ**, **named client list**, **video titles/context**, **press**, **legal/privacy/usage terms**, **phone (optional)**. · Across site. · Limits trust + SEO + conversion. · Collect from client / write new. · **High–Med.**

## Outdated / Placeholder Content
- "Your Site Title", "Store 2", "Our Story", fake "Former Customer" testimonial, "Echo/Brightline Project", demo stock + Stocksy images, "Brian Russell Collins Invoice.png" spacer. · Remove/replace. · **High.**

## Weak Copywriting
- Typos: "Entertainement", "AUTHENITICTY", "SCHEDUKED", "AQUIRED", "tell about your project" (missing "me"). · Inconsistent casing (lowercase vs ALL CAPS). · 3 empty product descriptions. · Fix all; standardize voice/casing; write product descriptions from the Services inclusions. · **High.**

## Weak Visuals
- Logo-as-OG-image; default favicon; stock product images; blank spacer image; white placeholder backgrounds; no hero image/reel. · Replace with real photos + reel; make favicon; get vector logo. · **Med.**

## Navigation Issues
- "Contact" label → `/information`; no Book/About in nav; two contact pages. · See `06_…`. · Confusing IA. · Restructure nav (Work · About · Services · Contact · Book). · **High.**

## Mobile Issues
- ⚠️ **Not directly verified** (browser/screenshots unavailable this pass). Likely concerns to test: vertical 9:16 videos in a desktop layout, image-heavy load on cellular, hamburger menu, tap targets. · Test on device during rebuild. · **Med (needs verification).**

## SEO Issues
- See `08_SEO_AND_METADATA.md` (missing H1s, wrong/empty/template metadata, duplicate content, no schema, OG = logo). · **High.**

## Accessibility Issues
- Photos page has great alt text ✅, but: spacer images lack purpose, social icon likely lacks visible label, color-contrast of dark theme unverified, form labels unverified, no skip-link styling check. · Audit during rebuild (WCAG AA). · **Med.**

## Conversion Issues
- No hero CTA, no nav Book button, no package Book buttons, no end-of-portfolio CTA, no social proof, hidden store. · Biggest commercial weakness. · Implement full CTA system + testimonials + clear booking. · **High.**

## Technical Issues
- Squarespace template not fully customized; duplicate/orphan pages indexable; pricing in two places; self-hosted videos not easily portable; default favicon; no analytics/schema confirmed. · Clean build + redirects + sitemap on rebuild. · **Med.**

## Content That Needs Client Approval
- Naming promo-cover artists (Lindstrom / "Well To Do", Anthony Gal / "Drive Away Her Memory", "Wine or Whiskey") as clients. · Real testimonials. · Final pricing & package deliverables (esp. $250 combo). · Commerce vs inquiry-first decision. · Which artists appear in the 6 videos.

## Questions for the Client
1. Do you want customers to **pay/deposit online** (real checkout) or **inquire first** then you invoice?
2. Can we **name the artists** in your promo work and portfolio? Any we must NOT show?
3. Do you have **TikTok/YouTube**? Other socials to link?
4. Can you provide **testimonials**, a **headshot**, the **vector logo**, and **master video files**?
5. Want a **phone/text** number listed?
6. Is **"$250 = 1.5 hr photo+video"** correct, and what exactly is delivered?
7. Confirm the **contact form fields** you want (and where submissions should go).
8. Any **press, venues, or recurring clients** worth featuring?
