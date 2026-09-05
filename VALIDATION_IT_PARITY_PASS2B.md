# GVibeDev.cc — Italian Parity Pass 2B Validation

## Baselines
- [ ] Pass 1 remains correct.
- [ ] Pass 2A remains correct.
- [ ] Run `APPLY_IT_PARITY_PASS2B.cmd` (or `.sh`) before the build.

## Build / route hygiene
- [ ] `npm run build` succeeds.
- [ ] No route-collision warnings remain for Italian pages.
- [ ] `git grep "LocalizedContentPage" src/pages src/layouts src/components src/i18n` returns no active source usage.
- [ ] `src/i18n/it-pages.json` no longer exists.
- [ ] `src/i18n/pages.ts` no longer exists.
- [ ] `src/components/pages/LocalizedContentPage.astro` no longer exists.
- [ ] No `src/pages/it/**/index.html` legacy snapshot remains.

## Arena Rubra Digital
Compare:
- `/projects/arena-rubra-digital/`
- `/it/projects/arena-rubra-digital/`

Validate:
- [ ] Same section order and visual structure.
- [ ] Same hero/media/gallery assets.
- [ ] Italian summary/status/tags.
- [ ] Digital Arena copy is Italian.
- [ ] All eight digital-system cards are present in both languages.
- [ ] Control Center evidence block is aligned.
- [ ] Five-faction block is aligned and Italian.
- [ ] Testing Lab retains `1000+`.
- [ ] Investigation chips are Italian.
- [ ] Telemetry caption is Italian.
- [ ] What We Test uses the same eight canonical areas.
- [ ] Digital/Tabletop comparison is aligned.
- [ ] Arena ecosystem links point to Italian routes on the Italian page.
- [ ] Human-directed development block is Italian.
- [ ] The two Markdown project-status sections are Italian.
- [ ] Play and GitHub endpoints are unchanged and real.

## Arena Rubra Tabletop
Compare:
- `/projects/arena-rubra-board-game/`
- `/it/projects/arena-rubra-board-game/`

Validate:
- [ ] Same section order and visual structure.
- [ ] Same concept-art assets and card samples.
- [ ] Italian hero summary/status.
- [ ] Prototype disclaimer is Italian.
- [ ] Quick facts are Italian and still show 2 players / 30 cards / 5 factions.
- [ ] Plan / Position / Pressure uses the same shared strategic structure.
- [ ] Match flow has the same six stages.
- [ ] Core mechanics use the same seven systems.
- [ ] Tabletop discipline block is Italian.
- [ ] Five factions are the same canonical factions with Italian descriptions.
- [ ] Testing copy retains the validated `1000+` total-match fact.
- [ ] The previously stale hidden “Hundreds…” status wording is no longer used.
- [ ] Current-card-language block is Italian.
- [ ] Development-status block is Italian.
- [ ] Physical prototype remains explicitly “not yet manufactured”.
- [ ] No crowdfunding/purchase endpoint is invented.

## Unum Sunt / Radix Machinae
Compare:
- `/projects/unum-sunt/`
- `/it/projects/unum-sunt/`

Validate:
- [ ] Same current EditorialProjectLayout.
- [ ] Same cover and chapter imagery.
- [ ] Italian summary/status/category/availability.
- [ ] Opening editorial prose is Italian.
- [ ] Five editorial chapters match EN structurally.
- [ ] Theme signals are Italian.
- [ ] Preview Library chrome is Italian.
- [ ] Both real PDF preview files remain linked.
- [ ] Italian preview remains 38 pages.
- [ ] English preview remains 32 pages.
- [ ] Quote and attribution are Italian.
- [ ] No extra lore/project claims are introduced.

## Pass 2A regression
- [ ] Card Composer gallery chrome is Italian.
- [ ] Manuale LLM gallery/project chrome remains Italian.
- [ ] Rubra Image Forge gallery chrome is Italian.
- [ ] Rubra Image Forge Setup/Dependencies generic labels are Italian.
- [ ] B&W Survivors gallery chrome is Italian.
- [ ] B&W launch/download paths and SHA-256 remain unchanged.
- [ ] No B&W repository is invented.

## English regression
- [ ] Generic ProjectLayout pages still render English by default.
- [ ] ToolProjectLayout pages still render English by default.
- [ ] BiggityKotProjectLayout pages still render English by default.
- [ ] Arena Rubra Digital EN wording/structure remains equivalent to pre-pass content.
- [ ] Arena Rubra Tabletop EN wording/structure remains equivalent, except the stale hidden playtest status is normalized to the validated `1000+` fact.
- [ ] Unum Sunt EN page remains equivalent to the pre-pass page.
- [ ] ProjectGallery EN labels remain unchanged.
- [ ] ToolInstallGuide EN labels remain unchanged.

## Out of scope
- [ ] Analytics activation is not changed.
- [ ] Provider/commercial state is not changed.
- [ ] No new store/crowdfunding/support endpoint is introduced.
