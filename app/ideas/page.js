import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ideasPage } from "../../data/ideas";

export const metadata = {
  title: "Ideas — Staffroom Review",
  description: "Essays, arguments and interpretations about teaching, education, school culture and the questions that deserve more room to think.",
  alternates: { canonical: "/ideas" },
};

export default function IdeasPage() {
  const page = ideasPage;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page ideas-page">
        <div className="page-shell">
          <header className="content-page__intro ideas-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="ideas-page__opening" aria-labelledby="ideas-lead-title">
            <div className="ideas-page__lead">
              <Feature
                art={page.lead.art}
                eyebrow={page.lead.eyebrow}
                title={page.lead.title}
                dek={page.lead.dek}
                meta={page.lead.format}
                href="#lead-essay"
                centered
                elevated
              />
            </div>
            <aside className="ideas-page__opening-note">
              <p className="eyebrow">Why ideas?</p>
              <h2 id="ideas-lead-title">Some questions need more than a headline.</h2>
              <p>
                Ideas is where Staffroom Review slows down: less concerned with the speed of the news cycle
                and more interested in the meanings, assumptions and choices underneath ordinary educational life.
              </p>
              <div className="ideas-page__opening-rule" aria-hidden="true" />
              <p className="ideas-page__opening-caption">Essays · arguments · interpretations</p>
            </aside>
          </section>

          <section className="ideas-page__section ideas-page__arguments" aria-labelledby="arguments-title">
            <SectionHeader
              id="arguments-title"
              title="Arguments worth sitting with"
              description="Three ways of looking at familiar parts of education from a little further away."
            />
            <div className="ideas-page__arguments-grid">
              {page.arguments.map((story) => (
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

          <section className="ideas-page__longread" aria-labelledby="longread-title">
            <div className="ideas-page__longread-copy">
              <p className="eyebrow">{page.longread.eyebrow}</p>
              <h2 id="longread-title">{page.longread.title}</h2>
              <p>{page.longread.dek}</p>
              <p className="story__meta">{page.longread.format}</p>
              <a href="#longread">Read the feature</a>
            </div>
            <Feature
              art={page.longread.art}
              eyebrow={page.longread.format}
              title={page.longread.title}
              dek="A closer look at quality, judgment and the details that shape an ordinary lesson."
              href="#longread"
            />
          </section>

          <section className="ideas-page__section ideas-page__notes" aria-labelledby="notes-title">
            <SectionHeader
              id="notes-title"
              title="Small ideas"
              description="Shorter pieces for readers who want one thought to stay with them."
            />
            <div className="ideas-page__notes-list">
              {page.notes.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  href="#idea-note"
                  variant="side"
                  compact
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="ideas-page__closing" aria-labelledby="ideas-closing-title">
            <p className="eyebrow">Keep thinking</p>
            <h2 id="ideas-closing-title">The work of education has more than one story.</h2>
            <p>
              Essays and arguments can change the questions we bring back to the classroom, the staffroom and the school.
            </p>
            <a href="/newsletter">Continue with The Staffroom Letter</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
