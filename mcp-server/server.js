import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createMcpExpressApp } from '@modelcontextprotocol/sdk/server/express.js';
import { z } from 'zod';

const PORT = 3845;

// ─── Course data (mirrors murdoch-agent/src/data/responses.js) ─────────────
const COURSES = {
  business: [
    { id: 'bbus', name: 'Bachelor of Business', faculty: 'Business & Governance', duration: '3 years', delivery: 'On campus · Online', atar: '65.00', tags: ['Management', 'Marketing', 'Finance'], description: 'Build leadership and commercial skills across management, marketing, accounting, and strategy.' },
    { id: 'blaw', name: 'Bachelor of Laws (LLB)', faculty: 'Business & Governance', duration: '4 years', delivery: 'On campus', atar: '78.00', tags: ['Law', 'Justice', 'Policy'], description: 'Develop critical legal thinking with a strong focus on justice, ethics, and real-world practice.' },
    { id: 'bacct', name: 'Bachelor of Accounting', faculty: 'Business & Governance', duration: '3 years', delivery: 'On campus · Online', atar: '65.00', tags: ['Accounting', 'Tax', 'Audit'], description: 'Gain CPA and CA-accredited qualifications preparing you for a career in finance and accounting.' },
  ],
  science: [
    { id: 'bsc', name: 'Bachelor of Science', faculty: 'Science, Technology & Engineering', duration: '3 years', delivery: 'On campus', atar: '65.00', tags: ['Biology', 'Chemistry', 'Physics'], description: 'Explore the natural world through hands-on labs, field work, and industry placements.' },
    { id: 'beng', name: 'Bachelor of Engineering (Honours)', faculty: 'Science, Technology & Engineering', duration: '4 years', delivery: 'On campus', atar: '73.00', tags: ['Civil', 'Mechanical', 'Environmental'], description: 'Engineers Australia-accredited degree with industry partnerships from day one.' },
    { id: 'bcs', name: 'Bachelor of Computer Science', faculty: 'Science, Technology & Engineering', duration: '3 years', delivery: 'On campus · Online', atar: '65.00', tags: ['AI', 'Cyber Security', 'Software Dev'], description: 'Specialise in AI, cybersecurity, or software engineering with strong industry links.' },
  ],
  health: [
    { id: 'bns', name: 'Bachelor of Nursing Science', faculty: 'Health Sciences', duration: '3 years', delivery: 'On campus', atar: '65.00', tags: ['Clinical', 'Community Health', 'Care'], description: 'ANMAC-accredited degree with extensive clinical placements across Perth hospitals.' },
    { id: 'bpsych', name: 'Bachelor of Psychology', faculty: 'Health Sciences', duration: '3 years', delivery: 'On campus', atar: '72.00', tags: ['Behavioural', 'Clinical', 'Research'], description: 'APAC-accredited psychology degree with research opportunities and counselling practicums.' },
    { id: 'bex', name: 'Bachelor of Exercise Science', faculty: 'Health Sciences', duration: '3 years', delivery: 'On campus', atar: '65.00', tags: ['Sport', 'Rehab', 'Performance'], description: 'Combine sport science, physiology, and coaching to pursue a career in health and performance.' },
  ],
  arts: [
    { id: 'bca', name: 'Bachelor of Communication Arts', faculty: 'Arts & Humanities', duration: '3 years', delivery: 'On campus', atar: '65.00', tags: ['Media', 'Journalism', 'PR'], description: 'Storytelling, media production, and journalism skills for modern communication careers.' },
    { id: 'bed', name: 'Bachelor of Education (Primary)', faculty: 'Arts & Humanities', duration: '4 years', delivery: 'On campus', atar: '65.00', tags: ['Primary', 'Literacy', 'STEM Teaching'], description: 'AITSL-accredited teacher education with extensive classroom practicums in Perth schools.' },
    { id: 'bcrim', name: 'Bachelor of Criminology', faculty: 'Arts & Humanities', duration: '3 years', delivery: 'On campus', atar: '65.00', tags: ['Justice', 'Policy', 'Forensics'], description: 'Examine crime, justice, and policy through sociology, law, and psychology perspectives.' },
  ],
};

// ─── Factory: create and configure a fresh McpServer ─────────────────────────
// A new instance is created per request (stateless mode).
function createServer() {
  const srv = new McpServer({
    name: 'murdoch-agent-mcp',
    version: '1.0.0',
  });

  srv.tool(
    'list_areas',
    'List all study areas available at Murdoch University',
    {},
    async () => ({
      content: [{
        type: 'text',
        text: JSON.stringify({
          areas: [
            { key: 'business', label: 'Business & Governance' },
            { key: 'science', label: 'Science, Technology & Engineering' },
            { key: 'health', label: 'Health Sciences' },
            { key: 'arts', label: 'Arts & Humanities' },
          ],
        }, null, 2),
      }],
    })
  );

  srv.tool(
    'get_courses',
    'Get undergraduate courses for a specific study area at Murdoch University',
    {
      area: z.enum(['business', 'science', 'health', 'arts'])
        .describe('Study area: business, science, health, or arts'),
    },
    async ({ area }) => ({
      content: [{
        type: 'text',
        text: JSON.stringify({ area, courses: COURSES[area] }, null, 2),
      }],
    })
  );

  srv.tool(
    'search_courses',
    'Search all Murdoch University courses by keyword (name, tag, or faculty)',
    {
      query: z.string().describe('Search keyword, e.g. "engineering", "nursing", "AI"'),
    },
    async ({ query }) => {
      const q = query.toLowerCase();
      const results = [];
      for (const [area, courses] of Object.entries(COURSES)) {
        for (const course of courses) {
          const haystack = [course.name, course.faculty, course.description, ...course.tags].join(' ').toLowerCase();
          if (haystack.includes(q)) results.push({ area, ...course });
        }
      }
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({ query, count: results.length, results }, null, 2),
        }],
      };
    }
  );

  srv.tool(
    'get_admission_info',
    'Get admission requirements and application process for Murdoch University',
    {},
    async () => ({
      content: [{
        type: 'text',
        text: JSON.stringify({
          steps: [
            { step: 1, title: 'Check your entry requirements', detail: 'Most undergraduate degrees require an ATAR of 65+. Murdoch also considers work experience and portfolio for selected programs.' },
            { step: 2, title: 'Apply via TISC or direct', detail: 'WA applicants apply through TISC (tisc.edu.au). Interstate and international applicants apply directly through murdoch.edu.au/study.' },
            { step: 3, title: 'Receive your offer', detail: 'Offers for Semester 1 are released in late January. Mid-year entry (Semester 2) offers are released in June.' },
            { step: 4, title: 'Accept & enrol', detail: "Accept your offer and enrol via MyInfo to select units and timetable." },
          ],
          alternativeEntry: [
            'Murdoch Foundation Studies — bridging pathway for students who did not meet ATAR thresholds',
            'Mature-age entry — if you are 21+, relevant work experience can substitute for ATAR',
            'STAT (Special Tertiary Admissions Test)',
            'Portfolio entry — for creative and design programs',
          ],
          keyDates: {
            semester1: { closingDate: 'September 30', offersReleased: 'Late January', start: 'February' },
            semester2: { closingDate: 'May 31', offersReleased: 'Mid-June', start: 'Late July' },
          },
        }, null, 2),
      }],
    })
  );

  srv.tool(
    'get_fees_info',
    'Get fee structures and scholarship information for Murdoch University',
    {},
    async () => ({
      content: [{
        type: 'text',
        text: JSON.stringify({
          domestic: {
            type: 'Commonwealth Supported Place (CSP)',
            annualCost: 'AUD $4,000–$11,000 per year',
            deferral: 'HECS-HELP available',
          },
          international: {
            annualCost: 'AUD $31,000–$40,000 per year',
            options: 'Payment plans and early-payment discounts available',
          },
          scholarships: {
            count: '200+',
            maxValue: 'Up to AUD $10,000',
            notable: ["Vice Chancellor's Excellence Scholarship (ATAR 95+)", 'Merit scholarships', 'Equity-based awards'],
            note: 'Many scholarships are automatically assessed at application',
          },
        }, null, 2),
      }],
    })
  );

  srv.tool(
    'get_campus_info',
    'Get information about Murdoch University campus life, accommodation, and facilities',
    {},
    async () => ({
      content: [{
        type: 'text',
        text: JSON.stringify({
          campuses: ['Perth (South Street)', 'Rockingham', 'Mandurah', 'Singapore', 'Dubai'],
          mainCampus: {
            location: 'South Street, Perth, WA',
            size: '327 hectares',
            features: ['Modern labs & studios', 'Library', 'Cafes', 'Green open spaces', 'Farm & kangaroos'],
          },
          accommodation: {
            provider: 'UniRes',
            options: [
              { type: 'Shared apartment', weeklyRange: 'AUD $190–$250' },
              { type: 'Private studio', weeklyRange: 'AUD $290–$380' },
            ],
            included: 'WiFi, utilities, communal kitchens, laundry',
          },
          studentLife: {
            clubs: '30+ student clubs',
            recreation: 'Gym, pool, sports courts',
            support: 'Free wellbeing, career coaching, academic support, disability support',
            rating: '5-star student experience (QILT Survey)',
          },
        }, null, 2),
      }],
    })
  );

  return srv;
}

// ─── Express app ──────────────────────────────────────────────────────────────
const app = createMcpExpressApp({ host: '127.0.0.1' });

app.post('/mcp', async (req, res) => {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless — no session tracking
  });
  const srv = createServer();
  try {
    await srv.connect(transport);
    await transport.handleRequest(req, res, req.body);
    res.on('finish', () => srv.close().catch(() => {}));
  } catch (err) {
    console.error('MCP request error:', err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', server: 'murdoch-agent-mcp', version: '1.0.0' });
});

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Murdoch MCP server running at http://127.0.0.1:${PORT}/mcp`);
  console.log(`Health check: http://127.0.0.1:${PORT}/health`);
});
