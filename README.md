# Dr. Giju Paul — Personal Brand Website
## Phase 4 Homepage Prototype

This project implements the approved homepage prototype using:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Structured TypeScript data
- Zod installed for the validation layer
- Lucide Icons
- Schema.org JSON-LD foundation
- Vercel-ready project structure

## Phase 4 Scope

Built:

- Global layout
- Design-system typography and colors
- Responsive header and mobile menu
- Homepage hero
- Expertise grid
- Research → Knowledge → Innovation → Impact framework
- Featured research and innovation projects
- Research & academic work
- Evidence strip
- Higher education leadership
- Training
- Publications/writing placeholder architecture
- Speaking and engagement
- Insights
- Collaboration CTA
- Footer
- Person + WebSite structured data
- Basic robots.txt and sitemap generation

Not built yet:

- About page
- Research detail pages
- Project detail pages
- Publication archive/detail pages
- Training detail pages
- Speaking archive
- Insight/MDX archive
- Contact form
- CMS/admin interface

These are intentionally deferred until homepage approval.

## Important Content Note

No unverified numeric claims were invented. The evidence strip uses qualitative professional areas until verified metrics are supplied.

The hero uses a generic SVG placeholder. Replace it with a professional portrait of Dr. Giju Paul after approval.

## Run Locally

1. Install Node.js 20+.
2. Copy `.env.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SITE_URL`.
4. Install dependencies:

```bash
npm install
```

5. Run:

```bash
npm run dev
```

6. Open:

```text
http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Current Navigation

Phase 4 navigation uses homepage anchor links so the prototype has no intentional 404 routes. After homepage approval, these links will be replaced with the approved page routes during Phase 5.

## Replace the Portrait

Replace:

```text
public/images/profile/portrait-placeholder.svg
```

and update the path/alt text in:

```text
components/hero/HomeHero.tsx
```

## Deployment

The project is ready for the next workflow:

```text
Local development
→ Git
→ GitHub
→ Vercel preview
→ approval
→ production
```

Do not build secondary pages until the homepage is reviewed and approved.
