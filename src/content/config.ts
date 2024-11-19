// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const portfolioCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    order: z.number().optional(),
    path: z.string(),
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    description_es: z.string(),
    thumbnail: z.string(),
    images: z.array(z.string()),
    url: z.string(),
    urlText: z.string(),
    tags: z.array(z.string()),
    skills: z.array(z.string()),
    github: z.string(),
  }),
});

const labCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    order: z.number().optional(),
    path: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    skills: z.array(z.string()),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  portfolio: portfolioCollection,
  lab: labCollection,
};
