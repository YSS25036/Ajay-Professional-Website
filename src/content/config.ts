import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z
		.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date().optional(),
			date: z.coerce.date().optional(),
			thumbnail: z.string().optional(),
			coverImage: z.string().optional(),
		})
		.transform((data) => ({
			title: data.title,
			description: data.description,
			pubDate: data.pubDate ?? data.date ?? new Date(),
			thumbnail: data.thumbnail ?? data.coverImage,
			coverImage: data.coverImage ?? data.thumbnail,
		})),
});

const projects = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		order: z.number().optional(),
	}),
});

export const collections = {
	blog,
	projects,
};
