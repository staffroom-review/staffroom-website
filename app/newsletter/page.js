import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { editorialPlaceholders } from "../../data/editorial";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Newsletter — Staffroom Review",
  description:
    "The Staffroom Letter: one idea worth carrying into the school week, plus a small selection of stories worth your time.",
  alternates: { canonical: "/newsletter" },
};

export default async function NewsletterPage({ searchParams }) {
  const newsletter = editorialPlaceholders.newsletters;
  const params = await searchParams;
  const status = params?.status || null;

  const messages = {
    subscribed:
      "You are on the free list. The next Staffroom Letter will arrive by email.",
    already: "That email is already on the list.",
    invalid: "Please enter a valid email address.",
    unconfigured:
      "The subscription service is being connected. Please try again later.",
    error: "We could not complete the subscription. Please try again.",
  };

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page">
        <div className="page-shell">
          <header className="content-page__intro">
            <p className="eyebrow">Newsletter</p>
            <h1>{newsletter.name}</h1>
            <p>{newsletter.promise}</p>
          </header>

          <section className="newsletter-landing">
            <div className="newsletter-landing__copy">
              <p className="newsletter-landing__label">
                A weekly note from Staffroom Review
              </p>
              <h2>A little less noise. One thing worth thinking about.</h2>
              <p>
                Each week, The Staffroom Letter brings a carefully edited
                selection of what mattered at Staffroom Review, followed by a
                deeper piece reserved for paid readers.
              </p>
              <p>
                Free subscribers receive the week’s curated stories. Paid
                subscribers receive those stories plus the full premium
                section.
              </p>
            </div>

            <form
              className="newsletter-landing__form"
              action="/api/newsletter/subscribe"
              method="post"
            >
              <label htmlFor="newsletter-email">Email address</label>
              <div>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                <button type="submit">Subscribe free</button>
              </div>
              <input
                className="newsletter-landing__honeypot"
                name="company"
                type="text"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <small>Free subscription. Unsubscribe any time.</small>
              {status ? (
                <p className="newsletter-landing__status" role="status">
                  {messages[status] || messages.error}
                </p>
              ) : null}
            </form>
          </section>

          <section
            className="reference-section content-page__section"
            aria-labelledby="newsletter-editions-title"
          >
            <SectionHeader
              id="newsletter-editions-title"
              title="Recent editions"
              description="Past and future editions are curated from the story registry and prepared as complete email editions before approval."
            />
            <div className="content-page__lead">
              <Feature
                art={newsletter.editions[0].art}
                eyebrow={newsletter.editions[0].format}
                title={newsletter.editions[0].title}
                dek={newsletter.editions[0].dek}
                href={"#" + newsletter.editions[0].slug}
                centered
                elevated
              />
            </div>
            <div className="content-page__grid">
              {newsletter.editions.slice(1).map((edition) => (
                <Story
                  key={edition.slug}
                  eyebrow={edition.format}
                  title={edition.title}
                  dek={edition.dek}
                  art={edition.art}
                  href={"#" + edition.slug}
                  variant="image-lead"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
