# Staffroom Review — Sequential Redesign & Build Roadmap

## Current status

**Reference analysis complete. Seven-stage homepage reconstruction foundation implemented. Visual verification is the next checkpoint.**

The supplied The Ken screenshots establish the visual and structural basis for the homepage. The existing homepage implementation is no longer the design baseline.

## Non-negotiable workflow

**Plan → approval → implement → verify → live-site review → approval → next phase**

For the current approved reconstruction, work proceeds chronologically through reference Sections 1–7.

## Phase 1 — Reference capture
Complete.

## Phase 2 — Reference analysis & documentation
Complete.

Updated:
- `reference-capture-and-analysis.md`
- `homepage-reference-mapping.md`
- `homepage-architecture.md`
- `visual-system.md`
- related technical/content rules

## Phase 3 — Clean homepage foundation
Complete.

Actions:
- remove accumulated homepage-specific layout assumptions
- preserve SiteHeader and SiteFooter
- preserve existing Staffroom story content
- establish the new seven-stage structural system
- retain reusable story primitives where they remain appropriate
- remove obsolete page-specific overrides

Checkpoint:
The homepage has a clean structural foundation capable of implementing Sections 1–7 without legacy layout interference.

## Phase 4 — Desktop reconstruction
Foundation implemented for Sections 1–7 at the supplied 1440px reference viewport. Side-by-side visual verification remains the checkpoint before further refinement.

Sequence:
1. Opening asymmetric feature
2. Feature + support
3. Dense discovery collection
4. Central feature
5. Multi-column collection
6. Large feature chapter
7. Closing feature chapter

Checkpoint:
Desktop composition matches the reference in structure, scale, density, hierarchy and rhythm.

## Phase 5 — Mobile reconstruction
Build the mobile state from the supplied reference behaviour.

Checkpoint:
Mobile preserves the intended editorial reading order, image prominence and density without simply shrinking desktop.

## Phase 6 — Tablet refinement
Test intermediate widths.

Checkpoint:
Tablet is an intentional intermediate composition using the shared responsive system.

## Phase 7 — Imagery pass
Replace temporary placeholders with relevant actual free/licensed imagery.

Priorities:
- editorial illustrations
- article-relevant visual metaphors
- distinct imagery for each visible image slot

Checkpoint:
Imagery supports the story propositions and reference-like visual rhythm.

## Phase 8 — Editorial density/content completion
Add any additional stories required by the reference density using `content-seed.md`.

Existing future-story headlines and supporting text must remain.

Checkpoint:
The homepage feels publication-scale and complete without deleting existing development material.

## Phase 9 — Production QA
Check semantics, keyboard access, image behaviour, contrast, links, mobile menu, build/runtime errors and responsive integrity.

## Phase 10 — Final visual fidelity
Final side-by-side refinement against the supplied references.

Tune:
- column proportions
- headline wrapping
- image crops
- section spacing
- rule lengths
- metadata scale
- responsive transitions

Stop for approval after each major checkpoint.
