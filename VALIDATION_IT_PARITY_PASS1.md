# GVibeDev.cc — Italian Parity Pass 1 Validation

## Build
- [ ] Run the cleanup script before building.
- [ ] `npm run build` succeeds.
- [ ] No route collision remains for the nine Pass-1 routes.
- [ ] No Pass-1 `src/pages/it/**/index.html` remains.

## Home parity
- [ ] `/it/` uses the current English home structure.
- [ ] Hero image/layout matches EN.
- [ ] Featured projects match EN.
- [ ] Web Apps / Tools / Worlds / MO2 section order matches EN.
- [ ] Manifesto strip matches EN structurally.
- [ ] GitHub panel matches EN structurally.
- [ ] Italian text is displayed in all of those sections.

## Index parity
- [ ] `/it/projects/` matches `/projects/` structure and project order.
- [ ] `/it/web-apps/` matches `/web-apps/`, including the three live counters and runtime-policy section.
- [ ] `/it/tools/` matches `/tools/`.
- [ ] `/it/worlds/` matches `/worlds/`.
- [ ] `/it/biggitykot/` matches `/biggitykot/`, including the current aero-glass treatment and GitHub profile actions.

## Project cards
- [ ] Italian pages use `summaryIt` when present.
- [ ] Italian pages use `statusIt` when present.
- [ ] Italian pages use `tagsIt` when present.
- [ ] Italian card labels read `Strumento`, `Mondo`, `Gioco`, `Esperimento`, `Apri progetto`, etc.
- [ ] Internal project links point to `/it/projects/.../` where an Italian equivalent exists.
- [ ] English pages remain unchanged in wording and links.

## Editorial/contact parity
- [ ] `/it/manifesto/` has the same sections, eight principles, quote, responsibility section and final evidence card as EN.
- [ ] `/it/contact/` has the same current public-channel cards, four usage cases and closing action block as EN.
- [ ] `/it/about/` remains the shared V0.29 About page.

## Regression
- [ ] EN home/index/contact/manifesto pages are unchanged visually.
- [ ] Support and Community remain shared and working.
- [ ] Sprite Studio Italian page remains on its dedicated shared layout.
- [ ] No analytics/provider configuration file is modified by this patch.

## Known remaining work
- [ ] Project DETAIL routes still backed by `LocalizedContentPage` are intentionally left for Italian Parity Pass 2.
