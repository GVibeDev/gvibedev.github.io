# Changelog

## GV-PORTFOLIO V0.25a — Sprite Studio Visual Flow Polish

- Fixed screenshot carousel navigation so slide changes no longer move the page vertically.
- Thumbnail strip auto-centering is now constrained to the thumbnail container.
- Prepared Sprite Studio hero composition refinement.


## GV-PORTFOLIO V0.25 — Sprite Studio Screenshot Carousel

- Replaced the Sprite Studio static screenshot grid with a focused horizontal carousel.
- Moved the screenshot showcase directly after the 14-workspace overview, before the longer capability sections, so real application UI appears earlier in the page.
- Preserved all V0.24 screenshot assets, localized alt text and existing captions.
- Added native horizontal touch/trackpad scrolling with CSS scroll snap.
- Added previous/next controls, keyboard Left/Right navigation and an active slide counter.
- Added a single-line horizontally scrollable thumbnail strip with selectable thumbnails and a visible active state.
- Added a translucent glass-like presentation layer without changing the site's underlying dark visual language.
- Preserved full-resolution screenshot inspection in a dialog.
- Kept the carousel isolated to Sprite Studio; existing galleries on other project pages are unchanged.
- Added reduced-motion handling and 44px navigation controls.
- No route, sitemap, commercial provider or activation state changed.


## GV-PORTFOLIO V0.24 — Sprite Studio Public Repository & Project Page Refresh

- Rebuilt the Unum Sunt Sprite Studio public page around the current R5c-series product rather than the older Development Preview copy.
- Added the public repository and GitHub Releases endpoints supplied for Sprite Studio.
- Changed the Product Hub from unpublished GitHub/download states to real Repository, Download/Releases and release-history links.
- Replaced the previous Sprite Studio branding with the new icon, extended logo, splash/banner and refreshed social/card artwork.
- Replaced the old screenshot gallery with thirteen current development captures covering video generation, image generation, Project Groups, clean-up, smart selection, alignment, spritesheet decomposition, Productive Presets, Calibration Lab, Guided Workflows, runtime preflight and Runtime Manager.
- Added a dedicated bilingual EN/IT Sprite Studio project layout so the project no longer depends on the legacy preserved Italian HTML body.
- Documented the 14-workspace production pipeline and the R5c1–R5c6 standalone Windows/runtime-management architecture.
- Documented Inno Setup Core/Complete/Custom installation, PyInstaller onedir packaging, preflight, managed/external WanGP distinction, repair/update, opt-in uninstall cleanup, SHA-256 verification and Authenticode checks.
- Preserved the R5c2 policy that no arbitrary fixed GPU/VRAM/RAM minimum is imposed; effective local-generation compatibility is diagnosed against the runtime.
- Marked end-to-end Krea 2 setup as pending after R5c6 rather than presenting it as complete.
- Kept PayPal, itch.io, Steam, Kickstarter, Patreon and analytics activation frozen/inactive.
- No public route was added; sitemap cardinality is unchanged.


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
