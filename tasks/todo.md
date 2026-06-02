# SCL #6 — News update + restoration (2026-06-02)

## Context
Previous agent left the SCL#6 "news update" broken: orphaned `SmartCityNews.jsx`
(never imported), missing its CSS, no `news.*` i18n keys, off-topic content (generic
depa news, not the SCL#6 conclusion), and dumped event photos at repo root (`scl6/`)
where Vite can't serve them. Alumni / Voices / Faculty pages are actually INTACT in the
committed code — verified rendering with no console errors. Hero/journey copy is stale
("SCL #6 is currently underway" — but it concluded 26 May 2026).

## Plan
- [x] Stage SCL#6 photos into `public/scl6/` (all 22 copied; 6 curated into UI)
- [x] Rewrite `src/data/smartCityNews.js` → trilingual SCL#6 dispatch (lead + 4 site visits)
- [x] Rewrite `src/components/SmartCityNews.jsx` → editorial, on-brand, mobile-first
- [x] Create `src/components/SmartCityNews.css` (cream/navy/yellow, hairline, no shadow/round)
- [x] Wire `<SmartCityNews />` into Home (after hero, before tabs)
- [x] Fix stale copy: `journey.subtitle` + `hero.subtitle` fallback → concluded (EN/TH/CN)
- [x] Build clean + lint clean (also fixed 2 pre-existing unused-var lint errors + ignore .claude)
- [x] Verify render: news section, Alumni (search/modal), Voices (7 testimonials), Faculty (expand/links)
- [x] Verify mobile (375px) + desktop — §11.8 phone-perfect, no horizontal overflow, §11.10 contrast
- [x] §11 photo fix: hero uses distinct cohort photo (S__1335315); news lead = graduation (S__1392656)

## Review
- News section "SCL #6 has graduated" lives on Home after the hero: editorial lead
  (graduation photo + closing summary + depa link) and a 4-up site-visit grid
  (EGAT / BMA Command Center / KMITL KIDC / Astra). Fully trilingual EN/TH/CN.
- Hero (co-edited) now features a distinct cohort photo + a "latest update" teaser
  that scrolls to #news; alumni count corrected to 306.
- The 3 flagged pages (Alumni / Voices / Faculty) were NOT damaged — verified intact
  and fully interactive. The prior agent's only real failures were the orphaned/broken
  news component, misplaced photos, and stale post-conclusion copy. All resolved.
- Build ✓ / lint 0 errors ✓ / 0 broken images ✓ / 0 console errors ✓.
- Note: prior agent's photos still sit at repo-root `scl6/` (now duplicated in
  `public/scl6/`). Root copy is unused by the app and can be deleted to keep git clean.
