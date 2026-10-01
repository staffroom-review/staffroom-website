const nav = ["Stories", "Teachers", "Classrooms", "Schools", "Ideas", "World", "Voices"];

export default function Header() {
  return (
    <header className="site-header">
      <div className="page-shell site-header__shell">
        <div className="site-header__top">
          <a className="brand" href="/" aria-label="Staffroom Review home">
            <span className="brand__name">Staffroom</span>
            <span className="brand__mark">Review</span>
          </a>

          <div className="site-header__actions">
            <button type="button" className="header-action">
              Explore
            </button>
            <a href="#signin" className="header-action header-action--outline">Sign in</a>
            <a href="#subscribe" className="header-action header-action--solid">Subscribe</a>
          </div>
        </div>

        <div className="site-header__navrow">
          <nav aria-label="Primary">
            {nav.map((item) => (
              <a href="/" key={item}>{item}</a>
            ))}
          </nav>
          <button type="button" className="menu-button" aria-label="Open menu">Menu</button>
        </div>
      </div>
    </header>
  );
}
