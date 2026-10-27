# Staffroom Review — Active Documentation Map

## Current verified checkpoint — October 27, 2026

- **GitHub source:** `staffroom-review/staffroom-website`, branch `main`.
- **Vercel project:** `staffroom-website`; production domain: `www.staffroomreview.com`.
- **Latest verified production deployment:** `READY`, built from commit `c94a90d6364ad8f4fd3d17780283fc860f42b4dc` (“Close final Marks article length gate”), which updates the canonical article-body store.
- **Current editorial gate:** Homepage Section 3, “Recommended for teachers”, is committed and deployed, but still awaits the editor’s explicit live approval. A successful deployment is not editorial sign-off. Do not begin Section 4 until Section 3 is explicitly approved.
- **Specialist destinations checked live:** `/events` and `/podcasts` return successful responses. `/learning` and `/visual-essays` currently return 404 and remain unbuilt.
- **Next build step:** review and explicitly approve the live Section 3 release; only then close Homepage Section 4 as one complete, verified implementation unit. Section 5 remains reserved by the screenshot-led homepage specification.
- **Analytics:** live GA4 activation remains deferred and does not block public webpage work.

## Homepage specification

The active homepage specification is governed by this repository's screenshot-led process.

Visual evidence consists only of the supplied The Ken screenshots 1, 2, 3, 4, 6 and 7. Screenshot 5 is intentionally reserved for later insertion.

The target is a close visual translation of the reference architecture into Staffroom Review. Preserve dimensions, proportions, symmetries/asymmetries, story/image/text scales, alignment, density and responsive hierarchy. Change the brand, content, imagery, header/footer/navbar treatment and colour system as required for Staffroom Review.

Previous homepage implementations and previous design documents are not design authorities.

Protected Staffroom story content is kept in content-base.md and must not be deleted or shortened for layout convenience.

## Content and editorial authorities

- docs/editorial-content-strategy.md — authoritative story-format, headline/dek, length-band, authorship, SEO, linking, imagery, engagement and editorial-status rules.
- docs/newsletter-architecture.md — authoritative newsletter product and dedicated /newsletter page specification.
- docs/blog-architecture.md — authoritative blog product and dedicated /blog page specification.
- docs/navbar-architecture.md — authoritative main navigation/page-family roadmap.
- docs/homepage-architecture.md — authoritative homepage body sequence and layout families.
- docs/reference-analysis.md — authoritative reference geometry and responsive interpretation.
- docs/content-base.md — protected Staffroom story titles/deks and content that must be preserved.

## Story expansion stages

Story expansion is deliberately separated from the visual placeholder phase.

1. Content system stage — define format, headline/dek, length, SEO, authorship, linking and publication-status rules.
2. Page-build stage — before each navbar page receives visual approval, replace short placeholders with production-quality headlines, deks, format labels and realistic metadata.
3. Article-body stage — after the approved page family is structurally approved, complete every visible eligible story in the target page/section as one closure unit, following the format-specific editorial bands.
4. Publication QA stage — complete copy editing, fact/source checks where relevant, accessibility, image rights, metadata, canonical/indexing and internal-link checks.

This means realistic final headlines are introduced before page-level visual freeze, while full-length article bodies are expanded later without forcing premature copy production across the entire site.

## Specialist editorial products

Newsletter and Blog now have dedicated placeholder landing pages:

- /newsletter — The Staffroom Letter
- /blog — Staffroom Notes

They are intentionally built as real editorial propositions, not filler. Their placeholders are stored in data/editorial.js and are designed to be expanded later by the editorial team or during the article-body stage.

Held editorial-team features are also represented in the content system with status hold. Held work is not part of public navigation or indexing until scheduled/published.

## Build workflow

Plan → approval → implement → verify → live-site review → approval.

The homepage visual baseline is complete, but full story-body production remains section-by-section. Follow the Current verified checkpoint and `docs/implementation-plan.md`: the live approval of Section 3 is pending, and Section 4 must not begin until that approval is explicit.

## Story management and verification

The canonical story index is `data/story-registry.js`, with the human-readable inventory in `docs/story-mastercopy.md` and removed-story history in `docs/story-archive.md`.

Every new story—whether written by Staffroom Review/AI, supplied by a human contributor or produced collaboratively—must enter through the same Story Intake process. Before upload or publication, retrieve and compare related stories for duplicate concepts, substantial overlap, page/format mismatch and possible contradictions. The verification result is advisory; the editor has final authority and may explicitly override it, with the override recorded.

The detailed operating rules are in `docs/story-management-system.md`; the reusable overlap/retrieval utility is `lib/story-verification.js`.

## Newsletter system

The Staffroom Letter is now a first-class weekly product. The canonical story registry supplies eligible weekly stories; `data/newsletter-workflow.js` stores the current issue and approval state; Resend provides the subscriber/contact and Broadcast layer; Vercel Cron provides the weekly scheduler.

The complete operating rules are in `docs/newsletter-system.md`, with product/content definition in `docs/newsletter-architecture.md`.

## Events specialist destination

The Events phase is implemented at `/events`, and Podcasts is implemented at `/podcasts`. Both routes were checked on the live site on October 27, 2026. Events is a specialist programme surface, not an additional editorial story family; Podcasts is a More-menu destination. Their page specifications and content models remain governed by their dedicated docs/data files.


## Analytics system

`docs/analytics-architecture.md` is the authoritative analytics measurement framework. The private access and dashboard-shell stages are implemented; live GA4 activation remains deferred until the editor is ready for provider setup. Analytics is a parallel product track and must not block public page or story completion. The dashboard must use real measured data only; recommendations must be distinguished from measured facts. The initial provider strategy is GA4 + Search Console, with Vercel Web Analytics as an optional reference and a future server-side normalization layer.
