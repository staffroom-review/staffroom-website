import Link from "next/link";
import { featured, stories, sections } from "../lib/stories";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

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

        <section className="explore" id="culture">
          <h3>Explore Staffroom Review</h3>
          <div className="section-links">
            {sections.map((section) => (
              <Link href={`/category/${section.toLowerCase()}`} key={section}>
                {section}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
