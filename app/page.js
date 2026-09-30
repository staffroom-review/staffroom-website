import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import FeatureStory from "../components/FeatureStory";
import StoryCard from "../components/StoryCard";
import CompactStory from "../components/CompactStory";
import StoryList from "../components/StoryList";
import QuoteBlock from "../components/QuoteBlock";
import ImageStory from "../components/ImageStory";
import SectionHeader from "../components/SectionHeader";

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
      imageAlt: "Abstract editorial placeholder for a teacher preparing before class",
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
      imageAlt: "Abstract editorial placeholder for unseen teacher work",
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
      imageAlt: "Abstract editorial placeholder for a staffroom",
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
      imageAlt: "Abstract editorial placeholder for a classroom",
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
      imageAlt: "Abstract editorial placeholder for a student question",
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

export default function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="homepage">
        <section className="page-width homepage__lead" aria-labelledby="lead-title">
          <FeatureStory
            eyebrow="Lead story · The Staffroom"
            title="A school day is made of hundreds of small decisions"
            dek="Teaching is often described through lessons and outcomes. The lived reality is more granular: the judgement calls, interruptions, recoveries and quiet acts of care that make a school day work."
            image={images.lead}
            imageAlt="Abstract editorial placeholder representing a teacher's school day"
            section="The Staffroom"
            format="Cover story"
            author="Staffroom Review"
            date="30 Sep 2026"
            readingTime="12 min"
            href="#lead"
            className="homepage__lead-story"
          />
        </section>

        <section className="page-width homepage__section" aria-labelledby="staffroom-heading">
          <SectionHeader
            eyebrow="01 · The Staffroom"
            title="The people who make a school"
            description="The lived experience of teaching: the routines, relationships and contradictions that rarely fit inside a lesson plan."
          />
          <div className="editorial-grid">
            {stories.staffroom.map((story, index) => (
              <StoryCard
                key={story.title}
                {...story}
                href={`#staffroom-${index}`}
                imageRatio="standard"
                className={index === 1 ? "paper-lift homepage-card homepage-card--raised" : "homepage-card"}
              />
            ))}
          </div>
        </section>

        <section className="surface-muted homepage__band" aria-label="Editorial voice">
          <div className="page-width">
            <QuoteBlock
              quote="The job is not only to teach the subject. It is to notice what the room needs next."
              attribution="A Staffroom Review contributor"
            />
          </div>
        </section>

        <section className="page-width homepage__section" aria-labelledby="classroom-heading">
          <SectionHeader
            eyebrow="02 · The Classroom"
            title="What actually happens when teaching begins"
            description="The classroom as it is experienced, rather than as it is described from a distance."
          />
          <div className="homepage-split">
            <StoryCard
              {...stories.classroom[0]}
              href="#classroom-feature"
              imageRatio="standard"
              className="paper-lift homepage-card homepage-card--feature"
            />
            <div className="homepage-stack">
              {stories.classroom.slice(1).map((story, index) => (
                <CompactStory key={story.title} {...story} href={`#classroom-${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="page-width homepage__section homepage__section--accent" aria-labelledby="school-heading">
          <SectionHeader
            eyebrow="03 · The School Behind the School"
            title="The work around the work"
            description="Leadership, administration, staffing, parents and the institutional decisions that shape everyday teaching."
          />
          <div className="editorial-grid homepage-school-grid">
            <div className="span-7">
              <StoryCard
                title="The invisible architecture of a good school"
                dek="Policies matter. So do the habits that quietly turn them into culture."
                image={images.school1}
                imageAlt="Abstract editorial placeholder for school systems"
                section="The School Behind the School"
                format="Feature"
                author="Staffroom Review"
                date="26 Sep 2026"
                readingTime="9 min"
                href="#school-feature"
                imageRatio="standard"
                className="homepage-card paper-lift"
              />
            </div>
            <div className="span-5 homepage-school-note">
              <p className="eyebrow">Institutional life</p>
              <h3 className="type-secondary">A school is also a set of decisions about time, attention and responsibility.</h3>
              <p className="type-body">The most consequential work can happen far from the classroom: in corridors, calendars, meetings and conversations.</p>
              <CompactStory
                title="When the timetable tells a different story"
                dek="A compact look at what scheduling reveals about priorities."
                image={images.school2}
                imageAlt="Abstract editorial placeholder for school scheduling"
                section="The School Behind the School"
                format="Essay"
                author="Staffroom Review"
                date="25 Sep 2026"
                readingTime="5 min"
                href="#school-timetable"
              />
            </div>
          </div>
        </section>

        <section className="page-width homepage__section" aria-labelledby="voices-heading">
          <SectionHeader eyebrow="04 · Voices" title="Teachers in their own words" />
          <div className="editorial-grid">
            <div className="span-6">
              <ImageStory
                eyebrow="First person"
                title="I stopped trying to make every lesson look successful"
                dek="A teacher on learning to distinguish visible activity from meaningful learning."
                image={images.voices}
                imageAlt="Abstract editorial placeholder for a first-person teacher story"
                section="Voices"
                author="Staffroom Review"
                date="24 Sep 2026"
                readingTime="8 min"
                href="#voice-one"
                className="paper-lift homepage-card"
              />
            </div>
            <div className="span-6">
              <StoryList stories={listStories.slice(0, 3)} />
            </div>
          </div>
        </section>

        <section className="page-width homepage__section" aria-labelledby="subjects-heading">
          <SectionHeader
            eyebrow="05 · Subjects"
            title="The subjects teachers return to"
            description="Ideas, classrooms and the particular pleasures and problems of teaching a subject well."
          />
          <div className="editorial-grid">
            <div className="span-5">
              <StoryCard
                title="Why history classrooms need uncertainty"
                dek="The past becomes more interesting when students can see where the evidence ends."
                image={images.subjects}
                imageAlt="Abstract editorial placeholder for a history classroom"
                section="Subjects"
                format="Subject"
                author="Staffroom Review"
                date="23 Sep 2026"
                readingTime="7 min"
                href="#history"
                imageRatio="portrait"
                className="homepage-card paper-lift"
              />
            </div>
            <div className="span-4">
              <StoryCard
                title="The strange beauty of a difficult maths problem"
                dek="What teachers notice when students stop looking for the quickest answer."
                image={images.subjects2}
                imageAlt="Abstract editorial placeholder for mathematics"
                section="Subjects"
                format="Subject"
                author="Staffroom Review"
                date="22 Sep 2026"
                readingTime="6 min"
                href="#maths"
                imageRatio="standard"
                className="homepage-card"
              />
            </div>
            <div className="span-3">
              <StoryList stories={listStories.slice(1)} />
            </div>
          </div>
        </section>

        <section className="surface-muted homepage__section homepage__section--wide" aria-labelledby="beyond-heading">
          <div className="page-width">
            <SectionHeader
              eyebrow="06 · Beyond the Staffroom"
              title="A wider view of education"
              description="International and comparative stories, used to ask questions that matter in Indian schools."
            />
            <div className="editorial-grid">
              <div className="span-8">
                <FeatureStory
                  eyebrow="Comparative education"
                  title="What changes when a school gives teachers more time?"
                  dek="Across different systems, the same question produces very different answers."
                  image={images.beyond}
                  imageAlt="Abstract editorial placeholder for comparative education"
                  section="Beyond the Staffroom"
                  format="Feature"
                  author="Staffroom Review"
                  date="20 Sep 2026"
                  readingTime="10 min"
                  href="#beyond"
                  className="homepage-card paper-lift"
                />
              </div>
              <div className="span-4 homepage-compact-column">
                <CompactStory
                  title="The schools that made room for play"
                  dek="What happens when the timetable changes its priorities."
                  section="Beyond the Staffroom"
                  format="International"
                  author="Staffroom Review"
                  date="19 Sep 2026"
                  readingTime="5 min"
                  href="#play"
                />
                <CompactStory
                  title="A lesson from a school without bells"
                  dek="A different rhythm can produce a different classroom."
                  section="Beyond the Staffroom"
                  format="International"
                  author="Staffroom Review"
                  date="18 Sep 2026"
                  readingTime="4 min"
                  href="#bells"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="page-width homepage__section" aria-labelledby="long-read-heading">
          <SectionHeader eyebrow="07 · The Long Read" title="For when the question needs more room" />
          <div className="homepage-long-read">
            <div className="homepage-long-read__image">
              <img src={images.long} alt="Abstract editorial placeholder for a long-form education story" />
            </div>
            <div className="homepage-long-read__body">
              <p className="eyebrow">Long read</p>
              <h2 className="type-secondary">The school that learned to listen before it changed</h2>
              <p className="type-body">A substantial Staffroom Review story about culture, listening and the slow work of institutional change.</p>
              <p className="type-meta">Staffroom Review · 16 Sep 2026 · 18 min</p>
              <a className="homepage-text-link" href="#long-read">Read the long read →</a>
            </div>
          </div>
        </section>

        <section className="page-width homepage__section" aria-labelledby="visual-heading">
          <SectionHeader eyebrow="08 · Visual Story" title="See the school year differently" />
          <div className="editorial-grid">
            <div className="span-8">
              <ImageStory
                title="A school year, measured in moments rather than months"
                dek="A visual explanation of the recurring rhythms that organise a teacher's year."
                image={images.visual}
                imageAlt="Abstract editorial placeholder for a visual story"
                section="Visual Story"
                author="Staffroom Review"
                date="14 Sep 2026"
                readingTime="4 min"
                href="#visual"
                className="homepage-card paper-lift"
              />
            </div>
            <div className="span-4 homepage-closing-list">
              <StoryList stories={listStories.slice(0, 2)} />
            </div>
          </div>
        </section>

        <section className="page-width homepage__section homepage__closing" aria-labelledby="closing-heading">
          <SectionHeader eyebrow="09 · Closing editorial" title="A few things worth carrying into tomorrow" />
          <div className="editorial-grid">
            {[
              "The teacher who changed the seating plan",
              "A note on ordinary school days",
              "What we mean when we say 'good teaching'",
            ].map((title, index) => (
              <CompactStory
                key={title}
                title={title}
                dek={index === 0 ? "A small change, a different room." : index === 1 ? "The everyday deserves attention too." : "A phrase with more weight than it first appears to carry."}
                section="Closing editorial"
                format="Note"
                author="Staffroom Review"
                date="12 Sep 2026"
                readingTime="3 min"
                href={`#closing-${index}`}
              />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
