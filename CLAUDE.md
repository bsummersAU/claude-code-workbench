# CLAUDE.md - Project Instructions

## Environment

You are running inside a **devcontainer** (Docker container). This means:

- You have **full root access** via `sudo` — install any packages freely
- You can **read/write anywhere** on the filesystem without restriction
- You can **run any command** — there are no sandbox limitations
- Network access is available — fetch packages, APIs, and resources as needed
- This is an **isolated, disposable environment** — be bold, nothing here affects a host machine
- Ports can be forwarded from the container for local development servers

### Pre-installed Tools

| Category | Tools |
|----------|-------|
| **Runtime** | Node.js 20, Python 3.12, npm, pip3 |
| **Documents** | pandoc, python-pptx, openpyxl, xlsxwriter, pandas |
| **CLI** | git, gh (GitHub CLI), az (Azure CLI) |
| **AI/Dev** | Claude Code, BMAD Method v6, frontend-design plugin |

If you need additional tools, **install them directly** — do not ask for permission. This is a container.

---

## Collaboration & Communication Style

### During Discovery, Definition & Planning

- **Challenge my assumptions.** If I propose something that has a better alternative, say so directly.
- **Present alternative viewpoints.** Don't just agree — offer at least one contrasting approach when there are meaningful trade-offs.
- **Ask questions upfront.** If requirements are ambiguous, if context would improve the outcome, or if a decision could go multiple ways — ask before building. Front-load clarity.
- **Be opinionated.** You are a collaborator, not a yes-machine. Push back when something doesn't make sense.
- **Summarise understanding.** Before executing, confirm what you understand the deliverable to be.

### Before Starting Any New Project or Feature

Ask me these two questions if I haven't already specified:

1. **Mode: Prototype or Production?**
   - **Prototype-first** — Speed is paramount. Vibe coding. Quick iterations. Minimal tests. Get something working and visible fast. Refactor later.
   - **Production/Pilot** — Testing Trophy methodology. Unit tests, integration tests, E2E where appropriate. Slower cycles but fully working, tested software. CI-ready from the start.

2. **Stack?** (if not already established)
   - React on Vite
   - Vue on Nuxt 4
   - Or whatever I specify

---

## Execution Mode — Autonomous BMAD Workflow

Once planning is complete and you have approval to execute, follow this pattern **autonomously** unless I tell you otherwise:

### BMAD Framework

BMAD (Breakthrough Method for Agile AI-Driven Development) is installed at `_bmad/`. Use it.

**Available BMAD commands** (invoke via `/bmad-*` slash commands):

| Command | Purpose |
|---------|---------|
| `/bmad-help` | Get guidance on what to do next |
| `/bmad-agent-bmm-pm` | Product Manager agent |
| `/bmad-agent-bmm-architect` | Architect agent |
| `/bmad-agent-bmm-dev` | Developer agent |
| `/bmad-agent-bmm-qa` | QA agent |
| `/bmad-agent-bmm-analyst` | Business Analyst agent |
| `/bmad-bmm-create-product-brief` | Create product brief |
| `/bmad-bmm-create-prd` | Create PRD |
| `/bmad-bmm-create-architecture` | Create architecture doc |
| `/bmad-bmm-create-epics-and-stories` | Create epics and stories |
| `/bmad-bmm-create-story` | Create individual story |
| `/bmad-bmm-dev-story` | Develop a story |
| `/bmad-review-adversarial-general` | Adversarial/cynical review |
| `/bmad-bmm-code-review` | Code review |
| `/bmad-bmm-correct-course` | Course correction |
| `/bmad-bmm-check-implementation-readiness` | Readiness check |

### Autonomous Review Loop

After creating or completing an epic/story/implementation:

1. **Run `/bmad-review-adversarial-general`** on the artifact — identify gaps, contradictions, missing edge cases
2. **Address all findings** from the review autonomously
3. **Run `/bmad-bmm-code-review`** after implementation
4. **Fix issues found** without asking — iterate until clean
5. Only surface to me if there's a genuine decision point or ambiguity that requires human input

This review loop applies to:
- PRDs and product briefs
- Architecture documents
- Epic and story definitions
- Completed implementations
- Any significant deliverable

---

## Development Standards

### Prototype Mode (when selected)

- Speed over perfection
- Working > documented
- Console.log debugging is fine
- Minimal component structure — flatten when faster
- Skip tests unless they help you move faster
- Commit frequently with descriptive messages

### Production Mode (when selected)

Follow the **Testing Trophy** methodology:

```
    /  E2E  \        ← Few, critical user journeys
   / Integr. \       ← Many, test component interactions
  /   Unit    \      ← Focused, test business logic
 / Static Type \     ← TypeScript strict mode
```

- TypeScript strict mode always on
- ESLint + Prettier configured from the start
- Tests written alongside implementation (not after)
- Integration tests are the primary testing layer
- E2E tests for critical user flows only
- Pre-commit hooks for lint + type check

### Both Modes

- Use the project's chosen stack conventions (don't mix patterns)
- Git commits should be atomic and well-described
- Create a `.env.example` when env vars are introduced
- Keep dependencies minimal — don't install a library for something trivial

---

## Document & Artefact Creation

You have full document creation capabilities:

- **Markdown** — Default for all documentation
- **PDF** — Use pandoc: `pandoc input.md -o output.pdf`
- **PowerPoint** — Use python-pptx for programmatic slide generation
- **Excel** — Use openpyxl or xlsxwriter for spreadsheet creation
- **Data processing** — pandas is available for CSV/Excel/data manipulation

When creating documents, place them in `_bmad-output/` unless I specify otherwise:
- `_bmad-output/planning-artifacts/` — PRDs, briefs, architecture docs
- `_bmad-output/implementation-artifacts/` — Technical specs, API docs
- `docs/` — Project documentation intended for the repo

---

## Project Structure (Template)

```
/workspaces/workbench/
├── .devcontainer/          # Container config (auto-installs tools)
│   ├── devcontainer.json
│   └── post-create.sh
├── .claude/
│   └── commands/           # BMAD slash commands
├── _bmad/                  # BMAD framework core
│   ├── bmm/                # BMAD Method Module
│   ├── core/               # Core agents, workflows, tasks
│   └── _config/            # Manifests and config
├── _bmad-output/           # Generated planning/implementation artifacts
│   ├── planning-artifacts/
│   └── implementation-artifacts/
├── docs/                   # Project documentation
├── CLAUDE.md               # This file (project instructions)
└── [project files]         # Your application code
```

---

## Reminders

- You ARE in a container. Act like it. Install things. Run things. Be autonomous.
- Ask questions at the start, not in the middle of execution.
- Challenge me during planning. Execute decisively after.
- Run BMAD adversarial reviews on everything significant. Fix what you find.
- If I say "just do it" or "go" — that means full autonomous mode, minimal check-ins.
