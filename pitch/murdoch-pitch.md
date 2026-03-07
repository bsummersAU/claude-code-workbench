---
theme: "@insight-services-apac/slidev-theme-insight"
title: AI-Powered Prospective Student Experience
titleTemplate: '%s — Murdoch University'
colorSchema: light
canvasWidth: 980
fonts:
  sans: Poppins
  weights: '400,600,700'
layout: cover
background: gradient
---

# AI-Powered Prospective Student Experience

Turning website friction into guided conversations

::meta::

Prepared for Murdoch University &nbsp;|&nbsp; March 2026

---
layout: default
variant: 2
---

# Today's agenda

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.75rem">

<ContentCard title="01 — The Challenge" color="#582873">
What the research tells us about the prospective student journey
</ContentCard>

<ContentCard title="02 — The Solution" color="#D40E8C">
A working AI agent built for Murdoch, ready to demo
</ContentCard>

<ContentCard title="03 — From PoC to Production" color="#D30C55">
Federating knowledge and building a platform
</ContentCard>

<ContentCard title="04 — The Strategic Case" color="#5990F0">
Why this matters commercially and architecturally
</ContentCard>

<ContentCard title="05 — Why Now" color="#582873">
The window for first-mover advantage
</ContentCard>

<ContentCard title="06 — The Roadmap" color="#D40E8C">
A phased engagement from pilot to scale
</ContentCard>

</div>

---
layout: section
number: "01"
background: gradient
---

# The Challenge

---
layout: default
variant: 2
---

# Your website is working against your enrolment funnel

<div style="display:flex;flex-direction:column;gap:0.5rem;margin-top:0.5rem">

<LabeledRow label="Study sub-site" sublabel="Marketing-owned" :gradient="['#5990F0','#4EC7EA']">
  <ContentCard style="width:100%" title="Conversion-focused, brand-consistent" color="#5990F0" badge="MARKETING">
    Clear structure and on-brand messaging — but covers only part of what prospective students need to know.
  </ContentCard>
</LabeledRow>

<LabeledRow label="Explore sub-site" sublabel="School / Faculty-owned" :gradient="['#B01C87','#582873']">
  <ContentCard style="width:100%" title="Deep content, inconsistent experience" color="#B01C87" badge="EACH SCHOOL">
    Every faculty maintains it differently. No unified voice, no student-facing logic. Students don't know they've crossed into a different environment — they just feel the drop.
  </ContentCard>
</LabeledRow>

<LabeledRow label="The result" sublabel="Students bear the cost" :gradient="['#D30C55','#B01C87']">
  <ContentCard style="width:100%" title="Navigation that maps to org structure — not how students think" color="#D30C55" badge="THE PROBLEM">
    Every unanswered question erodes confidence in Murdoch. That erosion is structural, not incidental.
  </ContentCard>
</LabeledRow>

</div>


---
layout: cards-vertical
variant: 2
---

::header::

# Three cohorts, one problem

::card1::

<ContentCard title="School Leavers" badge="COHORT 01" color="#5990F0" :pills="['ATAR queries', 'Scholarships', 'First year']">

Comparing 3–5 institutions under real time pressure. Want instant answers. When the site doesn't respond immediately, they move on — and the next university that answers them wins.

</ContentCard>

::card2::

<ContentCard title="Mature-Age Students" badge="COHORT 02" color="#D40E8C" :pills="['Belonging', 'Eligibility', 'RPL']">

Returning after a career or life break. Carry specific anxieties about belonging and whether prior experience counts. The site treats them the same as school leavers — no signal Murdoch understands their situation.

</ContentCard>

::card3::

<ContentCard title="Growth Learners" badge="COHORT 03" color="#582873" :pills="['Credit recognition', 'Pathways', 'Visas']">

International students and career changers navigating complex pathway information scattered across disconnected pages. High cognitive load, high-stakes decision.

</ContentCard>


---
layout: default
variant: 5
---

# This cohort has already moved on from your website

<div style="display:flex;gap:0.6rem;margin-top:1rem">

<StatCard value="2 in 3" label="prospective students prefer AI-powered search over Google when researching universities" :gradient="['#D30C55','#B01C87']" />

<StatCard value="4% → 23%" label="high school seniors using AI to research universities (2023 → 2025) — six-fold growth in two years" :gradient="['#5990F0','#582873']" />

</div>

<div style="margin-top:0.75rem">

<CalloutBar label="IMPLICATION" color="#582873">
  Education is the <strong>second-highest category</strong> for traffic referred by AI tools. This cohort is not waiting for universities to catch up. <strong>The question is whether Murdoch's answers are the ones being surfaced.</strong>
</CalloutBar>

</div>

<div style="margin-top:0.5rem;font-size:0.6rem;color:var(--text-muted);font-style:italic">Everspring, 2025 — 450,000+ student search sessions &nbsp;|&nbsp; Carnegie College Choice Trends Report, 2025</div>

---
layout: section
number: "02"
background: gradient
---

# The Solution

---
layout: default
variant: 4
---

# What a guided conversation changes

<TransformationFlow
  hub-label="AI"
  :hub-colors="['#582873','#D40E8C','#D30C55']"
  :hub-size="5.5"
  :rows="[
    { left: 'Questions go unanswered', right: 'Instant, accurate answers', color: '#D30C55', leftSub: 'Information scattered across two sub-sites', rightSub: 'Courses, fees, entry requirements & pathways' },
    { left: 'Same response to everyone', right: 'Cohort-aware conversations', color: '#582873', leftSub: 'No signal Murdoch understands their context', rightSub: 'School leaver vs mature-age vs international' },
    { left: 'Students bounce to competitors', right: 'Intent captured, conversion started', color: '#D40E8C', leftSub: 'First to answer wins the consideration set', rightSub: 'Application links, tour bookings, advisor handoff', rightBadge: 'ACTION' },
  ]"
/>

---
layout: two-cols
variant: 2
---

::header::

# What we've built

::left::

<p style="font-size:0.78rem;line-height:1.5;margin:0 0 0.5rem">A working AI agent — built on Claude Sonnet, trained on Murdoch-specific content — ready to answer prospective student questions in real time.</p>

<div style="display:flex;flex-direction:column;gap:0.2rem">

<CalloutBar label="REAL-TIME" color="#582873">Streams responses across courses, pathways, fees, entry requirements, and campus life</CalloutBar>

<CalloutBar label="ADAPTIVE" color="#D40E8C">Responds differently to school leavers vs mature-age students — cohort-aware</CalloutBar>

<CalloutBar label="CONTEXTUAL" color="#5990F0">Maintains conversation context — students don't repeat themselves</CalloutBar>

<CalloutBar label="ACTIONABLE" color="#B01C87">Surfaces next steps: application links, tour bookings, advisor handoff</CalloutBar>

<CalloutBar label="ON-BRAND" color="#D30C55">Deployed within the Murdoch brand system — looks and sounds like Murdoch</CalloutBar>

</div>

::right::

<div style="height:100%;border-radius:0.5rem;overflow:hidden;display:flex;align-items:flex-start;justify-content:center">
  <img src="/chat-example.png" style="width:100%;height:100%;object-fit:cover;object-position:top;border-radius:0.5rem" />
</div>

---
layout: cover
background: gradient
---

# Live demonstration

Walking through a live session — showing how the agent handles the queries your prospective students are actually asking.

::meta::

School leaver · Mature-age · Course discovery · Entry requirements

---
layout: section
number: "03"
background: gradient
---

# From PoC to production

---
layout: two-cols
variant: 2
---

::header::

# A knowledge platform, not a chatbot

The prototype draws from Murdoch's website content. A production platform would connect to authoritative source systems — live data, governed access, no manual updates required.

::left::

<table style="width:100%;border-collapse:collapse;font-size:0.72rem;margin-top:0.5rem">
  <thead>
    <tr>
      <th style="text-align:left;padding:0.35rem 0;padding-right:2rem;font-weight:700;border-bottom:2px solid #582873;white-space:nowrap">Source System</th>
      <th style="text-align:left;padding:0.35rem 0;font-weight:700;border-bottom:2px solid #582873">What It Enables</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="padding:0.3rem 0;padding-right:2rem;white-space:nowrap;font-weight:600;vertical-align:top">Course Management System</td><td style="padding:0.3rem 0;vertical-align:top">Live catalogue, units, prerequisites, fees</td></tr>
    <tr><td style="padding:0.3rem 0;padding-right:2rem;white-space:nowrap;font-weight:600;vertical-align:top">Admissions & Enrolment</td><td style="padding:0.3rem 0;vertical-align:top">Entry requirements, ATAR cutoffs, application status</td></tr>
    <tr><td style="padding:0.3rem 0;padding-right:2rem;white-space:nowrap;font-weight:600;vertical-align:top">Scholarships & Financial Aid</td><td style="padding:0.3rem 0;vertical-align:top">Eligibility criteria, deadlines, award amounts</td></tr>
    <tr><td style="padding:0.3rem 0;padding-right:2rem;white-space:nowrap;font-weight:600;vertical-align:top">RPL & Credit Transfer</td><td style="padding:0.3rem 0;vertical-align:top">Credit recognition pathways and assessment rules</td></tr>
    <tr><td style="padding:0.3rem 0;padding-right:2rem;white-space:nowrap;font-weight:600;vertical-align:top">International Admissions</td><td style="padding:0.3rem 0;vertical-align:top">Visa pathways, English requirements, CRICOS</td></tr>
    <tr><td style="padding:0.3rem 0;padding-right:2rem;white-space:nowrap;font-weight:600;vertical-align:top">Campus & Events</td><td style="padding:0.3rem 0;vertical-align:top">Open days, tours, orientation, accommodation</td></tr>
    <tr><td style="padding:0.3rem 0;padding-right:2rem;white-space:nowrap;font-weight:600;vertical-align:top">CRM / Enquiry System</td><td style="padding:0.3rem 0;vertical-align:top">Enquiry history, lead tracking, advisor workflows</td></tr>
  </tbody>
</table>

::right::

<div class="arch-diagram" style="display:flex;flex-direction:column;height:100%;justify-content:center;gap:0">

  <ContentCard title="Data Sources" badge="LAYER 1" color="#5990F0" :pills="['Website', 'Course system', 'Admissions', 'Scholarships', 'CRM']">
    Authoritative content and student data
  </ContentCard>

  <div style="display:flex;justify-content:center;padding:0.15rem 0">
    <div style="width:2px;height:1rem;background:linear-gradient(to bottom,#5990F0,#D40E8C);border-radius:1px"></div>
  </div>

  <ContentCard title="Knowledge Platform" badge="LAYER 2" color="#D40E8C" :pills="['Ingest', 'Embed', 'Retrieve', 'Govern']">
    Semantic search, grounding and governance
  </ContentCard>

  <div style="display:flex;justify-content:center;padding:0.15rem 0">
    <div style="width:2px;height:1rem;background:linear-gradient(to bottom,#D40E8C,#582873);border-radius:1px"></div>
  </div>

  <ContentCard title="Agent Interface" badge="LAYER 3" color="#582873" :pills="['Converse', 'Adapt', 'Escalate', 'Analyse']">
    Cohort-aware AI — action-oriented responses
  </ContentCard>

</div>

---
layout: four-cols
variant: 2
---

::header::

# Production-grade from day one

::col1::

<ContentCard title="Conversation Design" badge="01" color="#5990F0" :pills="['Cohort flows', 'Escalation', 'WCAG 2.1 AA']">

Formalised cohort flows, escalation triggers, brand voice governance, and full accessibility compliance.

</ContentCard>

::col2::

<ContentCard title="Integration Layer" badge="02" color="#D40E8C" :pills="['CRM', 'Applications', 'Bookings']">

CRM write-back for lead capture, application system connection, live advisor handoff with full context passed.

</ContentCard>

::col3::

<ContentCard title="Quality & Governance" badge="03" color="#582873" :pills="['Citations', 'PII', 'Audit trail']">

Grounded responses with source citations, hallucination detection, Privacy Act compliance, sensitive topic escalation.

</ContentCard>

::col4::

<ContentCard title="Analytics Engine" badge="04" color="#D30C55" :pills="['Dashboard', 'Gaps', 'Attribution']">

Real-time dashboard, content gap detection, funnel attribution (chat → application → enrolment), A/B testing.

</ContentCard>

---
layout: section
number: "04"
background: gradient
---

# The Strategic Case

---
layout: default
variant: 2
---

# One capability, two strategic lenses

<SplitPanel
  left-label="MARKETING"
  left-title="The Marketing & Conversion Case"
  left-description="Marketing investment drives traffic to a site that loses prospects before they convert. The AI agent is a conversion layer — it captures intent at peak engagement and turns it into action. Every question asked is also a signal about what students don't understand. That feedback loop is currently invisible."
  right-label="ARCHITECTURE"
  right-title="The Architecture & Platform Case"
  right-description="This is not a bolt-on chatbot. The architecture is built for institutional scale — model-agnostic, separated knowledge layer, integration-ready, and Murdoch-owned. No vendor lock-in. Content teams update without engineering involvement."
  left-accent="#D30C55"
  right-accent="#582873"
  :connector-gradient="['#D30C55','#582873']"
>
  <template #left>
    <div style="display:flex;flex-direction:column;gap:0.3rem;margin-top:0.5rem">
      <Pill label="Conversion layer" color="#D30C55" />
      <Pill label="Intent at peak engagement" color="#D30C55" />
      <Pill label="Visible feedback loop" color="#D30C55" />
      <Pill label="First to answer wins" color="#D30C55" />
    </div>
  </template>
  <template #right>
    <div style="display:flex;flex-direction:column;gap:0.3rem;margin-top:0.5rem">
      <Pill label="Model-agnostic API layer" color="#dddddd" />
      <Pill label="Separated knowledge layer" color="#dddddd" />
      <Pill label="CRM & systems integration" color="#dddddd" />
      <Pill label="No vendor lock-in" color="#dddddd" />
    </div>
  </template>
</SplitPanel>

---
layout: section
number: "05"
background: gradient
---

# Why Now?

---
layout: cards-horizontal
variant: 2
---

::header::

# The window is open — briefly

::card1::

<ContentCard title="Students Already Expect It" color="#5990F0" badge="DEMAND">

2 in 3 prospective students prefer AI-powered search over Google (Everspring, 2025). Six-fold growth in two years. This cohort is already asking AI about Murdoch.

</ContentCard>

::card2::

<ContentCard title="Technology Is Ready" color="#D40E8C" badge="TIMING">

Twelve months ago this was genuinely difficult. The models, infrastructure, and integration patterns have matured. The risk of early adoption has dropped substantially.

</ContentCard>

::card3::

<ContentCard title="Competitors Are Moving" color="#582873" badge="MARKET">

Leading Australian universities are actively piloting AI student experience tools. The question is whether Murdoch leads that shift in WA or responds to it.

</ContentCard>

::card4::

<ContentCard title="Research Is Done" color="#D30C55" badge="READINESS">

UX audit, user interviews, journey mapping — already complete. The path from insight to implementation is unusually short.

</ContentCard>

---
layout: section
number: "06"
background: gradient
---

# The Roadmap

---
layout: swimlane
periods: ['W1–2', 'W3–4', 'W5–6', 'W7–8', 'W9–12', 'W13–16', 'W17–20', 'Scale']
lanes:
  - name: Knowledge
    color: '#D30C55'
    items:
      - label: Website & course content
        start: 0
        end: 4
      - label: Admissions, scholarships & RPL
        start: 4
        end: 7
      - label: Live data feeds
        start: 7
        end: 8
  - name: Agent
    color: '#582873'
    items:
      - label: Deploy to staging
        start: 0
        end: 4
      - label: Multi-cohort flows
        start: 4
        end: 7
      - label: Full journey coverage
        start: 7
        end: 8
  - name: Integration
    color: '#D40E8C'
    items:
      - label: Advisor handoff
        start: 0
        end: 4
      - label: CRM & lead capture
        start: 4
        end: 7
      - label: Bookings & applications
        start: 7
        end: 8
  - name: Operations
    color: '#5990F0'
    items:
      - label: Analytics dashboard
        start: 0
        end: 4
      - label: Staff training
        start: 4
        end: 7
      - label: Continuous improvement
        start: 7
        end: 8
milestones:
  - label: Pilot Live
    at: 4
    color: '#D30C55'
  - label: Full Coverage
    at: 7
    color: '#582873'
---

# Phased engagement roadmap

---
layout: two-cols
variant: 2
---

::header::

# From pilot to platform

::left::

<VerticalTimeline :steps="[
  { timeframe: 'Phase 1 — Weeks 1–8', title: 'Prove', description: 'School leaver cohort. Course discovery & entry requirements. Knowledge base built from Murdoch website content. Analytics dashboard baseline.', color: '#D30C55' },
  { timeframe: 'Phase 2 — Weeks 9–20', title: 'Federate', description: 'All cohorts. Connect admissions, scholarships & RPL data sources. CRM integration & lead capture. Multi-cohort conversation flows.', color: '#582873' },
  { timeframe: 'Phase 3 — Ongoing', title: 'Scale', description: 'Full prospective journey coverage. Authenticated access for returning applicants. Booking & application tracking integrations.', color: '#D40E8C' },
]" />

::right::

<ContentCard title="Shared Success Criteria" badge="AGREED UPFRONT" color="#582873">

- Engagement rate: sessions, session length, return rate
- Conversion indicators: application page visits post-chat
- Advisor deflection: % of queries resolved without escalation
- Content gap identification: questions the agent cannot answer
- Student satisfaction score

</ContentCard>

---
layout: default
variant: 2
---

# A clear commitment to a defined scope

<SplitPanel
  left-label="FROM US"
  left-title="What we bring"
  left-description="AI product expertise, a working prototype ready to demonstrate today, and an architecture Murdoch owns and controls. Not a proposal — a product."
  right-label="FROM YOU"
  right-title="What we're asking for"
  right-description="A commitment to Phase 1 — eight weeks, defined scope, success criteria agreed upfront. Not a multi-year transformation. Eight weeks to prove the concept works with Murdoch's students, on Murdoch's website, with Murdoch's data."
  left-accent="rgba(255,255,255,0.75)"
  right-accent="#D30C55"
  :connector-gradient="['#582873','#D30C55']"
>
  <template #left>
    <div style="display:flex;flex-direction:column;gap:0.3rem;margin-top:0.5rem">
      <Pill label="AI product expertise" color="#9A6BC4" />
      <Pill label="Institutional-scale track record" color="#9A6BC4" />
      <Pill label="Working prototype — today" color="#9A6BC4" />
      <Pill label="Evidence-led from day one" color="#9A6BC4" />
      <Pill label="Murdoch-owned architecture" color="#9A6BC4" />
    </div>
  </template>
  <template #right>
    <div style="display:flex;flex-direction:column;gap:0.3rem;margin-top:0.5rem">
      <Pill label="Eight weeks" color="#D30C55" />
      <Pill label="Course discovery scope" color="#D30C55" />
      <Pill label="Success criteria upfront" color="#D30C55" />
      <Pill label="Course & admissions data access" color="#D30C55" />
    </div>
  </template>
</SplitPanel>

---
layout: quote
variant: 5
---

Your students are arriving curious and leaving confused. We've built an AI agent that turns that friction into a conversation — and we're ready to prove it works.

**The question isn't whether this becomes standard. It's whether Murdoch leads.**

---
layout: end
background: gradient
---

# Let's Talk

We're ready to walk through Phase 1 scoping, answer technical questions, and agree on next steps today.

---
layout: default
variant: 2
---

# Research evidence summary

<Badge label="APPENDIX A" variant="subtle" color="#582873" />

<table style="width:100%;border-collapse:collapse;font-size:0.58rem;margin-top:0.5rem">
  <thead>
    <tr>
      <th style="text-align:left;padding:0.3rem 0.5rem;background:#1a1520;color:white;width:18%">Source</th>
      <th style="text-align:left;padding:0.3rem 0.5rem;background:#1a1520;color:white">Key Finding</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f5f5f5"><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0">UX Audit</td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">Navigation maps to internal org structure, not student mental models. Core information consistently difficult to locate.</td></tr>
    <tr><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0">UX Audit</td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">Study sub-site (Marketing) and Explore sub-site (Schools) operate as separate environments — inconsistent layouts, terminology, depth. Students hit a jarring drop in coherence when crossing between them.</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0">UX Audit</td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">Mobile experience falls significantly below expectation for a primarily mobile-first cohort.</td></tr>
    <tr><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0">School Leaver Research</td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">Students compare 3–5 institutions simultaneously. Whoever answers their question first, clearly, wins.</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0">School Leaver Research</td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">Interviewees expressed clear preference for immediate, conversational answers. One participant named AI as their preferred channel — consistent with broader industry research.</td></tr>
    <tr><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0"><a href="https://www.everspringpartners.com/insights/reports-and-briefs/ai-trends-enrollment-impact#form" target="_blank" style="color:#582873;text-decoration:underline">Everspring (2025)</a></td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">2 in 3 prospective students prefer AI-powered search over Google. Education is 2nd highest category for AI-referred traffic. (450,000+ sessions analysed)</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0"><a href="https://www.carnegiehighered.com/wp-content/uploads/2025/08/Carnegie_Summer-Research-Series-AI-Use-College-Search-2025.pdf" target="_blank" style="color:#582873;text-decoration:underline">Carnegie (2025)</a></td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">High school seniors using AI to research universities: 4% (2023) → 23% (2025). Six-fold growth in two years.</td></tr>
    <tr><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0">Mature-Age Research</td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">Site does not signal that Murdoch understands returning students' specific circumstances or anxieties.</td></tr>
    <tr style="background:#f5f5f5"><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top;border-bottom:1px solid #e0e0e0">Growth Learner Research</td><td style="padding:0.28rem 0.5rem;border-bottom:1px solid #e0e0e0">Pathway information is fragmented across disconnected pages. High cognitive load, high-stakes decision.</td></tr>
    <tr><td style="padding:0.28rem 0.5rem;font-weight:600;vertical-align:top">Journey Map</td><td style="padding:0.28rem 0.5rem">Multiple drop-off points between awareness and enquiry — each a recoverable conversion currently being lost.</td></tr>
  </tbody>
</table>

---
layout: three-cols
variant: 2
---

::header::

# Architecture overview

<Badge label="APPENDIX B" variant="subtle" color="#582873" />

::col1::

<ContentCard title="Data Sources" badge="LAYER 1" color="#5990F0" :pills="['Course Mgmt', 'Admissions', 'Scholarships', 'CRM']">

- Course Management System
- Admissions / Student Management
- Scholarship Database
- RPL / Credit Transfer
- International Office Systems
- Events & Campus Services
- CRM (Salesforce / Dynamics)

</ContentCard>

::col2::

<ContentCard title="Knowledge Platform" badge="LAYER 2" color="#D40E8C" :pills="['Ingest', 'Embed', 'Retrieve', 'Govern']">

- Content ingestion & chunking
- Semantic embedding & retrieval
- Governance & confidence thresholds
- Audit trail & logging
- Content team updates *(no engineering required)*

</ContentCard>

::col3::

<ContentCard title="Agent Interface" badge="LAYER 3" color="#582873" :pills="['Converse', 'Adapt', 'Escalate', 'Analyse']">

- Conversation engine
- Cohort detection & adaptation
- Response streaming
- Escalation logic
- Analytics & reporting

<div style="margin-top:0.75rem;font-size:0.68rem;color:var(--text-muted)">Integration: CRM write-back · Advisor handoff · Booking systems · Application tracking</div>

</ContentCard>
