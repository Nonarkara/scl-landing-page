# depa Smart City Leadership — scl.nonarkara.org

**Six cohorts. 400+ alumni. 77 provinces. One website, built in a day.**

---

## What this is

[scl.nonarkara.org](https://scl.nonarkara.org) is the multilingual information site for the **Smart City Leadership (SCL)** programme — Thailand's flagship executive programme for city and provincial leaders, organised by the Digital Economy Promotion Agency (depa) under the Ministry of Digital Economy and Society.

SCL has run six cohorts since 2022. Governors, mayors, CEOs, and provincial administrators come for seven days to learn how smart city projects actually get delivered — not in theory, but in practice. The programme has produced 400+ alumni across all 77 Thai provinces.

This site is not the official depa communications channel. It was built as an independent informational landing page to give the programme a cleaner, more honest public presence — something that reads as a working brief for senior leaders, not a promotional brochure.

---

## How it was built

The site was designed and built by **Dr. Non Arkaraprasertkul** (SCL co-designer, Harvard PhD, Batches 1–6) using **[Claude Code](https://claude.ai/code)** — Anthropic's AI coding assistant — across a single working session on 13 May 2026.

The process was direct: content direction and editorial judgment from Dr. Non; technical execution from Claude Code. No design agency. No developer handoff. No weeks of iteration. The first commit to deployment took under three hours.

What made this possible was not the AI alone — it was having a domain expert in the loop at every decision. The content is accurate because it comes from someone who has taught in the programme for five batches and co-designed its curriculum since 2022. The AI handled the code. The judgment about what mattered came from the person who actually knows.

For anyone building institutional websites for programmes they run or know deeply: the bottleneck is usually not technical. It is having the right content at the right level of specificity. If you have that, the tooling is fast.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Routing | React Router v6 |
| Internationalisation | i18next (EN / TH / CN) |
| Styling | Custom CSS, CSS variables — no Tailwind |
| Map | Leaflet + React-Leaflet |
| Deployment | GitHub Pages via GitHub Actions |
| Domain | `scl.nonarkara.org` (CNAME) |

---

## Pages

| Route | Content |
|---|---|
| `/` | Home — hero, programme overview, history timeline (Batches 1–6), curriculum, testimonials |
| `/methodology` | Six academic frameworks + four applied tools |
| `/faculty` | Eight faculty profiles with photos, tags, bios, and expandable research-verified background |
| `/alumni` | 400+ alumni directory with search, sector filter, province map, and cohort insights |
| `/curriculum` | Programme structure and learning outcomes |
| `/gallery` | Photo archive from all six cohorts |
| `/faq` | 30+ questions covering eligibility, curriculum, logistics, certification |

---

## Design principles

The aesthetic is deliberately non-promotional. Government leaders in Thailand are suspicious of glossy marketing — and rightly so. The site positions itself as an **operating brief**, not a sales page.

Specific choices:

- **No gradients, no rounded corners, no drop shadows.** The visual language is geometric and restrained. Hairline borders. Mono-accent (depa yellow). Hard edges.
- **Anti-promotional copy.** "A serious short-format programme for leaders who need sharper judgment about how smart-city work actually gets delivered." Not a tagline. A description.
- **Real data only.** 400+ alumni, 77 provinces, 6 cohorts, 42 hours, 7 days, 30+ speakers — all verifiable against depa's official announcements.
- **Mobile-first.** The site gets shared as a link in LINE and WhatsApp. The first impression is always a phone screen.
- **Trilingual (EN / TH / CN).** Complete coverage across all three languages. Not partial translation — every section, every label, every piece of content.

---

## Methodology page

The [Methodology page](/methodology) was written to address a gap: most executive programmes describe *what* they teach, not *why* the specific frameworks were chosen or what failure modes each one is designed to prevent.

Six frameworks are cited with full source references:

1. **Business Model Canvas (adapted for cities)** — Manetti et al., *Energies*, MDPI (2019)
2. **Design Thinking** — UNDP Asia-Pacific video series
3. **depa Smart City Primer** — official depa publication
4. **Urban Design Method (UddC)** — Chulalongkorn University
5. **ASEAN Smart Cities Framework** — ASEAN Smart Cities Network + Toolkit
6. **Agile Project Management** — APM Body of Knowledge

Four applied tools built from the programme methodology are featured: [SCITI](https://sciti.nonarkara.org), [SLIC](https://slic.nonarkara.org), [ASCN Portal](https://ascn.nonarkara.org), [Solomon Islands](https://solomon.nonarkara.org).

---

## Faculty

Eight faculty members with individual headshot photos, professional tags, brief bios, and expandable research-verified background panels. LinkedIn profiles linked for each.

The expanded bios draw on verified sources: World Smart City Expo awards, Harvard-Yenching scholarship records, GoodWalk Thailand data, UNICEF case studies, peer-reviewed publications (IJCM 2025), and GSMA speaker profiles.

---

## Alumni directory

400+ alumni from all six cohorts, sourced from depa's official Thai-language announcements. The directory includes full-text search, sector filter, province-level map, cohort growth chart with public/private split, and a smart insights panel. All names remain in Thai — as published in depa's official announcements.

---

## Running locally

```bash
npm install
npm run dev
```

---

## Data sources

- Alumni lists: depa official announcements (PDFs + web pages), Batches 1–6
- Programme details: [depa SCL #6 official article](https://www.depa.or.th/en/article-view/smart-city-leadership-program-6-scl-6)
- Faculty profiles: LinkedIn, institutional pages, published research, conference records
- Methodology citations: see the Methodology page for full source list with links

---

## Credits

**Programme:** depa Smart City Leadership (SCL)
**Site concept and editorial direction:** Dr. Non Arkaraprasertkul
**Code:** [Claude Code](https://claude.ai/code) by Anthropic
**Deployed:** GitHub Pages

This is an independent information page. Not officially affiliated with depa. All programme information references depa's published sources.

---

*Six years of inspiring leaders. Building smart cities. Together.*
