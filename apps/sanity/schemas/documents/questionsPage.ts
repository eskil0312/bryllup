import {RiMiniProgramLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const questionsPage = defineType({
  name: 'questionsPage',
  title: 'Q&A side',
  type: 'document',
  fields: [
    defineField({
      name: 'contentList',
      title: 'Innhold',
      type: 'array',
      description: 'Her kan du legge inn innhold på Q&A siden',
      of: [{type: 'textImageBlock'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Q&A',
        media: RiMiniProgramLine,
      }
    },
  },
})
