# GVibeDev.cc V0.24 — Validation Checklist

## Mandatory build gate

- [ ] `npm run build` succeeds on the normal Windows development environment.
- [ ] Validate generated `dist/`, not only `npm run dev`.
- [ ] Existing EN navbar labels remain visible.
- [ ] No content-collection schema or Astro compilation error is reported.

## Routes / localization

- [ ] `/projects/unum-sunt-sprite-studio/` renders the new V0.24 page.
- [ ] `/it/projects/unum-sunt-sprite-studio/` renders the same page architecture in Italian.
- [ ] EN ↔ IT language switch preserves the Sprite Studio route.
- [ ] canonical / hreflang / x-default remain correct.
- [ ] No duplicate header or footer appears on the Italian route.
- [ ] Sitemap count is unchanged; V0.24 adds no route.

## Branding

- [ ] New compact icon is visible in the hero profile.
- [ ] New extended logo replaces the old Sprite Studio logo.
- [ ] New splash image is used as the large hero/banner.
- [ ] Project card uses the refreshed card artwork.
- [ ] Open Graph image resolves to the refreshed Sprite Studio social asset.
- [ ] No Arena Rubra visual asset appears on the Sprite Studio page.

## Repository / Releases

- [ ] Repository CTA points exactly to `https://github.com/GVibeDev/UnumSunt_Sprite_Studio`.
- [ ] Download/Releases CTA points exactly to `https://github.com/GVibeDev/UnumSunt_Sprite_Studio/releases`.
- [ ] Product Hub shows GitHub as available.
- [ ] Product Hub shows Download/Releases as available.
- [ ] Product Hub no longer says the public repository or release package is unpublished.

## Feature truthfulness

- [ ] Page lists all 14 workspaces.
- [ ] Project Groups / Generate / Extraction / Clean-up / Alignment / Selection / Export are present.
- [ ] Presets / Calibration Lab / Prompt Builder / Sprite Sheet / Image Gen / Workflow / Character Set are present.
- [ ] Standalone Windows / Inno Setup / managed local-AI runtime sections are present.
- [ ] No fixed GPU/VRAM/RAM minimum is claimed.
- [ ] Krea 2 is explicitly described as pending/incomplete after R5c6.
- [ ] External WanGP installs are described as externally owned and not modified by managed repair/removal.

## Gallery

- [ ] All 13 new gallery images load.
- [ ] All 13 thumbnails load.
- [ ] Full-image dialog opens and closes.
- [ ] Italian gallery chrome reads in Italian.
- [ ] No old gallery screenshot is referenced by the V0.24 Sprite Studio data.
- [ ] Privacy review: confirm that local development paths/user-folder names visible inside the supplied screenshots are acceptable for public publication.

## Mobile / responsive

- [ ] No horizontal overflow in hero, workspace grid, gallery or runtime sections.
- [ ] Extended logo and splash scale within viewport.
- [ ] CTA touch targets remain at least 44px high.
- [ ] Runtime/preflight portrait screenshots letterbox cleanly in gallery cards.
- [ ] Gallery dialog remains usable on a phone-sized viewport.

## Regression / frozen infrastructure

- [ ] Arena Rubra Product Hub remains unchanged.
- [ ] Community EN/IT remains unchanged.
- [ ] PayPal remains disabled.
- [ ] itch.io / Steam / Kickstarter / Patreon remain inactive.
- [ ] Analytics remains disabled.
