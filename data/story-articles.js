// Staffroom Review — Canonical Article Content
//
// Full article bodies live separately from data/story-registry.js.
// The registry owns metadata and provenance; this file owns article presentation
// content. Every entry is keyed by permanent Story ID.
//
// Supported blocks:
// - { type: "paragraph", text }
// - { type: "heading", level: 2, text }
// - { type: "quote", text, attribution }
// - { type: "list", items: [] }
// - { type: "image", src, alt, caption, credit, sourceUrl }
// - { type: "sourceNote", text }

const unsplashCredit = "Unsplash";
const images = {
  hero: {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Students listening to a teacher in a classroom",
    sourceUrl: "https://unsplash.com/photos/students-in-classroom-with-teacher-presenting-zFSo6bnZJTw",
  },
  visual: {
    src: "https://images.unsplash.com/photo-1769794371055-54436b54577e?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Desk with books, notes and study materials",
    sourceUrl: "https://unsplash.com/photos/desk-with-open-book-laptop-and-study-materials-HNjWq8WPyoY",
  },
  staffroom: {
    src: "https://images.unsplash.com/photo-1758685848147-e1e149bf2603?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "Teacher sitting at a desk in a classroom",
    sourceUrl: "https://unsplash.com/photos/teacher-sitting-at-a-desk-with-chalkboard-formulas-nPJBma10tMU",
  },
  school: {
    src: "https://images.unsplash.com/photo-1764645362980-08d8704fd102?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=60&w=3000",
    alt: "School building surrounded by greenery",
    sourceUrl: "https://unsplash.com/photos/a-school-building-surrounded-by-greenery-under-a-blue-sky-eZjpArlRqZ4",
  },
};

const imageBlock = (image, caption) => ({
  type: "image",
  ...image,
  credit: unsplashCredit,
  caption,
});

export const storyArticles = {
  "SR-2026-0004": {
    readingTime: "8 min read",
    metaDescription: "Meetings are meant to make school work easier. When coordination becomes the work itself, teachers lose the time that good coordination was supposed to protect.",
    hero: imageBlock(images.school, "A school is held together by decisions that happen beyond the classroom."),
    blocks: [
      { type: "paragraph", text: "A meeting begins with a familiar promise: this will make the week easier. Someone has brought a list. Someone else has brought a problem. The people around the table are there because they have to agree on something before everyone else can get on with the work." },
      { type: "paragraph", text: "Then the hour changes shape. A decision that could have taken five minutes opens three new questions. A question that belongs to another meeting arrives early. Someone remembers an issue from last term. A timetable is opened. Another calendar is checked. By the time the meeting ends, the school has made progress, but the people in the room have also lost a piece of the time in which they were supposed to do everything else." },
      { type: "heading", level: 2, text: "Coordination is real work" },
      { type: "paragraph", text: "It is easy to write about meetings as though they are the opposite of work. They are not. Schools need people to coordinate rooms, schedules, support, communication, safeguarding, curriculum decisions and the countless dependencies created when hundreds of people share one institution. A school with no coordination would not be freer. It would simply move its confusion somewhere else." },
      { type: "paragraph", text: "The problem begins when the meeting becomes the default answer to every kind of uncertainty. If two people need to decide something, invite six. If a document is unclear, call everyone together. If a problem is recurring, schedule a standing meeting. If nobody knows who owns a decision, put it on the agenda." },
      { type: "quote", text: "A meeting can solve a coordination problem while creating a time problem of its own.", attribution: "Staffroom Review" },
      { type: "heading", level: 2, text: "The hidden cost is fragmentation" },
      { type: "paragraph", text: "The obvious cost of a long meeting is the time spent sitting in it. The less visible cost is what happens around it. A teacher leaves a planning task unfinished because a meeting starts at four. A colleague postpones a conversation because there is no ten-minute gap. A decision waits because the next available meeting is a week away. Work is pushed into the edges of the day, where it becomes harder to see and easier to treat as the teacher's own problem." },
      { type: "paragraph", text: "This is why meeting culture cannot be judged only by the number of hours on a calendar. The more useful question is what kind of working day the calendar creates. Two schools can have the same number of meetings and very different experiences of time if one protects preparation, follow-up and uninterrupted work while the other repeatedly breaks them apart." },
      { type: "heading", level: 2, text: "What belongs in a meeting?" },
      { type: "paragraph", text: "A useful meeting has a job that conversation is genuinely suited to do. It may require a group decision, a difficult judgement, the sharing of information that changes what several people will do next, or a discussion in which the participants need to hear one another before deciding." },
      { type: "paragraph", text: "Much else can be handled differently. Information can be written down. Routine updates can be circulated. A decision can sometimes be made by the person who owns it, with others informed afterwards. A complicated issue can be prepared in advance so the meeting is used for the point of disagreement rather than for reading the background aloud." },
      { type: "list", items: ["Give every meeting a decision or concrete output.", "Invite only people whose presence changes the decision or the work that follows.", "Send information before the meeting when participants need time to read it.", "End when the work is complete rather than when the calendar slot ends.", "Record the decision, owner and next action so the same question does not return unchanged."] },
      { type: "heading", level: 2, text: "The school day should remain visible" },
      { type: "paragraph", text: "The deepest question is not whether a school has too many meetings. It is whether its coordination system remembers what the meetings are there to protect. The point of organising a school is not to create a beautifully organised calendar. It is to make teaching, learning, care and professional judgement possible." },
      { type: "paragraph", text: "A meeting culture that protects those things can be demanding and still be humane. It asks people to decide, to communicate clearly and to take responsibility for what happens next. It does not confuse more conversation with better coordination." },
      { type: "paragraph", text: "The test is simple enough to use after the next meeting. What became clearer? What decision was made? What work became easier? If the answers are difficult to find, the problem may not be that the school needs another meeting. It may be that the meeting has quietly become the work." },
      { type: "sourceNote", text: "This is an original Staffroom Review editorial piece developed from the publication's existing story proposition. It does not present invented interviews, survey results or institutional reporting as factual evidence." },
    ],
    sources: [],
  },

  "SR-2026-0058": {
    readingTime: "7 min read",
    metaDescription: "A visual inventory of the objects, notes, screens and small routines that make up a teacher's week, and what those objects reveal about the work.",
    hero: imageBlock(images.visual, "The objects of teaching are often ordinary. Their arrangement tells a different story."),
    blocks: [
      { type: "paragraph", text: "A teacher's week rarely looks like a neat sequence of lessons. It is a collection of objects moved from one surface to another: books waiting to be marked, a notebook with three unfinished lists, a mug that has gone cold, a timetable with something crossed out and rewritten, a message that needs answering before the next class." },
      { type: "paragraph", text: "Look closely and the week becomes visible item by item." },
      { type: "heading", level: 2, text: "The timetable" },
      { type: "paragraph", text: "The timetable is supposed to describe time. In practice it also describes interruption. A blank space may be preparation. A crowded sequence may mean that preparation has been pushed elsewhere. A handwritten change in the margin can tell the story of a day more honestly than the original grid." },
      { type: "heading", level: 2, text: "The exercise books" },
      { type: "paragraph", text: "A stack of books is both evidence and promise. It records what students have attempted, what they have misunderstood and what the teacher has not yet had time to respond to. The stack grows quietly. It does not announce itself as urgent until the next lesson depends on what is inside it." },
      { type: "heading", level: 2, text: "The notebook" },
      { type: "paragraph", text: "Teacher notebooks often contain several kinds of writing on the same page: a reminder about a student, a phrase for tomorrow's explanation, a list of photocopies, an idea that arrived during lunch and a note that says simply, 'Ask again.' The page is less a record than an external memory." },
      { type: "heading", level: 2, text: "The red pen" },
      { type: "paragraph", text: "The pen is the least interesting object until it stops working. Then its role becomes clear. Marking is not just correction. It is a conversation delayed by time, a way of telling a student what to notice when the teacher is not in the room." },
      { type: "heading", level: 2, text: "The laptop" },
      { type: "paragraph", text: "The laptop contains the visible and invisible school. Lessons, messages, attendance, documents, calendars and drafts share one screen. It makes work portable, which can be useful and can also make the boundary between school and home harder to see." },
      { type: "heading", level: 2, text: "The chair beside the desk" },
      { type: "paragraph", text: "A chair pulled slightly away from a desk can mean a conversation happened there. A second chair can mean someone stayed after the bell. The physical arrangement of a room records small decisions that are rarely written down." },
      { type: "heading", level: 2, text: "The empty space" },
      { type: "paragraph", text: "Perhaps the most revealing item is the thing that is not there: the uninterrupted hour that would have allowed everything else to be finished. Teachers often build a working week out of fragments. The objects accumulate because the time required to deal with them has been divided into pieces." },
      { type: "paragraph", text: "Seen this way, a teacher's week is not a pile of tasks. It is a system of relationships between objects, people and time. A book creates a response. A response creates a conversation. A conversation changes a plan. The changed plan produces another note." },
      { type: "paragraph", text: "The ordinary objects are not the story because they are special. They are the story because they stay after the headline events have passed. They show what teaching asks a person to remember, carry, decide and begin again." },
      { type: "sourceNote", text: "Visual-story copy is observational and editorial. The objects described are recurring elements of the teaching proposition, not claims about a specific teacher's documented week." },
    ],
    sources: [],
  },

  "SR-2026-0059": {
    readingTime: "5 min read",
    metaDescription: "Changing a seating plan looks small. In a classroom, where students sit can change attention, conversation and what a teacher notices.",
    hero: imageBlock(images.hero, "A classroom arrangement can shape the work that happens inside it."),
    blocks: [
      { type: "paragraph", text: "A seating plan can look like an administrative detail. Names in boxes. A few arrows. Perhaps a version printed and pinned near the desk. Then the students arrive and the boxes become a room." },
      { type: "paragraph", text: "Where someone sits affects what they can see, who they speak to, how quickly they ask for help and how easily a teacher can reach them. It can change the volume of a conversation without anyone deciding to change the conversation." },
      { type: "heading", level: 2, text: "Small changes become visible quickly" },
      { type: "paragraph", text: "Move one student closer to the front and the reason may be attention. Move another beside a different classmate and the reason may be collaboration. Separate two students and the change may be about reducing distraction. Put someone near the door and the decision may have nothing to do with behaviour at all." },
      { type: "paragraph", text: "The same seat can mean different things on different days. A student who needs to see the board may need the front. A student who needs a little space may need the edge. A student who rarely speaks may need a neighbour who makes speaking easier rather than a position that simply makes them more visible." },
      { type: "quote", text: "The seating plan is one of the few parts of a lesson a teacher can change before the lesson begins.", attribution: "Staffroom Review" },
      { type: "heading", level: 2, text: "The danger of treating the room as fixed" },
      { type: "paragraph", text: "Once a seating plan has worked for a while, it can become invisible. That is useful until the needs of the room change. A group settles. A friendship shifts. A new student arrives. A task changes. A student who once needed proximity now needs independence." },
      { type: "paragraph", text: "The plan should therefore be treated as a working hypothesis, not a permanent map of who belongs where. The useful question is not whether the arrangement looks orderly. It is whether the arrangement is helping the particular work of this class." },
      { type: "heading", level: 2, text: "Notice before you move" },
      { type: "paragraph", text: "The best reason to change a seat is usually something concrete that the teacher has noticed. Who is being interrupted? Who is doing more talking than thinking? Who has stopped asking questions? Who is difficult to reach during independent work? Which students seem to change when a particular person is nearby?" },
      { type: "paragraph", text: "These questions make the seating plan part of observation rather than punishment. A move can then be explained as a response to learning rather than as a judgement about a child." },
      { type: "paragraph", text: "There is also value in changing a room for reasons that have nothing to do with a problem. Pairing students differently can create new routes into discussion. A different layout can make collaboration possible. Even a small change can remind a class that the room is designed for the work they are doing now, not simply inherited from last term." },
      { type: "paragraph", text: "A seating plan is small because it is easy to change. That is also why it matters. It gives a teacher one more way to say, before the lesson starts, that the room can be arranged around what the students need next." },
    ],
    sources: [],
  },

  "SR-2026-0060": {
    readingTime: "5 min read",
    metaDescription: "Ordinary school days contain the small decisions and routines that rarely become stories but make teaching, learning and care possible.",
    hero: imageBlock(images.staffroom, "Much of school life is made from moments that never become headline events."),
    blocks: [
      { type: "paragraph", text: "Most school days do not contain a dramatic turning point. There is no breakthrough worth putting on a poster. No perfect lesson. No single conversation that explains the whole week." },
      { type: "paragraph", text: "There is instead the ordinary work: a teacher notices a student has gone quiet, a colleague shares a worksheet, someone finds a missing book, a lesson starts two minutes late because the previous conversation needed another minute. A question is answered in the corridor. A child who usually leaves quickly stays behind." },
      { type: "heading", level: 2, text: "The ordinary is not the same as unimportant" },
      { type: "paragraph", text: "School stories often gather around extremes because extremes are easier to describe. The first day. The exam result. The difficult meeting. The exceptional student. The crisis that everyone remembers." },
      { type: "paragraph", text: "But institutions are mostly maintained by repetitions. People arrive. Rooms are opened. Work is checked. Instructions are clarified. Someone notices what has been missed. Someone else remembers what happened yesterday." },
      { type: "paragraph", text: "That repetition can be tiring, but it is also where culture becomes visible. A school says what matters through the things people repeatedly make time to do." },
      { type: "heading", level: 2, text: "Small acts carry the shape of a school" },
      { type: "paragraph", text: "Consider a student who cannot find a place to start a task. One teacher may repeat the instruction. Another may sit beside the student and make the first step smaller. Neither response needs to become a philosophy of teaching. It is simply a choice made in a particular minute." },
      { type: "paragraph", text: "The same is true among adults. A colleague can answer a question without making the person asking feel foolish. A department can leave useful notes for the person teaching the next class. A leader can explain why a decision was made instead of only announcing it." },
      { type: "quote", text: "A school becomes itself through what happens when nobody is making a speech about what a school should be.", attribution: "Staffroom Review" },
      { type: "heading", level: 2, text: "What ordinary days leave behind" },
      { type: "paragraph", text: "At the end of a school day, the visible evidence can be modest. Boards are wiped. Chairs move. Books return to shelves. The building becomes quieter. Yet the day has altered hundreds of small expectations: who trusts whom, who knows where to go, who feels able to ask, who believes that an adult will notice." },
      { type: "paragraph", text: "None of this means that every small act is equally important or that schools should romanticise busyness. Ordinary work can be inefficient, repetitive or unnecessarily difficult. Paying attention to it is useful precisely because it makes those patterns easier to see." },
      { type: "paragraph", text: "The ordinary school day deserves attention because it is where the publication's larger questions become practical. What does a school value? How does a teacher decide? What does care look like when there is no ceremony around it?" },
      { type: "paragraph", text: "The answer is usually somewhere between the bell and the next thing that needs doing." },
    ],
    sources: [],
  },

  "SR-2026-0061": {
    readingTime: "8 min read",
    metaDescription: "“Good teaching” sounds self-evident until a school has to decide what it means. The phrase contains competing ideas about attention, judgement, knowledge and care.",
    hero: imageBlock(images.hero, "Good teaching is easier to name in the abstract than to recognise in a particular room."),
    blocks: [
      { type: "paragraph", text: "“Good teaching” is one of those phrases that seems clear until someone asks what it means. The room becomes quieter. People begin to offer examples. A well-planned lesson. Strong subject knowledge. High expectations. Relationships. Questioning. Assessment. Independence. Engagement." },
      { type: "paragraph", text: "None of these answers is wrong. None is enough on its own." },
      { type: "paragraph", text: "The difficulty is that teaching is not a single action performed under stable conditions. It is a sequence of judgements made in response to people, knowledge, time and circumstance. A technique that helps one class can make another less responsive. A lesson that looks untidy can contain more thinking than one that looks perfectly controlled. A quiet room can be attentive, confused or simply tired." },
      { type: "heading", level: 2, text: "The temptation to turn quality into a checklist" },
      { type: "paragraph", text: "Schools need shared language. Without it, professional conversations can become vague and difficult to act on. The temptation is therefore to make quality visible through a list: look for this, record that, count the other thing." },
      { type: "paragraph", text: "Checklists can be useful when they protect essentials. They become less useful when the presence of a feature is treated as proof of quality. A teacher can ask many questions without giving students enough time to think. A lesson can contain a clear objective without making the underlying idea clear. A classroom can look calm while students are doing very little intellectual work." },
      { type: "paragraph", text: "The checklist problem is not that observation is wrong. It is that observation can become detached from purpose." },
      { type: "heading", level: 2, text: "Start with what students are trying to learn" },
      { type: "paragraph", text: "A more useful starting point is the work of the lesson itself. What are students being asked to understand, practise, question or make? What would count as a meaningful change in their understanding?" },
      { type: "paragraph", text: "Once that is clear, teaching decisions become easier to interpret. A long explanation may be exactly right when an idea is unfamiliar. It may be unhelpful when students need to attempt something. A discussion may deepen thinking in one lesson and become a way of avoiding difficult practice in another." },
      { type: "quote", text: "Good teaching is not a collection of visible moves. It is the quality of the judgement connecting those moves to the work of learning.", attribution: "Staffroom Review" },
      { type: "heading", level: 2, text: "Attention is part of the job" },
      { type: "paragraph", text: "Teachers are often asked to hold several kinds of attention at once. There is the planned attention of the lesson and the unplanned attention of the room: the student who has stopped writing, the pair that has become stuck, the question that reveals a misconception, the expression that says the explanation has moved too quickly." },
      { type: "paragraph", text: "This is why good teaching cannot be reduced to delivering a plan. The plan matters because it gives the lesson direction. Responsiveness matters because the room provides information the plan could not contain in advance." },
      { type: "heading", level: 2, text: "Knowledge still matters" },
      { type: "paragraph", text: "There is another risk in making teaching entirely about responsiveness: the idea that a good teacher simply follows the room. That is not enough either. Students need access to knowledge they do not already have, and teachers need enough subject understanding to choose examples, sequence ideas, identify errors and recognise when a question matters." },
      { type: "paragraph", text: "Professional judgement depends on knowledge. It also depends on knowing what the knowledge is for." },
      { type: "heading", level: 2, text: "Care is not the whole definition" },
      { type: "paragraph", text: "Relationships matter because students learn with people, not with an abstract curriculum. But kindness alone cannot define good teaching. A teacher can be warm and still set work that teaches very little. High expectations without care can become brittle. Care without intellectual ambition can become another form of low expectation." },
      { type: "paragraph", text: "The better question is how these things work together. Does the classroom communicate that students are worth teaching carefully? Does the work give them something worth thinking about? Does the teacher notice when the planned route is not working? Does the structure of the lesson make it possible for students to practise, question and improve?" },
      { type: "heading", level: 2, text: "A definition that leaves room for judgement" },
      { type: "paragraph", text: "Perhaps good teaching is best understood less as a performance and more as a relationship between intention and response. The teacher begins with a purpose, chooses a route, watches what happens and adjusts without losing sight of the destination." },
      { type: "paragraph", text: "That definition is deliberately less tidy than a checklist. It has to be. Teaching is a professional practice conducted in changing conditions, with incomplete information and real people in the room." },
      { type: "paragraph", text: "This does not make evaluation impossible. It makes evaluation more demanding. A useful conversation about teaching should be able to ask not only what happened, but why that choice made sense, what the students were being asked to do, what the teacher noticed and what changed as a result." },
      { type: "paragraph", text: "The phrase “good teaching” will probably remain useful because schools need to talk about quality. The challenge is to keep the phrase open enough to support professional judgement rather than closing it down." },
      { type: "paragraph", text: "The best definition may therefore be a question: what did the teacher make possible here that would not have happened otherwise?" },
      { type: "sourceNote", text: "This is an original Staffroom Review essay. It intentionally avoids presenting invented classroom observations, research findings or named expert quotations as reported evidence." },
    ],
    sources: [],
  },

  "SR-2026-0065": {
    readingTime: "8 min read",
    metaDescription: "Teaching is often described through lessons and outcomes. The lived work is more granular: hundreds of small decisions about attention, timing, explanation, recovery and care.",
    hero: imageBlock(images.hero, "A school day is shaped by many small decisions that rarely appear in the lesson plan."),
    blocks: [
      { type: "paragraph", text: "A school day can be described in large units. Lessons. Breaks. Meetings. Registration. Lunch. The final bell. From a distance, the timetable makes the work look orderly." },
      { type: "paragraph", text: "Inside the day, it is different. A teacher decides whether to answer a question immediately or let the class sit with it. Whether to move on or explain again. Whether a student needs a prompt, a pause or a private conversation. Whether the planned activity still makes sense after the room has changed." },
      { type: "paragraph", text: "The work of teaching is partly the work of making those decisions without turning every decision into a crisis." },
      { type: "heading", level: 2, text: "The first decisions happen before the lesson" },
      { type: "paragraph", text: "Before students arrive, the room already offers information. The previous class has left something behind. A student has been absent. A resource is missing. The teacher has remembered a conversation from yesterday. The plan may still be the plan, but it is no longer being used under the conditions in which it was written." },
      { type: "paragraph", text: "Good preparation does not remove uncertainty. It gives the teacher something to respond from." },
      { type: "heading", level: 2, text: "Attention is a moving target" },
      { type: "paragraph", text: "A class can look attentive and still be lost. It can look restless and still be thinking. A teacher therefore has to read more than noise. Who is following? Who has stopped trying? Which question is being repeated? Which student has suddenly become very quiet?" },
      { type: "paragraph", text: "These observations do not always lead to an immediate intervention. Sometimes the decision is to wait. Sometimes it is to ask a better question. Sometimes it is to change the task for everyone because the pattern is larger than one student." },
      { type: "quote", text: "Teaching is full of decisions that are small in size and large in consequence.", attribution: "Staffroom Review" },
      { type: "heading", level: 2, text: "The decision not to intervene" },
      { type: "paragraph", text: "Not every problem needs an adult response. A student can struggle for a moment and recover. Two students can disagree and solve it. A question can remain unanswered long enough to become useful." },
      { type: "paragraph", text: "Knowing when not to intervene is still a decision. It requires confidence that the room can carry a little uncertainty without collapsing into confusion." },
      { type: "heading", level: 2, text: "The decision to change the plan" },
      { type: "paragraph", text: "Teachers often speak about abandoning a plan as though it is a failure. Sometimes it is. Sometimes the plan has done its job by revealing that another route is needed." },
      { type: "paragraph", text: "A discussion that goes deeper than expected may need another ten minutes. An explanation that is not landing may need a concrete example. A task that is too easy may need an additional constraint. A class that is tired may need a different rhythm." },
      { type: "paragraph", text: "The professional skill is not spontaneity for its own sake. It is being able to change direction without losing the purpose of the lesson." },
      { type: "heading", level: 2, text: "Decisions about people are decisions about learning" },
      { type: "paragraph", text: "The most difficult decisions often involve people rather than content. Where should a student sit? When should a private conversation happen? How should a correction be made? When does a pattern require another adult's help?" },
      { type: "paragraph", text: "These choices can be treated as behaviour management, but they are also choices about access to learning. A student who feels constantly watched may participate differently from one who feels trusted. A correction delivered publicly may have a different effect from the same correction delivered quietly." },
      { type: "heading", level: 2, text: "The school makes decisions too" },
      { type: "paragraph", text: "Teachers are not the only decision-makers. Schools decide how time is allocated, what meetings exist, which information is collected, how support is organised and what counts as urgent. Those institutional decisions shape the smaller decisions available to teachers." },
      { type: "paragraph", text: "A teacher who has ten uninterrupted minutes can prepare differently from one who has ten fragmented minutes. A school that makes expectations clear reduces the number of decisions people have to reconstruct. A school that changes priorities constantly creates more judgement calls, not fewer." },
      { type: "heading", level: 2, text: "Why the small decisions are hard to see" },
      { type: "paragraph", text: "Most decisions disappear when they work. The class continues. The student gets started. The meeting ends. The teacher moves to the next room. There is rarely a record saying: this moment went well because someone chose to wait twenty seconds before answering." },
      { type: "paragraph", text: "That invisibility can make teaching look easier than it is. It can also make professional judgement difficult to discuss. If the visible output is a worksheet, a grade or a completed lesson, the decisions that produced it can disappear from view." },
      { type: "heading", level: 2, text: "Making the work discussable" },
      { type: "paragraph", text: "One way to improve professional conversation is to ask teachers to describe the decision rather than only the activity. What did you notice? What options did you have? Why did you choose this one? What happened next? Would you make the same choice again?" },
      { type: "paragraph", text: "These questions do not turn judgement into a formula. They make judgement visible enough to learn from." },
      { type: "paragraph", text: "A school day is made of hundreds of small decisions because teaching is a practice of responding. The challenge is not to eliminate those decisions. It is to create the time, knowledge and professional trust that allow teachers to make them well." },
      { type: "paragraph", text: "By the final bell, most of the decisions will already be gone. The lesson will be over. The room will be quieter. What remains is the accumulated shape of all those moments: what students were asked to notice, what they were allowed to try, where adults made room, and where they decided that one more minute mattered." },
      { type: "sourceNote", text: "This is an original Staffroom Review essay developed from the homepage editorial proposition. It is reflective rather than reported and does not invent interviews, statistics or named case studies." },
    ],
    sources: [],
  },
};

export function getStoryArticle(storyId) {
  return storyArticles[storyId] || null;
}
