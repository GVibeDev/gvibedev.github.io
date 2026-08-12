# GVibeDev.cc V0.21 — Validation Checklist

## Mandatory build gate

- [ ] `npm run build` succeeds.
- [ ] Inspect the generated `dist/`, not only `npm run dev`.
- [ ] English navbar labels remain present.
- [ ] No source/content schema validation error is reported.

## Product Hub — EN

- [ ] `/projects/unum-sunt-sprite-studio/` shows Product Hub.
- [ ] Sprite Studio current version shows `Development Preview`.
- [ ] Documentation jumps to the existing documentation section.
- [ ] Requirements jumps to the existing requirements/setup section.
- [ ] Download, Tutorials, Changelog and GitHub are non-clickable when no real endpoint exists.
- [ ] Support links to `/support/`.

- [ ] `/projects/arena-rubra-digital/` shows Product Hub.
- [ ] Play opens `https://gvibedev.cc/ArenaRubra/`.
- [ ] GitHub opens `https://github.com/GVibeDev/ArenaRubra`.
- [ ] Starter Game is visibly `In development`, not a fake link.
- [ ] Community Depot, Cards, Decks, Maps and Full Edition are visibly future/planned and non-clickable.
- [ ] Support links to `/support/`.

## Product Hub — IT

- [ ] `/it/projects/unum-sunt-sprite-studio/` shows the same Product Hub structure in Italian.
- [ ] Documentation and Requirements anchors work on the Italian page.
- [ ] `/it/projects/arena-rubra-digital/` shows the same status architecture in Italian.
- [ ] Support resolves to `/it/support/`.
- [ ] No English-only status label leaks from the shared surface where an Italian label exists.

## Mobile / Android

- [ ] Product cards stay within viewport width.
- [ ] No horizontal overflow.
- [ ] 2/3-column grids collapse cleanly.
- [ ] Real CTA touch targets remain at least 44px high.
- [ ] Long Arena Rubra descriptions wrap correctly.
- [ ] Navbar / EN-IT switch remain unchanged.

## Regression / truthfulness

- [ ] No PayPal URL appears while Support payment configuration is empty.
- [ ] No Sprite Studio download/repository URL is invented.
- [ ] No Community Depot backend is implied.
- [ ] No Full Edition Buy/Wishlist CTA is shown.
- [ ] Analytics remains disabled.
- [ ] Sitemap remains 38 public URLs; V0.21 adds no new route.
