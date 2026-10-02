export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell">
        <div className="site-footer__rule" />
        <div className="site-footer__grid">
          <div>
            <a className="brand brand--footer" href="/">
              <span className="brand__name">Staffroom</span>
              <span className="brand__mark">Review</span>
            </a>
            <p className="site-footer__description">
              An independent publication about teaching, schooling and the human experience of education.
            </p>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <a href="/stories">Stories</a>
            <a href="/teachers">Teachers</a>
            <a href="/classrooms">Classrooms</a>
            <a href="/schools">Schools</a>
          </div>
          <div>
            <p className="footer-heading">Discover</p>
            <a href="/ideas">Ideas</a>
            <a href="/world">World</a>
            <a href="/voices">Voices</a>
            <a href="/newsletter">Newsletter</a>
            <a href="/blog">Blog</a>
            <a href="/events">Events</a>
          </div>
          <div>
            <p className="footer-heading">Publication</p>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© 2026 Staffroom Review</span>
        </div>
      </div>
    </footer>
  );
}
