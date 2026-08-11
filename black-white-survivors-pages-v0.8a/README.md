# B&W Survivors — 0.9A Online Runtime

Public static single-player deployment derived from the supplied **0.9A MOBILEMENUSFIT** build.

Target repository: `pizza-990/black-white-survivors`  
Expected GitHub Pages URL: `https://pizza-990.github.io/black-white-survivors/`

## Runtime boundary

The original downloadable 0.9A archive contains both browser solo play and a LAN layer that uses `launcher.js`, `server.js` and `lan.js` with a local Node/WebSocket process.

GitHub Pages cannot start that local process. This online runtime therefore publishes the **single-player browser path only**:

- gameplay, waves and bosses are unchanged;
- loadout, Black Box, Character, Encyclopedia and Weapon Tester remain available;
- IT / EN selection remains available;
- mobile/touch presentation remains available;
- LAN is removed from the hosted menu;
- the full downloadable 0.9A archive remains the reference build for local LAN play.

No gameplay balance file has been rewritten. `game.js`, `style.css`, `gameassets/`, manifest and icons are copied from the supplied build. The only web-runtime additions are `online-runtime.js`, `online-runtime.css`, the script/style references in `index.html`, and the Pages workflow.

## Local smoke test

From the repository root:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/` and verify solo play before publishing.

## GitHub Pages

In repository **Settings → Pages**, set **Source** to **GitHub Actions**, then push `main` or run the workflow manually.
