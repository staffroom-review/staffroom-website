# Staffroom Review — Clean Build Baseline

## 1. Purpose

This document defines the technical starting point for the rebuild.

The existing application implementation is not the design baseline.

The rebuild should produce a clean, intentionally structured Next.js application that implements the active documents in this folder.

## 2. Project boundary

Keep:

- GitHub repository: `staffroom-review/staffroom-website`
- Vercel project: `staffroom-website`
- Next.js as the application framework
- only dependencies required by the final implementation
- `/docs` as the design and editorial specification

Rebuild:

- application routes
- global styling
- global shell
- editorial components
- homepage composition
- content data structures
- image/placeholder system
- responsive implementation

Do not treat previous application code as reusable merely because it already exists.

## 3. Dependency policy

`package.json` should contain deliberate, compatible versions rather than floating `latest` dependencies.

Only dependencies justified by the implementation should be retained.

No dependency should be introduced simply to reproduce a visual effect that can be implemented cleanly with existing platform capabilities.

## 4. Application structure

Target structure:

```
app/
  layout.js
  page.js
  globals.css

components/
  SiteHeader.jsx
  SiteFooter.jsx
  EditorialRule.jsx
  SectionLabel.jsx
  StoryMeta.jsx
  StoryCard.jsx
  SectionHeader.jsx
  FeatureStory.jsx
  CompactStory.jsx
  StoryList.jsx
  QuoteBlock.jsx
  ImageStory.jsx
```

The exact component list may be simplified when an existing primitive already handles the required role.

Do not create abstractions that are not reused.

## 5. Separation of concerns

- `app/page.js` owns homepage composition and editorial ordering.
- reusable components own presentation patterns.
- content data should be separated from repeated markup where this improves clarity and consistency.
- `globals.css` owns the shared visual system.
- component-specific CSS should not become a second competing design system.

## 6. Layout baseline

Use a publication-style central container and a 12-column desktop grid.

Components should use explicit editorial spans based on story importance.

The layout must be authored for desktop, tablet and mobile rather than relying on a single desktop structure that is later stacked.

## 7. Implementation constraints

- start clean
- avoid legacy overrides
- avoid duplicate selectors
- avoid duplicated colour/type/spacing tokens
- avoid arbitrary magic numbers where a shared token is appropriate
- preserve semantic HTML
- preserve accessible keyboard interaction
- do not copy The Ken's brand assets or editorial content
- do not introduce unrelated features
