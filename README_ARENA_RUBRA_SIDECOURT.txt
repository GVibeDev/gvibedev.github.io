GVibeDev WEBSITE — ARENA RUBRA LANDING
SIDECOURT PLAYTEST LINK INTEGRATION
===================================

Repository baseline verified before patch:
- repository: GVibeDev/gvibedev.github.io
- branch: main
- commit: 487f29d8b8242026f739d65945a02e55e014786b
- commit message: finalize Italian parity cleanup

SideCourt URL supplied by the site owner:
https://sidecourt.space/work/SC48NVH

SCOPE
-----
This patch modifies ONLY:

src/layouts/ArenaRubraDigitalLayout.astro

It does NOT modify:
- Arena_Rubra_Website_Canonical_Copy_EN.md
- src/data/shared/arena-rubra.ts
- Arena Rubra faction copy
- Digital/Tabletop architecture copy
- existing Play/GitHub links
- game/runtime files
- other website pages

PLACEMENT
---------
The new SideCourt note is inserted immediately AFTER the Arena Rubra Digital
hero and BEFORE "The Digital Arena".

It is therefore close to the existing Play/GitHub actions without becoming
part of the hero itself.

COPY — EN
---------
Heading:
Playtesting on SideCourt

Body:
Arena Rubra is also on SideCourt. I’m using the Drop there to collect first-play impressions from people who don’t already know the game.

CTA:
Arena Rubra on SideCourt →

COPY — IT
---------
The shared Italian route receives a direct localized equivalent so EN/IT parity
is not broken. This does not alter canonical Arena Rubra product copy.

VISUAL TREATMENT
----------------
- no SideCourt logo
- no partner/sponsor badge
- no remote asset
- no banner styling
- compact note treatment using the existing Arena Rubra/GVibeDev variables
- 44px minimum link target
- flex-wrap layout to avoid mobile overflow

LINK BEHAVIOUR
--------------
target="_blank"
rel="noopener noreferrer"

APPLY — WINDOWS
---------------
Extract this ZIP into the repository root and run:

    APPLY_ARENA_RUBRA_SIDECOURT.cmd

The script applies the change and runs:

    npm run build

APPLY — macOS / Linux / Git Bash
--------------------------------
Run:

    sh APPLY_ARENA_RUBRA_SIDECOURT.sh

VALIDATION
----------
Use VALIDATION_ARENA_RUBRA_SIDECOURT.md.
