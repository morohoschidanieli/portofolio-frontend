import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from '@schemas'
import {homeStructure} from '@structures'

export default defineConfig({
  name: process.env.SANITY_STUDIO_NAME,
  title: process.env.SANITY_STUDIO_TITLE,

  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',

  plugins: [
    structureTool({
      structure: homeStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
