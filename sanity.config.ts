import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';

export default defineConfig({
  name: 'default',
  title: 'ConstX Studio',

  projectId: 'lup7v9pz',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
