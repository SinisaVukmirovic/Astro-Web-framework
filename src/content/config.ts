import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        date: z.string(),
        image: z.string(),
        title: z.string()
    })
})

export const collection = {
    // key name has to match folder name (posts-posts)
    posts: postsCollection
}