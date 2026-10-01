# Visual System

## Palette

Paper: warm ivory with a slight warm-grey cast.
Raised paper: near-white.
Ink: dark brown-black.
Secondary ink: warm charcoal.
Accent: bright vermillion.

The accent is concentrated in labels, section headings, long rules and selected controls.

## Typography

Reference audit: current independent design references identify The Ken's web typography as a three-font system using **Archivo**, **Ivar**, and **Reckless**. The 2023 redesign commentary specifically identifies **Ivar** as the serif introduced to strengthen The Ken's classic/contemporary editorial voice; Ivar itself is influenced by sturdy mid-century text faces and offers separate Text, Headline and Display optical sizes.

Staffroom Review uses **Frank Ruhl Libre** as the freely available/open-source approximation for the Ivar-led editorial layer, with **Archivo** retained for the interface/supporting layer. This preserves the important serif/sans relationship without importing a paid typeface or adding unnecessary typographic complexity. Reckless is not assigned a separate global role in the Staffroom system at this stage; the homepage remains intentionally cohesive rather than reproducing The Ken's commercial three-family stack literally.

Editorial display/headline type: **Newsreader** via next/font/google, used for headlines, deks, section titles, the wordmark and other literary/editorial text. Its proportions and high-contrast serif texture are closer to the supplied The Ken reference than the previous Georgia fallback while remaining freely available and self-hosted by Next.js at build time.

Interface/supporting sans-serif: **Archivo** via next/font/google, used for navigation, labels, controls, metadata and other utility text. It provides the compact, neutral grotesk character needed for the reference-style editorial hierarchy.

At 1440px, working targets are:
- dominant headline: 42–56px
- secondary feature: 30–42px
- side story: 22–30px
- collection headline: 16–21px
- dek: 16–20px
- micro label: 9–11px
- controls/nav: 10–13px

Headline width is structural and controls wrapping.

## Spacing

Primary intervals:
8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80px

Use small intervals inside story packages and larger intervals between sections.

## Rules

1px warm-grey story divider.
2px dark major divider.
2–4px vermilion section rule.
Dotted separators only in dense editorial groupings.

## Images

Rectangular editorial crops.
Dominant image approximately 1.45–1.75:1.
Secondary/collection image approximately 1.55–1.8:1.

Use distinct imagery.

Final pass should prefer free/licensed editorial illustrations that communicate the article proposition.

## Surfaces

Flat paper is the default. Avoid rounded cards, gradients and global shadows. Restrained paper-lift may be used selectively.

## Header/footer

Existing header, navbar and footer architecture remains; tune typography, spacing, colour and rules so they belong to this visual system. Do not replace the site shell with an unrelated architecture.

Footer treatment: use a deep ink surface with a substantial vermillion transition band above it so the footer reads as a deliberate closing band rather than an extension of the paper sections. Keep the footer typography restrained, highly legible and structurally hierarchical, with the existing content grouped into a strong primary identity block plus compact navigation columns.
