# Broken / Orphaned / Problem Links

> No hard 404s were found. The problems are **orphaned, duplicate, placeholder, or mislabeled** links. Verify the contact-form submit target in a browser (not captured this pass).

| Item | Type | Problem | Recommended fix |
|---|---|---|---|
| `/the-ecosystem` | Orphan / template junk | Public + in sitemap, not in nav, 100% placeholder | Delete page (410 or 301 → /work) |
| `/sereno-sofia-parazi-photography` | Orphan / duplicate | Exact duplicate of homepage | Delete, 301 → `/` |
| `/contact` | Orphan / duplicate | Second contact page, not in nav | Merge into one contact page |
| Nav "Contact" → `/information` | Mislabeled | Label/URL mismatch | Rename URL to `/contact` (or relabel) |
| "About Austin →" → `/information` | Mis-targeted | Goes to contact form, not About | Point to real `/about` |
| "The Echo Project →" / "The Brightline Project →" | Placeholder | Template CTAs, no real destination | Remove with the Ecosystem page |
| `/store` + 5 product pages | Orphan | Not linked in nav | Add to nav / merge into Services |
| Product slugs `standard-package-…` | Junk slug | Template gibberish URLs | Rename to readable slugs |
| Footer email | Not a link | Shown as plain text | Make it `mailto:` |

## Redirect map to set on rebuild
```
/information                          → /contact   (301)
/contact (old form)                   → /contact   (consolidated)
/sereno-sofia-parazi-photography      → /           (301)
/the-ecosystem                        → /work or 410
/store                                → /services   (301)
/store/p/standard-package-czhc3       → /services#live-startup
/store/p/standard-package-re4ga-xnrch → /services#live-showcase
/store/p/standard-package-re4ga-gpn7e-pd7jz → /services#photo-shoot
/store/p/standard-package-re4ga-pnmej-tl32m → /services#video-shoot
/store/p/standard-package-re4ga-pnmej-tl32m-gl68b → /services#photo-video
```
