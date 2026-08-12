import Link from "next/link";
import { featured, stories, sections } from "../lib/stories";

export default function Home() {
  return (
    <div className="site">
      <div className="topbar">
        <span>A journal of ideas, culture & education</span>
        <span>Issue No. 01</span>
      </div>
      <header>
        <h1 className="masthead">Staffroom Review</h1>
        <p className="tagline">
          Writing on education, literature, culture and the ideas that shape
          the way we see the world.
        </p>
        <nav>
          <a href="#essays">Essays</a>
          <a href="#essays">Reviews</a>
          <a href="#essays">Ideas</a>
          <a href="#culture">Culture</a>
          <a href="#essays">Teaching</a>
          <a href="#about">About</a>
        </nav>
      </header>
      <main>
        <section className="featured">
          <div className="eyebrow">{featured.category}</div>
          <div className="featured-grid">
            <div>
              <h2>{featured.title}</h2>
            </div>
            <div>
              <p className="featured-text">{featured.excerpt}</p>
              <div className="byline">By {featured.author}</div>
              <Link className="read-link" href={`/essays/${featured.slug}`}>
                Read the essay →
              </Link>
            </div>
          </div>
        </section>
        <section id="essays">
          <div className="section-heading">
            <h3>Recent writing</h3>
            <span>Explore the journal</span>
          </div>
          <div className="stories">
            {stories.map((story) => (
              <article className="story" key={story.slug}>
                <div className="story-category">{story.category}</div>
                <h4>{story.title}</h4>
                <p>{story.excerpt}</p>
                <Link className="read-link" href={`/essays/${story.slug}`}>
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </section>
        <section className="explore" id="culture">
          <h3>Explore Staffroom Review</h3>
          <div className="section-links">
            {sections.map((section) => (
              <a href="#essays" key={section}>
                {section}
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer id="about">
        <div>
          <div className="footer-title">Staffroom Review</div>
          <div>
            A journal for teachers, readers, writers and curious minds.
          </div>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#submissions">Submissions</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
