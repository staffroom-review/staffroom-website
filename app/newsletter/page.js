import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { editorialPlaceholders } from "../../data/editorial";

export const metadata = {
  title: "Newsletter — Staffroom Review",
  description: "The Staffroom Letter: one idea worth carrying into the school week, plus a small selection of stories worth your time.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  const newsletter = editorialPlaceholders.newsletters;

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
              <p className="newsletter-landing__label">A weekly note from Staffroom Review</p>
              <h2>A little less noise. One thing worth thinking about.</h2>
              <p>
                The Staffroom Letter will be a weekly editorial dispatch: one strong idea, observation,
                story or question, followed by a handful of carefully chosen reads. It is designed to feel
                like something a colleague would send because it stayed with them.
              </p>
            </div>
            <form className="newsletter-landing__form" action="/newsletter" method="get">
              <label htmlFor="newsletter-email">Email address</label>
              <div>
                <input id="newsletter-email" name="email" type="email" placeholder="you@example.com" />
                <button type="submit">Subscribe</button>
              </div>
              <small>Subscription provider connection will be added during the publication phase.</small>
            </form>
          </section>

          <section className="reference-section content-page__section" aria-labelledby="newsletter-editions-title">
            <SectionHeader
              id="newsletter-editions-title"
              title="Recent editions"
              description="Placeholder editions are written as real editorial propositions so they can later be expanded, edited and published."
            />
            <div className="content-page__lead">
              <Feature
                art={newsletter.editions[0].art}
                eyebrow={newsletter.editions[0].format}
                title={newsletter.editions[0].title}
                dek={newsletter.editions[0].dek}
                href={`#${newsletter.editions[0].slug}`}
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
                  href={`#${edition.slug}`}
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
