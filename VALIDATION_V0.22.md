# GVibeDev.cc V0.22 — Validation Checklist

## Build gate
- [ ] `npm run build` succeeds.
- [ ] Inspect generated `dist/`.
- [ ] Existing V0.21 Product Hubs still render on EN/IT Arena Rubra and Sprite Studio.
- [ ] Navbar and EN/IT switch remain unchanged.

## Community routes
- [ ] `/community/` exists.
- [ ] `/it/community/` exists.
- [ ] EN ↔ IT switch preserves the Community route.
- [ ] canonical and hreflang are correct.
- [ ] sitemap contains 40 public URLs.

## Active-channel truthfulness
- [ ] GitHub is displayed and points to `https://github.com/GVibeDev`.
- [ ] YouTube is not rendered publicly.
- [ ] Newsletter/community provider is not rendered publicly.
- [ ] itch.io is not rendered publicly.
- [ ] Steam is not rendered publicly.
- [ ] Kickstarter is not rendered publicly.
- [ ] Patreon is not rendered publicly.
- [ ] No placeholder social URL appears.

## Footer / Contact
- [ ] Footer shows Community and Support in EN and IT.
- [ ] Footer external channel links come from `ChannelLinks`.
- [ ] English Contact exposes the Community path.
- [ ] Existing email and GitHub contact behavior still works.

## Privacy / telemetry
- [ ] Social anchors carry analytics-ready data attributes.
- [ ] Analytics remains disabled.
- [ ] PayPal remains disabled.
- [ ] No cookie banner is introduced.

## Mobile / Android
- [ ] Community cards stay inside viewport width.
- [ ] Footer channel row wraps cleanly.
- [ ] No horizontal overflow.
- [ ] External channel touch targets remain at least 44px high.
