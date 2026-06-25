# Page: Contact / Inquiry

⚠️ **There are TWO contact pages on the live site.** The navigation "Contact" link points to **/information**. A second, near-duplicate page exists at **/contact** but is **not linked anywhere** (orphaned). Both should be merged into one on the rebuild.

---

# Primary: /information  (this is what the nav "Contact" opens)

## URL
https://www.austintylerartistry.com/information

## Page Purpose
Project-inquiry / booking lead form. The site's main conversion endpoint.

## Original Page Title
`Information | Capture Your Moment Today — Your Site Title`

## Original Headings *(verbatim)*
- `H3` — TELL ME ABOUT YOUR PROJECT!
- `H4` — I WORK WITH ARTISTS, BRANDS, AND CREATIVES WHO CARE ABOUT AUTHENITICTY, PRESENCE, AND STORYTELLING. IF THAT SOUNDS LIKE YOU, FILL OUT THE FORM BELOW AND i'LL GET BACK TO YOU WITHIN 24-48 HOURS.
- `H4` — based in nashville. available for travel.
> ⚠️ Typo: "AUTHENITICTY" → "AUTHENTICITY". Also inconsistent casing ("i'LL").

## Form
A Squarespace inquiry form. **Exact fields are JS-rendered and were not captured statically** — verify in-browser with client. Expected/standard fields: Name, Email, (Phone), Project type, Message/Details. Promise: reply within **24–48 hours**.

## Images Used
- `IMG_6144.JPG` — "A cameraman filming a musician playing guitar on stage during a live performance." → `team-photos/austin-tyler-team-filming-live-on-stage-01.jpg`
- `Brian Russell Collins Invoice.png` — spacer (remove).

## Contact Info
- "based in nashville. available for travel."
- Footer: austintylerartistry@gmail.com + Instagram.

## SEO / Metadata
- Meta description: "Discover professional photography, videography, and art direction services in Austin and Nashville. Book sessions with **Sofia Parazi** for creative visual storytelling." ⚠️ **Wrong name ("Sofia Parazi") and wrong city ("Austin")** — auto-generated/hallucinated. Must rewrite.

## Issues
- Typo "AUTHENITICTY" in a headline.
- Metadata names the wrong person ("Sofia Parazi") and wrong location.
- Duplicate of /contact.
- "Contact" nav label points here (URL says /information) — confusing.
- Form fields unverified.

## Rebuild Notes
Make this the single Contact page at a clean `/contact` URL with nav label "Contact". Keep the warm, first-person voice ("Tell me about your project") — fix the typo. Keep the 24–48h promise and "based in Nashville, available for travel." Confirm form fields; keep it short (Name, Email, Project type, Date, Budget optional, Message). Add the email + Instagram visibly. Add the cameraman-at-work photo as a supporting visual.

---

# Duplicate / orphaned: /contact

## URL
https://www.austintylerartistry.com/contact  *(not in navigation)*

## Original Page Title
`Contact | Book Your Session Today — Your Site Title`

## Original Headings *(verbatim)*
- `H1` — Let's Work Together
- `H4` — Whether it's a live show or promotional content for an upcoming release, tell about your project below and i'll be in touch
> ⚠️ "tell about your project" is missing the word "me" → "tell **me** about your project".

## Form
Second inquiry form (same purpose as /information).

## SEO / Metadata
- Meta description: "Get in touch with Austin Tyler for booking sessions, live shows, or promotional content. Contact us today to collaborate on your next project." *(this one is actually decent and correct)*

## Issues / Rebuild Notes
This page's **H1 "Let's Work Together" and its meta description are better than the /information versions.** Recommendation: **merge** — use "Let's Work Together" as the headline, "Tell me about your project" as the subhead, the correct meta description from /contact, and delete the duplicate. One contact page only.
