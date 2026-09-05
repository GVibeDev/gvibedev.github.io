# GVibeDev.cc — Italian Parity Pass 2A Validation

## Pass 1
- [ ] Pass 1 functional pages remain correct after this overlay.
- [ ] Cumulative cleanup removes the old Pass-1 HTML snapshots from the repository.

## Build
- [ ] Run `CLEANUP_IT_PARITY_PASS2A.cmd` (or `.sh`) before build.
- [ ] `npm run build` succeeds.
- [ ] No route collision remains for:
  - `/it/`
  - `/it/about/`
  - `/it/biggitykot/`
  - `/it/contact/`
  - `/it/manifesto/`
  - `/it/projects/`
  - `/it/tools/`
  - `/it/web-apps/`
  - `/it/worlds/`
  - `/it/projects/unum-sunt-sprite-studio/`
  - `/it/projects/rubra-packager/`
  - the four Pass-2A project routes.

## Arena Rubra Card Composer
- [ ] Same current ProjectLayout structure as English.
- [ ] Italian hero summary/status/tags.
- [ ] Italian project note.
- [ ] Italian body has the same current six thematic sections as English.
- [ ] Gallery images/order match English.
- [ ] Gallery captions are Italian.
- [ ] Repository action still resolves to the real public GitHub repository.

## Manuale LLM
- [ ] Same current ProjectLayout structure as English.
- [ ] Italian hero summary/status/tags.
- [ ] Same current five body sections as English.
- [ ] Repository action unchanged and real.

## Rubra Image Forge
- [ ] Same current ToolProjectLayout structure as English.
- [ ] Italian hero summary/status/tags.
- [ ] Italian tool profile/category/platforms.
- [ ] Same current gallery/order as English with Italian captions.
- [ ] Main requirements/setup/guide content uses the Italian override data.
- [ ] Same current seven body sections as English.
- [ ] Repository action unchanged and real.
- [ ] No release/download CTA is invented.

## B&W Survivors
- [ ] Same current BiggityKotProjectLayout / aero-glass structure as English.
- [ ] Italian summary/status/tags.
- [ ] Italian Play/Download labels.
- [ ] Same current seven body sections as English.
- [ ] Gallery captions are Italian.
- [ ] Existing single-player runtime path remains `/apps/bw-survivors/`.
- [ ] Existing ZIP download path and SHA-256 remain unchanged.
- [ ] No repository is invented for B&W Survivors.

## English regression
- [ ] `/projects/arena-rubra-card-composer/` unchanged in content/structure.
- [ ] `/projects/manuale-llm/` unchanged.
- [ ] `/projects/rubra-image-forge/` unchanged.
- [ ] `/projects/bw-survivors/` unchanged.
- [ ] ProjectActions English labels remain unchanged.

## Known remaining work
- [ ] Arena Rubra Digital → Pass 2B.
- [ ] Arena Rubra Board Game → Pass 2B.
- [ ] Unum Sunt / Radix Machinae → Pass 2B.
- [ ] After Pass 2B, determine whether `it-pages.json`, `pages.ts` and `LocalizedContentPage.astro` are fully unused and removable.
