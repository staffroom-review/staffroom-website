import EditorialRule from "./EditorialRule";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <EditorialRule />

      <div className="footer-inner page-width">
        <div className="footer-brand">
          <a className="footer-masthead" href="/">
            Staffroom Review
          </a>

          <p>
            An independent publication about teaching, education and the people
            who make schools what they are.
          </p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Explore</p>

          <a href="#stories">Stories</a>
          <a href="#teachers">Teachers</a>
          <a href="#classrooms">Classrooms</a>
          <a href="#schools">Schools</a>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Read</p>

          <a href="#ideas">Ideas</a>
          <a href="#world">World</a>
          <a href="#voices">Voices</a>
          <a href="#about">About Staffroom Review</a>
        </div>

        <div className="footer-column">
          <p className="footer-heading">Contact</p>

          <a href="mailto:hello@staffroomreview.com">
            hello@staffroomreview.com
          </a>
        </div>
      </div>

      <div className="footer-bottom page-width">
        <span>© 2026 Staffroom Review</span>
        <span>Independent. For teachers.</span>
      </div>
    </footer>
  );
}
