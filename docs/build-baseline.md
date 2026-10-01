# Staffroom Review — Technical Baseline

## Retain

- GitHub repository: staffroom-review/staffroom-website
- Vercel deployment/project: staffroom-website
- current package.json and its dependency set

## Recreate

The application layer should be rebuilt from zero around the screenshot-derived specification.

Required foundation:
- Next.js App Router
- one global stylesheet/design-token system
- semantic React components
- data-driven story objects
- responsive CSS grid/flex layouts

## Do not carry forward

- previous homepage markup
- previous homepage CSS
- legacy overrides
- arbitrary offsets
- absolute positioning used as a correction
- duplicated design tokens
- generic card-grid assumptions

## Image handling

Temporary images are acceptable during structural work.

Final imagery should be sourced separately and must not dictate layout geometry.

## Verification

The implementation is not considered verified until it is compared visually at the reference dimensions.

Use browser/device testing for:
- 1440px desktop reference
- supplied mobile reference dimensions
- a representative tablet width

Fix structural causes before local styling symptoms.
