# Staffroom Review Sequential Implementation Plan

## Status

**Approved implementation roadmap.**

The documentation in /docs is the source of truth for the redesign. This document governs how implementation is carried out across sessions.

## Non-negotiable workflow

The redesign is **not implemented all at once**.

Each phase follows this cycle:

**Plan → User approval → Implement → Verify → User checks live site → User approval → Next phase**

Before each phase, state:
- phase and step
- objective
- files/components expected to change
- checkpoint/acceptance criteria
- what is explicitly deferred

Then wait for approval.

After approval:
- implement only that phase/step
- make the smallest appropriate change
- do not begin later phases implicitly
- commit the approved work as a logical increment

After implementation:
- verify the build and affected UI/interaction
- report files changed, verification, and remaining issues
- provide the live-site checkpoint
- stop until the user confirms the live result

User approval of one phase authorises **that phase only**, not future phases.

## Session continuity

A future session must resume from repository state, not conversational memory.

At the start of every new session:
1. inspect main
2. read docs/README.md
3. read this file
4. read the documentation relevant to the current phase
5. inspect recent commits
6. determine the last completed phase and checkpoint
7. do not repeat or re-implement completed work

If the repository and documentation disagree, stop and document the discrepancy before implementation.

## Phase 0 — Repository audit

### Goal
Establish the exact current architecture before changing it.

### Actions
1. Confirm current branch and working baseline.
2. Inventory routes and components.
3. Identify global CSS ownership.
4. Identify current homepage structure.
5. Identify navigation and footer destinations.
6. Identify duplicated or obsolete patterns.
7. Confirm package/dependency baseline.
8. Record discrepancies.

### Checkpoint
No application files are changed.

Approval means the audit is accepted and Phase 1 may be proposed.

---

## Phase 1 — Resolve structural discrepancies

### Goal
Make the existing structure internally coherent before visual implementation.

### Actions
1. Resolve stale navigation/footer links.
2. Align navigation with the approved taxonomy.
3. Establish reliable section IDs/routes.
4. Repurpose or remove obsolete labels where required.
5. Make the mobile navigation functional.
6. Preserve unrelated existing behaviour.

### Checkpoint
All visible navigation controls have valid destinations or defined interactions.

---

## Phase 2 — Establish the visual foundation

### Goal
Apply the documented design tokens before rebuilding content modules.

### Actions
1. Rationalise colour tokens.
2. Establish typography roles and scale.
3. Establish spacing scale.
4. Establish grid/container behaviour.
5. Establish rule weights.
6. Establish image ratios.
7. Establish restrained shadow treatment.
8. Establish focus/hover states.

### Checkpoint
The shared visual foundation exists and later components can use it without ad-hoc duplication.

---

## Phase 3 — Rebuild global shell

### Goal
Establish the new Staffroom Review identity through the header, navigation and footer.

### Actions
1. Redesign masthead.
2. Implement conventional header/nav.
3. Implement working mobile navigation.
4. Redesign footer.
5. Ensure header/footer use the shared visual system.

### Explicit non-goals
- no animated logo
- no expandable footer
- no experimental navigation mechanics

### Checkpoint
Global chrome is visually coherent, responsive and functional.

---

## Phase 4 — Story presentation primitives

### Goal
Create the controlled reusable building blocks required by the homepage.

### Candidate components
- StoryCard
- StoryMeta
- SectionHeader
- FeatureStory
- CompactStory
- StoryGrid
- StoryList
- QuoteBlock
- ImageStory

Reuse existing EditorialRule and SectionLabel when appropriate.

### Checkpoint
Homepage sections can be assembled from a consistent, limited component vocabulary.

---

## Phase 5 — Homepage architecture

### Goal
Rebuild the homepage in the documented editorial order and hierarchy.

### Sequence
1. Lead story
2. The Staffroom
3. The Classroom
4. The School Behind the School
5. Voices
6. Subjects
7. Beyond the Staffroom
8. The Long Read
9. Visual story/experiment
10. Closing editorial block

Use different compositions across sections rather than repeating one card grid.

### Checkpoint
The homepage reads as an edited publication front page.

---

## Phase 6 — Editorial content and imagery

### Goal
Populate the redesigned homepage with the documented story concepts and distinct placeholder imagery.

### Actions
1. Add approved headlines/deks.
2. Assign section, subject, format and geography metadata.
3. Maintain approximately 80% India / 20% international education.
4. Distribute teacher lived experience across multiple sections.
5. Use distinct placeholder imagery.
6. Apply the constructive learning rule to difficult topics.

### Checkpoint
The homepage communicates the intended editorial proposition before real articles are available.

---

## Phase 7 — Teacher lived-experience system

### Goal
Make lived teacher experience a recurring publication-wide property.

### Actions
Introduce recurring formats documented in the editorial system, rather than treating teacher experience as one isolated section.

### Checkpoint
Teacher experience is visible across the information architecture and homepage.

---

## Phase 8 — Subjects and reach

### Goal
Broaden the publication's relevance across subjects, school contexts and audiences.

### Actions
Rotate subject representation and include metro, small-town, rural and international perspectives.

### Checkpoint
The publication does not feel limited to one teacher profile, subject or geography.

---

## Phase 9 — Visual storytelling

### Goal
Introduce Staffroom Review's own visual-story language.

### Actions
Begin with 1–2 meaningful visual stories.

### Checkpoint
Visuals explain something that text alone would not communicate as effectively.

---

## Phase 10 — Responsive refinement

### Goal
Preserve editorial hierarchy across desktop, tablet and mobile.

### Checkpoint
Mobile is intentionally composed, not merely a stacked desktop page.

---

## Phase 11 — Accessibility and technical QA

### Actions
- semantic heading hierarchy
- keyboard navigation
- visible focus
- alt text
- decorative placeholder handling
- valid links
- mobile interaction testing
- production build validation
- console/runtime error review
- image loading review
- metadata review

### Checkpoint
No known critical build, interaction or accessibility issue remains.

---

## Phase 12 — Final editorial polish

### Actions
Tune headline scale, section spacing, rule lengths, image crops, accent usage, content density and visual repetition.

### Checkpoint
The site feels authored rather than assembled.

## Implementation constraints

Throughout all phases:
- use the smallest practical file set
- preserve unrelated working functionality
- reuse existing components where they fit
- do not duplicate CSS or components unnecessarily
- do not make incidental mobile changes
- do not copy The Ken's identity, language or stories
- do not introduce board-specific news as a major category
- do not use repeated placeholder imagery
- do not bundle unapproved phases into a single implementation
