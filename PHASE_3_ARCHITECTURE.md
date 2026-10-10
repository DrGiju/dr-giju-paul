# PHASE_3_ARCHITECTURE.md

# Dr. Giju Paul Personal Brand Website
## Phase 3 — Project Architecture & Structured Content Model

---

## 1. Phase 3 Objective

This phase translates the approved strategy and `DESIGN_SYSTEM.md` into a scalable technical and content architecture.

No visual page implementation is started yet.

The goals are to:

1. Define the final application folder structure.
2. Define routing conventions.
3. Define reusable component architecture.
4. Define structured content models.
5. Define the homepage component map.
6. Define naming and data conventions.
7. Define SEO/GEO metadata architecture.
8. Define future content update workflows.
9. Prevent duplication and one-off page coding.
10. Prepare the project for GitHub and Vercel deployment.

---

# 2. Recommended Technical Foundation

Approved stack:

- Next.js
- React
- TypeScript
- Tailwind CSS
- MDX
- Structured TypeScript / JSON content
- Zod validation
- Lucide Icons
- GitHub
- Vercel

Recommended Next.js architecture:

**App Router**

Reasons:

- Server Components by default
- Strong metadata support
- Clean layouts
- Route-level SEO
- Excellent Vercel support
- Good performance
- Scalable content architecture

---

# 3. Recommended Project Root

```text
dr-giju-paul/
│
├── app/
├── components/
├── content/
├── data/
├── lib/
├── public/
├── styles/
├── types/
├── config/
├── tests/
│
├── DESIGN_SYSTEM.md
├── PHASE_3_ARCHITECTURE.md
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.js
└── postcss.config.js
```

---

# 4. Application Routing Structure

```text
app/
│
├── layout.tsx
├── page.tsx
├── not-found.tsx
├── robots.ts
├── sitemap.ts
│
├── about/
│   └── page.tsx
│
├── research/
│   ├── page.tsx
│   ├── methodology/
│   │   └── page.tsx
│   ├── phd-supervision/
│   │   └── page.tsx
│   ├── micro-research/
│   │   └── page.tsx
│   ├── applied-research/
│   │   └── page.tsx
│   ├── instrument-design/
│   │   └── page.tsx
│   └── ai-enabled-research/
│       └── page.tsx
│
├── projects/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── publications/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── training/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── speaking/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── insights/
│   ├── page.tsx
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── collaborate/
│   └── page.tsx
│
└── contact/
    └── page.tsx
```

---

# 5. URL Conventions

Use lowercase, descriptive, hyphen-separated URLs.

Examples:

```text
/about
/research
/research/methodology
/research/phd-supervision
/research/micro-research
/projects/agribrain
/projects/research-to-product
/publications/example-publication
/training/research-methodology
/speaking/example-event
/insights/ai-enabled-research
/collaborate
/contact
```

Avoid:

```text
/page1
/post-17
/project-final
/research_page
/article?id=22
```

---

# 6. Component Architecture

```text
components/
│
├── layout/
│   ├── SiteHeader.tsx
│   ├── SiteFooter.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   └── PageShell.tsx
│
├── navigation/
│   ├── MainNav.tsx
│   ├── MobileNav.tsx
│   ├── Breadcrumbs.tsx
│   └── SkipLink.tsx
│
├── hero/
│   ├── HomeHero.tsx
│   ├── PageHero.tsx
│   └── SplitHero.tsx
│
├── ui/
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── Tag.tsx
│   ├── Divider.tsx
│   ├── IconLabel.tsx
│   └── SectionHeading.tsx
│
├── research/
│   ├── ResearchAreaCard.tsx
│   ├── ResearchProfileCard.tsx
│   ├── ResearchFramework.tsx
│   └── MicroResearchCard.tsx
│
├── projects/
│   ├── ProjectCard.tsx
│   ├── FeaturedProject.tsx
│   ├── ImpactPath.tsx
│   └── ProjectGrid.tsx
│
├── publications/
│   ├── PublicationCard.tsx
│   ├── PublicationList.tsx
│   ├── PublicationFilter.tsx
│   └── CitationBlock.tsx
│
├── training/
│   ├── TrainingCard.tsx
│   ├── TrainingGrid.tsx
│   └── TrainingCTA.tsx
│
├── speaking/
│   ├── SpeakingCard.tsx
│   ├── EventGallery.tsx
│   └── InviteToSpeakCTA.tsx
│
├── insights/
│   ├── InsightCard.tsx
│   ├── InsightGrid.tsx
│   ├── CategoryFilter.tsx
│   └── ArticleMeta.tsx
│
├── profile/
│   ├── BiographyIntro.tsx
│   ├── CareerTimeline.tsx
│   ├── MetricsStrip.tsx
│   └── ExpertiseGrid.tsx
│
├── forms/
│   ├── ContactForm.tsx
│   ├── CollaborationForm.tsx
│   └── NewsletterForm.tsx
│
└── seo/
    ├── JsonLd.tsx
    └── StructuredData.tsx
```

---

# 7. Component Design Principle

Components must be:

- Reusable
- Small enough to maintain
- Driven by props/data
- Accessible
- Responsive
- Consistent with `DESIGN_SYSTEM.md`

Avoid:

- One massive homepage component
- Repeating identical card markup
- Page-specific styling when reusable styling works
- Hard-coded content inside reusable components
- Mixing data fetching, presentation, and layout unnecessarily

---

# 8. Structured Content Architecture

Separate long-form content from structured records.

## 8.1 MDX Content

Use MDX for:

- Insights / blog posts
- Long-form articles
- Selected publication commentary
- Project narratives where detailed storytelling is needed

Structure:

```text
content/
│
├── insights/
│   ├── research/
│   ├── ai/
│   ├── higher-education/
│   ├── innovation/
│   ├── business/
│   ├── smart-agriculture/
│   └── research-productivity/
│
└── pages/
    └── selected-long-form-content/
```

---

# 9. Structured Data Files

```text
data/
│
├── profile.ts
├── expertise.ts
├── research.ts
├── projects.ts
├── publications.ts
├── training.ts
├── speaking.ts
├── achievements.ts
├── testimonials.ts
├── navigation.ts
└── social-links.ts
```

---

# 10. Profile Data Model

Recommended `profile.ts` structure:

```text
name
shortName
headline
shortHeadline
positioningStatement
supportingStatement
bioShort
bioLong
locationPublic
email
website
portrait
cvUrl
socialLinks
affiliations
expertise
```

Purpose:

- One source of truth for identity information
- Reusable across homepage, About page, metadata, footer, and Person schema

---

# 11. Research Area Data Model

Recommended fields:

```text
slug
title
shortTitle
summary
description
category
icon
featured
ctaLabel
ctaHref
seoTitle
seoDescription
```

Example areas:

- Research Methodology
- PhD Supervision
- Micro Research
- Applied Research
- Instrument Design
- AI-Enabled Research
- Quantitative & Qualitative Methods
- SEM & Advanced Methods

---

# 12. Research Portfolio Data Model

For scholar research and supervised work:

```text
slug
scholarName
title
researchArea
institution
supervisor
year
status
researchFocus
keyFindings
methodology
location
image
featured
publicationStatus
relatedLinks
seoTitle
seoDescription
```

This model can support:

- Completed research
- Ongoing research
- Micro research portfolio
- Scholar supervision showcase

---

# 13. Project Data Model

Recommended fields:

```text
slug
title
shortTitle
category
status
year
featured
summary
problem
researchQuestion
researchApproach
solution
impact
futureDirection
image
gallery
technologies
partners
location
relatedPublications
relatedInsights
ctaLabel
seoTitle
seoDescription
```

This supports the signature model:

**Problem → Research → Solution → Impact**

---

# 14. Publication Data Model

Recommended fields:

```text
slug
type
title
authors
year
publicationDate
journalOrPublisher
volume
issue
pages
doi
url
abstract
keywords
citation
featured
image
relatedResearchArea
seoTitle
seoDescription
```

Publication types:

- Journal Article
- Book
- Book Chapter
- Conference Paper
- Working Paper
- Research Commentary
- Professional Article

---

# 15. Training Data Model

Recommended fields:

```text
slug
title
shortTitle
category
audience
summary
description
learningOutcomes
deliveryMode
duration
featured
image
ctaLabel
ctaHref
seoTitle
seoDescription
```

Potential training categories:

- Research Methodology
- PhD Research Training
- Academic Writing
- Research Instrument Development
- Business Research
- AI for Researchers
- Product Management
- Innovation
- Higher Education Strategy

---

# 16. Speaking & Events Data Model

Recommended fields:

```text
slug
title
eventName
eventType
date
location
organizer
role
topic
summary
image
gallery
videoUrl
externalUrl
featured
seoTitle
seoDescription
```

Event types:

- Conference
- Keynote
- Lecture
- Workshop
- Faculty Development
- Panel
- Media Appearance
- Training Programme

---

# 17. Insight / Blog Frontmatter Model

Recommended MDX frontmatter:

```text
title
slug
excerpt
date
updated
author
category
tags
featured
coverImage
readingTime
seoTitle
seoDescription
canonicalUrl
```

Categories:

- Research
- AI
- Higher Education
- Product Management
- Innovation
- Business
- Smart Agriculture
- Research Productivity

---

# 18. Achievement Data Model

Recommended fields:

```text
id
title
year
organization
description
category
image
url
featured
```

Use for:

- Awards
- Appointments
- Recognition
- Certifications
- Major milestones

---

# 19. Navigation Data Model

Navigation should come from one data source.

Recommended structure:

```text
label
href
children
isExternal
highlight
```

This allows desktop and mobile navigation to stay synchronized.

---

# 20. Social Link Model

Recommended fields:

```text
platform
label
url
icon
```

Potential profiles:

- LinkedIn
- Google Scholar
- ORCID
- ResearchGate
- YouTube
- The Researcher
```

---

# 21. Validation Layer

Use **Zod** to validate structured data.

Validation protects against:

- Missing titles
- Broken slugs
- Invalid dates
- Missing images
- Incorrect URLs
- Inconsistent status values
- Duplicate content fields

Recommended schemas:

```text
ProfileSchema
ResearchSchema
MicroResearchSchema
ProjectSchema
PublicationSchema
TrainingSchema
SpeakingSchema
AchievementSchema
```

---

# 22. Status Taxonomy

Use controlled status values.

## Research

```text
ongoing
completed
published
under-review
```

## Projects

```text
concept
pilot
active
completed
scaling
```

## Publications

```text
published
forthcoming
under-review
working-paper
```

This prevents inconsistent labels.

---

# 23. Category Taxonomy

Use a controlled category system across the website.

Primary expertise categories:

```text
Research Methodology
Higher Education
AI-Enabled Research
Innovation
Digital Transformation
Business Research
Research-to-Product
Training
Smart Agriculture
Academic Leadership
```

Use these consistently in:

- Cards
- Filters
- Metadata
- Related content
- Schema descriptions

---

# 24. Homepage Component Map

The homepage should be assembled from reusable components in this order:

```text
HomePage
│
├── HomeHero
│
├── ExpertiseGrid
│
├── ResearchFramework
│
├── FeaturedProjects
│
├── ResearchAcademicWork
│
├── MetricsStrip
│
├── HigherEducationLeadership
│
├── TrainingGrid
│
├── FeaturedPublications
│
├── SpeakingHighlights
│
├── LatestInsights
│
├── CollaborationCTA
│
└── SiteFooter
```

---

# 25. Homepage Data Sources

```text
HomeHero
→ profile.ts

ExpertiseGrid
→ expertise.ts

ResearchFramework
→ static component + design tokens

FeaturedProjects
→ projects.ts filtered by featured=true

ResearchAcademicWork
→ research.ts

MetricsStrip
→ profile.ts / achievements.ts

HigherEducationLeadership
→ profile.ts + selected content

TrainingGrid
→ training.ts filtered by featured=true

FeaturedPublications
→ publications.ts filtered by featured=true

SpeakingHighlights
→ speaking.ts filtered by featured=true

LatestInsights
→ MDX content sorted by date

CollaborationCTA
→ static reusable component
```

---

# 26. Homepage Content Loading Principle

Essential homepage content should render on the server.

Avoid using client-side JavaScript for:

- Hero text
- Biography
- Research expertise
- Featured projects
- Publications
- Core links

Client-side JavaScript should be limited to:

- Mobile navigation
- Filters
- Interactive galleries
- Optional animations
- Forms

This supports SEO, GEO, accessibility, and performance.

---

# 27. Image Architecture

Recommended folder structure:

```text
public/images/
│
├── profile/
├── research/
├── projects/
├── publications/
├── training/
├── speaking/
├── insights/
└── shared/
```

Naming convention:

```text
dr-giju-paul-hero.webp
agribrain-smart-irrigation.webp
micro-research-tax-compliance.webp
research-methodology-training.webp
```

Avoid:

```text
IMG_0056.jpg
final-image-new2.png
photo-copy-final.jpg
```

---

# 28. Image Formats

Preferred:

- AVIF where supported
- WebP
- PNG only when transparency is necessary
- SVG for icons/logos

Use Next.js image optimization.

Every meaningful image must include descriptive alt text.

Decorative images should use empty alt text.

---

# 29. SEO Metadata Architecture

Create a reusable metadata helper in:

```text
lib/seo/
```

Recommended functions:

```text
generatePageMetadata()
generateArticleMetadata()
generateProjectMetadata()
generatePublicationMetadata()
```

Each page should provide:

- title
- description
- canonical
- OpenGraph
- Twitter/X metadata
- image
- robots directives if needed

---

# 30. Structured Data Architecture

```text
lib/schema/
│
├── person.ts
├── website.ts
├── profile-page.ts
├── article.ts
├── scholarly-article.ts
├── course.ts
├── event.ts
└── breadcrumbs.ts
```

Recommended implementation:

- Homepage → Person + WebSite
- About → ProfilePage + Person
- Insight → Article / BlogPosting
- Publication → ScholarlyArticle
- Training → Course
- Speaking → Event
- Deep pages → BreadcrumbList

---

# 31. GEO / AEO Content Blocks

Reusable question-answer blocks should be available for pages where useful.

Example component:

```text
AnswerBlock
```

Fields:

```text
question
shortAnswer
details
```

Potential questions:

- Who is Dr. Giju Paul?
- What are Dr. Giju Paul's research areas?
- What is Micro Research?
- What is Research-to-Product?
- How does AI support academic research?
- What training programmes does Dr. Giju Paul offer?

These blocks should be visible to humans, not hidden purely for search engines.

---

# 32. Internal Linking Architecture

Every major content item should link to related material.

Example:

```text
AgriBrain Project
→ Smart Agriculture Insight
→ AI-Enabled Research
→ Training: AI for Researchers
```

Example:

```text
Micro Research
→ Research Portfolio
→ Research Methodology
→ PhD Supervision
```

This improves:

- User exploration
- SEO
- AI entity understanding
- Time on site

---

# 33. Related Content System

Reusable component:

```text
RelatedContent
```

Supports:

- Related research
- Related projects
- Related publications
- Related insights
- Related training

Content should be linked using slugs or shared categories.

---

# 34. Future CMS Compatibility

Initial content system:

**MDX + structured data**

Future upgrade path:

```text
Sanity / Contentful / other headless CMS
```

Because presentation components are separated from data, a CMS can later replace the data source without redesigning the frontend.

---

# 35. Content Update Workflow

## Add a Publication

1. Add publication data entry.
2. Add image if required.
3. Validate.
4. Commit.
5. Push to GitHub.
6. Vercel deploys automatically.

## Add a Blog

1. Create MDX file.
2. Add frontmatter.
3. Add cover image.
4. Commit.
5. Push.
6. Publish.

## Add a Project

1. Add structured project record.
2. Add images.
3. Add optional long-form MDX narrative.
4. Commit.
5. Push.
6. Project appears automatically.

---

# 36. Future Admin Options

If updating files manually becomes inconvenient, the architecture can later support:

- Headless CMS
- Git-based CMS
- Custom admin dashboard

Do not build an admin panel at launch unless there is a clear need.

---

# 37. Accessibility Architecture

Required components:

- SkipLink
- Semantic navigation
- Visible focus indicators
- Accessible form fields
- Keyboard navigation
- Proper ARIA only where necessary
- Descriptive link labels
- Correct heading hierarchy

Avoid using generic:

```text
Click Here
Read More
Learn More
```

when context is unclear.

Prefer:

```text
View AgriBrain Project
Read Research Methodology Article
Explore PhD Supervision
```

---

# 38. Performance Architecture

Default:

- Server Components
- Static generation where appropriate
- Incremental rendering only if needed
- Optimized images
- Minimal third-party scripts
- Local or optimized fonts
- No unnecessary animation library
- Lazy-load below-the-fold media

---

# 39. Analytics Architecture

Do not add analytics until required.

When enabled, recommended approach:

- Privacy-aware analytics
- Minimal script weight
- Track meaningful events only

Potential events:

```text
contact_submit
collaboration_click
publication_open
project_view
training_enquiry
speaking_enquiry
cv_download
```

---

# 40. Contact Architecture

Contact page should support enquiry type selection:

- Research collaboration
- University / institutional collaboration
- Training
- Speaking invitation
- Consulting
- Research supervision / mentoring
- Media enquiry
- Other

This improves lead quality.

---

# 41. Forms Strategy

Use server-side form handling.

Avoid exposing sensitive credentials.

Recommended fields:

```text
name
email
organization
country
enquiryType
message
```

Optional:

```text
phone
website
```

Add:

- Validation
- Honeypot anti-spam
- Accessible errors
- Success confirmation

---

# 42. Repository Principles

Git branches:

```text
main
development
feature/*
fix/*
```

Recommended workflow:

```text
feature branch
→ local review
→ commit
→ push
→ Vercel preview
→ approve
→ merge to main
→ production
```

---

# 43. File Naming Conventions

Components:

```text
PascalCase.tsx
```

Examples:

```text
ProjectCard.tsx
HomeHero.tsx
SiteFooter.tsx
```

Utilities:

```text
camelCase.ts
```

Content:

```text
kebab-case.mdx
```

Images:

```text
kebab-case.webp
```

---

# 44. Import Alias

Recommended alias:

```text
@/
```

Examples:

```text
@/components
@/data
@/lib
@/types
```

This prevents fragile relative imports.

---

# 45. Environment Configuration

Keep environment variables in:

```text
.env.local
```

Never commit secrets.

Potential variables later:

```text
NEXT_PUBLIC_SITE_URL
CONTACT_FORM_ENDPOINT
EMAIL_PROVIDER_KEY
ANALYTICS_ID
```

---

# 46. Phase 4 Build Boundary

After approval of this architecture, Phase 4 should build only:

1. Base project configuration
2. Global layout
3. Typography
4. Core color tokens
5. Header
6. Footer
7. Homepage
8. Structured homepage data

Do not build all remaining pages yet.

---

# 47. Phase 4 Homepage Approval Checkpoint

Before building remaining pages, review:

- Hero
- Typography
- Navigation
- Color balance
- Section sequence
- Project presentation
- Image treatment
- CTA hierarchy
- Mobile responsiveness
- Overall brand feel

Only after homepage approval should remaining pages be implemented.

---

# 48. Change Impact Rule

Before any significant structural modification, identify:

- Files affected
- Components affected
- Routes affected
- Data affected
- SEO impact
- Reusability impact

Do not silently modify unrelated approved components.

---

# 49. Architecture Summary

This architecture creates four layers:

```text
CONTENT
↓
Structured Data / MDX

LOGIC
↓
Validation / Utilities / SEO

COMPONENTS
↓
Reusable UI and domain components

ROUTES
↓
Pages users and search engines visit
```

This separation is essential for long-term maintainability.

---

# 50. Phase 3 Recommendation

Proceed to Phase 4 with:

**Next.js App Router + TypeScript + Tailwind CSS + MDX + structured TypeScript data + Zod validation**

Build the homepage first using the approved `DESIGN_SYSTEM.md` and the component architecture defined here.

Do not develop secondary pages until the homepage has been reviewed and approved.
