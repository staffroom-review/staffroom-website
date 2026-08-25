import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import EditorialRule from "../components/EditorialRule";
import SectionLabel from "../components/SectionLabel";

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="intro-section page-width">
          <div className="intro-copy">
            <SectionLabel>Independent education writing</SectionLabel>

            <h1 className="display-title">
              The human experience
              <br />
              of teaching.
            </h1>

            <p className="intro-deck">
              Stories, ideas, conversations and reporting from the people who
              teach.
            </p>
          </div>
        </section>

        <EditorialRule />

        <section className="feature-section page-width">
          <div className="feature-grid">
            <article className="feature-story">
              <div className="story-image-placeholder" aria-hidden="true">
                <span>Staffroom Review</span>
              </div>

              <div className="story-content">
                <SectionLabel>Teacher Stories</SectionLabel>

                <h2 className="feature-title">
                  What teachers remember when the classroom goes quiet
                </h2>

                <p className="story-excerpt">
                  The work of teaching is made up of thousands of small
                  encounters. Some disappear. Others stay with us for years.
                </p>

                <p className="byline">Staffroom Review · Essay</p>
              </div>
            </article>

            <aside className="secondary-stories">
              <article className="secondary-story">
                <SectionLabel>Opinion</SectionLabel>

                <h3>
                  Education policy is often written without enough attention
                  to the people living with it.
                </h3>

                <p className="byline">Staffroom Review · Opinion</p>
              </article>

              <EditorialRule />

              <article className="secondary-story">
                <SectionLabel>Ideas</SectionLabel>

                <h3>
                  The classroom is not a machine. We should stop designing it
                  like one.
                </h3>

                <p className="byline">Staffroom Review · Ideas</p>
              </article>

              <EditorialRule />

              <article className="secondary-story">
                <SectionLabel>Interview</SectionLabel>

                <h3>
                  A conversation about attention, authority and the changing
                  school day.
                </h3>

                <p className="byline">Staffroom Review · Interview</p>
              </article>
            </aside>
          </div>
        </section>

        <EditorialRule />

        <section className="principles-section page-width">
          <div className="principles-heading">
            <SectionLabel>Editorial position</SectionLabel>

            <h2>
              Serious about education.
              <br />
              Interested in people.
            </h2>
          </div>

          <div className="principles-copy">
            <p>
              Staffroom Review is an independent publication for teachers and
              educators. We are interested in what happens behind the policy,
              inside the classroom and between people.
            </p>

            <p>
              We publish teacher stories, journalism, interviews, profiles,
              essays, opinion and ideas with curiosity, intelligence and care.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
