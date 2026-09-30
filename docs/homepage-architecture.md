# Staffroom Review — Homepage Architecture

## 1. Design intent

The homepage is a **full publication front page, not a sample homepage**.

The Ken is the primary architecture/layout/look-and-feel reference. The final Staffroom Review homepage must maintain a **one-to-one structural correlation** with the reviewed The Ken homepage reference.

This means the final page must be comparable in:
- total structural length
- number and role of major sections
- number and role of story/card groups
- heading and label blocks
- supporting text/dek blocks
- image-bearing modules
- editorial/utility blocks occupying homepage space
- story hierarchy
- information density
- overall section rhythm

Staffroom Review replaces the reference content with placeholder editorial stories, headlines, deks, authors, metadata, images and editorial labels relevant to teaching and schooling. It does **not** replace the reference structure with a shorter Staffroom-specific page.

## 2. Mandatory one-to-one mapping

The reviewed The Ken homepage must be treated as a page-level source structure.

For every visible reference module that occupies homepage editorial space, define exactly one Staffroom Review counterpart.

### A mapped counterpart must preserve

**1. Position**  
The same relative sequence in the page.

**2. Role**  
Lead remains lead; supporting cards remain supporting cards; lists remain lists; quote/text blocks remain quote/text blocks; visual modules remain visual modules.

**3. Cardinality**  
Do not collapse two reference cards into one, or turn a larger reference group into a single summary.

**4. Hierarchy**  
Relative emphasis, visual weight, story prominence and approximate footprint should remain comparable.

**5. Text-block role**  
A reference headline/dek/label/quote/supporting-text role receives a Staffroom text counterpart. The wording is entirely original to Staffroom Review.

**6. Image role**  
An image-bearing reference module receives a distinct Staffroom placeholder image of the corresponding visual importance and approximate crop class.

**7. Length**  
The completed homepage should extend to the same broad structural depth as the reviewed reference. A short page that stops after the main editorial sections is not an acceptable implementation.

## 3. Reference mapping document

The definitive slot-by-slot map lives in:

`docs/homepage-reference-mapping.md`

Before Phase 5, the mapping document must be completed from the reviewed The Ken homepage reference.

No homepage implementation should proceed from memory, a partial screenshot or the Staffroom section list alone.

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

These are Staffroom editorial areas, **not a count of final homepage modules**. The one-to-one reference map may distribute several reference modules across one editorial area or use additional Staffroom modules where required to match the reference page.

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

The spans are tools for reproducing the mapped compositions; they are not permission to simplify the page into a repeated grid.

## 6. Section rhythm

Use the rhythm observed in the reference map:
- image-led packages
- type-led packages
- split features
- lists
- compact columns
- quote/voice treatments
- visual explanations
- long-read compositions

Do not repeat one card structure merely because it is convenient to code.

Variation should come from the reference mapping, not from inventing a shorter alternative architecture.

## 7. Colour rhythm

The structure follows the The Ken reference, but the colour system is Staffroom Review's:
- warm ivory base
- near-black
- restrained grey
- deep vermilion accent
- occasional muted tonal fields only where they improve hierarchy

The palette is the principal intentional interface-level difference.

## 8. Image hierarchy

No repeated placeholder image.

Every image-bearing mapped slot receives a visually distinct placeholder.

Use different subject matter and crops.

Large stories receive large image treatment.

Compact stories may use smaller crops, but the image role must remain equivalent to the reference.

## 9. Story hierarchy

Actual story headlines must dominate decorative statements.

The publication proposition should support the homepage, not compete with the mapped story hierarchy.

## 10. Mobile composition

On mobile:
- compact masthead
- functional navigation
- lead remains first
- mapped editorial modules remain present
- complex desktop grids simplify intentionally rather than disappear
- imagery remains varied
- metadata remains readable
- section spacing tightens without becoming cramped

Mobile may reflow, reorder within documented responsive rules where necessary for usability, and simplify layout mechanics; it must not be used to justify deleting mapped content modules.

