# Portfolio website: rules for Claude Code

## What this is
Paras Sharma's personal portfolio. Personal project, public repo: github.com/paras9706/portfolio.
Positioning: "I build AI systems and test them until they hold up" (agents, eval pipelines, automation). The site is built to grow with future projects.

## Stack
- Astro 7 (static), Tailwind 4 via @tailwindcss/vite. No tailwind.config file: theme tokens live in `src/styles/global.css` under `@theme`.
- One page so far: `src/pages/index.astro`. All hero text is in the `hero` and `call` constants at the top of that file.
- Projects are a content collection: one Markdown file per project in `src/content/projects/`, schema in `src/content.config.ts`. Adding a project must never require layout changes.

## Design system ("The Call")
- Colours: mist #F3F5F9 (page), ink #1B1F4B (text), marigold #F2A900 (accent, use sparingly), dusk #5B6384 (secondary text), white (cards).
- Fonts: Bricolage Grotesque (headings, `font-display`), Hanken Grotesk (body), Noto Sans Devanagari (Hindi fallback).
- Feel: confident, clean, technical but warm. Left-aligned. Results visible on cards, not hidden behind clicks.
- Avoid the generic AI look: no all-caps labels, no eyebrow labels above headings, no gradient washes, no numbered markers unless content is a real sequence, no fade-in on every section, no monospace for decoration.
- Accessibility: visible keyboard focus, respect prefers-reduced-motion, works on mobile.

## Hard rules
- Never invent facts, numbers, achievements, projects or links. Use only what is in the content files or what Paras tells you. If something is missing, ask.
- Never add anything about Paras's employer, its clients, internal tools, prompts or numbers. Employer work is described only in general terms, and only if Paras writes it.
- Never put API keys, tokens or passwords in code or commits.
- Ask before installing any new package.

## How to work with Paras
- He is new to coding. Teaching mode: explain in simple words what you will change and why BEFORE each change, and what changed AFTER.
- One small step at a time. Tell him what he should see in the browser (http://localhost:4321 while `npm run dev` runs).
- After each change run `npm run build` to confirm there are no errors.
- Commit after each finished step with a clear message. Do not push without asking.
- End every session by updating PROGRESS.md.
