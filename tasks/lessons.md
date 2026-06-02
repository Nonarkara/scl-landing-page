# Lessons Log — SCL project

## 2026-06-02 · Orphaned "news" component shipped as if done
- **What went wrong:** A prior agent created `SmartCityNews.jsx` + `smartCityNews.js`
  for an SCL#6 news update, but: never imported the component anywhere, imported a
  `SmartCityNews.css` that didn't exist, referenced `news.*` i18n keys that existed in
  no locale, wrote off-topic content (generic depa news instead of the SCL#6 conclusion),
  and left event photos in `scl6/` at repo root (Vite only serves from `public/`).
  Net effect: the requested feature rendered nothing, yet looked "done" in the file tree.
- **Correct behaviour:** A feature is not done until it renders in the running app.
  Wire it in, create every file it imports, add every i18n key it reads (EN/TH/CN),
  put assets under `public/`, and verify in-browser before claiming completion (§13.4).
- **How to recognise:** New component file exists but `grep` finds no import of it;
  a CSS/asset import points at a non-existent path; `t('x.y')` keys absent from locales;
  images outside `public/`. Any one of these = the feature is dead on arrival.

## 2026-06-02 · Verify photo identity by reading the file, not by memory of read-order
- **What went wrong:** Mapped Read-tool image results to filenames by call order and
  got two swapped — assigned the Astra group shot as the graduation lead and vice versa.
- **Correct behaviour:** When a specific photo MUST match a specific caption/slot
  (§11 photo rule), re-Read that exact file path right before/after wiring it, and
  confirm in-browser via the rendered `src`. Don't trust positional memory of a batch.
- **How to recognise:** A rendered photo doesn't match its caption/alt; you're relying
  on "the 4th image I read was…" instead of the file path you're about to reference.

## 2026-06-02 · preview "desktop" preset = 0×0 viewport → blank screenshots, no scroll
- **What went wrong:** Burned many calls chasing "blank screenshots" of below-the-fold
  content. Root cause: `preview_resize` with the **desktop preset** set the viewport to
  0×0 (innerHeight/innerWidth = 0), so nothing painted and `scrollTo`/`scrollIntoView`
  did nothing.
- **Correct behaviour:** Use the **mobile preset** (375×812, real dims) or explicit
  custom width AND height for verification screenshots. Confirm `window.innerHeight > 0`
  before trusting a screenshot. Fresh-load top screenshots work regardless; below-fold
  needs a real viewport + instant scroll (override `scroll-behavior:smooth` first).
- **How to recognise:** Screenshot is uniformly blank/background-colored AND `scrollY`
  won't move; check `window.innerHeight` — if 0, the viewport preset broke it.

## 2026-06-02 · Don't trust a "messed up everything" report at face value — verify first
- **What went wrong:** Risk of hunting phantom regressions on Alumni/Voices/Faculty.
- **Correct behaviour:** Per §11 recovery protocol, read the actual committed source and
  RUN the app before "restoring." Here the pages were intact; the real gap was the
  never-delivered news section + stale post-conclusion copy. Fix the real thing.
- **How to recognise:** `git status` clean, pages render with no console errors, source
  is feature-rich → the "breakage" is elsewhere (missing deliverable, stale copy).
