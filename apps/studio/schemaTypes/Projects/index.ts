import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'previewImage',
      title: 'Preview image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'imageWithLabel',
          title: 'Image',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {name: 'label', title: 'Label', type: 'string'},
          ],
        },
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
            {name: 'label', title: 'Label', type: 'string'},
          ],
        },
      ],
      initialValue: [
        {
          _type: 'link',
          icon: {_type: 'reference', _ref: '0944134f-9833-45b5-8275-7a1af61a70f1'},
          label: 'GitHub',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'technologies'}]}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
