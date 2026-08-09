import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linksSchema = z
  .object({
    repositoryUrl: z.string().url().optional(),
    launchUrl: z.string().url().optional(),
    releaseUrl: z.string().url().optional(),
  })
  .default({});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    kind: z.enum(['web-app', 'tool', 'world', 'game', 'experiment']),
    section: z.enum(['web-apps', 'tools', 'worlds', 'biggitykot']),
    owner: z.enum(['gvibedev', 'biggitykot']),
    featured: z.boolean().default(false),
    sortOrder: z.number().int().nonnegative(),
    tags: z.array(z.string()).default([]),
    status: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    links: linksSchema,
  }),
});

export const collections = { projects };
