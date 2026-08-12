# Changelog

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

### Transitional architecture retained intentionally

- Italian page bodies are preserved as centralized localized content fragments and still reuse a limited set of validated compiled route styles from `public/_astro`.
- V0.20 consolidates the shell without rewriting every translated project page at once.
- Product-specific bilingual components can now replace these content fragments incrementally in later distribution milestones.

## GV-PORTFOLIO V0.19 — Support Infrastructure + Growth Foundation

- Added `/support/` and `/it/support/` as bilingual voluntary-support pages.
- Added one central ecosystem configuration for Support, contact data, public/future channels and analytics activation.
- Added PayPal-ready Support CTA logic with no invented or clickable placeholder URL.
- Added Plausible-ready analytics infrastructure, disabled by default until a real site/account snippet is supplied.
- Extended project data architecture with configurable future CTAs and distribution-information slots.
- Added planned product-hub slots for Unum Sunt Sprite Studio and Arena Rubra without presenting them as implemented public features.
- Consolidated Contact around centralized active channels and added discreet Support discovery from About/Contact.
- Carried forward the V0.18 canonical Arena Rubra URL normalization and raw B&W Survivors `noindex` fix.
- Preserved the validated EN/IT language switch and added Support to the translated-route registry.
- Added the ecosystem roadmap and validation documentation.

### Intentionally not activated

- PayPal link: not configured.
- Analytics collection: disabled.
- YouTube / newsletter / itch.io / Steam / Kickstarter / Patreon: no public URLs configured and therefore not rendered.
- Community Depot, commercial Arena Rubra edition, Sprite Studio public download/store pages: architecture only.

## GV-PORTFOLIO V0.18 — Live Domain QA & Performance

- Audited the actual GitHub Pages artifact after V0.17 production fixes.
- Verified 36 indexable EN/IT portfolio URLs, metadata, hreflang, sitemap and internal links.
- Established `npm run build` + `dist/` inspection as the mandatory pre-deployment validation gate.

## GV-PORTFOLIO V0.13 — About + Contact + Manuale LLM

- Added a full `/about/` page for GVibeDev as a personal workshop rather than a corporate or agency-style profile.
- Added a full `/contact/` page with public GitHub and email contact channels.
- Updated primary navigation so `About` now points to the real standalone page and added a `Contact` entry.
- Added `Manuale LLM` as a public project page, linked to the repository `GVibeDev/Manuale_LLM`.
- Introduced a concise public positioning for AI use on the site: tools, method and responsibility rather than automation hype.
- Added dedicated public assets for the Manuale LLM project cover.
