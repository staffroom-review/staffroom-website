// Staffroom Review — Canonical Article Content
//
// Full article bodies live separately from data/story-registry.js.
// The registry owns metadata and provenance; this file owns article presentation
// content. Every entry is keyed by permanent Story ID.
//
// Supported blocks:
// - { type: "paragraph", text }
// - { type: "heading", level: 2, text }
// - { type: "quote", text, attribution }
// - { type: "list", items: [] }
// - { type: "image", src, alt, caption, credit, sourceUrl }
// - { type: "sourceNote", text }
//
// A story must have a content entry before it can be publicly rendered.

export const storyArticles = {};

export function getStoryArticle(storyId) {
  return storyArticles[storyId] || null;
}
