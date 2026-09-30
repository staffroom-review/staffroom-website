# Staffroom Review — Homepage Architecture

## 1. Design intent

The homepage is a **full publication front page, not a sample homepage**.

The Ken provides the principal reference for architecture, hierarchy, proportions, rhythm and information density. The screenshot set supplied by the user is the authoritative reference for the redesign.

The relationship is **comparative, not rigidly one-to-one**.

## 2. Reference-first rule

Do not decide the final homepage structure from the Staffroom editorial list alone.

First analyse the supplied reference screenshots, then translate the observed architecture into Staffroom Review.

The final page should be as close as practical to the reference in:
- overall length
- major section count
- story/card density
- hierarchy
- module variety
- image prominence
- whitespace and vertical rhythm

## 3. Staffroom editorial areas

The core content areas remain:
- Lead story
- The Staffroom
- The Classroom
- The School Behind the School
- Voices
- Subjects
- Beyond the Staffroom
- The Long Read
- Visual Story
- Closing editorial block

These are content areas, not a fixed module count.

## 4. Layout translation

The measured reference should determine:
- grid/column relationships
- story spans
- image ratios
- card proportions
- section spacing
- rule placement
- alignment
- visual hierarchy
- page depth

Use reusable editorial primitives, but do not force every reference layout into the same component shape.

## 5. Responsive architecture

Desktop and mobile are the primary design states.

Use one shared component and CSS system with responsive breakpoints.

### Tablet

Tablet is **not normally a separate site**.

The same page and components should adapt between desktop and mobile using responsive rules. Tablet-specific refinement should still be performed because intermediate widths can expose:
- awkward column breaks
- oversized typography
- excessive whitespace
- compressed cards
- navigation collisions

A distinct tablet layout is warranted only where the reference or usability clearly requires one.

## 6. Images

Use distinct placeholder imagery for image-bearing stories.

No repeated placeholder image.

Large editorial stories receive proportionally larger or more prominent image treatment.

## 7. Fidelity rule

Do not solve visual mismatches with arbitrary offsets or accumulating overrides.

When something is misaligned:
1. identify the structural cause
2. correct the grid/component relationship
3. verify at the reference viewport
4. check adjacent responsive states

## 8. Source document

The reference capture and detailed analysis live in:

`docs/reference-capture-and-analysis.md`

The comparative working map lives in:

`docs/homepage-reference-mapping.md`
