import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import Story from "../components/Story";
import Feature from "../components/Feature";
import CollectionColumn from "../components/CollectionColumn";
import { content } from "../data/content";
import { imagery } from "../data/imagery";
import { getStoryBySlug, storyRegistry } from "../data/story-registry";

const storyHref = (title) => {
  const story = storyRegistry.find((item) => item.title.toLowerCase() === title.toLowerCase() || item.aliases.some((alias) => alias.toLowerCase() === title.toLowerCase()));
  return story ? `/stories/${story.slug}` : "#story";
};

const storyMeta = (title) => storyRegistry.find((item) => item.title.toLowerCase() === title.toLowerCase() || item.aliases.some((alias) => alias.toLowerCase() === title.toLowerCase()));

export default function HomePage() {
  return (
    <div className="site">
      <Header />

      <main id="main-content">
          <h1 className="sr-only">Staffroom Review</h1>
        <section className="reference-section reference-section--opening">
          <div className="page-shell">
            <div className="opening-layout">
              <div className="opening-side opening-side--left">
                <Story
                  eyebrow="Classrooms"
                  title={content.classTired.title} href={storyHref(content.classTired.title)} analyticsId={storyMeta(content.classTired.title)?.id}
                  dek={content.classTired.dek}
                  variant="side"
                />
                <div className="side-promotional-art">
                  <img
                    className="side-promotional-art__image"
                    src={imagery.storyA.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span>Stories from the room</span>
                </div>
              </div>

              <Feature
                className="opening-feature"
                art={imagery.hero}
                eyebrow="Stories · Teachers"
                title={content.lead.title} href={storyHref(content.lead.title)} analyticsId={storyMeta(content.lead.title)?.id}
                dek={content.lead.dek}
                centered
                priority
              />

              <aside className="opening-support">
                <div className="support-card">
                  <div className="support-card__icon" aria-hidden="true">▰</div>
                  <p className="support-card__label">Most-read conversations</p>
                  <h2>
                    A school works because someone notices what the room needs next
                  </h2>
                  <p>
                    A compact Staffroom counterpart to the reference support module:
                    a fast entry point into the stories readers are returning to.
                  </p>
                  <a href="#stories">View stories</a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="reference-section reference-section--feature-support" id="stories">
          <div className="page-shell">
            <SectionHeader title="The Staffroom" description="The lived work of teaching, before the lesson and after it." />
            <div className="feature-support">
              <Feature
                art={imagery.staffroom}
                eyebrow="Teachers · First Person"
                title={content.teacherLeave.title} href={storyHref(content.teacherLeave.title)} analyticsId={storyMeta(content.teacherLeave.title)?.id}
                dek={content.teacherLeave.dek}
                centered
                elevated
              />
              <div className="feature-support__rail">
                <Story
                  eyebrow="Voices"
                  title={content.classNeverForget.title} href={storyHref(content.classNeverForget.title)} analyticsId={storyMeta(content.classNeverForget.title)?.id}
                  dek="A teacher remembers the class that changed the way she understood attention, patience and time."
                  variant="side"
                />
                <Story
                  eyebrow="The Staffroom"
                  title={content.staffroomUnseen.title} href={storyHref(content.staffroomUnseen.title)} analyticsId={storyMeta(content.staffroomUnseen.title)?.id}
                  dek={content.staffroomUnseen.dek}
                  art={imagery.storyB}
                />
                <Story
                  eyebrow="The Staffroom"
                  title={content.staffroomMakes.title} href={storyHref(content.staffroomMakes.title)} analyticsId={storyMeta(content.staffroomMakes.title)?.id}
                  dek={content.staffroomMakes.dek}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="reference-section reference-section--dense" aria-labelledby="recommend-title">
          <div className="page-shell">
            <SectionHeader
              title="Recommended for teachers"
              description="Stories and ideas we think you might like."
              id="recommend-title"
            />
            <div className="recommend-grid">
              <div className="recommend-column recommend-column--list">
                <Story eyebrow="Teachers" title={content.teacherLeave.title} href={storyHref(content.teacherLeave.title)} analyticsId={storyMeta(content.teacherLeave.title)?.id} dek={content.teacherLeave.dek} compact />
                <Story eyebrow="Teachers" title={content.fiveYear.title} compact />
                <Story eyebrow="Classrooms" title={content.classTired.title} href={storyHref(content.classTired.title)} analyticsId={storyMeta(content.classTired.title)?.id} compact />
                <Story eyebrow="Ideas" title={content.homeworkAI.title} compact />
                <Story eyebrow="Schools" title={content.meetingAte.title} href={storyHref(content.meetingAte.title)} analyticsId={storyMeta(content.meetingAte.title)?.id} compact />
              </div>

              <div className="recommend-column">
                <Story
                  eyebrow="The Classroom"
                  title={content.mathLess.title}
                  dek={content.mathLess.dek}
                  art={imagery.maths}
                  variant="image-lead"
                />
                <Story eyebrow="Classrooms" title={content.childSentOut.title} dek={content.childSentOut.dek} compact />
                <Story eyebrow="Voices" title={content.teacherDifficult.title} dek={content.teacherDifficult.dek} compact />
              </div>

              <div className="recommend-column">
                <Story
                  eyebrow="School Leadership"
                  title={content.principalMeasures.title}
                  dek={content.principalMeasures.dek}
                  variant="side"
                />
                <Story
                  eyebrow="Schools"
                  title={content.marksParents.title}
                  dek={content.marksParents.dek}
                  art={imagery.storyC}
                />
                <Story
                  eyebrow="Schools"
                  title={content.timetable.title}
                  dek={content.timetable.dek}
                  compact
                />
              </div>
            </div>
          </div>
        </section>

        <section className="reference-section reference-section--central">
          <div className="page-shell">
            <SectionHeader title="The School Behind the School" description="The systems, conversations and people around the classroom." />
            <div className="central-layout">
              <div className="central-side">
                <Story
                  eyebrow="School life"
                  title={content.schoolInvisible.title}
                  dek={content.schoolInvisible.dek}
                  variant="side"
                />
                <Story
                  eyebrow="Profile"
                  title={content.administrator.title}
                  dek={content.administrator.dek}
                  art={imagery.school}
                />
              </div>

              <Feature
                art={imagery.schoolFeature}
                eyebrow="Schools · Feature"
                title={content.marksParents.title}
                dek={content.marksParents.dek}
                centered
                elevated
              />

              <div className="central-side">
                <Story
                  eyebrow="Relationships"
                  title={content.parentMeeting.title}
                  dek={content.parentMeeting.dek}
                  variant="side"
                />
                <Story
                  eyebrow="Field Note"
                  title={content.timetable.title}
                  dek={content.timetable.dek}
                  art={imagery.storyD}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="reference-section reference-section--collection">
          <div className="page-shell">
            <div className="collection-ribbon" aria-hidden="true">
              <span>NEWSLETTERS</span>
            </div>
            <div className="newsletter-grid">
              <CollectionColumn
                title="The Staffroom"
                art={imagery.storyE}
                leadTitle={content.staffroomBefore.title}
                stories={[
                  content.staffroomUnseen.title,
                  content.staffroomMakes.title,
                  content.teacherLeave.title,
                  content.teacherDifficult.title,
                ]}
              />
              <CollectionColumn
                title="In Practice"
                art={imagery.classroom}
                leadTitle={content.lessonChanges.title}
                stories={[
                  content.studentQuestion.title,
                  content.classTired.title,
                  content.homeworkAI.title,
                  content.childSentOut.title,
                ]}
              />
              <CollectionColumn
                title="Subjects"
                art={imagery.subjects}
                leadTitle={content.historyUncertainty.title}
                stories={[
                  content.mathsBeauty.title,
                  content.englishTeachers.title,
                  content.scienceEquipment.title,
                  content.musicMargins.title,
                ]}
              />
              <CollectionColumn
                title="Voices"
                art={imagery.voices}
                leadTitle={content.classNeverForget.title}
                stories={[
                  content.teacherLeave.title,
                  content.teacherCarryHome.title,
                  content.schoolBeyondMetro.title,
                  content.teacherThreeClasses.title,
                ]}
              />
              <CollectionColumn
                title="Beyond the Staffroom"
                art={imagery.world}
                leadTitle={content.japan.title}
                stories={[
                  content.finland.title,
                  content.america.title,
                  content.play.title,
                  content.noBells.title,
                ]}
              />
            </div>
          </div>
        </section>

        <section className="reference-section reference-section--feature-chapter reference-section--last">
          <div className="page-shell">
            <SectionHeader title="The Long Read" description="For when the question needs more room." />
            <div className="feature-chapter-layout">
              <div className="feature-chapter-side">
                <Story
                  eyebrow="Visual Story"
                  title={content.visualWeek.title} href={storyHref(content.visualWeek.title)} analyticsId={storyMeta(content.visualWeek.title)?.id}
                  dek={content.visualWeek.dek}
                  art={imagery.visual}
                />
                <Story
                  eyebrow="Closing editorial"
                  title={content.closing1.title} href={storyHref(content.closing1.title)} analyticsId={storyMeta(content.closing1.title)?.id}
                  dek={content.closing1.dek}
                  compact
                />
              </div>

              <Feature
                art={imagery.longread}
                eyebrow="Ideas · Long Read"
                title={content.longRead.title} href={storyHref(content.longRead.title)} analyticsId={storyMeta(content.longRead.title)?.id}
                dek={content.longRead.dek}
                centered
                elevated
              />

              <div className="feature-chapter-side">
                <Story
                  eyebrow="Closing editorial"
                  title={content.closing2.title} href={storyHref(content.closing2.title)} analyticsId={storyMeta(content.closing2.title)?.id}
                  dek={content.closing2.dek}
                  compact
                />
                <Story
                  eyebrow="Closing editorial"
                  title={content.closing3.title} href={storyHref(content.closing3.title)} analyticsId={storyMeta(content.closing3.title)?.id}
                  dek={content.closing3.dek}
                  compact
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
