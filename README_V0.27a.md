# GVibeDev.cc V0.27a — Rubra Packager Python Pipeline & Arena Rubra Profile Context

V0.27a refines the V0.27 Rubra Packager public-page candidate without changing its general page structure or screenshot assets.

## Primary correction

The page now treats **Python source → Windows EXE/ONEDIR → Inno Setup** as a first-class product capability rather than merely one item in a generic feature list.

The public explanation follows the actual v1 implementation:

1. select a Python project and entry point;
2. run Python preflight;
3. optionally stage trusted project dependencies in an isolated build directory;
4. build ONEFILE or ONEDIR, GUI or console, through PyInstaller;
5. pass the resulting Windows artifact to Setup Builder;
6. generate an Inno Setup installer.

Setup Builder itself still consumes built Windows artifacts; the page does not incorrectly claim that Setup Builder directly compiles Python source.

## Arena Rubra profile context

The page now explains why an **Arena Rubra** packaging profile exists and links the profile back to Arena Rubra Digital.

The text is grounded in the public `profiles/arena-rubra.json` file and the generic profile loader:

- `index.html` is required;
- landscape orientation is declared;
- the profile searches `assets-manifest.json` and `assets/manifest.json`;
- FULL has no production exclusion globs;
- LITE excludes Arena Rubra-oriented music, video and high-resolution-art paths;
- the same JSON-driven loader also handles Generic Web Game and Generic HTML App.

The page therefore recommends generic profiles for unrelated applications and does not advertise the Arena Rubra LITE preset as a universal option.

## Scope preserved

- V0.27 carousel retained;
- dependency/download section retained;
- splash retained;
- security warning and current v1 limits retained;
- GitHub source-only / future GitHub Release policy retained;
- no itch.io reference added.
