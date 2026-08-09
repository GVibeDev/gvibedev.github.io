# G Vibe Dev — gvibedev.cc

Astro static site for the GVibeDev personal portfolio / project hub.

## Current candidate

**GV-PORTFOLIO V0.2 — Project Page Foundation + Arena Rubra Showcase**

V0.1 remains the validated foundation. V0.2 adds the first full project-page system and uses Arena Rubra as the reference implementation.

## Local development

Node 22.12+ is required.

```bash
npm install
npm run dev
```

Astro normally serves the site at:

```text
http://localhost:4321/
```

To expose it on the local network:

```bash
npm run dev -- --host
```

## Build validation

```bash
npm run build
npm run preview
```

## Important when upgrading from the validated V0.1 working tree

Your local V0.1 test generated a `package-lock.json`. Keep that file.

V0.2 adds **no new npm dependency**. Merge/copy the V0.2 files over the working repository rather than deleting the lock file and reinstalling the dependency tree from scratch.

## Routes added in V0.2

- `/projects/`
- `/projects/arena-rubra-digital/`

Project detail routes are generated only when their content entry has `pageReady: true`. This prevents unfinished placeholder pages from being published.

## Arena Rubra

Repository: `https://github.com/GVibeDev/ArenaRubra`

Public website status: **Demo — Work in Progress**

No public Launch App URL is configured in V0.2.

See `docs/V0.2-SCOPE.md` and `docs/V0.2-CHECKLIST.md`.
