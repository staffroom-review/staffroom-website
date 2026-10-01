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

**Approval gate:** final fidelity implementation is complete. Stop here for live visual approval; the next product phase is the navbar page build governed by `docs/navbar-architecture.md`.
