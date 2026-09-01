# GVibeDev.cc V0.29 — Validation Checklist

## Build
- [ ] `npm run build` succeeds.
- [ ] Inspect generated `dist/`.
- [ ] `/about/` exists.
- [ ] `/it/about/` exists.
- [ ] Sitemap route count is unchanged.

## English About
- [ ] H1 is `About GVibeDev`.
- [ ] Intro begins with `I’ve been taking computers and video games apart since I was a child.`
- [ ] Sections appear in this order:
  1. AI-assisted development
  2. Why GVibeDev exists
  3. What matters to me
- [ ] Final sentence is `That’s more or less the whole story.`
- [ ] No old Manuale LLM featured card appears.
- [ ] No old shared-workbench / Mo2 About section appears.

## Italian About
- [ ] H1 is `Chi è GVibeDev`.
- [ ] Intro begins with `Smonto computer e videogiochi da quando ero bambino.`
- [ ] Sections appear in this order:
  1. Sviluppo assistito dall’AI
  2. Perché esiste GVibeDev
  3. Cosa conta per me
- [ ] Final sentence is `Più o meno, è tutta qui.`
- [ ] No old Manuale LLM featured card appears.
- [ ] No old shared-workbench / Mo2 About section appears.

## Shared shell / regression
- [ ] EN/IT language switch resolves correctly.
- [ ] Header/footer unchanged.
- [ ] Projects and Contact buttons resolve to locale-correct routes.
- [ ] Mobile typography does not overflow.
- [ ] Desktop sticky section headings do not overlap the site header.
- [ ] Rubra Packager itch.io CTA remains intact.
- [ ] Sprite Studio carousel remains intact.
- [ ] No provider activation state changes.
