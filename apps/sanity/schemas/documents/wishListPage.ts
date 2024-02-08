import {RiMiniProgramLine} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const wishListPage = defineType({
  name: 'wishListPage',
  title: 'Ønseliste side',
  type: 'document',
  fields: [
    defineField({
      name: 'contentList',
      title: 'Innhold',
      type: 'array',
      description: 'Her kan du legge inn innhold på Ønskeliste siden',
      of: [{type: 'textImageBlock'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Ønskeliste',
        media: RiMiniProgramLine,
      }
    },
  },
})
