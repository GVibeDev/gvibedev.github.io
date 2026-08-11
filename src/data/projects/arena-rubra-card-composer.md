---
title: Arena Rubra Card Composer
slug: arena-rubra-card-composer
summary: A browser-based companion for assembling Arena Rubra cards from faction templates, illustrations and structured card data, then rendering them as exportable PNG assets.
kind: web-app
section: web-apps
owner: gvibedev
featured: false
sortOrder: 20
tags:
  - Web app
  - Card tools
  - Arena Rubra
  - Asset pipeline
status: Step 2A — Active Development
cover: /assets/projects/arena-rubra-card-composer/card-cover.webp
coverAlt: Arena Rubra Card Composer interface showing the Nexus template controls beside a rendered Drone Militare Pesante card.
cardImage: /assets/projects/arena-rubra-card-composer/card-cover.webp
cardImageAlt: Arena Rubra Card Composer interface with a faction card rendered beside its editing controls.
cardImagePosition: center
links:
  repositoryUrl: https://github.com/GVibeDev/Card-Composer-Arena-Rubra
pageReady: true
heroImage: /assets/projects/arena-rubra-card-composer/hero.webp
heroAlt: Arena Rubra Card Composer Step 2A showing editable Nexus card data and a full rendered card preview.
socialImage: /assets/projects/arena-rubra-card-composer/og-card-composer.webp
seoDescription: Arena Rubra Card Composer is a browser-based card production companion for faction templates, illustrations, card statistics, rules text, rendering and PNG export.
gallery:
  - src: /assets/projects/arena-rubra-card-composer/gallery/nexus.webp
    thumb: /assets/projects/arena-rubra-card-composer/thumbs/nexus.webp
    alt: Nexus card composition screen with Drone Militare Pesante rendered in a blue faction frame.
    caption: >-
      Nexus composition view: faction template, illustration input, structured statistics and rendered card output.
  - src: /assets/projects/arena-rubra-card-composer/gallery/exordium.webp
    thumb: /assets/projects/arena-rubra-card-composer/thumbs/exordium.webp
    alt: Exordium card composition screen with Nemira rendered in a red and gold faction frame.
    caption: >-
      Exordium frame and illustration preset shown inside the same shared composition workflow.
  - src: /assets/projects/arena-rubra-card-composer/gallery/agathoi.webp
    thumb: /assets/projects/arena-rubra-card-composer/thumbs/agathoi.webp
    alt: Agathoi card composition screen with Guardiano Agathoi rendered in a green faction frame.
    caption: >-
      Agathoi demonstrates how faction identity changes while the data-entry workflow remains consistent.
  - src: /assets/projects/arena-rubra-card-composer/gallery/liberti.webp
    thumb: /assets/projects/arena-rubra-card-composer/thumbs/liberti.webp
    alt: Liberti card composition screen with Predone Furente rendered in a weathered bronze faction frame.
    caption: >-
      Liberti uses the same editor structure with its own frame language and illustration preset.
---

## One interface for cards that still belong to different factions

Arena Rubra Card Composer is a browser-based production companion for turning card data and artwork into faction-specific Arena Rubra card assets. The current **Step 2A** interface keeps the editing controls on the left and a large card render on the right, so content can be adjusted while the final visual hierarchy remains visible.

The supplied development captures show the same workflow applied to **Nexus, Exordium, Agathoi and Liberti**. Each keeps its own frame, emblem, palette and illustration language without requiring a separate editor for every faction.

## Template first, then content

The editor starts from a card template and faction selection. The current interface exposes a card-type selector, a faction selector and an illustration preset, while also allowing an illustration file to be loaded directly.

This separates the reusable visual system from the card-specific content. A new card does not begin as an empty graphics document: it begins inside the visual grammar already established for Arena Rubra.

## Structured card data

The **Dati carta** panel exposes the information that has to survive from game design into the rendered object: card name, unit type, ENE, HP, DEF and ATT, followed by an ability/effect title and its rules text.

That matters because the Composer is not only an image mock-up tool. Its interface reflects the actual information architecture of the cards and keeps game data, artwork and presentation in the same production step.

## Render and export

The current Step 2A build provides explicit **Render** and **Esporta PNG** actions. The result is a full card image that can move into Arena Rubra's wider asset pipeline, documentation or physical tabletop preparation without recreating the frame manually for each variation.

The screenshots also expose a **Calibrazione temporanea** area. It is presented here as a development control rather than as a finished public feature: the project is still being refined, and visual calibration remains part of that iteration.

## Shared workflow, faction-specific identity

The development captures are useful precisely because they show four very different outputs produced from the same interface. Nexus is cold and technical; Exordium uses red and gold military heraldry; Agathoi shifts toward green, natural and civic motifs; Liberti uses a rougher, damaged bronze language.

The Composer therefore sits between two sides of Arena Rubra: the rules/data model on one side and the visual identity of the cards on the other.

## Current milestone

This page documents **Step 2A — Active Development** from the supplied interface captures. It does not claim a hosted public runtime yet. The source repository is linked for the project itself; an online launch target can be added once the browser build has been reviewed and deployed as a stable public runtime.
