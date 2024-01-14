import {RiHome4Line} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'
import {definePortableTextField} from '../blocks/portableText'

export const frontPage = defineType({
  name: 'frontPage',
  title: 'Forside',
  type: 'document',
  fields: [
    defineField({
      name: 'heroBlock',
      title: 'Hero(bilde på toppen)',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Tittel',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'subTitle',
          type: 'string',
          title: 'Undertittel',
        }),
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

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introBlock',
      title: 'Intro',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Tittel',
          validation: (Rule) => Rule.required(),
        }),
        definePortableTextField({name: 'body', title: 'Innhold'}),
      ],

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contentList',
      title: 'Innhold',
      type: 'array',
      description: 'Her kan du legge inn innhold på forsiden',
      of: [{type: 'textImageBlock'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Forside',
        media: RiHome4Line,
      }
    },
  },
})
