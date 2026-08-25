# GVibeDev.cc V0.27a — Validation Checklist

## Build
- [ ] `npm run build` completes successfully on the Windows release-gate machine.

## Rubra Packager EN
- [ ] Hero/logo order remains unchanged from V0.27.
- [ ] Overview explicitly says Rubra Packager is more than an HTML-to-EXE converter.
- [ ] Dedicated Python pipeline is visible before the screenshot carousel.
- [ ] Pipeline order is Source → Preflight → Build EXE → Setup.
- [ ] ONEFILE/ONEDIR and GUI/console options are mentioned.
- [ ] Setup Builder is accurately described as a second stage operating on a built artifact.
- [ ] “Why Arena Rubra?” panel is visible.
- [ ] Arena Rubra Digital internal link resolves.
- [ ] Arena Rubra profile source link resolves to `profiles/arena-rubra.json`.
- [ ] FULL vs LITE explanation is present and does not present LITE as universal.

## Rubra Packager IT
- [ ] Same information hierarchy and technical meaning as EN.
- [ ] Italian card summary foregrounds source Python → EXE/ONEDIR → Setup.
- [ ] Arena Rubra Digital link uses `/it/projects/arena-rubra-digital/`.

## Existing V0.27 surfaces
- [ ] Screenshot carousel behavior is unchanged.
- [ ] Six supplied Rubra Packager screenshots remain present.
- [ ] Dependency/download links remain present.
- [ ] Splash artwork remains present.
- [ ] Security warning remains prominent.
- [ ] Distribution still says GitHub source + build tooling now, real GitHub Release later.
- [ ] No itch.io reference exists on the Rubra Packager page.

## Regression
- [ ] Sprite Studio carousel unchanged.
- [ ] Arena Rubra pages unchanged.
- [ ] MO2 V0.26f styling unchanged.
