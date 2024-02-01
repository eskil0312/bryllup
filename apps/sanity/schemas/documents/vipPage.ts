import {RiVipCrown2Fill} from 'react-icons/ri'
import {defineField, defineType} from 'sanity'

export const vipPage = defineType({
  name: 'vipPage',
  title: 'Vip',
  type: 'document',
  fields: [
    defineField({
      name: 'vipContent',
      title: 'Viktige personer',
      type: 'array',
      description: 'Her kan du legge inn viktige personer til bryllupet',
      of: [{type: 'profileBlock'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Vip',
        media: RiVipCrown2Fill,
      }
    },
  },
})
