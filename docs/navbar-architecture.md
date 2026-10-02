# Navbar Page Architecture & Build Roadmap

## Purpose

The homepage remains the current visual baseline. Main navbar pages are now the next product phase and must be built one page at a time with explicit visual approval before the next page begins.

Primary navbar:
- Stories
- Teachers
- Classrooms
- Schools
- Ideas
- World
- Voices
- Newsletter
- Events
- More

Newsletter is a direct top-level link to /newsletter. Events is exposed as a top-level navigation item but remains staged at / until an Events destination is built.

The **More** item uses a collapsible menu containing:
- Podcasts
- Learning
- Visual Essays
- Blog

Newsletter and Events are direct top-level navigation items. Newsletter resolves to /newsletter. Blog resolves to /blog. Events, Podcast, Learning and Visual Essays remain staged at / until their dedicated destinations are built.

## Design principle

The seven primary pages must not become seven copies of one template. They are organised into three related editorial page families. Shared primitives may recur, but composition, density, hierarchy, image treatment and reading rhythm must change according to content.

### Family 1 — Editorial publication page

**Stories**

Broad discovery-oriented publication page.

Core composition:
1. Large opening feature
2. Latest/current story sequence
3. Editor's selection or recommended reading
4. Denser story stream
5. Quiet archive/closing section

Purpose: establish the Staffroom Review approach to general story discovery.

### Family 2 — Topic-led editorial hub

**Teachers · Classrooms · Schools**

These pages share an underlying topic-hub system but must have distinct editorial emphasis.

**Teachers**
- people and lived experience
- first-person material
- practical teaching stories

**Classrooms**
- classroom observation
- visual/scene-led stories
- teaching moments and practice

**Schools**
- school culture
- leadership and institutional life
- systems, relationships and school operations

The same broad family may recur, but the hierarchy and content emphasis should alter the visual composition.

### Family 3 — Ideas / perspective / long-form

**Ideas · World · Voices**

More literary and contemplative pages using stronger serif-led hierarchy, whitespace, rules and longer-form reading cues.

**Ideas**
- essays
- arguments and interpretations
- long-form thinking

**World**
- comparative/international stories
- wider educational contexts
- thematic discovery

**Voices**
- first-person stories
- teacher and community perspectives
- human-centred narratives

These pages should feel distinct from the topic hubs without becoming a separate visual system.

## Homepage relationship

Navbar pages should link back to the relevant homepage sections where appropriate.

Primary mapping:
- Stories → general story/editorial areas
- Teachers → teacher-focused material
- Classrooms → classroom/in-practice material
- Schools → school-life/institutional material
- Ideas → Long Read and ideas-led material
- World → Beyond the Staffroom material
- Voices → first-person and teacher-voice material
- More → specialist formats outside the primary taxonomy

Homepage anchor changes should be limited to what is needed for functional navigation.

## Sequential implementation

### Phase 0 — Homepage/global baseline
1. Keep the current homepage build and approved footer as the baseline.
2. Resolve the open typography choice through visual review before treating the global type system as final.
3. Do not redesign Sections 2–7 during this phase unless a global-system issue is identified.

### Phase 1 — Stories
1. Build Stories using Family 1.
2. Verify desktop, mobile and intermediate responsive behaviour.
3. Obtain explicit approval.
4. Incorporate approved changes.
5. Freeze Stories before continuing.

### Phase 2 — Teachers
1. Build Teachers using Family 2.
2. Verify.
3. Obtain approval.
4. Incorporate changes.
5. Freeze before continuing.

### Phase 3 — Classrooms
1. Build Classrooms using Family 2.
2. Adapt hierarchy to classroom content rather than cloning Teachers.
3. Verify.
4. Obtain approval.
5. Freeze before continuing.

### Phase 4 — Schools
1. Build Schools using Family 2.
2. Adapt hierarchy to school culture and institutional content.
3. Verify.
4. Obtain approval.
5. Freeze before continuing.

### Phase 5 — Ideas
1. Build Ideas using Family 3.
2. Verify.
3. Obtain approval.
4. Freeze before continuing.

### Phase 6 — World
1. Build World using Family 3.
2. Adapt hierarchy to international/comparative material.
3. Verify.
4. Obtain approval.
5. Freeze before continuing.

### Phase 7 — Voices
1. Build Voices using Family 3.
2. Adapt hierarchy to first-person/human stories.
3. Verify.
4. Obtain approval.
5. Freeze before continuing.

### Phase 8 — More
1. Implement the collapsible More menu.
2. Verify Newsletter and Events top-level navigation treatment.
3. Add specialist destinations as their pages are built.
4. Verify desktop/mobile behaviour.
5. Obtain approval.

### Phase 9 — Site-wide navigation pass
1. Verify all primary navbar links.
2. Verify homepage ↔ section relationships.
3. Verify More menu behaviour.
4. Verify responsive navigation.
5. Verify no dead-end or placeholder routes remain.

## Approval rule

Only one main navbar page may be actively under construction at a time.

Do not begin the next page until the current page has been visually reviewed and explicitly approved or finalised with requested changes.

## Build constraints

- Preserve protected editorial content in content-base.md.
- Reuse existing primitives only where they genuinely fit.
- Do not force all pages into one repeated layout.
- Maintain one coherent Staffroom Review visual system.
- No unrelated homepage redesign during page construction.
- Desktop, tablet and mobile must derive from the same semantic content model while allowing deliberate layout changes by breakpoint.


## Content readiness before page approval

Each navbar page must use the editorial content system in docs/editorial-content-strategy.md.

Before a page receives visual approval, its visible story cards should use production-quality headlines, deks, format labels and realistic metadata rather than abbreviated placeholders.

After the page family is structurally approved, priority stories can move through the full article-body stage using the format-specific length bands and SEO/editorial requirements.

The dedicated newsletter and blog destinations are already scaffolded at /newsletter and /blog. They sit within the specialist-content layer and should not be allowed to become accidental variants of the seven primary page families.
