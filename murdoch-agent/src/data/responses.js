// ─── Course Data ────────────────────────────────────────────────────────────

export const COURSES = {
  business: [
    {
      id: 'bbus',
      name: 'Bachelor of Business',
      faculty: 'Business & Governance',
      duration: '3 years',
      delivery: 'On campus · Online',
      atar: '65.00',
      tags: ['Management', 'Marketing', 'Finance'],
      description: 'Build leadership and commercial skills across management, marketing, accounting, and strategy.',
      color: '#1d4ed8',
    },
    {
      id: 'blaw',
      name: 'Bachelor of Laws (LLB)',
      faculty: 'Business & Governance',
      duration: '4 years',
      delivery: 'On campus',
      atar: '78.00',
      tags: ['Law', 'Justice', 'Policy'],
      description: 'Develop critical legal thinking with a strong focus on justice, ethics, and real-world practice.',
      color: '#7c3aed',
    },
    {
      id: 'bacct',
      name: 'Bachelor of Accounting',
      faculty: 'Business & Governance',
      duration: '3 years',
      delivery: 'On campus · Online',
      atar: '65.00',
      tags: ['Accounting', 'Tax', 'Audit'],
      description: 'Gain CPA and CA-accredited qualifications preparing you for a career in finance and accounting.',
      color: '#059669',
    },
  ],
  science: [
    {
      id: 'bsc',
      name: 'Bachelor of Science',
      faculty: 'Science, Technology & Engineering',
      duration: '3 years',
      delivery: 'On campus',
      atar: '65.00',
      tags: ['Biology', 'Chemistry', 'Physics'],
      description: 'Explore the natural world through hands-on labs, field work, and industry placements.',
      color: '#0891b2',
    },
    {
      id: 'beng',
      name: 'Bachelor of Engineering (Honours)',
      faculty: 'Science, Technology & Engineering',
      duration: '4 years',
      delivery: 'On campus',
      atar: '73.00',
      tags: ['Civil', 'Mechanical', 'Environmental'],
      description: 'Engineers Australia-accredited degree with industry partnerships from day one.',
      color: '#ea580c',
    },
    {
      id: 'bcs',
      name: 'Bachelor of Computer Science',
      faculty: 'Science, Technology & Engineering',
      duration: '3 years',
      delivery: 'On campus · Online',
      atar: '65.00',
      tags: ['AI', 'Cyber Security', 'Software Dev'],
      description: 'Specialise in AI, cybersecurity, or software engineering with strong industry links.',
      color: '#7c3aed',
    },
  ],
  health: [
    {
      id: 'bns',
      name: 'Bachelor of Nursing Science',
      faculty: 'Health Sciences',
      duration: '3 years',
      delivery: 'On campus',
      atar: '65.00',
      tags: ['Clinical', 'Community Health', 'Care'],
      description: 'ANMAC-accredited degree with extensive clinical placements across Perth hospitals.',
      color: '#dc2626',
    },
    {
      id: 'bpsych',
      name: 'Bachelor of Psychology',
      faculty: 'Health Sciences',
      duration: '3 years',
      delivery: 'On campus',
      atar: '72.00',
      tags: ['Behavioural', 'Clinical', 'Research'],
      description: 'APAC-accredited psychology degree with research opportunities and counselling practicums.',
      color: '#9333ea',
    },
    {
      id: 'bex',
      name: 'Bachelor of Exercise Science',
      faculty: 'Health Sciences',
      duration: '3 years',
      delivery: 'On campus',
      atar: '65.00',
      tags: ['Sport', 'Rehab', 'Performance'],
      description: 'Combine sport science, physiology, and coaching to pursue a career in health and performance.',
      color: '#16a34a',
    },
  ],
  arts: [
    {
      id: 'bca',
      name: 'Bachelor of Communication Arts',
      faculty: 'Arts & Humanities',
      duration: '3 years',
      delivery: 'On campus',
      atar: '65.00',
      tags: ['Media', 'Journalism', 'PR'],
      description: 'Storytelling, media production, and journalism skills for modern communication careers.',
      color: '#d97706',
    },
    {
      id: 'bed',
      name: 'Bachelor of Education (Primary)',
      faculty: 'Arts & Humanities',
      duration: '4 years',
      delivery: 'On campus',
      atar: '65.00',
      tags: ['Primary', 'Literacy', 'STEM Teaching'],
      description: 'AITSL-accredited teacher education with extensive classroom practicums in Perth schools.',
      color: '#0284c7',
    },
    {
      id: 'bcrim',
      name: 'Bachelor of Criminology',
      faculty: 'Arts & Humanities',
      duration: '3 years',
      delivery: 'On campus',
      atar: '65.00',
      tags: ['Justice', 'Policy', 'Forensics'],
      description: 'Examine crime, justice, and policy through sociology, law, and psychology perspectives.',
      color: '#374151',
    },
  ],
};

// ─── Featured Prompts ────────────────────────────────────────────────────────

export const FEATURED_PROMPTS = [
  {
    id: 'course',
    text: 'Help me find a course',
    icon: '🎓',
    message: 'Help me find a course',
  },
  {
    id: 'apply',
    text: 'How do I apply?',
    icon: '📋',
    message: 'How do I apply to Murdoch?',
  },
  {
    id: 'fees',
    text: 'Fees & scholarships',
    icon: '💰',
    message: 'Tell me about fees and scholarships',
  },
  {
    id: 'campus',
    text: 'About campus life',
    icon: '🏡',
    message: 'What is campus life like at Murdoch?',
  },
];

// ─── Response Engine ─────────────────────────────────────────────────────────

const AREA_CHIPS = [
  { label: 'Business & Law', key: 'business' },
  { label: 'Science & Engineering', key: 'science' },
  { label: 'Health & Medicine', key: 'health' },
  { label: 'Arts & Humanities', key: 'arts' },
];

const APPLICATION_STEPS = [
  {
    step: '1',
    title: 'Check your entry requirements',
    detail: 'Most undergraduate degrees require an ATAR of 65+. Murdoch also considers work experience and portfolio for selected programs.',
  },
  {
    step: '2',
    title: 'Apply via TISC or direct',
    detail: 'WA applicants apply through TISC (tisc.edu.au). Interstate and international applicants can apply directly through murdoch.edu.au/study.',
  },
  {
    step: '3',
    title: 'Receive your offer',
    detail: 'Offers for Semester 1 are released in late January. Mid-year entry (Semester 2) offers are released in June.',
  },
  {
    step: '4',
    title: 'Accept & enrol',
    detail: 'Once you accept your offer, you\'ll receive enrolment instructions. You can choose your units and timetable via MyInfo.',
  },
];

// Detect intent from user message
function detectIntent(msg) {
  const lower = msg.toLowerCase();

  // Area follow-ups
  if (lower.includes('business') || lower.includes('law') || lower.includes('commerce')) return { intent: 'courses_area', area: 'business' };
  if (lower.includes('science') || lower.includes('engineer') || lower.includes('computer') || lower.includes('it') || lower.includes('tech')) return { intent: 'courses_area', area: 'science' };
  if (lower.includes('health') || lower.includes('nurs') || lower.includes('psych') || lower.includes('medicine') || lower.includes('exercise')) return { intent: 'courses_area', area: 'health' };
  if (lower.includes('art') || lower.includes('humani') || lower.includes('education') || lower.includes('crimin') || lower.includes('media') || lower.includes('communicat')) return { intent: 'courses_area', area: 'arts' };

  // Main intents
  if (lower.includes('find') && (lower.includes('course') || lower.includes('degree'))) return { intent: 'course_discovery' };
  if (lower.includes('what') && lower.includes('stud') && (lower.includes('interest') || lower.includes('passion') || lower.includes('do'))) return { intent: 'course_discovery' };
  if (lower.includes('course') || lower.includes('degree') || lower.includes('major') || lower.includes('bachelor') || lower.includes('study')) return { intent: 'course_discovery' };
  if (lower.includes('apply') || lower.includes('application') || lower.includes('how do i get in') || lower.includes('entry') || lower.includes('atar') || lower.includes('enrol')) return { intent: 'admissions' };
  if (lower.includes('fee') || lower.includes('cost') || lower.includes('scholarship') || lower.includes('money') || lower.includes('price') || lower.includes('afford') || lower.includes('hecs') || lower.includes('help fee')) return { intent: 'fees' };
  if (lower.includes('campus') || lower.includes('life') || lower.includes('accomm') || lower.includes('sport') || lower.includes('club') || lower.includes('social') || lower.includes('kangaroo') || lower.includes('perth')) return { intent: 'campus' };
  if (lower.includes('international') || lower.includes('overseas') || lower.includes('visa') || lower.includes('student visa')) return { intent: 'international' };
  if (lower.includes('postgrad') || lower.includes('master') || lower.includes('phd') || lower.includes('honours') || lower.includes('graduate')) return { intent: 'postgrad' };
  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey') || msg.trim().length < 5) return { intent: 'greeting' };

  return { intent: 'fallback' };
}

// Build response object from intent
export function getAgentResponse(userMessage) {
  const { intent, area } = detectIntent(userMessage);

  switch (intent) {
    case 'greeting':
      return {
        type: 'text_chips',
        text: "Hi there! 👋 I'm your Murdoch University guide. I'm here to help you find the right course, understand how to apply, explore scholarships, or just get a feel for life on campus.\n\nWhat would you like to know?",
        chips: FEATURED_PROMPTS.map(p => ({ label: `${p.icon} ${p.text}`, message: p.message })),
      };

    case 'course_discovery':
      return {
        type: 'text_chips',
        text: "I'd love to help you find your perfect degree at Murdoch! 🎓\n\nWe have over 100 undergraduate and postgraduate programs across a range of disciplines. What area are you most interested in exploring?",
        chips: AREA_CHIPS.map(c => ({ label: c.label, message: `I'm interested in ${c.label}` })),
      };

    case 'courses_area':
      return {
        type: 'text_courses',
        text: `Great choice! Here are some of our most popular degrees in **${AREA_CHIPS.find(c => c.key === area)?.label}** — click any card to explore further:`,
        courses: COURSES[area],
        chips: [
          { label: 'Show me other areas', message: 'Help me find a course' },
          { label: 'How do I apply?', message: 'How do I apply to Murdoch?' },
        ],
      };

    case 'admissions':
      return {
        type: 'text_steps',
        text: "Applying to Murdoch is more straightforward than you might think. Here's how the process works:",
        steps: APPLICATION_STEPS,
        chips: [
          { label: 'When are the key dates?', message: 'What are the key dates for applications?' },
          { label: 'Tell me about ATAR', message: 'What ATAR do I need?' },
          { label: 'Fees & scholarships', message: 'Tell me about fees and scholarships' },
        ],
      };

    case 'fees':
      return {
        type: 'text_info',
        text: "Great question — understanding your costs upfront is really important. Here's an overview:",
        infoBlocks: [
          {
            title: '💳 Domestic fees (CSP)',
            content: 'Most domestic students are eligible for Commonwealth Supported Places, meaning you only pay a student contribution — typically $4,000–$11,000 per year, depending on your discipline. You can defer this through HECS-HELP.',
            accent: '#0891b2',
          },
          {
            title: '🌏 International fees',
            content: 'International undergraduate tuition ranges from approximately AUD $31,000–$40,000 per year, depending on your program. Payment plans and early-payment discounts are available.',
            accent: '#7c3aed',
          },
          {
            title: '🏆 Scholarships available',
            content: 'Murdoch offers over 200 scholarships worth up to $10,000. Key ones include the Vice Chancellor\'s Excellence Scholarship (ATAR 95+), Merit scholarships, and equity-based awards. Many don\'t require a separate application.',
            accent: '#C4122F',
          },
        ],
        chips: [
          { label: 'How do I apply?', message: 'How do I apply to Murdoch?' },
          { label: 'Find my course', message: 'Help me find a course' },
        ],
      };

    case 'campus':
      return {
        type: 'text_info',
        text: "Murdoch's Perth campus is genuinely one-of-a-kind — and not just because we share it with a few kangaroos and a farm 🦘🐄\n\nHere's what life looks like on campus:",
        infoBlocks: [
          {
            title: '📍 South Street Campus, Perth',
            content: 'Our flagship campus sits on 327 hectares in the southern suburbs of Perth. It\'s beautiful, spacious, and packed with modern facilities — labs, studios, a library, cafes, and green open spaces.',
            accent: '#16a34a',
          },
          {
            title: '🏠 Student accommodation',
            content: 'On-campus accommodation is available through UniRes, with room options from single studios to shared apartments. You\'ll be a 5-minute walk from lectures.',
            accent: '#0891b2',
          },
          {
            title: '🏅 Sport & clubs',
            content: 'Murdoch has over 30 student clubs and a full recreation centre with gym, pool, and sports courts. The sport association runs intercollegiate competitions year-round.',
            accent: '#ea580c',
          },
          {
            title: '🎓 Student support',
            content: 'Free wellbeing services, career coaching, academic support, and disability support are all on campus. Murdoch consistently scores highly for student satisfaction in the QILT survey.',
            accent: '#7c3aed',
          },
        ],
        chips: [
          { label: 'Find my course', message: 'Help me find a course' },
          { label: 'Accommodation details', message: 'Tell me more about student accommodation' },
        ],
      };

    case 'international':
      return {
        type: 'text_info',
        text: "Murdoch welcomes students from over 90 countries. If you're coming from overseas, here's what you need to know:",
        infoBlocks: [
          {
            title: '📄 Student visa (Subclass 500)',
            content: 'You\'ll need a student visa to study in Australia. Murdoch can issue you a Confirmation of Enrolment (CoE) once you accept your offer, which you use to apply for your visa through the Australian Department of Home Affairs.',
            accent: '#0891b2',
          },
          {
            title: '🌐 English requirements',
            content: 'Most programs require IELTS 6.0 (Academic) overall, with no band below 6.0. Murdoch also accepts TOEFL, PTE Academic, and Cambridge C1/C2.',
            accent: '#7c3aed',
          },
          {
            title: '✈️ Arrival & orientation',
            content: 'The Murdoch International team runs a dedicated orientation week before semester starts. Free airport pickup and temporary housing assistance is available.',
            accent: '#C4122F',
          },
        ],
        chips: [
          { label: 'International fees', message: 'Tell me about fees and scholarships' },
          { label: 'Find my course', message: 'Help me find a course' },
        ],
      };

    case 'postgrad':
      return {
        type: 'text_chips',
        text: "Murdoch has an excellent range of postgraduate programs — from coursework Masters to research PhDs. 🎓\n\nOur most popular postgrad areas include:\n\n• **Business & Management** — MBA, Master of Marketing, Master of Finance\n• **Information Technology** — Master of IT, Cybersecurity, Data Science\n• **Health Sciences** — Master of Public Health, Nursing, Psychology\n• **Education** — Master of Teaching, Educational Leadership\n• **Engineering** — Master of Engineering, Environmental Engineering\n\nEntry typically requires a relevant bachelor's degree (or equivalent). Some programs also accept professional experience in lieu of formal qualifications.\n\nWhat area are you looking at for your postgrad study?",
        chips: [
          { label: 'Business & Management', message: "I'm interested in Business & Law" },
          { label: 'Information Technology', message: "I'm interested in Science & Engineering" },
          { label: 'Health Sciences', message: "I'm interested in Health & Medicine" },
          { label: 'How do I apply?', message: 'How do I apply to Murdoch?' },
        ],
      };

    default: {
      // Check for specific key dates question
      const lower = userMessage.toLowerCase();
      if (lower.includes('date') || lower.includes('deadline') || lower.includes('when') || lower.includes('semester')) {
        return {
          type: 'text_info',
          text: "Here are the key dates you need to know for 2025 entry:",
          infoBlocks: [
            {
              title: '📅 Semester 1 (February start)',
              content: 'TISC applications open: April. Main closing date: September 30. Late applications: October–December. Offers released: late January. Census date: early March.',
              accent: '#C4122F',
            },
            {
              title: '📅 Semester 2 (July start)',
              content: 'Direct applications open: February. Closing date: May 31. Offers released: mid-June. Classes begin: late July.',
              accent: '#0891b2',
            },
          ],
          chips: [
            { label: 'How do I apply?', message: 'How do I apply to Murdoch?' },
            { label: 'Fees & scholarships', message: 'Tell me about fees and scholarships' },
          ],
        };
      }

      if (lower.includes('atar') || lower.includes('entry requirement') || lower.includes('what marks')) {
        return {
          type: 'text_chips',
          text: "Murdoch uses ATAR as one of several pathways into our degrees. Most programs have an ATAR threshold of **65.00**, though some competitive programs (like Law and Engineering Honours) sit higher.\n\n**Alternative entry options if your ATAR isn't quite there:**\n\n• **Murdoch Foundation Studies** — a bridging pathway for students who didn't meet ATAR thresholds\n• **Mature-age entry** — if you're 21+, relevant work experience can substitute for ATAR\n• **STAT (Special Tertiary Admissions Test)** — an aptitude test accepted by Murdoch\n• **Portfolio entry** — for creative and design programs\n\nWould you like to know the ATAR requirement for a specific degree?",
          chips: [
            { label: 'Find my course', message: 'Help me find a course' },
            { label: 'How do I apply?', message: 'How do I apply to Murdoch?' },
          ],
        };
      }

      if (lower.includes('accommodat') || lower.includes('housing') || lower.includes('where to live') || lower.includes('dorm')) {
        return {
          type: 'text_info',
          text: "Murdoch's on-campus accommodation is run through **UniRes** and is designed for both domestic and international students:",
          infoBlocks: [
            {
              title: '🏠 Accommodation options',
              content: 'UniRes offers catered and self-catered options. Rooms range from shared apartments ($190–$250/wk) to private studios ($290–$380/wk). All rooms include WiFi, utilities, and access to communal kitchens and laundry.',
              accent: '#16a34a',
            },
            {
              title: '📍 Location',
              content: 'UniRes is located on the South Street campus, a short walk from all teaching buildings, the library, and the Student Guild.',
              accent: '#0891b2',
            },
          ],
          chips: [
            { label: 'Back to campus life', message: 'What is campus life like at Murdoch?' },
            { label: 'Help me find a course', message: 'Help me find a course' },
          ],
        };
      }

      return {
        type: 'text_chips',
        text: "That's a great question! I want to make sure I give you the most useful answer. Could you tell me a bit more about what you're looking for? Or choose one of the topics below to get started:",
        chips: FEATURED_PROMPTS.map(p => ({ label: `${p.icon} ${p.text}`, message: p.message })),
      };
    }
  }
}
