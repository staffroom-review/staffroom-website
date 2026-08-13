import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="site">
      <SiteHeader />
      <main className="about-page">
        <div className="about-header">
          <div className="about-logo-mark">
            <i className="ti ti-feather" aria-hidden="true"></i>
          </div>
          <h1 className="about-title">
            Staffroom <span className="accent">Review</span>
          </h1>
          <p className="about-eyebrow">A journal of ideas, culture and education</p>
        </div>

        <p className="about-statement">
          Staffroom Review is a journal for teachers, readers, writers and
          curious minds. We publish essays, interviews, letters and verse on
          education, literature and the ideas that shape how we see the
          world.
        </p>

        <p className="about-statement about-statement-muted">
          Replace this paragraph with your own editorial statement — who
          writes for the journal, what it looks for, and what a reader can
          expect from each issue.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <i className="ti ti-mail" aria-hidden="true"></i>
            <h3>Submissions</h3>
            <p>We read essays, reviews, interviews and poetry year-round.</p>
            <a className="about-card-link" href="mailto:youremail@example.com?subject=Submission for Staffroom Review">Send a submission &rarr;</a>
          </div>
          <div className="about-card">
            <i className="ti ti-message-2" aria-hidden="true"></i>
            <h3>Contact</h3>
            <p>Questions, corrections or general inquiries welcome.</p>
            <a className="about-card-link" href="mailto:youremail@example.com?subject=Contact from Staffroom Review">Get in touch &rarr;</a>
          </div>
        </div>

        <div className="about-team">
          <div className="about-team-mark">
            <i className="ti ti-users" aria-hidden="true"></i>
          </div>
          <p className="about-team-caption">
            The editors — placeholder for a masthead photo or team credit
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
