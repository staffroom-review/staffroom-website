# Staffroom Review — Fresh Sequential Implementation Roadmap

## Status

**Documentation reconciliation complete.**

The website is being rebuilt from a clean application baseline inside the existing GitHub repository and Vercel project.

## Non-negotiable workflow

Every phase follows:

**Plan → User approval → Implement → Verify → Live-site review → User approval → Next phase**

Approval is for one phase only.

Do not combine phases.

## Build principles

1. `/docs` is the active design/editorial specification.
2. Existing application code is replaceable.
3. GitHub and Vercel infrastructure remain in place.
4. Build the system before filling it with content.
5. Prefer reusable editorial primitives over one-off markup.
6. Use one shared visual language rather than accumulating overrides.
7. Use The Ken as the primary architecture/layout/look-and-feel reference, with Staffroom Review's colour identity and editorial content.
8. **The final homepage should be broadly comparable to The Ken in structural length, section count, story count and editorial density.**
9. **The Ken relationship is a strong guideline, not a rigid one-to-one implementation requirement.** The build should stay as close as practical to the reference while allowing Staffroom-specific editorial logic, content availability, readability and design judgement to determine the final number of modules and stories.
10. Do not copy The Ken's logo, proprietary assets, editorial copy or stories.
11. Each phase must leave the repository in a coherent, deployable state.
12. Stop after every phase for live-site review.

## Reference mapping gate

Before homepage implementation begins, review the current The Ken homepage reference and use `homepage-reference-mapping.md` as a **comparative design guide**.

The mapping should identify the major reference patterns, sequence, hierarchy and approximate density so the Staffroom homepage does not become a shortened sample. It does **not** require a literal one-for-one slot count.

The reference review should account for:
- sections and section breaks
- headings and editorial labels
- lead/feature packages
- supporting story groups
- list and compact-story groups
- pull quotes or editorial text blocks
- image-led modules
- long-form/visual modules
- comparable utility/editorial promotion blocks that materially occupy homepage space

The Staffroom homepage may combine, split or adapt individual reference modules where doing so creates a stronger Staffroom editorial experience, provided the overall page remains close to the reference in scale, density, rhythm and variety.

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
Full visual system, complete header/footer, story modules, reference-comparable homepage composition, editorial seed population and final responsive composition.

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
Detailed page composition and homepage reference comparison.

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
Homepage story modules and reference-comparable homepage composition.

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
The reusable vocabulary is sufficient to assemble a varied, publication-scale homepage without reducing the reference direction to a repeated card grid.

### Deferred
Full homepage sequence, final module count and editorial seed population.

---

## Phase 5 — Homepage architecture

### Goal
Implement a **full publication-scale homepage** whose structure, length, section rhythm and information density are as close to the reviewed The Ken reference as practical.

### Mandatory result
The homepage must not be a short sample or stop after the named Staffroom editorial areas.

Use `homepage-reference-mapping.md` to guide:
- major section sequence
- relative hierarchy
- variety of module types
- approximate number of stories/cards
- image-bearing versus type-led treatments
- page depth and whitespace rhythm

Exact one-to-one cardinality is **not mandatory**. Where Staffroom's editorial logic benefits from combining or splitting a reference module, that is allowed. The implementation should nevertheless remain recognisably comparable in overall scale and density.

### Staffroom editorial sequence

The Staffroom-specific content areas remain:

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

**This list is an editorial content model, not a limit on homepage length or module count.** Additional supporting modules may be used to achieve the intended publication scale.

### Checkpoint
Side-by-side review confirms that the Staffroom homepage is full-length, varied and publication-scale, with no arbitrary shortening or flattening into a repeated generic grid.

### Deferred
Final placeholder-image polish, final responsive tuning, accessibility QA and production QA.

---

## Phase 6 — Editorial seed and imagery

### Goal
Populate the homepage with a complete, deliberate Staffroom story bank and distinct placeholder imagery.

### Actions
- expand or adapt the placeholder story bank to support the full homepage architecture
- assign sections, subjects, formats and geography
- add headline/dek pairs
- maintain approximately 80% India / 20% international balance
- distribute teacher lived experience across the page
- create distinct placeholder imagery for image-bearing modules
- preserve the established publication-scale density without treating exact reference cardinality as a hard constraint

### Checkpoint
The homepage communicates the Staffroom Review proposition as a complete publication front page before real publishing content exists.

### Deferred
Final responsive tuning and technical QA.

---

## Phase 7 — Responsive refinement

### Goal
Refine desktop, tablet and mobile compositions as editorial layouts.

### Actions
- preserve the desktop editorial hierarchy
- simplify desktop grids intentionally for smaller screens without deleting meaningful editorial modules
- retain important imagery
- control mobile spacing and type
- validate navigation and interactions

### Checkpoint
Responsive layouts retain the intended publication scale and editorial hierarchy while adapting composition intentionally for the viewport.

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
- homepage completeness and density against the reference guide

### Checkpoint
No known critical technical, accessibility, interaction or reference-completeness issue remains.

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
- side-by-side fidelity against the reference guide

### Checkpoint
The site feels authored, consistent and intentionally designed, and the homepage remains complete rather than reduced.
