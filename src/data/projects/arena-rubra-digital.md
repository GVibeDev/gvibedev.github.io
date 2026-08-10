---
title: Arena Rubra
slug: arena-rubra-digital
summary: A tactical card game on a hexagonal battlefield, combining cards, territorial control, faction identity and an evolving digital ruleset.
kind: web-app
section: web-apps
owner: gvibedev
featured: true
sortOrder: 10
tags:
  - Tactical card game
  - Turn-based strategy
  - HTML / CSS / JavaScript
  - AI-assisted development
status: Demo — Work in Progress
cover: /assets/projects/arena-rubra/hero-city.webp
coverAlt: Arena Rubra city artwork with the project title over a dark monumental fortress.
cardImage: /assets/projects/arena-rubra/card-cover.webp
cardImageAlt: Arena Rubra title over a monumental ruined city, cropped for the project-card format.
cardImagePosition: center
links:
  repositoryUrl: https://github.com/GVibeDev/ArenaRubra
  launchUrl: https://gvibedev.github.io/ArenaRubra/
pageReady: true
heroImage: /assets/projects/arena-rubra/hero-city.webp
heroAlt: Arena Rubra key art showing a ruined monumental city under a stormy sky.
logo: /assets/projects/arena-rubra/app-icon.webp
socialImage: /assets/projects/arena-rubra/og-arena-rubra.webp
endcapImage: /assets/projects/arena-rubra/battle-art.webp
endcapAlt: Arena Rubra artwork showing opposing blue and red forces facing each other across a ruined battlefield.
seoDescription: Arena Rubra Digital is a playable browser tactical card game and executable rules environment with hex maps, deck tools, tutorials, AI opponents, telemetry and diagnostic systems.
gallery:
  - src: /assets/projects/arena-rubra/v012/match-overview.webp
    thumb: /assets/projects/arena-rubra/v012/thumbs/match-overview.webp
    alt: Arena Rubra digital match showing the full hex battlefield, Liberti actions, cards in hand and a large commander card preview.
    caption: Current match interface — battlefield, objectives, ENE, hand management and card inspection in one live view.
  - src: /assets/projects/arena-rubra/v012/tactical-zoom.webp
    thumb: /assets/projects/arena-rubra/v012/thumbs/tactical-zoom.webp
    alt: Arena Rubra tactical zoom with occupied hexes, movement highlights and the selected Liberti unit inspector.
    caption: Tactical zoom — movement geometry, occupancy, Strategic Points and unit state remain visible during decisions.
  - src: /assets/projects/arena-rubra/v012/control-center.webp
    thumb: /assets/projects/arena-rubra/v012/thumbs/control-center.webp
    alt: Arena Rubra Control Center with play, card, map, analysis and system sections.
    caption: Control Center — play, cards, maps, telemetry, history, diagnostics and archive tools gathered into one hub.
  - src: /assets/projects/arena-rubra/v012/map-editor.webp
    thumb: /assets/projects/arena-rubra/v012/thumbs/map-editor.webp
    alt: Arena Rubra Map Editor showing a large hex battlefield with project controls, live validation and editing tools.
    caption: Map Editor — map geometry, Strategic Points, terrain, hazards, validation and import/export are editable directly.
  - src: /assets/projects/arena-rubra/v012/guided-tutorial.webp
    thumb: /assets/projects/arena-rubra/v012/thumbs/guided-tutorial.webp
    alt: Arena Rubra Liberti tutorial with narrator overlay explaining numerical superiority over the live battlefield.
    caption: Guided tutorials explain rules through controlled game states, narrator overlays and highlighted interactions.
  - src: /assets/projects/arena-rubra/v012/telemetry.webp
    thumb: /assets/projects/arena-rubra/v012/thumbs/telemetry.webp
    alt: Arena Rubra telemetry panel showing schema, seed, players and JSON export controls.
    caption: Telemetry snapshots preserve match evidence for diagnosis, comparison and regression testing.
  - src: /assets/projects/arena-rubra/v012/starter-splash.webp
    thumb: /assets/projects/arena-rubra/v012/thumbs/starter-splash.webp
    alt: Arena Rubra Starter Game splash screen with the Arena Rubra logo over a dark battlefield city.
    caption: Starter Game build identity — a playable public branch inside a larger active development project.
---

## AI-assisted, human-directed

AI is used throughout Arena Rubra development as an engineering and analysis partner: to reason about systems, propose implementations, investigate regressions, inspect telemetry and help translate design requirements into code.

That does **not** remove the need for direction. Rules still have to be chosen. Builds still have to be tested. Unexpected behaviours still have to be reproduced. Features still have to earn their place, and a statistically interesting result still needs to be interpreted in the context of the game that produced it.

The project is therefore less interesting as a claim about what a prompt can generate and more interesting as a record of what becomes possible when implementation speed is paired with requirements, acceptance criteria, repeated testing and deliberate rejection of solutions that do not work.

## Project status

Arena Rubra Digital remains an active work in progress. The browser build is real and playable, while interface details, balance, AI behaviour, maps, assets and supporting tools continue to evolve through validated baselines.

The public repository remains the reference point for the code shared outside the local development archive. The live application is a development-facing demo rather than a claim of final release status.
