# Changelog

## GV-PORTFOLIO V0.17 — Production Polish / Full EN-IT Source

### V0.17 candidate hotfix — Header navigation visibility

- Removed the extra `site-header__desktop` / `site-header__mobile` visibility wrappers introduced during source-level localization.
- Restored a single header control row: `MainNav`, language switch and `MobileNav`.
- Desktop/mobile visibility is again owned only by `MainNav.astro` and `MobileNav.astro`, matching the previously validated header behavior.
- Fixes the regression where the English Astro-rendered pages could hide the top navigation while the static Italian pages still displayed it.


- Integrated the complete validated Italian public portfolio into the actual Astro source tree under `src/pages/it/`.
- Added a persistent visible EN/IT segmented language control to the source-level site header.
- Added locale-aware navigation, footer, canonical, hreflang, x-default and OpenGraph locale metadata.
- Added source-level production SEO/accessibility metadata and structured data.
- Added sitemap, robots and the branded bilingual 404 to the source/deploy path.
- Kept the B&W Survivors standalone runtime playable while marking the runtime itself `noindex`.
- Added reduced-motion handling and preserved visible keyboard focus.
- Corrected the stale About → BiggityKot link.
- This milestone fixes the previous packaging mistake where Italian pages existed only in the compiled preview and therefore were invisible when testing with `npm run dev`.


## GV-PORTFOLIO V0.14 — Manifesto + Portfolio Content Polish

- Added a full standalone `/manifesto/` page while preserving the existing homepage Manifesto strip.
- Expanded the public working principles around human direction, testing, verification, failure as evidence and responsible AI-assisted development.
- Updated the homepage Manifesto strip with a clear link to the full page.
- Updated primary navigation so Manifesto, About and Contact all point to real standalone routes.
- Refined the site footer with Manifesto / About / Contact links plus the public GVibeDev email.
- Added a neutral `projects` content section for projects that belong in the complete catalogue but do not fit a vertical catalogue.
- Moved `Manuale LLM` from the Tools section to the general Projects catalogue, preserving its project page and repository link.
- Replaced the stale repository README with current site architecture, routes, development instructions, deployment information and working principles.
- Added a compact roadmap/status document for validated milestones and the next localization phase.

## GV-PORTFOLIO V0.13 — About + Contact + Manuale LLM

- Added a full `/about/` page for GVibeDev as a personal workshop rather than a corporate or agency-style profile.
- Added a full `/contact/` page with public GitHub and email contact channels.
- Updated primary navigation so `About` points to the real standalone page and added a `Contact` entry.
- Added `Manuale LLM` as a public project page, linked to the repository `GVibeDev/Manuale_LLM`.
- Introduced a concise public positioning for AI use on the site: tools, method and responsibility rather than automation hype.
- Added dedicated public assets for the Manuale LLM project cover.

## GV-PORTFOLIO V0.12 — Arena Rubra Shared Architecture + Digital Expansion

- Expanded Arena Rubra Digital into a dedicated system / testing project page while preserving the existing visual identity, playable-app CTA and public repository link.
- Added a dedicated `ArenaRubraDigitalLayout` with The Digital Arena, shared factions, Testing Lab, Digital vs Tabletop comparison, ecosystem navigation and current-build screenshot evidence.
- Reused the shared Arena Rubra data module for canonical faction descriptions, core principles, testing summary and related-project navigation.
- Updated the testing summary to the validated `1000+` total Arena Rubra match figure.
- Added current-build screenshot evidence for match play, Control Center, Map Editor, guided tutorials and telemetry.
- Applied Board Game polish to faction framing and the `Designed by playing it` section.

## GV-PORTFOLIO V0.11 — Unum Sunt Content Expansion v1.0

- Expanded the Unum Sunt — Radix Machinae page into a fuller editorial project page.
- Added Synopsis, A Story Built in Cycles, Signals / How to Read Unum Sunt, Author's Note and Development Status.
- Preserved the existing visual identity and bilingual preview access.

## GV-PORTFOLIO V0.10 — Arena Rubra Card Composer Showcase

- Replaced the Card Composer placeholder with a real project page.
- Added verified screenshots and workflow documentation.
- Linked the public repository without inventing an unverified runtime.

## GV-PORTFOLIO V0.9 — Arena Rubra Board Game Showcase

- Added the dedicated Arena Rubra tabletop project page.
- Added concept-table visuals, sample cards and physical-prototype status disclosure.
- Presented the current tabletop design without implying a manufactured product exists.

Earlier validated milestones established the Astro foundation, project catalogues, tool pages, Unum Sunt editorial foundation, web-app deployment architecture, BiggityKot channel and B&W Survivors site-hosted runtime.
