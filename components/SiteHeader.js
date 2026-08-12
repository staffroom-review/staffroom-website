import Link from "next/link";

export default function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <span>A journal of ideas, culture & education</span>
        <span>Issue No. 01</span>
      </div>
      <header>
        <Link href="/" className="logo">
          <span className="logo-mark">
            <i className="ti ti-feather" aria-hidden="true"></i>
          </span>
          <span className="logo-text">
            Staffroom<span className="accent"> Review</span>
          </span>
        </Link>
        <p className="tagline">
          Writing on education, literature, culture and the ideas that shape
          the way we see the world.
        </p>
        <nav>
          <Link href="/#essays">Essays</Link>
          <Link href="/category/reviews">Reviews</Link>
          <Link href="/category/ideas">Ideas</Link>
          <Link href="/category/culture">Culture</Link>
          <Link href="/category/teaching">Teaching</Link>
          <Link href="/#about">About</Link>
        </nav>
      </header>
    </>
  );
}
