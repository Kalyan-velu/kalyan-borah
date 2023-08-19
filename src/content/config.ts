import {defineCollection,z} from 'astro:content'

const about=defineCollection({
  type:'content',
  schema:z.object({
    title:z.string(),
    description:z.string().optional(),
    permalink:z.string().url().optional(),
    canonicalUrl:z.string().url().optional(),
    oggraph:z.string().url().optional()
  })
})



export const collections={
  about
}