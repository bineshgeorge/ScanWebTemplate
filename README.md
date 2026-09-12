# ScanWebTemplate

Consumer-facing Zareeva Track product verification template.

## Purpose

This is the post-scan experience for consumers who scan a GS1 code on a physical product to check its registered product record. The interface is intentionally designed as a **consumer product experience**, not an administration or analytics portal.

## Design principles

- Unit number is the visual anchor.
- Brand/tenant identity is prominent; Zareeva Track remains the independent record keeper.
- Five supported states: first scan, returning scan, needs checking, code not found, and test record.
- Kilhaven and Vantek use distinct visual personalities through CSS design tokens.
- Responsive/mobile-first layout suitable for QR/GS1 scanning on a phone.
- No Bootstrap or external CDN dependency; the page works as a local static file.
- Forms and state changes remain client-side demo behavior until connected to the production verification API.
- Layout is designed to tolerate long labels and future multilingual/RTL content.

## Demo states

Open `index.html` normally for the first-scan state. Add query strings:

- `?state=returning-scan`
- `?state=needs-checking`
- `?state=too-many-scans`
- `?state=code-not-found`
- `?state=test-record`
- `?state=check-submitted`
- `?tenant=vantek`

States can be combined, for example:

`index.html?tenant=vantek&state=returning-scan`

## Local use

Open `index.html` directly in a browser. No web server or package installation is required for the static demo.

## Production integration

Replace the demo query-string state/data layer with the ScanWeb verification API and real product record payloads. Keep the visual system and tenant tokens independent from the API implementation.
