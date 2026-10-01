const nav = [
  { label: "Stories", href: "/stories" },
  { label: "Teachers", href: "/teachers" },
  { label: "Classrooms", href: "/" },
  { label: "Schools", href: "/" },
  { label: "Ideas", href: "/" },
  { label: "World", href: "/" },
  { label: "Voices", href: "/" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-shell">
        <div className="site-header__top">
          <a className="brand" href="/" aria-label="Staffroom Review home">
            <span className="brand__name">Staffroom</span>
            <span className="brand__mark">Review</span>
          </a>

          <div className="site-header__actions">
            <details className="header-search">
              <summary className="header-action">Explore</summary>
              <form action="/" method="get" className="header-search__form">
                <label htmlFor="header-search-input" className="sr-only">Search Staffroom Review</label>
                <input id="header-search-input" name="q" type="search" placeholder="Search stories" />
                <button type="submit">Search</button>
              </form>
            </details>
            <a href="#signin" className="header-action header-action--outline">Sign in</a>
            <a href="#subscribe" className="header-action header-action--solid">Subscribe</a>
          </div>
        </div>

        <div className="site-header__navrow">
          <nav aria-label="Primary navigation">
            {nav.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
          </nav>

          <details className="mobile-menu">
            <summary className="menu-button">Menu</summary>
            <nav aria-label="Mobile navigation">
              {nav.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
