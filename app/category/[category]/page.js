import Link from "next/link";
import {
  featured,
  stories,
  classroomStories,
  lifeBeyond,
  conversations,
  letters,
  verse,
  notesReviews,
} from "../../../lib/stories";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

const allStories = [
  featured,
  ...stories,
  ...classroomStories,
  ...lifeBeyond,
  ...conversations,
  ...letters,
  ...verse,
  ...notesReviews,
];

const categoryLabels = {
  essays: "Essays",
  reviews: "Reviews",
  ideas: "Ideas",
  culture: "Culture",
  teaching: "Teaching",
  conversations: "Conversations",
};

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const label = categoryLabels[category] || category;

  const matches = allStories.filter(
    (story) => story.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="site">
      <SiteHeader />
      <main style={{ padding: "50px 5vw 80px" }}>
        <h1
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(30px, 4vw, 44px)",
            color: "#26241f",
            letterSpacing: "-0.01em",
            marginBottom: 40,
          }}
        >
          {label}
        </h1>
        {matches.length === 0 ? (
          <p style={{ fontFamily: "Georgia, serif", fontSize: 17, color: "#6b665c" }}>
            No stories in this section yet — check back soon.
          </p>
        ) : (
          <div className="stories">
            {matches.map((story) => (
              <Link className="story" href={`/essays/${story.slug}`} key={story.slug}>
                {story.image && (
                  <div
                    className="story-image"
                    style={{ background: story.image.color }}
                  >
                    <i className={`ti ${story.image.icon}`} aria-hidden="true"></i>
                  </div>
                )}
                <div className="story-category">{story.category}</div>
                <h4>{story.title}</h4>
                <p>{story.excerpt}</p>
                <div className="read-time">{story.readTime}</div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
