# ScanWebTemplate

Zareeva Track consumer verification page. Built to the UI/UX design brief: one shell, many product categories, ten verification states. HTML5, Bootstrap 5.3, Bootstrap Icons, CSS variables, minimal JS. Mobile first.

## Files

| File | Purpose |
|---|---|
| `index.html` | Verified state with a sample product (SoundMax headphones, placeholder). |
| `invalid.html` | Invalid Code state with guidance, Try Again / Report, support. |
| `not-found.html`, `verification-alert.html` | Guidance-shaped states (same skeleton as invalid). |
| `unable-to-verify.html`, `duplicate-scan.html`, `recalled.html`, `expired.html` | Product-shaped states (same skeleton as index, banner swapped, notice block inserted, assurances removed). |
| `loading.html`, `unavailable.html` | Minimal states: status card centred, no product body. |
| `states.html` | All ten status banners side by side, each linked to its page. |
| `product.sample.json` | Data contract the renderer consumes. `fields[]` and `sections[]` are dynamic; `_states` maps status to copy, icon, colour and body layout. |
| `css/styles.css` | Tokens at the top (`--zt-*`). Everything below uses them. |
| `js/app.js` | Modal titles, language selector, gallery thumbnails. Nothing else. |

## Rules that came from the brief

- Colour is semantic. Primary `#062F2B`, success `#159447`, warning `#D99000`, error `#D9232E`, info `#2563A8`. No decorative colour, no gradients, no category motifs.
- The status component is one block with a modifier: `.status.status--verified`, `.status--invalid`, etc. Never build a second banner style.
- Fields and modules are data-driven. The UI has no product schema. Render what `fields[]` and `sections[]` contain, nothing else.
- Modules are a Bootstrap accordion on mobile and a tab rail plus single panel from 1200px, same markup.
- Mobile hierarchy: image, status, product name, key fields, modules, promo, GS1, footer. Desktop is image left, status and data right.
- Header stays lightweight. Mobile: brand, Help, language. Desktop adds How It Works and About. No hamburger.
- Copy avoids "genuine" guarantees the service cannot substantiate. "Verified using GS1 standards" is the ceiling.
- WCAG 2.1 AA targets: 44px touch targets on buttons, visible focus, `role="status"` / `role="alert"` on the banner, icons `aria-hidden` with text carrying meaning.

## Placeholders

Product images are Unsplash. SoundMax is a placeholder brand. The GS1 badge is a generic icon; the GS1 logo needs GS1 licensing before use.
