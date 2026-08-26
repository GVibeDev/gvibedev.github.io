---
title: Rubra Packager
slug: rubra-packager
summary: A Windows release workshop that packages trusted web projects and can take Python source through preflight, Windows EXE/ONEDIR build and Inno Setup installer creation.
summaryIt: Una workstation Windows che confeziona progetti web fidati e può portare il sorgente Python dal preflight alla build EXE/ONEDIR fino all’installer Inno Setup.
kind: tool
section: tools
owner: gvibedev
featured: false
sortOrder: 40
tags:
  - Release packaging
  - Web → Windows
  - Python → Windows
  - Android APK
  - Setup Builder
  - Preflight
tagsIt:
  - Packaging release
  - Web → Windows
  - Python → Windows
  - APK Android
  - Setup Builder
  - Preflight
status: v1.0.0 — Available on itch.io
statusIt: v1.0.0 — Disponibile su itch.io
cover: /assets/projects/rubra-packager/brand-icon.webp
coverAlt: Rubra Packager navy-and-gold application icon.
cardImage: /assets/projects/rubra-packager/projects-v1.webp
cardImageAlt: Rubra Packager Projects workspace showing registered local projects and build actions.
cardImagePosition: center
links:
  repositoryUrl: https://github.com/GVibeDev/Rubra-Packager
  actions:
    - type: buy
      label: Get Rubra Packager — $3.99+
      href: https://gvibedev.itch.io/rubra-packager
      primary: true
      newTab: true
distribution:
  currentVersion: v1.0.0
  currentVersionIt: v1.0.0
  summary: Source and build tooling are public on GitHub; official binary purchase and downloads are handled by itch.io.
  summaryIt: Sorgente e strumenti di build sono pubblici su GitHub; acquisto e download binari ufficiali sono gestiti da itch.io.
  items:
    - id: download
      stage: current
      state: available
      href: https://gvibedev.itch.io/rubra-packager
      newTab: true
      note: Official purchase, buyer library and binary downloads via itch.io.
      noteIt: Acquisto ufficiale, libreria dell’acquirente e download binari tramite itch.io.
    - id: github
      stage: current
      state: available
      href: https://github.com/GVibeDev/Rubra-Packager
      newTab: true
      note: Public source code, documentation and release-building tools.
      noteIt: Codice sorgente pubblico, documentazione e strumenti per assemblare le release.
pageReady: true
logo: /assets/projects/rubra-packager/logo-extended.webp
socialImage: /assets/projects/rubra-packager/splash.webp
seoDescription: Rubra Packager v1.0.0 packages trusted web projects and provides a Python source to Windows EXE/ONEDIR to Inno Setup release pipeline, alongside Android APK packaging and preflight validation.
endcapImage: /assets/projects/rubra-packager/splash.webp
endcapAlt: Rubra Packager splash artwork with the Package, Protect and Deploy release workflow.
toolCategory: Local release engineering
platforms:
  - Windows 10 / 11 host
  - Windows EXE
  - Android APK
  - Windows Setup
requirements:
  - label: Python 3.11+
    detail: Required for source checkout and for preparing the private Python/PyInstaller build engine used by packaging workflows.
    scope: core
    required: true
  - label: Trusted local source
    detail: npm or pip/project installation can execute project-controlled code with the current user's permissions and must be enabled only for sources you trust.
    scope: core
    required: true
  - label: Inno Setup 6 or 7
    detail: Required by Setup Builder and by the full Portable + Setup self-release workflow.
    scope: generation
    required: true
  - label: JDK 17+
    detail: Required for Android APK packaging.
    scope: generation
    required: true
  - label: Android SDK
    detail: Required for Android packaging; Android Studio is the simplest route to install and maintain the SDK.
    scope: generation
    required: true
  - label: Node.js and npm
    detail: Required for Android packaging and for web sources that need an npm build step before packaging.
    scope: generation
    required: true
gallery:
  - src: /assets/projects/rubra-packager/projects-v1.webp
    thumb: /assets/projects/rubra-packager/thumbs/projects-v1.webp
    alt: Rubra Packager Projects workspace showing registered web projects and build actions.
    caption: Projects — register trusted local sources and keep their packaging metadata available for later builds.
  - src: /assets/projects/rubra-packager/preflight-v1.webp
    thumb: /assets/projects/rubra-packager/thumbs/preflight-v1.webp
    alt: Rubra Packager Web Preflight workspace with project, profile and variant controls plus a report panel.
    caption: Web Preflight — scan the selected package, separate blocking errors from warnings and review what will be included.
  - src: /assets/projects/rubra-packager/web-windows-v1.webp
    thumb: /assets/projects/rubra-packager/thumbs/web-windows-v1.webp
    alt: Rubra Packager Web to Windows workspace with build options and a completed PyInstaller output log.
    caption: Web → Windows — package an offline/static web project as a one-file Windows executable and publish the resulting hash.
  - src: /assets/projects/rubra-packager/android-v1.webp
    thumb: /assets/projects/rubra-packager/thumbs/android-v1.webp
    alt: Rubra Packager Android workspace showing detected Java, Android SDK and Node tools with a successful APK build log.
    caption: Android — verify JDK, SDK and Node prerequisites, build the APK and check ZIP integrity and signature information.
  - src: /assets/projects/rubra-packager/python-windows-v1.webp
    thumb: /assets/projects/rubra-packager/thumbs/python-windows-v1.webp
    alt: Rubra Packager Python to Windows workspace with dependency controls and PyInstaller build output.
    caption: Python → Windows — start from Python source, build ONEFILE or ONEDIR with controlled dependency staging, then use the result as input for Setup Builder.
  - src: /assets/projects/rubra-packager/about-v1.webp
    thumb: /assets/projects/rubra-packager/thumbs/about-v1.webp
    alt: Rubra Packager About workspace with v1.0.0 status and the product splash artwork.
    caption: About — the stable v1 workspace documents the product scope and its release-engineering focus.
---

## Rubra Packager v1.0.0

Rubra Packager is a Windows desktop release workshop for trusted local web and Python projects. The stable public source release combines project registration, preflight validation, Web → Windows, Python → Windows, Web → Android and Setup Builder workflows in one local interface.

The source repository is public at **GVibeDev/Rubra-Packager**. Generated Portable, Setup, EXE, APK, wheel and signing artifacts are intentionally kept outside the source repository.
