import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { teachersPage } from "../../data/teachers";

export const metadata = {
  title: "Teachers — Staffroom Review",
  description: "Stories about the people doing the work of teaching: what teachers notice, carry, change and learn.",
  alternates: { canonical: "/teachers" },
};

export default function TeachersPage() {
  const page = teachersPage;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page teachers-page">
        <div className="page-shell">
          <header className="content-page__intro teachers-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="teachers-page__opening">
            <div className="teachers-page__opening-feature">
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
            <aside className="teachers-page__voice-rail" aria-labelledby="teacher-voices-title">
              <div className="teachers-page__rail-heading">
                <p className="eyebrow" id="teacher-voices-title">Teacher voices</p>
                <span>Two lived perspectives</span>
              </div>
              {page.voices.map((story) => (
                <Story
                  key={story.href}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  art={story.art}
                  href={story.href}
                  variant="side"
                  meta={story.format}
                />
              ))}
            </aside>
          </section>

          <section className="teachers-page__section teachers-page__practice" aria-labelledby="practice-title">
            <SectionHeader
              id="practice-title"
              title="Teaching in practice"
              description="The decisions, compromises and discoveries that shape a teacher's actual day."
            />
            <div className="teachers-page__practice-grid">
              {page.practice.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  art={story.art}
                  href="#story"
                  variant="image-lead"
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="teachers-page__section teachers-page__working" aria-labelledby="working-title">
            <div className="teachers-page__working-intro">
              <p className="eyebrow">{page.series.title}</p>
              <h2 id="working-title">The intelligence inside an ordinary teaching day</h2>
              <p>{page.series.dek}</p>
            </div>
            <div className="teachers-page__working-list">
              {page.working.map((story) => (
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

          <section className="teachers-page__closing" aria-labelledby="teachers-closing-title">
            <p className="eyebrow">For teachers</p>
            <h2 id="teachers-closing-title">The work is the story.</h2>
            <p>
              More first-person accounts, classroom observations, practical pieces and teacher profiles
              will build this section as the editorial programme grows.
            </p>
            <a href="/newsletter">Get The Staffroom Letter</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
