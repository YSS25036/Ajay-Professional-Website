import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z
		.object({
			title: z.string(),
			description: z.string().optional(),
			pubDate: z.coerce.date().optional(),
			date: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			thumbnail: z.string().optional(),
			coverImage: z.string().optional(),
		})
		.transform((data) => ({
			title: data.title,
			description: data.description,
			pubDate: data.pubDate ?? data.date ?? new Date(),
			updatedDate: data.updatedDate,
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

const resourcesArticles = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		sourceUrl: z.string().url(),
		source: z.enum(['LinkedIn', 'X', 'Article', 'HBR', 'Medium', 'Other']),
		author: z.string().optional(),
		pubDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const resourcesLeaders = defineCollection({
	type: 'content',
	schema: z.object({
		name: z.string(),
		focus: z.string(),
		linkedin: z.string().url().optional(),
		twitter: z.string().url().optional(),
		website: z.string().url().optional(),
		order: z.number().optional(),
	}),
});

const resourcesTools = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		url: z.string().url(),
		category: z.string().optional(),
		description: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = {
	blog,
	projects,
	resourcesArticles,
	resourcesLeaders,
	resourcesTools,
};
