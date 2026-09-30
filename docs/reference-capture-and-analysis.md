# Staffroom Review — Reference Capture & Analysis Workflow

## Purpose

The redesign is **reference-first**.

The Ken's current homepage screenshots supplied by the user are the primary visual and structural reference. They replace inference from memory, search results, partial screenshots or assumptions about The Ken.

## Required reference material

Before homepage implementation begins, the user should provide:
- full-page desktop screenshots of The Ken's homepage, from masthead through footer
- mobile screenshots covering the equivalent homepage from masthead through footer
- additional section screenshots where a full-page capture is split across multiple images

Screenshots should preserve the original proportions and be supplied in page order.

## Analysis gate

Before writing homepage code, document:
- page width and principal content margins
- masthead/header height and structure
- navigation and utility placement
- major section order and approximate heights
- number and relative size of story groups
- column/grid relationships
- card widths and image ratios
- headline/dek/metadata hierarchy
- rules, separators and coloured bands
- whitespace and vertical rhythm
- image prominence and cropping
- typography scale relationships
- footer structure
- desktop-to-mobile transformations

Where exact measurements cannot be established, record them as approximate rather than inventing precision.

## Build rule

No homepage implementation should begin until the screenshot analysis is complete enough to establish the major visual and structural system.

The Staffroom homepage should then translate the reference architecture into:
- original Staffroom Review editorial content
- Staffroom Review's visual identity and palette
- Staffroom-specific navigation and labels
- original placeholder imagery

The aim is **close visual and structural correspondence**, not a literal copy of The Ken's branding, proprietary assets or editorial content.

## Desktop/mobile relationship

Desktop and mobile are the two primary reference states.

The implementation should use one responsive system that preserves editorial hierarchy while changing layout mechanics as necessary between viewports.

Tablet should normally be treated as an intermediate responsive composition derived from the desktop and mobile systems, then specifically tested and refined. A separate tablet page or separate tablet component tree is not required unless the reference shows a genuinely different tablet composition.

## Change control

**Reference → analysis → implementation → visual verification → approval → next stage**

Do not compensate for an uncertain reference by adding arbitrary CSS or one-off offsets.
