# Design and System Research Notes

Last verified: April 4, 2026

## Red Dot criteria used for this pass

- Relevant Red Dot categories: Websites, Interface & User Experience Design, and Digital Solutions.
- The Red Dot Award: Brands & Communication Design categories page lists Websites, Interface & User Experience Design, and Digital Solutions as specific competition categories for digital work.
- The Red Dot jury description for Brands & Communication Design emphasizes three evaluation areas:
  - idea: originality and creativity
  - form: design quality and innovation
  - impact: clarity and emotional effect
- Red Dot's Digital Solutions framing highlights optimisation of use as a key criterion for digital applications and processes.

Sources:

- https://www.red-dot.org/bcd/categories
- https://www.red-dot.org/digital-solutions-1
- https://www.red-dot.org/bcd/distinctions

## What that means for this site

- The page should behave like a coherent digital product, not like a stack of marketing modules.
- The first screen should communicate value and trust immediately.
- Social proof should feel editorial and credible, not decorative.
- Performance, accessibility, and metadata quality are part of the design outcome, not separate chores.

## Database and system decision

### Current release decision

Keep the public site static:

- Vite + React front end
- structured local JSON/content modules
- GitHub Pages deployment

Reason:

- lowest operational complexity
- fastest public delivery path
- no runtime infrastructure required
- easiest way to preserve speed and reliability for a brochure-plus-directory experience

### Recommended future database if editing moves outside Git

Choose Supabase first.

Why:

- full Postgres database
- spreadsheet-like table view for non-specialist editing
- built-in storage for media
- auto-generated APIs
- managed backups

Official references:

- https://supabase.com/docs/guides/database
- https://supabase.com/docs/guides/getting-started/features

### When not to choose Supabase first

If the site later moves to a Worker or edge runtime and needs a very small SQL footprint with globally distributed reads, then Turso or Cloudflare D1 become better candidates than Supabase.

Official references:

- https://docs.turso.tech/
- https://developers.cloudflare.com/changelog/product/d1/

## Official program data verified for this release

Verified against depa's official SCL #6 article on April 4, 2026:

- applications open through April 6, 2026
- seven training days: May 11, 12, 18, 19, 20, 25, and 26, 2026
- fee: THB 62,000
- venue: Digital Economy Promotion Agency (Building A), 234/431 Soi Ladprao 10, Chatuchak, Bangkok 10900

Source:

- https://www.depa.or.th/en/article-view/smart-city-leadership-program-6-scl-6
