// Staffroom Review — Story Retrieval & Verification
//
// This utility is advisory. It identifies likely duplicates, close thematic overlap
// and records that a content-level comparison is required when appropriate.
// It never overrides the editor's decision to publish.

import {
  storyRegistry,
  searchStories,
} from "../data/story-registry";

const STOP_WORDS = new Set([
  "the","a","an","and","or","of","to","in","on","for","with","from","what",
  "when","why","how","is","are","it","this","that","teachers","teacher",
  "school","schools","classroom","classrooms",
]);

function tokens(value = "") {
  return new Set(
    value
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 2 && !STOP_WORDS.has(token)),
  );
}

function jaccard(a, b) {
  if (!a.size && !b.size) return 0;
  const intersection = [...a].filter((item) => b.has(item)).length;
  const union = new Set([...a, ...b]).size;
  return union ? intersection / union : 0;
}

function similarity(candidate, existing) {
  const candidateTitle = tokens(candidate.title);
  const existingTitle = tokens(existing.title);
  const candidateBody = tokens([
    candidate.title,
    candidate.dek,
    candidate.excerpt,
    candidate.editorialSummary,
  ].join(" "));
  const existingBody = tokens([
    existing.title,
    existing.dek,
    existing.excerpt,
    existing.editorialSummary,
  ].join(" "));
  const candidateTags = new Set((candidate.tags || []).map((tag) => tag.toLowerCase()));
  const existingTags = new Set(existing.tags.map((tag) => tag.toLowerCase()));

  const titleScore = jaccard(candidateTitle, existingTitle);
  const bodyScore = jaccard(candidateBody, existingBody);
  const tagScore = jaccard(candidateTags, existingTags);
  const samePrimarySection =
    candidate.primarySection &&
    candidate.primarySection === existing.primarySection
      ? 0.08
      : 0;

  const score = titleScore * 0.5 + bodyScore * 0.35 + tagScore * 0.15 + samePrimarySection;

  return {
    score: Math.min(score, 1),
    titleScore,
    bodyScore,
    tagScore,
  };
}

export function retrieveRelatedStories(candidate, limit = 8) {
  const query = [
    candidate.title,
    candidate.dek,
    candidate.excerpt,
    candidate.editorialSummary,
    ...(candidate.tags || []),
    ...(candidate.topics || []),
  ]
    .filter(Boolean)
    .join(" ");

  const broadMatches = searchStories(query).map((story) => story.id);
  const ordered = storyRegistry
    .filter((story) => !candidate.id || story.id !== candidate.id)
    .map((story) => ({
      story,
      ...similarity(candidate, story),
      broadHit: broadMatches.includes(story.id),
    }))
    .sort((a, b) => b.score - a.score || Number(b.broadHit) - Number(a.broadHit));

  return ordered.slice(0, limit);
}

export function verifyStory(candidate) {
  const related = retrieveRelatedStories(candidate, 8);
  const strongest = related[0] || null;

  let overlap = "none";
  if (strongest?.score >= 0.78) overlap = "high";
  else if (strongest?.score >= 0.52) overlap = "possible";

  const exactTitle = strongest
    ? [strongest.story.title, ...strongest.story.aliases]
        .map((value) => value.toLowerCase())
        .includes((candidate.title || "").toLowerCase())
    : false;

  if (exactTitle) overlap = "high";

  return {
    outcome: overlap === "high" ? "review-required" : overlap === "possible" ? "review-recommended" : "no-close-match-found",
    overlap,
    strongestMatch: strongest
      ? {
          id: strongest.story.id,
          title: strongest.story.title,
          score: Number(strongest.score.toFixed(3)),
          titleScore: Number(strongest.titleScore.toFixed(3)),
          bodyScore: Number(strongest.bodyScore.toFixed(3)),
          tagScore: Number(strongest.tagScore.toFixed(3)),
        }
      : null,
    relatedStories: related.map((item) => ({
      id: item.story.id,
      title: item.story.title,
      score: Number(item.score.toFixed(3)),
    })),
    contradictionCheck: strongest
      ? "content-comparison-required"
      : "not-triggered",
    recommendation:
      overlap === "high"
        ? "Compare the full candidate against the matched story before publication. A duplicate or materially overlapping angle may already exist."
        : overlap === "possible"
          ? "Compare the candidate with the strongest related stories for angle, claims, examples and intended audience. Repackage only when the editorial distinction is clear."
          : "Proceed to normal editorial QA; still check factual claims against related published work when relevant.",
    userAuthority: "Editor may override this result and proceed with upload. Record the override.",
  };
}

export function validateStoryRegistry() {
  const ids = new Set();
  const slugs = new Set();
  const errors = [];
  const warnings = [];

  for (const story of storyRegistry) {
    if (ids.has(story.id)) errors.push(`Duplicate Story ID: ${story.id}`);
    ids.add(story.id);

    if (slugs.has(story.slug)) warnings.push(`Duplicate slug: ${story.slug}`);
    slugs.add(story.slug);

    if (!story.title) errors.push(`Missing title: ${story.id}`);
    if (!story.primarySection) errors.push(`Missing primary section: ${story.id}`);
    if (!story.editorialStatus) errors.push(`Missing editorial status: ${story.id}`);
    if (!story.authorship?.authorType) errors.push(`Missing author type: ${story.id}`);
    if (!story.authorship?.aiInvolvement) errors.push(`Missing AI involvement: ${story.id}`);
  }

  return { valid: errors.length === 0, errors, warnings };
}

/*
Required upload sequence:

1. Create/receive the candidate story.
2. Build its metadata and provisional Story ID.
3. Run retrieveRelatedStories()/verifyStory() against the existing registry.
4. Review high/possible matches for:
   - same story concept
   - same central argument or experience
   - repeated examples/anecdotes
   - conflicting factual claims
   - audience/page mismatch
   - accidental contradiction with an earlier Staffroom story
5. Show the editor the material matches and the reason for the flag.
6. The editor decides:
   - revise/reposition,
   - keep as distinct,
   - or explicitly override the warning and publish/upload anyway.
7. Record the outcome and any override in the new story's verification field.
8. Only then add/update the story's published URL and presentation placement.
*/
