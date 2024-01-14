import {defineArrayMember, defineType} from 'sanity'
import {ConditionalProperty, defineField, ValidationBuilder} from 'sanity'

export const portableText = () =>
  defineType({
    title: 'Block Content',
    name: 'portableText',
    type: 'array',
    of: [
      defineArrayMember({
        title: 'Block',
        name: 'standard',
        type: 'block',

        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'Quote', value: 'blockquote'},
        ],
        lists: [
          {title: 'Bullet', value: 'bullet'},
          {title: 'Numbered', value: 'number'},
        ],
        marks: {
          decorators: [
            {title: 'Fet', value: 'strong'},
            {title: 'Kursiv', value: 'em'},
            {title: 'Understreking', value: 'underline'},
          ],
        },
      }),
    ],
  })

interface DefinePortableTextFieldProps {
  name: string
  title: string
  validation?: ValidationBuilder<any>
  hidden?: ConditionalProperty
  description?: string
}

// Function for returning a portable text field.
// All options are enabled by default. Props disable specific options.
export const definePortableTextField = (props: DefinePortableTextFieldProps) => {
  const {name, title, validation, hidden, description} = props

  return defineField({
    name: name,
    title: title,
    type: 'array',
    of: [...portableText().of],
    validation: validation,
    hidden: hidden,
    description: description,
  })
}
