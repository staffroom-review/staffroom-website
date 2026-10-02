import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { voicesPage } from "../../data/voices";

export const metadata = {
  title: "Voices — Staffroom Review",
  description: "First-person stories and human perspectives from teachers and the people around schools.",
  alternates: { canonical: "/voices" },
};

export default function VoicesPage() {
  const page = voicesPage;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page voices-page">
        <div className="page-shell">
          <header className="content-page__intro voices-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="voices-page__opening" aria-labelledby="voices-opening-title">
            <div className="voices-page__lead">
              <Feature
                art={page.lead.art}
                eyebrow={page.lead.eyebrow}
                title={page.lead.title}
                dek={page.lead.dek}
                meta={page.lead.format}
                href="#lead-voice"
                centered
                elevated
              />
            </div>
            <aside className="voices-page__opening-note">
              <p className="eyebrow">In their own words</p>
              <h2 id="voices-opening-title">A person's account can change the shape of a familiar story.</h2>
              <p>
                Voices is where Staffroom Review makes room for lived experience: the decisions, doubts,
                discoveries and small moments that can be missed when education is described only from the outside.
              </p>
              <div className="voices-page__rule" aria-hidden="true" />
              <p className="voices-page__caption">First person · perspective · experience</p>
            </aside>
          </section>

          <section className="voices-page__section voices-page__collection" aria-labelledby="collection-title">
            <SectionHeader
              id="collection-title"
              title="In their own words"
              description="Three accounts that stay close to the person telling the story."
            />
            <div className="voices-page__collection-grid">
              {page.voices.map((story) => (
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

          <section className="voices-page__profile" aria-labelledby="profile-title">
            <div className="voices-page__profile-quote">
              <p className="eyebrow">{page.profile.eyebrow}</p>
              <blockquote id="profile-title">“The label was convenient. The child was not.”</blockquote>
              <p>
                A close first-person account of what changed when a teacher stopped using one familiar label
                and began looking for a more useful explanation.
              </p>
              <a href="#profile">Read the profile</a>
            </div>
            <Feature
              art={page.profile.art}
              eyebrow={page.profile.format}
              title={page.profile.title}
              dek={page.profile.dek}
              href="#profile"
            />
          </section>

          <section className="voices-page__section voices-page__notes" aria-labelledby="notes-title">
            <SectionHeader
              id="notes-title"
              title="Voice notes"
              description="Shorter pieces that begin with a remembered scene, a difficult moment or an ordinary day."
            />
            <div className="voices-page__notes-list">
              {page.notes.map((story) => (
                <Story
                  key={story.title}
                  eyebrow={story.eyebrow}
                  title={story.title}
                  dek={story.dek}
                  href="#voice-note"
                  variant="side"
                  compact
                  meta={story.format}
                />
              ))}
            </div>
          </section>

          <section className="voices-page__closing" aria-labelledby="voices-closing-title">
            <p className="eyebrow">Keep listening</p>
            <h2 id="voices-closing-title">The human story is part of the educational story.</h2>
            <p>
              First-person accounts help us see teaching and schooling from the inside, without pretending
              that one experience can speak for everyone.
            </p>
            <a href="/newsletter">Continue with The Staffroom Letter</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
