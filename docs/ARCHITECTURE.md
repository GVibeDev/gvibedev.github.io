# GVibeDev.cc — Repository Architecture

## V0.1 runtime tree

```text
gvibedev.github.io/
├── .github/workflows/deploy.yml
├── public/
│   ├── CNAME
│   ├── robots.txt
│   ├── site.webmanifest
│   └── assets/
├── src/
│   ├── assets/master/
│   ├── components/
│   │   ├── cards/
│   │   ├── chrome/
│   │   ├── home/
│   │   └── ui/
│   ├── config/
│   ├── data/projects/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── docs/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Intended growth after V0.1

Later milestones may add:

```text
src/pages/
├── projects/
│   ├── index.astro
│   └── [slug].astro
├── web-apps/index.astro
├── tools/index.astro
├── worlds/index.astro
├── biggitykot/index.astro
├── manifesto.astro
└── about.astro
```

Project content remains data-driven through the `projects` content collection. Full project pages should consume the same records already used by homepage cards rather than duplicate metadata.

## External project boundary

The portfolio repository should not absorb the source trees or release binaries of Arena Rubra, Arena Rubra Card Composer, Unum Sunt Sprite Studio, Rubra Composer, Rubra Image Forge or future standalone projects.

The hub links outward to project repositories, GitHub Releases and independent Pages deployments when those URLs are explicitly approved.
