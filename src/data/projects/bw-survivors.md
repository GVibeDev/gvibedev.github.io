---
title: B&W Survivors
slug: bw-survivors
summary: A monochrome browser survival prototype built around waves, weapon loadouts, bosses, character customization and a compact mobile interface.
kind: game
section: biggitykot
owner: biggitykot
featured: false
sortOrder: 80
tags:
  - BiggityKot
  - Browser game
  - Survival
  - JavaScript
status: 0.9A — Active Prototype
cover: /assets/projects/bw-survivors/card-cover.webp
coverAlt: B&W Survivors monochrome skull emblem and title on a black background.
cardImage: /assets/projects/bw-survivors/card-cover.webp
cardImageAlt: B&W Survivors monochrome skull emblem and title, composed for the project card.
cardImagePosition: center
links: {}
pageReady: true
heroImage: /assets/projects/bw-survivors/hero.webp
heroAlt: B&W Survivors monochrome showcase with the skull emblem, project title and enemy sprites.
logo: /assets/projects/bw-survivors/iconbig.png
socialImage: /assets/projects/bw-survivors/og-bw-survivors.webp
seoDescription: B&W Survivors is a BiggityKot browser survival prototype with wave progression, weapon loadouts, boss encounters, character hats, a Weapon Tester and mobile controls.
creatorProfileUrl: https://github.com/pizza-990
launchPath: /apps/bw-survivors/
launchLabel: Play online
downloadPath: /downloads/biggitykot/black-white-survivors-0.9A-mobilemenusfit.zip
downloadLabel: Download 0.9A build
buildSha256: 4c65e664a5a7f654be3e9b15c53f2e90d0b2076e8c396d55c547fa2387751489
gallery:
  - src: /assets/projects/bw-survivors/gallery/bosses.webp
    thumb: /assets/projects/bw-survivors/thumbs/bosses.webp
    alt: Five boss sprites from B&W Survivors displayed on a black background.
    caption: Five boss identities are included in the supplied 0.9A build, culminating in Perses.
  - src: /assets/projects/bw-survivors/gallery/weapons.webp
    thumb: /assets/projects/bw-survivors/thumbs/weapons.webp
    alt: Common, rare and epic weapon sprites from B&W Survivors arranged by rarity.
    caption: The build contains a broad weapon roster split across common, rare and epic equipment.
  - src: /assets/projects/bw-survivors/gallery/character.webp
    thumb: /assets/projects/bw-survivors/thumbs/character.webp
    alt: B&W Survivors player sprite shown alongside selectable hat sprites.
    caption: Character customization includes a compact set of hats layered above the player sprite.
  - src: /assets/projects/bw-survivors/gallery/enemies.webp
    thumb: /assets/projects/bw-survivors/thumbs/enemies.webp
    alt: Crawler, runner, brute and spitter enemy sprites from B&W Survivors.
    caption: The base enemy set drives the normal wave loop before and between boss encounters.
---

## A survival game that keeps adding pressure

B&W Survivors is a compact browser game built around a simple loop: survive the current wave, earn temporary run resources, use the between-wave shop, change or strengthen the loadout, and enter the next fight with a little more power and a little more danger waiting for you.

The supplied public snapshot is **0.9A — Active Prototype**. It is not presented as a finished release. The build is useful precisely because its systems are already substantial while the project is still free to change quickly.

## Waves, bosses and scaling

Normal waves use kill targets and a visible progress bar. Every tenth wave introduces a boss encounter. The supplied build contains Mitra-Spitter, Chained Beast of Tartarus, Gargamosh, the Massive OverPowered BioMechanical Beast of Destruction and Perses, with later progression looping through stronger tiers after wave 50.

The run does not simply scale on a fixed timer. Player upgrades, weapon power and extra slots contribute to enemy counter-scaling, increasing enemy and boss durability, damage and pressure as the player becomes stronger.

## Loadouts instead of one permanent weapon

Weapons are organized into multiple rarity bands and can occupy several slots. The run shop can offer extra slots, character upgrades and a Black Box pull while weapon selection remains part of the moment-to-moment build.

The game includes melee, ranged and more unusual weapon behaviours rather than treating every item as the same projectile with a different number. The supplied assets include common, rare and epic weapon sets, and the 0.9A code contains distinct abilities and effects for several higher-tier weapons.

## Weapon Tester and encyclopedia

A dedicated **Weapon Tester** lets the player try equipment against selectable stationary enemy dummies without turning the test into normal progression. The build also includes an **Encyclopedia** that tracks enemies and bosses encountered during play.

These systems make B&W Survivors more than a single survival arena: they provide small laboratories for inspecting the game's content directly.

## Character, language and mobile controls

The Character screen supports selectable hats layered over the player. The current build also contains an Italian / English language selector and localized descriptions for weapons, enemies and bosses.

Mobile support is part of the 0.9A snapshot rather than an afterthought. Touch devices receive a virtual movement joystick and weapon-slot buttons, while non-game screens use compact phone-oriented layouts. The gameplay viewport is designed around a 16:9 stage and a landscape mobile presentation.

## Solo browser play and LAN

The archive includes two different execution paths. **Solo play** can be started directly from the browser build. The package also includes a LAN co-op layer with `launcher.js`, `server.js` and `lan.js` for local-network sessions.

The LAN side requires a local Node process: a static browser page cannot start that server by itself. For that reason this V0.8 milestone publishes the full build as a download, but does not pretend that LAN multiplayer is already an online hosted service.

## Public snapshot

The downloadable ZIP on this page is the exact 0.9A archive supplied for the portfolio milestone. It is kept as a concrete snapshot rather than silently repackaging or rewriting the game.

The V0.8a milestone hosts the isolated **single-player browser runtime directly inside the GVibeDev site**. It does not require a separate BiggityKot repository. The downloadable 0.9A archive remains the complete local snapshot, including its Node-based LAN path.
