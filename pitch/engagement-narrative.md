# Murdoch University — AI-Powered Prospective Student Experience
## Engagement Narrative

**Audience:** Neil Cullingford, Director Marketing & Communications; Russell Bailey, Strategist & Enterprise Architect
**Prepared by:** [Your Name / Agency]
**Date:** February 2026

---

## Elevator Pitch

> Murdoch's prospective students are arriving curious and leaving confused. Your own research proves it. We've built an AI agent that turns that friction into a conversation — and we're here to show you exactly how it works.

---

## The Problem
### Your website is working against your enrolment funnel

The research tells an unambiguous story. Across three distinct prospective student cohorts — school leavers, mature-age students, and growth learners (post-grads) — the same pattern emerges: **students arrive at Murdoch's website with genuine intent to enrol, and they leave frustrated.**

### What the research found

**Navigation complexity creates immediate drop-off**
The UX audit identified that prospective students consistently fail to locate core information — entry requirements, course pathways, fees, and contact options — without significant effort. Information is buried beneath category structures that map to Murdoch's internal organisation, not to how students think about their decision. The result: students abandon the site before they have what they need to take the next step.

**The journey is exhausting, not inspiring**
The journey map traces a prospective student from initial awareness through to enrolment consideration. At nearly every major touchpoint, the research surfaces friction: unclear calls to action, dead-end navigation paths, content written for institutional audiences rather than anxious eighteen-year-olds or career changers returning to study for the first time in a decade.

**Each cohort hits the same wall — differently**

- **High school leavers (Ray persona):** Under time pressure, emotionally uncertain, comparing multiple institutions simultaneously. They want immediate answers to specific questions ("Can I get in with my ATAR?", "What does the first year look like?"). When the website doesn't answer them instantly, they move on. Tellingly, when asked how they'd prefer to get help, school leavers ranked their preference in this order: **AI agent first, live chat second, email last.** They're already expecting the technology.

- **Mature-age students:** Returning to study after a career or life break. They carry specific anxieties about belonging, eligibility, and whether their previous experience counts. When one iterviewee was asked to find out how to find out about recognition of prior learning, she defaulted immediately to a contact form. They need reassurance as much as information. The current site treats them the same as school leavers — generic content, generic pathways, no signal that Murdoch understands their specific situation.

- **Growth learners (international and career changers):** Need to understand complex pathway information — credit recognition, English requirements, bridging options — that is scattered across disconnected pages. High cognitive load, high stakes decision, low confidence that the site has what they need.

**The gap between need and answer is costing enrolments**
Every unanswered question is a moment where a prospective student recalibrates their confidence in Murdoch. Multiply that across thousands of site visits and the enrolment impact is not theoretical — it's structural.

---

## The Solution
### A conversational AI agent built for the Murdoch prospective student journey

We've designed and built a working prototype of a Murdoch-branded AI agent that sits at the front of the prospective student experience. It answers the questions students are actually asking, in the language they use, at the moment they need answers.

**What it does:**
- Responds conversationally to natural language questions about courses, entry requirements, fees, pathways, campus life, and the application process
- Adapts to the student's apparent cohort — the questions a mature-age student asks differ from a school leaver's, and the agent responds accordingly
- Surfaces clear next steps — whether that's a direct link to an application, a prompt to book a campus tour, or a handoff to a human advisor for complex queries
- Maintains context across a conversation — students don't have to repeat themselves or re-navigate every time they ask a follow-up question
- Sits within the Murdoch brand system — it looks like Murdoch, it speaks like Murdoch

**What we've already built:**
The prototype running today uses the Claude claude-sonnet-4-6 model with a Murdoch-specific knowledge base covering courses, pathways, fees, and student support. It streams responses in real time, handles multi-turn conversations, and is deployed as a web application ready for integration.

This is not a concept. It's a working demo you can use right now.

---

## Why This Matters
### The commercial and strategic case

**For Neil — Marketing & Communications:**

Murdoch's marketing investment drives traffic to a website that loses prospects before conversion. Every dollar spent on brand campaigns, search, and social is partially wasted at the point of information-seeking. The AI agent is a conversion layer — it captures intent at the moment of highest engagement and converts it into action.

More directly: when a prospective student gets a clear, confident, personalised answer at 10pm on a Sunday because they're filling out a comparison spreadsheet, that matters. The competitor who answers that question — even imperfectly — wins the consideration set.

The agent also generates data. Every question asked is a signal: what do students not understand about Murdoch's offer? Where does the narrative break down? What content is missing? That feedback loop is currently invisible. The agent makes it explicit.

**For Russell — Strategy & Enterprise Architecture:**

This is not a bolt-on chatbot. The architecture is designed for institutional scale:
- Model layer is API-based and model-agnostic — can be updated or swapped as capabilities improve
- Knowledge base is separate from the inference layer, allowing content teams to update information without engineering involvement
- Integration-ready: the agent can connect to CRM (Salesforce/Dynamics), application systems, and live advisor queues via standard APIs
- Audit trail and conversation logging built in for compliance and performance review
- Deployment model is flexible — can run as an embedded widget, a standalone page, or a mobile-first interface

The technology decision made today is not a commitment to a specific vendor relationship. It's a commitment to an architecture that Murdoch owns and controls.

---

## Why Now
### The window for first-mover advantage is open — briefly

**Prospective students already expect this.**
High school leavers in the research explicitly named AI agents as their first-choice support channel. That expectation is being set by their experience with AI in every other domain of their life. Universities that meet that expectation first earn a positioning advantage that compounds over time. Universities that don't cede that positioning to competitors who do.

**The technology is production-ready.**
Twelve months ago, deploying a reliable, hallucination-resistant, brand-safe AI agent at institutional scale was genuinely difficult. The model capabilities, the infrastructure, and the integration patterns have matured to the point where this is now a solved problem for teams who know what they're doing. The risk of early adoption has dropped substantially.

**The competitive landscape is moving.**
Leading Australian universities are piloting or deploying AI-assisted student experience tools. The question is not whether this capability will become standard — it will. The question is whether Murdoch leads that shift in WA or responds to it.

**The research is done.**
Usually the case for a project like this requires a discovery phase just to prove the problem exists. That work is already complete. The UX audit, the user interviews, the journey mapping — this is months of research that points to the same conclusion. The path from insight to implementation is unusually short.

---

## What We're Proposing
### A phased engagement starting with a production-ready pilot

**Phase 1 — Pilot (8 weeks)**
Deploy a production-quality AI agent on a defined section of the prospective student journey — recommended entry point: the course discovery and entry requirements flow, where the research shows the highest concentration of friction.

Deliverables:
- Production agent deployed to a staging environment
- Knowledge base built from Murdoch's existing course and admissions content
- Analytics dashboard: question volume, topics, escalations, satisfaction signals
- Integration with existing live chat / advisor booking (if applicable)
- Handoff protocol for complex queries requiring human advisor

Success criteria agreed upfront. Measurable against engagement rates, conversion indicators, and advisor deflection.

**Phase 2 — Expansion (following pilot review)**
Based on pilot data, extend the agent to cover additional cohort journeys (mature-age, international, course search), integrate with CRM for personalisation, and connect application system for end-to-end journey support.

**What we bring:**
- Deep expertise in AI product development and deployment
- Established integration patterns for university systems
- A working prototype that proves we can deliver
- The research to make it evidence-led from day one

**What we're asking for today:**
A commitment to Phase 1. A defined scope, a clear timeline, and a shared definition of success. We're not asking Murdoch to commit to a multi-year transformation program. We're asking for eight weeks to prove it works — with your students, on your website, with your data.

---

## Appendix: Research Evidence Summary

The following findings are drawn from the commissioned research deliverables:

| Source | Key Finding |
|--------|------------|
| UX Audit | Navigation architecture maps to internal org structure, not student mental models. Core information (entry requirements, fees, pathways) consistently difficult to locate. |
| UX Audit | Mobile experience falls significantly below expectation for a primarily mobile-first student cohort. |
| High School Leavers Interviews | Students compare 3–5 institutions simultaneously. Whoever answers their question first, clearly, wins. |
| High School Leavers Interviews | Preferred support channel ranking: **AI agent → live chat → email.** Already expecting the technology. |
| Mature Age Students Interviews | Navigation complexity disproportionately impacts this cohort. Site does not signal that Murdoch understands their specific circumstances or anxieties. |
| Growth Learners Interviews | Pathway information (credit recognition, English requirements, bridging) is fragmented. High cognitive load for a high-stakes decision. |
| Journey Map | Multiple identified drop-off points between awareness and enquiry stages. Each represents a recoverable conversion that is currently being lost. |
| Journey Map | Recommendations explicitly include conversational/AI interfaces as a mechanism for reducing friction in the information-seeking phase. |

---

*This document is prepared for discussion purposes. All prototype demonstrations are available on request.*
