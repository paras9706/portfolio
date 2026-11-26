# Progress

## Done
- Project set up: Astro 7 + Tailwind 4, Git, pushed to GitHub.
- Hero section built (design "The Call"): evergreen headline, intro, two buttons, conversation card with 4 bubbles. "Latest project" bubble currently shows Nova.

## In progress
- Step 16: projects content collection. Files should exist: `src/content.config.ts` (schema: title, summary, order, stack[], results[{label, before, after}], optional repo URL) and `src/content/projects/nova.md`. CHECK these exist and are valid before continuing.

## Next
- Step 17: show project cards on the homepage in a `<section id="projects">` below the hero, so the "See projects" button scrolls to it. Read projects from the collection, sorted by `order`. Each card shows: title, summary, stack as small badges, each result with before and after both visible (after is the emphasis), and a text link to the repo if present. One wide card per project, white on the mist background.
- Step 18: experience section (timeline). Paras will supply the content.
- Step 19: skills, learning log, contact sections.
- Step 20: put the site online (choose free hosting first).

## Notes
- The "Projects", "Experience" and "Contact" nav links point to #projects, #experience, #contact. Only build sections Paras has given content for.
