import { auth, currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Analytics | Staffroom Review",
  robots: { index: false, follow: false },
};

export default async function AnalyticsPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const user = await currentUser();
  const allowedEmail = process.env.ANALYTICS_ALLOWED_EMAIL?.trim().toLowerCase();
  const primaryEmail = user?.primaryEmailAddress?.emailAddress?.trim().toLowerCase();

  if (!allowedEmail || !primaryEmail || primaryEmail !== allowedEmail) {
    notFound();
  }

  return (
    <main style={{ minHeight: "100vh", background: "#101416", color: "#f4efe4", padding: "48px clamp(24px, 5vw, 80px)" }}>
      <section style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-archivo)", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.65 }}>
          Staffroom Review · Private Intelligence
        </p>
        <h1 style={{ fontFamily: "var(--font-lora)", fontWeight: 500, fontSize: "clamp(42px, 6vw, 76px)", lineHeight: 0.98, maxWidth: "760px", margin: "20px 0 16px" }}>
          Analytics
        </h1>
        <p style={{ fontFamily: "var(--font-archivo)", maxWidth: "620px", color: "#b9c3c3", fontSize: "16px", lineHeight: 1.6 }}>
          Private access is active. The visual analytics console will be built in the next checkpoint.
        </p>
      </section>
    </main>
  );
}
