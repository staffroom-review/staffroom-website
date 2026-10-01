import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { schoolsPage } from "../../data/schools";

export const metadata = {
  title: "Schools — Staffroom Review",
  description: "Stories about school culture, leadership, institutional life, relationships and the systems that shape how schools work.",
  alternates: { canonical: "/schools" },
};

export default function SchoolsPage() {
  const page = schoolsPage;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page schools-page">
        <div className="page-shell">
          <header className="content-page__intro schools-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="schools-page__opening" aria-labelledby="schools-opening-title">
            <div className="schools-page__lead">
              <Feature
                art={page.lead.art}
                eyebrow={page.lead.eyebrow}
                title={page.lead.title}
                dek={page.lead.dek}
                meta={page.lead.format}
                href="#opening-feature"
                centered
                elevated
              />
            </div>
            <aside className="schools-page__aside">
              <p className="eyebrow">School in practice</p>
              <h2 id="schools-opening-title">Institutions are made in the ordinary parts of the day.</h2>
              <p>
                The way a school welcomes people, handles disagreement, shares information and makes time
                for one another becomes part of its culture.
              </p>
              <a href="#culture">Read the school-life stories</a>
            </aside>
          </section>

          <section className="schools-page__section" id="culture" aria-labelledby="culture-title">
            <SectionHeader
              id="culture-title"
              title="Culture & leadership"
              description="Close looks at the people, relationships and decisions that quietly define institutional life."
            />
            <div className="schools-page__culture">
              {page.culture.map((story) => (
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

          <section className="schools-page__systems" aria-labelledby="systems-title">
            <div className="schools-page__systems-intro">
              <p className="eyebrow">The school as a system</p>
              <h2 id="systems-title">What gets organised becomes part of the experience.</h2>
              <p>
                Timetables, meetings, handovers and routines may look administrative. For teachers and
                students, they shape where attention goes and what the day makes possible.
              </p>
            </div>
            <div className="schools-page__systems-list">
              {page.systems.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  href="#school-system"
                  variant="side"
                  compact
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="schools-page__longread" aria-labelledby="longread-title">
            <div className="schools-page__longread-copy">
              <p className="eyebrow">{page.longread.eyebrow}</p>
              <h2 id="longread-title">{page.longread.title}</h2>
              <p>{page.longread.dek}</p>
              <p className="story__meta">{page.longread.format}</p>
              <a href="#longread">Open the long read</a>
            </div>
            <Feature
              art={page.longread.art}
              eyebrow={page.longread.format}
              title="The Invisible Work of Keeping a School Moving"
              dek="A longer look at the structures and human work behind an ordinary school day."
              href="#longread"
            />
          </section>

          <section className="schools-page__section schools-page__notes" aria-labelledby="notes-title">
            <SectionHeader
              id="notes-title"
              title="School notebooks"
              description="Short pieces about the details that can reveal a larger institution."
            />
            <div className="schools-page__notes-grid">
              {page.notes.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  href="#school-note"
                  variant="side"
                  compact
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="schools-page__closing" aria-labelledby="schools-closing-title">
            <p className="eyebrow">Keep looking</p>
            <h2 id="schools-closing-title">A school is more than the building, but the building tells part of the story.</h2>
            <p>
              The strongest school stories move between the visible and the invisible: rooms and routines,
              policies and relationships, decisions and the people who live with them.
            </p>
            <a href="/newsletter">Follow school life with The Staffroom Letter</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
