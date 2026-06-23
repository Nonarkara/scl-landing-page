# SCL — Capstone projects + Alumni "what they work on" analytics (2026-06-03)

## Context
Dr Non asked (3 things):
1. Add CMU Smart City operation center as a showcased project.
2. Add Korat (Nakhon Ratchasima) smart-city proposal → depa Smart City logo — make the point that SCL teaches proposal-writing that earns the depa mark.
3. Alumni page: analytics on "what kinds of things our alums are working on" — show the mobility/breadth across smart cities, ICT, government and beyond. A destination worth revisiting.

## Findings (validated)
- alumni.json = 6 cohorts, 306 records. Real classifier reads `original_line` (full title+employer) → 95% classifiable.
- Existing analytics (SmartInsights + CohortInsights) already accurate (sector/role/province/cohort). NOT broken.
- Genuine gap = a DOMAIN view ("what they work on"). Validated 8-domain classifier (sums to 306):
  Local Gov 113 · Private 113 · Provincial/National Govt 22 · ICT/Telecom/Digital 16 · Academia 10 · Energy/Env 9 · Urban/Transport 8 · Other 15.
- Capstone URLs verified 200: CMU badge article (cmu.ac.th), Korat (posttoday 722100).
- LIMITATION: cannot verify Korat was "THE first" city to get the logo (Phuket = documented first pilot). Build conservatively ("an early depa-designated Smart City"); FLAG to Dr Non.

## Tasks
- [ ] utils/alumni.js — add `classifyDomain()` + `domain` on each entry + `domainCounts` in computeDemographics
- [ ] SmartInsights.jsx — add "What the network works on" domain panel + methodology/limitation note + mobility lead line
- [ ] locales en/th/cn — domain labels, panel title, methodology note, mobility lead
- [ ] CapstoneCases.jsx — add CMU + Korat cards (optional `tag` instead of SCL #batch) + proposal→logo intro line
- [ ] CapstoneCases.css — desktop grid 3-col (6 cards => 3+3)
- [ ] lint + build clean
- [ ] verify live-computed domain numbers render (localGov 113 etc.)
- [ ] verify mobile + 3 languages
- [ ] commit, deploy, verify live
- [ ] REPORT: flag Korat "first" claim for Dr Non's confirmation

## Review
(filled on completion)
