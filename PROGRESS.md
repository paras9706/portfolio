# Progress

## Done
- Project set up: Astro 7 + Tailwind 4, Git, pushed to GitHub.
- Hero section built (design "The Call"): evergreen headline, intro, two buttons, conversation card with 4 bubbles. "Latest project" bubble currently shows Nova.

- Step 16: projects content collection. `src/content.config.ts` (schema: title, summary, order, stack[], results[{label, before, after}], optional repo URL) and `src/content/projects/nova.md`. The Markdown body of nova.md is stored but not shown on the card yet.
- Step 17: project cards on the homepage in `<section id="projects">` below the hero, sorted by `order`. Card: title, summary, stack badges, results as before → after (after is big), "See the code on GitHub" link. Checked at desktop and phone width.

- Nova tag "Google Colab" replaced with "Design Automation" (Paras's wording).
- Case study pages: `src/pages/projects/[id].astro` makes one page per project file (Nova at /projects/nova/), showing results, tags and the Markdown body. Project bodies use `## Problem`, `## Approach`, `## Results` headings. Cards link to it with "Read the case study →".
- Shared layout `src/layouts/Base.astro` holds the head, fonts and top menu; every page uses it.

- Design review with the web-design-guidelines skill, and fixes: skip-to-content link, same focus outline on all links, Hindi words tagged `lang="hi"` (the `hi` field in the `call` list), sound bars shortened to under 5 seconds, balanced headlines, tabular numbers, no empty results box, link styles inside case study text.

## In progress
- Nothing.

## Next
- Step 18: experience section (timeline). Paras will supply the content.
- Step 19: skills, learning log, contact sections.
- Step 20: put the site online (choose free hosting first).

## Notes
- The "Experience" and "Contact" menu links are hidden in `src/layouts/Base.astro` until those sections exist. Add them back in Steps 18 and 19.
- Installed skill: `web-design-guidelines` (vercel-labs/agent-skills), project-level in `.claude/skills/`, pinned in `skills-lock.json`. Use it to review UI files, ideally before Step 20 (going online). Update with `npx skills update`.
- After adding or changing `src/content.config.ts`, or adding a new page file, restart `npm run dev` (Ctrl+C, then run it again). A server that was already running won't pick up the new file.
- The "Projects", "Experience" and "Contact" nav links point to #projects, #experience, #contact. Only build sections Paras has given content for.
