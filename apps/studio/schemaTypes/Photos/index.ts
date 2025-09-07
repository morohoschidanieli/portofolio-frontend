import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photos',
  title: 'Photos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
        metadata: ['blurhash', 'image', 'exif', 'location'],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {name: 'country', title: 'Country', type: 'string', validation: (Rule) => Rule.required()},
        {name: 'county', title: 'County', type: 'string'},
        {name: 'street', title: 'Street', type: 'string', validation: (Rule) => Rule.required()},
      ],
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'link',
          title: 'Link',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'reference',
              to: [{type: 'icons'}],
            },
            {name: 'url', title: 'URL', type: 'string'},
          ],
        },
      ],
    }),
    defineField({
      name: 'device',
      title: 'Device',
      type: 'string',
    }),
  ],
})
