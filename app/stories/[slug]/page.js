import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  getStoryBySlug,
  getStoriesBySection,
  storyRegistry,
} from "../../../data/story-registry";
import { getStoryArticle } from "../../../data/story-articles";
import styles from "./story.module.css";

const PUBLIC_STATUSES = new Set(["published", "updated"]);

function getHero(article) {
  if (article?.hero) return article.hero;
  const firstImage = article?.blocks?.find((block) => block.type === "image");
  return firstImage?.src ? firstImage : null;
}

function ArticleBlocks({ blocks = [] }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case "heading":
        return <h2 className={styles.sectionHeading} key={index}>{block.text}</h2>;
      case "quote":
        return (
          <figure className={styles.quote} key={index}>
            <blockquote>{block.text}</blockquote>
            {block.attribution ? <figcaption>{block.attribution}</figcaption> : null}
          </figure>
        );
      case "list":
        return (
          <ul className={styles.list} key={index}>
            {(block.items || []).map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
          </ul>
        );
      case "image":
        return (
          <figure className={styles.inlineFigure} key={index}>
            <img src={block.src} alt={block.alt || ""} loading="lazy" decoding="async" />
            {block.caption || block.credit ? (
              <figcaption>
                {block.caption ? <span>{block.caption}</span> : null}
                {block.credit ? <small>{block.credit}</small> : null}
              </figcaption>
            ) : null}
          </figure>
        );
      case "paragraph":
      default:
        return <p className={styles.paragraph} key={index}>{block.text}</p>;
    }
  });
}

export async function generateStaticParams() {
  return storyRegistry
    .filter((story) => PUBLIC_STATUSES.has(story.editorialStatus))
    .filter((story) => getStoryArticle(story.id)?.blocks?.length)
    .map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) return {};

  const article = getStoryArticle(story.id);
  const description = article?.metaDescription || story.excerpt;

  return {
    title: story.title + " | Staffroom Review",
    description,
    alternates: { canonical: "/stories/" + story.slug },
    openGraph: {
      title: story.title,
      description,
      type: "article",
      url: "/stories/" + story.slug,
      publishedTime: story.publication.publishedAt || undefined,
      modifiedTime: story.publication.updatedAt || undefined,
      authors: story.authorship.author ? [story.authorship.author] : undefined,
      section: story.primarySection,
    },
  };
}

export default async function StoryArticlePage({ params }) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story || !PUBLIC_STATUSES.has(story.editorialStatus)) notFound();

  const article = getStoryArticle(story.id);
  if (!article?.blocks?.length) notFound();

  const hero = getHero(article);
  const related = getStoriesBySection(story.primarySection)
    .filter((item) => item.id !== story.id)
    .filter((item) => PUBLIC_STATUSES.has(item.editorialStatus))
    .filter((item) => getStoryArticle(item.id)?.blocks?.length)
    .slice(0, 3);

  const publishedDate = story.publication.publishedAt
    ? new Date(story.publication.publishedAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const updatedDate =
    story.publication.updatedAt && story.publication.updatedAt !== story.publication.publishedAt
      ? new Date(story.publication.updatedAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null;

  return (
    <div className="site">
      <Header />
      <main className={styles.page}>
        <article>
          <header className={styles.articleHeader}>
            <div className={styles.eyebrowRow}>
              <span>{story.primarySection}</span>
              <span className={styles.rule} aria-hidden="true" />
              <span>{story.format}</span>
            </div>
            <h1>{story.title}</h1>
            <p className={styles.dek}>{story.excerpt}</p>
            <div className={styles.byline}>
              <span>By {story.authorship.author}</span>
              {publishedDate ? <span>Published {publishedDate}</span> : null}
              {updatedDate ? <span>Updated {updatedDate}</span> : null}
              {article.readingTime ? <span>{article.readingTime}</span> : null}
            </div>
          </header>

          {hero?.src ? (
            <figure className={styles.hero}>
              <img src={hero.src} alt={hero.alt || ""} fetchPriority="high" decoding="async" />
              {hero.caption || hero.credit ? (
                <figcaption>
                  {hero.caption ? <span>{hero.caption}</span> : null}
                  {hero.credit ? <small>{hero.credit}</small> : null}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className={styles.articleGrid}>
            <aside className={styles.articleRail}>
              <p className={styles.railLabel}>Staffroom Review</p>
              <p>One story, read at the pace it deserves.</p>
            </aside>

            <div className={styles.articleBody}>
              <ArticleBlocks blocks={article.blocks} />

              {article.sources?.length ? (
                <section className={styles.sources} aria-labelledby="sources-heading">
                  <h2 id="sources-heading">Sources & notes</h2>
                  <ul>
                    {article.sources.map((source, index) => (
                      <li key={index}>
                        {source.url ? <a href={source.url}>{source.label || source.url}</a> : source.label || source}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </div>

          {related.length ? (
            <section className={styles.related} aria-labelledby="related-heading">
              <div>
                <p className={styles.eyebrow}>Continue reading</p>
                <h2 id="related-heading">More from {story.primarySection}</h2>
              </div>
              <div className={styles.relatedGrid}>
                {related.map((item) => (
                  <a className={styles.relatedCard} href={"/stories/" + item.slug} key={item.id}>
                    <span>{item.format}</span>
                    <strong>{item.title}</strong>
                    <p>{item.excerpt}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}
        </article>
      </main>
      <Footer />
    </div>
  );
}
