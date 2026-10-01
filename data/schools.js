import { imagery } from "./imagery";

export const schoolsPage = {
  intro: {
    title: "Schools",
    dek: "The life of a school beyond the lesson: culture, leadership, relationships, routines and the systems that shape how a place feels and works.",
  },
  lead: {
    eyebrow: "School life · Reported feature",
    title: "What Makes a School Feel Like a Place People Belong To",
    dek: "A school's culture is rarely written down in one document. It is built through ordinary routines, the way decisions are made, what gets noticed and what people learn to expect from one another.",
    format: "Reported Feature · 10 min read",
    art: imagery.schoolFeature,
  },
  culture: [
    {
      eyebrow: "School culture",
      title: "The Things a Principal Notices Before the First Meeting",
      dek: "Leadership often begins with details: who is already working, who needs help, what the building is saying and which small signals are shaping the day.",
      format: "Profile · 7 min read",
      art: imagery.school,
      href: "#principal-notices",
    },
    {
      eyebrow: "Relationships",
      title: "What a Good Staffroom Makes Possible",
      dek: "The informal exchanges between lessons can carry knowledge, warnings and the small acts of help that make a school more resilient.",
      format: "School Life · 6 min read",
      art: imagery.staffroom,
      href: "#staffroom",
    },
    {
      eyebrow: "Institutional life",
      title: "When a School Stops Calling Every Problem a Behaviour Problem",
      dek: "Changing the language around recurring difficulties can change what a school is willing to notice, measure and try next.",
      format: "Reported Analysis · 8 min read",
      art: imagery.voices,
      href: "#behaviour",
    },
  ],
  systems: [
    {
      eyebrow: "School systems",
      title: "The Timetable Is Really a Map of Values",
      dek: "What a school gives time to—and what it repeatedly squeezes out—can reveal its priorities more clearly than a mission statement.",
      format: "Analysis · 7 min read",
    },
    {
      eyebrow: "Leadership",
      title: "The Meeting That Could Have Been an Email",
      dek: "Meetings are part of school life. So is the question of which decisions genuinely need everyone in the room.",
      format: "Staffroom Note · 5 min read",
    },
    {
      eyebrow: "Relationships",
      title: "The Teacher Who Became the Person Everyone Asked",
      dek: "Every school has people who quietly become bridges between departments, generations and problems that do not fit one job description.",
      format: "Profile · 6 min read",
    },
    {
      eyebrow: "Operations",
      title: "What Happens Between the Bell and the Bus",
      dek: "The edges of the school day contain a surprising amount of coordination, care and invisible work.",
      format: "Observation · 6 min read",
    },
  ],
  longread: {
    eyebrow: "Institutional life · Long read",
    title: "The Invisible Work of Keeping a School Moving",
    dek: "Lessons are only one part of a school day. Behind them sits a web of handovers, decisions, conversations, repairs and acts of judgment that rarely make it into the official story of school.",
    format: "Long Read · 14 min read",
    art: imagery.longread,
  },
  notes: [
    {
      eyebrow: "School notebook",
      title: "The First Five Minutes in the Headteacher's Office",
      dek: "Before the formal work begins, the day has usually already presented a list of decisions.",
      format: "Observation · 4 min read",
    },
    {
      eyebrow: "School notebook",
      title: "The Corridor Has a Memory",
      dek: "Buildings carry the traces of routines, relationships and past decisions long after people stop talking about them.",
      format: "Essay · 5 min read",
    },
    {
      eyebrow: "School notebook",
      title: "What Schools Mean by 'Community'",
      dek: "The word can describe a feeling, a structure, a responsibility—or all three at once.",
      format: "Ideas · 5 min read",
    },
  ],
};
