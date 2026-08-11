---
title: Rubra Image Forge
slug: rubra-image-forge
summary: A local batch workstation for converting image folders, preparing WebP outputs and generating 256×256 token-ready assets with a prototype-friendly preflight workflow.
kind: tool
section: tools
owner: gvibedev
featured: false
sortOrder: 50
tags:
  - Batch imaging
  - WebP
  - Token pipeline
  - Local desktop tool
  - Development prototype
status: R3a v0.3.1 — Development Prototype
cover: /assets/projects/rubra-image-forge/card-cover.webp
coverAlt: Rubra Image Forge desktop interface showing source selection, pipeline mode and the main analysis table.
cardImage: /assets/projects/rubra-image-forge/card-cover.webp
cardImageAlt: Rubra Image Forge desktop workspace in standard conversion mode.
cardImagePosition: center
links:
  repositoryUrl: https://github.com/GVibeDev/Rubra-Image-Forge-R2
pageReady: true
heroImage: /assets/projects/rubra-image-forge/overview.webp
heroAlt: Rubra Image Forge desktop interface in standard conversion mode with source selection, destination controls and the main analysis table.
socialImage: /assets/projects/rubra-image-forge/og-rubra-image-forge.webp
seoDescription: Rubra Image Forge R3a v0.3.1 is a local desktop prototype for batch image conversion, WebP output preparation and 256×256 token-ready asset generation.
toolCategory: Batch image conversion and token preparation
platforms:
  - Windows desktop
  - Local file workflow
requirements:
  - label: Source image folders or files
    detail: The workflow starts from local source files and folders. The interface supports batch selection and recursive scanning across subfolders.
    scope: core
    required: true
  - label: Writable output directory
    detail: Converted files are planned and written to a selected output folder with collision handling visible before conversion.
    scope: core
    required: true
  - label: Local desktop session
    detail: The current public baseline is a desktop prototype focused on local file workflows rather than a hosted web application.
    scope: core
    required: true
  - label: Optional GEGL runtime
    detail: Token R3a can use a portable GEGL LoHalo path when available. If it is missing, the prototype falls back to Pillow Lanczos instead of blocking the entire workflow.
    scope: generation
    required: false
setupCopy:
  heading: Understand the two image workflows before running a large batch.
  intro: >-
    Rubra Image Forge currently exposes two practical modes: standard conversion for broad batch processing and Token 256×256 mode for game-asset preparation. The prototype keeps filtering, preflight and output decisions visible before files are converted.
  coreLabel: Core workflow
  coreTitle: Standard conversion
  secondaryLabel: Optional token pipeline
  secondaryTitle: Token R3a / GEGL fallback
  publicPackage: Repository available · Release package pending
  platformLabel: Platform / scope
  secondaryRequiredLabel: Used by token mode
installGuide:
  eyebrow: Prototype access
  title: Use the current repository snapshot
  intro: Rubra Image Forge is currently presented on the site as a development prototype. The repository is public, but no GitHub Release package is linked yet.
  warningTitle: Prototype status
  warning: This page documents what the tool currently does from the author-provided R3a captures. Naming, packaging details and some workflow edges can still change as the prototype evolves.
  footnote: Because no public release package is linked yet, the portfolio intentionally exposes the repository action and keeps the release/download action absent.
  steps:
    - title: Open the repository snapshot
      body: Start from the public GitHub repository linked above. At this stage the portfolio page documents the prototype and points back to the source snapshot rather than to a packaged release.
    - title: Prepare input and output folders
      body: Collect one or more local source folders or image files, then choose a writable destination folder before running analysis.
    - title: Choose the pipeline mode
      body: Use standard conversion for broad image batching or switch to Token 256×256 when you need normalized token outputs for game-oriented asset pipelines.
    - title: Review filters and output settings
      body: Adjust extension filters, recursive scanning, WebP settings or Token R3a options before processing a large batch.
    - title: Run Analyze preflight first
      body: The prototype is designed to inspect the batch before conversion, exposing duplicates, collisions, transparency state, planning counts and blocking errors.
    - title: Convert only after the plan looks correct
      body: Once the preflight results make sense, proceed with conversion and review the generated output folder.
gallery:
  - src: /assets/projects/rubra-image-forge/overview.webp
    thumb: /assets/projects/rubra-image-forge/thumbs/overview.webp
    alt: Rubra Image Forge overview screen in standard conversion mode with source and destination controls.
    caption: Sources — select files or folders, set the destination and inspect the batch before any conversion happens.
  - src: /assets/projects/rubra-image-forge/filters.webp
    thumb: /assets/projects/rubra-image-forge/thumbs/filters.webp
    alt: Rubra Image Forge Filters tab showing extension, include and exclude controls.
    caption: Filters — narrow the batch by extension, text match, glob rules, regex and recursive scanning.
  - src: /assets/projects/rubra-image-forge/webp.webp
    thumb: /assets/projects/rubra-image-forge/thumbs/webp.webp
    alt: Rubra Image Forge WebP settings tab with Pillow backend, quality and verification controls.
    caption: WebP — quality, lossless toggle, metadata stripping, duplicate policy and output verification remain explicit.
  - src: /assets/projects/rubra-image-forge/token.webp
    thumb: /assets/projects/rubra-image-forge/thumbs/token.webp
    alt: Rubra Image Forge Token R3a tab with GEGL runtime detection and background-removal options.
    caption: Token R3a — the 256×256 path supports background handling, alpha preservation and an optional GEGL LoHalo runtime with Lanczos fallback.
  - src: /assets/projects/rubra-image-forge/preflight.webp
    thumb: /assets/projects/rubra-image-forge/thumbs/preflight.webp
    alt: Rubra Image Forge preflight running on a batch, showing progress while scanning the selected image folder.
    caption: Preflight in progress — large batches are analyzed before conversion so the operator can catch problems early.
  - src: /assets/projects/rubra-image-forge/batch.webp
    thumb: /assets/projects/rubra-image-forge/thumbs/batch.webp
    alt: Rubra Image Forge batch report after scanning 707 files and planning 703 outputs.
    caption: Real batch report — the supplied R3a capture shows 707 files scanned, 703 planned, 29 duplicates, 18 collisions and 4 blocking preflight errors.
---

## A practical image pipeline instead of one-off cleanup work

Rubra Image Forge is a local desktop prototype built for a familiar production problem: taking a messy folder of images and turning it into a cleaner, more reusable asset set without repeating the same manual checks file by file.

The current public site baseline is **R3a v0.3.1 — Development Prototype**. The public repository is available, but no GitHub Release package is linked yet.

## What the prototype already covers

### Standard conversion for broad batches

The first mode is straightforward and useful: select files or folders, decide where the output should go and analyze the batch before writing anything.

The visible workflow includes:

- source and destination selection;
- recursive folder scanning;
- filtering by extension, text, globs and regex;
- duplicate and collision reporting;
- conversion planning before execution.

That makes the tool feel less like a blind converter and more like a controlled staging pass for local assets.

### WebP controls without hiding the trade-offs

The WebP panel keeps the main decisions visible instead of burying them behind presets.

From the supplied R3a capture we can confirm that the interface exposes quality, lossless mode, alpha quality, duplicate policy, worker count, metadata stripping and output verification controls. The default backend shown in the prototype is **Pillow**, with optional `cwebp` detection rather than a hard dependency.

### Token 256×256 preparation

The second visible mode is more specialized and more interesting for game work.

**Token 256×256** is aimed at producing normalized, token-ready outputs. The R3a screen shows controls for background removal heuristics, neutral tolerance, border distance, feathering, decontamination, alpha preservation and minimum-alpha validation.

It also exposes an explicit engine choice:

- **auto** — use GEGL LoHalo when available;
- **GEGL** — the more rigorous path when the runtime is available;
- **Lanczos / Pillow fallback** — a practical fallback when GEGL is absent.

That is exactly the kind of design choice that fits the GVibeDev philosophy: not pretending the tool is magic, but making the pipeline and its limits understandable.

## Preflight matters because large batches are where errors become expensive

The strongest proof in the supplied material is not a clean empty screen. It is the real batch capture.

In that R3a screenshot, Rubra Image Forge processes a folder with **707 files**, about **290 MB** of sources, **703 planned** outputs, **29 duplicates**, **18 collisions**, **351 transparent** items and **4 blocking preflight errors**.

That does not just show that the prototype opens. It shows that it has already been exercised on the kind of batch where visibility, planning and error reporting actually matter.

## Why this tool belongs on GVibeDev.cc

Rubra Image Forge fits the site for the same reason Arena Rubra tools do: it turns a repeated production nuisance into an explicit workflow.

Instead of “drop images somewhere and hope the output is fine,” the workflow becomes:

**Select → Filter → Analyze → Review → Convert**

It is a small tool, but it reflects the same pattern seen across the broader project hub:

- identify a real bottleneck;
- expose the decisions instead of hiding them;
- test on actual workloads;
- keep room for iteration.

## Current public scope

The site page deliberately stays precise about maturity.

Rubra Image Forge is currently presented as a **development prototype**, not as a finished packaged product. The repository is public, but no release archive is linked yet, so the page provides the repository action and does not pretend a downloadable release already exists.

That keeps the public page honest while still showing a tool that is already clearly useful.
