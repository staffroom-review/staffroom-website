import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { storiesPage } from "../../data/stories";

export const metadata = {
  title: "Stories — Staffroom Review",
  description: "Stories about the people, classrooms, choices and quiet work that make education what it is.",
  alternates: { canonical: "/stories" },
};

export default function StoriesPage() {
  const page = storiesPage;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page stories-page">
        <div className="page-shell">
          <header className="content-page__intro stories-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="stories-page__hero">
            <Feature
              art={page.lead.art}
              eyebrow={page.lead.eyebrow}
              title={page.lead.title}
              dek={page.lead.dek}
              meta={page.lead.format}
              href="#lead-feature"
              centered
              elevated
            />
          </section>

          <section className="stories-page__section" aria-labelledby="latest-title">
            <SectionHeader
              id="latest-title"
              title="Latest stories"
              description="New work from teachers, classrooms and the schools around them."
            />
            <div className="stories-page__latest-grid">
              {page.latest.map((story) => (
                <Story
                  key={story.href}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  art={story.art}
                  href={story.href}
                  variant="image-lead"
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="stories-page__section stories-page__section--editors" aria-labelledby="editors-title">
            <SectionHeader
              id="editors-title"
              title="Editor's selection"
              description="Two stories worth slowing down for."
            />
            <div className="stories-page__editors-grid">
              {page.editors.map((story) => (
                <Story
                  key={story.href}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  art={story.art}
                  href={story.href}
                  variant="image-lead"
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="stories-page__section stories-page__section--stream" aria-labelledby="stream-title">
            <SectionHeader
              id="stream-title"
              title="More stories"
              description="A denser stream for readers who want to keep going."
            />
            <div className="stories-page__stream-grid">
              {page.stream.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  href="#story"
                  variant="side"
                  compact
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="stories-page__archive" aria-labelledby="archive-title">
            <div>
              <p className="eyebrow">Archive</p>
              <h2 id="archive-title">{page.archive.title}</h2>
              <p>{page.archive.dek}</p>
            </div>
            <nav aria-label="Stories archive">
              {page.archive.links.map((link) => <a key={link} href="#archive">{link}</a>)}
            </nav>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
