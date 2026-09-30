# Repository Audit — Main Branch

Audit date: 2026-09-30

## 1. Current repository inventory

The current main branch contains:
- app/globals.css
- app/layout.js
- app/page.js
- components/EditorialRule.jsx
- components/SectionLabel.jsx
- components/SiteFooter.jsx
- components/SiteHeader.jsx
- package.json

Before this documentation commit, there was no docs/ directory and no README in the repository root.

## 2. Current application architecture

The application is a small Next.js App Router project.

### App shell
app/layout.js
Defines global CSS import and site metadata.

### Homepage
app/page.js
The homepage is a single server component containing most editorial content and section composition.

### Global styling
app/globals.css
Contains the complete design system and responsive styles in one stylesheet.

### Reusable primitives
- EditorialRule.jsx
- SectionLabel.jsx

### Global chrome
- SiteHeader.jsx
- SiteFooter.jsx

### Dependency model
package.json currently lists:
- next: latest
- react: latest
- react-dom: latest

The package is named staffroom-review-website.

## 3. Existing patterns worth preserving or rationalising

The current implementation already contains:
- warm paper background
- near-black typography
- serif editorial headlines
- sans-serif metadata/navigation
- restrained rules
- section labels
- strong section spacing
- multiple coloured paper fields
- bright section-marker treatment
- varied homepage layouts
- a raised-card shadow treatment
- conventional header and footer structure

These should be evaluated, not automatically discarded.

## 4. Current discrepancies

### Navigation does not match the approved taxonomy
SiteHeader.jsx currently links to Stories, Journalism, Ideas, Opinion and About.

Approved navigation:
Stories, Teachers, Classrooms, Schools, Ideas, World, Voices.

The current links also point to fragment IDs that are not consistently present.

### Footer contains stale anchors
SiteFooter.jsx currently contains anchors including:
#stories, #journalism, #interviews, #profiles, #essays, #opinion, #ideas and #about.

The homepage does not define matching IDs for most of these.

### Mobile menu is not functional
SiteHeader.jsx renders a menu button, but there is no state, disclosure behaviour or mobile navigation implementation.

### Homepage content is concentrated in one file
app/page.js combines story data, page composition and visual structure.

The new system should separate reusable story presentation from page-level composition where that improves reuse, without creating needless abstraction.

### Placeholder imagery is CSS geometry
The homepage currently uses a shared JSX helper to generate geometric placeholders.

This is useful during development but does not meet the new requirement for distinct editorial placeholder imagery.

### Homepage IDs are missing/inconsistent
The page uses hash links such as #stories while sections do not consistently expose corresponding id attributes.

### Section labels mix taxonomy and format
Existing labels include Teacher Stories, Opinion, Ideas, Interview, Education & Culture, Profiles, Featured, Dispatch and Editorial Position.

Some are useful formats; they should not substitute for the approved primary sections.

### Intro manifesto has too much visual prominence
"The human experience of teaching." is currently a very large display statement.

The approved system makes story hierarchy the primary visual event and the publication statement quieter.

## 5. Documentation-phase boundary

During the documentation phase, do not modify application code, CSS, package.json, routes, components or image assets.

## 6. Implementation implication

This is not a blank-slate rewrite.

The repository already has useful editorial foundations. The redesign should be surgical where reuse is sound and structural changes should happen only where the new information architecture requires them.
