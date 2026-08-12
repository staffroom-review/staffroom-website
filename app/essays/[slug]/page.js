import { notFound } from "next/navigation";
import { featured, stories } from "../../../lib/stories";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

const allStories = [featured, ...stories];

export default async function EssayPage({ params }) {
  const { slug } = await params;
  const story = allStories.find((s) => s.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="site">
      <SiteHeader />
      <main style={{ padding: "50px 5vw 80px", maxWidth: 760, margin: "0 auto" }}>
        <div className="story-category">{story.category}</div>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "#211d16",
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
              fontSize: 18,
              lineHeight: 1.7,
              color: "#4a463c",
              marginBottom: 22,
            }}
          >
            {paragraph}
          </p>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
