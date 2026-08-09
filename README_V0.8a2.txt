GV-PORTFOLIO V0.8a2 — B&W Survivors Astro Route Hotfix

Problem
-------
The runtime assets are correctly present under public/apps/bw-survivors/, but Astro's dev router returns 404 for /apps/bw-survivors/ because the raw public/index.html is a static asset, not a file-based Astro route.

Fix
---
- Keep game.js, CSS, manifest, icons and gameassets under public/apps/bw-survivors/.
- Move the runtime entry document into Astro routing:
    src/pages/apps/bw-survivors/index.html
- Remove the duplicate:
    public/apps/bw-survivors/index.html

Application
-----------
1. Stop npm run dev.
2. Extract this ZIP directly into the gvibedev.github.io repository root.
3. Run APPLY_V0.8a2_ROUTE_FIX.bat.
4. Run VERIFY_V0.8a2_ROUTE_FIX.bat.
5. Run npm run dev.
6. Open http://localhost:4321/apps/bw-survivors/
7. If successful, run npm run build and npm run preview.

No npm dependencies are added.
