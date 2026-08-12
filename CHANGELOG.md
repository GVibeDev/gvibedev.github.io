# Changelog

## GV-PORTFOLIO V0.23 — Commercial / Crowdfunding Foundation

- Added a centralized commercial-provider resolver for PayPal Support, itch.io, Steam, Kickstarter and Patreon.
- Extended project CTA data so an action may reference a provider instead of duplicating a provider URL.
- Extended Product Hub distribution entries with provider-aware commercial actions.
- Added a shared commercial action vocabulary: Support, Download, Wishlist, Buy, Back and Follow development.
- Added a unified `conversion-cta` analytics attribute contract while keeping analytics collection disabled.
- Extended PayPal Support configuration with explicit endpoint kind (`donate-page` or `paypal-me`) and an optional future QR asset.
- Kept PayPal Support disabled until a deliberately selected real public endpoint is configured.
- Kept itch.io, Steam, Kickstarter and Patreon inactive because no real public project/account URLs are configured.
- Added commercial activation and implementation documentation.

### No commercial endpoint activated

V0.23 is an infrastructure milestone. It does not publish a payment, store, wishlist, purchase or crowdfunding CTA by itself.

## GV-PORTFOLIO V0.22 — Community & Social Activation

- Added bilingual `/community/` and `/it/community/` public channel pages.
- Added a shared `ChannelLinks` component driven exclusively by the central ecosystem channel registry.
- Added localized channel descriptions and one activation rule for future development, discovery, community, distribution and crowdfunding channels.
- Replaced the footer hard-coded GitHub link with the shared active-channel renderer and added Community / Support discovery links.
- Added Community discovery from the English Contact page.
- Added Community to the EN/IT route registry and sitemap, bringing the public bilingual surface to 40 URLs.
- Preserved analytics and PayPal as disabled.
- Kept every unconfigured provider invisible: no placeholder account or URL is rendered.

### Current activation state

- GitHub: active.
- YouTube: inactive.
- Newsletter / community service: inactive.
- itch.io: inactive.
- Steam: inactive.
- Kickstarter: inactive.
- Patreon: inactive.

## GV-PORTFOLIO V0.21 — Product Distribution Surfaces

- Added one shared bilingual Product Hub surface for Arena Rubra Digital and Unum Sunt Sprite Studio.
- Extended the distribution data schema with explicit lifecycle stage, publication state, real-link handling and bilingual notes.
- Added real Arena Rubra Play / GitHub / Support endpoints and non-clickable future states.
- Added Sprite Studio Documentation / Requirements / Support with non-clickable unpublished Download / GitHub states.
- Preserved inactive PayPal, analytics, store and crowdfunding providers.

## GV-PORTFOLIO V0.20 — Shared Localized Shell Consolidation

- Replaced the 18 pre-existing Italian full-document HTML routes with Astro routes using the shared `BaseLayout`.
- Centralized the preserved Italian page bodies and page metadata in `src/i18n/it-pages.json`.
- Added a shared `LocalizedContentPage` bridge so Italian pages use the same header, footer, language switch, canonical/hreflang generation, structured data and analytics adapter as English pages.
- Added a named head slot to `BaseLayout` so preserved route-specific styles can be attached without duplicating the site shell.
- Kept the already-native `/it/support/` route on the shared Astro stack.
- Preserved existing Italian URLs and translated page content while removing duplicated static header/footer markup from source routes.
- Updated the sitemap to include the V0.19 Support routes, bringing the bilingual public portfolio surface to 38 indexable URLs.
- Updated the ecosystem release marker to V0.20.

## GV-PORTFOLIO V0.19 — Support Infrastructure + Growth Foundation

- Added `/support/` and `/it/support/` as bilingual voluntary-support pages.
- Added one central ecosystem configuration for Support, contact data, public/future channels and analytics activation.
- Added PayPal-ready Support CTA logic with no invented or clickable placeholder URL.
- Added Plausible-ready analytics infrastructure, disabled by default until a real site/account snippet is supplied.
- Extended project data architecture with configurable future CTAs and distribution-information slots.
- Added planned product-hub slots for Unum Sunt Sprite Studio and Arena Rubra without presenting them as implemented public features.
