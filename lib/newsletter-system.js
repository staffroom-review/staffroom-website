import { storyRegistry, getStoryById } from "../data/story-registry";
import { verifyStory } from "./story-verification";

export function countWords(value = "") {
  return value.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

export function getPublishedStoriesForWeek(weekStart, weekEnd) {
  const start = new Date(weekStart);
  const end = new Date(weekEnd);

  return storyRegistry.filter((story) => {
    const publishedAt = story.publication?.publishedAt;
    return story.editorialStatus === "published" &&
      story.publication?.newsletterEligible === true &&
      story.publication?.articleUrl &&
      publishedAt &&
      new Date(publishedAt) >= start &&
      new Date(publishedAt) <= end;
  });
}

const formatPriority = new Map([
  ["Long Read", 100],
  ["Reported Feature", 95],
  ["First Person", 90],
  ["Profile", 85],
  ["Interview / Q&A", 80],
  ["Analysis", 75],
  ["Practical Guide", 70],
  ["Essay", 65],
]);

export function curateNewsletterCandidates(weekStart, weekEnd, limit = 5) {
  const ranked = [...getPublishedStoriesForWeek(weekStart, weekEnd)].sort(
    (a, b) => (formatPriority.get(b.format) || 50) - (formatPriority.get(a.format) || 50),
  );
  const selected = [];
  const sections = new Set();

  for (const story of ranked) {
    if (selected.length >= limit) break;
    if (!sections.has(story.primarySection) || selected.length >= 3) {
      selected.push(story);
      sections.add(story.primarySection);
    }
  }
  return selected;
}

export function validateNewsletterDraft(draft) {
  const issues = [];
  const warnings = [];
  const freeIds = Array.isArray(draft?.freeStoryIds) ? draft.freeStoryIds : [];
  const freeStories = [...new Set(freeIds)].map(getStoryById).filter(Boolean);

  if (!draft?.issueId) issues.push("Missing newsletter issue ID.");
  if (!draft?.subject?.trim()) issues.push("Missing subject line.");
  if (!draft?.weekStart || !draft?.weekEnd) issues.push("Missing publication week boundaries.");
  if (freeIds.length !== new Set(freeIds).size) issues.push("Free-story list contains duplicate Story IDs.");
  if (freeIds.length < 2 || freeIds.length > 5) issues.push("Newsletter must curate between 2 and 5 free stories.");
  if (freeStories.length !== new Set(freeIds).size) issues.push("One or more free-story IDs do not exist.");

  if (draft.weekStart && draft.weekEnd) {
    const weekIds = new Set(getPublishedStoriesForWeek(draft.weekStart, draft.weekEnd).map((story) => story.id));
    for (const story of freeStories) {
      if (!weekIds.has(story.id)) issues.push("Free story " + story.id + " is not an eligible story for this week.");
    }
  }

  const premiumStory = draft.premiumStoryId ? getStoryById(draft.premiumStoryId) : null;
  if (!premiumStory) issues.push("Missing or invalid premium Story ID.");

  const freeWords = countWords([
    draft.freeIntro,
    ...freeStories.map((story) => story.excerpt),
    draft.freeClosing,
  ].filter(Boolean).join(" "));
  const premiumWords = countWords(draft.premiumBodyHtml || "");
  const totalWords = freeWords + premiumWords;
  const freeShare = totalWords ? freeWords / totalWords : 0;

  if (premiumWords < 150) warnings.push("Premium section is short; confirm it offers substantial paid value.");
  if (totalWords && Math.abs(freeShare - 2 / 3) > 0.08) issues.push("Free/paid content balance is outside the target range.");

  if (premiumStory) {
    const verification = verifyStory({
      id: premiumStory.id,
      title: premiumStory.title,
      dek: premiumStory.excerpt,
      excerpt: premiumStory.excerpt,
      editorialSummary: premiumStory.editorialSummary,
      tags: premiumStory.tags,
      topics: premiumStory.topics,
      primarySection: premiumStory.primarySection,
    });
    if (verification.overlap === "high") warnings.push("Premium story has a strong overlap signal; compare matched Staffroom stories.");
    if (verification.overlap === "possible") warnings.push("Premium story has a related-story signal; review angle and claims.");
  }

  return {
    valid: issues.length === 0,
    issues,
    warnings,
    metrics: {
      freeStoryCount: freeStories.length,
      freeWords,
      premiumWords,
      freeShare,
      premiumShare: totalWords ? premiumWords / totalWords : 0,
    },
  };
}

const esc = (value = "") =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function renderNewsletterEmail(draft, variant) {
  const freeStories = (draft.freeStoryIds || []).map(getStoryById).filter(Boolean);
  const premiumStory = draft.premiumStoryId ? getStoryById(draft.premiumStoryId) : null;

  const storyHtml = freeStories.map((story) =>
    '<tr><td style="padding:0 0 24px;">' +
      '<div style="font:700 11px Arial,sans-serif;letter-spacing:1.6px;text-transform:uppercase;color:#b74336;margin-bottom:7px;">' + esc(story.format) + '</div>' +
      '<a href="' + esc(story.publication.articleUrl) + '" style="font:700 22px Georgia,serif;line-height:1.2;color:#2e2020;text-decoration:none;">' + esc(story.title) + '</a>' +
      '<p style="font:14px/1.55 Arial,sans-serif;color:#6c605e;margin:8px 0 0;">' + esc(story.excerpt) + '</p>' +
    '</td></tr>'
  ).join("");

  let premiumHtml = "";
  if (premiumStory && variant === "paid") {
    premiumHtml =
      '<tr><td style="padding:28px 0 0;border-top:4px solid #b74336;">' +
      '<div style="font:700 11px Arial,sans-serif;letter-spacing:1.8px;text-transform:uppercase;color:#b74336;margin-bottom:8px;">For paid members</div>' +
      '<h2 style="font:700 27px/1.14 Georgia,serif;color:#2e2020;margin:0 0 10px;">' + esc(premiumStory.title) + '</h2>' +
      '<p style="font:14px/1.55 Arial,sans-serif;color:#6c605e;margin:0 0 18px;">' + esc(draft.premiumTeaser || premiumStory.excerpt) + '</p>' +
      '<div style="font:15px/1.72 Georgia,serif;color:#2e2020;">' + (draft.premiumBodyHtml || "") + '</div>' +
      '</td></tr>';
  } else if (premiumStory) {
    premiumHtml =
      '<tr><td style="padding:28px 0 0;border-top:4px solid #b74336;">' +
      '<div style="font:700 11px Arial,sans-serif;letter-spacing:1.8px;text-transform:uppercase;color:#b74336;margin-bottom:8px;">Paid member edition</div>' +
      '<h2 style="font:700 25px/1.15 Georgia,serif;color:#2e2020;margin:0 0 10px;">' + esc(premiumStory.title) + '</h2>' +
      '<p style="font:14px/1.55 Arial,sans-serif;color:#6c605e;margin:0;">' + esc(draft.premiumTeaser || premiumStory.excerpt) + '</p>' +
      '</td></tr>';
  }

  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' +
    esc(draft.subject) + '</title></head><body style="margin:0;background:#f5f0ee;color:#2e2020;">' +
    '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td align="center" style="padding:28px 14px;">' +
    '<table role="presentation" width="100%" style="max-width:640px;background:#fffdfa;" cellspacing="0" cellpadding="0" border="0">' +
    '<tr><td style="padding:30px 32px 22px;border-bottom:1px solid #d7cecb;"><div style="font:700 24px Georgia,serif;letter-spacing:-.04em;">Staffroom <span style="color:#b74336;font-style:italic;">Review</span></div><div style="font:10px Arial,sans-serif;letter-spacing:1.8px;text-transform:uppercase;color:#8c817f;margin-top:8px;">The Staffroom Letter</div></td></tr>' +
    '<tr><td style="padding:36px 32px 14px;"><div style="font:700 11px Arial,sans-serif;letter-spacing:1.8px;text-transform:uppercase;color:#b74336;margin-bottom:10px;">This week</div><h1 style="font:700 36px/1.08 Georgia,serif;color:#2e2020;margin:0 0 14px;">' +
    esc(draft.subject) + '</h1><p style="font:15px/1.55 Arial,sans-serif;color:#6c605e;margin:0;">' + esc(draft.previewText || "") + '</p></td></tr>' +
    '<tr><td style="padding:22px 32px 8px;"><p style="font:16px/1.7 Georgia,serif;color:#2e2020;margin:0;">' + esc(draft.freeIntro || "") + '</p></td></tr>' +
    '<tr><td style="padding:24px 32px 0;"><div style="height:5px;background:#b74336;margin-bottom:22px;"></div>' + storyHtml + premiumHtml + '</td></tr>' +
    '<tr><td style="padding:30px 32px 34px;border-top:1px solid #d7cecb;"><p style="font:12px/1.5 Arial,sans-serif;color:#8c817f;margin:0 0 12px;">You are receiving The Staffroom Letter because you subscribed to Staffroom Review.</p><p style="font:12px/1.5 Arial,sans-serif;color:#8c817f;margin:0;"><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#6c605e;">Unsubscribe</a></p></td></tr>' +
    '</table></td></tr></table></body></html>';
}

export function runNewsletterPreflight(draft) {
  return validateNewsletterDraft(draft);
}

export function runNewsletterFinalCheck(draft) {
  const preflight = validateNewsletterDraft(draft);
  const issues = [...preflight.issues];
  const warnings = [...preflight.warnings];

  if (draft?.approvals?.editorial?.approved !== true) issues.push("Editorial approval has not been recorded.");
  if (!draft?.finalReviewText?.trim()) warnings.push("Final review note is empty.");
  if (!draft?.subject?.trim() || draft.subject.length > 70) issues.push("Subject line is missing or exceeds 70 characters.");

  return { valid: issues.length === 0, issues, warnings, metrics: preflight.metrics };
}
