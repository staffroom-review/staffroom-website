import Feature from "../../components/Feature";
import Story from "../../components/Story";
import SectionHeader from "../../components/SectionHeader";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { editorialPlaceholders } from "../../data/editorial";

export const metadata = {
  title: "Blog — Staffroom Review",
  description: "Staffroom Notes: shorter pieces about teaching, schools and the details that are easy to miss when the day moves too quickly.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const blog = editorialPlaceholders.blog;

  return (
    <div className="site">
      <Header />
      <main id="main-content" className="content-page">
        <div className="page-shell">
          <header className="content-page__intro">
            <p className="eyebrow">Blog</p>
            <h1>{blog.name}</h1>
            <p>{blog.promise}</p>
          </header>

          <section className="reference-section content-page__section content-page__section--first">
            <div className="content-page__lead">
              <Feature
                art={blog.posts[0].art}
                eyebrow={blog.posts[0].format}
                title={blog.posts[0].title}
                dek={blog.posts[0].dek}
                href={`#${blog.posts[0].slug}`}
                centered
                elevated
              />
            </div>
          </section>

          <section className="reference-section content-page__section content-page__section--tinted" aria-labelledby="blog-recent-title">
            <SectionHeader
              id="blog-recent-title"
              title="Staffroom Notes"
              description="Short-form pieces with enough substance to become longer essays, guides or features later."
            />
            <div className="content-page__grid content-page__grid--three">
              {blog.posts.slice(1).map((post) => (
                <Story
                  key={post.slug}
                  eyebrow={post.format}
                  title={post.title}
                  dek={post.dek}
                  art={post.art}
                  href={`#${post.slug}`}
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
