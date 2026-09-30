const navigation = [
  ["Stories", "/"],
  ["Teachers", "/"],
  ["Classrooms", "/"],
  ["Schools", "/"],
  ["Ideas", "/"],
  ["World", "/"],
  ["Voices", "/"],
];

const explore = navigation.slice(0, 4);
const discover = navigation.slice(4);

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="site-footer__masthead">
          <a className="masthead" href="/" aria-label="Staffroom Review home">
            <span className="masthead-name">Staffroom</span>
            <span className="masthead-review">Review</span>
          </a>
          <p>
            An independent publication about teaching, schooling and the human
            experience of education.
          </p>
        </div>

        <div className="site-footer__rule" />

        <div className="site-footer__grid">
          <div>
            <p className="site-footer__label">Explore</p>
            <nav className="site-footer__links" aria-label="Footer exploration">
              {explore.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </nav>
          </div>

          <div>
            <p className="site-footer__label">Discover</p>
            <nav className="site-footer__links" aria-label="Footer discovery">
              {discover.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </nav>
          </div>

          <div id="newsletter" className="site-footer__newsletter">
            <p className="site-footer__label">The Staffroom, in your inbox</p>
            <p>
              Occasional stories and observations about teaching and school
              life.
            </p>
            <a className="site-footer__newsletter-link" href="#newsletter">
              Newsletter →
            </a>
          </div>

          <div>
            <p className="site-footer__label">Publication</p>
            <div className="site-footer__links">
              <a href="/">About</a>
              <a href="/">Contact</a>
              <a href="/">Privacy</a>
              <a href="/">Terms</a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Staffroom Review</span>
          <span>Independent · Editorial · Human</span>
        </div>
      </div>
    </footer>
  );
}
