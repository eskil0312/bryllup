import {RiFileInfoLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const aboutUsPage = defineType({
  name: 'aboutUsPage',
  title: 'Om oss side',
  type: 'document',
  fields: [
    defineField({
      name: 'contentList',
      title: 'Innhold',
      type: 'array',
      description: 'Her kan du legge inn innhold på Om oss siden',
      of: [{type: 'textImageBlock'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Om oss',
        media: RiFileInfoLine,
      }
    },
  },
})
