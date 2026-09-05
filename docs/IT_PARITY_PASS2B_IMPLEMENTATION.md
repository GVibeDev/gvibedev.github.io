# Italian Content & Route Parity — Pass 2B

## Status entering this pass

Pass 1 aligned the core navigation pages.
Pass 2A aligned four standard/specialised project-detail pages.

Pass 2B finishes the three detail-page families that could not be safely
migrated as ordinary translated Markdown bodies:

1. Arena Rubra Digital
2. Arena Rubra Tabletop
3. Unum Sunt / Radix Machinae

## Arena Rubra architecture

The canonical English Arena Rubra data in
`src/data/shared/arena-rubra.ts` remains untouched.

A new `src/i18n/arena-rubra.ts` layer imports those canonical structures and
provides Italian textual projections for:
- universe positioning/relationship;
- Plan / Position / Pressure;
- match flow;
- seven core systems;
- five factions;
- 1000+ testing summary;
- eight test areas;
- related-project cards.

Images, faction IDs, textures, accents and project identities remain canonical.

The large Digital and Tabletop layouts become locale-aware through the Pass 2B
transformer instead of being forked into separate Italian layouts.

## Editorial architecture

`EditorialProjectLayout`, `EditorialHero`, `ThemeSignals` and `PreviewLibrary`
are now locale-aware.

Unum Sunt reuses the exact same editorial layout in both languages. Italian
project copy lives in `src/i18n/projects-it.ts`, including:
- metadata;
- opening prose;
- five editorial chapters;
- themes;
- preview-document labels/scopes;
- quote.

The PDF paths, page counts and visual assets remain canonical.

## Generic project-page cleanup

Pass 2B also closes minor UI-localization gaps found while validating Pass 2A:
- `ProjectGallery` receives the current locale from ProjectLayout;
- `ProjectGallery` receives locale from ToolProjectLayout;
- `ProjectGallery` receives locale from BiggityKotProjectLayout;
- the existing ToolInstallGuide component becomes locale-aware.

## Retirement of the V0.20 bridge

After this pass, no active Italian page requires:
- `it-pages.json`;
- `pages.ts`;
- `LocalizedContentPage.astro`.

The cumulative cleanup therefore removes those files together with all 18
obsolete Italian generated-HTML snapshots.

This converts the old V0.20 bridge from active architecture into historical
documentation only.

## Final localization model

The site now follows one rule:

**structure and functional state are shared; language-specific text is data.**

That means an English layout change no longer requires recreating an Italian
HTML snapshot. The Italian page shares the live layout and can only diverge
where explicit localized copy exists.
