import Feature from "../../components/Feature";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { eventsPage } from "../../data/events";

export const metadata = {
  title: "Events — Staffroom Review",
  description:
    "Conversations, gatherings and practical sessions for people who care about teaching, brought into the room by Staffroom Review.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const page = eventsPage;

  return (
    <div className="site">
      <Header />

      <main id="main-content" className="content-page events-page">
        <div className="page-shell">
          <header className="content-page__intro events-page__intro">
            <p className="eyebrow">Staffroom Review</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className="events-page__opening" aria-labelledby="events-opening-title">
            <div className="events-page__lead">
              <Feature
                art={page.lead.art}
                eyebrow={page.lead.eyebrow}
                title={page.lead.title}
                dek={page.lead.dek}
                meta={page.lead.meta}
                href="#lead-event"
                centered
                elevated
              />
            </div>

            <aside className="events-page__note">
              <p className="eyebrow">Why we gather</p>
              <h2 id="events-opening-title">The best event is a useful conversation.</h2>
              <p>
                Staffroom Review events are designed to extend the publication without turning it into a
                conference brand. The room should feel as thoughtful as the page.
              </p>
              <div className="events-page__rule" aria-hidden="true" />
              <p className="events-page__caption">
                conversation · practice · reflection
              </p>
            </aside>
          </section>

          <section className="events-page__section" aria-labelledby="upcoming-title">
            <SectionHeader
              id="upcoming-title"
              title="Upcoming"
              description="The first programme is being developed now. These are the event propositions we are building towards."
            />

            <div className="events-page__upcoming">
              {page.upcoming.map((event) => (
                <article className="events-page__event" key={event.title}>
                  <p className="eyebrow">{event.eyebrow}</p>
                  <h2>{event.title}</h2>
                  <p>{event.dek}</p>
                  <p className="story__meta">{event.meta}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="events-page__feature" aria-labelledby="programme-title">
            <div className="events-page__feature-copy">
              <p className="eyebrow">{page.feature.eyebrow}</p>
              <h2 id="programme-title">{page.feature.title}</h2>
              <p>{page.feature.dek}</p>
              <p className="story__meta">{page.feature.meta}</p>
            </div>

            <Feature
              art={page.feature.art}
              eyebrow="Staffroom Review"
              title="A room for the questions that do not fit a panel."
              dek="A larger conversation without the usual pressure to have a neat answer."
              href="#programme-principle"
            />
          </section>

          <section className="events-page__formats" aria-labelledby="formats-title">
            <SectionHeader
              id="formats-title"
              title="How we meet"
              description="Different kinds of gatherings for different kinds of questions."
            />

            <div className="events-page__formats-grid">
              {page.formats.map((format) => (
                <article className="events-page__format" key={format.title}>
                  <p className="eyebrow">Staffroom Review</p>
                  <h2>{format.title}</h2>
                  <p>{format.dek}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="events-page__closing" aria-labelledby="events-closing-title">
            <p className="eyebrow">Stay close to the programme</p>
            <h2 id="events-closing-title">
              The programme will grow from the questions readers keep asking.
            </h2>
            <p>
              The Staffroom Letter will carry new event announcements, invitations and follow-up reading
              as the programme takes shape.
            </p>
            <a href="/newsletter">Get event updates through The Staffroom Letter</a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
