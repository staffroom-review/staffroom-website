# Staffroom Review — Fresh Sequential Implementation Roadmap

## Status

**Documentation reset complete.**

The website will now be rebuilt from a clean application baseline inside the existing GitHub repository and Vercel project.

The previous application structure is not to be extended.

## Non-negotiable workflow

Every phase follows:

**Plan → User approval → Implement → Verify → Live-site review → User approval → Next phase**

Approval is for one phase only.

Do not combine phases.

## Build principles

1. `/docs` is the only active design/editorial specification.
2. Existing application code is replaceable.
3. GitHub and Vercel infrastructure remain in place.
4. Build the system before filling it with content.
5. Prefer reusable editorial primitives over one-off markup.
6. Use one shared visual language rather than accumulating overrides.
7. Use The Ken as the primary architecture/layout/look-and-feel reference, with Staffroom Review's colour identity and editorial content.
8. Do not copy The Ken's logo, proprietary assets, editorial copy or stories.
9. Each phase must leave the repository in a coherent, deployable state.
10. Stop after every phase for live-site review.

---

## Phase 1 — Clean application baseline

### Goal
Replace the inherited application layer with a minimal, clean Next.js foundation.

### Actions
- rebuild `app/layout.js`
- rebuild `app/page.js`
- rebuild `app/globals.css`
- rebuild the global component directory
- remove obsolete implementation patterns
- establish deliberate dependency versions in `package.json`
- create only the base primitives required by the new system

### Checkpoint
A clean application builds and renders a minimal Staffroom Review shell without legacy CSS or homepage structure.

### Deferred
Full visual system, complete header/footer, story modules, homepage content and final responsive composition.

---

## Phase 2 — Visual foundation

### Goal
Implement the shared visual language defined in `visual-system.md`.

### Actions
- colour tokens
- typography roles
- type scale
- spacing scale
- 12-column grid
- container behaviour
- rule weights
- image ratios
- restrained shadows
- focus/hover states

### Checkpoint
All later components can consume one shared visual system without ad-hoc styling.

### Deferred
Detailed page composition and content modules.

---

## Phase 3 — Global shell

### Goal
Build the Staffroom Review shell using the structural/look-and-feel reference established by The Ken.

### Actions
- masthead
- publication header
- editorial navigation
- utility controls
- mobile navigation
- footer
- responsive shell behaviour

### Checkpoint
Header and footer are coherent, functional and visually aligned with the reference direction.

### Deferred
Homepage story modules.

---

## Phase 4 — Editorial presentation primitives

### Goal
Create the controlled reusable vocabulary for story packaging.

### Core components
- StoryMeta
- StoryCard
- SectionHeader
- FeatureStory
- CompactStory
- StoryList
- QuoteBlock
- ImageStory

Reuse simple primitives such as EditorialRule and SectionLabel where useful.

### Checkpoint
Homepage layouts can be assembled from consistent reusable modules.

### Deferred
Full homepage sequence and final content distribution.

---

## Phase 5 — Homepage architecture

### Goal
Implement the documented front-page composition.

### Sequence
1. Lead story
2. The Staffroom
3. The Classroom
4. The School Behind the School
5. Voices
6. Subjects
7. Beyond the Staffroom
8. The Long Read
9. Visual Story
10. Closing editorial block

Use The Ken as the primary reference for hierarchy, information density and layout behaviour.

### Checkpoint
The homepage reads as an edited publication front page rather than a generic blog.

### Deferred
Final editorial seed population and production-quality placeholder imagery.

---

## Phase 6 — Editorial seed and imagery

### Goal
Populate the homepage using `content-seed.md` and the documented editorial system.

### Actions
- assign sections, subjects, formats and geography
- add headline/dek pairs
- maintain approximately 80% India / 20% international balance
- distribute teacher lived experience across the page
- create distinct placeholder imagery
- apply the constructive treatment rule

### Checkpoint
The homepage communicates the Staffroom Review proposition before real publishing content exists.

### Deferred
Final responsive tuning and technical QA.

---

## Phase 7 — Responsive refinement

### Goal
Refine desktop, tablet and mobile compositions as editorial layouts.

### Actions
- preserve story hierarchy
- simplify desktop grids intentionally
- retain important imagery
- control mobile spacing and type
- validate navigation and interactions

### Checkpoint
Mobile and tablet feel deliberately designed rather than mechanically stacked.

---

## Phase 8 — Accessibility and production QA

### Goal
Validate the built system.

### Checks
- semantic headings
- keyboard navigation
- visible focus
- colour contrast
- alt text
- decorative-image handling
- valid links
- mobile menu
- production build
- runtime/console errors
- image behaviour
- metadata

### Checkpoint
No known critical technical, accessibility or interaction issue remains.

---

## Phase 9 — Final fidelity pass

### Goal
Bring the finished implementation to the intended editorial/design standard.

### Actions
Tune:
- headline scale
- margins
- section spacing
- rule placement
- image crops
- metadata density
- colour accent usage
- visual repetition
- overall hierarchy

### Checkpoint
The site feels authored, consistent and intentionally designed.
