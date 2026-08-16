---
title: Unum Sunt Sprite Studio
slug: unum-sunt-sprite-studio
summary: A Windows desktop suite for generating, extracting, cleaning, selecting, aligning, organising and exporting sprite animation assets, with optional managed local AI runtimes.
kind: tool
section: tools
owner: gvibedev
featured: true
sortOrder: 30
tags:
  - End-to-end sprite pipeline
  - Windows x64
  - WanGP / WAN Animate
  - Smart frame selection
  - Managed AI runtime
status: Public Development Release — R5c6
cover: /assets/projects/sprite-studio/card-cover.webp
coverAlt: Unum Sunt Sprite Studio extended brand mark with the three-ring emblem and application name.
cardImage: /assets/projects/sprite-studio/card-cover.webp
cardImageAlt: Unum Sunt Sprite Studio extended brand mark with the three-ring emblem and application name.
cardImagePosition: center
links:
  repositoryUrl: https://github.com/GVibeDev/UnumSunt_Sprite_Studio
  releaseUrl: https://github.com/GVibeDev/UnumSunt_Sprite_Studio/releases
  actions:
    - type: documentation
      label: Documentation
      href: '#documentation'
    - type: support
      label: Support
      href: /support/
distribution:
  currentVersion: R5c6 — Public Development Release
  currentVersionIt: R5c6 — Release pubblica di sviluppo
  summary: Sprite Studio now has a public repository and GitHub Releases. The Windows core is standalone, while the managed local-AI runtime remains an optional layer with preflight, adoption, repair and health-check tooling.
  summaryIt: Sprite Studio dispone ora di repository pubblico e GitHub Releases. Il core Windows è standalone, mentre il runtime AI locale gestito resta un livello opzionale con preflight, adozione, repair e health check.
  items:
    - id: download
      stage: current
      state: available
      href: https://github.com/GVibeDev/UnumSunt_Sprite_Studio/releases
      commercialAction: download
      newTab: true
      note: Public development packages are distributed through GitHub Releases.
      noteIt: I pacchetti pubblici di sviluppo sono distribuiti tramite GitHub Releases.
    - id: github
      stage: current
      state: available
      href: https://github.com/GVibeDev/UnumSunt_Sprite_Studio
      newTab: true
      note: Source, history and public project documentation are available in the repository.
      noteIt: Sorgenti, cronologia e documentazione pubblica del progetto sono disponibili nel repository.
    - id: documentation
      stage: current
      state: on-page
      href: '#documentation'
      note: The 14-workspace production chain and validated R5c-series architecture are documented on this page.
      noteIt: La catena produttiva a 14 workspace e l’architettura validata della serie R5c sono documentate in questa pagina.
    - id: requirements
      stage: current
      state: on-page
      href: '#requirements'
      note: Core Windows packaging and the optional managed local-AI runtime are documented separately.
      noteIt: Il packaging Windows core e il runtime AI locale gestito opzionale sono documentati separatamente.
    - id: changelog
      stage: current
      state: available
      href: https://github.com/GVibeDev/UnumSunt_Sprite_Studio/releases
      newTab: true
      note: Public release history and packaged builds are exposed through GitHub Releases.
      noteIt: La cronologia delle release pubbliche e i pacchetti sono esposti tramite GitHub Releases.
    - id: support
      stage: current
      state: available
      href: /support/
      note: Voluntary project support routes through the shared GVibeDev Support page; the external PayPal endpoint remains inactive until configured.
      noteIt: Il supporto volontario passa dalla pagina Supporto condivisa di GVibeDev; l’endpoint PayPal esterno resta inattivo finché non viene configurato.
    - id: tutorials
      stage: development
      state: planned
      note: Dedicated public tutorials will be linked when the documentation set is ready.
      noteIt: I tutorial pubblici dedicati verranno collegati quando il set documentale sarà pronto.
  plannedSections:
    - download
    - documentation
    - requirements
    - tutorials
    - changelog
    - github
    - support
pageReady: true
heroImage: /assets/projects/sprite-studio/splash-banner.webp
heroAlt: Unum Sunt Sprite Studio splash banner with the three-ring brand mark, sprite production imagery and the line Create sprites. Refine frames. Build worlds.
logo: /assets/projects/sprite-studio/sprite-studio-logo.webp
socialImage: /assets/projects/sprite-studio/og-sprite-studio.webp
endcapImage: /assets/projects/sprite-studio/idle-se-spritesheet.webp
endcapAlt: Exported idle sprite sheet produced through Unum Sunt Sprite Studio.
seoDescription: Unum Sunt Sprite Studio is a public Windows development release for end-to-end sprite production, combining WanGP/WAN Animate generation, chroma extraction, alpha cleanup, smart selection, alignment, spritesheet tools, guided workflows and an optional managed local-AI runtime.
toolCategory: End-to-end sprite production suite
platforms:
  - Windows x64
requirements:
  - label: Windows x64
    detail: The public application is packaged as a standalone PyInstaller onedir build and installed through Inno Setup. Python is not required on the destination machine for the core application.
    scope: core
    required: true
  - label: GitHub Releases package
    detail: Public development packages and release history are distributed from the project Releases page.
    scope: core
    required: true
  - label: Managed local-AI runtime
    detail: Optional for AI generation. Sprite Studio can bootstrap a private Miniconda + Python 3.11.14 + PyTorch 2.10/cu130 + WanGP environment or adopt an existing external WanGP installation without moving it.
    scope: generation
    required: true
  - label: Compatible CUDA / PyTorch runtime
    detail: Local generation depends on effective driver, CUDA and PyTorch-wheel compatibility. R5c2 intentionally does not impose a fixed minimum GPU, VRAM or RAM model threshold.
    scope: generation
    required: true
  - label: Local model storage
    detail: WAN Animate and selected checkpoints require substantial disk space. Preflight checks destination paths, writability and free space before managed installation.
    scope: generation
    required: true
  - label: Krea 2 setup
    detail: Runtime acquisition/licence plumbing is present, but the end-to-end Krea 2 setup remains pending after R5c6 and is not treated as a completed public feature.
    scope: generation
    required: false
setupCopy:
  heading: Install the Windows core first; add local AI only when needed.
  intro: The public application no longer requires a hand-built Python environment. Core, Complete and Custom installer paths keep the Windows application separate from the heavier optional AI runtime.
  coreLabel: Core application
  coreTitle: Sprite Studio standalone
  secondaryLabel: Optional local AI
  secondaryTitle: Managed WanGP runtime
  publicPackage: GitHub Releases
  platformLabel: Platform
  secondaryRequiredLabel: Required for local generation
installGuide:
  eyebrow: Public Windows release
  title: Install, verify and maintain the release without hand-editing a Python stack
  intro: R5c4/c4a introduced a real Inno Setup installer. R5c6 adds maintenance/update behaviour and opt-in cleanup while preserving user data by default.
  warningTitle: Local AI is a separate layer.
  warning: Core Sprite Studio can be installed without the heavy AI runtime. GPU/VRAM/RAM values are diagnostic; local-generation compatibility is decided by the runtime contract rather than a hard-coded minimum model list.
  footnote: Existing external WanGP installations remain external unless deliberately adopted. Managed repair/update/removal never takes ownership of folders that Sprite Studio did not install as managed components. Krea 2 end-to-end setup remains pending after R5c6.
  steps:
    - title: Download a public package
      body: Use the GitHub Releases page for the current development package and its release notes/checksums.
    - title: Choose Core, Complete or Custom
      body: Core installs the standalone application. Complete/Custom can orchestrate the optional local-AI stack and model choices.
    - title: Run the non-destructive preflight
      body: Preflight checks Windows/CUDA driver capability, destination paths, writability, disk space and any existing WanGP installation before a managed install begins.
    - title: Adopt or install the AI runtime only when required
      body: An existing WanGP install can be registered as external without moving or renaming it; otherwise Runtime Manager can bootstrap the private managed environment.
    - title: Verify with health check
      body: Runtime Manager reports Python/PyTorch/CUDA/model compatibility and keeps real bindings separate from mock fixtures used by the test suite.
    - title: Repair or update without losing user data
      body: Re-running Setup or maintenance can repair/update the managed stack. Runtime, models and application data have independent opt-in removal choices during uninstall.
gallery:
  - src: /assets/projects/sprite-studio/v024/video-generation.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/video-generation.webp
    alt: Unum Sunt Sprite Studio video generation workspace driving WanGP with reference image, motion reference, prompts and live job progress.
    caption: Video generation — WanGP/WAN Animate bridge with explicit reference, prompt, resolution, frame, FPS and job controls.
  - src: /assets/projects/sprite-studio/v024/image-generation.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/image-generation.webp
    alt: Unum Sunt Sprite Studio local image generation provider showing prompt controls and a completed character image job.
    caption: Image Gen — a separate local provider produces normalised image jobs without coupling the application core to the AI runtime.
  - src: /assets/projects/sprite-studio/v024/project-groups.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/project-groups.webp
    alt: Unum Sunt Sprite Studio Project Groups hierarchy showing subject, animation and direction state.
    caption: Project Groups — Subject → Animation → Direction keeps production assets, state and metadata attached to the active group.
  - src: /assets/projects/sprite-studio/v024/cleanup.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/cleanup.webp
    alt: Unum Sunt Sprite Studio Clean-up workspace with alpha brush, pixel grid and selection propagation tools.
    caption: Clean-up — alpha painting, rectangle/lasso selection, propagation and transactional undo support frame-level repair.
  - src: /assets/projects/sprite-studio/v024/smart-selection-results.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/smart-selection-results.webp
    alt: Unum Sunt Sprite Studio smart frame selection results with movement, anomaly and quality scores.
    caption: Smart Selection — MAD/Rec.709-derived analysis proposes a compact frame set while exposing movement, anomalies and loop quality.
  - src: /assets/projects/sprite-studio/v024/alignment.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/alignment.webp
    alt: Unum Sunt Sprite Studio Alignment workspace with output geometry, shared scale, anchor and per-frame offset controls.
    caption: Alignment — shared geometry, anchors, pivots, mirroring and per-frame offsets reduce jitter without hiding the underlying frames.
  - src: /assets/projects/sprite-studio/v024/sprite-sheet-import.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/sprite-sheet-import.webp
    alt: Unum Sunt Sprite Studio Sprite Sheet workspace decomposing an imported atlas into frames.
    caption: Sprite Sheet — regular or irregular sheets can be decomposed, normalised and rebuilt as WAN reference material.
  - src: /assets/projects/sprite-studio/v024/productive-presets.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/productive-presets.webp
    alt: Unum Sunt Sprite Studio Productive Presets workspace with reusable pipeline settings.
    caption: Productive Presets — capture reusable settings while preserving source media and manual per-frame corrections.
  - src: /assets/projects/sprite-studio/v024/calibration-lab.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/calibration-lab.webp
    alt: Unum Sunt Sprite Studio Calibration Lab listing generation runs and A/B baseline controls.
    caption: Calibration Lab — compare runs, ratings and useful-frame counts, then promote a validated configuration to a production profile.
  - src: /assets/projects/sprite-studio/v024/guided-workflows.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/guided-workflows.webp
    alt: Unum Sunt Sprite Studio Guided Workflows router showing the Standard Video to Sprite sequence.
    caption: Guided Workflows — Standard, Full AI-to-Sprite and Rework routes record completion and preserve checkpoints instead of locking the user into a wizard.
  - src: /assets/projects/sprite-studio/v024/runtime-preflight.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/runtime-preflight.webp
    alt: Unum Sunt Sprite Studio local AI preflight showing CUDA, PyTorch, disk and runtime compatibility checks.
    caption: Runtime preflight — non-destructive checks report driver/runtime compatibility, writable paths and disk requirements before installation.
  - src: /assets/projects/sprite-studio/v024/runtime-manager.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/runtime-manager.webp
    alt: Unum Sunt Sprite Studio Runtime Manager with managed components, model choices, licences and health status.
    caption: Runtime Manager — install/adopt, health-check, repair/update and remove managed components without touching external WanGP folders.
  - src: /assets/projects/sprite-studio/v024/smart-selection-analysis.webp
    thumb: /assets/projects/sprite-studio/v024/thumbs/smart-selection-analysis.webp
    alt: Unum Sunt Sprite Studio long-source smart-selection analysis running with progress and cancellation controls.
    caption: Long-source analysis remains cancellable and explicit, with profile, interval and proposal controls visible during processing.
---

## A production suite rather than a one-click sprite generator

Unum Sunt Sprite Studio has grown from a frame-extraction workflow into a fourteen-workspace Windows production suite. It can start from generated video, generated images, ordinary footage or an existing spritesheet, then keep the downstream work inspectable: extraction, cleanup, frame analysis, alignment, reusable presets, project organisation and export.

The current public development line reaches **R5c6** and now has a public repository and GitHub Releases. The core application is packaged as a standalone Windows build; local AI generation remains an optional managed layer rather than a hidden dependency of every workspace.

## Creative pipeline

Project Groups organise production as Subject → Animation → Direction. Generate can drive WanGP/WAN Animate video jobs and a separate image-generation provider. Extraction R1 handles chroma-key analysis and edge decontamination. Clean-up adds alpha painting, rectangle/lasso selections, propagation and transactional undo. Alignment controls pivots, anchors, mirroring and output geometry. Smart Selection analyses frames using MAD / Rec.709-derived metrics before Export writes the final images or spritesheets.

Productive Presets, Calibration Lab, Prompt Builder, Sprite Sheet tools, Guided Workflows and Character Set / Layer Manager make those stages reusable across a larger character-production process.

## Standalone Windows and managed AI runtime

R5c1 moved the application to a PyInstaller onedir build with LocalAppData configuration/logging and frozen-runtime self-checks. R5c4/c4a introduced a real Inno Setup installer with Core, Complete and Custom paths, so the target machine does not need a pre-installed Python interpreter for the core application.

The optional local-AI runtime can bootstrap private Miniconda + Python 3.11.14, PyTorch 2.10/cu130 and WanGP requirements, or adopt an existing WanGP installation as an external dependency without moving it. Preflight checks CUDA driver capability, paths, writability and free space without imposing an arbitrary fixed GPU/VRAM/RAM model threshold.

Runtime downloads are resumable and SHA-256 verified; downloaded Windows installers are checked with Authenticode before execution. Managed repair/update/removal acts only on managed components, and uninstall cleanup for runtime, models and application data remains opt-in.

Krea 2 acquisition/licence plumbing is present, but end-to-end Krea 2 setup remains pending after R5c6 and is not presented as complete.

## AI-assisted, still operator-visible

AI generation is one input to the production chain, not the authority over its output. Masks can be inspected, frames can be rejected, pixels can be repaired, anchors can be corrected, presets can be compared, and final exports can be rebuilt.

The objective remains the same even as the suite grows: automation should remove repetitive work without making errors impossible to see.
