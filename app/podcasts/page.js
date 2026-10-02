import Feature from "../../components/Feature";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { podcastsPage } from "../../data/podcasts";
import styles from "./podcasts.module.css";

export const metadata = {
  title: "Podcasts — Staffroom Review",
  description:
    "Conversations and close listening about teaching, schools and the human experience of education.",
  alternates: { canonical: "/podcasts" },
};

export default function PodcastsPage() {
  const page = podcastsPage;

  return (
    <div className="site">
      <Header />

      <main id="main-content" className="content-page podcasts-page">
        <div className="page-shell">
          <header className="content-page__intro">
            <p className="eyebrow">{page.intro.eyebrow}</p>
            <h1>{page.intro.title}</h1>
            <p>{page.intro.dek}</p>
          </header>

          <section className={styles.opening} aria-labelledby="podcasts-opening-title">
            <div className={styles.lead}>
              <Feature
                art={page.lead.art}
                eyebrow={page.lead.eyebrow}
                title={page.lead.title}
                dek={page.lead.dek}
                meta={page.lead.meta}
                href="#episode-01"
                priority
                elevated
              />
            </div>
            <aside className={styles.note}>
              <p className="eyebrow">Why listen</p>
              <h2 id="podcasts-opening-title">Some education questions need a longer answer.</h2>
              <p>
                Staffroom Review Podcasts make space for conversation rather than performance: teachers,
                practitioners and guests talking through the details behind the ideas.
              </p>
              <div className={styles.rule} aria-hidden="true" />
              <p className={styles.caption}>listen · reflect · return</p>
            </aside>
          </section>

          <section className={styles.episodes} aria-labelledby="episodes-title">
            <SectionHeader
              id="episodes-title"
              title="Episodes"
              description="A growing collection of conversations about teaching, schools and the life around them."
            />
            <div className={styles.episodeGrid}>
              {page.episodes.map((episode, index) => (
                <article className={styles.episode} key={episode.title} id={index === 0 ? "episode-01" : undefined}>
                  <div className={styles.episodeArt}>
                    <img src={episode.art.src} alt="" loading="lazy" decoding="async" />
                  </div>
                  <div className={styles.episodeBody}>
                    <p className="eyebrow">{episode.eyebrow}</p>
                    <h2><a href="#listen">{episode.title}</a></h2>
                    <p>{episode.dek}</p>
                    <p className="story__meta">{episode.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.series} aria-labelledby="series-title">
            <div className={styles.seriesCopy}>
              <p className="eyebrow">{page.series.eyebrow}</p>
              <h2 id="series-title">{page.series.title}</h2>
              <p>{page.series.dek}</p>
              <p className="story__meta">{page.series.meta}</p>
            </div>
            <Feature
              art={page.series.art}
              eyebrow="Staffroom Review"
              title="A conversation worth staying with."
              dek="Audio that leaves enough space for a thought to develop."
              href="#series-principle"
            />
          </section>

          <section className={styles.formats} aria-labelledby="formats-title">
            <SectionHeader
              id="formats-title"
              title="The formats"
              description="Different ways of listening, depending on the question."
            />
            <div className={styles.formatsGrid}>
              {page.formats.map((format) => (
                <article className={styles.format} key={format.title}>
                  <p className="eyebrow">Staffroom Review</p>
                  <h2>{format.title}</h2>
                  <p>{format.dek}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.closing} aria-labelledby="podcasts-closing-title">
            <p className="eyebrow">Keep listening</p>
            <h2 id="podcasts-closing-title">The best conversations leave you with a better question.</h2>
            <p>
              New episodes will be announced through The Staffroom Letter, alongside stories and ideas
              worth carrying into the week.
            </p>
            <a href="/newsletter">Get podcast updates through The Staffroom Letter</a>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
