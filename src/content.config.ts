import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const about = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/about" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    permalink: z.url().optional(),
    canonicalUrl: z.url().optional(),
    oggraph: z.url().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    associated: z.union([
      z.string(),
      z.object({
        company: z.string(),
        link: z.url(),
      }),
    ]),
    type: z.string(),
    image: z.string().optional(),
    images: z.array(z.string()).optional(),
    link: z.url().or(z.string().optional()),
    bgColor: z.string(),
    github: z.string().optional(),
    tags: z.array(z.string()),
    status: z.enum(["completed", "ongoing"]),
    order: z.number().optional(),
  }),
  // .refine((data) => data.image || (data.images && data.images.length > 0)),
});

export const collections = {
  about,
  projects,
};
