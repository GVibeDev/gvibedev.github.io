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

const toolRequirementSchema = z.object({
  label: z.string(),
  detail: z.string(),
  scope: z.enum(['core', 'generation']).default('core'),
  required: z.boolean().default(true),
});

const setupCopySchema = z.object({
  heading: z.string().optional(),
  intro: z.string().optional(),
  coreLabel: z.string().optional(),
  coreTitle: z.string().optional(),
  secondaryLabel: z.string().optional(),
  secondaryTitle: z.string().optional(),
  publicPackage: z.string().optional(),
  platformLabel: z.string().optional(),
  secondaryRequiredLabel: z.string().optional(),
});

const installStepSchema = z.object({
  title: z.string(),
  body: z.string(),
  code: z.string().optional(),
});

const installGuideSchema = z.object({
  title: z.string(),
  eyebrow: z.string().optional(),
  intro: z.string().optional(),
  warningTitle: z.string().optional(),
  warning: z.string().optional(),
  footnote: z.string().optional(),
  steps: z.array(installStepSchema).default([]),
});

const editorialDocumentSchema = z.object({
  language: z.string(),
  languageCode: z.string(),
  label: z.string(),
  file: z.string(),
  pages: z.number().int().positive(),
  scope: z.string().optional(),
});

const editorialSectionSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string(),
  body: z.array(z.string()).default([]),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  imagePosition: z.string().optional(),
});

const editorialQuoteSchema = z.object({
  text: z.string(),
  attribution: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    kind: z.enum(['web-app', 'tool', 'world', 'game', 'experiment']),
    section: z.enum(['projects', 'web-apps', 'tools', 'worlds', 'biggitykot']),
    owner: z.enum(['gvibedev', 'biggitykot']),
    featured: z.boolean().default(false),
    sortOrder: z.number().int().nonnegative(),
    tags: z.array(z.string()).default([]),
    status: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    cardImage: z.string().optional(),
    cardImageAlt: z.string().optional(),
    cardImagePosition: z.string().optional(),
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

    // Tool-specific public metadata. Optional for all non-tool projects.
    toolCategory: z.string().optional(),
    platforms: z.array(z.string()).default([]),
    requirements: z.array(toolRequirementSchema).default([]),
    setupCopy: setupCopySchema.optional(),
    installGuide: installGuideSchema.optional(),

    // Editorial / world-specific metadata. Optional for non-world projects.
    subtitle: z.string().optional(),
    editorialCategory: z.string().optional(),
    editorialAvailability: z.string().optional(),
    accentColor: z.string().optional(),
    themes: z.array(z.string()).default([]),
    documents: z.array(editorialDocumentSchema).default([]),
    editorialSections: z.array(editorialSectionSchema).default([]),
    editorialQuote: editorialQuoteSchema.optional(),

    // Creator/build metadata used by the BiggityKot channel and future external-owner projects.
    creatorProfileUrl: z.string().url().optional(),
    launchPath: z.string().optional(),
    launchLabel: z.string().optional(),
    downloadPath: z.string().optional(),
    downloadLabel: z.string().optional(),
    buildSha256: z.string().optional(),
  }),
});

export const collections = { projects };
