# 08 — SEO and Metadata

## Per-page metadata (as currently live)

### Home `/`
- **Meta title:** `Music Entertainement Photography and Video Services` ⚠️ typo "Entertainement"; no brand/location.
- **Meta description:** "Austin Tyler offers Nashville-based photography and videography services, capturing authentic moments in live performances, branding, and studio sessions to tell compelling visual stories." ✅ good.
- **H1:** austintylerartistry. · **H2/H3:** photography & videography; showcase/promotional/studio collection.
- **OG title:** = meta title · **OG description:** = meta desc · **OG image:** the LOGO (1500×843) ⚠️ should be a photo.
- **og:site_name:** `Your Site Title` ⚠️ placeholder. · **twitter:card:** summary · **Canonical:** https://www.austintylerartistry.com
- **Schema:** none beyond Squarespace defaults. **Favicon:** default Squarespace.

### Services `/services`
- **Title:** `Our Story — Your Site Title` ⚠️ leftover template title. · **Description:** *(empty)* ⚠️ · **OG image:** none · **H1:** none (packages are H3). ⚠️ no H1.

### Photos `/photos`
- **Title:** `Photos | Capture Your Moments - Book Now — Your Site Title`
- **Description:** "Explore professional photography services and galleries. Book your session today to capture memorable moments with top photographers." ⚠️ generic; "top photographers" (it's one person). · **H1:** none ⚠️. · Image **alt text: excellent & detailed** ✅ (keep).

### Videos `/videos`
- **Title:** `Videos | Discover and book your video sessions now — Your Site Title`
- **Description:** "Explore our collection of videos showcasing services and sessions available **in Austin and Tyler**. Book your session today for professional video content." ⚠️ **auto-generated SEO misreads the name as the cities Austin & Tyler, TX.** · **H1:** none (only an H4 "PROMOTIONAL VIDEO") ⚠️.

### Information `/information` (nav "Contact")
- **Title:** `Information | Capture Your Moment Today — Your Site Title`
- **Description:** "Discover professional photography, videography, and art direction services in **Austin and Nashville**. Book sessions with **Sofia Parazi** for creative visual storytelling." ⚠️ **wrong name (Sofia Parazi) + wrong city (Austin).** · **H1:** none (H3/H4 only).

### Contact `/contact` (orphan)
- **Title:** `Contact | Book Your Session Today — Your Site Title`
- **Description:** "Get in touch with Austin Tyler for booking sessions, live shows, or promotional content. Contact us today to collaborate on your next project." ✅ correct & decent. · **H1:** "Let's Work Together" ✅ (the only good H1 on the site).

### The Ecosystem `/the-ecosystem`
- **Title:** `The Ecosystem | Discover Ecosystem Solutions – Get Started Today — Your Site Title` ⚠️ template. · Generic auto description. **Delete page.**

### Store `/store`
- **Title:** `Store 2 — Your Site Title` ⚠️ · **Description:** empty · **OG image:** none.

### /sereno-sofia-parazi-photography
- Inherits the **homepage** title/description/canonical (canonical → homepage). ⚠️ duplicate content.

---

## Sitewide SEO issues
| Issue | Severity | Fix |
|---|---|---|
| `og:site_name` = "Your Site Title" (placeholder) everywhere | High | Set site title to "Austin Tyler · Nashville Photo + Video" (or similar). |
| Title typo "Entertainement" (home) | High | Fix spelling. |
| Auto-generated descriptions read "Austin and Tyler" as cities (Videos) | High | Rewrite all descriptions by hand. |
| Wrong name "Sofia Parazi" + wrong city in /information desc | High | Rewrite; scrub template origin. |
| Leftover template titles ("Our Story", "Store 2") | High | Rewrite all titles. |
| Missing/empty descriptions (Services, Store) | Med | Write unique descriptions per page. |
| **No H1 on most pages** (Services, Photos, Videos, Information) | High | Add one clear H1 per page. |
| Duplicate content (homepage vs /sereno…) | High | Delete + 301. |
| OG image is the logo, not a photo | Med | Use a strong photo per page. |
| Default Squarespace favicon | Low | Real favicon. |
| Pricing duplicated (services/store) | Low | Consolidate. |
| No schema markup (LocalBusiness / Service / ImageObject) | Med | Add LocalBusiness + Service schema. |

---

## SEO notes & opportunities

**Keywords the current site (accidentally) targets:** "photography and video services", "capture your moments", and — by mistake — "Austin and Tyler" (cities). Inconsistent and partly wrong.

**Keywords it SHOULD target:**
- "Nashville concert photographer", "Nashville live music photographer", "Nashville music videographer"
- "country artist photographer Nashville", "Bluebird Cafe / honky-tonk live photography"
- "musician promo photos Nashville", "music video content creator Nashville", "artist branding photos"
- "live performance photographer near me", "tour photographer / videographer for hire"

**Local SEO opportunities:** strong — he's a Nashville niche service. Add **LocalBusiness schema** (Nashville, service area = travel/tour), a Google Business Profile, Nashville venue name-drops (Bluebird Cafe already in a photo), and city/genre terms in titles + H1s.

**Image SEO:** alt text is already detailed and great — keep it. Add descriptive filenames (the new asset names already do this), captions with artist/venue names, and ImageObject schema on the portfolio.

**Metadata rewrite recommendations (suggested):**
- Home title: `Austin Tyler — Nashville Music Photographer & Videographer`
- Home desc: keep current (it's good), maybe add "Live shows, promo content & studio sessions for artists. Based in Nashville, available to tour."
- Photos: `Photography Portfolio — Live, Promo & Studio | Austin Tyler` 
- Videos: `Video Portfolio — Promo Reels for Artists | Austin Tyler (Nashville)`
- Services: `Photo & Video Packages for Musicians | Austin Tyler`
- Contact: `Book a Session — Nashville Photo & Video | Austin Tyler`

**Pages that most need stronger SEO:** Services (empty), Store (empty), Videos (wrong), Information (wrong) — and add H1s everywhere.
