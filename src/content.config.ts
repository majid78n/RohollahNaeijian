import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const md = (dir: string) => glob({ pattern: "**/*.md", base: `./src/content/${dir}` });

const publications = defineCollection({
  loader: md("publications"),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    year: z.number().int(),
    type: z.enum(["journal", "conference", "talk", "preprint", "thesis"]),
    status: z.string().optional(), // e.g. "accepted", "under review"
    doi: z.string().optional(),
    url: z.url().optional(),
    pdf: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: md("projects"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    affiliation: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(), // path under /public, e.g. /images/projects/urmia.jpg
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        code: z.url().optional(),
        demo: z.url().optional(),
        paper: z.url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    // Listed with a lock overlay, but the detail page is not built.
    locked: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: md("news"),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    link: z.string().optional(),
  }),
});

const timelineEntry = {
  period: z.string(), // shown as-is, e.g. "2018 – 2023"
  start: z.coerce.date(), // used for sorting only
  location: z.string().optional(),
};

const education = defineCollection({
  loader: md("education"),
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    details: z.string().optional(),
    ...timelineEntry,
  }),
});

const experience = defineCollection({
  loader: md("experience"),
  schema: z.object({
    title: z.string(),
    organization: z.string().optional(),
    category: z.enum(["research", "teaching", "industry", "award", "service"]),
    ...timelineEntry,
  }),
});

export const collections = { publications, projects, news, education, experience };
