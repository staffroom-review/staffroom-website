import { imagery } from "./imagery";

export const worldPage = {
  intro: {
    title: "World",
    dek: "Comparative stories about education across places and systems: what changes from one context to another, and what remains recognisable wherever teaching happens.",
  },
  lead: {
    eyebrow: "World · Long Read",
    title: "What Schools in Different Countries Can Teach Us About Time",
    dek: "School days look different around the world. Their schedules reveal how cultures decide what children need, what teachers can sustain and which parts of learning are protected from hurry.",
    format: "Long Read · 14 min read",
    art: imagery.world,
  },
  perspectives: [
    {
      eyebrow: "Comparative education",
      title: "When the School Day Ends Earlier",
      dek: "A shorter school day can raise a larger question: what does a system believe should happen inside school, and what should be left outside it?",
      format: "Analysis · 9 min read",
      art: imagery.school,
      href: "#school-day",
    },
    {
      eyebrow: "Teaching across borders",
      title: "The Teacher's Job Changes When the System Changes",
      dek: "Classroom technique is only part of teaching. Expectations, planning time, autonomy and accountability reshape the work before a lesson begins.",
      format: "Profile · 8 min read",
      art: imagery.voices,
      href: "#teachers-system",
    },
    {
      eyebrow: "Students & belonging",
      title: "What 'School Community' Looks Like Somewhere Else",
      dek: "The same phrase can describe very different relationships between schools, families, neighbourhoods and public life.",
      format: "Reported Feature · 10 min read",
      art: imagery.schoolFeature,
      href: "#community-abroad",
    },
  ],
  fieldnotes: [
    {
      eyebrow: "Field note",
      title: "The Classroom Where Everyone Takes Their Shoes Off",
      dek: "A small routine can reveal a larger idea about care, order and the physical experience of school.",
      format: "Observation · 5 min read",
    },
    {
      eyebrow: "Field note",
      title: "What a School Can Learn From Another School",
      dek: "Borrowing a practice is easier than understanding the conditions that made it work.",
      format: "Essay · 6 min read",
    },
    {
      eyebrow: "Field note",
      title: "The Language of the School Day",
      dek: "Words such as 'period', 'homeroom' and 'break' carry assumptions about how time is organised and who it belongs to.",
      format: "Interpretation · 5 min read",
    },
    {
      eyebrow: "Field note",
      title: "The Things That Do Not Travel Well",
      dek: "Not every educational idea survives the journey from one context to another.",
      format: "Analysis · 6 min read",
    },
  ],
  feature: {
    eyebrow: "Beyond the Staffroom",
    title: "What We Think Is Normal in School Is Often Just Familiar",
    dek: "A comparative look at the routines, expectations and institutional habits that feel inevitable only because we have seen them for a long time.",
    format: "Essay · 11 min read",
    art: imagery.longread,
  },
};
