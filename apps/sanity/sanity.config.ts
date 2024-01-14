import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskStructure} from './deskStrukture'

export default defineConfig({
  name: 'default',
  title: 'blog-sanity',

  projectId: '4je6s3y9',
  dataset: 'wedding',

  plugins: [deskTool({structure: deskStructure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
