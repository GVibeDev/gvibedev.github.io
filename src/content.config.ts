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

const galleryItemSchema = z.object({
  src: z.string(),
  thumb: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

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
    pageReady: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    logo: z.string().optional(),
    socialImage: z.string().optional(),
    seoDescription: z.string().optional(),
    endcapImage: z.string().optional(),
    endcapAlt: z.string().optional(),
    gallery: z.array(galleryItemSchema).default([]),
  }),
});

export const collections = { projects };
