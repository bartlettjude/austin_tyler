# austintyler. — photography portfolio

A warm, editorial, photography-first website for **Austin Tyler**, a Nashville live-music
photographer (concerts, artists, dance, country, lifestyle). Built with Next.js (App
Router) + Tailwind v4. Designed to be clean, fast, responsive, and easy to edit.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Design system
- **Type:** Fraunces (heavy black display / editorial serif) + Archivo (clean body/UI).
- **Palette:** warm white / cream / beige / brown with soft-gold accents and near-black ink. Tokens live in `src/app/globals.css` under `@theme`.
- **Motion:** film-grain overlay, staggered hero load-in, scroll reveals, and photo hover frames. All respect `prefers-reduced-motion`.

## Editing content (no deep code needed)
| What | Where |
|---|---|
| Site name, email, Instagram, nav, services | `src/data/site.js` |
| Portfolio photos (order = display order) | `src/data/photos.js` |
| Colors / fonts / animations | `src/app/globals.css` (`@theme`) |
| Page copy | the matching file in `src/app/<page>/page.js` |

### Swapping in real photos
1. Drop image files into `public/photos/`.
2. Update the `src` (and `orientation`) entries in `src/data/photos.js`.
   - `orientation`: `"portrait"` | `"landscape"` | `"square"` controls grid sizing.
3. Update `HERO_PHOTO`, `ABOUT_PHOTO`, etc. at the bottom of that file.

Plain `<img>` tags are used on purpose so photos drop in with zero config.

## Pages
`/` home · `/portfolio` photo grid · `/about` · `/services` · `/contact` (booking form).

## Hooking up the real thing (later)
- **Contact form:** `src/components/ContactForm.js` validates client-side and shows a success
  state. Add a real submit handler (email service / CRM / API route) where the `TODO` is marked.
- **Store (future):** a store/Shopify section was intentionally removed to keep the focus on the
  portfolio. It can be added back later as its own route without touching the rest of the site.

## Notes
- Source photos and the full content audit live in the sibling
  `../site-rebuild-audit-austin-tyler/` folder.
- No fixed branding/logo system yet — the wordmark `austintyler.` is intentionally simple and
  easy to replace later.
