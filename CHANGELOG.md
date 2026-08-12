# Changelog

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

## GV-PORTFOLIO V0.12 — Arena Rubra Shared Architecture + Digital Expansion

- Expanded Arena Rubra Digital into a dedicated system / testing project page while preserving the existing visual identity, playable-app CTA and public repository link.
- Added a dedicated `ArenaRubraDigitalLayout` with The Digital Arena, shared factions, Testing Lab, Digital vs Tabletop comparison, ecosystem navigation and current-build screenshot evidence.
- Reused the shared Arena Rubra data module for canonical faction descriptions, core principles, testing summary and related-project navigation.
- Updated the testing summary to the validated `1000+` total Arena Rubra match figure.
- Added seven optimized screenshots from the current Arena Rubra digital build: match overview, tactical zoom, Control Center, Map Editor, guided tutorial, telemetry and Starter splash.
- Applied Board Game polish: corrected the Fabeot faction image framing and simplified the `Designed by playing it` section by removing the oversized legacy statistic presentation and preventing layout overlap.
- Preserved the Tabletop page structure, physical-prototype disclaimer, gallery, sample cards and existing factual tabletop content.

## GV-PORTFOLIO V0.11 — Unum Sunt Content Expansion v1.0

- Expanded the Unum Sunt — Radix Machinae page from preview showcase to fuller editorial project page.
- Replaced the earlier sectional copy with five new public blocks: Synopsis, A Story Built in Cycles, Signals / How to Read Unum Sunt, Author's Note, and Development Status.
- Preserved the existing visual identity, hero, preview library and editorial layout.
- Added five new optimized project artworks to support the expanded sections without turning the page into a lore wiki.
- Kept the page focused on the novel as a public-facing work in development rather than a full lore archive.
- Preserved the existing Italian and English preview PDF access.
