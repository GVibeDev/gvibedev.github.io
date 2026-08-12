---
title: Unum Sunt Sprite Studio
slug: unum-sunt-sprite-studio
summary: A desktop workflow for turning motion references into cleaned, aligned and export-ready sprite assets.
kind: tool
section: tools
owner: gvibedev
featured: true
sortOrder: 30
tags:
  - Sprite pipeline
  - Windows Desktop
  - WanGP bridge
  - Frame extraction
  - Cleanup & alignment
status: Development Preview
cover: /assets/projects/sprite-studio/card-cover.webp
coverAlt: Unum Sunt Sprite Studio interface showing a cleaned pixel-art character in the production workflow.
cardImage: /assets/projects/sprite-studio/card-cover.webp
cardImageAlt: Unum Sunt Sprite Studio production view with a cleaned pixel-art character and application branding.
cardImagePosition: center
links: {}
distribution:
  currentVersion: Development Preview
  plannedSections:
    - download
    - documentation
    - requirements
    - tutorials
    - changelog
    - github
    - support
pageReady: true
heroImage: /assets/projects/sprite-studio/cleanup.webp
heroAlt: Unum Sunt Sprite Studio Clean-up workspace with a pixel-art character on transparency and precision editing controls.
logo: /assets/projects/sprite-studio/sprite-studio-logo.webp
socialImage: /assets/projects/sprite-studio/og-sprite-studio.webp
endcapImage: /assets/projects/sprite-studio/idle-se-spritesheet.webp
endcapAlt: Exported eight-frame idle sprite sheet produced through Unum Sunt Sprite Studio.
seoDescription: Unum Sunt Sprite Studio is a Windows desktop development preview for generating, extracting, cleaning, aligning, selecting and exporting sprite animation frames, with an optional local WanGP generation bridge.
toolCategory: Sprite production workflow
platforms:
  - Windows Desktop
requirements:
  - label: Windows desktop environment
    detail: The current development preview is built and tested as a Windows desktop workflow.
    scope: core
    required: true
  - label: Miniconda / isolated Python environment
    detail: Recommended for the local WanGP integration so its runtime does not collide with the system Python installation.
    scope: generation
    required: true
  - label: Python 3.11.14
    detail: This is the interpreter version validated for the working local WanGP bridge. Point the bridge to this dedicated interpreter, not to a newer global Python installation.
    scope: generation
    required: true
  - label: WanGP Standalone
    detail: Required only for the Generate workspace when using the Local WAN / WanGP Bridge provider. Extraction, cleanup, alignment and export are separate stages.
    scope: generation
    required: true
  - label: PyTorch / CUDA stack
    detail: The validated local generation machine used PyTorch 2.10.0, torchvision 0.25.0 and torchaudio 2.10.0 from the CUDA 13.0 wheel index.
    scope: generation
    required: true
  - label: triton-windows
    detail: Installed after the WanGP requirements in the validated Windows generation environment.
    scope: generation
    required: true
  - label: CUDA-capable NVIDIA GPU
    detail: Part of the validated local WanGP generation setup. The non-generation Sprite Studio stages do not depend on WanGP GPU inference.
    scope: generation
    required: true
installGuide:
  title: Prepare and launch the validated local WanGP stack
  intro: >-
    The public Sprite Studio installer is not available yet, so this guide focuses on the dependency chain that previously caused the most trouble: the local WanGP runtime used by the Generate workspace.
  warning: The working bridge environment uses Python 3.11.14. In earlier tests, pointing the bridge at newer global Python 3.13/3.14 installations produced a NOT READY result even though the rest of the desktop application could still open. Keep WanGP isolated and select the dedicated 3.11.14 python.exe inside Sprite Studio.
  steps:
    - title: Create a dedicated Python 3.11.14 environment
      body: Keep WanGP independent from the global Python installation. The path below mirrors the known-good development layout and can be changed if you keep the same separation.
      code: |-
        conda create -p C:\AI\envs\WanGP python=3.11.14 -y
        conda activate C:\AI\envs\WanGP
        python --version
    - title: Install the validated PyTorch / CUDA packages
      body: This pins the package set used by the working Windows generation environment rather than allowing pip to resolve an arbitrary stack.
      code: |-
        python -m pip install torch==2.10.0 torchvision==0.25.0 torchaudio==2.10.0 --index-url https://download.pytorch.org/whl/cu130
    - title: Install WanGP requirements and Triton for Windows
      body: Run these commands from the WanGP Standalone root, the same directory that contains wgp.py and the models folder.
      code: |-
        cd /d C:\AI\WanGP_Standalone
        python -m pip install -r requirements.txt
        python -m pip install triton-windows
        python -m pip check
    - title: Verify CUDA before involving Sprite Studio
      body: Confirm that the dedicated environment can actually see the GPU. This isolates WanGP problems from Sprite Studio bridge problems.
      code: |-
        python -c "import torch; print(torch.__version__); print(torch.cuda.is_available()); print(torch.cuda.get_device_name(0) if torch.cuda.is_available() else 'NO CUDA')"
    - title: Launch WanGP once on its own
      body: The validated launch used SDPA, profile 4 and FP16. A successful run opens the local WanGP interface, normally on 127.0.0.1:7860.
      code: |-
        cd /d C:\AI\WanGP_Standalone
        C:\AI\envs\WanGP\python.exe wgp.py --attention sdpa --profile 4 --fp16 --open-browser
    - title: Point Sprite Studio at the dedicated WanGP runtime
      body: In Generate, choose Local WAN / WanGP Bridge. Set Python executable to the dedicated 3.11.14 python.exe, wgp.py to the file inside WanGP_Standalone, WanGP root to that same folder, and select the exported WanGP settings JSON used by your preset. Validate the bridge before starting a generation job.
    - title: Keep the working directory contract intact
      body: The bridge must run with the WanGP Standalone root as its working directory. Using another folder can break access to wgp.py, models/_settings.json and relative WanGP resources even when the Python path itself is correct.
gallery:
  - src: /assets/projects/sprite-studio/generate-wangp.webp
    thumb: /assets/projects/sprite-studio/thumbs/generate-wangp.webp
    alt: Unum Sunt Sprite Studio Generate workspace configured for the Local WAN and WanGP bridge.
    caption: Generate — reference image, motion reference, prompts, seed, resolution, frames and live job state in one workspace.
  - src: /assets/projects/sprite-studio/project-groups.webp
    thumb: /assets/projects/sprite-studio/thumbs/project-groups.webp
    alt: Unum Sunt Sprite Studio project workspace grouping subject, animation and direction.
    caption: Project Groups organize production as Subject → Animation → Direction while preserving local project state.
  - src: /assets/projects/sprite-studio/extraction-original.webp
    thumb: /assets/projects/sprite-studio/thumbs/extraction-original.webp
    alt: Sprite Studio extraction workspace showing a pixel-art character on a green background and chroma controls.
    caption: Extraction R1 starts from the source video and builds a configurable multi-colour background mask.
  - src: /assets/projects/sprite-studio/mask-structure.webp
    thumb: /assets/projects/sprite-studio/thumbs/mask-structure.webp
    alt: Sprite Studio mask preview showing the detected character silhouette in white against black.
    caption: Structural mask diagnostics expose the detected central silhouette before destructive cleanup.
  - src: /assets/projects/sprite-studio/transparent-result.webp
    thumb: /assets/projects/sprite-studio/thumbs/transparent-result.webp
    alt: Sprite Studio transparent result preview with the extracted character over a checkerboard.
    caption: The transparent preview makes edge contamination and missing pixels visible before later stages.
  - src: /assets/projects/sprite-studio/cleanup.webp
    thumb: /assets/projects/sprite-studio/thumbs/cleanup.webp
    alt: Sprite Studio Clean-up workspace with alpha cleanup, pixel painter and selection tools.
    caption: Clean-up combines automatic alpha repair with pixel painting, rectangle/lasso selection and undoable corrections.
  - src: /assets/projects/sprite-studio/alignment.webp
    thumb: /assets/projects/sprite-studio/thumbs/alignment.webp
    alt: Sprite Studio alignment workspace with output geometry, anchor controls and onion-skin options.
    caption: Alignment uses output geometry, shared scale and global/per-frame anchors to reduce animation jitter.
  - src: /assets/projects/sprite-studio/smart-selection.webp
    thumb: /assets/projects/sprite-studio/thumbs/smart-selection.webp
    alt: Sprite Studio smart frame selection workspace analysing movement, duplicates, anomalies and loop quality.
    caption: Smart selection analyses a source interval and proposes a smaller frame set for the target animation profile.
  - src: /assets/projects/sprite-studio/export.webp
    thumb: /assets/projects/sprite-studio/thumbs/export.webp
    alt: Sprite Studio Export Studio workspace configured to export an eight-frame WebP sprite sheet.
    caption: Export Studio produces individual frames or sprite sheets with configurable layout, scale, format and background.
---

## One pipeline instead of a folder full of half-finished frames

Unum Sunt Sprite Studio is a Windows desktop workflow built around a recurring production problem: converting a motion reference into sprite assets is not a single operation. Generation, background removal, frame selection, cleanup, alignment and export all create different failure points.

The tool keeps those stages visible and inspectable instead of hiding them behind one “make sprites” button.

The current public status is **Development Preview**. It is a working development application, but a public repository and packaged release have not been published yet.

## What the current workflow covers

### Generate with a local WanGP bridge

The Generate workspace can send a reference image and motion reference to a local WanGP installation. Prompt, negative prompt, seed, requested resolution, frame count, FPS and generation steps remain explicit, while job state and output are tracked inside Sprite Studio.

WanGP is an integration, not the whole application. The remaining production stages can be reasoned about and tested independently from generation.

### Extract and inspect the mask

Source video frames can be analysed against one or more background colours. The extraction workspace exposes tolerance, edge softening, cleanup and structural mask refinement instead of treating chroma removal as a one-value effect.

Separate views for the original frame, mask, transparent result, detected silhouette and candidate background make failures visible before they propagate.

### Clean the result instead of accepting it blindly

Automatic cleanup handles small alpha defects, while the pixel painter and selection tools allow local corrections. Rectangle and polygonal lasso selections can remove unwanted areas without forcing the user to repaint an entire frame.

### Align a sequence around useful anchors

Animation frames rarely arrive perfectly registered. Sprite Studio applies a shared output geometry, scale and anchor model, then allows per-frame correction. Onion-skin inspection helps reveal jitter that is easy to miss when looking at frames individually.

### Select fewer, better frames

The smart selection stage analyses motion, near-duplicates and anomalies across an interval. The goal is not simply to keep every generated frame, but to propose a compact sequence that better matches the intended animation profile.

### Export assets for a game pipeline

Export Studio can produce individual images or sprite sheets with controlled layout, scale, image format and background. The final product is an asset package, not merely a preview inside the tool.

## Why the setup is documented publicly

Local AI generation is the part most likely to fail for reasons unrelated to Sprite Studio itself. During development, a seemingly minor Python-version mismatch was enough to make the WanGP bridge report **NOT READY**.

That is exactly the kind of detail GVibeDev should expose rather than bury. A useful AI-assisted workflow includes dependency management, reproducible environments and diagnostics alongside the visible creative tool.

## AI-assisted, but designed around inspection

AI is used where it helps — most visibly in the optional generation stage — while later stages deliberately give control back to the operator. Masks can be inspected, frames can be rejected, anchors can be corrected and outputs can be rebuilt.

The objective is not maximum automation. It is a production chain where automation saves time without making mistakes impossible to see.
