# Staffroom Review — Fresh Sequential Implementation Roadmap

## Status

**Documentation reconciliation complete.**

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
8. **The final homepage must be reference-equivalent in structure and length, not a sample or shortened interpretation.**
9. **Every reference homepage section/module/card/text block must map one-to-one to a Staffroom Review counterpart in the same relative position and with equivalent hierarchy/information density.**
10. Do not copy The Ken's logo, proprietary assets, editorial copy or stories.
11. Each phase must leave the repository in a coherent, deployable state.
12. Stop after every phase for live-site review.

## Reference mapping gate

Before homepage implementation begins, the team must review the current The Ken homepage reference and complete `homepage-reference-mapping.md`.

That mapping is a build contract. Phase 5 and Phase 6 may not intentionally reduce, merge or omit mapped modules.

The mapping must account for:
- sections and section breaks
- headings and editorial labels
- lead/feature packages
- all supporting story cards
- list and compact-story groups
- pull quotes or editorial text blocks
- image-led modules
- long-form/visual modules
- comparable utility/editorial promotion blocks that occupy homepage space

The wording and subject matter are Staffroom-specific; the structural count, order, hierarchy and approximate footprint are reference-equivalent.

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
Full visual system, complete header/footer, story modules, reference-equivalent homepage composition, editorial seed population and final responsive composition.

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
Detailed page composition and reference homepage content/module mapping.

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
Homepage story modules and reference-equivalent homepage mapping.

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
Every mapped homepage module can be assembled from consistent reusable presentation primitives without reducing the reference structure.

### Deferred
Full homepage sequence, final module count and editorial seed population.

---

## Phase 5 — Homepage architecture

### Goal
Implement the **complete one-to-one homepage structure** defined by `homepage-reference-mapping.md`.

### Mandatory result
The Staffroom Review homepage must be the same **structural length and editorial density class** as the reviewed The Ken reference.

For every reference homepage module:
- create one Staffroom counterpart
- retain the same relative sequence
- retain equivalent prominence
- retain equivalent number of content blocks/cards where applicable
- retain equivalent heading/label/text-block roles
- retain comparable image presence and scale
- retain comparable whitespace and section rhythm

Staffroom editorial names and stories replace reference copy; the reference structure is not shortened.

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

**This list is an editorial content model, not a limit on homepage length or module count.** These areas must be fitted into the one-to-one reference map rather than used to justify omitting reference modules.

### Checkpoint
A side-by-side review of the two homepage structures shows no intentional shortening, merging or omission on the Staffroom Review side.

### Deferred
Final placeholder-image polish, final responsive tuning, accessibility QA and production QA.

---

## Phase 6 — Editorial seed and imagery

### Goal
Populate **every mapped homepage slot** using `content-seed.md` and the documented editorial system.

### Actions
- expand or adapt the placeholder story bank until every mapped slot has a deliberate Staffroom content counterpart
- assign sections, subjects, formats and geography
- add headline/dek pairs
- maintain approximately 80% India / 20% international balance
- distribute teacher lived experience across the page
- create distinct placeholder imagery for every image-bearing slot
- apply the constructive treatment rule
- preserve the reference-equivalent card count, text-block count and page length

### Checkpoint
The homepage is complete in the same structural length and information-density class as the reference and communicates the Staffroom Review proposition before real publishing content exists.

### Deferred
Final responsive tuning and technical QA.

---

## Phase 7 — Responsive refinement

### Goal
Refine desktop, tablet and mobile compositions as editorial layouts.

### Actions
- preserve the one-to-one desktop story hierarchy
- simplify desktop grids intentionally for smaller screens without deleting editorial modules
- retain important imagery
- control mobile spacing and type
- validate navigation and interactions

### Checkpoint
Responsive layouts remain structurally faithful to the mapped homepage while adapting the composition intentionally for the viewport.

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
- homepage module completeness against the reference map

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
- side-by-side fidelity against the reference mapping

### Checkpoint
The site feels authored, consistent and intentionally designed, and the homepage remains complete rather than reduced.
