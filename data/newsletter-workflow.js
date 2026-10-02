// Staffroom Review — Weekly Newsletter Workflow State
//
// sendArmed must remain false until the editor explicitly activates the issue
// after both approval stages and all required checks have passed.

export const currentNewsletter = {
  issueId: null,
  weekStart: null,
  weekEnd: null,
  sendAt: null,
  status: "draft",
  subject: "",
  previewText: "",
  freeIntro: "",
  freeStoryIds: [],
  premiumStoryId: null,
  premiumTeaser: "",
  premiumBodyHtml: "",
  finalReviewText: "",
  approvals: {
    editorial: { approved: false, approvedAt: null, note: "" },
    final: { approved: false, approvedAt: null, note: "" },
  },
  checks: {
    preflight: { status: "not-run", checkedAt: null, notes: [] },
    final: { status: "not-run", checkedAt: null, notes: [] },
  },
  sendArmed: false,
  activatedAt: null,
  sentAt: null,
};

export const NEWSLETTER_WORKFLOW_RULES = {
  freeContentShareTarget: 2 / 3,
  premiumContentShareTarget: 1 / 3,
  ratioTolerance: 0.08,
  defaultSendTimezone: "Asia/Kolkata",
  defaultSendDay: "Sunday",
  defaultSendLocalTime: "09:00",
  minimumFreeStories: 2,
  maximumFreeStories: 5,
  freeContactAlertThreshold: 750,
};
