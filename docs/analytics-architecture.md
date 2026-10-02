# Staffroom Review — Analytics Architecture & Measurement Framework

## Purpose

The analytics system is a private editorial intelligence layer for the editor. It will show which stories, formats, sections and audience pathways receive attention, where readers engage or drop away, and what evidence suggests as editorial/distribution opportunities.

## Step sequence

1. Measurement contract — metrics, dimensions, taxonomy and recommendation rules.
2. Collection foundation — analytics collection and event taxonomy; verify production data.
3. Private access — protect /analytics and restrict it to the editor's authorised account.
4. Dashboard shell — build the Staffroom analytics interface without an application database.
5. Editorial intelligence — calculate performance, trends and rule-based recommendations.
6. Verification and approval — test access, accuracy, responsiveness and production behaviour.

Only one analytics step is actively under construction at a time.

## Initial data strategy

Working provider architecture:
- Google Analytics 4 for site behaviour and content performance.
- Google Search Console for search visibility signals where available.
- Vercel Web Analytics as an optional infrastructure-level reference, not the sole editorial analytics source.
- A future server-side adapter can normalize multiple providers when traffic and reporting needs justify it.

Provider credentials must never be exposed in browser code. Private API calls remain server-side when automated retrieval is introduced.

Google Analytics Data API quotas are available for Standard properties; limits should be rechecked before future implementation changes: https://developers.google.com/analytics/devguides/reporting/data/v1/quotas

## Core measurement contract

### Audience and reach

Track users, new users, returning users, sessions, engaged sessions, engagement rate, average engagement time, traffic source/medium, landing page, device category and broad geography where useful and privacy-appropriate.

Do not expose individual visitor identities in the dashboard.

### Content performance

Where technically possible, attribute performance to the canonical story record in data/story-registry.js. Track page views, views by story/section/format/series, landing-page entries, meaningful exits, engagement rate, average engagement time, returning-reader activity, internal-link movement and scroll engagement where reliably measurable.

Analytics must reference the story registry rather than creating a competing story database.

### Content taxonomy

Primary sections: Stories, Teachers, Classrooms, Schools, Ideas, World, Voices.

Specialist products: Newsletter, Blog, Podcasts, Events, Learning, Visual Essays.

Formats: feature, first person, essay, profile, interview, practical/ideas, long read, visual essay, podcast/audio and event/programme.

The taxonomy must remain aligned with the editorial content strategy and story registry.

### Discovery and search

Where available, track search impressions, clicks, CTR, average position, aggregate queries/topics and pages receiving search visibility. Search data is discovery evidence, not a substitute for editorial judgement.

### Engagement pathways

Track meaningful actions: newsletter signup and CTA interaction, related-story clicks, useful outbound links, podcast play/start where available, event CTA interaction when transactional, and selected content-specific interactions introduced later.

## Editorial intelligence

The dashboard should answer:
1. What is receiving attention?
2. What is holding attention?
3. What is being discovered but not clicked?
4. What is engaging readers but under-discovered?
5. What deserves a follow-up?

Performance should be compared across reach and engagement rather than reduced to a single score.

## Initial recommendation rules

- High impressions + comparatively low CTR → review search title/meta presentation.
- High reach + comparatively low engagement → review opening, structure, image relevance and internal pathways.
- Low reach + strong engagement → consider stronger internal linking, newsletter placement or related-story packaging.
- Strong repeat performance within a section/format → consider a follow-up or series extension.
- Strong newsletter CTA interaction + weak completion → review placement, copy and signup friction.
- Strong podcast-page interest + weak play interaction → review player placement and episode proposition.
- Strong event interest + weak CTA progression → review programme information and next-step clarity.

Thresholds must be calibrated against Staffroom's own traffic. Early data should be described as directional when samples are small.

## Dashboard truth rules

Never invent performance numbers. Every displayed insight is one of:
- Measured — directly supported by collected analytics data.
- Derived — calculated from measured data.
- Unavailable — not provided by the current source.
- Insufficient data — available but too small for useful interpretation.
- Recommendation — a rule-based suggestion derived from measured or derived signals.

Recommendations must never be presented as measured facts.

## Privacy and access

The dashboard is private and should use managed authentication rather than storing passwords in the Staffroom application. Resend can provide email delivery for a passwordless/magic-link flow, but it is an email delivery service rather than the complete authentication layer.

Use an allowlist containing only the editor's authorised account. Authentication secrets, provider keys and allowlisted credentials must never be committed to GitHub.

Application code cannot guarantee absolute access exclusivity; account security also depends on the editor's email/authentication account and provider configuration.

Current Resend free-tier reference: 3,000 transactional emails/month, 100 emails/day and up to three verified domains. Recheck before implementation: https://resend.com/pricing

## Free-tier constraint

Use free resources/free tiers only for the initial implementation. Do not introduce a paid database, paid analytics platform, paid authentication tier or paid AI recommendation service merely to complete the first dashboard. Rule-based recommendations are preferred initially.

## Future data architecture

Analytics providers → server-side adapter → normalized metrics → dashboard

The normalized layer should be provider-agnostic so Google Analytics, Search Console, Vercel Analytics or a later provider can be replaced or supplemented without rewriting the dashboard presentation.

Introduce a database later only when independent historical retention, multi-source normalization, automated trend analysis, query efficiency or scheduled historical comparisons justify it.

## Approval checkpoint — Measurement Framework

Status: approved for the next implementation step only.

The measurement model, taxonomy, recommendation logic, privacy boundary and provider strategy are defined.

Next implementation step: add the production analytics collection foundation and event/content taxonomy, then verify real production data before building authentication or dashboard UI.


## Collection foundation checkpoint

The first production collection layer is implemented.

Implemented:
- `components/Analytics.jsx` — client-side GA4 page and interaction tracker.
- `app/layout.js` — conditional GA4 loading using `NEXT_PUBLIC_GA_MEASUREMENT_ID` and deferred Next.js Script loading.
- `components/Story.jsx` and `components/Feature.jsx` — reusable editorial interaction metadata for content-selection events.
- `.env.example` — documented public GA4 measurement ID configuration.

Tracked foundation signals include page views, route/content grouping, search terms from site-search URLs, newsletter subscription success, editorial card/feature selection and scroll-depth milestones. GA4 enhanced measurement remains responsible for its supported automatic signals such as standard page views, outbound clicks and 90% scroll measurement when enabled in the property. citeturn2search0turn2search4

The tracker does not send subscriber email addresses, passwords or other personal form values.

Canonical Story IDs remain an optional field in the shared Story/Feature primitives. Existing callers fall back to the visible content title until the later dashboard/content-registry wiring step, avoiding a broad rewrite of the existing page data in this collection checkpoint.

**Configuration required before meaningful production data appears:** add the GA4 `NEXT_PUBLIC_GA_MEASUREMENT_ID` to the Vercel Production environment. No GA API secret is required for this client-side collection layer.

**Approval gate:** code implementation is complete. Production deployment/build verification and live GA4 receipt must be checked before moving to private authentication.
