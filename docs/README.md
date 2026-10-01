# Staffroom Review — Master Design & Build Specification

Staffroom Review is an independent publication about teaching, schooling and the human experience of education.

## Source of truth

The active specification is limited to the documents in `/docs`:

- `visual-system.md` — visual language, typography, colour, grid, spacing, imagery and responsive rules
- `editorial-system.md` — editorial proposition and story principles
- `content-taxonomy.md` — navigation, subjects, formats and geography
- `homepage-architecture.md` — reconstructed homepage architecture and responsive composition
- `homepage-reference-mapping.md` — ordered reference-section map for The Ken screenshots 1–7
- `reference-capture-and-analysis.md` — screenshot-derived measurements and visual analysis
- `content-seed.md` — Staffroom story material that must be preserved and can be expanded
- `build-baseline.md` — technical boundaries
- `implementation-plan.md` — chronological build and approval gates

These documents override assumptions inherited from earlier homepage implementations.

## Reference relationship

The supplied The Ken screenshots are the primary visual and structural reference for the homepage.

The target is **close architectural and visual correspondence**, not a literal clone and not a generic “inspired by” page.

Translate:
- composition
- hierarchy
- proportions
- story density
- image prominence
- section rhythm
- typography relationships
- rules and separators
- responsive reflow

Staffroom Review supplies:
- its own masthead and brand
- its own colours
- its own navigation labels
- its own story headlines, deks and metadata
- its own imagery
- its own editorial voice

Do not copy The Ken's logo, brand assets, proprietary imagery or editorial language.

## Existing content preservation

The current Staffroom homepage contains future-story development material. Redesign work must **not delete, shorten, replace or rewrite existing story headlines and supporting text merely to fit the reference**.

The homepage may:
- add additional stories where the reference architecture needs more density
- redistribute existing stories between modules
- repeat an existing story only where an explicit editorial treatment requires it
- introduce additional seed stories from `content-seed.md`

The homepage must not become shorter by removing existing development material.

## Header and footer boundary

The current `SiteHeader` and `SiteFooter` are retained.

They may receive proportion, spacing, typography, colour or responsive refinements required by the new visual system, but they are not to be replaced by a new site-shell concept.

## Imagery

Actual free-to-use placeholder imagery is a later implementation pass.

Until that pass:
- preserve the existing story/image data
- maintain distinct image slots
- do not redesign the architecture around temporary artwork
- do not repeat placeholder artwork within the same visible homepage composition

Preferred final imagery is editorial illustration where appropriate, sourced from free/licensed resources.

## Responsive rule

Desktop and mobile are the primary reference states. Tablet is an intermediate responsive state derived from the same component and layout system.

Do not create a separate tablet site unless evidence requires genuinely different behaviour.

## Workflow

Each phase follows:

**Plan → approval → implement → verify → live-site review → approval → next phase**

No later phase is silently bundled into an earlier one.

For the current redesign, the approved reference sequence is:

**Section 1 → Section 2 → Section 3 → Section 4 → Section 5 → Section 6 → Section 7**

Additional sections may be inserted later without changing the established visual system or structural logic.
