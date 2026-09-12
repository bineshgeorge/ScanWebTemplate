# ScanWebTemplate

DenebTrack / ScanWeb consumer verification template.

## Stack
- Bootstrap 5.3.8
- Custom CSS tokens for tenant theming
- No framework dependency beyond Bootstrap
- Static HTML so it can be opened locally without a web server

## Demo states
Open `index.html` normally for the first-scan state. Add one of these query strings:

- `?state=returning-scan`
- `?state=needs-checking`
- `?state=code-not-found`
- `?state=test-record`
- `?tenant=vantek`

Examples can be combined, e.g. `index.html?tenant=vantek&state=returning-scan`.

## Production
Bootstrap is referenced at 5.3.8 for the static demo. For production, vendor the Bootstrap assets locally rather than relying on a third-party CDN, in line with the ScanWeb technical brief.
