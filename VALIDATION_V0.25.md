# GVibeDev.cc V0.25 — Validation Checklist

## Mandatory build gate
- [ ] `npm run build` succeeds.
- [ ] Inspect generated `dist/`.
- [ ] `/projects/unum-sunt-sprite-studio/` builds.
- [ ] `/it/projects/unum-sunt-sprite-studio/` builds.
- [ ] Sitemap remains 40 URLs.

## Placement / presentation
- [ ] Screenshot carousel appears immediately after the 14-workspace overview.
- [ ] Long capability sections now follow the carousel.
- [ ] Screenshot layer reads as translucent, not as an opaque card wall.
- [ ] Existing screenshot captions are unchanged.
- [ ] Screenshots are not cropped.

## Desktop
- [ ] Mouse wheel/trackpad horizontal interaction does not create page overflow.
- [ ] Previous / next arrows move exactly one slide.
- [ ] Previous is disabled on slide 1.
- [ ] Next is disabled on the final slide.
- [ ] Counter tracks the visible slide.
- [ ] Clicking a thumbnail selects the corresponding screenshot.
- [ ] Selected thumbnail receives the active state.
- [ ] Thumbnail strip remains in one horizontal row and scrolls when necessary.
- [ ] Clicking the large screenshot opens the full-resolution dialog.

## Keyboard / accessibility
- [ ] Carousel viewport can receive keyboard focus.
- [ ] Left / Right keys move between slides.
- [ ] All thumbnail controls are keyboard reachable.
- [ ] Full-image dialog opens and closes correctly.
- [ ] Reduced-motion mode does not force smooth animation.

## Mobile / touch
- [ ] Swipe moves between screenshots.
- [ ] Scroll snap settles on a complete screenshot.
- [ ] Thumbnail strip scrolls independently.
- [ ] No horizontal overflow escapes into the page body.
- [ ] Captions remain readable below the screenshot.
- [ ] 44px arrow controls remain usable.
- [ ] Portrait viewport does not crop the application UI.

## Regression
- [ ] V0.24 branding is unchanged.
- [ ] Repository / Releases buttons still work.
- [ ] Product Hub is unchanged.
- [ ] Requirements/runtime section is unchanged.
- [ ] EN / IT switch remains correct.
- [ ] Other project galleries still use their existing layout.
- [ ] PayPal, itch.io, Steam, Kickstarter, Patreon and analytics remain frozen/inactive.
