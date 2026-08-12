# GVibeDev.cc V0.20 — Validation Checklist

## Apply

When applying the small patch over V0.19:

1. extract the patch at repository root;
2. run `APPLY_V0.20_REMOVE_LEGACY_IT.cmd` on Windows;
3. verify there are no `src/pages/it/**/index.html` files left;
4. run `npm run build`.

The deletion step is mandatory because the old `.html` routes and new `.astro` routes must not coexist.

## Production build gate

- [ ] `npm run build` succeeds.
- [ ] `dist/` contains 38 indexable EN/IT portfolio URLs.
- [ ] `dist/support/index.html` exists.
- [ ] `dist/it/support/index.html` exists.
- [ ] the 18 converted Italian routes still exist at the same URLs.
- [ ] no Italian route renders a duplicated site header or footer.
- [ ] EN / IT language switch works from a converted Italian route.
- [ ] canonical / hreflang / x-default are present on converted Italian routes.
- [ ] the English navbar labels remain visible in `dist/index.html`.

## Visual regression — desktop

Check at minimum:

- [ ] `/it/`
- [ ] `/it/projects/`
- [ ] `/it/projects/arena-rubra-digital/`
- [ ] `/it/projects/unum-sunt/`
- [ ] `/it/projects/unum-sunt-sprite-studio/`
- [ ] `/it/about/`
- [ ] `/it/contact/`
- [ ] `/it/support/`

Compare against V0.19 for:

- [ ] page width;
- [ ] spacing;
- [ ] typography;
- [ ] images;
- [ ] project galleries / lightbox;
- [ ] CTA positions;
- [ ] header / footer.

## Mobile / Android

- [ ] no horizontal overflow;
- [ ] shared mobile menu works on converted Italian pages;
- [ ] EN / IT switch remains reachable;
- [ ] touch targets remain usable;
- [ ] gallery dialogs still open / close where present;
- [ ] Support page and disabled Support CTA fit narrow screens.

## Structural checks

- [ ] `src/pages/it/**/index.html` count = 0.
- [ ] converted `src/pages/it/**/index.astro` count = 18.
- [ ] `/it/support/` remains a native Astro route.
- [ ] `src/i18n/it-pages.json` contains 18 preserved localized content entries.
- [ ] analytics remains disabled unless explicitly configured.
- [ ] no PayPal/social/store placeholder is exposed as a live link.
- [ ] Arena Rubra live URL remains `https://gvibedev.cc/ArenaRubra/`.
- [ ] B&W Survivors raw runtime remains `noindex, nofollow`.

## Acceptance rule

Do not freeze V0.20 from `npm run dev` alone.

The release is valid only after the Windows production build and `dist/` smoke test pass.
