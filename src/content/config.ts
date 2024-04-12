import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		heroImage: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { projects };
