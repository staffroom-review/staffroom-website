const featured = {
  category: "FEATURED ESSAY",
  title: "The Things We Learn When We Stop Trying to Learn",
  excerpt:
    "Education is often described as the acquisition of knowledge. But perhaps its deeper purpose lies elsewhere: in changing the way we attend to the world.",
  author: "Staffroom Review",
};

const stories = [
  {
    category: "ESSAYS",
    title: "What Does It Mean to Read Closely?",
    excerpt:
      "On attention, interpretation, and the curious discipline of taking a sentence seriously.",
  },
  {
    category: "CULTURE",
    title: "The Quiet Life of the School Library",
    excerpt:
      "Libraries are more than repositories of books. They are places where intellectual life learns to become communal.",
  },
  {
    category: "REVIEWS",
    title: "Reading Against the Grain",
    excerpt:
      "A review of books that refuse to give their readers easy answers.",
  },
];

const sections = [
  "Essays",
  "Reviews",
  "Ideas",
  "Culture",
  "Teaching",
];

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
          <a href="#reviews">Reviews</a>
          <a href="#ideas">Ideas</a>
          <a href="#culture">Culture</a>
          <a href="#teaching">Teaching</a>
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

              <a className="read-link" href="#read">
                Read the essay →
              </a>
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
              <article className="story" key={story.title}>
                <div className="story-category">{story.category}</div>

                <h4>{story.title}</h4>

                <p>{story.excerpt}</p>

                <a className="read-link" href="#read">
                  Read →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="explore" id="culture">
          <h3>Explore Staffroom Review</h3>

          <div className="section-links">
            {sections.map((section) => (
              <a
                href={`#${section.toLowerCase()}`}
                key={section}
              >
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
