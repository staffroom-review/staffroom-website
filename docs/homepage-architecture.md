# Staffroom Review — Homepage Architecture

## 1. Design intent

The homepage is a **full publication front page, not a sample homepage**.

The Ken is the primary architecture/layout/look-and-feel reference. The Staffroom Review homepage should be **as close as practical** to the reference in overall page depth, major section count, story/card density, hierarchy, editorial rhythm and variety.

This is a guideline, not a rigid one-to-one requirement.

Staffroom Review may adapt, combine, split or add modules where that produces a stronger and more natural Staffroom editorial experience. The important constraint is that these adaptations must not accidentally turn the page into a materially shorter, sparser or more repetitive version of the reference.

## 2. Comparative architecture rule

The reviewed The Ken homepage should be treated as the principal compositional benchmark.

Aim to preserve or closely approximate:
- total structural length
- number of major sections
- number and role of story/card groups
- heading and label blocks
- supporting text/dek blocks
- image-bearing modules
- editorial/utility blocks occupying homepage space
- story hierarchy
- information density
- overall section rhythm

Do **not** interpret these as exact counts that must be copied.

A reasonable Staffroom adaptation may:
- combine two adjacent reference modules
- split a dense reference group
- add a Staffroom-specific editorial block
- vary card counts slightly
- change image treatment where Staffroom's content needs it
- use a different module format for the same editorial purpose

The final page should still read at a glance as a full publication homepage rather than a shortened sample.

## 3. Reference guide

The working comparative map lives in:

`docs/homepage-reference-mapping.md`

Implementation should use it alongside the visual reference. Do not build from the Staffroom section list alone.

## 4. Staffroom editorial content sequence

The Staffroom content should be organised into these primary areas:

### 01 — Publication header
Masthead, utility actions and primary editorial navigation.

### 02 — Lead story
One clearly dominant story with a large headline, supporting dek, category/format metadata, author/date/reading time and strong image.

### 03 — The Staffroom
Teacher lived experience.

### 04 — The Classroom
Stories about what actually happens during teaching.

### 05 — The School Behind the School
Leadership, culture, administration, staffing, parent relationships and institutional realities.

### 06 — Voices
First-person work and conversations.

### 07 — Subjects
A rotating editorial showcase across subjects.

### 08 — Beyond the Staffroom
International/comparative education framed around questions useful to Indian educators.

### 09 — The Long Read
One substantial piece with more space and breathing room.

### 10 — Visual Story
One meaningful visual explanation.

### 11 — Closing editorial block
A shorter reflective piece or editorial note.

These are Staffroom editorial areas, **not a count of final homepage modules**. Additional supporting modules are expected where needed to achieve the intended publication scale.

## 5. Layout model

Use The Ken as the principal reference for page composition:

- strong left/right alignment
- dominant lead package
- irregular editorial hierarchy
- mixed story widths
- clear section breaks
- compact metadata
- generous whitespace around major stories
- images scaled according to importance

Desktop uses a 12-column grid.

Typical spans:
- lead: 8–12 columns
- major: 6–8
- supporting: 4–6
- compact: 3–4
- notes/meta: 1–3

The spans are tools for reproducing the editorial composition; they are not a requirement to force every reference card into an identical Staffroom slot.

## 6. Section rhythm

Use a varied rhythm:
- image-led packages
- type-led packages
- split features
- lists
- compact columns
- quote/voice treatments
- visual explanations
- long-read compositions

Do not repeat one card structure merely because it is convenient to code.

Variation should come from the reference direction and Staffroom editorial needs.

## 7. Colour rhythm

The structure follows the reference direction, but the colour system is Staffroom Review's:
- warm ivory base
- near-black
- restrained grey
- deep vermilion accent
- occasional muted tonal fields only where they improve hierarchy

The palette is the principal intentional interface-level difference.

## 8. Image hierarchy

Every image-bearing story should receive a distinct visual placeholder during the seed phase.

Use different subject matter and crops.

Large stories receive large image treatment.

Compact stories may use smaller crops, but the visual hierarchy should remain clear.

## 9. Story hierarchy

Actual story headlines must dominate decorative statements.

The publication proposition should support the homepage, not compete with the story hierarchy.

## 10. Mobile composition

On mobile:
- compact masthead
- functional navigation
- lead remains first
- meaningful editorial modules remain present
- complex desktop grids simplify intentionally
- imagery remains varied
- metadata remains readable
- section spacing tightens without becoming cramped

Mobile may reflow or simplify layout mechanics; it should not be used to justify deleting substantial editorial content.
