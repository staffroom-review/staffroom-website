# Staffroom Review — Homepage Architecture

## Core rule

The homepage body is a chronological sequence of seven reference compositions:

1 Opening → 2 Feature/support → 3 Discovery → 4 Central feature → 5 reserved → 6 Five-column collection → 7 Feature chapter

The implementation should reproduce the composition logic of each section rather than force all sections into one reusable card layout.

## Global geometry

At the 1440px reference capture:

- content field: approximately 1320px
- outer margins: approximately 60px
- small editorial gutters: approximately 20–30px
- central feature in three-column compositions: roughly 50%
- side columns in those compositions: roughly 22–25% each

Use grid and intrinsic sizing. Do not use absolute positioning to imitate the screenshot.

## Section architecture

### 01 — Opening

3 / 6 / 3

Left:
- text-led story
- divider
- secondary image/promotional tile

Centre:
- large feature image
- label
- large headline
- dek

Right:
- support/commentary utility block

Vertical composition is staggered. Side columns begin below the top edge of the central image.

### 02 — Feature/support

8 / 4

Left:
- dominant landscape image
- large centered headline/dek

Right:
- text-led story
- divider
- secondary image story
- compact supporting copy

The left feature is intentionally much more visually dominant.

### 03 — Discovery

4 / 4 / 4

Muted section.

Left:
- dense text list

Centre:
- image-led lead story
- compact follow-up stories

Right:
- text-led feature
- image-led story below

The density increase is deliberate and must be preserved.

### 04 — Central feature

3 / 6 / 3

Left:
- text-led story
- compact illustrated/image story

Centre:
- dominant image
- centered headline/dek

Right:
- text-led story
- supporting image story

The visual axis is the central image.

### 05 — Reserved

No layout is defined until the missing reference is supplied.

### 06 — Five-column collection

Five equal columns.

Each:
- red collection heading
- lead image
- compact headline
- 3–5 compact text stories separated by thin rules

This is the principal dense scanning module.

### 07 — Feature chapter

3 / 6 / 3

Left:
- text-led lead
- secondary illustrated/image story

Centre:
- large feature image
- large centered headline/dek

Right:
- text-led lead
- secondary image story

## Shared component primitives

Build only after section structures are established.

Likely shared primitives:
- story text block
- feature image/story block
- compact story row
- section heading/rule
- dense collection column
- metadata line
- editorial support block

The primitive must serve multiple sections before becoming a reusable component.

## Responsive composition

### Mobile
For 3-column sections:
1. section heading/rule
2. central feature
3. left-side stories
4. right-side stories

For 8/4 sections:
1. dominant feature
2. support stories

For five-column collection:
1. collection heading
2. columns become sequential editorial groups
3. keep lead image for each group
4. compact stories remain grouped

### Tablet
Use the same DOM and component tree.

Typical transitions:
- 3-column → dominant feature + two side groups
- 8/4 → stacked feature/support
- 5-column → 2/3 columns depending on width

No separate tablet site.
