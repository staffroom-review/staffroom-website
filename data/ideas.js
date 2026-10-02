import { imagery } from "./imagery";

export const ideasPage = {
  intro: {
    title: "Ideas",
    dek: "Essays, arguments and interpretations about teaching and education—the questions that take longer to answer and deserve more room to think.",
  },
  lead: {
    eyebrow: "Long Read · Signature essay",
    title: "The Invisible Curriculum: Everything Teachers Teach Without Meaning To",
    dek: "Every school teaches more than its stated curriculum. Through routines, language, expectations and small daily choices, teachers and institutions pass on lessons about attention, authority, time and belonging.",
    format: "Long Read · 16 min read",
    art: imagery.longread,
  },
  arguments: [
    {
      eyebrow: "Education & time",
      title: "The Timetable Is Really a Map of Values",
      dek: "A timetable looks neutral until you ask what it makes easy, what it makes difficult and whose attention gets protected by the grid.",
      format: "Essay · 9 min read",
      art: imagery.school,
      href: "#timetable-values",
    },
    {
      eyebrow: "Teaching",
      title: "Why Teachers Need Fewer Perfect Plans",
      dek: "Planning matters. So does leaving enough room for a classroom to tell you what the plan could not know in advance.",
      format: "Argument · 7 min read",
      art: imagery.storyA,
      href: "#fewer-plans",
    },
    {
      eyebrow: "School culture",
      title: "What Schools Mean When They Say 'Community'",
      dek: "The word can describe a feeling, a structure, a responsibility—or a promise that is easier to make than to define.",
      format: "Interpretation · 8 min read",
      art: imagery.voices,
      href: "#community",
    },
  ],
  longread: {
    eyebrow: "Ideas in practice",
    title: "What Good Teaching Looks Like Up Close",
    dek: "Definitions of good teaching are everywhere. A closer look at an ordinary classroom asks a harder question: what does quality look like when nobody is naming it?",
    format: "Reported Feature · 12 min read",
    art: imagery.classroom,
  },
  notes: [
    {
      eyebrow: "A small idea",
      title: "The First Ten Minutes Are Not a Warm-Up",
      dek: "Before the lesson properly begins, a teacher is already reading the room.",
      format: "Staffroom Note · 4 min read",
    },
    {
      eyebrow: "A small idea",
      title: "A School Day Has More Silence Than We Think",
      dek: "Silence can mean concentration, uncertainty, relief or a student deciding whether to speak.",
      format: "Observation · 5 min read",
    },
    {
      eyebrow: "A small idea",
      title: "The Smallest Classroom Decisions",
      dek: "Where a student sits, which question gets another minute and when a teacher chooses not to interrupt can change a lesson.",
      format: "Teaching Note · 5 min read",
    },
    {
      eyebrow: "A small idea",
      title: "The Meeting That Ate the School Day",
      dek: "Coordination is supposed to protect time. It can also quietly become the work itself.",
      format: "Editorial Note · 5 min read",
    },
  ],
};
