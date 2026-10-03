import { createSign } from "node:crypto";

const GA_SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
const GA_ENDPOINT = "https://analyticsdata.googleapis.com/v1beta/properties";

function cleanPrivateKey(value) {
  return value?.replace(/\\n/g, "\n").trim();
}

function isConfigured() {
  return Boolean(process.env.GA4_PROPERTY_ID && process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL && process.env.GOOGLE_ANALYTICS_PRIVATE_KEY);
}

function base64Url(value) {
  return Buffer.from(value).toString("base64url");
}

async function getAccessToken() {
  const email = process.env.GOOGLE_ANALYTICS_CLIENT_EMAIL;
  const privateKey = cleanPrivateKey(process.env.GOOGLE_ANALYTICS_PRIVATE_KEY);
  const now = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64Url(JSON.stringify({
    iss: email,
    scope: GA_SCOPE,
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const unsigned = header + "." + payload;
  const signer = createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const assertion = unsigned + "." + signer.sign(privateKey, "base64url");

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });

  if (!response.ok) throw new Error("Google OAuth token request failed: " + response.status);
  const data = await response.json();
  return data.access_token;
}

async function runReport(accessToken, body) {
  const propertyId = process.env.GA4_PROPERTY_ID;
  const response = await fetch(GA_ENDPOINT + "/" + propertyId + ":runReport", {
    method: "POST",
    headers: {
      authorization: "Bearer " + accessToken,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error("GA4 report failed: " + response.status + " " + detail.slice(0, 300));
  }

  return response.json();
}

function rowValue(row, index) {
  return row?.metricValues?.[index]?.value ?? null;
}

function dimensionValue(row, index) {
  return row?.dimensionValues?.[index]?.value ?? "";
}

function numberOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function parseRows(data) {
  return data?.rows ?? [];
}

export async function getAnalyticsReport() {
  if (!isConfigured()) {
    return {
      status: "unavailable",
      reason: "GA4 server reporting is not configured.",
      overview: null,
      topContent: [],
      sections: [],
    };
  }

  try {
    const token = await getAccessToken();
    const [overview, content, sections] = await Promise.all([
      runReport(token, {
        dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
        metrics: [
          { name: "totalUsers" },
          { name: "sessions" },
          { name: "engagedSessions" },
          { name: "engagementRate" },
          { name: "averageSessionDuration" },
        ],
      }),
      runReport(token, {
        dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
        dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
        metrics: [
          { name: "screenPageViews" },
          { name: "engagementRate" },
          { name: "averageSessionDuration" },
        ],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
        limit: 10,
      }),
      runReport(token, {
        dateRanges: [{ startDate: "28daysAgo", endDate: "yesterday" }],
        dimensions: [{ name: "contentGroup" }],
        metrics: [{ name: "screenPageViews" }, { name: "engagedSessions" }],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
        limit: 20,
      }),
    ]);

    const overviewRow = parseRows(overview)[0];
    return {
      status: "measured",
      period: "Last 28 complete days",
      overview: {
        users: numberOrNull(rowValue(overviewRow, 0)),
        sessions: numberOrNull(rowValue(overviewRow, 1)),
        engagedSessions: numberOrNull(rowValue(overviewRow, 2)),
        engagementRate: numberOrNull(rowValue(overviewRow, 3)),
        averageSessionDuration: numberOrNull(rowValue(overviewRow, 4)),
      },
      topContent: parseRows(content).map((row) => ({
        path: dimensionValue(row, 0),
        title: dimensionValue(row, 1),
        views: numberOrNull(rowValue(row, 0)),
        engagementRate: numberOrNull(rowValue(row, 1)),
        averageSessionDuration: numberOrNull(rowValue(row, 2)),
      })),
      sections: parseRows(sections).map((row) => ({
        section: dimensionValue(row, 0) || "Unassigned",
        views: numberOrNull(rowValue(row, 0)),
        engagedSessions: numberOrNull(rowValue(row, 1)),
      })),
    };
  } catch (error) {
    return {
      status: "unavailable",
      reason: error instanceof Error ? error.message : "GA4 reporting failed.",
      overview: null,
      topContent: [],
      sections: [],
    };
  }
}
