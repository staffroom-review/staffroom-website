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

        <section className="journal-section page-width">
          <div className="section-heading-row">
            <div className="section-heading">
              <div className="section-heading-meta">
                <span className="section-number">01</span>
                <SectionLabel>Latest stories</SectionLabel>
              </div>

              <h2 className="section-title">From the staffroom</h2>
            </div>

            <a className="section-link" href="#stories">
              View all stories
            </a>
          </div>

          <div className="story-list">
            <article className="story-list-item">
              <div className="story-list-number">01</div>

              <div className="story-list-copy">
                <SectionLabel>Teacher Stories</SectionLabel>

                <h3>
                  The teachers who stayed, and what kept them in the room
                </h3>

                <p>
                  A look at commitment, exhaustion and the quiet reasons people
                  continue to teach.
                </p>
              </div>

              <p className="byline">Essay · Staffroom Review</p>
            </article>

            <article className="story-list-item">
              <div className="story-list-number">02</div>

              <div className="story-list-copy">
                <SectionLabel>Education Journalism</SectionLabel>

                <h3>
                  What happens when a school asks its teachers to do more with
                  less?
                </h3>

                <p>
                  Inside the changing expectations placed on teachers and the
                  schools trying to respond.
                </p>
              </div>

              <p className="byline">Journalism · Staffroom Review</p>
            </article>

            <article className="story-list-item">
              <div className="story-list-number">03</div>

              <div className="story-list-copy">
                <SectionLabel>Profiles</SectionLabel>

                <h3>
                  A teacher's day, seen through the moments nobody puts in the
                  timetable
                </h3>

                <p>
                  The invisible work, decisions and relationships that shape a
                  day in school.
                </p>
              </div>

              <p className="byline">Profile · Staffroom Review</p>
            </article>
          </div>
        </section>

        <EditorialRule />

        <section className="voices-section page-width">
          <div className="voices-intro section-heading">
            <div className="section-heading-meta">
              <span className="section-number">02</span>
              <SectionLabel>Voices</SectionLabel>
            </div>

            <h2 className="section-title">
              Teachers speak
              <br />
              for themselves.
            </h2>
          </div>

          <div className="voices-grid">
            <article className="voice-feature">
              <div className="story-image-placeholder" aria-hidden="true">
                <span>Conversation</span>
              </div>

              <SectionLabel>Interview</SectionLabel>

              <h3>
                “You learn to notice the things that never make it into the
                lesson plan.”
              </h3>

              <p className="byline">
                Conversation with an experienced classroom teacher
              </p>
            </article>

            <div className="voice-quotes">
              <blockquote>
                “The best part of teaching is still the surprise.”
                <cite>— Primary teacher</cite>
              </blockquote>

              <EditorialRule />

              <blockquote>
                “There is a difference between being busy and doing good
                work.”
                <cite>— Secondary teacher</cite>
              </blockquote>

              <EditorialRule />

              <blockquote>
                “Every school has a culture. You can feel it before anyone
                explains it.”
                <cite>— School leader</cite>
              </blockquote>
            </div>
          </div>
        </section>

        <EditorialRule />

        <section className="ideas-section page-width">
          <div className="ideas-header">
            <div className="section-heading">
              <div className="section-heading-meta">
                <span className="section-number">03</span>
                <SectionLabel>Ideas &amp; Essays</SectionLabel>
              </div>

              <h2 className="section-title">
                Thinking about
                <br />
                education differently.
              </h2>
            </div>

            <p>
              Essays and arguments about teaching, schools, culture and the
              ideas that shape education.
            </p>
          </div>

          <div className="ideas-grid">
            <article className="idea-card idea-card-large">
              <SectionLabel>Essay</SectionLabel>

              <h3>
                We talk about student outcomes. We should talk more about
                student experience.
              </h3>

              <p>
                What gets lost when education is reduced to what can be
                measured?
              </p>

              <p className="byline">Staffroom Review</p>
            </article>

            <article className="idea-card">
              <SectionLabel>Ideas</SectionLabel>

              <h3>The case for slower schools</h3>

              <p>
                Rethinking pace, attention and what a productive school day
                actually looks like.
              </p>

              <p className="byline">Staffroom Review</p>
            </article>

            <article className="idea-card">
              <SectionLabel>Opinion</SectionLabel>

              <h3>Teachers need fewer initiatives, not better slogans</h3>

              <p>
                A plea for space to think, teach and respond to the people in
                front of us.
              </p>

              <p className="byline">Staffroom Review</p>
            </article>
          </div>
        </section>

        <EditorialRule />

        <section className="dispatch-section page-width">
          <div className="dispatch-header section-heading">
            <div className="section-heading-meta">
              <span className="section-number">04</span>
              <SectionLabel>Dispatch</SectionLabel>
            </div>

            <h2 className="section-title">
              Around the world
              <br />
              of education.
            </h2>
          </div>

          <div className="dispatch-grid">
            <article className="dispatch-main">
              <div className="story-image-placeholder" aria-hidden="true">
                <span>Education Dispatch</span>
              </div>

              <SectionLabel>Dispatch</SectionLabel>

              <h3>
                What classrooms are teaching us about the changing world of
                work
              </h3>

              <p>
                Reporting from schools and communities on the forces reshaping
                how and why we teach.
              </p>
            </article>

            <div className="dispatch-notes">
              <article>
                <span className="dispatch-location">01 · INDIA</span>
                <h4>The new expectations placed on young teachers</h4>
                <p className="byline">Dispatch</p>
              </article>

              <EditorialRule />

              <article>
                <span className="dispatch-location">02 · SCHOOLS</span>
                <h4>What happens when technology enters every classroom?</h4>
                <p className="byline">Reporting</p>
              </article>

              <EditorialRule />

              <article>
                <span className="dispatch-location">03 · CULTURE</span>
                <h4>Why the school day remains such a powerful social ritual</h4>
                <p className="byline">Essay</p>
              </article>
            </div>
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
