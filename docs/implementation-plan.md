# Staffroom Review — Sequential Redesign & Build Roadmap

## Status

**Reset required: screenshot-first redesign.**

The current homepage implementation is not the basis for the final redesign. The visual reference must be captured and analysed before homepage reconstruction begins.

## Non-negotiable workflow

Every phase follows:

**Plan → User approval → Implement → Verify → Live-site review → User approval → Next phase**

Approval is for one phase only. Do not combine phases.

## Build principles

1. `/docs` is the active design/editorial specification.
2. Existing application code is replaceable.
3. GitHub and Vercel infrastructure remain in place.
4. The Ken screenshots supplied by the user are the primary homepage visual/structural reference.
5. **No homepage implementation begins until the supplied screenshots have been analysed and the reference documentation is complete.**
6. The reference is used for architecture, hierarchy, proportions, rhythm and density; Staffroom supplies original content, imagery, branding and colour identity.
7. The relationship to The Ken is a **guideline for close correspondence**, not a rigid one-to-one slot requirement.
8. The final homepage must be publication-scale and should not become materially shorter, sparser or more repetitive than the reference.
9. Prefer reusable editorial primitives over one-off markup.
10. Use one shared responsive visual system across desktop, tablet and mobile.
11. Do not copy The Ken's logo, proprietary assets, editorial copy or stories.
12. Stop after every phase for review.

## Phase 1 — Reference capture

### Goal
Establish a complete current reference before rebuilding the homepage.

### User supplies
- full desktop homepage screenshots
- mobile homepage screenshots
- additional screenshots where required to cover every relevant section

### Checkpoint
All supplied reference screenshots are in order and cover the homepage from masthead through footer.

### Deferred
Homepage implementation.

## Phase 2 — Reference analysis & documentation

### Goal
Convert the screenshots into a usable build contract.

### Actions
Analyse and document:
- page width and margins
- header/masthead structure
- navigation and utilities
- section sequence
- approximate section heights
- story/card counts and relative density
- grid/column relationships
- card/image proportions
- typography hierarchy
- rules, colour bands and spacing
- image treatment
- footer structure
- desktop/mobile transformations

Record this in:
- `docs/reference-capture-and-analysis.md`
- `docs/homepage-reference-mapping.md`
- `docs/homepage-architecture.md`

### Checkpoint
A developer can reconstruct the major reference layout from the documentation without guessing the architecture.

### Deferred
Detailed Staffroom content population.

## Phase 3 — Clean application reset

### Goal
Reset the application layer to a clean foundation suitable for the measured reference.

### Actions
- replace the current homepage implementation
- retain only required global infrastructure and primitives
- remove obsolete homepage-specific layout/CSS
- preserve GitHub/Vercel setup

### Checkpoint
Clean baseline renders and builds without carrying forward accidental layout decisions from the previous homepage.

## Phase 4 — Reference-led homepage reconstruction

### Goal
Build the desktop homepage first from the analysed reference.

### Actions
- reproduce measured page structure and proportions
- use Staffroom content and branding
- use reusable components
- match major spacing, hierarchy, image roles and section rhythm
- avoid arbitrary compensating offsets

### Checkpoint
Desktop side-by-side review is closely aligned with the reference at the supplied viewport dimensions.

## Phase 5 — Mobile reconstruction

### Goal
Build the mobile homepage from the supplied mobile reference while sharing the same underlying system.

### Actions
- reproduce mobile header/navigation behaviour
- preserve story hierarchy
- reproduce stacking/reflow decisions
- control mobile spacing and typography
- retain important imagery

### Checkpoint
Mobile side-by-side review is closely aligned with the supplied mobile reference.

## Phase 6 — Tablet refinement

### Goal
Refine the responsive system between desktop and mobile.

### Actions
- test intermediate widths
- establish breakpoint behaviour
- resolve column transitions
- preserve hierarchy and readability
- refine tablet-specific behaviour discovered during testing

### Checkpoint
Tablet works as an intentional intermediate editorial composition rather than a stretched desktop or oversized mobile.

## Phase 7 — Editorial seed and imagery

### Goal
Populate the complete homepage with deliberate Staffroom content and distinct placeholder imagery.

### Actions
- fill the established architecture
- maintain approximately 80% India / 20% international balance
- distribute teacher lived experience
- use distinct imagery without repetition
- preserve the reference-informed density and page depth

### Checkpoint
The homepage reads as a complete publication front page before real publishing content exists.

## Phase 8 — Accessibility & production QA

### Goal
Validate the finished responsive system.

### Checks
- semantic structure
- keyboard/focus
- colour contrast
- alt text
- links
- mobile menu
- production build
- runtime/console errors
- image behaviour
- metadata
- desktop/mobile/tablet layout integrity

### Checkpoint
No known critical technical or layout defect remains.

## Phase 9 — Final fidelity pass

### Goal
Fine-tune the finished build against the supplied reference screenshots.

### Tune
- headline scale
- margins
- section spacing
- image crops
- metadata density
- rules
- colour accents
- typography
- responsive transitions
- overall hierarchy

### Checkpoint
The finished Staffroom Review homepage is visually authored, structurally coherent and closely faithful to the supplied reference without becoming a copy.
