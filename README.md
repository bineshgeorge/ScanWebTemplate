# ScanWebTemplate

Consumer landing page for a GS1 Digital Link scan on Zareeva Track. Static HTML, Bootstrap 5.3, no build step.

## Files

| File | Purpose |
|---|---|
| `index.html` | Rendered sample using the NATURA placeholder brand. Open this to review the design. |
| `template.html` | Same markup with mustache-style placeholders. This is what the developer implements. |
| `product.sample.json` | The data contract that fills `template.html`. One object per scanned GTIN. |
| `states.html` | The three verification banner states side by side. |
| `css/styles.css`, `js/app.js` | Shared assets. |

## Chrome vs content

Zareeva Track owns: header, language selector, verified banner, GS1 Digital Link card, footer legal links and copyright.

The brand supplies everything else per GTIN: hero image and copy, product name/variant/description, benefits, detail rows, story block, story cards, mobile CTA card, social links. See `product.sample.json`.

## Layout rules

- Benefits and story cards are count-tolerant. Any number renders; 3 to 5 benefits and 0 to 4 cards look right. Beyond that, wrap the request in a design review.
- Verification has three states: `verified` (no modifier), `unverified` (`verified-banner--unverified`), `failed` (`verified-banner--failed`). Copy for each is in `_verificationStates` in the sample JSON.
- Mobile (< 576px) is a different layout, not a squeezed desktop: inset hero with no copy overlay, Product Details behind an accordion, single dark CTA card, short footer labels.
- `bi-leaf` does not exist in Bootstrap Icons. Leaf icons are inline SVG symbols at the top of the page.

## Placeholders

Hero, thumbnails and the mobile CTA background are Unsplash placeholders. NATURA is a placeholder brand.
