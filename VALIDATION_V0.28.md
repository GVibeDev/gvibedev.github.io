# GVibeDev.cc V0.28 — Validation Checklist

## Build
- [ ] Run `npm run build` on the Windows release workstation.
- [ ] Inspect the generated Rubra Packager EN and IT routes.

## Banner
- [ ] The corrected large Rubra Packager banner is displayed in the splash/product-identity section.
- [ ] The banner is not stretched or cropped unexpectedly on desktop/mobile.

## Purchase CTA
- [ ] Hero shows `Get Rubra Packager — $3.99+` before itch API synchronization.
- [ ] CTA keeps the Rubra Packager navy/gold branding and is usable on keyboard/mobile.
- [ ] Secondary text says checkout/downloads are handled by itch.io and `$3.99` is the minimum.
- [ ] Secondary `View Rubra Packager on itch.io →` link resolves correctly.
- [ ] Distribution section repeats the buy CTA.

## itch.io JavaScript API
- [ ] `https://static.itch.io/api.js` loads once on the Rubra Packager page.
- [ ] Clicking either CTA opens the itch.io checkout for `gvibedev/rubra-packager`; do not complete a test purchase.
- [ ] If API loading is blocked/disabled, the `<a>` fallback still opens `https://gvibedev.itch.io/rubra-packager`.
- [ ] Current price is synchronized through `Itch.getGameData`.
- [ ] If a sale is active, sale price replaces the normal minimum-price label.
- [ ] No API key, token or secret appears in page source/network parameters.

## Content/distribution
- [ ] GitHub is still described as source + documentation + build tooling.
- [ ] itch.io is described as current official purchase/download channel.
- [ ] Site does not directly host or link local Setup/Portable binaries.
- [ ] Future GitHub Release is mentioned only as an additional planned channel.

## EN / IT / regression
- [ ] CTA and distribution explanation work on EN.
- [ ] CTA and distribution explanation work on IT.
- [ ] Screenshot carousel is unchanged.
- [ ] Python → EXE/ONEDIR → Setup section is unchanged.
- [ ] Arena Rubra profile context section is unchanged.
- [ ] Other project pages and MO2 styling are unchanged.
