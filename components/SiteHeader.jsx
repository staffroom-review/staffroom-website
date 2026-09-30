const navigation = [
  ["Stories", "/"],
  ["Teachers", "/"],
  ["Classrooms", "/"],
  ["Schools", "/"],
  ["Ideas", "/"],
  ["World", "/"],
  ["Voices", "/"],
];

function NavigationLinks({ mobile = false }) {
  return navigation.map(([label, href]) => (
    <a
      key={label}
      className={mobile ? "site-header__mobile-link" : undefined}
      href={href}
    >
      {label}
    </a>
  ));
}

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-width">
        <div className="site-header__top">
          <a className="masthead" href="/" aria-label="Staffroom Review home">
            <span className="masthead-name">Staffroom</span>
            <span className="masthead-review">Review</span>
          </a>

          <div className="site-header__utilities">
            <details className="site-header__search">
              <summary>Search</summary>
              <form className="site-header__search-form" action="/" method="get">
                <label className="sr-only" htmlFor="site-search">
                  Search Staffroom Review
                </label>
                <input
                  id="site-search"
                  name="q"
                  type="search"
                  placeholder="Search stories"
                />
                <button type="submit">Go</button>
              </form>
            </details>

            <a className="site-header__subscribe" href="#newsletter">
              Subscribe
            </a>
          </div>
        </div>

        <div className="site-header__nav-row">
          <nav className="site-header__nav" aria-label="Primary navigation">
            <NavigationLinks />
          </nav>

          <details className="site-header__mobile-menu">
            <summary>
              <span className="site-header__menu-label">Menu</span>
              <span className="site-header__menu-icon" aria-hidden="true">
                <span />
                <span />
              </span>
            </summary>

            <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
              <NavigationLinks mobile />
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
