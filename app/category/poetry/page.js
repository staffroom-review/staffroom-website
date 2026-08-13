import Link from "next/link";
import { verse } from "../../../lib/stories";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

const poemIcons = ["ti-feather", "ti-pencil", "ti-sun", "ti-cloud", "ti-moon"];

export default function PoetryPage() {
  return (
    <div className="site">
      <SiteHeader />
      <main className="poetry-page">
        <div className="poetry-page-eyebrow">Verse from the staffroom</div>
        <h1 className="poetry-page-title">Poetry</h1>
        <p className="poetry-page-description">
          Short verse from the staffroom, set apart from the rest of the journal.
        </p>

        <div className="poetry-page-list">
          {verse.map((poem, i) => (
            <div key={poem.slug}>
              {i > 0 && <div className="poetry-page-divider"></div>}
              <Link className="poetry-page-entry" href={`/essays/${poem.slug}`}>
                <div className="poetry-page-mark">
                  <i className={`ti ${poemIcons[i % poemIcons.length]}`} aria-hidden="true"></i>
                </div>
                <h3 className="poetry-page-poem-title">{poem.title}</h3>
                <p className="poetry-page-excerpt">{poem.body}</p>
                <span className="poetry-page-cta">Read the full poem</span>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
