import { currentNewsletter } from "../../../../data/newsletter-workflow";
import { renderNewsletterEmail, runNewsletterFinalCheck } from "../../../../lib/newsletter-system";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

async function resendRequest(path, options = {}) {
  return fetch("https://api.resend.com" + path, {
    ...options,
    headers: {
      Authorization: "Bearer " + process.env.RESEND_API_KEY,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
  });
}

async function broadcastExists(subject, segmentId) {
  const response = await resendRequest("/broadcasts?limit=100");
  if (!response.ok) return false;
  const payload = await response.json();
  return (payload.data || []).some((broadcast) =>
    broadcast.subject === subject &&
    (!segmentId || broadcast.segment_id === segmentId || broadcast.segmentId === segmentId) &&
    ["sent", "queued", "scheduled"].includes(String(broadcast.status || "").toLowerCase())
  );
}

export async function GET(request) {
  const expected = process.env.CRON_SECRET;

  if (!expected || request.headers.get("authorization") !== "Bearer " + expected) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  if (!currentNewsletter.sendArmed) return Response.json({ ok: true, action: "no-op", reason: "send-not-armed" });
  if (!currentNewsletter.sendAt || new Date(currentNewsletter.sendAt) > now) {
    return Response.json({ ok: true, action: "no-op", reason: "not-due" });
  }

  if (currentNewsletter.approvals?.editorial?.approved !== true ||
      currentNewsletter.approvals?.final?.approved !== true) {
    return Response.json({ ok: false, error: "Both approvals are required." }, { status: 409 });
  }

  if (currentNewsletter.checks?.preflight?.status !== "passed" ||
      currentNewsletter.checks?.final?.status !== "passed") {
    return Response.json({ ok: false, error: "Both newsletter checks must pass." }, { status: 409 });
  }

  const finalCheck = runNewsletterFinalCheck(currentNewsletter);
  if (!finalCheck.valid) {
    return Response.json({ ok: false, error: "Runtime final check failed.", issues: finalCheck.issues }, { status: 409 });
  }

  const required = ["RESEND_API_KEY", "RESEND_FROM_EMAIL", "RESEND_FREE_SEGMENT_ID", "RESEND_PAID_SEGMENT_ID"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    return Response.json({ ok: false, error: "Newsletter service is not configured.", missing }, { status: 503 });
  }

  const variants = [
    { type: "free", segment: process.env.RESEND_FREE_SEGMENT_ID },
    { type: "paid", segment: process.env.RESEND_PAID_SEGMENT_ID },
  ];

  const results = [];

  for (const variant of variants) {
    if (await broadcastExists(currentNewsletter.subject, variant.segment)) {
      results.push({ variant: variant.type, action: "already-sent" });
      continue;
    }

    const response = await resendRequest("/broadcasts", {
      method: "POST",
      body: JSON.stringify({
        segmentId: variant.segment,
        from: process.env.RESEND_FROM_EMAIL,
        subject: currentNewsletter.subject,
        html: renderNewsletterEmail(currentNewsletter, variant.type),
        send: true,
      }),
    });

    const payload = await response.json();

    if (!response.ok) {
      return Response.json({
        ok: false,
        action: "partial-or-failed-send",
        results,
        failedVariant: variant.type,
        provider: payload,
      }, { status: 502 });
    }

    results.push({ variant: variant.type, action: "sent", broadcastId: payload.id || null });
  }

  return Response.json({
    ok: true,
    action: "newsletter-processed",
    issueId: currentNewsletter.issueId,
    results,
  });
}
