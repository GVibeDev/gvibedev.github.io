# GVibeDev.cc V0.28 — Rubra Packager itch.io Distribution Activation

Baseline: **V0.27a validated/frozen**.

This candidate updates only the Rubra Packager commercial/distribution surface and the corrected banner asset.

## Confirmed product endpoint

- Creator: `gvibedev`
- Product slug: `rubra-packager`
- Product URL: `https://gvibedev.itch.io/rubra-packager`
- Initial minimum-price fallback shown by the page: `$3.99+`

## Checkout integration

The Rubra Packager page keeps the GVibeDev navy/gold design and uses a normal `<a>` fallback to the product page. When the official itch.io JavaScript API loads, `Itch.attachBuyButton` converts the branded CTA into an itch checkout trigger. `Itch.getGameData` updates the displayed price and sale state.

No iframe widget is used. No itch.io API key or private token is needed or embedded.

## Distribution copy

GitHub remains the public source/build-tooling repository. itch.io is now the official current purchase/download channel for compiled builds. The site does not directly host Setup or Portable artifacts.
