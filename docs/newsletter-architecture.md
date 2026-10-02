# Staffroom Review — Newsletter Architecture

## Purpose

The newsletter is a first-class editorial product, not merely a signup box.

Primary future URL:

/newsletter

The page should explain the proposition, show the editorial personality, preview recent editions and make subscription the central action.

## Newsletter strategy

Staffroom Review should begin with one flagship newsletter before fragmenting the audience.

### Flagship product

The Staffroom Letter

A weekly editorial letter about the lived work of teaching: one strong idea, story, observation or question, followed by a small selection of related Staffroom Review reading.

Positioning:
- human
- reflective
- intelligent
- useful
- never corporate
- never a generic link dump

Later, the system can support specialist editions such as:
- In Practice
- The Long Read
- Voices
- Beyond the Staffroom

Do not launch multiple newsletters merely to imitate larger publishers. Segmentation should follow demonstrated reader demand.

Established publishers use segmentation when it serves a real audience need: Edutopia runs several role/topic newsletters; Tes differentiates daily, weekly, trust-sector and international products; Chalkbeat separates national, local and thematic newsletters; EdSurge currently offers a weekly PreK–12 product plus a monthly top-stories product. https://www.edutopia.org/newsletters https://www.tes.com/magazine/news/general/tes-newsletters https://www.chalkbeat.org/newsletters/ https://www.edsurge.com/newsletters

## Dedicated page structure

1. Page title and concise proposition
2. Primary subscription module
3. What arrives in the reader's inbox
4. Sample recent editions
5. Secondary editorial/editor's note
6. Archive entry point
7. Related Staffroom Review stories
8. Privacy/unsubscribe reassurance

## Newsletter edition template

Each edition should be able to contain:

- newsletter name
- edition number or date
- editorial subject line
- preview/dek
- opening note
- one lead story/idea
- 2–4 secondary links
- optional short recommendation
- closing/editorial sign-off
- primary site CTA

## Subject-line standard

Prefer:
- a concrete subject
- a compelling observation
- a tension/question
- a distinctive phrase

Avoid:
- clickbait
- fake urgency
- excessive punctuation
- vague "This week's update" language

## Newsletter editorial length

Default:
- 400–900 words total.
- The flagship lead idea may occupy most of that space.
- Curated links should be brief and useful.
- Longer editions may become standalone articles on the site.

## Newsletter SEO relationship

Newsletter editions that have an equivalent web page should use:
- descriptive title
- canonical URL
- date
- author
- related article links
- appropriate BlogPosting / Article structured data

Schema.org defines BlogPosting as an article type with properties including author, article body, article section, datePublished, dateModified, image, keywords and mainEntityOfPage. https://schema.org/BlogPosting

## Placeholder editions

The current dedicated page will include high-quality editorial propositions that can later become full editions. These are not filler copy; each should represent a viable newsletter idea with a clear reader promise.

## Future archive

The page architecture should support:
- edition archive by date
- search later
- topic filtering later
- related stories
- newsletter landing pages if specialist products are added

No archive technology is required in the first placeholder implementation.

## Performance and accessibility

- subscription form must have a real label
- keyboard focus must be visible
- page must remain usable without JavaScript
- email capture provider can be integrated later without redesigning the editorial page


## Story registry relationship

Newsletter editions use the same editorial content system. A newsletter can point to an existing story record without creating a duplicate underlying story.

When an edition is itself a standalone published editorial work, it receives its own Story ID. When it packages an existing story, it retains the relationship to the underlying Story ID.

New newsletter editions pass the same retrieval and overlap check before publication, especially when an edition develops an idea already used in a Staffroom story.

## Implemented weekly delivery system

The newsletter is now connected to the Staffroom story system through a guarded weekly workflow.

### Audience model

- Free subscribers receive approximately two-thirds of the newsletter content, curated directly from stories published that week.
- Paid subscribers receive the same free section plus approximately one-third premium content.
- The premium piece is itself a registry story with its own Story ID.
- Resend Contacts stores subscriber status; Resend segments separate Free and Paid recipients.

### Editorial and send safeguards

Every issue passes two approval stages before it can be sent:

1. Editorial approval after story retrieval, overlap checks and content-balance validation.
2. Final approval after both Free and Paid email versions are rendered and checked.

The editor then explicitly activates the send. The weekly Vercel Cron can send only an approved, armed issue.

### Free-first infrastructure

The initial system uses the existing Vercel project plus Resend's current free marketing capabilities. No additional application database is required at launch.

Current references:
- Resend marketing: https://resend.com/products/marketing-emails
- Resend pricing: https://resend.com/pricing/
- Vercel Cron: https://vercel.com/docs/cron-jobs/usage-and-pricing

The implementation and one-time account setup details are in `docs/newsletter-system.md`.
