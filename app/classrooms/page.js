import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { classroomsPage } from "../../data/classrooms";

// Editorial placeholder page; full story bodies remain governed by the content strategy.

export const metadata = {
  title: "Classrooms — Staffroom Review",
  description: "Close looks at the places where teaching happens: the questions, silences, surprises and small decisions inside a lesson.",
  alternates: { canonical: "/classrooms" },
};

export default function ClassroomsPage() {
  const page = classroomsPage;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page classrooms-page">
        <div className="page-shell">
          <header className="content-page__intro classrooms-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="classrooms-page__opening">
            <div className="classrooms-page__feature">
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
            </div>
            <aside className="classrooms-page__visual" aria-labelledby="visual-story-title">
              <p className="eyebrow">Visual story</p>
              <Feature
                art={page.visual.art}
                eyebrow={page.visual.format}
                title={page.visual.title}
                dek={page.visual.dek}
                href="#visual-story"
              />
            </aside>
          </section>

          <section className="classrooms-page__section" aria-labelledby="moments-title">
            <SectionHeader
              id="moments-title"
              title="Inside the lesson"
              description="Scene-led stories about what changes when teachers and students are in the room together."
            />
            <div className="classrooms-page__moments">
              {page.moments.map((story) => (
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

          <section className="classrooms-page__section classrooms-page__notebooks" aria-labelledby="notebooks-title">
            <div className="classrooms-page__notebooks-heading">
              <p className="eyebrow">Teacher notebooks</p>
              <h2 id="notebooks-title">Small moments, close attention</h2>
              <p>Shorter pieces that stay close to the classroom and can later grow into essays, guides or longer reported stories.</p>
            </div>
            <div className="classrooms-page__notebooks-list">
              {page.notebooks.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  href="#notebook"
                  variant="side"
                  compact
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="classrooms-page__closing" aria-labelledby="classrooms-closing-title">
            <p className="eyebrow">Keep looking</p>
            <h2 id="classrooms-closing-title">The room is never just the room.</h2>
            <p>
              The strongest classroom stories often begin with something ordinary: a question, a silence,
              a changed plan or a student seeing the lesson differently.
            </p>
            <a href="/newsletter">Follow the classroom with The Staffroom Letter</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
