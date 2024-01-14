import {defineField} from 'sanity'
import {definePortableTextField} from './portableText'

export const textImageBlock = defineField({
  name: 'textImageBlock',
  title: 'Bilde boks med fritekst',
  type: 'object',
  fields: [
    definePortableTextField({title: 'Innhold', name: 'content'}),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Bilde',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
  ],
})
