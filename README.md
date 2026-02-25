# Claude Code Workbench

A devcontainer template for instant AI-powered development environments with Claude Code, GitHub Copilot, and comprehensive CLI tooling — ready to go in minutes.

## What You Get

Open this template in a codespace or any devcontainer-compatible IDE and you'll have a fully configured environment with:

### AI Assistants
- **Claude Code** — Anthropic's CLI agent for autonomous software engineering
- **GitHub Copilot** — AI pair programming in VS Code
- **BMAD Method v6** — Agile AI-driven development framework with 10 specialized agents and 25 workflows
- **Frontend Design Plugin** — UI/UX best practices baked into Claude Code

### Development Runtimes
- **Node.js 20** — JavaScript/TypeScript runtime
- **Python 3.12** — With pip and venv

### Document Creation Pipeline
- **pandoc** — Convert between Markdown, PDF, DOCX, HTML, and more
- **python-pptx** — Programmatic PowerPoint generation
- **openpyxl / xlsxwriter** — Excel spreadsheet creation and manipulation
- **pandas** — Data processing and analysis

### CLI Tools
- **git** — Version control
- **gh** — GitHub CLI for PRs, issues, releases
- **az** — Azure CLI

## Quick Start

### GitHub Codespaces
Click **Use this template** > **Create a new repository**, then open it in a Codespace.

### VS Code Dev Containers
1. Clone the repo
2. Open in VS Code
3. When prompted, click **Reopen in Container** (or run `Dev Containers: Reopen in Container` from the command palette)

### CLI
```bash
devcontainer up --workspace-folder .
```

Everything installs automatically on first launch via `post-create.sh`. No manual setup needed.

## What's Included

```
.devcontainer/
  devcontainer.json       # Container definition with Node.js 20 + Python 3.12
  post-create.sh          # Auto-installs Claude Code, BMAD, pandoc, doc tools
CLAUDE.md                 # Claude Code instructions template (customise per project)
.gitignore                # Pre-configured for Node, Python, BMAD artifacts
```

## CLAUDE.md — Your AI Collaboration Contract

The included `CLAUDE.md` template configures Claude Code to:

- **Know it's in a container** — installs packages, runs commands, and operates autonomously without hesitation
- **Collaborate during planning** — challenges assumptions, presents alternatives, asks clarifying questions upfront
- **Ask your preferred mode** before starting work:
  - **Prototype** — speed-first, vibe coding, fast iterations
  - **Production** — Testing Trophy methodology, CI-ready, fully tested
- **Execute autonomously** using BMAD workflows — creates artifacts, runs adversarial reviews, fixes issues without hand-holding
- **Create documents** — PDFs, PowerPoints, Excel files, not just code

Customise `CLAUDE.md` per project to add domain-specific instructions, architectural decisions, and project context.

## BMAD Method

[BMAD](https://github.com/bmad-code-org/BMAD-METHOD) (Breakthrough Method for Agile AI-Driven Development) provides structured workflows for the full development lifecycle:

| Workflow | What it does |
|----------|-------------|
| Product Brief | Define the product vision |
| PRD | Detailed product requirements |
| Architecture | Technical architecture design |
| Epics & Stories | Break work into deliverables |
| Dev Story | Implement a story end-to-end |
| Adversarial Review | Cynical review to find gaps |
| Code Review | Automated code quality checks |
| Course Correction | Pivot when things go off track |

All available as `/bmad-*` slash commands inside Claude Code.

## Customising for Your Project

1. **Edit `CLAUDE.md`** — Add project-specific context, architectural decisions, API details, conventions
2. **Choose your stack** — Claude will ask whether you want React/Vite or Vue/Nuxt 4 (or specify your own)
3. **Pick your mode** — Prototype (fast) or Production (tested)
4. **Start building** — Claude Code handles the rest

## License

MIT
