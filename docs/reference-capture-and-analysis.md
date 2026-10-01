# Staffroom Review — The Ken Reference Capture & Analysis

## 1. Reference status

The supplied screenshot set is now considered sufficient to establish the homepage visual system and architecture.

All supplied captures are 1440 × 900 browser screenshots and are treated as viewport-state references rather than full-page measurements.

The screenshot sequence is referred to as **The Ken 1–7** in the build documentation. The uploaded files contain the supplied numbered reference states; the architecture is defined by their chronological visual progression, not by filename availability.

The current SiteHeader and SiteFooter are outside the core reconstruction target. They remain in place and may receive limited visual alignment refinements.

## 2. Reference principles established from the screenshots

The Ken homepage is not one repeated card system. It is a sequence of editorial compositions that change density, column relationships and image prominence.

The dominant characteristics are:

1. **Asymmetric editorial grids** rather than uniform card grids.
2. **Large central or dominant stories** used as visual anchors.
3. **Small text-led stories** used to balance major image-led stories.
4. **Variable image scale** according to editorial importance.
5. **Serif headline typography** as the principal hierarchy mechanism.
6. **Small uppercase accent labels** for authors, categories and dates.
7. **Thin editorial rules** separating stories and sections.
8. **Strong section markers** consisting of a heading followed by a long horizontal rule.
9. **Changing information density**: spacious feature compositions alternate with compact multi-column collections.
10. **No dependence on rounded UI cards or decorative interface chrome.**
11. **Editorial rhythm is created by composition**, not by applying the same spacing to every module.
12. **Images are structural**, not merely thumbnail decoration.
13. **Dense list/collection sections** provide faster scanning between feature-led sections.
14. **Large feature headline/dek blocks** often sit immediately below or beside the image that establishes the section's visual weight.

## 3. Approximate desktop geometry

At the supplied 1440px viewport:

- outer content margins are approximately 60px at the visible reference sections
- usable editorial width is approximately 1320px
- the page behaves like a 12-column editorial grid with explicit spans
- major gutters are visually around 20–30px
- central feature compositions frequently occupy roughly 50–55% of the usable width
- supporting columns commonly occupy roughly 22–28% each
- dense collection modules use narrower, repeated columns
- image ratios change according to role rather than one global card ratio

These are working proportions, not claims of pixel-perfect source measurements.

## 4. Section rhythm

A typical section follows:

**section label/title + horizontal rule → composition → internal story separators → generous inter-section whitespace**

The horizontal rule is often more important than a boxed section background.

Section spacing should be large enough to establish a new editorial chapter, but not so large that the homepage becomes sparse.

## 5. Typography

Observed hierarchy:

- tiny red/bright-accent uppercase metadata
- large literary serif feature headlines
- medium serif secondary headlines
- smaller serif compact headlines
- serif or restrained neutral deks
- compact sans-serif utility/meta text

The Staffroom implementation should preserve these relationships while using its own typefaces and accent colour.

Headline line length is a structural variable. Do not solve wrapping problems with arbitrary offsets.

## 6. Image system

The reference uses a deliberate mixture of:

- dominant feature illustration/photography
- medium supporting image
- small supporting image
- image-free story
- illustrated editorial explanation
- dense image-led collection cards

For Staffroom:
- use relevant actual free/licensed placeholder imagery in the final imagery pass
- prefer editorial illustration when the story proposition benefits from it
- keep each image visually distinct
- avoid repeated placeholder images
- preserve crop and prominence according to the mapped module

## 7. Responsive interpretation

Desktop and mobile are the authoritative states.

The responsive system must preserve:
- story priority
- reading order
- image importance
- section boundaries
- headline hierarchy

It may change:
- column count
- image/text orientation
- side-by-side relationships
- dense collections into stacked editorial lists
- navigation disclosure

Tablet is derived from the same system and tested separately.

## 8. Reconstruction rule

Do not:
- recreate layouts from memory
- use arbitrary absolute positioning
- add one-off offsets to fix local symptoms
- turn every section into the same card grid
- remove existing Staffroom story development material
- use temporary imagery as a reason to alter the underlying architecture

When a mismatch occurs, correct the grid, component relationship, intrinsic sizing, type scale or spacing token responsible for it.
