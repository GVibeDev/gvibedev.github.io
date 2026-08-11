GVibeDev.cc
GVibeDev is a personal workshop for games, tools, stories and experiments.
Public site: `https://gvibedev.cc`
Repository: `GVibeDev/gvibedev.github.io`
What this repository contains
This repository is the public hub for the GVibeDev portfolio. It contains:
the Astro site and shared design system;
project catalogues and project pages;
selected browser-hosted runtimes;
public previews and downloadable assets where appropriate;
editorial pages such as About, Contact and Manifesto.
Individual tools and applications may live in their own repositories. The hub is the place where those projects are documented, connected and presented coherently.
Current public structure
`/` — Home
`/projects/` — Complete project index
`/web-apps/` — Browser applications
`/tools/` — Production tools
`/worlds/` — Long-form narrative / world projects
`/biggitykot/` — BiggityKot channel
`/manifesto/` — Working principles
`/about/` — About GVibeDev
`/contact/` — Public contact channels
Working principle
> **AI is leverage, not autopilot.**
AI-assisted development is part of the workflow, but the public work is built through requirements, iteration, testing, verification and human acceptance decisions.
The project archive is intended to show the process through concrete artefacts rather than generic claims about AI.
Development
Requirements:
Node.js / npm
a current supported browser
Install:
```bash
npm install
```
Run locally:
```bash
npm run dev
```
Build:
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```
Default local Astro URL:
```text
http://localhost:4321/
```
Deployment
The site is statically generated with Astro and published through GitHub Pages.
Canonical public domain:
```text
https://gvibedev.cc
```
Project architecture
Project metadata lives under:
```text
src/data/projects/
```
Reusable project-specific shared data belongs under:
```text
src/data/shared/
```
Project pages are generated from the content collection when `pageReady: true`.
The site intentionally avoids inventing launch URLs, releases, completion percentages or production dates. Public project states should reflect verified material only.
Current milestone
GV-PORTFOLIO V0.17 — Production Polish / Full EN-IT Source
The current source tree includes the complete validated English/Italian public portfolio, a visible EN/IT language switch in the Astro header, localized `/it/` routes available during `npm run dev`, and the production-polish layer for metadata, sitemap, robots, custom 404 and accessibility.
Local development
```bash
npm run dev
```
Then test both:
```text
http://localhost:4321/
http://localhost:4321/it/
```
The `/it/` pages are now part of `src/pages/`, so they are visible from the Astro dev server instead of existing only in a compiled preview.
