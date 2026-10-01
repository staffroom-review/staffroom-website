import { imagery } from "./imagery";

export const storiesPage = {
  intro: {
    title: "Stories",
    dek: "The people, classrooms, choices and quiet work that make education what it is.",
  },
  lead: {
    eyebrow: "Feature · Teachers",
    title: "The Work of Teaching Begins Before the Lesson Does",
    dek: "Teachers arrive with plans, but they also arrive with a room to read: who is tired, who is absent, what happened yesterday and what might change in the next fifty minutes.",
    format: "Reported Feature · 9 min read",
    art: imagery.hero,
  },
  latest: [
    {
      eyebrow: "First Person",
      title: "The Teacher Who Learned to Leave School on Time",
      dek: "After years of treating exhaustion as evidence of commitment, one teacher begins to separate care for students from the demand to be endlessly available.",
      format: "First Person · 7 min read",
      art: imagery.staffroom,
      href: "#teacher-leave",
    },
    {
      eyebrow: "Classrooms",
      title: "When the Class Is Tired Before First Period",
      dek: "The first lesson of the day can reveal more about a school than any timetable document. Teachers notice the signs long before a problem has a name.",
      format: "Classroom Story · 6 min read",
      art: imagery.storyA,
      href: "#class-tired",
    },
    {
      eyebrow: "Schools",
      title: "The Meeting That Ate the School Day",
      dek: "Coordination is supposed to protect time. In some schools, the meetings meant to make the week work have quietly become the week.",
      format: "School Life · 5 min read",
      art: imagery.storyB,
      href: "#meeting",
    },
    {
      eyebrow: "Ideas",
      title: "Why a Timetable Is Really a Map of Values",
      dek: "What a school makes time for—and what repeatedly gets pushed aside—can reveal its priorities more clearly than a mission statement.",
      format: "Ideas · 8 min read",
      art: imagery.maths,
      href: "#timetable",
    },
  ],
  editors: [
    {
      eyebrow: "The Classroom",
      title: "The Child Who Was Always Being Sent Out of Class",
      dek: "Repeated removal can make a behaviour problem look solved while leaving the question of belonging untouched.",
      format: "Profile · 8 min read",
      art: imagery.storyC,
      href: "#sent-out",
    },
    {
      eyebrow: "Voices",
      title: "What Teachers Carry Home",
      dek: "Some parts of a school day can be left at the gate. Others follow teachers into dinner, sleep and the first thought of the next morning.",
      format: "First Person · 6 min read",
      art: imagery.voices,
      href: "#carry-home",
    },
  ],
  stream: [
    {
      eyebrow: "Schools",
      title: "The Principal Who Stopped Measuring Everything",
      dek: "A school leader asks which numbers illuminate the work and which ones merely make it look controlled.",
      format: "Leadership · 7 min read",
    },
    {
      eyebrow: "Teachers",
      title: "The Five-Year Teacher",
      dek: "What changes when a teacher is no longer learning how to survive the classroom, but deciding what kind of teacher to become.",
      format: "Profile · 6 min read",
    },
    {
      eyebrow: "Classrooms",
      title: "The Student Who Changes the Question",
      dek: "Sometimes the most useful lesson begins with an interruption that the teacher did not plan for.",
      format: "Classroom Story · 5 min read",
    },
    {
      eyebrow: "Ideas",
      title: "The Homework Problem AI Didn't Create",
      dek: "The technology changed the question, but not every problem behind it.",
      format: "Analysis · 7 min read",
    },
    {
      eyebrow: "Schools",
      title: "A Parent Meeting Is Never Only a Parent Meeting",
      dek: "Trust is built in small conversations long before there is a problem to solve.",
      format: "School Life · 5 min read",
    },
    {
      eyebrow: "Teachers",
      title: "The Teacher Who Stopped Calling It a Difficult Child",
      dek: "What changes when a label gives way to a more useful question.",
      format: "First Person · 6 min read",
    },
  ],
  archive: {
    title: "Keep exploring",
    dek: "Older stories, recurring series and future editorial projects will live here as the publication grows.",
    links: ["Stories from the Classroom", "The Staffroom", "Profiles", "Ideas & Essays", "Visual Stories"],
  },
};
