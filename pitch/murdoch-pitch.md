---
theme: "@insight-services-apac/slidev-theme-insight"
title: AI-Powered Prospective Student Experience
titleTemplate: '%s — Murdoch University'
colorSchema: light
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

# Today's Agenda

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.75rem">

<ContentCard title="01 — The Challenge" color="#582873">
What the research tells us about the prospective student journey
</ContentCard>

<ContentCard title="02 — The Solution" color="#D40E8C">
A working AI agent built for Murdoch, ready to demo
</ContentCard>

<ContentCard title="03 — From PoC to Production" color="#582873">
Federating knowledge and building a platform
</ContentCard>

<ContentCard title="04 — The Strategic Case" color="#D40E8C">
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

# Your Website Is Working Against Your Enrolment Funnel

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-top:0.5rem">

<ContentCard title="The split students feel but can't see" color="#582873">
The site is divided between two sub-sites with different owners and different agendas — students bear the cost of that division.
</ContentCard>

<ContentCard title="Invisible seams, real confusion" color="#D30C55">
Students cross between these environments without knowing it — hitting inconsistent layouts, different terminology, content never written for them.
</ContentCard>

<ContentCard title="Study sub-site — Marketing-owned" color="#5990F0">
Conversion-focused and brand-consistent — but covers only part of the picture.
</ContentCard>

<ContentCard title="The structural result" color="#D40E8C">
Navigation that maps to Murdoch's internal ownership structure — not how a prospective student thinks about their choices.
</ContentCard>

<ContentCard title="Explore sub-site — School/Faculty-owned" color="#B01C87">
Deep course content — but every school maintains it differently. No unified voice or student-facing logic.
</ContentCard>

<ContentCard title="Every unanswered question" color="#D30C55">
Erodes confidence in Murdoch. That erosion is structural, not incidental.
</ContentCard>

</div>

<div style="margin-top:0.5rem;font-size:0.65rem;color:var(--text-muted);font-style:italic">[ Insert: side-by-side Study vs Explore page — annotated with ownership labels ]</div>

---
layout: cards-vertical
variant: 2
---

::header::

# Three Cohorts, One Problem

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

<div style="font-size:0.65rem;color:var(--text-muted);font-style:italic;margin-top:0.5rem">[ Insert: journey map showing drop-off points between awareness and enquiry stages ]</div>

---
layout: two-cols
variant: 4
---

::header::

# This Cohort Has Already Moved On From Your Website

::left::

<div style="display:flex;flex-direction:column;gap:1rem">

<div style="background:var(--surface);border-radius:0.5rem;padding:1.25rem;border-top:4px solid #D30C55">
  <div style="font-size:3.5rem;font-weight:700;color:#D30C55;line-height:1">2 in 3</div>
  <div style="font-size:0.82rem;margin:0.4rem 0;line-height:1.4">prospective students prefer AI-powered search over Google when researching universities</div>
  <div style="font-size:0.65rem;color:var(--text-muted);font-style:italic">Everspring, 2025 — 450,000+ student search sessions</div>
</div>

<div style="background:var(--surface);border-radius:0.5rem;padding:1.25rem;border-top:4px solid #5990F0">
  <div style="font-size:3rem;font-weight:700;color:#5990F0;line-height:1">4% → 23%</div>
  <div style="font-size:0.82rem;margin:0.4rem 0;line-height:1.4">high school seniors using AI to research universities (2023 → 2025)</div>
  <div style="font-size:0.65rem;color:var(--text-muted);font-style:italic">Carnegie College Choice Trends Report, 2025 — six-fold growth in two years</div>
</div>

</div>

::right::

<ContentCard title="What This Means for Murdoch" color="#582873" badge="IMPLICATION">

Education is the **second-highest category** for traffic referred by AI tools — behind only online services.

This cohort is not waiting for universities to catch up. They are already asking AI what Murdoch offers, how to get in, and how it compares.

**The question is whether Murdoch's answers are the ones being surfaced.**

</ContentCard>

---
layout: section
number: "02"
background: gradient
---

# The Solution

---
layout: two-cols
variant: 2
---

::header::

# What We've Built

::left::

A working AI agent — built on Claude Sonnet, trained on Murdoch-specific content — that answers the questions prospective students are actually asking, at the moment they need answers.

<div style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.4rem">

<div style="display:flex;gap:0.5rem;align-items:flex-start;font-size:0.78rem">
  <Pill label="Real-time" color="#582873" />
  <span>Streams responses across courses, pathways, fees, entry requirements, and campus life</span>
</div>
<div style="display:flex;gap:0.5rem;align-items:flex-start;font-size:0.78rem">
  <Pill label="Adaptive" color="#D40E8C" />
  <span>Responds differently to school leavers vs mature-age students — cohort-aware</span>
</div>
<div style="display:flex;gap:0.5rem;align-items:flex-start;font-size:0.78rem">
  <Pill label="Contextual" color="#5990F0" />
  <span>Maintains conversation context — students don't repeat themselves</span>
</div>
<div style="display:flex;gap:0.5rem;align-items:flex-start;font-size:0.78rem">
  <Pill label="Actionable" color="#B01C87" />
  <span>Surfaces next steps: application links, tour bookings, advisor handoff</span>
</div>
<div style="display:flex;gap:0.5rem;align-items:flex-start;font-size:0.78rem">
  <Pill label="On-brand" color="#582873" />
  <span>Deployed within the Murdoch brand system — looks and sounds like Murdoch</span>
</div>

</div>

::right::

<div style="height:100%;background:var(--surface);border:1.5px dashed var(--border);border-radius:0.5rem;display:flex;align-items:center;justify-content:center;text-align:center;padding:1rem;color:var(--text-muted);font-size:0.72rem;font-style:italic">
  [ Murdoch AI agent prototype — chat interface screenshot ]<br><br>
  <span style="font-size:0.6rem">Show a realistic exchange: student asking about entry requirements or course options with agent response visible</span>
</div>

---
layout: cover
background: gradient
---

# Live Demonstration

Walking through a live session — showing how the agent handles the queries your prospective students are actually asking.

::meta::

School leaver · Mature-age · Course discovery · Entry requirements

---
layout: section
number: "03"
background: gradient
---

# From PoC to Production

---
layout: two-cols
variant: 2
---

::header::

# A Knowledge Platform, Not a Chatbot

The prototype draws from a curated knowledge base. The production platform connects to authoritative source systems — live data, governed access, no manual updates required.

::left::

| Source System | What It Enables |
|---|---|
| Course Management | Live catalogue, units, prerequisites, fees |
| Admissions / SMS | Entry requirements, ATAR cutoffs, application status |
| Scholarship Database | Eligibility criteria, deadlines, award amounts |
| RPL / Credit Transfer | Prior learning rules, credit mapping |
| International Office | Visa pathways, English requirements, CRICOS |
| Events & Campus | Open days, tours, orientation, accommodation |
| CRM (Salesforce) | Interaction history, lead status, advisor assignment |

::right::

<div style="height:100%;background:var(--surface);border:1.5px dashed var(--border);border-radius:0.5rem;display:flex;align-items:center;justify-content:center;text-align:center;padding:1rem;color:var(--text-muted);font-size:0.72rem;font-style:italic">
  [ Architecture diagram ]<br>Data sources → Knowledge Platform → Agent<br><br>
  <span style="font-size:0.6rem">Three-layer diagram. No vendor logos. Murdoch brand colours.</span>
</div>

---
layout: four-cols
variant: 2
---

::header::

# Production-Grade From Day One

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
layout: two-cols
variant: 2
---

::header::

# One Capability, Two Strategic Lenses

::left::

<ContentCard title="The Marketing & Conversion Case" badge="MARKETING" color="#D30C55">

Murdoch's marketing investment drives traffic to a website that loses prospects before they convert. Every dollar spent on brand, search, and social is partially wasted at the point of information-seeking.

The AI agent is a **conversion layer** — it captures intent at peak engagement and converts it into action.

When a prospective student gets a clear, confident answer at 10pm on a Sunday while filling out a comparison spreadsheet, that matters. **The competitor who answers first wins the consideration set.**

Every question asked is a signal about what students don't understand, where the narrative breaks down, what content is missing. That feedback loop is currently invisible. The agent makes it explicit.

</ContentCard>

::right::

<ContentCard title="The Architecture & Platform Case" badge="ARCHITECTURE" color="#582873">

This is not a bolt-on chatbot. The architecture is built for institutional scale:

- **Model-agnostic API layer** — updated as capabilities improve without rebuilding
- **Separated knowledge layer** — content teams update without engineering involvement
- **Integration-ready** — CRM, application systems, and advisor queues via standard APIs
- **Audit trail built in** — conversation logging for compliance and performance review
- **Flexible deployment** — embedded widget, standalone page, or mobile-first interface
- **Murdoch-owned architecture** — no vendor lock-in

</ContentCard>

---
layout: section
number: "05"
background: gradient
---

# Why Now

---
layout: cards-horizontal
variant: 2
---

::header::

# The Window Is Open — Briefly

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
layout: default
variant: 2
---

# Phased Engagement Roadmap

<table style="width:100%;border-collapse:collapse;font-size:0.72rem;margin-top:0.5rem">
  <thead>
    <tr>
      <th style="width:11%;background:#212121;color:white;padding:0.4rem 0.5rem;text-align:left;font-size:0.68rem">Lane</th>
      <th style="background:#D30C55;color:white;padding:0.4rem 0.5rem;text-align:left;font-size:0.68rem">Phase 1 — Prove &nbsp;<span style="font-weight:400;opacity:0.85">Weeks 1–8</span></th>
      <th style="background:#582873;color:white;padding:0.4rem 0.5rem;text-align:left;font-size:0.68rem">Phase 2 — Federate &nbsp;<span style="font-weight:400;opacity:0.85">Weeks 9–20</span></th>
      <th style="background:#D40E8C;color:white;padding:0.4rem 0.5rem;text-align:left;font-size:0.68rem">Phase 3 — Scale &nbsp;<span style="font-weight:400;opacity:0.85">Ongoing</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-weight:600;font-size:0.68rem;background:#f5f5f5;padding:0.4rem 0.5rem">Knowledge</td>
      <td style="background:#fde8ed;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Build knowledge base from Murdoch website & course content</td>
      <td style="background:#ede8f5;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Connect admissions, scholarships & RPL data sources</td>
      <td style="background:#fde8f7;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Live data feeds & continuous updates</td>
    </tr>
    <tr>
      <td style="font-weight:600;font-size:0.68rem;background:#f5f5f5;padding:0.4rem 0.5rem">Agent</td>
      <td style="background:#fde8ed;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Deploy production agent to staging environment</td>
      <td style="background:#ede8f5;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Multi-cohort conversation flows & personalisation</td>
      <td style="background:#fde8f7;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Full journey coverage & authenticated access</td>
    </tr>
    <tr>
      <td style="font-weight:600;font-size:0.68rem;background:#f5f5f5;padding:0.4rem 0.5rem">Integration</td>
      <td style="background:#fde8ed;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Advisor handoff protocol for complex queries</td>
      <td style="background:#ede8f5;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">CRM integration & lead capture pipeline</td>
      <td style="background:#fde8f7;padding:0.4rem 0.5rem;border-bottom:1px solid #e0e0e0">Booking systems & application tracking</td>
    </tr>
    <tr>
      <td style="font-weight:600;font-size:0.68rem;background:#f5f5f5;padding:0.4rem 0.5rem">Operations</td>
      <td style="background:#fde8ed;padding:0.4rem 0.5rem">Analytics dashboard & baseline metrics</td>
      <td style="background:#ede8f5;padding:0.4rem 0.5rem">Staff training & escalation workflows</td>
      <td style="background:#fde8f7;padding:0.4rem 0.5rem">Continuous improvement & A/B testing loop</td>
    </tr>
  </tbody>
</table>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;margin-top:0.4rem;text-align:center;font-size:0.65rem;font-weight:600;color:var(--text-muted)">
  <div>▲ Pilot Live</div>
  <div>▲ Full Cohort Coverage</div>
  <div>▲ Continuous Optimisation</div>
</div>

---
layout: three-cols
variant: 2
---

::header::

# From Pilot to Platform

::col1::

<ContentCard title="Phase 1 — Prove" badge="8 WEEKS" color="#D30C55" :pills="['School leavers', 'Course discovery', 'Entry requirements']">

**Focus:** Highest-friction section of the prospective student journey. Website and course system as knowledge sources.

**Deliverables:**
- Production agent deployed to staging
- Knowledge base from Murdoch content
- Analytics dashboard: volume, topics, escalations
- Advisor handoff protocol

</ContentCard>

::col2::

<ContentCard title="Phase 2 — Federate" badge="10–12 WEEKS" color="#582873" :pills="['All cohorts', 'CRM', 'Admissions & RPL']">

**Focus:** Connect admissions, scholarships, and RPL data sources. Expand to mature-age and international cohorts.

**Deliverables:**
- Federated knowledge platform (4 source systems)
- CRM integration & lead capture pipeline
- Multi-cohort conversation coverage
- Staff training & escalation workflows

</ContentCard>

::col3::

<ContentCard title="Phase 3 — Scale" badge="ONGOING" color="#D40E8C" :pills="['Full journey', 'Bookings', 'Multi-language']">

**Focus:** Full prospective journey coverage. Authenticated access for returning applicants. Booking integrations.

**Deliverables:**
- Full production platform
- Application tracking integration
- Campus booking integration
- Optimisation loop from live conversation data

</ContentCard>

---
layout: two-cols
variant: 2
---

::header::

# A Clear Commitment to a Defined Scope

::left::

<ContentCard title="What We Bring" badge="FROM US" color="#582873" :pills="['Expertise', 'Prototype', 'Evidence']">

- AI product expertise and a track record of deployment at institutional scale
- Established integration patterns for university systems (admissions, CRM, LMS)
- A working prototype — not a proposal, a product ready to demonstrate today
- Research evidence that makes this evidence-led from day one
- An architecture that Murdoch owns and controls

</ContentCard>

::right::

<ContentCard title="What We're Asking For" badge="FROM YOU" color="#D30C55" :pills="['Phase 1', '8 weeks', 'Defined scope']">

**A commitment to Phase 1:**

- Eight weeks
- Defined scope: course discovery & entry requirements, school leaver cohort
- Shared success criteria agreed upfront: engagement rates, conversion indicators, advisor deflection
- Access to course content and admissions data for knowledge base construction

*This is not a multi-year transformation program. It is eight weeks to prove the concept works — with Murdoch's students, on Murdoch's website, with Murdoch's data.*

</ContentCard>

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

# Research Evidence Summary

<Badge label="APPENDIX A" variant="subtle" color="#582873" />

<table style="width:100%;border-collapse:collapse;font-size:0.7rem;margin-top:0.6rem">
  <thead>
    <tr>
      <th style="background:#212121;color:white;padding:0.4rem 0.6rem;text-align:left;width:22%">Source</th>
      <th style="background:#212121;color:white;padding:0.4rem 0.6rem;text-align:left">Key Finding</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">UX Audit</td><td style="padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">Navigation maps to internal org structure, not student mental models. Core information consistently difficult to locate.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">UX Audit</td><td style="padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">Study sub-site (Marketing) and Explore sub-site (Schools) operate as separate environments — inconsistent layouts, terminology, depth. Students hit a jarring drop in coherence when crossing between them.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">UX Audit</td><td style="padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">Mobile experience falls significantly below expectation for a primarily mobile-first cohort.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">School Leaver Research</td><td style="padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">Students compare 3–5 institutions simultaneously. Whoever answers their question first, clearly, wins.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">School Leaver Research</td><td style="padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">Interviewees expressed clear preference for immediate, conversational answers. One participant named AI as their preferred channel over live chat and email — consistent with broader industry research.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">Everspring (2025)</td><td style="padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">2 in 3 prospective students prefer AI-powered search over Google. Education is 2nd highest category for AI-referred traffic. (450,000+ search sessions analysed)</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">Carnegie (2025)</td><td style="padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">High school seniors using AI to research universities: 4% (2023) → 23% (2025). Six-fold growth in two years.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">Mature-Age Research</td><td style="padding:0.35rem 0.6rem;border-bottom:1px solid #e0e0e0">Site does not signal that Murdoch understands returning students' specific circumstances or anxieties.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">Growth Learner Research</td><td style="padding:0.35rem 0.6rem;background:#f5f5f5;border-bottom:1px solid #e0e0e0">Pathway information is fragmented across disconnected pages. High cognitive load, high-stakes decision.</td></tr>
    <tr><td style="font-weight:600;padding:0.35rem 0.6rem">Journey Map</td><td style="padding:0.35rem 0.6rem">Multiple drop-off points between awareness and enquiry — each a recoverable conversion currently being lost.</td></tr>
  </tbody>
</table>

---
layout: three-cols
variant: 2
---

::header::

# Architecture Overview

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
