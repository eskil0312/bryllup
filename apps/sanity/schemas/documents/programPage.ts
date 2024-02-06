import {RiMiniProgramLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const programPage = defineType({
  name: 'programPage',
  title: 'Kjøreplan side',
  type: 'document',
  fields: [
    defineField({
      name: 'contentList',
      title: 'Innhold',
      type: 'array',
      description: 'Her kan du legge inn innhold på Kjøreplan siden',
      of: [{type: 'textImageBlock'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Kjøreplan',
        media: RiMiniProgramLine,
      }
    },
  },
})
