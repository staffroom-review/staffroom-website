# Staffroom Review — Clean Build Baseline

## 1. Purpose

The homepage is being rebuilt against the supplied The Ken screenshot architecture.

Previous homepage CSS and layout decisions are not authoritative and should not be preserved merely for convenience.

## 2. Keep

- GitHub repository: `staffroom-review/staffroom-website`
- Vercel project: `staffroom-website`
- Next.js / React
- `SiteHeader.jsx`
- `SiteFooter.jsx`
- existing editorial story content
- `/docs`

The header and footer may be visually refined but must not be replaced.

## 3. Rebuild

Rebuild the homepage composition and its page-specific styling around the seven reference stages.

The homepage must support:
- asymmetric feature compositions
- central feature compositions
- dense discovery collections
- narrow-column collections
- image-led and text-led story packages
- intentional desktop/mobile reflow
- tablet interpolation

## 4. Reusable primitives

Existing primitives may be retained when they fit:

- `StoryCard`
- `FeatureStory`
- `CompactStory`
- `ImageStory`
- `StoryList`
- `SectionHeader`
- `EditorialRule`
- `StoryMeta`
- `QuoteBlock`

Do not force all reference compositions into one component shape.

Create a new primitive only when:
1. the composition is reused, and
2. existing primitives cannot express it cleanly.

## 5. Content rule

Existing homepage story headlines, deks and future-story text are protected content.

The implementation may redistribute them, add more, or pair them with new imagery, but must not reduce or rewrite them for visual convenience.

## 6. Imagery rule

Temporary placeholders remain acceptable during structural reconstruction.

Actual free/licensed imagery is a later pass.

Do not let temporary imagery determine the architecture.

## 7. CSS rule

Use one coherent design system.

Remove:
- legacy homepage overrides
- duplicate selectors
- phase-specific patch layers
- arbitrary negative margins
- absolute positioning used only to correct alignment
- unrelated homepage-specific rules inherited from the previous design

Use:
- shared tokens
- explicit grid spans
- intrinsic sizing
- aspect-ratio rules
- responsive composition classes

## 8. Responsive rule

Desktop and mobile are primary states.

Tablet uses the same components and styles unless evidence demonstrates a fundamentally different composition.

## 9. Verification rule

Before progressing:
- render at the supplied 1440px reference dimensions
- compare section composition side-by-side
- test mobile
- test an intermediate tablet width
- correct structural causes rather than local offsets
