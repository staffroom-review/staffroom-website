import Link from "next/link";
import { conversations } from "../../../lib/stories";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

/* Placeholder interviews shown when there are fewer than 3 real ones.
   Delete an entry here once a real interview replaces it. */
const placeholderConversations = [
  {
    slug: null,
    title: "Coming soon",
    excerpt: "This is placeholder content — swap it out once the interview is ready.",
    readTime: "Placeholder",
  },
  {
    slug: null,
    title: "Coming soon",
    excerpt: "This is placeholder content — swap it out once the interview is ready.",
    readTime: "Placeholder",
  },
];

export default function ConversationsPage() {
  const [featured, ...rest] = conversations;
  const listItems = [...rest, ...placeholderConversations].slice(
    0,
    Math.max(2, rest.length)
  );

  return (
    <div className="site">
      <SiteHeader />
      <main>
        <div className="category-hero">
          <div className="category-meta-row">
            <span>Conversations</span>
            <span>{conversations.length} {conversations.length === 1 ? "interview" : "interviews"}</span>
          </div>
          <h1 className="category-title">Conversations</h1>
          <p className="category-description">
            Interviews with teachers, writers and thinkers on the work of education.
          </p>
        </div>

        {featured && (
          <div className="conv-featured-wrap">
            <Link className="conv-featured" href={`/essays/${featured.slug}`}>
              <div
                className="conv-featured-image"
                style={{ background: featured.image?.color || "#ddd8cd" }}
              >
                {featured.image?.icon ? (
                  <i className={`ti ${featured.image.icon}`} aria-hidden="true"></i>
                ) : (
                  <i className="ti ti-photo" aria-hidden="true"></i>
                )}
              </div>
              <div className="story-category" style={{ marginTop: 22 }}>
                Featured conversation
              </div>
              <h2 className="conv-featured-title">{featured.title}</h2>
              <p className="conv-featured-excerpt">{featured.excerpt}</p>
              <div className="read-time">
                Interview by {featured.author} — {featured.readTime}
              </div>
            </Link>
          </div>
        )}

        <div className="conv-list">
          {listItems.map((item, i) => {
            const content = (
              <>
                <div className="conv-portrait">
                  <i className="ti ti-user" aria-hidden="true"></i>
                </div>
                <div className="conv-row-body">
                  <div className="story-category">Conversations</div>
                  <h3 className="conv-row-title">{item.title}</h3>
                  <p className="conv-row-excerpt">{item.excerpt}</p>
                  <div className="read-time">{item.readTime}</div>
                </div>
              </>
            );

            return item.slug ? (
              <Link className="conv-row" href={`/essays/${item.slug}`} key={item.slug}>
                {content}
              </Link>
            ) : (
              <div className="conv-row conv-row-placeholder" key={`conv-placeholder-${i}`}>
                {content}
              </div>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
