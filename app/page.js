import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import StoryCard from "../components/StoryCard";
import CompactStory from "../components/CompactStory";
import ImageStory from "../components/ImageStory";
import StoryList from "../components/StoryList";
import EditorialRule from "../components/EditorialRule";

const placeholder = (label, background, foreground = "#f6f3eb") =>
  "data:image/svg+xml;charset=UTF-8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">' +
      '<rect width="1200" height="800" fill="' + background + '"/>' +
      '<circle cx="930" cy="170" r="220" fill="' + foreground + '" opacity=".16"/>' +
      '<rect x="90" y="560" width="520" height="10" fill="' + foreground + '" opacity=".65"/>' +
      '<rect x="90" y="592" width="350" height="7" fill="' + foreground + '" opacity=".38"/>' +
      '<text x="90" y="120" fill="' + foreground + '" font-family="Georgia,serif" font-size="42">' + label + '</text>' +
    '</svg>'
  );

const images = {
  lead: placeholder("A teacher's day", "#8e2f2d"),
  staffroom1: placeholder("Before the bell", "#243a36"),
  staffroom2: placeholder("The quiet work", "#6b6255"),
  staffroom3: placeholder("After school", "#374a68"),
  classroom1: placeholder("Learning in motion", "#765b42"),
  classroom2: placeholder("The question", "#8a4f54"),
  school1: placeholder("Inside the system", "#4f5550"),
  school2: placeholder("The work behind work", "#806c4e"),
  voices: placeholder("A teacher speaks", "#5d4a65"),
  subjects: placeholder("History class", "#6f684d"),
  subjects2: placeholder("Mathematics", "#405b64"),
  beyond: placeholder("A wider classroom", "#536b58"),
  visual: placeholder("A school year", "#8e2f2d"),
  long: placeholder("The long read", "#343434"),
};

const stories = {
  staffroom: [
    {
      title: "The five minutes before the bell",
      dek: "What teachers do before a class begins often shapes everything that follows.",
      image: images.staffroom1,
      imageAlt: "Editorial placeholder for a teacher preparing before class",
      section: "The Staffroom",
      format: "Essay",
      author: "Staffroom Review",
      date: "30 Sep 2026",
      readingTime: "6 min",
    },
    {
      title: "The work nobody sees after the last child leaves",
      dek: "Planning, checking, calling home and starting again tomorrow.",
      image: images.staffroom2,
      imageAlt: "Editorial placeholder for unseen teacher work",
      section: "The Staffroom",
      format: "Essay",
      author: "Staffroom Review",
      date: "30 Sep 2026",
      readingTime: "7 min",
    },
    {
      title: "What a good staffroom makes possible",
      dek: "The informal conversations that keep difficult days moving.",
      image: images.staffroom3,
      imageAlt: "Editorial placeholder for a staffroom",
      section: "The Staffroom",
      format: "Conversation",
      author: "Staffroom Review",
      date: "30 Sep 2026",
      readingTime: "5 min",
    },
  ],
  classroom: [
    {
      title: "When the lesson changes halfway through",
      dek: "A classroom is rarely the plan written the night before.",
      image: images.classroom1,
      imageAlt: "Editorial placeholder for a classroom",
      section: "The Classroom",
      format: "Classroom",
      author: "Staffroom Review",
      date: "29 Sep 2026",
      readingTime: "8 min",
    },
    {
      title: "The student who changes the question",
      dek: "Sometimes the most useful lesson begins with an interruption.",
      image: images.classroom2,
      imageAlt: "Editorial placeholder for a student question",
      section: "The Classroom",
      format: "Essay",
      author: "Staffroom Review",
      date: "28 Sep 2026",
      readingTime: "5 min",
    },
    {
      title: "Teaching for the child who is not in the room",
      dek: "Attendance, absence and the invisible edges of a class.",
      section: "The Classroom",
      format: "Essay",
      author: "Staffroom Review",
      date: "27 Sep 2026",
      readingTime: "6 min",
    },
  ],
};

const listStories = [
  {
    title: "The timetable is a map of priorities",
    dek: "What a school chooses to schedule—and what it cannot—reveals its values.",
    eyebrow: "School life",
  },
  {
    title: "A parent meeting is never only a parent meeting",
    dek: "Trust is built in small conversations long before there is a problem to solve.",
    eyebrow: "Relationships",
  },
  {
    title: "The administrator who remembers every child's name",
    dek: "A portrait of the small institutional acts that make a school feel human.",
    eyebrow: "Portrait",
  },
  {
    title: "Who teaches the teachers?",
    dek: "Professional learning works differently when it begins with real classroom questions.",
    eyebrow: "Practice",
  },
];

const discoveryStories = [
  ...listStories,
  {
    title: "The Teacher Who Learned to Leave School on Time",
    dek: "After the Bell: what changes when a teacher stops treating exhaustion as part of the job.",
    eyebrow: "After the Bell",
  },
  {
    title: "The Five-Year Teacher",
    dek: "What changes after the first rush of becoming a teacher has passed.",
    eyebrow: "Teachers",
  },
  {
    title: "The Homework Problem AI Didn't Create",
    dek: "The technology changed the question, but not every problem behind it.",
    eyebrow: "Ideas",
  },
  {
    title: "The Principal Who Stopped Measuring Everything",
    dek: "A school leader reconsiders what numbers can and cannot tell a school.",
    eyebrow: "School Leadership",
  },
];

function SectionTitle({ number, title, description }) {
  return (
    <header className="reference-section-header">
      <div className="reference-section-header__title-row">
        <h2>{title}</h2>
        <EditorialRule variant="accent" />
      </div>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

function StoryText({ story, className = "" }) {
  return (
    <article className={`story-text ${className}`.trim()}>
      {story.eyebrow ? <p className="eyebrow">{story.eyebrow}</p> : null}
      <h3 className="type-secondary"><a href="#story">{story.title}</a></h3>
      {story.dek ? <p className="story-text__dek">{story.dek}</p> : null}
      {story.author ? <p className="type-meta story-text__meta">{story.author}</p> : null}
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="homepage">
        <section className="page-width reference-section reference-section--opening" aria-labelledby="reference-section-1">
          <div className="opening-grid">
            <StoryText
              className="opening-grid__left"
              story={{
                eyebrow: "The Staffroom",
                title: "A school day is made of hundreds of small decisions",
                dek: "Teaching is often described through lessons and outcomes. The lived reality is more granular: the judgement calls, interruptions, recoveries and quiet acts of care that make a school day work.",
                author: "Staffroom Review",
              }}
            />

            <article className="feature-anchor opening-grid__center">
              <a className="image-frame image-frame--feature" href="#lead">
                <img src={images.lead} alt="Editorial placeholder representing a teacher's school day" />
              </a>
              <div className="feature-anchor__body">
                <p className="eyebrow">Staffroom Review · Cover story</p>
                <h1 className="type-lead"><a href="#lead">A school day is made of hundreds of small decisions</a></h1>
                <p className="type-body">Teaching is often described through lessons and outcomes. The lived reality is more granular: the judgement calls, interruptions, recoveries and quiet acts of care that make a school day work.</p>
              </div>
            </article>

            <StoryText
              className="opening-grid__right"
              story={{
                eyebrow: "The School Behind the School",
                title: "The work around the work",
                dek: "Leadership, administration, staffing, parents and the institutional decisions that shape everyday teaching.",
                author: "Staffroom Review",
              }}
            />
          </div>
        </section>

        <section className="page-width reference-section" aria-labelledby="reference-section-2">
          <SectionTitle number="02" title="The Classroom" description="What actually happens when teaching begins." />
          <div className="feature-support-grid">
            <article className="feature-anchor feature-support-grid__main paper-lift">
              <a className="image-frame image-frame--feature" href="#classroom-feature">
                <img src={stories.classroom[0].image} alt={stories.classroom[0].imageAlt} />
              </a>
              <div className="feature-anchor__body">
                <p className="eyebrow">The Classroom · {stories.classroom[0].format}</p>
                <h2 className="type-section"><a href="#classroom-feature">Snapdeal's IPO looks for strength in numbers</a></h2>
                <p className="type-body">{stories.classroom[0].dek} A classroom is rarely the plan written the night before.</p>
              </div>
            </article>
            <div className="feature-support-grid__side">
              <StoryText story={stories.classroom[1]} />
              <CompactStory {...stories.classroom[1]} href="#classroom-2" className="compact-reference-story" />
              <CompactStory {...stories.classroom[2]} href="#classroom-3" className="compact-reference-story compact-reference-story--text-only" />
            </div>
          </div>
        </section>

        <section className="reference-section reference-section--dense surface-muted" aria-labelledby="reference-section-3">
          <div className="page-width">
            <SectionTitle title="Recommended for teachers" description="Stories and ideas we think you might like." />
            <div className="dense-columns">
              {[0, 1, 2, 3, 4].map((column) => (
                <div className="dense-column" key={column}>
                  {column === 0 ? (
                    <StoryCard
                      {...stories.staffroom[0]}
                      href="#discovery-1"
                      imageRatio="wide"
                      className="dense-column__lead"
                    />
                  ) : column === 1 ? (
                    <StoryCard
                      {...stories.staffroom[1]}
                      href="#discovery-2"
                      imageRatio="wide"
                      className="dense-column__lead"
                    />
                  ) : column === 2 ? (
                    <StoryCard
                      {...stories.classroom[1]}
                      href="#discovery-3"
                      imageRatio="wide"
                      className="dense-column__lead"
                    />
                  ) : column === 3 ? (
                    <StoryCard
                      {...stories.classroom[0]}
                      href="#discovery-4"
                      imageRatio="wide"
                      className="dense-column__lead"
                    />
                  ) : (
                    <StoryCard
                      {...stories.staffroom[2]}
                      href="#discovery-5"
                      imageRatio="wide"
                      className="dense-column__lead"
                    />
                  )}
                  <div className="dense-column__list">
                    {discoveryStories.slice(column % 2, column % 2 + 3).map((story, index) => (
                      <StoryText key={`${column}-${index}`} story={story} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-width reference-section" aria-labelledby="reference-section-4">
          <SectionTitle title="The School Behind the School" description="The decisions, systems and people around the classroom." />
          <div className="central-feature-grid">
            <div className="central-feature-grid__side">
              <StoryText story={{ eyebrow: "School life", title: "The invisible architecture of a good school", dek: "Policies matter. So do the habits that quietly turn them into culture.", author: "Staffroom Review" }} />
              <StoryCard
                title="The administrator who remembers every child's name"
                dek="A portrait of the small institutional acts that make a school feel human."
                image={images.school2}
                imageAlt="Editorial placeholder for school systems"
                section="Schools"
                format="Profile"
                author="Staffroom Review"
                date="26 Sep 2026"
                readingTime="7 min"
                href="#school-administrator"
                imageRatio="wide"
              />
            </div>

            <article className="feature-anchor central-feature-grid__main paper-lift">
              <a className="image-frame image-frame--feature" href="#school-feature">
                <img src={images.school1} alt="Editorial placeholder for the systems behind school life" />
              </a>
              <div className="feature-anchor__body feature-anchor__body--centered">
                <p className="eyebrow">The School Behind the School</p>
                <h2 className="type-section"><a href="#school-feature">When marks become the only language parents understand</a></h2>
                <p className="type-body">The most consequential work can happen far from the classroom: in corridors, calendars, meetings and conversations.</p>
              </div>
            </article>

            <div className="central-feature-grid__side">
              <StoryText story={{ eyebrow: "Institutional life", title: "A parent meeting is never only a parent meeting", dek: "Trust is built in small conversations long before there is a problem to solve.", author: "Staffroom Review" }} />
              <StoryCard
                title="When the timetable tells a different story"
                dek="A compact look at what scheduling reveals about priorities."
                image={images.school2}
                imageAlt="Editorial placeholder for school scheduling"
                section="Schools"
                format="Field Note"
                author="Staffroom Review"
                date="25 Sep 2026"
                readingTime="5 min"
                href="#school-timetable"
                imageRatio="wide"
              />
            </div>
          </div>
        </section>

        <section className="reference-section reference-section--dense" aria-labelledby="reference-section-5">
          <div className="page-width">
            <SectionTitle title="Subjects" description="The subjects teachers return to, and the questions inside them." />
            <div className="collection-columns">
              {[
                ["Mathematics", stories.subjects2],
                ["Science", stories.classroom[0]],
                ["English", { title: "What English teachers hear that parents don't", dek: "What teachers notice when language becomes a way of seeing the classroom." }],
                ["Arts", { title: "Why music keeps moving to the margins", dek: "What changes when a subject is treated as optional." }],
                ["Ideas", { title: "The homework problem AI didn't create", dek: "The technology changed the question, but not every problem behind it." }],
              ].map(([heading, story]) => (
                <div className="collection-column" key={heading}>
                  <h3 className="collection-column__heading">{heading}</h3>
                  {story.image ? (
                    <StoryCard
                      {...story}
                      href="#subject"
                      imageRatio="wide"
                      section="Subjects"
                      format="Feature"
                      author="Staffroom Review"
                      date="23 Sep 2026"
                      readingTime="6 min"
                      imageAlt={story.imageAlt}
                    />
                  ) : (
                    <StoryText story={{ eyebrow: "Staffroom Review", ...story }} />
                  )}
                  <StoryList stories={discoveryStories.slice(0, 3)} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="page-width reference-section" aria-labelledby="reference-section-6">
          <SectionTitle title="Voices · Beyond the Staffroom" description="Teachers in their own words, and a wider view of education." />
          <div className="central-feature-grid">
            <div className="central-feature-grid__side">
              <StoryText story={{ eyebrow: "First person", title: "I stopped trying to make every lesson look successful", dek: "A teacher on learning to distinguish visible activity from meaningful learning.", author: "Staffroom Review" }} />
              <StoryList stories={listStories.slice(0, 2)} />
            </div>
            <article className="feature-anchor central-feature-grid__main paper-lift">
              <a className="image-frame image-frame--feature" href="#beyond">
                <img src={images.beyond} alt="Editorial placeholder for comparative education" />
              </a>
              <div className="feature-anchor__body feature-anchor__body--centered">
                <p className="eyebrow">Comparative education</p>
                <h2 className="type-section"><a href="#beyond">What changes when a school gives teachers more time?</a></h2>
                <p className="type-body">Across different systems, the same question produces very different answers.</p>
              </div>
            </article>
            <div className="central-feature-grid__side">
              <StoryText story={{ eyebrow: "World", title: "What Indian teachers can learn from the school day in Japan", dek: "A comparative look at rhythm, autonomy and the school day.", author: "Staffroom Review" }} />
              <ImageStory
                title="A school year, measured in moments rather than months"
                dek="A visual explanation of the recurring rhythms that organise a teacher's year."
                image={images.visual}
                imageAlt="Editorial placeholder for a visual story"
                section="Visual Story"
                author="Staffroom Review"
                date="14 Sep 2026"
                readingTime="4 min"
                href="#visual"
              />
            </div>
          </div>
          <div className="quote-band">
            <blockquote className="type-quote">“The job is not only to teach the subject. It is to notice what the room needs next.”</blockquote>
            <p className="type-meta">A Staffroom Review contributor</p>
          </div>
        </section>

        <section className="page-width reference-section reference-section--closing" aria-labelledby="reference-section-7">
          <SectionTitle title="The Long Read" description="For when the question needs more room." />
          <div className="closing-feature">
            <article className="feature-anchor closing-feature__main paper-lift">
              <a className="image-frame image-frame--feature" href="#long-read">
                <img src={images.long} alt="Editorial placeholder for a long-form education story" />
              </a>
              <div className="feature-anchor__body">
                <p className="eyebrow">Long read</p>
                <h2 className="type-lead"><a href="#long-read">The school that learned to listen before it changed</a></h2>
                <p className="type-body">A substantial Staffroom Review story about culture, listening and the slow work of institutional change.</p>
                <p className="type-meta">Staffroom Review · 16 Sep 2026 · 18 min</p>
              </div>
            </article>
            <div className="closing-feature__side">
              <StoryText story={{ eyebrow: "Closing editorial", title: "The teacher who changed the seating plan", dek: "A small change, a different room.", author: "Staffroom Review" }} />
              <StoryText story={{ eyebrow: "Closing editorial", title: "A note on ordinary school days", dek: "The everyday deserves attention too.", author: "Staffroom Review" }} />
              <StoryText story={{ eyebrow: "Closing editorial", title: "What we mean when we say 'good teaching'", dek: "A phrase with more weight than it first appears to carry.", author: "Staffroom Review" }} />
              <StoryText story={{ eyebrow: "Visual Story", title: "A Teacher's Week, Item by Item", dek: "A visual record of the small objects and routines that make up a week.", author: "Staffroom Review" }} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
