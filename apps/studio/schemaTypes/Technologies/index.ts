import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconURL',
      title: 'Icon URL',
      type: 'reference',
      to: [{type: 'icons'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      iconImage: 'iconURL.image',
    },
    prepare({title, iconImage}) {
      return {
        title,
        media: iconImage,
      }
    },
  },
})
