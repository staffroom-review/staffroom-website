export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="masthead" href="/" aria-label="Staffroom Review home">
          <span className="masthead-name">Staffroom</span>
          <span className="masthead-review">Review</span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#stories">Stories</a>
          <a href="#journalism">Journalism</a>
          <a href="#ideas">Ideas</a>
          <a href="#opinion">Opinion</a>
          <a href="#about">About</a>
        </nav>

        <button className="menu-button" type="button" aria-label="Open menu">
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
