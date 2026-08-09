# GVibeDev V0.1 — Asset Register

The four supplied brand assets are treated as authoritative input for V0.1.

| Source asset | Role | Master path | Runtime derivative |
|---|---|---|---|
| `gvibelogo.png` | Main G symbol | `src/assets/master/gvibelogo.png` | `public/assets/brand/gvibe-symbol.webp` |
| `gvibewordmark.png` | G Vibe Dev wordmark | `src/assets/master/gvibewordmark.png` | `public/assets/brand/gvibe-wordmark.webp` |
| `retrocomputer.png` | Retro-computer illustration | `src/assets/master/retrocomputer.png` | `public/assets/illustrations/retro-computer.webp` |
| `herologo.png` | Homepage hero artwork | `src/assets/master/herologo.png` | `public/assets/home/hero-gvibedev.webp` |

Additional generated derivatives:

- `public/assets/home/og-default.webp` — 1200×630 social preview crop.
- `public/assets/icons/icon-32.png` — favicon.
- `public/assets/icons/icon-192.png` — web manifest icon.
- `public/assets/icons/icon-512.png` — web manifest icon.

## Brand-token interpretation used in V0.1

The supplied palette is treated as a confirmed brand constraint: black / graphite, warm white, blue and red.

Primary CSS tokens are stored in `src/styles/tokens.css`. Exact display values can be tuned visually during V0.1 validation without changing the approved palette family.
