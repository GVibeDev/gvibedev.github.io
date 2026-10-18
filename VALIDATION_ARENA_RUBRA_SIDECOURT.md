# Arena Rubra — SideCourt Playtest Link Validation

## Source
- [ ] Only `src/layouts/ArenaRubraDigitalLayout.astro` changes.
- [ ] `Arena_Rubra_Website_Canonical_Copy_EN.md` remains untouched.
- [ ] `src/data/shared/arena-rubra.ts` remains untouched.
- [ ] Existing Play and GitHub endpoints remain unchanged.

## Placement
- [ ] SideCourt block appears immediately after the Digital hero.
- [ ] It appears before `The Digital Arena`.
- [ ] It is not inside the hero.
- [ ] It is not presented as a banner, partnership or sponsorship.

## English copy
- [ ] Heading: `Playtesting on SideCourt`
- [ ] Body exactly matches the approved English wording.
- [ ] CTA: `Arena Rubra on SideCourt →`

## Link
- [ ] Exact URL: `https://sidecourt.space/work/SC48NVH`
- [ ] Opens in a new tab.
- [ ] Uses `rel="noopener noreferrer"`.
- [ ] Link is keyboard-focusable.
- [ ] No SideCourt image/logo/remote asset is loaded.

## Italian parity
- [ ] `/it/projects/arena-rubra-digital/` shows the compact localized note.
- [ ] No English-only SideCourt block leaks into the Italian route.

## Responsive
- [ ] Desktop: text and CTA remain compact and aligned.
- [ ] Tablet: block wraps without changing surrounding section widths.
- [ ] Mobile: CTA wraps below the text if needed.
- [ ] No horizontal overflow.
- [ ] Existing hero actions remain untouched.

## Build
- [ ] `npm run build` succeeds.
- [ ] No new route or asset warnings.
