import { NextResponse } from "next/server";

export const runtime = "nodejs";

function redirect(request, status) {
  const url = new URL("/newsletter", request.url);
  url.searchParams.set("status", status);
  return NextResponse.redirect(url, { status: 303 });
}

export async function POST(request) {
  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const firstName = String(formData.get("firstName") || "").trim();
  const honey = String(formData.get("company") || "").trim();

  if (honey) return redirect(request, "subscribed");

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return redirect(request, "invalid");
  }

  if (!process.env.RESEND_API_KEY) {
    return redirect(request, "unconfigured");
  }

  const response = await fetch("https://api.resend.com/contacts", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + process.env.RESEND_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      firstName: firstName || undefined,
      unsubscribed: false,
      properties: {
        plan: "free",
        newsletter: "staffroom-letter",
        source: "staffroom-review.com",
      },
    }),
    cache: "no-store",
  });

  if (response.ok) return redirect(request, "subscribed");
  if (response.status === 409) return redirect(request, "already");

  return redirect(request, "error");
}
