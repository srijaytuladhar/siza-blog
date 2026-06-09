import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    category: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
