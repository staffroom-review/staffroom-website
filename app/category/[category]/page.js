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

const categoryDescriptions = {
  essays: "Longer-form writing on education, literature and the ideas that shape how we teach and learn.",
  reviews: "Notes and second thoughts on the books that pass through the staffroom.",
  ideas: "Arguments, provocations and open questions worth sitting with.",
  culture: "On identity, rest, and the life that exists outside the classroom door.",
  teaching: "Craft notes, classroom accounts, and letters for teachers at every stage.",
  conversations: "Interviews with teachers, writers and thinkers on the work of education.",
};

/* Placeholder rows shown when a category has fewer than 3 real pieces.
   Delete this array, and the padding logic below that uses it, once
   every category has enough real content of its own. */
const placeholderRows = [
  {
    slug: null,
    title: "A new piece, coming soon",
    excerpt: "This is placeholder content — swap it out once the piece is ready.",
    author: "Staffroom Review",
    readTime: "Coming soon",
    image: { icon: "ti-clock", color: "#c9c2b2" },
  },
  {
    slug: null,
    title: "More from this section soon",
    excerpt: "This is placeholder content — swap it out once the piece is ready.",
    author: "Staffroom Review",
    readTime: "Coming soon",
    image: { icon: "ti-clock", color: "#c9c2b2" },
  },
  {
    slug: null,
    title: "Another piece in the works",
    excerpt: "This is placeholder content — swap it out once the piece is ready.",
    author: "Staffroom Review",
    readTime: "Coming soon",
    image: { icon: "ti-clock", color: "#c9c2b2" },
  },
];

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const key = category.toLowerCase();
  const label = categoryLabels[key] || category;
  const description = categoryDescriptions[key] || "A collection of writing from Staffroom Review.";

  const matches = allStories.filter(
    (story) => story.category.toLowerCase() === key
  );

  const padded =
    matches.length >= 3 ? matches : [...matches, ...placeholderRows.slice(0, 3 - matches.length)];

  return (
    <div className="site">
      <SiteHeader />
      <main>
        <div className="category-hero">
          <div className="category-meta-row">
            <span>{label}</span>
            <span>{matches.length} {matches.length === 1 ? "piece" : "pieces"}</span>
          </div>
          <h1 className="category-title">{label}</h1>
          <p className="category-description">{description}</p>
        </div>

        <div className="category-list">
          {padded.map((story, i) => {
            const content = (
              <>
                <span className="category-row-index">{String(i + 1).padStart(2, "0")}</span>
                <div
                  className="category-row-image"
                  style={{ background: story.image?.color || "#ddd8cd" }}
                >
                  {story.image?.icon && (
                    <i className={`ti ${story.image.icon}`} aria-hidden="true"></i>
                  )}
                </div>
                <div className="category-row-body">
                  <div className="story-category">{story.category || label}</div>
                  <h3 className="category-row-title">{story.title}</h3>
                  <p className="category-row-excerpt">{story.excerpt}</p>
                  <div className="read-time">
                    By {story.author} — {story.readTime}
                  </div>
                </div>
              </>
            );

            return story.slug ? (
              <Link
                className="category-row"
                href={`/essays/${story.slug}`}
                key={story.slug}
              >
                {content}
              </Link>
            ) : (
              <div className="category-row category-row-placeholder" key={`placeholder-${i}`}>
                {content}
              </div>
            );
          })}
        </div>

        {matches.length === 0 && (
          <p className="category-empty-note">
            No pieces published in this section yet — the rows above are placeholders.
          </p>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
