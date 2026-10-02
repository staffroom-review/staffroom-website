import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { worldPage } from "../../data/world";

export const metadata = {
  title: "World — Staffroom Review",
  description: "Comparative stories about education across places and systems, and what becomes visible when schooling is viewed across borders.",
  alternates: { canonical: "/world" },
};

export default function WorldPage() {
  const page = worldPage;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page world-page">
        <div className="page-shell">
          <header className="content-page__intro world-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="world-page__opening" aria-labelledby="world-opening-title">
            <div className="world-page__lead">
              <Feature
                art={page.lead.art}
                eyebrow={page.lead.eyebrow}
                title={page.lead.title}
                dek={page.lead.dek}
                meta={page.lead.format}
                href="#lead-story"
                centered
                elevated
              />
            </div>
            <aside className="world-page__note">
              <p className="eyebrow">Looking outward</p>
              <h2 id="world-opening-title">Different systems make familiar questions visible.</h2>
              <p>
                World is not a rankings page. It is a place to compare how schools, teachers and students
                experience education in different contexts—and to notice which assumptions travel with us.
              </p>
              <div className="world-page__rule" aria-hidden="true" />
              <p className="world-page__caption">Comparative · international · contextual</p>
            </aside>
          </section>

          <section className="world-page__section" aria-labelledby="perspectives-title">
            <SectionHeader
              id="perspectives-title"
              title="Perspectives from elsewhere"
              description="Stories that use comparison to make ordinary educational choices easier to see."
            />
            <div className="world-page__perspectives">
              {page.perspectives.map((story) => (
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

          <section className="world-page__feature" aria-labelledby="world-feature-title">
            <div className="world-page__feature-copy">
              <p className="eyebrow">{page.feature.eyebrow}</p>
              <h2 id="world-feature-title">{page.feature.title}</h2>
              <p>{page.feature.dek}</p>
              <p className="story__meta">{page.feature.format}</p>
              <a href="#world-feature">Read the essay</a>
            </div>
            <Feature
              art={page.feature.art}
              eyebrow={page.feature.format}
              title={page.feature.title}
              dek="A longer reflection on what becomes visible when familiar school routines are compared across contexts."
              href="#world-feature"
            />
          </section>

          <section className="world-page__section world-page__fieldnotes" aria-labelledby="fieldnotes-title">
            <SectionHeader
              id="fieldnotes-title"
              title="Field notes"
              description="Shorter pieces that begin with one observed detail and ask what it reveals."
            />
            <div className="world-page__fieldnotes-list">
              {page.fieldnotes.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  href="#field-note"
                  variant="side"
                  compact
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="world-page__closing" aria-labelledby="world-closing-title">
            <p className="eyebrow">Keep looking</p>
            <h2 id="world-closing-title">The familiar becomes clearer from a little further away.</h2>
            <p>
              Comparative stories do not make every system interchangeable. They help us notice the choices,
              histories and assumptions that shape what school feels like in a particular place.
            </p>
            <a href="/newsletter">Continue with The Staffroom Letter</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
