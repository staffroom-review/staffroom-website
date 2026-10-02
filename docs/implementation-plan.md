# Implementation Plan

## Current checkpoint

The homepage build, footer treatment and current Lora/Archivo typography are approved as the current baseline. Sections 1–4, 6 and 7 have received screenshot-led visual fine-tuning. Section 2 retains the documented 8/4 feature-to-support architecture with a tighter support rail; Section 3 uses a denser three-column editorial composition with internal separators and a clearer image-led middle column; Section 4 uses the documented 3/6/3 central-feature composition with subtle side boundaries and a distinct feature placeholder; Section 6 uses a symmetric five-column collection with a strong vermillion section line, compact editorial titles, landscape imagery and thin story rules; Section 7 uses the documented 3/6/3 feature-chapter composition with a dominant centre feature, side story packages and mobile feature-first ordering. Section 5 remains reserved. The mobile pass is now implemented using the documented responsive rules: feature-first sequencing, single-column story flow, sequential collections, preserved image prominence, simplified section dividers and compact section headers.

The homepage is not yet fully closed: Section 5 remains reserved. Mobile and tablet refinement are complete. Tablet now uses the shared intermediate responsive system: reduced gutters, two-column side-group layouts around full-width features, a single-column feature/support section, two-column collection groups and matching feature-first Section 7 ordering. The next work is final imagery, production/accessibility QA and final side-by-side fidelity review. These homepage tasks remain sequenced below and must not be silently skipped.

The approved next product phase is the main navbar page build. That phase is governed by `docs/navbar-architecture.md` and proceeds one page at a time with approval gates.

## Homepage sequence

1. Final visual review of global typography.
2. Verify/fine-tune Section 1.
3. Verify/fine-tune Section 2.
4. Verify/fine-tune Section 3.
5. Verify/fine-tune Section 4.
6. Keep Section 5 reserved.
7. Verify/fine-tune Section 6.
8. Verify/fine-tune Section 7.
9. Reconstruct/refine mobile from mobile evidence.
10. Refine tablet using the shared responsive system.
11. Replace structural placeholders with final free/licensed imagery.
12. Production/accessibility QA.
13. Final side-by-side fidelity pass.

## Navbar sequence

1. Stories — Family 1: Editorial publication.
2. Teachers — Family 2: Topic-led editorial hub.
3. Classrooms — Family 2: Topic-led editorial hub, adapted to classroom content.
4. Schools — Family 2: Topic-led editorial hub, adapted to school-life content.
5. Ideas — Family 3: Ideas/perspective/long-form.
6. World — Family 3: Ideas/perspective/long-form, adapted to comparative/global material.
7. Voices — Family 3: Ideas/perspective/long-form, adapted to first-person/human stories.
8. More — collapsible navigation for Newsletters, Visual Essays, Learning, Podcast and Events.
9. Site-wide navigation verification.

Each navbar page requires implementation, responsive verification, visual review and explicit approval before the next page begins.

### Typography verification

The Lora review implementation has been verified against the live production output. The rendered document now uses Lora as the main homepage editorial typeface, with Archivo explicitly retained for the header/navigation and footer utility layer. The updated build also generated a new immutable CSS asset, eliminating the previous possibility of a browser retaining an older cached typography stylesheet.

## Final imagery checkpoint

The structural placeholder-art pass is now replaced with distinct free-use Unsplash imagery across every homepage image placement. Image sources are isolated in `data/imagery.js`, while the existing `Feature`, `Story` and `CollectionColumn` primitives remain responsible for rendering the images; this preserves the approved desktop/mobile/tablet architecture and avoids duplicated image markup.

All image placements retain the documented rectangular crop ratios and the existing responsive DOM/order. The reused placeholder key for the Subjects collection has been split into its own image source so no homepage placement repeats an image.

The selected sources are official Unsplash photo pages identified as free to use under the Unsplash License. Source URLs are retained in the imagery data for auditability. Because Unsplash notes that separate rights can apply to recognizable people, trademarks, logos and depicted works, this pass does not treat the platform license as a blanket clearance of every third-party right.

**Approval gate:** final imagery is implemented and deployed. Stop here for visual review; the next approved work is production/accessibility QA followed by the final side-by-side fidelity pass.

### Imagery source correction

The first production imagery deployment used Unsplash `/photos/<id>/download` endpoints. Those redirect/download endpoints did not render reliably in the deployed page, so the imagery layer has been corrected to use the corresponding `images.unsplash.com` CDN resources directly. Existing component structure, crop ratios, responsive order and story content remain unchanged; source-page URLs remain recorded for auditability.

## Production/accessibility QA checkpoint

The final imagery deployment has passed the production error scan with no runtime errors in the selected 24-hour window. The accessibility QA pass also corrected the homepage heading hierarchy by providing one page-level H1 and using H2 for reusable feature headings, tightened SectionHeader labelling so `aria-labelledby` targets the actual section heading, added a keyboard-accessible skip link to the main content, and marked only the above-the-fold hero image as eager/high priority while retaining lazy loading for secondary imagery.

No homepage copy, visual architecture, responsive breakpoints or component layout rules were changed by this QA pass. The build is ready for the final side-by-side fidelity review.

**Approval gate:** production/accessibility QA is complete. Stop here for visual approval of the final imagery + QA state; the next step is the final side-by-side fidelity pass.

## Final fidelity implementation checkpoint

A final code-level fidelity audit against the active screenshot-led geometry was completed after the accessibility heading change. The reusable feature component now has matching H2 selectors for the desktop, central-feature, feature-chapter and mobile typography rules; the opening feature also uses the approved vermillion token instead of the stale colour reference. These corrections restore the intended feature sizing/colour behaviour without changing the documented section geometry, content, imagery, component structure or responsive breakpoints.

The active reference evidence confirms the approved 1440px calibration, approximately 1320px content field, documented 3/6/3 and 8/4 compositions, dense three-column recommendation section, five-column collection and feature-chapter structure. No additional structural changes were justified by the available evidence.

**Approval gate:** final fidelity implementation is complete. The content-strategy phase below is now implemented before navbar-page construction. Stop here for live visual approval of the homepage baseline; the next implementation phase is content-aware navbar/page work governed by the editorial and navbar documents.

## Content strategy and product architecture checkpoint

A comprehensive benchmark survey of established education publishers has been added to docs/editorial-content-strategy.md. The survey covers story formats, headline/dek patterns, editorial length bands, author/date/read-time treatment, evidence and sourcing, internal linking, SEO, image/editorial presentation, engagement features, newsletters and contributor/first-person models.

The survey includes Edutopia, Education Week, Tes, Chalkbeat, EdSurge, The Hechinger Report and The Ken. It distinguishes benchmark evidence from Staffroom Review's own standards and does not treat SEO word count as a ranking formula. Google explicitly states that there is no preferred word count; Staffroom's word bands are editorial planning targets.

The implementation now includes:
- data/editorial.js with strong, expandable placeholder propositions for newsletters, blog posts and held editorial-team features.
- /newsletter as a dedicated newsletter landing page for The Staffroom Letter.
- /blog as a dedicated lightweight editorial/blog landing page for Staffroom Notes.
- routed story/feature link support in the shared Story and Feature primitives.
- visible footer navigation to Newsletter and Blog.
- responsive page styles that reuse the existing Staffroom visual system without altering homepage breakpoints.

### Content expansion sequence

1. **Content system now:** editorial formats, headline/dek rules, length bands, SEO/author/date model, internal linking, imagery, newsletter model, blog model and held-content workflow.
2. **During each navbar-page build:** before visual approval, use production-quality story headlines, deks, format labels and realistic metadata in that page's cards.
3. **After page-family approval:** expand the priority stories into full article bodies using the documented format-specific length bands and complete sourcing, author metadata, links and structured data.
4. **Before publication:** editorial, accessibility, metadata, image-rights and indexing QA.

This sequencing prevents short placeholder copy from becoming the de facto editorial style while also preventing premature full-article production before the relevant page architecture exists.

### Specialist-page checkpoint

The newsletter and blog landing pages are intentionally implemented now so their information architecture exists before the main navbar is expanded. Their placeholder copy remains editorially expandable and is not being presented as final published reporting.

**Approval gate:** content strategy, placeholder content architecture and specialist landing pages are implemented. Stop here for live visual review of the new /newsletter and /blog pages before continuing with the main navbar page sequence.

## Stories page — implementation checkpoint

The first navbar page, Stories, is now implemented using the Family 1 editorial-publication architecture defined in navbar-architecture.md.

The page contains:
1. A large opening feature.
2. A Latest Stories sequence using distinct image-led story packages.
3. An Editor's Selection area with a more spacious two-story treatment.
4. A denser More Stories stream.
5. A quiet archive/closing section.

The visible story propositions use the editorial content standards: stronger full-length headlines, informative deks, explicit format labels and representative reading-time metadata. Full article bodies remain deferred to the documented article-body stage after the page family is structurally approved.

The shared Feature primitive now supports optional story metadata, while the existing Story primitive supports routed links and metadata. The primary Stories navigation link and footer link now resolve to /stories; other navbar links remain on their existing placeholder destinations until their individual page phases.

**Approval gate:** Stories implementation is complete. Stop here for live visual review and approval of the Stories page before proceeding to Teachers.

Deployment note: the first consolidated Stories-head deployment exposed a mobile-navigation data-mapping mismatch. The Header component has now been corrected so both desktop and mobile navigation render the new route objects consistently; the subsequent Git-triggered production deployment is the verified build for this checkpoint.

## Teachers page — implementation checkpoint

The second navbar page, Teachers, is now implemented as the first Family 2 topic-led editorial hub.

Its composition is deliberately different from Stories while remaining within the same Staffroom visual system:
1. Large teacher-focused opening feature.
2. Teacher Voices rail with two lived-perspective stories.
3. Teaching in Practice three-column story grouping.
4. The Working Teacher series block with a denser two-column stream.
5. A quiet closing newsletter pathway.

Visible stories use the editorial content standards: production-quality headlines, informative deks, explicit format labels and representative reading-time metadata. Full article bodies remain deferred until the approved page-family reaches the Article Body Expansion stage.

The Teachers primary navbar and footer links now resolve to /teachers. Other unbuilt navbar destinations remain unchanged until their individual phases.

**Approval gate:** Teachers implementation is complete. Stop here for live visual review and approval of the Teachers page before proceeding to Classrooms.

## Classrooms page — implementation checkpoint

The third navbar page, Classrooms, is now implemented as the second Family 2 topic-led hub. Its hierarchy is intentionally different from Teachers: a dominant classroom observation feature, a smaller visual-story counterpoint, an Inside the Lesson scene-led grid, a denser Teacher Notebooks stream, and a quiet closing pathway.

The visible story propositions use production-quality headlines, deks, explicit formats and representative reading-time metadata in line with docs/editorial-content-strategy.md. Full article bodies remain deferred until the approved page family reaches the Article Body Expansion stage.

The Classrooms primary navbar and footer links now resolve to /classrooms. Other unbuilt navbar destinations remain unchanged until their individual phases.

**Approval gate:** Classrooms implementation is complete and approved. Stop here before proceeding to Schools.

## Schools page — implementation checkpoint

The fourth navbar page, Schools, is now implemented as the third Family 2 topic-led hub. Its composition shifts emphasis from classroom activity to school culture and institutional life: a dominant opening feature with a contextual side panel, a three-column Culture & Leadership grouping, a systems-focused two-column section, a long-read institution feature, school notebooks, and a quiet closing pathway.

The visible story propositions use production-quality headlines, deks, explicit formats and representative reading-time metadata in line with docs/editorial-content-strategy.md. Full article bodies remain deferred until the approved page family reaches the Article Body Expansion stage.

The Schools primary navbar and footer links now resolve to /schools. Other unbuilt navbar destinations remain unchanged until their individual phases.

**Approval gate:** Schools implementation is complete. Stop here for live visual review and approval of the Schools page before proceeding to Ideas.

## Ideas page — implementation checkpoint

The fifth navbar page, Ideas, is now implemented as the first Family 3 destination. Its composition shifts from topic-led discovery toward ideas, interpretation and long-form reading: a signature essay opening with a contextual note, a three-column set of arguments, a long-read feature package, a quieter small-ideas stream and a restrained closing pathway.

The visible story propositions use production-quality headlines, deks, explicit formats and representative reading-time metadata in line with docs/editorial-content-strategy.md. Full article bodies remain deferred until the approved page family reaches the Article Body Expansion stage.

The Ideas primary navbar and footer links now resolve to /ideas. Other unbuilt primary destinations remain unchanged until their individual phases.

**Approval gate:** Ideas implementation is complete. Stop here for live visual review and approval of the Ideas page before proceeding to World.

## World page — implementation checkpoint

The sixth navbar page, World, is now implemented as the second Family 3 destination. Its composition keeps the literary, spacious Family 3 rhythm while shifting the content lens to comparative and international education: a signature long-read opening, three perspective-led stories, an extended Beyond the Staffroom feature, field notes and a restrained closing pathway.

The visible story propositions use production-quality headlines, deks, explicit formats and representative reading-time metadata in line with docs/editorial-content-strategy.md. Full article bodies remain deferred until the approved page family reaches the Article Body Expansion stage.

The World primary navbar and footer links now resolve to /world. Other unbuilt primary destinations remain unchanged until their individual phases.

**Approval gate:** World implementation is complete. Stop here for live visual review and approval of the World page before proceeding to Voices.


### Deployment retry — October 2, 2026
A fresh Git commit has been pushed to re-trigger the connected Vercel production deployment after the previous deployment window appeared exhausted. Verify the resulting production deployment before treating Schools as live.
