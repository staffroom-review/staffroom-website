export default function SiteFooter() {
  return (
    <footer id="about">
      <a href="/" className="footer-logo">
        <span className="footer-logo-mark">
          <i className="ti ti-feather" aria-hidden="true"></i>
        </span>
        <span className="footer-logo-text">
          Staffroom<span className="accent"> Review</span>
        </span>
      </a>
      <div className="footer-tagline">
        A journal for teachers, readers, writers and curious minds.
      </div>
      <div className="footer-links">
        <a href="#about">About</a>
        <a href="mailto:youremail@example.com?subject=Submission for Staffroom Review">
          Submissions
        </a>
        <a href="mailto:youremail@example.com?subject=Contact from Staffroom Review">
          Contact
        </a>
      </div>
    </footer>
  );
}
