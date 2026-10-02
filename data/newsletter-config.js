export const newsletterConfig = {
  name: "The Staffroom Letter",
  cadence: "Weekly",
  sendDay: "Sunday",
  sendLocalTime: "09:00",
  timezone: "Asia/Kolkata",
  audienceModel: {
    free: {
      label: "Free",
      contentShare: "2/3",
      segmentEnvironmentVariable: "RESEND_FREE_SEGMENT_ID",
    },
    paid: {
      label: "Paid",
      contentShare: "1/3",
      segmentEnvironmentVariable: "RESEND_PAID_SEGMENT_ID",
    },
  },
  freeContactAlertThreshold: 750,
  freeContactLimit: 1000,
  upgradeReviewTrigger: 750,
  approval: {
    editorial: "Editor approves the final editorial draft.",
    final: "Editor approves the final rendered send version.",
    activation: "Editor explicitly activates the scheduled send after both approvals.",
  },
};
