const nav = [
  { label: "Stories", href: "/stories" },
  { label: "Teachers", href: "/teachers" },
  { label: "Classrooms", href: "/classrooms" },
  { label: "Schools", href: "/schools" },
  { label: "Ideas", href: "/ideas" },
  { label: "World", href: "/world" },
  { label: "Voices", href: "/" },
];

const specialistNav = [
  { label: "Newsletter", href: "/newsletter" },
  { label: "Events", href: "/" },
];

const moreNav = [
  { label: "Podcasts", href: "/" },
  { label: "Learning", href: "/" },
  { label: "Visual Essays", href: "/" },
  { label: "Blog", href: "/blog" },
];

function NavLinks({ items }) {
  return items.map((item) => (
    <a href={item.href} key={item.label}>{item.label}</a>
  ));
}

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
          <nav className="site-header__primary-nav" aria-label="Primary navigation">
            <NavLinks items={nav} />
            <NavLinks items={specialistNav} />
            <details className="more-menu">
              <summary>More</summary>
              <nav aria-label="More navigation">
                <NavLinks items={moreNav} />
              </nav>
            </details>
          </nav>

          <details className="mobile-menu">
            <summary className="menu-button">Menu</summary>
            <nav aria-label="Mobile navigation">
              <NavLinks items={nav} />
              <NavLinks items={specialistNav} />
              <details className="more-menu">
                <summary>More</summary>
                <nav aria-label="More mobile navigation">
                  <NavLinks items={moreNav} />
                </nav>
              </details>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
