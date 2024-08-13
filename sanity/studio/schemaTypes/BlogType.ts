import {defineField, defineType} from 'sanity'

export const BlogType = defineType({
  name: 'Blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'author',
      type: 'string',
    }),    
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})