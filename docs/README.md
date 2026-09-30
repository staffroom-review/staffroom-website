# Staffroom Review — Master Design & Build Specification

Staffroom Review is an independent publication about teaching, schooling and the human experience of education.

The website will be rebuilt as a clean application implementation inside the existing GitHub repository and Vercel project.

## Source of truth

The active build specification is limited to these documents:

- `visual-system.md` — visual language, typography, colour, grid, interaction and responsive rules
- `editorial-system.md` — editorial proposition, voice and story principles
- `content-taxonomy.md` — primary sections, subjects, formats and geography
- `homepage-architecture.md` — page sequence, hierarchy and composition
- `content-seed.md` — placeholder editorial concepts
- `build-baseline.md` — clean technical baseline and implementation boundaries
- `implementation-plan.md` — phased build roadmap and checkpoints

These documents override any assumptions contained in previous application code.

## Design reference

The Ken is the primary visual and structural reference.

The rebuild should closely follow The Ken's editorial approach to hierarchy, page architecture, story prominence, typography contrast, information density, grid composition, navigation and utility placement, story packaging, metadata treatment, spacing and visual storytelling.

The Staffroom Review implementation should use its own brand, editorial content, imagery and colour system. The intended interface-level difference is primarily the colour palette.

Do not copy The Ken's logo, name treatment, editorial copy, proprietary imagery or other brand assets.

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
