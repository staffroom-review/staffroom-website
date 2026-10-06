# Staffroom Review — Story Management, Retrieval & Verification System

## Purpose

This is the operating system for Staffroom Review stories.

It serves four functions:

1. maintain one master record for every underlying story;
2. retrieve stories by title, section, format, topic, tag, author/provenance or other metadata;
3. check every new or uploaded story for overlap with earlier work;
4. retain enough editorial history to detect future contradictions, mismatched positioning and accidental duplication.

The system is deliberately lightweight. It does not require the editor to operate a database or understand code.

## Source of truth

### Canonical story source

`data/story-registry.js` is the canonical machine-readable story index.

### Human-readable index

`docs/story-mastercopy.md` is the human-facing inventory.

### Removed stories

`docs/story-archive.md` records stories that are no longer active but should remain retrievable.

### Presentation data

Files such as `data/stories.js`, `data/teachers.js`, `data/classrooms.js`, `data/schools.js`, `data/ideas.js`, `data/world.js`, `data/voices.js` and `data/editorial.js` are presentation/content-package layers. They must not become competing master story lists.

Long-term direction: page content should progressively read from the registry rather than maintaining independent story records in every page file.

## The Story Intake Process

Every story enters through the same process, regardless of authorship.

### A. AI-written by Staffroom Review

1. The story is drafted.
2. A permanent Story ID is assigned.
3. Title, slug, format, primary page, excerpt, summary, topics, tags, author and AI involvement are recorded.
4. The story is checked against the existing registry.
5. Related matches are reviewed for overlap and possible contradiction.
6. You receive the verification result when relevant.
7. You decide whether to revise, repackage, keep it distinct or override the warning.
8. The story is uploaded only after that editorial decision.
9. The real published URL is recorded once it exists.

### B. Human-written / human-supplied story

1. You provide the manuscript or finished copy and author details.
2. The same master Story ID and metadata are created.
3. Authorship is recorded as Human Contributor (or Collaborative where appropriate).
4. AI involvement is recorded accurately; it is never inferred from appearance or assumed to be None.
5. The story is checked against the existing registry.
6. Related stories and possible contradictions are reviewed.
7. You make the final publication decision.
8. The uploaded/published URL is recorded after the story is live.

The editor does not have to maintain any registry files manually. The implementation task remains with the Staffroom Review build workflow.

## Verification is mandatory at upload

A story must not be treated as an isolated new item simply because its title is new.

Before upload, the system checks:

### 1. Duplicate check

Is this effectively the same story already present under another title or URL?

Signals include:
- exact or near-exact title;
- very similar angle;
- same central proposition;
- duplicate aliases;
- same underlying experience repackaged as a separate story without a clear editorial reason.

### 2. Content-overlap check

Could a reasonable reader experience the new story as substantially repeating an existing Staffroom story?

Check:
- central question;
- argument;
- narrative premise;
- examples/anecdotes;
- audience;
- intended takeaway;
- page/format packaging.

### 3. Contradiction check

When a related earlier story exists, compare the candidate's actual copy—not just its title—with the earlier story.

Check:
- factual claims;
- dates/numbers;
- names and institutional details;
- explanations of the same issue;
- claims about what Staffroom Review previously said;
- changes in editorial position;
- reused examples presented as new evidence.

The lightweight code utility identifies related material and triggers this deeper content comparison. It should not pretend that a simple similarity score can prove that two stories contradict one another.

### 4. Placement/mismatch check

Confirm that the candidate belongs in the requested section and format.

For example, a classroom observation may be related to Teachers but still be primarily a Classrooms story. The registry should retain one primary home and additional placements rather than duplicating the story.

## Verification outcomes

The system uses advisory outcomes:

- `no-close-match-found` — no strong related record found;
- `review-recommended` — related material exists and should be compared;
- `review-required` — strong similarity or exact-title evidence was found.

These are not publishing decisions.

## Final editorial authority

The editor is the final authority.

A verification warning can be overridden deliberately.

When you explicitly instruct Staffroom Review to upload/publish despite a warning:

- the story is not blocked;
- the story's verification result remains stored;
- `verification.override` is set to true;
- `verification.overrideNote` records that the editor chose to proceed.

This preserves both editorial freedom and an auditable reason for why a similar story was allowed.

## Retrieval

The registry supports retrieval by:

- Story ID;
- title or alias;
- section;
- format;
- tags;
- topics;
- author;
- authorship type;
- AI involvement;
- editorial status.

Typical requests:

- “Find all current Voices stories about teacher workload.”
- “Find anything we already have about timetable values.”
- “Find human-written classroom stories.”
- “Find the story about the five minutes before the bell.”
- “Show stories related to school community and belonging.”
- “Find archived stories similar to this proposed feature.”

Search should return the Story ID, title, primary section, related placements, status and real URL when available.

## Story ID rules

Format:

`SR-YYYY-NNNN`

Example:

`SR-2026-0017`

Rules:

- permanent once assigned;
- never reused;
- unchanged when the story moves sections or changes URL;
- retained in the archive.

## Slug and URL rules

The slug is descriptive and stable.

Do not invent a live URL when the story is not published.

Use:

- `articleUrl` for the actual live article URL;
- `plannedArticleUrl` for the intended future URL;
- placement URLs only to explain where the story is currently presented on a page.

A page fragment such as `/stories#teacher-leave` is a presentation location, not a canonical article URL.

## Authorship and AI provenance

Every story records:

### Author type

- Staffroom
- Human Contributor
- Collaborative

### AI involvement

- None
- AI-assisted
- AI-drafted
- AI-drafted / human-edited

These fields describe production provenance, not editorial quality.

## Controlled vocabulary

The registry uses controlled section, format and status lists. Tags may be extended through the documented tag rules rather than invented ad hoc for every story.

A new tag should be added to the controlled taxonomy only when it represents a reusable editorial concept.

## Existing placeholder inventory

The initial registry migration deliberately includes the current story propositions found across the homepage, seven navbar pages and the newsletter/blog placeholder content.

Existing source inconsistencies are recorded rather than silently erased. Two examples are flagged:
- The Invisible Curriculum
- What Good Teaching Looks Like Up Close

Both are marked as `hold` in the registry because the editorial source says hold, while the current Ideas presentation still exposes a placeholder. Resolve that state before treating either as published.

## Duplicate-package rule

A newsletter edition or blog package can be its own record when it is genuinely a separate editorial product. It should also point conceptually back to the underlying story where applicable.

Do not create a second master story merely because the same story appears in:
- a page,
- the homepage,
- a newsletter,
- a related-story module,
- search,
- an archive or collection.

## Update rule

Whenever a story changes materially:

1. update its existing Story ID;
2. do not create a new story unless the editorial concept has genuinely become a new work;
3. rerun verification if the angle, title, audience or factual claims change materially;
4. update the real URL only when it changes;
5. preserve the old URL/history when needed for redirects/archive records.

## Human-upload handoff

You do not need to prepare registry code.

A normal instruction can be:

“Upload this story by [author] to Voices.”

The build workflow then:
- reads the supplied copy;
- creates the master record;
- tags and summarises it;
- verifies related stories;
- reports the material match(s), if any;
- follows your final upload instruction;
- records the result and URL.

## Editorial safety principle

The system is designed to reduce accidental repetition and contradiction, not to make editorial decisions on the editor's behalf.

A positive match means “look at this before publishing,” not “do not publish.”

## Implementation files

- `data/story-registry.js`
- `lib/story-verification.js`
- `docs/story-mastercopy.md`
- `docs/story-archive.md`

The registry and verification utility should be updated whenever the content model changes.


## Archived stories remain in the registry

Retired stories keep their original Story ID with `editorialStatus: "archived"` in `data/story-registry.js`; `docs/story-archive.md` stores the removal details. This keeps archived work available to future verification checks without treating it as active editorial inventory.

## Newsletter relationship

The weekly newsletter uses the same Story Registry.

Before a story is included:
- retrieve the week's eligible stories;
- use Story Verification for the premium piece and any newly drafted editorial material;
- retain the Story ID of every underlying story;
- do not create a duplicate master record merely because a story appears in an email.

The two-thirds free / one-third paid balance is a newsletter presentation rule, not a new story taxonomy.

## Article page and body content model

Full-length article bodies are stored separately from the canonical story registry.

### Canonical separation

data/story-registry.js remains the source of truth for story identity, metadata, authorship/provenance, status, placement and publication state.

data/story-articles.js stores the full article body for each Story ID. This separation prevents article copy from becoming mixed with page-placement metadata and makes the same article reusable across homepage, navbar pages, search, newsletter and related-story surfaces.

### Public publication gate

A story becomes publicly readable at /stories/[slug] only when:
- its editorialStatus is published or updated; and
- a corresponding data/story-articles.js entry exists with article body blocks.

Placeholder, hold, drafting, editing, approved and scheduled records are not rendered as public article pages.

### Supported article blocks

The initial article renderer supports:
- paragraphs;
- section headings;
- pull quotes with optional attribution;
- lists;
- inline images with alt text, captions and credits;
- source notes;
- source lists.

The model can be extended later for format-specific modules without changing the Story ID or the page registry.

### Article URL rule

The canonical public article path is /stories/<story-slug>.

The Story ID remains permanent even if the title or slug changes. publication.articleUrl records the real public URL once the article is live.

### Content production rule

Full-length content is produced one **complete target page/section at a time**. Every visible story card in the target closure unit must be completed, routed and QA-checked in the same implementation release. This applies even when a story's primary section is elsewhere.

Human/editorial-designated stories are supplied separately by the human editor/contributor. Staffroom-designated stories may be drafted by the AI workflow. The only allowed partial closure is an explicitly identified human-content dependency requested by the editor; the build must never invent that manuscript.

The article-page implementation is a presentation system, not permission to publish placeholder copy as if it were finished work.


## Authorship/byline production gate — October 3, 2026

For implementation purposes, visible byline state determines who supplies the manuscript:
- **Staffroom Review** byline or **no visible byline** → Staffroom/AI-assisted article-body production is permitted, subject to verification and editorial QA.
- **Editorial** byline on a **Long Read** → human-written manuscript; AI must not invent, expand or replace the body. The Editorial Team supplies the copy.

The registry must preserve the provenance state and the article page must not imply human authorship where the Staffroom/AI workflow produced the body.

Each Staffroom-generated full-length story must also record two story-specific variation choices in variationChoices so voice selection does not collapse into a reusable template.

### Section-by-section live approval workflow

For the Homepage and all later page-family builds, production proceeds one **complete target section/page** at a time. The complete visible story set in the target closure unit is enumerated, intake-verified, expanded, routed, deployed and presented for live editorial verification as one release. No subsequent section/page may be implemented until the preceding target closure unit is explicitly approved. A story appearing in the target section is included even when its primary section or another placement belongs elsewhere.

## Authorial voice as a registry field — October 3, 2026

Authorial voice is part of story production metadata. It is not an author identity and must not be used to imply that a named human wrote a Staffroom-generated article.

Use one of the six standard voices defined in `docs/editorial-content-strategy.md`:
1. Quiet Observer
2. Systems Mapper
3. Human Portraitist
4. Evidence Interpreter
5. Working Practitioner
6. Productive Contrarian

For each full-length story, record:
- `authorialVoice`
- two story-specific variation choices
- the key verified sources/case studies used
- geography of evidence where relevant (India, international or comparative)

The voice is a drafting constraint, not a formula. The verification system must still prevent invented scenes, quotes, studies, statistics or composite case studies being presented as real.

### Byline and voice gate

- Staffroom Review/no visible byline: assign a voice and allow AI-assisted drafting within the documented format.
- Long Read with an Editorial byline: do not invent or expand the manuscript; the Editorial Team supplies the human-written text. The voice field may describe the intended editorial treatment but does not authorise AI generation.
- Human contributor byline: preserve the contributor's voice unless the editor commissions a substantive edit; do not rewrite into a Staffroom voice without editorial instruction.

### Evidence integration gate

Before publication, verify material factual claims and use authentic case studies wherever available. India-centric sections should preferentially use Indian primary/official sources, documented Indian schools/programmes and Indian research. International sections should use relevant international sources and cases. Source material should be integrated into the narrative and attributed where necessary rather than appended as a defensive disclaimer.


## Weekly evidence ledger, opening collision and route-completeness gates — October 3, 2026

The Story Management System now treats three checks as mandatory publication metadata:

### 1. Weekly source ledger
Maintain a week-scoped record of the underlying evidence sources used by published/updated stories. Do not use the same underlying source twice within the same editorial week, even if the source is linked through different URLs. Record the source identity, story ID, date used and geography.

### 2. Page-level opening ledger
For every page section, record the opening mechanism of each live story (for example: observed scene, historical moment, direct proposition, data point, dialogue, object, consequence, reported action). The first paragraph and first two sentences must be compared with other stories in that section. Adjacent stories must not share the same opening construction.

### 3. Route completeness
A story is not a live card merely because it exists in the registry. A live story card requires:
- canonical article URL;
- published/updated status;
- complete article body;
- successful route;
- correct registry-to-article mapping.

Other stories may remain placeholders while content is produced chronologically, but every story exposed as live must be independently accessible. Never allow a registry slug mismatch, missing article entry or placeholder body to produce a 404 from a live card.



## Atomic page/section closure and live-card completeness — October 6, 2026

The approval unit is the complete **visible content closure unit** currently being implemented. Before release, enumerate the cards in that page/section and confirm for every card:

1. Story Registry record and provenance are authoritative.
2. Story Intake & Verification has been completed.
3. The correct controlled format, author/byline state, voice and two variation choices are recorded.
4. The weekly source ledger and page-level opening ledger contain no unresolved collision.
5. The body is complete for the format band, unless the story is explicitly waiting for separately supplied human copy.
6. The canonical article URL, article body and registry status agree.
7. Required internal/related links, metadata and image information are complete.
8. Production route checks succeed at desktop, tablet and mobile.

Do not treat a three-story subset, “priority stories” subset, or primary-section subset as the closure unit. The entire visible target page/section is the unit of implementation and approval.


## Canonical article-body store rule — October 6, 2026

The Story Registry is authoritative for story metadata and `data/story-articles.js` is authoritative for publishable article bodies. Do not create section-specific production article stores, alternate article loaders or duplicate Story ID content files. Before deployment, merge staged work into the canonical store and verify the shared route resolves that canonical record.
