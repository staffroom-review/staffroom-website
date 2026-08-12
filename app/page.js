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
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f7f5f0;
          color: #171717;
          font-family: Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          min-height: 100vh;
        }

        .topbar {
          border-bottom: 1px solid #d8d4cc;
          padding: 12px 5vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .topbar span:last-child {
          color: #666;
        }

        header {
          padding: 42px 5vw 28px;
          border-bottom: 1px solid #171717;
        }

        .masthead {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 9vw, 112px);
          line-height: 0.88;
          letter-spacing: -0.055em;
          font-weight: 500;
          margin: 0;
        }

        .tagline {
          margin: 24px 0 0;
          max-width: 640px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          line-height: 1.45;
          color: #444;
        }

        nav {
          margin-top: 34px;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.09em;
        }

        nav a:hover {
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        main {
          padding: 0 5vw 80px;
        }

        .featured {
          padding: 70px 0 75px;
          border-bottom: 1px solid #d8d4cc;
        }

        .eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: 1.7fr 1fr;
          gap: 7vw;
          align-items: end;
        }

        .featured h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(40px, 6vw, 76px);
          line-height: 0.98;
          font-weight: 400;
          letter-spacing: -0.045em;
          margin: 0;
          max-width: 900px;
        }

        .featured-text {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.5;
          color: #4b4b4b;
          margin: 0 0 25px;
        }

        .byline {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .read-link {
          display: inline-block;
          margin-top: 30px;
          border-bottom: 1px solid #171717;
          padding-bottom: 6px;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          border-bottom: 1px solid #171717;
          padding: 50px 0 14px;
        }

        .section-heading h3 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
          font-weight: 400;
          letter-spacing: -0.03em;
        }

        .section-heading span {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .stories {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .story {
          padding: 34px 34px 38px 0;
          margin-right: 34px;
          border-right: 1px solid #d8d4cc;
        }

        .story:last-child {
          border-right: none;
          margin-right: 0;
        }

        .story-category {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 22px;
        }

        .story h4 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 31px;
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -0.025em;
          margin: 0 0 18px;
        }

        .story p {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 16px;
          line-height: 1.5;
          color: #555;
          margin: 0;
        }

        .explore {
          margin-top: 75px;
          padding: 55px 0;
          border-top: 1px solid #171717;
          border-bottom: 1px solid #171717;
        }

        .explore h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 42px;
          font-weight: 400;
          margin: 0 0 28px;
        }

        .section-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .section-links a {
          border: 1px solid #aaa59d;
          border-radius: 100px;
          padding: 12px 20px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .section-links a:hover {
          background: #171717;
          color: #f7f5f0;
        }

        footer {
          padding: 45px 5vw;
          display: flex;
          justify-content: space-between;
          gap: 30px;
          border-top: 1px solid #d8d4cc;
          font-size: 12px;
          color: #555;
        }

        .footer-title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          color: #171717;
          margin-bottom: 10px;
        }

        .footer-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        @media (max-width: 800px) {
          .topbar {
            display: none;
          }

          header {
            padding-top: 32px;
          }

          .featured-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .featured {
            padding-top: 50px;
          }

          .stories {
            grid-template-columns: 1fr;
          }

          .story {
            border-right: none;
            border-bottom: 1px solid #d8d4cc;
            margin-right: 0;
            padding-right: 0;
          }

          .story:last-child {
            border-bottom: none;
          }

          footer {
            flex-direction: column;
          }
        }
      `}</style>

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
                <a href={`#${section.toLowerCase()}`} key={section}>
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
    </>
  );
}
