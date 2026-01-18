import { defineCollection, z } from "astro:content";

const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    permalink: z.string().url().optional(),
    canonicalUrl: z.string().url().optional(),
    oggraph: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    associated: z.union([
      z.string(),
      z.object({
        company: z.string(),
        link: z.string().url(),
      }),
    ]),
    type: z.string(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    link: z.string().url().or(z.string().optional()),
    bgColor: z.string(),
    github: z.string().optional(),
    tags: z.array(z.string()),
    status: z.enum(["completed", "ongoing"]),
    order: z.number().optional(),
  }),
});

export const collections = {
  about,
  projects,
};
