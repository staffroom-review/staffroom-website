import Link from "next/link";
import { notFound } from "next/navigation";
import { featured, stories } from "../../../lib/stories";

const allStories = [featured, ...stories];

export default async function EssayPage({ params }) {
  const { slug } = await params;
  const story = allStories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="site">
      <header style={{ padding: "42px 5vw 28px", borderBottom: "1px solid #171717" }}>
        <Link
          href="/"
          style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}
        >
          ← Back to Staffroom Review
        </Link>
      </header>
      <main style={{ padding: "50px 5vw 80px", maxWidth: 760, margin: "0 auto" }}>
        <div className="story-category">{story.category}</div>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "18px 0",
          }}
        >
          {story.title}
        </h1>
        <div className="byline" style={{ margin: "0 0 40px" }}>
          By {story.author}
        </div>
        {story.body.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 19,
              lineHeight: 1.6,
              color: "#333",
              marginBottom: 22,
            }}
          >
            {paragraph}
          </p>
        ))}
      </main>
    </div>
  );
}
