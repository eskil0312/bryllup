import {RiMiniProgramLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const sleepoverPage = defineType({
  name: 'sleepoverPage',
  title: 'Opphold side',
  type: 'document',
  fields: [
    defineField({
      name: 'contentList',
      title: 'Innhold',
      type: 'array',
      description: 'Her kan du legge inn innhold på Opphold siden',
      of: [{type: 'textImageBlock'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Opphold',
        media: RiMiniProgramLine,
      }
    },
  },
})
