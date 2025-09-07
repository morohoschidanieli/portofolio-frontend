import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile image',
      type: 'image',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'summaryItem',
          title: 'Summary Item',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'reference',
              to: [{type: 'icons'}],
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactItem',
          title: 'Contact item',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'reference',
              to: [{type: 'icons'}],
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
