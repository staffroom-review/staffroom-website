// Staffroom Review — Canonical Story Registry
//
// One master record per story. Page files are presentation layers; this registry
// is the editorial index used for retrieval, overlap checking and publication QA.

export const STORY_SECTIONS = [
  "Homepage",
  "Stories",
  "Teachers",
  "Classrooms",
  "Schools",
  "Ideas",
  "World",
  "Voices",
  "Newsletter",
  "Blog",
  "Events",
  "More",
];

export const STORY_FORMATS = [
  "Reported Feature",
  "First Person",
  "Profile",
  "Interview / Q&A",
  "Analysis",
  "Practical Guide",
  "Essay",
  "Long Read",
  "Visual Story",
  "Observation",
  "Teaching Note",
  "Staffroom Note",
  "School Life",
  "Editorial Note",
  "Newsletter Edition",
  "Blog / Staffroom Note",
  "Argument",
  "Interpretation",
];

export const STORY_STATUSES = [
  "idea",
  "pitched",
  "commissioned",
  "drafting",
  "editing",
  "approved",
  "scheduled",
  "published",
  "updated",
  "archived",
  "hold",
  "placeholder",
];

export const AUTHOR_TYPES = [
  "Staffroom",
  "Human Contributor",
  "Collaborative",
];

export const AI_INVOLVEMENT = [
  "None",
  "AI-assisted",
  "AI-drafted",
  "AI-drafted / human-edited",
];

const tagRules = [
  ["ai", /\bai\b/i],
  ["teacher workload", /workload|exhaustion|carry home|leave school|time pressure|meeting/i],
  ["teacher identity", /teacher|teaching|kind of teacher|staffroom/i],
  ["classroom practice", /classroom|lesson|student|desk|silence|question|teaching practice/i],
  ["school culture", /school culture|community|belong|institutional|culture/i],
  ["leadership", /principal|headteacher|leadership|administrator/i],
  ["school systems", /timetable|system|coordination|operations|bus|schedule/i],
  ["curriculum", /curriculum|mathematics|maths|english|science|music|syllabus/i],
  ["assessment", /marks|measuring|measure|numbers/i],
  ["relationships", /parent|staffroom|community|relationships|conversation/i],
  ["belonging", /belong|removal|sent out|community/i],
  ["planning", /plan|planning/i],
  ["comparative education", /country|countries|Japan|Finland|American|America|India|international|somewhere else|travel/i],
  ["attention", /attention|silence|concentration|focus/i],
  ["school day", /school day|bell|morning|first period|time|before|after/i],
];

function deriveTags(title, dek, sections = [], format = "") {
  const haystack = [title, dek, ...sections, format].join(" ");
  const tags = tagRules.filter(([, rule]) => rule.test(haystack)).map(([tag]) => tag);
  return [...new Set(tags)].slice(0, 6);
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function makeStory({
  id,
  title,
  dek,
  format,
  primarySection,
  placements = [],
  status = "placeholder",
  author = "Staffroom Review",
  authorType = "Staffroom",
  aiInvolvement = "AI-drafted",
  authorialVoice = null,
  aliases = [],
  sourceRefs = [],
  articleUrl = null,
  plannedArticleUrl = null,
  publishedAt = null,
  updatedAt = null,
  newsletterEligible = false,
  notes = "",
  verification = null,
}) {
  const slug = slugify(title);
  const sections = [primarySection, ...placements.map((p) => p.section || p).filter(Boolean)];
  return {
    id,
    title,
    slug,
    aliases,
    format,
    primarySection,
    placements,
    excerpt: dek || "",
    editorialSummary: dek || "",
    tags: deriveTags(title, dek || "", sections, format),
    topics: [...new Set(sections)].filter(Boolean),
    authorship: {
      author,
      authorType,
      aiInvolvement,
      editor: null,
    },
    editorialStatus: status,
    publication: {
      articleUrl,
      plannedArticleUrl: plannedArticleUrl || null,
      publishedAt,
      updatedAt,
      newsletterEligible,
    },
    sourceRefs,
    notes,
    verification: verification || {
      lastChecked: null,
      outcome: "not-yet-checked",
      override: false,
      overrideNote: "",
    },
  };
}

export const storyRegistry = [
  makeStory({
    id: "SR-2026-0001",
    title: "The Work of Teaching Begins Before the Lesson Does",
    dek: "Teachers arrive with plans, but they also arrive with a room to read: who is tired, who is absent, what happened yesterday and what might change in the next fifty minutes.",
    format: "Reported Feature",
    primarySection: "Stories",
    sourceRefs: ["data/stories.js"],
  }),
  makeStory({
    id: "SR-2026-0002",
    title: "The Teacher Who Learned to Leave School on Time",
    dek: "After years of treating exhaustion as evidence of commitment, one teacher begins to separate care for students from the demand to be endlessly available.",
    format: "First Person",
    primarySection: "Voices",
    placements: [{ section: "Stories", url: "/stories#teacher-leave" }, { section: "Teachers", url: "/teachers#teacher-leave" }],
    sourceRefs: ["data/stories.js", "data/teachers.js", "data/voices.js"],
  }),
  makeStory({
    id: "SR-2026-0003",
    title: "When the Class Is Tired Before First Period",
    dek: "The first lesson of the day can reveal more about a school than any timetable document. Teachers notice the signs long before a problem has a name.",
    format: "Observation",
    authorialVoice: "Quiet Observer",
    primarySection: "Stories",
    placements: [{ section: "Homepage", url: "/" }],
    status: "published",
    articleUrl: "/stories/when-the-class-is-tired-before-first-period",
    plannedArticleUrl: "/stories/when-the-class-is-tired-before-first-period",
    publishedAt: "2026-10-03",
    verification: {
      lastChecked: "2026-10-03",
      outcome: "no-close-match-found",
      override: false,
      overrideNote: "",
    },
    sourceRefs: ["data/content.js", "data/stories.js"],
  }),
  makeStory({
    id: "SR-2026-0004",
    title: "The Meeting That Ate the School Day",
    dek: "Coordination is supposed to protect time. In some schools, the meetings meant to make the week work have quietly become the week.",
    format: "School Life",
    status: "published",
    primarySection: "Stories",
    placements: [{ section: "Ideas", url: "/ideas" }, { section: "Homepage", url: "/" }, { section: "Blog", url: "/blog/the-meeting-that-ate-the-school-day" }],
    plannedArticleUrl: "/stories/the-meeting-that-ate-the-school-day",
    articleUrl: "/stories/the-meeting-that-ate-the-school-day",
    publishedAt: "2026-10-03",
    sourceRefs: ["data/content.js", "data/stories.js", "data/ideas.js", "data/editorial.js"],
    verification: {
      lastChecked: "2026-10-03",
      outcome: "no-close-match-found",
      override: false,
      overrideNote: "",
    },
  }),
  makeStory({
    id: "SR-2026-0005",
    title: "The Timetable Is Really a Map of Values",
    dek: "What a school gives time to—and what it repeatedly squeezes out—can reveal its priorities more clearly than a mission statement.",
    format: "Essay",
    primarySection: "Ideas",
    aliases: ["The timetable is a map of priorities", "Why a Timetable Is Really a Map of Values"],
    placements: [{ section: "Stories", url: "/stories" }, { section: "Schools", url: "/schools" }],
    sourceRefs: ["data/content.js", "data/stories.js", "data/schools.js", "data/ideas.js"],
  }),
  makeStory({
    id: "SR-2026-0006",
    title: "The Child Who Was Always Being Sent Out of Class",
    dek: "Repeated removal can make a behaviour problem look solved while leaving the question of belonging untouched.",
    format: "Reported Profile",
    primarySection: "Classrooms",
    placements: [{ section: "Stories", url: "/stories#sent-out" }],
    sourceRefs: ["data/content.js", "data/stories.js", "data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0007",
    title: "What Teachers Carry Home",
    dek: "Some parts of a school day can be left at the gate. Others follow a teacher into dinner, sleep and the first thought of the next morning.",
    format: "Essay",
    primarySection: "Voices",
    placements: [{ section: "Stories", url: "/stories#carry-home" }, { section: "Teachers", url: "/teachers" }, { section: "Newsletter", url: "/newsletter/what-teachers-carry-home" }],
    sourceRefs: ["data/content.js", "data/stories.js", "data/teachers.js", "data/voices.js", "data/editorial.js"],
  }),
  makeStory({
    id: "SR-2026-0008",
    title: "The Principal Who Stopped Measuring Everything",
    dek: "A school leader asks which numbers illuminate the work and which ones merely make it look controlled.",
    format: "Leadership",
    primarySection: "Stories",
    sourceRefs: ["data/content.js", "data/stories.js"],
  }),
  makeStory({
    id: "SR-2026-0009",
    title: "The Five-Year Teacher",
    dek: "What changes when a teacher is no longer learning how to survive the classroom, but deciding what kind of teacher to become.",
    format: "Profile",
    primarySection: "Teachers",
    placements: [{ section: "Stories", url: "/stories" }, { section: "Voices", url: "/voices" }],
    sourceRefs: ["data/content.js", "data/stories.js", "data/teachers.js", "data/voices.js"],
  }),
  makeStory({
    id: "SR-2026-0010",
    title: "The Student Who Changes the Question",
    dek: "Sometimes the most useful lesson begins with an interruption that the teacher did not plan for.",
    format: "Classroom Story",
    primarySection: "Classrooms",
    placements: [{ section: "Stories", url: "/stories" }],
    sourceRefs: ["data/content.js", "data/stories.js", "data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0011",
    title: "The Homework Problem AI Didn't Create",
    dek: "The technology changed the question, but not every problem behind it.",
    format: "Analysis",
    primarySection: "Ideas",
    placements: [{ section: "Stories", url: "/stories" }],
    sourceRefs: ["data/content.js", "data/stories.js"],
  }),
  makeStory({
    id: "SR-2026-0012",
    title: "A Parent Meeting Is Never Only a Parent Meeting",
    dek: "Trust is built in small conversations long before there is a problem to solve.",
    format: "School Life",
    primarySection: "Schools",
    placements: [{ section: "Stories", url: "/stories" }],
    sourceRefs: ["data/content.js", "data/stories.js"],
  }),
  makeStory({
    id: "SR-2026-0013",
    title: "The Teacher Who Stopped Calling It a Difficult Child",
    dek: "What changes when a label gives way to a more useful question about a child's experience of the room.",
    format: "First Person Profile",
    primarySection: "Voices",
    placements: [{ section: "Stories", url: "/stories" }, { section: "Teachers", url: "/teachers" }, { section: "Classrooms", url: "/classrooms" }],
    sourceRefs: ["data/content.js", "data/stories.js", "data/teachers.js", "data/classrooms.js", "data/voices.js"],
  }),
  makeStory({
    id: "SR-2026-0014",
    title: "What Makes a School Feel Like a Place People Belong To",
    dek: "A school's culture is rarely written down in one document. It is built through ordinary routines, the way decisions are made, what gets noticed and what people learn to expect from one another.",
    format: "Reported Feature",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0015",
    title: "The Things a Principal Notices Before the First Meeting",
    dek: "Leadership often begins with details: who is already working, who needs help, what the building is saying and which small signals are shaping the day.",
    format: "Profile",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0016",
    title: "What a Good Staffroom Makes Possible",
    dek: "The unofficial conversations between lessons can carry knowledge, warnings, humour and the small acts of help that keep difficult days moving.",
    format: "School Life",
    primarySection: "Schools",
    placements: [{ section: "Teachers", url: "/teachers" }, { section: "Voices", url: "/voices" }],
    sourceRefs: ["data/content.js", "data/teachers.js", "data/schools.js", "data/voices.js"],
  }),
  makeStory({
    id: "SR-2026-0017",
    title: "When a School Stops Calling Every Problem a Behaviour Problem",
    dek: "Changing the language around recurring difficulties can change what a school is willing to notice, measure and try next.",
    format: "Reported Analysis",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0018",
    title: "The Meeting That Could Have Been an Email",
    dek: "Meetings are part of school life. So is the question of which decisions genuinely need everyone in the room.",
    format: "Staffroom Note",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0019",
    title: "The Teacher Who Became the Person Everyone Asked",
    dek: "Every school has people who quietly become bridges between departments, generations and problems that do not fit one job description.",
    format: "Profile",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0020",
    title: "What Happens Between the Bell and the Bus",
    dek: "The edges of the school day contain a surprising amount of coordination, care and invisible work.",
    format: "Observation",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0021",
    title: "The Invisible Work of Keeping a School Moving",
    dek: "Lessons are only one part of a school day. Behind them sits a web of handovers, decisions, conversations, repairs and acts of judgment that rarely make it into the official story of school.",
    format: "Long Read",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0022",
    title: "The First Five Minutes in the Headteacher's Office",
    dek: "Before the formal work begins, the day has usually already presented a list of decisions.",
    format: "Observation",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0023",
    title: "The Corridor Has a Memory",
    dek: "Buildings carry the traces of routines, relationships and past decisions long after people stop talking about them.",
    format: "Essay",
    primarySection: "Schools",
    sourceRefs: ["data/schools.js"],
  }),
  makeStory({
    id: "SR-2026-0024",
    title: "What Schools Mean When They Say 'Community'",
    dek: "The word can describe a feeling, a structure, a responsibility—or a promise that is easier to make than to define.",
    format: "Interpretation",
    primarySection: "Ideas",
    aliases: ["What Schools Mean by 'Community'"],
    placements: [{ section: "Schools", url: "/schools" }, { section: "World", url: "/world#community-abroad" }],
    sourceRefs: ["data/schools.js", "data/ideas.js", "data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0025",
    title: "The Invisible Curriculum: Everything Teachers Teach Without Meaning To",
    dek: "Every school teaches more than its stated curriculum. Through routines, language, expectations and small daily choices, teachers and institutions pass on lessons about attention, authority, time and belonging.",
    format: "Long Read",
    primarySection: "Ideas",
    status: "hold",
    placements: [{ section: "Homepage", url: "/" }],
    sourceRefs: ["data/content.js", "data/editorial.js", "data/ideas.js"],
    notes: "Existing source data marks this work as hold while the Ideas page currently presents a placeholder version. Resolve this editorial-state mismatch before treating it as a publishable story.",
    expansionReminder: "When expanding the Ideas heading into the full-length article, pause before drafting and run Story Verification against all current and archived stories. Confirm whether the planned article is still the same underlying concept, whether its thesis has changed, and whether any later Staffroom stories now overlap.",
    verificationAlert: "Do not treat the current Ideas placeholder as evidence that the story is approved for publication. Editorial source currently records hold.",
    expansionSection: "Ideas",
  }),
  makeStory({
    id: "SR-2026-0026",
    title: "Why Teachers Need Fewer Perfect Plans",
    dek: "Planning matters. So does leaving enough room for a classroom to tell you what the plan could not know in advance.",
    format: "Argument",
    primarySection: "Ideas",
    placements: [{ section: "Blog", url: "/blog/why-teachers-need-fewer-perfect-plans" }],
    sourceRefs: ["data/editorial.js", "data/ideas.js"],
  }),
  makeStory({
    id: "SR-2026-0027",
    title: "What Good Teaching Looks Like Up Close",
    dek: "Definitions of good teaching are everywhere. A closer look at an ordinary classroom asks a harder question: what does quality look like when nobody is naming it?",
    format: "Reported Feature",
    primarySection: "Ideas",
    status: "hold",
    sourceRefs: ["data/editorial.js", "data/ideas.js"],
    notes: "Existing source data marks this work as hold while the Ideas page currently presents a placeholder version. Resolve the editorial-state mismatch before treating it as a publishable story.",
    expansionReminder: "When expanding the Ideas heading into the full-length reported feature, pause before drafting and run Story Verification against all current and archived stories. Pay particular attention to overlap with the other Ideas long-read propositions and any later classroom-quality stories.",
    verificationAlert: "Do not treat the current Ideas placeholder as evidence that the story is approved for publication. Editorial source currently records hold.",
    expansionSection: "Ideas",
  }),
  makeStory({
    id: "SR-2026-0028",
    title: "The First Ten Minutes Are Not a Warm-Up",
    dek: "Before the lesson properly begins, a teacher is already reading the room.",
    format: "Staffroom Note",
    primarySection: "Blog",
    placements: [{ section: "Ideas", url: "/ideas" }],
    sourceRefs: ["data/editorial.js", "data/ideas.js"],
  }),
  makeStory({
    id: "SR-2026-0029",
    title: "A School Day Has More Silence Than We Think",
    dek: "Silence can mean concentration, uncertainty, relief or a student deciding whether to speak.",
    format: "Observation",
    primarySection: "Ideas",
    placements: [{ section: "Blog", url: "/blog/a-school-day-has-more-silence-than-we-think" }, { section: "Classrooms", url: "/classrooms" }],
    sourceRefs: ["data/editorial.js", "data/ideas.js", "data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0030",
    title: "The Smallest Classroom Decisions",
    dek: "Where a student sits, which question gets another minute and when a teacher chooses not to interrupt can change a lesson.",
    format: "Teaching Note",
    primarySection: "Blog",
    placements: [{ section: "Ideas", url: "/ideas" }],
    sourceRefs: ["data/editorial.js", "data/ideas.js"],
  }),
  makeStory({
    id: "SR-2026-0031",
    title: "What Schools in Different Countries Can Teach Us About Time",
    dek: "School days look different around the world. Their schedules reveal how cultures decide what children need, what teachers can sustain and which parts of learning are protected from hurry.",
    format: "Long Read",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0032",
    title: "When the School Day Ends Earlier",
    dek: "A shorter school day can raise a larger question: what does a system believe should happen inside school, and what should be left outside it?",
    format: "Analysis",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0033",
    title: "The Teacher's Job Changes When the System Changes",
    dek: "Classroom technique is only part of teaching. Expectations, planning time, autonomy and accountability reshape the work before a lesson begins.",
    format: "Profile",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0034",
    title: "What 'School Community' Looks Like Somewhere Else",
    dek: "The same phrase can describe very different relationships between schools, families, neighbourhoods and public life.",
    format: "Reported Feature",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0035",
    title: "The Classroom Where Everyone Takes Their Shoes Off",
    dek: "A small routine can reveal a larger idea about care, order and the physical experience of school.",
    format: "Observation",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0036",
    title: "What a School Can Learn From Another School",
    dek: "Borrowing a practice is easier than understanding the conditions that made it work.",
    format: "Essay",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0037",
    title: "The Language of the School Day",
    dek: "Words such as 'period', 'homeroom' and 'break' carry assumptions about how time is organised and who it belongs to.",
    format: "Interpretation",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0038",
    title: "The Things That Do Not Travel Well",
    dek: "Not every educational idea survives the journey from one context to another.",
    format: "Analysis",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0039",
    title: "What We Think Is Normal in School Is Often Just Familiar",
    dek: "A comparative look at the routines, expectations and institutional habits that feel inevitable only because we have seen them for a long time.",
    format: "Essay",
    primarySection: "World",
    sourceRefs: ["data/world.js"],
  }),
  makeStory({
    id: "SR-2026-0040",
    title: "The Lesson That Changed Because One Student Wouldn't Stop Asking Why",
    dek: "A classroom can reveal a problem that a lesson plan cannot see. One persistent question sends a teacher back through the explanation, the room and the assumptions behind both.",
    format: "Reported Feature",
    primarySection: "Classrooms",
    sourceRefs: ["data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0041",
    title: "The Five Minutes Before the Bell",
    dek: "Before students arrive, teachers are already reading the room and deciding what kind of attention the day will need.",
    format: "Observation",
    primarySection: "Teachers",
    aliases: ["The five minutes before the bell"],
    placements: [{ section: "Classrooms", url: "/classrooms#before-bell" }, { section: "Voices", url: "/voices" }, { section: "Newsletter", url: "/newsletter/the-five-minutes-before-the-bell" }],
    sourceRefs: ["data/editorial.js", "data/teachers.js", "data/classrooms.js", "data/voices.js"],
  }),
  makeStory({
    id: "SR-2026-0042",
    title: "When the Lesson Changes Halfway Through",
    dek: "The plan says one thing. The room says another. Good teaching begins when the teacher can tell the difference.",
    format: "Classroom Story",
    primarySection: "Classrooms",
    sourceRefs: ["data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0043",
    title: "Why Some Mathematics Teachers Are Teaching Less Mathematics",
    dek: "When curriculum pressure grows, deciding what not to cover can become as important as deciding what to explain.",
    format: "Practical Analysis",
    primarySection: "Teachers",
    placements: [{ section: "Classrooms", url: "/classrooms#less-maths" }],
    sourceRefs: ["data/content.js", "data/teachers.js", "data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0044",
    title: "A Classroom Has Its Own Weather",
    dek: "Energy, tension and attention move through a room in ways that never appear on the lesson plan.",
    format: "Essay",
    primarySection: "Classrooms",
    sourceRefs: ["data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0045",
    title: "The Question Asked Too Soon",
    dek: "A student's confusion can arrive before the teacher has found the words for the idea.",
    format: "Classroom Story",
    primarySection: "Classrooms",
    sourceRefs: ["data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0046",
    title: "What Silence Can Tell a Teacher",
    dek: "Silence can mean concentration, uncertainty, resistance or relief. The work is learning to hear the difference.",
    format: "Essay",
    primarySection: "Classrooms",
    sourceRefs: ["data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0047",
    title: "The Lesson Plan Is Only a Starting Point",
    dek: "Planning makes a classroom possible. Responsiveness is what makes it useful once the students are in it.",
    format: "Ideas",
    primarySection: "Classrooms",
    sourceRefs: ["data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0048",
    title: "The Desk at the Back of the Room",
    dek: "One seat can become a story about attention, friendship, status and the teacher's assumptions about participation.",
    format: "Personal Essay",
    primarySection: "Voices",
    placements: [{ section: "Classrooms", url: "/classrooms" }],
    sourceRefs: ["data/classrooms.js", "data/voices.js"],
  }),
  makeStory({
    id: "SR-2026-0049",
    title: "A Classroom, Item by Item",
    dek: "A visual inventory of the objects, surfaces and small arrangements that shape a school day.",
    format: "Visual Story",
    primarySection: "Classrooms",
    sourceRefs: ["data/classrooms.js"],
  }),
  makeStory({
    id: "SR-2026-0050",
    title: "What English Teachers Hear That Parents Don't",
    dek: "What teachers notice when language becomes a way of seeing the classroom.",
    format: "Essay",
    primarySection: "Teachers",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0051",
    title: "The Science Lesson That Needs Less Equipment",
    dek: "What changes when observation and explanation matter more than a room full of apparatus.",
    format: "Practical Guide",
    primarySection: "Teachers",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0052",
    title: "Why Music Keeps Moving to the Margins",
    dek: "What changes when a subject is treated as optional.",
    format: "Analysis",
    primarySection: "Teachers",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0053",
    title: "What Indian Teachers Can Learn From the School Day in Japan",
    dek: "A comparative look at rhythm, autonomy and the school day.",
    format: "Analysis",
    primarySection: "World",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0054",
    title: "What Finland Can Teach India About Teacher Autonomy",
    dek: "A comparative question about professional trust and the time to teach.",
    format: "Analysis",
    primarySection: "World",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0055",
    title: "What American Schools Are Learning From Phone Bans",
    dek: "What happens when attention is treated as a school-wide design problem.",
    format: "Analysis",
    primarySection: "World",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0056",
    title: "The Schools That Made Room for Play",
    dek: "What happens when the timetable changes its priorities.",
    format: "Reported Feature",
    primarySection: "World",
    aliases: ["The schools that made room for play"],
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0057",
    title: "A Lesson From a School Without Bells",
    dek: "A different rhythm can produce a different classroom.",
    format: "Observation",
    primarySection: "World",
    aliases: ["A lesson from a school without bells"],
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0058",
    title: "A Teacher's Week, Item by Item",
    dek: "A visual record of the small objects and routines that make up a week.",
    format: "Visual Story",
    status: "published",
    primarySection: "Homepage",
    placements: [{ section: "More" }],
    plannedArticleUrl: "/stories/a-teachers-week-item-by-item",
    articleUrl: "/stories/a-teachers-week-item-by-item",
    publishedAt: "2026-10-03",
    sourceRefs: ["data/content.js"],
    verification: {
      lastChecked: "2026-10-03",
      outcome: "no-close-match-found",
      override: false,
      overrideNote: "",
    },
  }),
  makeStory({
    id: "SR-2026-0059",
    title: "The Teacher Who Changed the Seating Plan",
    dek: "A small change, a different room.",
    format: "Staffroom Note",
    status: "published",
    primarySection: "Homepage",
    plannedArticleUrl: "/stories/the-teacher-who-changed-the-seating-plan",
    articleUrl: "/stories/the-teacher-who-changed-the-seating-plan",
    publishedAt: "2026-10-03",
    sourceRefs: ["data/content.js"],
    verification: {
      lastChecked: "2026-10-03",
      outcome: "no-close-match-found",
      override: false,
      overrideNote: "",
    },
  }),
  makeStory({
    id: "SR-2026-0060",
    title: "A Note on Ordinary School Days",
    dek: "The everyday deserves attention too.",
    format: "Staffroom Note",
    status: "published",
    primarySection: "Homepage",
    plannedArticleUrl: "/stories/a-note-on-ordinary-school-days",
    articleUrl: "/stories/a-note-on-ordinary-school-days",
    publishedAt: "2026-10-03",
    sourceRefs: ["data/content.js"],
    verification: {
      lastChecked: "2026-10-03",
      outcome: "no-close-match-found",
      override: false,
      overrideNote: "",
    },
  }),
  makeStory({
    id: "SR-2026-0061",
    title: "What We Mean When We Say 'Good Teaching'",
    dek: "A phrase with more weight than it first appears to carry.",
    format: "Essay",
    status: "published",
    primarySection: "Homepage",
    plannedArticleUrl: "/stories/what-we-mean-when-we-say-good-teaching",
    articleUrl: "/stories/what-we-mean-when-we-say-good-teaching",
    publishedAt: "2026-10-03",
    sourceRefs: ["data/content.js"],
    verification: {
      lastChecked: "2026-10-03",
      outcome: "no-close-match-found",
      override: false,
      overrideNote: "",
    },
  }),
  makeStory({
    id: "SR-2026-0062",
    title: "The School Beyond the Metro Story",
    dek: "",
    format: "Reported Feature",
    primarySection: "World",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0063",
    title: "The Teacher Who Teaches Three Classes at Once",
    dek: "The work of teaching is often described as one class, one lesson, one room. Some teachers work in a very different reality.",
    format: "Profile",
    primarySection: "Teachers",
    sourceRefs: ["data/content.js", "data/teachers.js"],
  }),
  makeStory({
    id: "SR-2026-0064",
    title: "The Class I'll Never Forget",
    dek: "",
    format: "First Person",
    primarySection: "Stories",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0065",
    title: "A School Day Is Made of Hundreds of Small Decisions",
    dek: "Teaching is often described through lessons and outcomes. The lived reality is more granular: the judgement calls, interruptions, recoveries and quiet acts of care that make a school day work.",
    format: "Essay",
    authorialVoice: "Systems Mapper",
    status: "published",
    primarySection: "Homepage",
    plannedArticleUrl: "/stories/a-school-day-is-made-of-hundreds-of-small-decisions",
    articleUrl: "/stories/a-school-day-is-made-of-hundreds-of-small-decisions",
    publishedAt: "2026-10-03",
    sourceRefs: ["data/content.js"],
    verification: {
      lastChecked: "2026-10-03",
      outcome: "no-close-match-found",
      override: false,
      overrideNote: "",
    },
  }),
  makeStory({
    id: "SR-2026-0066",
    title: "The Work Nobody Sees After the Last Child Leaves",
    dek: "Planning, checking, calling home and starting again tomorrow.",
    format: "Observation",
    primarySection: "Teachers",
    sourceRefs: ["data/content.js"],
  }),
  makeStory({
    id: "SR-2026-0068",
    title: "When a Good Lesson Goes Wrong",
    dek: "The useful lesson is not always the one that worked. Sometimes the most important teaching begins when a plan has to be abandoned in front of the class.",
    format: "Newsletter Edition",
    primarySection: "Newsletter",
    sourceRefs: ["data/editorial.js"],
  }),
  makeStory({
    id: "SR-2026-0070",
    title: "The Children a Timetable Forgets",
    dek: "A school timetable makes priorities visible. It can also make some kinds of learning, attention and belonging almost impossible to schedule.",
    format: "Newsletter Edition",
    primarySection: "Newsletter",
    sourceRefs: ["data/editorial.js"],
  }),
  makeStory({
    id: "SR-2026-0071",
    title: "What I Wish Someone Had Told Me About the Staffroom",
    dek: "The staffroom is not just a place between lessons. It is where teachers exchange warnings, jokes, small acts of rescue and the knowledge that never makes it into a handbook.",
    format: "Blog / Staffroom Note",
    primarySection: "Blog",
    sourceRefs: ["data/editorial.js"],
  }),
  makeStory({
    id: "SR-2026-0074",
    title: "The Staffroom Conversation I Still Remember",
    dek: "Not every useful piece of professional knowledge arrives in a meeting. Sometimes it arrives between two lessons, in a sentence that stays with you for years.",
    format: "First Person",
    primarySection: "Voices",
    sourceRefs: ["data/voices.js"],
  }),
];

export function getStoryById(id) {
  return storyRegistry.find((story) => story.id === id) || null;
}

export function getStoriesBySection(section) {
  return storyRegistry.filter(
    (story) =>
      story.primarySection === section ||
      story.placements.some((placement) => (placement.section || placement) === section),
  );
}

export function getStoryBySlug(slug) {
  return storyRegistry.find((story) => story.slug === slug) || null;
}

export function getStoriesByStatus(status) {
  return storyRegistry.filter((story) => story.editorialStatus === status);
}

export function getActiveStories() {
  return storyRegistry.filter((story) => !["archived", "hold"].includes(story.editorialStatus));
}

export function getStoriesByTag(tag) {
  const needle = tag.toLowerCase();
  return storyRegistry.filter((story) =>
    story.tags.some((item) => item.toLowerCase() === needle),
  );
}

export function searchStories(query) {
  const tokens = query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((token) => token.length > 2);

  if (!tokens.length) return storyRegistry;

  return storyRegistry
    .map((story) => {
      const haystack = [
        story.title,
        ...story.aliases,
        story.excerpt,
        story.editorialSummary,
        ...story.tags,
        ...story.topics,
      ]
        .join(" ")
        .toLowerCase();

      const hits = tokens.filter((token) => haystack.includes(token)).length;
      return { story, score: hits / tokens.length };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.story.id.localeCompare(b.story.id))
    .map((item) => item.story);
}

export const storyRegistryMeta = {
  version: "1.0",
  generated: "2026-10-03",
  canonicalSource: "data/story-registry.js",
  humanReadableIndex: "docs/story-mastercopy.md",
  archive: "docs/story-archive.md",
  verificationUtility: "lib/story-verification.js",
  newsletterSystem: "docs/newsletter-system.md",
  newsletterWorkflow: "data/newsletter-workflow.js",
  newsletterScheduler: "app/api/newsletter/cron/route.js",
};
