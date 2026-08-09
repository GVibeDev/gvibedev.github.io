# Sprite Studio — validated WanGP bridge setup

This document mirrors the setup shown on the public Sprite Studio project page.

## Frozen known-good environment

- Windows desktop.
- WanGP isolated from the global Python installation.
- Dedicated Python: **3.11.14**.
- Validated environment path: `C:\AI\envs\WanGP`.
- WanGP root: `C:\AI\WanGP_Standalone`.
- `wgp.py`: `C:\AI\WanGP_Standalone\wgp.py`.
- PyTorch 2.10.0, torchvision 0.25.0, torchaudio 2.10.0 from the CUDA 13.0 wheel index.
- `triton-windows` installed after WanGP requirements.

## Important Python issue

During development, newer global Python 3.13/3.14 installations could be selected by mistake. The local WanGP bridge then reported **NOT READY**. The known-good configuration points Sprite Studio at the dedicated Python **3.11.14** executable.

This is a project-specific validated configuration, not a claim that WanGP supports only one Python version.

## Working-directory issue

The bridge working directory must be the WanGP Standalone root. Running from another folder can break relative resources even with the correct interpreter.
