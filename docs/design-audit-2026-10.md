# SCL Design and Code Audit

Date: 2026-10-02. Scope: all eight routes, EN/TH/CN, desktop and phone, light and dark themes. Design contract: [context.md](../context.md).

## Findings Resolved

- First-load navigation scrolled past the homepage to its tabs. Only explicit tab links now trigger that scroll; route changes return to the top and focus main content.
- Homepage hierarchy obscured the programme identity and primary action. A real SCL cohort photograph now carries the literal programme name, concise proposition and visible programme action. Reading sections use white, navy text and selective yellow, with shared type sizes and structural rules.
- Alumni results appeared far below their search controls. Directory controls and results now precede the map, analytics and preserved network stories.
- FAQ questions were pointer-only divs; tabs lacked keyboard selection; overlays lacked reliable focus containment. FAQ buttons, roving tab navigation, a native dialog component and focus-managed mobile navigation now support keyboard users.
- Dark-theme contrast, undersized controls, inconsistent type, decorative rainbow cohort labels and spacious panels weakened scanning. Shared contrast-tested tokens, 44px controls, square geometry, compact grids and stable semantic chart channels replace those inconsistencies.
- A visually hidden cohort table could still force horizontal overflow at 200% text. Its clipping container now wraps the table instead of applying the clipping style to the table itself.
- The basemap returned HTTP-successful API-key placeholder images. It now uses the documented OpenStreetMap tile endpoint with attribution. Tile rendering is checked separately from layout tests; repeated automated layout checks do not fetch tiles.
- Province coverage was hard-coded as 50 rather than the roster-derived 53. Figures now derive from the confirmed data. National context figures are explicitly dated May 2026, and email-interest actions no longer imply a backend registration or an announced opening date.
- Dependency audit findings were resolved with compatible updates. CI uses a locked install and runs lint, asset verification, build and browser tests before publishing.
- Removed six unreachable source files: the obsolete banner/countdown components and their styles, plus an unused duplicate alumni spotlight view and its styles. The shared spotlight data remains used by the active cohort news strips. No live feature or content was removed.
- Independent Playwright review reproduced three edge cases: clipped update-dialog close controls at 390x360, lost focus after same-page mobile timeline links, and low-contrast lightbox focus outlines. Each was fixed and given a dedicated regression test.

## Preserved

- The roster data was not edited: 306 records across six cohorts, including all 50 confirmed SCL #6 participants.
- The roster Git blob matches confirmed-list commit `62358f3` exactly (`f4e8aa73c36c048195277201dff0ad93930eef29`). The original SCL6 workbook is no longer present at the supplied Downloads path, so a fresh workbook comparison was not possible during this design audit.
- All routes, programme content, research, faculty, testimonials, capstones, map, charts, search/filter tools, three languages and both themes remain available.
- Asset verification retains 43 distinct programme photos (11 narrative and 32 gallery) and three official logos. The README's existing artwork is documentation, not an unused site asset.
- Contact remains `scp@depa.or.th`, with `dsp@depa.or.th` copied on programme enquiries.

## Verification

- `npm run lint`, `npm run build`, `npm run verify:assets` and `git diff --check`: passed.
- `npm run test:ui`: 65 passed, one intentional desktop skip for the phone-only menu test.
- 101 axe checks: 96 route/language/theme/viewport checks plus five open-dialog/menu checks; no WCAG 2 A/AA or 2.1 AA violations detected in these states.
- Interaction coverage: first-visit scroll, route focus/scroll, arrow-key tabs, FAQ keyboard/search, gallery focus/arrow navigation/Escape/restore, confirmed SCL6 filters, update-dialog focus, mobile navigation/language, and 320px reflow with 200% text.
- `npm audit` and `npm audit --omit=dev`: zero known vulnerabilities at audit time.
- Manual screenshot review at 1440px and 390px, plus actual basemap image loading. Release verification checks deployed bundle identity and repeats browser checks against the public origin.

## Limits

The workspace's requested `axiom-audit` package is unavailable from npm (404), so its strict command could not run. The design-token audit, browser tests and manual review provide concrete checks, not a claim of complete accessibility certification. A screen-reader walkthrough and testing with new participants remain worthwhile; roster affiliations are historical, and public tiles and email-client handoff remain external dependencies.
