# Italian Content & Route Parity — Pass 1

This pass removes the main structural split between the current English site
and the historical Italian snapshots for the core navigation pages.

## What changed

The Italian Home, Projects, Web Apps, Tools, Worlds, MO2, Manifesto and Contact
routes now reproduce the current English Astro structure with Italian copy.

The four home components that contain their own copy now accept a locale:
- Hero
- FeaturedProjects
- ManifestoStrip
- GitHubPanel

`ProjectCard` also became locale-aware. It uses the existing localized project
metadata fields and resolves internal project links through the bilingual route
registry.

## Why this is a pass instead of one giant migration

Several project-detail pages use specialised layouts that have evolved well
beyond the old V0.20 HTML snapshots. Migrating them safely means mapping each
layout's current source data to Italian copy rather than simply deleting the old
body. That is Pass 2.

## Cleanup

Nine obsolete Italian HTML source routes can now be deleted:
- home
- about legacy copy
- MO2 index
- contact
- manifesto
- projects index
- tools index
- web-apps index
- worlds index

The patch includes Windows and POSIX cleanup scripts because a ZIP overlay cannot
delete files already present in the repository.
