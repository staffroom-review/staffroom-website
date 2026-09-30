"use client";

import { useState } from "react";

const navigation = [
  ["Stories", "#stories"],
  ["Teachers", "#teachers"],
  ["Classrooms", "#classrooms"],
  ["Schools", "#schools"],
  ["Ideas", "#ideas"],
  ["World", "#world"],
  ["Voices", "#voices"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="masthead" href="/" aria-label="Staffroom Review home" onClick={closeMenu}>
          <span className="masthead-name">Staffroom</span>
          <span className="masthead-review">Review</span>
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav page-width" aria-label="Mobile navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
