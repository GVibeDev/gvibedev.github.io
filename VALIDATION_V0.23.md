# GVibeDev.cc V0.23 — Validation Checklist

## Mandatory build gate
- [ ] `npm run build` succeeds.
- [ ] Inspect generated `dist/`.
- [ ] V0.22 Community EN/IT remains intact.
- [ ] V0.21 Product Hubs remain intact.
- [ ] Navbar and language switch remain unchanged.

## Commercial-provider safety
- [ ] PayPal Support remains disabled.
- [ ] No PayPal URL is rendered.
- [ ] No PayPal QR asset is rendered.
- [ ] itch.io remains inactive.
- [ ] Steam remains inactive.
- [ ] Kickstarter remains inactive.
- [ ] Patreon remains inactive.
- [ ] No placeholder commercial URL appears in generated HTML.

## Existing public behavior
- [ ] `/support/` and `/it/support/` still render the disabled Support CTA.
- [ ] Arena Rubra Play still opens the real browser game.
- [ ] Arena Rubra GitHub still opens the real repository.
- [ ] Sprite Studio still has no public download or GitHub CTA.

## Schema / resolver
- [ ] Existing project content validates without migration errors.
- [ ] Commercial-provider actions without an active provider do not render.
- [ ] Explicit normal `href` actions continue to render.
- [ ] Product Hub planned cards remain non-clickable when provider is inactive.

## Analytics contract
- [ ] No analytics network request is generated.
- [ ] Commercial CTA code uses `conversion-cta`.
- [ ] action/provider data attributes are present only on rendered real links.

## Mobile
- [ ] Existing Product Hub cards remain within viewport.
- [ ] Support disabled CTA remains usable/readable.
- [ ] No horizontal overflow.
