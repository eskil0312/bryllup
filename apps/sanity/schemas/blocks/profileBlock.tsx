import {defineField} from 'sanity'

export const profileBlock = defineField({
  name: 'profileBlock',
  title: 'Profilbilde med tekst',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Navn', type: 'string'}),
    defineField({name: 'role', title: 'Rolle', type: 'string'}),

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
