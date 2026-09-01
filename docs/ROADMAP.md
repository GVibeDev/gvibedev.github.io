# GVibeDev.cc — Ecosystem Roadmap

## Validated baseline

### V0.28 — Rubra Packager itch.io Distribution Activation ✅

The current public baseline includes the validated Sprite Studio carousel work, the Mo2 Projects visual expansion, the Rubra Packager v1 public-page refresh and the confirmed Rubra Packager itch.io distribution endpoint.

## Current candidate

### V0.29 — About Editorial Rewrite

Replace the older explanatory About page with the new first-person EN/IT editorial copy supplied by the author.

Scope:
- one shared bilingual About implementation;
- supplied English copy preserved verbatim;
- supplied Italian copy preserved verbatim;
- remove the older Manuale LLM / shared-workbench / public-record sections from About;
- preserve Projects and Contact navigation;
- preserve existing `/about/` and `/it/about/` routes;
- no sitemap change;
- no commercial or distribution endpoint change.

## After V0.29

### Editorial maintenance

Future About changes should normally be copy-only updates in `src/i18n/about.ts`, with the shared layout remaining stable.

### Product-specific work

Continue product-page, release and distribution updates only when real project material or endpoints exist.

## Cross-cutting maintenance

- EN/IT parity;
- stale status cleanup;
- accessibility and mobile validation;
- production `dist/` inspection before deployment;
- no invented provider, store or crowdfunding endpoint.
