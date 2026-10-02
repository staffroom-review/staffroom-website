import { imagery } from "./imagery";

export const podcastsPage = {
  intro: {
    eyebrow: "Staffroom Review · Podcast",
    title: "Podcasts",
    dek: "Conversations and close listening about the work of teaching, the life of schools and the questions that stay with us after the bell.",
  },
  lead: {
    eyebrow: "The Staffroom",
    title: "What teachers notice that nobody else sees",
    dek: "A conversation about the small signals, unfinished thoughts and quiet decisions that shape a school day long before they appear in a plan.",
    meta: "Episode 01 · 34 min · Coming soon",
    art: imagery.staffroom,
  },
  episodes: [
    {
      eyebrow: "Episode 02",
      title: "The first ten minutes",
      dek: "Before teaching begins, teachers are already reading the room. What can those opening minutes tell us about attention, belonging and readiness?",
      meta: "28 min · Coming soon",
      art: imagery.classroom,
    },
    {
      eyebrow: "Episode 03",
      title: "When the plan stops working",
      dek: "A practical conversation about improvisation, judgement and what teachers learn when the classroom changes the lesson in front of them.",
      meta: "31 min · Coming soon",
      art: imagery.storyD,
    },
    {
      eyebrow: "Episode 04",
      title: "What a timetable cannot hold",
      dek: "Schools run on schedules, but some of the most important work happens outside the grid: relationships, pauses, questions and care.",
      meta: "36 min · Coming soon",
      art: imagery.schoolFeature,
    },
    {
      eyebrow: "Episode 05",
      title: "The unofficial curriculum",
      dek: "Every school teaches more than it intends. We look at the routines, language and expectations that quietly become lessons of their own.",
      meta: "42 min · Coming soon",
      art: imagery.visual,
    },
  ],
  series: {
    eyebrow: "A Staffroom Review audio series",
    title: "Longer conversations for the questions that deserve more time.",
    dek: "The podcast extends Staffroom Review's editorial proposition into audio: fewer hot takes, more context, lived experience and room to think.",
    meta: "Series principle",
    art: imagery.longread,
  },
  formats: [
    {
      title: "The Staffroom",
      dek: "A recurring conversation with teachers and practitioners about the work as it is actually lived.",
    },
    {
      title: "After the Bell",
      dek: "A quieter interview format about the ideas, choices and experiences that remain after the school day ends.",
    },
    {
      title: "Close Reading",
      dek: "One Staffroom Review story, revisited in conversation with its author, subject or reader.",
    },
  ],
};
