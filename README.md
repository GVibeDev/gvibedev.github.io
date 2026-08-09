# GVibeDev.cc V0.2a patch

Small corrective patch over the validated V0.2 project-page foundation.

The patch fixes a structural media issue in `ProjectCard`: portrait artwork could keep its intrinsic ratio and stretch a card vertically. Card media now owns a fixed 4:3 viewport and the image fills that viewport with `object-fit: cover`.

It also introduces a clean data contract for context-specific artwork:

- `cover`: generic/fallback project artwork;
- `cardImage`: project-card artwork;
- `heroImage`: project-page hero;
- `socialImage`: Open Graph/social artwork.

Arena Rubra is the first project to use this split, with a dedicated card cover derived from the author-provided vertical banner.
