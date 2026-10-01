# Implementation Plan

## Current checkpoint

The homepage build and footer treatment are approved as the current baseline. Section 1 has received the first screenshot-measured visual fine-tune. The global typography choice remains open for final visual review; the current implementation uses Lora as the editorial serif and Archivo as the supporting sans. Lora is currently applied as the homepage's main editorial typeface for visual comparison, with Archivo retained for interface/utility text.

The homepage is not yet fully closed: Sections 2–7 still require screenshot-led refinement, followed by dedicated mobile/tablet refinement, final imagery, production/accessibility QA and final side-by-side fidelity review. These homepage tasks remain sequenced below and must not be silently skipped.

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