import { auth, currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import { getAnalyticsReport } from "../../lib/analytics/reporting";

export const metadata = {
  title: "Analytics | Staffroom Review",
  robots: { index: false, follow: false },
};

const canvas = "#0d1113";
const surface = "#141a1d";
const surfaceAlt = "#101619";
const ivory = "#f4efe4";
const muted = "#a8b3b4";
const subtle = "#768486";
const teal = "#37d8cf";
const amber = "#d8b36a";
const line = "rgba(244,239,228,0.11)";

function EmptyState({ label, children }) {
  return (
    <div
      style={{
        minHeight: "220px",
        border: "1px solid " + line,
        background: surfaceAlt,
        display: "grid",
        placeItems: "center",
        padding: "32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.34,
          backgroundImage:
            "linear-gradient(to right, transparent 24.8%, " +
            line +
            " 25%, transparent 25.2%, transparent 49.8%, " +
            line +
            " 50%, transparent 50.2%, transparent 74.8%, " +
            line +
            " 75%, transparent 75.2%), linear-gradient(to bottom, transparent 24.8%, " +
            line +
            " 25%, transparent 25.2%, transparent 49.8%, " +
            line +
            " 50%, transparent 50.2%, transparent 74.8%, " +
            line +
            " 75%, transparent 75.2%)",
          backgroundSize: "100% 100%",
        }}
      />
      <div style={{ position: "relative", textAlign: "center", maxWidth: "420px" }}>
        <p
          style={{
            margin: "0 0 8px",
            fontFamily: "var(--font-archivo)",
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: teal,
          }}
        >
          {label}
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-archivo)",
            fontSize: "14px",
            lineHeight: 1.6,
            color: muted,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

function MetricCard({ label, value = "—", status = "unavailable", tone = teal }) {
  return (
    <article
      style={{
        border: "1px solid " + line,
        background: surface,
        padding: "24px",
        minHeight: "138px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-archivo)",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: subtle,
          }}
        >
          {label}
        </span>
        <span
          aria-hidden="true"
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: tone,
            boxShadow: "0 0 14px " + tone,
            flexShrink: 0,
          }}
        />
      </div>

      <div>
        <div
          style={{
            fontFamily: "var(--font-archivo)",
            fontSize: "28px",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: ivory,
          }}
        >
          {value}
        </div>
        <p
          style={{
            margin: "8px 0 0",
            fontFamily: "var(--font-archivo)",
            fontSize: "12px",
            color: subtle,
          }}
        >
          {status === "measured" ? "Measured" : "Data unavailable"}
        </p>
      </div>
    </article>
  );
}

function SectionHeading({ index, title, description }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        gap: "24px",
        borderTop: "1px solid " + line,
        paddingTop: "18px",
        marginBottom: "18px",
      }}
    >
      <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
        <span
          style={{
            fontFamily: "var(--font-archivo)",
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: teal,
          }}
        >
          {index}
        </span>
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-lora)",
            fontSize: "clamp(24px, 2.8vw, 34px)",
            lineHeight: 1,
            fontWeight: 500,
            color: ivory,
          }}
        >
          {title}
        </h2>
      </div>
      <p
        style={{
          margin: 0,
          maxWidth: "460px",
          fontFamily: "var(--font-archivo)",
          fontSize: "12px",
          lineHeight: 1.5,
          color: subtle,
          textAlign: "right",
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default async function AnalyticsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in?redirect_url=/analytics");
  }

  const user = await currentUser();
  const allowedEmail = process.env.ANALYTICS_ALLOWED_EMAIL?.trim().toLowerCase();
  const primaryEmail = user?.primaryEmailAddress?.emailAddress?.trim().toLowerCase();

  if (!allowedEmail || !primaryEmail || primaryEmail !== allowedEmail) {
    notFound();
  }

  const report = await getAnalyticsReport();
  const measured = report.status === "measured";
  const overview = report.overview || {};

  return (
    <main
      style={{
        minHeight: "100vh",
        background: canvas,
        color: ivory,
        padding: "32px clamp(20px, 4vw, 64px) 72px",
      }}
    >
      <div style={{ maxWidth: "1480px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: "24px",
            paddingBottom: "24px",
            borderBottom: "1px solid " + line,
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 12px",
                fontFamily: "var(--font-archivo)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: teal,
              }}
            >
              Staffroom Review · Private Intelligence
            </p>
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-lora)",
                fontWeight: 500,
                fontSize: "clamp(42px, 6vw, 76px)",
                lineHeight: 0.94,
                letterSpacing: "-0.03em",
              }}
            >
              Analytics
            </h1>
            <p
              style={{
                margin: "14px 0 0",
                maxWidth: "660px",
                fontFamily: "var(--font-archivo)",
                fontSize: "13px",
                lineHeight: 1.6,
                color: muted,
              }}
            >
              The private reporting workspace for audience, content, discovery and
              engagement signals. The reporting connection is the next data layer.
            </p>
          </div>

          <div
            style={{
              border: "1px solid " + line,
              background: surface,
              padding: "12px 14px",
              minWidth: "190px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-archivo)",
                fontSize: "9px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: subtle,
              }}
            >
              Reporting status
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
                fontFamily: "var(--font-archivo)",
                fontSize: "12px",
                color: ivory,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: amber,
                  boxShadow: "0 0 10px " + amber,
                }}
              />
              {measured ? "Live GA4 reporting" : "Connection unavailable"}
            </div>
          </div>
        </header>

        <section style={{ paddingTop: "26px" }} aria-labelledby="overview-title">
          <SectionHeading
            index="00"
            title="Overview"
            description="A five-signal executive view. Values remain blank until they are supported by the reporting source."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            <MetricCard label="Reach" value={overview.users !== null && overview.users !== undefined ? overview.users.toLocaleString() : "—"} status={report.status} />
            <MetricCard label="Engagement" value={overview.engagementRate !== null && overview.engagementRate !== undefined ? (overview.engagementRate * 100).toFixed(1) + "%" : "—"} status={report.status} />
            <MetricCard label="Content momentum" value={overview.sessions !== null && overview.sessions !== undefined ? overview.sessions.toLocaleString() : "—"} status={report.status} />
            <MetricCard label="Search visibility" value="—" status="unavailable" tone={amber} />
            <MetricCard label="Returning readers" value="—" status="unavailable" tone={amber} />
          </div>
        </section>

        <section style={{ paddingTop: "48px" }} aria-labelledby="audience-title">
          <SectionHeading
            index="01"
            title="Audience"
            description="Audience composition, devices and trends will appear here once reporting data is connected."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "10px",
            }}
          >
            <EmptyState label="Trend chart">
              Users, sessions and engagement trends will be visualised here.
            </EmptyState>
            <EmptyState label="Audience mix">
              Audience and device composition will be visualised here.
            </EmptyState>
          </div>
        </section>

        <section style={{ paddingTop: "48px" }} aria-labelledby="content-title">
          <SectionHeading
            index="02"
            title="Content"
            description="Performance by story, section and format, tied back to the canonical Staffroom story registry."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "10px",
            }}
          >
            {report.topContent.length ? (
              <div style={{ border: "1px solid " + line, background: surface, padding: "24px" }}>
                <div style={{ fontFamily: "var(--font-archivo)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: teal }}>
                  Top content · measured
                </div>
                <ol style={{ margin: "18px 0 0", padding: 0, listStyle: "none" }}>
                  {report.topContent.slice(0, 6).map((item, index) => (
                    <li key={item.path + item.title} style={{ display: "grid", gridTemplateColumns: "28px 1fr auto", gap: "12px", alignItems: "baseline", padding: "12px 0", borderTop: index ? "1px solid " + line : "none" }}>
                      <span style={{ fontFamily: "var(--font-archivo)", fontSize: "10px", color: subtle }}>{String(index + 1).padStart(2, "0")}</span>
                      <span style={{ fontFamily: "var(--font-lora)", fontSize: "15px", lineHeight: 1.35 }}>{item.title || item.path}</span>
                      <span style={{ fontFamily: "var(--font-archivo)", fontSize: "11px", color: muted }}>{item.views?.toLocaleString() ?? "—"} views</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <EmptyState label={report.status === "unavailable" ? "Unavailable" : "Insufficient data"}>
                Top-content reporting will appear when the GA4 reporting source returns usable data.
              </EmptyState>
            )}
            <EmptyState label="Section / format">
              Bars and comparison views will show which sections and formats receive attention.
            </EmptyState>
          </div>
        </section>

        <section style={{ paddingTop: "48px" }} aria-labelledby="discovery-title">
          <SectionHeading
            index="03"
            title="Discovery / Search"
            description="Search impressions, clicks, CTR and position will be paired with clear evidence labels."
          />
          <EmptyState label="Search performance">
            Search visibility data will appear here when the Search Console reporting source is connected.
          </EmptyState>
        </section>

        <section style={{ paddingTop: "48px" }} aria-labelledby="engagement-title">
          <SectionHeading
            index="04"
            title="Engagement pathways"
            description="Newsletter, podcast and event journeys will be shown as pathways rather than isolated totals."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            <EmptyState label="Newsletter">
              A funnel will show CTA interaction through completion where available.
            </EmptyState>
            <EmptyState label="Podcasts">
              Playback interest and player interaction will be visualised here.
            </EmptyState>
            <EmptyState label="Events">
              Event interest and CTA progression will be visualised here.
            </EmptyState>
          </div>
        </section>

        <section style={{ paddingTop: "48px" }} aria-labelledby="recommendations-title">
          <SectionHeading
            index="05"
            title="Editorial recommendations"
            description="Recommendations will be derived only from measured or derived signals; they will never be presented as measured facts."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            <article
              style={{
                border: "1px solid " + line,
                background: surface,
                padding: "24px",
                minHeight: "190px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-archivo)",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: amber,
                }}
              >
                Evidence status
              </div>
              <h3
                style={{
                  margin: "14px 0 8px",
                  fontFamily: "var(--font-lora)",
                  fontWeight: 500,
                  fontSize: "22px",
                }}
              >
                Waiting for measured data
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily: "var(--font-archivo)",
                  fontSize: "12px",
                  lineHeight: 1.6,
                  color: muted,
                }}
              >
                No editorial recommendation is shown until the underlying evidence exists.
              </p>
            </article>

            <EmptyState label="Rule engine">
              Rule-based recommendations will be introduced after the reporting layer is verified.
            </EmptyState>

            <EmptyState label="Data truth">
              Every dashboard insight will be labelled measured, derived, unavailable or insufficient data.
            </EmptyState>
          </div>
        </section>
      </div>
    </main>
  );
}
