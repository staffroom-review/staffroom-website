import { imagery } from "./imagery";

export const classroomsPage = {
  intro: {
    title: "Classrooms",
    dek: "Close looks at the places where teaching actually happens: the questions, silences, surprises and small decisions inside a lesson.",
  },
  lead: {
    eyebrow: "Classroom observation · Reported feature",
    title: "The Lesson That Changed Because One Student Wouldn't Stop Asking Why",
    dek: "A classroom can reveal a problem that a lesson plan cannot see. One persistent question sends a teacher back through the explanation, the room and the assumptions behind both.",
    format: "Reported Feature · 9 min read",
    art: imagery.classroom,
  },
  moments: [
    {
      eyebrow: "Classroom story",
      title: "The Five Minutes Before the Bell",
      dek: "Before students arrive, the room already contains clues about the lesson to come: unfinished work, moved chairs, a changed mood and a teacher deciding what matters first.",
      format: "Observation · 5 min read",
      art: imagery.storyD,
      href: "#before-bell",
    },
    {
      eyebrow: "Teaching moment",
      title: "When the Lesson Changes Halfway Through",
      dek: "The plan says one thing. The room says another. Good teaching begins when the teacher can tell the difference.",
      format: "Classroom Story · 6 min read",
      art: imagery.maths,
      href: "#lesson-changes",
    },
    {
      eyebrow: "Student experience",
      title: "The Child Who Was Always Being Sent Out of Class",
      dek: "Repeated removal can make a difficult moment disappear from view while leaving the deeper question of belonging untouched.",
      format: "Reported Profile · 8 min read",
      art: imagery.storyC,
      href: "#sent-out",
    },
    {
      eyebrow: "Classroom practice",
      title: "Why Some Mathematics Teachers Are Teaching Less Mathematics",
      dek: "What happens when covering the syllabus gives way to deciding which ideas deserve more time, more questions and more attention.",
      format: "Practical Analysis · 8 min read",
      art: imagery.subjects,
      href: "#less-maths",
    },
  ],
  notebooks: [
    {
      eyebrow: "Teacher notebook",
      title: "The Student Who Changes the Question",
      dek: "Sometimes the most useful contribution in a lesson is the interruption that forces everyone to reconsider what they thought they understood.",
      format: "Observation · 5 min read",
    },
    {
      eyebrow: "Teacher notebook",
      title: "A Classroom Has Its Own Weather",
      dek: "Energy, tension and attention move through a room in ways that never appear on the lesson plan.",
      format: "Essay · 6 min read",
    },
    {
      eyebrow: "Teacher notebook",
      title: "The Question Asked Too Soon",
      dek: "A student's confusion can arrive before the teacher has found the words for the idea.",
      format: "Classroom Story · 5 min read",
    },
    {
      eyebrow: "Teacher notebook",
      title: "What Silence Can Tell a Teacher",
      dek: "Silence can mean concentration, uncertainty, resistance or relief. The work is learning to hear the difference.",
      format: "Essay · 6 min read",
    },
    {
      eyebrow: "Teacher notebook",
      title: "The Lesson Plan Is Only a Starting Point",
      dek: "Planning makes a classroom possible. Responsiveness is what makes it useful once the students are in it.",
      format: "Ideas · 6 min read",
    },
    {
      eyebrow: "Teacher notebook",
      title: "The Desk at the Back of the Room",
      dek: "One seat can become a story about attention, friendship, status and the teacher's assumptions about participation.",
      format: "Reported Classroom Story · 7 min read",
    },
  ],
  visual: {
    eyebrow: "Visual essay",
    title: "A Classroom, Item by Item",
    dek: "A visual inventory of the objects, surfaces and small arrangements that shape a school day.",
    format: "Visual Story · 7 min read",
    art: imagery.visual,
  },
};
