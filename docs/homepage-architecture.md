# Staffroom Review — Homepage Architecture

## 1. Architectural target

The homepage is a **full publication front page** reconstructed from the supplied The Ken visual reference.

The architecture is a sequence of distinct editorial compositions, not a collection of generic reusable card grids.

The seven reference stages are the primary homepage backbone:

**01 Opening → 02 Feature/support → 03 Discovery → 04 Central feature → 05 Collection → 06 Feature chapter → 07 Closing feature**

Additional sections may be inserted later without changing the established system.

## 2. Composition vocabulary

The implementation must support at least these distinct composition types:

### A. Three-part asymmetric feature
Text-led side story + dominant central image/story + supporting side story.

### B. Feature + stacked support
Large image-led feature paired with a narrower column of text/image stories.

### C. Dense discovery collection
Several narrow columns, selective images, many compact stories and thin separators.

### D. Central feature chapter
Dominant central image/story flanked by editorial side packages.

### E. Narrow-column collection
Repeated editorial columns with a lead image and compact story list.

### F. Long-form feature chapter
Large image-led or central feature with strong headline/dek hierarchy and supporting side stories.

These compositions should be created from shared primitives rather than seven unrelated component systems.

## 3. Desktop grid

Use a 12-column central editorial grid.

Working desktop assumptions from the supplied 1440px references:
- approximately 60px outer margin
- approximately 1320px usable width
- 20–30px primary gutters
- explicit column spans
- dominant stories generally 6–7 columns
- side packages generally 2–3 columns
- dense collections use 2–3 column equivalents repeated across the width

The exact values are implementation tokens and should be refined through visual verification.

## 4. Section headers

A reference-style section header consists primarily of:
- compact title/label
- long horizontal rule
- optional short explanatory text

Do not turn section headings into oversized promotional blocks.

## 5. Story package hierarchy

A story may contain:

**label → headline → dek → metadata**

or, for compact stories:

**date/label → headline → author**

Image presence is determined by the mapped slot.

Metadata is intentionally small and secondary.

## 6. Existing Staffroom content

Current story headlines, deks and development text remain authoritative content assets.

The architecture may redistribute them but must not delete or shorten them.

Additional story concepts may be added from `content-seed.md` to satisfy reference density.

## 7. Header/footer boundary

Keep `SiteHeader` and `SiteFooter`.

Only visual alignment changes are permitted if required by the new system. They are not part of the homepage reconstruction sequence.

## 8. Responsive architecture

Desktop and mobile are primary states.

Mobile should:
- collapse columns intentionally
- preserve editorial reading order
- retain dominant images
- keep section rules
- turn dense collections into readable stacked groups
- preserve all underlying story roles

Tablet is an intermediate state of the same component tree.

## 9. Structural rule

If a layout looks wrong, fix:
1. grid spans
2. intrinsic content width
3. image ratio
4. typography role
5. section spacing

Do not fix structural problems with absolute positioning or arbitrary negative margins.
