import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		heroImage: z.string().optional(),
		secondImage: z.string().optional(),
		title_second_section: z.string().optional(),
		content_second_section: z.string().optional(),
		title_third_section: z.string().optional(),
		content_third_section: z.array(z.string()).optional(),
		tecnologies: z.array(z.string()).optional(),
	}),
});

export const collections = { projects };
