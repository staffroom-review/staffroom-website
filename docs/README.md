# Staffroom Review — Master Design & Build Specification

Staffroom Review is an independent publication about teaching, schooling and the human experience of education.

The website will be rebuilt as a clean application implementation inside the existing GitHub repository and Vercel project.

## Source of truth

The active build specification is limited to these documents:

- `visual-system.md` — visual language, typography, colour, grid, interaction and responsive rules
- `editorial-system.md` — editorial proposition, voice and story principles
- `content-taxonomy.md` — primary sections, subjects, formats and geography
- `homepage-architecture.md` — page sequence, reference-equivalent homepage composition and mapping rules
- `homepage-reference-mapping.md` — mandatory one-to-one mapping contract between the reviewed The Ken homepage and Staffroom Review
- `content-seed.md` — placeholder editorial concepts and the rule for filling every mapped homepage slot
- `build-baseline.md` — clean technical baseline and implementation boundaries
- `implementation-plan.md` — phased build roadmap and checkpoints

These documents override any assumptions contained in previous application code.

## Design reference

The Ken is the primary visual and structural reference.

The Staffroom Review homepage is **not a shortened, simplified, sample or merely inspired version of The Ken**. The final homepage must preserve a one-to-one structural correlation with the reviewed The Ken homepage reference: every reference section, card/group, heading block, supporting text block, story package and comparable homepage module must have a corresponding Staffroom Review counterpart in the same relative sequence and with equivalent visual prominence and information density.

The mapping is structural and compositional, not textual copying. Staffroom Review replaces The Ken's stories, headlines, deks, authors, metadata, imagery and brand identity with its own placeholder editorial material. The number and role of content blocks must remain equivalent.

The intended interface-level difference is primarily the colour palette.

Do not copy The Ken's logo, name treatment, editorial copy, proprietary imagery or other brand assets.

## Homepage fidelity rule

When the homepage is implemented, completeness is measured against the one-to-one reference map, not against a shorter Staffroom-only section list.

Do not:
- omit a reference module because it is not explicitly named in Staffroom's editorial taxonomy
- merge multiple reference modules into one larger block
- reduce the number of story cards
- replace a reference composition with a generic card grid
- create a "representative sample" of the reference homepage
- stop after the first editorial sections simply because the page already looks complete

When a reference module has no exact Staffroom editorial equivalent, preserve its **structural role, footprint, hierarchy and amount of content** using the nearest relevant Staffroom editorial material or a clearly defined publication utility counterpart. Content subject matter may change; structural completeness may not.

Before Phase 5 implementation, the reviewed The Ken homepage snapshot and its one-to-one Staffroom mapping must be documented in `homepage-reference-mapping.md`.

## Technical direction

The application implementation is being rebuilt cleanly rather than adapted from the previous homepage/CSS structure.

Keep the existing GitHub repository and Vercel project.

The application code, component structure and styling are replaceable and should be designed from this specification forward.

## Working rule

Each implementation phase follows:

**Plan → User approval → Implement → Verify → Live-site review → User approval → Next phase**

No phase authorises the next phase.

Every phase must identify:
- objective
- files/components expected to change
- acceptance checkpoint
- explicit deferrals

No unrelated work should be bundled into a phase.
