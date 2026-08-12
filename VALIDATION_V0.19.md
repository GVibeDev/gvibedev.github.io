# GVibeDev.cc V0.19 — Validation Checklist

## Mandatory build gate

- [ ] `npm run build` succeeds.
- [ ] Inspect `dist/index.html`, not only `npm run dev`.
- [ ] English navbar labels remain present in production HTML.
- [ ] `/support/` exists in `dist/`.
- [ ] `/it/support/` exists in `dist/`.
- [ ] EN ↔ IT switch on Support preserves the equivalent page.

## Desktop

- [ ] Home
- [ ] Projects
- [ ] at least one standard project page
- [ ] Arena Rubra Digital
- [ ] Unum Sunt Sprite Studio
- [ ] About
- [ ] Contact
- [ ] Support
- [ ] Menu / header
- [ ] Footer

## Mobile / Android

- [ ] no horizontal overflow
- [ ] navbar / menu intact
- [ ] EN / IT switch remains usable
- [ ] Support disabled CTA fits the viewport
- [ ] touch targets remain at least the existing validated size
- [ ] project CTA wrapping remains clean
- [ ] images and typography stay within page width

## Links

- [ ] GitHub
- [ ] email
- [ ] documentation / previews already present
- [ ] Arena Rubra live link uses `https://gvibedev.cc/ArenaRubra/`
- [ ] no real PayPal link exists while configuration is empty
- [ ] no inactive social/store/crowdfunding channel is rendered as a link
- [ ] B&W Survivors raw runtime contains `noindex, nofollow`

## Analytics

- [ ] no analytics network request is generated while `analytics.enabled === false`
- [ ] no cookie banner is added by V0.19
- [ ] activation remains a single central configuration change plus provider setup
