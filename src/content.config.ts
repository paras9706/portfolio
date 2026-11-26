// The rules every project file must follow.
// Add a project = add one Markdown file in src/content/projects/. No layout changes needed.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Lower number shows first on the page.
    order: z.number(),
    stack: z.array(z.string()),
    results: z.array(
      z.object({
        label: z.string(),
        before: z.string(),
        after: z.string(),
      }),
    ),
    repo: z.url().optional(),
  }),
});

export const collections = { projects };
