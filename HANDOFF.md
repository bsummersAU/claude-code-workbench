# Project Handoff — Murdoch University AI Pilot

**Last updated:** 7 March 2026
**Status:** Everything committed and pushed to `main`. Clean working tree (except `pitch-dist/` which is now gitignored).

---

## What we built

Two things, both in `/Users/bsummers/claude-code-workbench/`:

### 1. Pitch deck — `pitch/`

A Slidev presentation built with the `@insight-services-apac/slidev-theme-insight` theme. It pitches an AI student agent to Murdoch University.

**To run:**
```bash
cd pitch
npm run dev        # serves at localhost:3030
npm run export     # export to PDF (run with --per-slide flag for clean output)
```

**Key files:**
- `pitch/murdoch-pitch.md` — the entire slide deck (all slides in one file)
- `pitch/style.css` — global CSS overrides (loaded automatically by Slidev). All theme component overrides live here with `!important` due to Vue scoped CSS specificity.
- `pitch/public/chat-example.png` — screenshot used on slide 9 (right column image)
- `pitch/package.json` — Slidev + theme dependency

**Slide overview:**
- Slides 1–8: Cover, problem, opportunity, market data
- Slide 9: Live demo concept (chat screenshot on the right col)
- Slide 13: Four-column feature cards (had equal-height + badge layout fixes applied)
- Slide 14: Architecture diagram (pills use `color="#dddddd"` for readability on dark bg)
- Slide 16: "Why Now?" slide
- Slide 21: Partnership / commitment slide (SplitPanel with `left-accent="rgba(255,255,255,0.75)"`)
- Slide 24: Appendix A — references table with hyperlinks to Everspring and Carnegie studies

**Known CSS quirks:**
- Vue scoped styles on theme components use `[data-v-xxx]` selectors, so all overrides in `style.css` need `!important` to win specificity
- The four-cols layout fix uses `.insight-cols.insight-cols--4 { flex: 0 0 auto }` (double class beats single class — no `!important` needed here)
- PDF export: use `--per-slide` flag to avoid black vertical bars from viewport/canvas mismatch

---

### 2. Murdoch Agent app — `murdoch-agent/`

A React + Vite + Tailwind web app that simulates what the AI student guide would look like on Murdoch's website. It calls Claude via a local Express backend.

**To run:**
```bash
# Terminal 1 — backend
cd murdoch-agent
node server.js        # runs on port 3001

# Terminal 2 — frontend
cd murdoch-agent
npm run dev           # runs on port 5173 (or similar)
```

**Requires:** A `.env` file in `murdoch-agent/` with:
```
ANTHROPIC_API_KEY=your_key_here
```

**Architecture:**
```
murdoch-agent/
├── server.js                    # Express backend — SSE streaming to Claude API
├── prompts/system.md            # Full system prompt for the Murdoch student guide persona
├── src/
│   ├── App.jsx                  # Root coordinator — thin, just wires up state + routes views
│   ├── constants.js             # BRAND, BRAND_DARK, HERO_IMAGE
│   ├── hooks/useChat.js         # All streaming state & SSE parsing logic
│   ├── data/
│   │   ├── siteData.js          # TRUST_ITEMS, FOOTER_COLS, QUICK_LINKS, EXPLORE_TILES
│   │   └── responses.js        # Old canned responses (dead code — kept as reference)
│   └── components/
│       ├── Nav.jsx              # Top nav bar
│       ├── HeroSection.jsx      # Landing hero with input bar
│       ├── TrustStrip.jsx       # "Top 2% globally" trust badges
│       ├── ExploreTiles.jsx     # Quick-link topic tiles
│       ├── CTABanner.jsx        # Call to action banner
│       ├── Acknowledgement.jsx  # Country of origin acknowledgement
│       ├── Footer.jsx           # Site footer
│       ├── ChatView.jsx         # Full chat interface (replaces landing when chat starts)
│       ├── CompactHeroBar.jsx   # Compact header shown in chat view
│       ├── InputBar.jsx         # Reusable text input + send button
│       ├── MessageBubble.jsx    # Individual chat message
│       ├── TypingIndicator.jsx  # Animated dots while Claude responds
│       └── MurdochLogo.jsx      # SVG logo component
```

**How the chat works:**
1. User types → `useChat.send()` → POST to `/api/chat` with full message history
2. Backend streams SSE chunks from Claude API (`claude-sonnet-4-6`, `max_tokens: 1024`)
3. Frontend accumulates chunks into `streamText` on the last message, then finalises to `text` on `[DONE]`
4. `App.jsx` toggles between landing view (`started = false`) and `ChatView` (`started = true`)

**Tailwind brand tokens** (defined in `tailwind.config.js`):
- `brand` → Murdoch purple `#582873`
- `brand-dark` → darker purple
- Use these instead of raw hex values

---

## What's left / potential next steps

- **The pitch and the app are both demos** — neither is deployed anywhere. Both run locally only.
- The app has no auth, no analytics, no error boundary — it's prototype mode.
- `responses.js` (`src/data/responses.js`) contains the old canned-response logic — it's dead code. Safe to delete if you want to clean it up.
- The system prompt in `prompts/system.md` covers key courses, fees, entry requirements and scholarships. It could be expanded with more detail if needed.
- If you want to export the slide deck cleanly, use:
  ```bash
  cd pitch && npx slidev export --per-slide --with-clicks false
  ```

---

## Repo state

- Branch: `main`
- All work committed and pushed
- Latest commit: `fc875fd` — Add `*-dist/` to gitignore
- No pending changes
