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
  sections,
} from "../lib/stories";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

/* Dummy placeholder tiles — used to fill out the Conversations and
   Notes & Reviews sections so they show a full row of 3 like
   "Recent Writing" does. Delete these once you have real content,
   and just let the real .map() below render normally. */
const dummyTiles = [
  {
    id: "dummy-1",
    category: "COMING SOON",
    title: "A New Conversation, Coming Soon",
    excerpt: "This is placeholder content — swap it out once the piece is ready.",
    icon: "ti-clock",
    color: "#c9c2b2",
  },
  {
    id: "dummy-2",
    category: "COMING SOON",
    title: "Another Piece in the Works",
    excerpt: "This is placeholder content — swap it out once the piece is ready.",
    icon: "ti-clock",
    color: "#c9c2b2",
  },
  {
    id: "dummy-3",
    category: "COMING SOON",
    title: "More to Come",
    excerpt: "This is placeholder content — swap it out once the piece is ready.",
    icon: "ti-clock",
    color: "#c9c2b2",
  },
];

export default function Home() {
  return (
    <div className="site">
      <SiteHeader />
      <main>
        <section className="featured">
          <div className="eyebrow">{featured.category}</div>
          <h2>{featured.title}</h2>
          <div className="featured-grid">
            <div
              className="featured-image"
              style={{ background: featured.image.color }}
            >
              <i className={`ti ${featured.image.icon}`} aria-hidden="true"></i>
            </div>
            <div className="featured-side">
              <p className="featured-text">{featured.excerpt}</p>
              <div>
                <div className="byline">By {featured.author}</div>
                <Link className="read-link" href={`/essays/${featured.slug}`}>
                  Read the essay →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="essays">
          <div className="section-heading">
            <span>Recent writing</span>
          </div>
          <div className="stories">
            {stories.map((story) => (
              <Link className="story" href={`/essays/${story.slug}`} key={story.slug}>
                <div
                  className="story-image"
                  style={{ background: story.image.color }}
                >
                  <i className={`ti ${story.image.icon}`} aria-hidden="true"></i>
                </div>
                <div className="story-category">{story.category}</div>
                <h4>{story.title}</h4>
                <p>{story.excerpt}</p>
                <div className="read-time">{story.readTime}</div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading">
            <span>Classroom stories</span>
          </div>
          {classroomStories.map((story, i) => (
            <Link
              className={`wide-block ${i % 2 === 1 ? "reverse" : ""}`}
              href={`/essays/${story.slug}`}
              key={story.slug}
            >
              <div className="wide-image" style={{ background: story.image.color }}>
                <i className={`ti ${story.image.icon}`} aria-hidden="true"></i>
              </div>
              <div>
                <div className="wide-title">&ldquo;{story.title}&rdquo;</div>
                <div className="wide-meta">{story.excerpt}</div>
                <div className="read-time">{story.readTime}</div>
              </div>
            </Link>
          ))}
        </section>

        <section>
          <div className="section-heading">
            <span>Life beyond the classroom</span>
          </div>
          {lifeBeyond.map((story, i) => (
            <Link
              className={`wide-block ${i % 2 === 1 ? "reverse" : ""}`}
              href={`/essays/${story.slug}`}
              key={story.slug}
            >
              <div className="wide-image" style={{ background: story.image.color }}>
                <i className={`ti ${story.image.icon}`} aria-hidden="true"></i>
              </div>
              <div>
                <div className="wide-title">&ldquo;{story.title}&rdquo;</div>
                <div className="wide-meta">{story.excerpt}</div>
                <div className="read-time">{story.readTime}</div>
              </div>
            </Link>
          ))}
        </section>

        <section>
          <div className="section-heading">
            <span>Conversations</span>
          </div>
          <div className="stories">
            {conversations.map((story) => (
              <Link className="story" href={`/essays/${story.slug}`} key={story.slug}>
                <div
                  className="story-image"
                  style={{ background: story.image.color }}
                >
                  <i className={`ti ${story.image.icon}`} aria-hidden="true"></i>
                </div>
                <div className="story-category">{story.category}</div>
                <h4>{story.title}</h4>
                <p>{story.excerpt}</p>
                <div className="read-time">{story.readTime}</div>
              </Link>
            ))}
            {/* Dummy tiles filling out the row — remove once real content exists */}
            {dummyTiles.map((tile) => (
              <div className="story story-dummy" key={tile.id}>
                <div className="story-image" style={{ background: tile.color }}>
                  <i className={`ti ${tile.icon}`} aria-hidden="true"></i>
                </div>
                <div className="story-category">{tile.category}</div>
                <h4>{tile.title}</h4>
                <p>{tile.excerpt}</p>
                <div className="read-time">Placeholder</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-heading">
            <span>Letters to a young teacher</span>
          </div>
          {letters.map((letter) => (
            <Link className="letter-block" href={`/essays/${letter.slug}`} key={letter.slug}>
              <div className="letter-mark">&ldquo;</div>
              <div className="letter-title">{letter.title}</div>
              <div className="letter-excerpt">{letter.excerpt}</div>
              <div className="read-time">{letter.readTime}</div>
            </Link>
          ))}
        </section>
