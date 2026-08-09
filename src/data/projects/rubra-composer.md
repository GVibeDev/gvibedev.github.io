---
title: Rubra Packager
slug: rubra-composer
summary: A Windows release workstation for validating trusted static web games and packaging them for Windows and Android.
kind: tool
section: tools
owner: gvibedev
featured: false
sortOrder: 40
tags:
  - Release packaging
  - Windows EXE
  - Android APK / AAB
  - Preflight validation
status: v0.5.0 — Active Development
cover: /assets/projects/rubra-packager/card-cover.webp
coverAlt: Rubra Packager Projects screen showing registered release projects in the navy and gold desktop interface.
cardImage: /assets/projects/rubra-packager/card-cover.webp
cardImageAlt: Rubra Packager Projects workspace with registered projects and build actions.
cardImagePosition: center
links:
  repositoryUrl: https://github.com/GVibeDev/Rubra-Composer
pageReady: true
heroImage: /assets/projects/rubra-packager/projects.webp
heroAlt: Rubra Packager Projects screen showing the project registry, release profiles and build controls.
socialImage: /assets/projects/rubra-packager/og-rubra-packager.webp
seoDescription: Rubra Packager v0.5.0 is a Windows desktop release workstation for preflighting trusted static web games and packaging them as Windows executables and Android APK or AAB outputs.
toolCategory: Web game release packaging
platforms:
  - Windows desktop
  - Windows EXE
  - Android APK / AAB
requirements:
  - label: Windows desktop host
    detail: The current public workflow is a Windows desktop application launched through the repository's Windows scripts.
    scope: core
    required: true
  - label: Static web application output
    detail: The source project must expose a real index.html at the root or in a recognized static output folder such as dist, build, out or .output/public.
    scope: core
    required: true
  - label: Trusted project source
    detail: If Rubra Packager needs to run npm install or npm run build, the source can execute package scripts. Source execution must be enabled explicitly only for projects you trust.
    scope: core
    required: true
  - label: JDK 17 or newer
    detail: Required for Android packaging. The v0.5.0 development capture shows the Java toolchain detected before an Android build.
    scope: generation
    required: true
  - label: Android SDK
    detail: Required for Android packaging and normally installed through Android Studio. Rubra Packager checks the configured SDK before build.
    scope: generation
    required: true
  - label: Node.js and npm
    detail: Required by the Android packaging workflow and by source projects that need an npm build step before packaging.
    scope: generation
    required: true
setupCopy:
  heading: Know the release target before you press Build.
  intro: Windows packaging can work from an already-static project, while Android output adds a Java, Android SDK and Node toolchain. Rubra Packager keeps those dependencies visible before the build instead of discovering them halfway through Gradle.
  coreLabel: Core workflow
  coreTitle: Windows release workstation
  secondaryLabel: Android build
  secondaryTitle: Android toolchain
  publicPackage: Repository available · Release package pending
  platformLabel: Platform / output
  secondaryRequiredLabel: Required for Android
installGuide:
  eyebrow: Windows installation
  title: Install and start Rubra Packager
  intro: The public launcher is designed to create or repair a per-user runtime instead of relying on an editable contributor environment.
  warningTitle: Trust source execution
  warning: Rubra Packager can run npm install and npm run build when a project has no ready static output. Package scripts can execute code on your computer, so enable source execution only for projects you trust.
  footnote: The project repository is public, but no GitHub Release is linked yet. The site therefore exposes the repository action and deliberately omits a Download release button until a real release package is published.
  steps:
    - title: Extract the complete project archive
      body: Put the complete Rubra Packager source/archive in a normal user-writable folder. Do not launch it from inside a compressed archive.
    - title: Run the normal Windows launcher
      body: Start run_windows.cmd normally, not as Administrator. The launcher creates or repairs the per-user runtime under %LOCALAPPDATA%\RubraPackager\runtime and does not treat a half-created environment as a valid installation.
      code: run_windows.cmd
    - title: Register a trusted project folder
      body: Add the source folder once, choose the appropriate profile and select the FULL or LITE packaging variant.
    - title: Run preflight before building
      body: Fix blocking errors first and review warnings. Preflight checks required paths and only resolves static references with high confidence instead of guessing dynamic runtime filenames.
    - title: Build the target package
      body: Use the Windows workspace for a desktop executable or the Android workspace for APK/AAB output. Android builds require the additional Java, SDK and Node toolchain shown above.
    - title: Verify the artifact
      body: Check the generated SHA-256 and test the result on the target Windows or Android device before treating the package as releasable.
gallery:
  - src: /assets/projects/rubra-packager/projects.webp
    thumb: /assets/projects/rubra-packager/thumbs/projects.webp
    alt: Rubra Packager Projects screen showing four registered web-game packaging projects.
    caption: Projects — register trusted sources once, then reuse profile and variant metadata for later release builds.
  - src: /assets/projects/rubra-packager/preflight.webp
    thumb: /assets/projects/rubra-packager/thumbs/preflight.webp
    alt: Rubra Packager Preflight screen reporting a missing index.html and a manifest warning.
    caption: Preflight separates blocking errors from warnings before a packaging job can proceed.
  - src: /assets/projects/rubra-packager/windows.webp
    thumb: /assets/projects/rubra-packager/thumbs/windows.webp
    alt: Rubra Packager Windows screen configured to build an Arena Rubra executable with a custom icon.
    caption: Windows output selects project, application name, profile, variant and icon before building the executable.
  - src: /assets/projects/rubra-packager/android.webp
    thumb: /assets/projects/rubra-packager/thumbs/android.webp
    alt: Rubra Packager Android screen showing detected Java, Android SDK and Node tools plus signed AAB configuration.
    caption: Android v0.5.0 exposes toolchain checks, APK/AAB output selection, launcher icon controls and release-signing fields.
  - src: /assets/projects/rubra-packager/about.webp
    thumb: /assets/projects/rubra-packager/thumbs/about.webp
    alt: Rubra Packager About screen describing the RP-R5 independent public baseline and trust warning.
    caption: About — the public baseline documents scope, reproducibility and the explicit trust boundary around package scripts.
---

## Release packaging as a repeatable workflow

Rubra Packager is a Windows desktop workstation for the less glamorous part of shipping a web game: taking a trusted static project, checking that the package is coherent and producing a target build without repeating the same manual release steps every time.

The project lives in the **Rubra-Composer** repository. The current site baseline is **v0.5.0 — Active Development**.

## What v0.5.0 covers

### Register projects once

The Projects shelf stores a source folder together with its packaging profile and release metadata. Profiles such as Arena Rubra, Generic Web Game and Generic HTML App define required paths, target defaults and FULL/LITE exclusion rules.

That keeps packaging policy out of the game source itself and makes repeated builds easier to reproduce.

### Preflight before packaging

A build should fail early for the right reason.

Preflight scans the selected variant, reports included and excluded files, estimates package size and separates blocking errors from warnings. Static HTML/CSS references, local JavaScript module imports and static `new URL(..., import.meta.url)` assets can be checked directly; dynamic runtime-generated paths are not guessed.

### Windows executable output

The Windows workspace prepares a one-file desktop executable using the project's Windows packaging stack. Application name, profile, variant and custom icon stay visible before the build starts.

The source repository documents the Windows path as a PyInstaller + PyWebView package rather than a generic Python-to-EXE converter.

### Android APK and AAB output

Android packaging adds a separate toolchain: Java, Android SDK, Node.js/npm and the Gradle/Capacitor build path.

The v0.5.0 interface exposes debug/release-oriented Android output, APK/AAB selection, launcher icon configuration and release-signing fields. Those controls are deliberately kept separate from the Windows path so platform requirements are visible.

## Supported static source layouts

Rubra Packager recognizes a root `index.html` or common static output folders including:

- `dist/`
- `build/`
- `out/`
- `.output/public/`
- Gatsby `public/` when Gatsby is detected
- Angular-style `dist/<project>/browser/`

The boundary is intentional: a framework project must produce a real static `index.html`. Server-side rendering, backend APIs and dynamic routes are outside the current packaging scope.

## Trust is part of the product design

Sometimes the requested source is not already built. Rubra Packager can then invoke `npm install` and `npm run build`, but package scripts are executable code.

The UI therefore requires an explicit trust choice before source execution. That warning is not decorative; it is part of the release model.

## Why build this instead of another one-off script?

Arena Rubra and the smaller GVibeDev web experiments repeatedly needed the same operations: locate a static output, validate required assets, package the correct variant, configure icons, build for a target and verify the resulting artifact.

Rubra Packager turns that repeated release work into a visible, inspectable workflow:

**Register → Preflight → Fix → Build → Verify**

The goal is not to hide packaging behind one magic button. It is to make the steps repeatable enough that a build can be understood when something goes wrong.
