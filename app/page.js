import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="page-intro" aria-labelledby="page-title">
          <p className="page-kicker">Staffroom Review</p>
          <h1 id="page-title">A new editorial site is being built.</h1>
          <p>
            This temporary baseline is intentionally minimal. The publication
            design will be assembled from the active specifications in
            <code>/docs</code>.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
