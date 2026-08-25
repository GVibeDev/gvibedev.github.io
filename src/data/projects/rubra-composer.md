---
title: Rubra Packager
slug: rubra-composer
summary: A Windows release workshop for trusted local web and Python projects, covering preflight, Windows EXE, Android APK and Setup packaging workflows.
summaryIt: Una workstation Windows per progetti web e Python locali fidati, con preflight, build EXE Windows, APK Android e creazione di installer Setup.
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
status: v1.0.0 — Stable Public Source
statusIt: v1.0.0 — Sorgente pubblico stabile
cover: /assets/projects/rubra-packager/brand-icon.webp
coverAlt: Rubra Packager navy-and-gold application icon.
cardImage: /assets/projects/rubra-packager/projects-v1.webp
cardImageAlt: Rubra Packager Projects workspace showing registered local projects and build actions.
cardImagePosition: center
links:
  repositoryUrl: https://github.com/GVibeDev/Rubra-Packager
pageReady: true
logo: /assets/projects/rubra-packager/logo-extended.webp
socialImage: /assets/projects/rubra-packager/splash.webp
seoDescription: Rubra Packager v1.0.0 is a Windows desktop release workshop for trusted local web and Python projects, with preflight, Windows EXE, Android APK and Inno Setup packaging workflows.
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
    caption: Python → Windows — ONEFILE or ONEDIR builds with GUI or console mode, metadata, icons and controlled dependency staging.
  - src: /assets/projects/rubra-packager/about-v1.webp
    thumb: /assets/projects/rubra-packager/thumbs/about-v1.webp
    alt: Rubra Packager About workspace with v1.0.0 status and the product splash artwork.
    caption: About — the stable v1 workspace documents the product scope and its release-engineering focus.
---

## Rubra Packager v1.0.0

Rubra Packager is a Windows desktop release workshop for trusted local web and Python projects. The stable public source release combines project registration, preflight validation, Web → Windows, Python → Windows, Web → Android and Setup Builder workflows in one local interface.

The source repository is public at **GVibeDev/Rubra-Packager**. Generated Portable, Setup, EXE, APK, wheel and signing artifacts are intentionally kept outside the source repository.
