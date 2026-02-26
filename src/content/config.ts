import { z, defineCollection } from 'astro:content';

const charactersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    player: z.string(),
    race: z.string(),
    class: z.string(),
    status: z.enum(['Alive', 'Dead', 'Missing']),
    stats: z.object({
      str: z.number(),
      dex: z.number(),
      con: z.number(),
      int: z.number(),
      wis: z.number(),
      cha: z.number(),
    }),
    image: z.string().optional(),
  }),
});

export const collections = {
    'characters': charactersCollection
}