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

## 2026-06-03 · JSON-escaped quotes break raw find/replace
- **What went wrong:** A Python string-replace on a locale value containing a straight `"`
  (e.g. index.title `"อัจฉริยะ"`) matched 0 times — because in the raw .json file a straight
  quote inside a value is stored ESCAPED as `\"`, while curly “ ” / corner 「 」 are stored literally.
- **Correct behaviour:** When raw-replacing JSON values, match the escaped form (`\"`) for
  ASCII double-quotes; curly/full-width quotes need no escaping. Always re-validate with
  json.load and confirm the rendered value after.

## 2026-06-03 · Translation audits miss inline strings — do a final grep sweep across ALL files
- **What went wrong:** Native CN/TH audit subagents (locales + Faculty) were thorough but
  missed leaked-English "cohort" tokens in several locale keys AND a 省长 in alumniSpotlight.js
  (an inline data-file string outside their scan focus).
- **Correct behaviour:** After applying audit fixes, grep EVERY source file (locales + all
  data/*.js + components) for the offending patterns (leaked English tokens, inconsistent
  terms like 省/省份/省长). Don't trust the audit's coverage to be exhaustive.

## 2026-06-03 · Vite dev server caches JSON/data modules — restart to verify, build is fresh
- **What went wrong:** Repeatedly saw stale locale/photo values in the preview after editing
  (journey.title, swapped photos) even after location.reload().
- **Correct behaviour:** For locale/data edits, `rm -rf node_modules/.vite` + restart the
  preview to verify visually. The production `vite build` always reads fresh files, so a
  clean build + grep-of-disk is the source of truth; don't trust a stale dev render.

## 2026-06-03 · The photo swap recurred — read public/ files, not filenames (again)
- **What went wrong:** public/scl6/S__1335317.jpg is actually the ASTRA photo and
  S__1392656_0.jpg is the graduation photo — the reverse of the labels. The "graduated"
  news lead showed Astra for multiple sessions.
- **Correct behaviour:** Before shipping any photo→caption pairing, Read the exact file in
  public/ and confirm the rendered <img src> in-browser. Filenames lie; pixels don't.
