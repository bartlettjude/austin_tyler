# Design Observations

> Based on the live HTML/CSS structure and imagery. Visual/pixel review + responsive testing still pending (browser/screenshots unavailable this pass — see `screenshots/README.md`).

## Strengths
- **Photography carries the design** — strong, moody, B&W-heavy, music-documentary imagery.
- The lowercase **"austintylerartistry."** wordmark (trailing period) is a nice signature device.
- Tight color story driven by **stage lighting** (amber/blue/purple/pink against black).
- Clear conceptual structure: three "collections" (Live / Promotional / Studio).

## Weaknesses / observations
- **Flat hierarchy** — pages are largely stacked image rows; the hero is text-only with no focal CTA.
- **Inconsistent capitalization** (lowercase "showcase collection" next to "promotional COLLECTION"; ALL-CAPS service bullets; "i'll"/"i'LL").
- **Spacing via a blank image** ("Brian Russell Collins Invoice.png") instead of CSS — fragile and odd.
- **White placeholder backgrounds** ("White.jpg") behind service cards.
- **Vertical 9:16 videos** with no framing — will look awkward in a desktop layout.
- **Template defaults** still showing (favicon, OG=logo, "Your Site Title").
- Likely default Squarespace **typography** — no distinctive type system yet.

## Direction for rebuild (see `09_…` for full)
- Dark, cinematic, **image-led**; let photos + a horizontal hero reel dominate a near-black canvas.
- One deliberate **accent color** from the stage-light palette (warm amber or deep red suits the country lean).
- Real **type system** (modern sans for UI + a display face for headlines); consistent casing; lean into the lowercase wordmark intentionally.
- Strong **section rhythm** and whitespace; replace spacer-image hacks.
- Frame vertical clips in phone mockups or a tidy grid; commission a horizontal sizzle reel for the hero.
- Add a clear, repeated **CTA system** and visible booking path.

## To verify on device (pending)
- Mobile hamburger menu behavior & tap targets.
- Image payload/perf on cellular (lots of large photos).
- Color contrast (dark theme) for WCAG AA.
- How the vertical videos render on desktop vs mobile.
- Form layout/validation on mobile.
