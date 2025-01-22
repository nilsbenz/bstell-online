import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    group: z.string(),
    published: z.boolean(),
  }),
});

export const collections = {
  docs,
};
