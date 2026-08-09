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
seoDescription: Arena Rubra is a work-in-progress tactical card game and turn-based strategy prototype built as a playable HTML, CSS and JavaScript system.
gallery:
  - src: /assets/projects/arena-rubra/gameplay-overview.webp
    thumb: /assets/projects/arena-rubra/thumbs/gameplay-overview.webp
    alt: Arena Rubra match view with the hexagonal battlefield, cards in hand and unit information panel.
    caption: Tactical battlefield — map control, units, hand management and live combat information.
  - src: /assets/projects/arena-rubra/gameplay-card-hover.webp
    thumb: /assets/projects/arena-rubra/thumbs/gameplay-card-hover.webp
    alt: Arena Rubra match view zoomed into the battlefield with a large commander card preview.
    caption: Card inspection remains available directly from the battlefield.
  - src: /assets/projects/arena-rubra/control-center.webp
    thumb: /assets/projects/arena-rubra/thumbs/control-center.webp
    alt: Arena Rubra Control Center with play, deck, map, analysis and system sections.
    caption: Control Center — play, content, maps, statistics, telemetry and system tools in one hub.
  - src: /assets/projects/arena-rubra/card-detail.webp
    thumb: /assets/projects/arena-rubra/thumbs/card-detail.webp
    alt: Arena Rubra card library showing a detailed Fabeot unit card and its statistics and ability text.
    caption: Card library with rendered cards, structured stats and gameplay text.
  - src: /assets/projects/arena-rubra/card-gallery.webp
    thumb: /assets/projects/arena-rubra/thumbs/card-gallery.webp
    alt: Arena Rubra rendered card gallery with multiple Fabeot cards visible in a grid.
    caption: A large rendered card catalogue supports deck building and content inspection.
  - src: /assets/projects/arena-rubra/map-editor.webp
    thumb: /assets/projects/arena-rubra/thumbs/map-editor.webp
    alt: Arena Rubra map editor with a large composite hex map and editing controls.
    caption: Map Editor — cells, terrain, roles, hazards, validation, import and export.
  - src: /assets/projects/arena-rubra/tutorial-exordium.webp
    thumb: /assets/projects/arena-rubra/thumbs/tutorial-exordium.webp
    alt: Arena Rubra guided Exordium tutorial with a narrator portrait and step controls over the battlefield.
    caption: Guided lessons use structured steps, highlights and narrative overlays.
  - src: /assets/projects/arena-rubra/tutorial-liberti.webp
    thumb: /assets/projects/arena-rubra/thumbs/tutorial-liberti.webp
    alt: Arena Rubra guided Liberti tutorial explaining a combat rule over a darkened battlefield.
    caption: Tutorials teach faction mechanics and combat through deterministic scenarios.
---

## A playable system, not a mock-up

Arena Rubra began as a tactical card-game idea and grew into a working digital rules environment. Matches take place on a hexagonal battlefield where cards, positioning, strategic points and faction-specific mechanics all interact.

The current public status is deliberately simple: **Demo — Work in Progress**. The project is playable and substantial, but it is still being iterated, tested and refined rather than presented as a finished commercial release.

## What the demo already explores

### Tactical play

Units are deployed onto an interactive hex map and fight for position, strategic points and pressure. Cards are not detached from the battlefield: movement, targeting, defensive states, abilities and territorial control all belong to the same turn-based system.

### Cards, decks and content tools

The application includes a card library, deck-building tools and structured card data. Cards can be inspected as rendered objects while their gameplay statistics and ability text remain available as explicit data.

### Maps and terrain

Arena Rubra is not tied to a single board. Its map system supports different layouts and terrain rules, while the technical Map Editor provides validation, import/export and controlled editing instead of treating custom maps as opaque artwork.

### Guided learning

Tutorial scenarios use structured steps, narrator overlays and controlled interactions to teach the game without relying on a wall of rules text.

## Built through iteration

The interesting part of Arena Rubra is not only the visible game. The project is developed through small baselines: a feature is introduced, tested, inspected, corrected and only then treated as stable enough to build on.

Bot-vs-bot matches, manual playtests, telemetry, runtime logs and dedicated diagnostic screens are used to expose behaviour that is difficult to judge from code alone. That makes the project a useful example of the broader GVibeDev approach: AI can accelerate implementation and analysis, while design choices, acceptance criteria and validation remain human responsibilities.

## AI-assisted, human-directed

AI is used throughout development as an engineering and production partner: to reason about systems, propose implementations, investigate regressions and help turn requirements into code.

That does **not** remove the need for direction. Rules still have to be chosen. Builds still have to be tested. Unexpected behaviours still have to be reproduced. Features still have to earn their place.

Arena Rubra is therefore less interesting as a claim about what a prompt can generate, and more interesting as a record of what becomes possible when prompting is only one part of a disciplined iterative workflow.

## Project status

This page documents the project as it exists during active development. Screenshots are taken from development builds and may change as the interface, balancing, assets and systems continue to evolve.

The source repository is public and remains the reference point for the code currently shared outside the local development archive.
