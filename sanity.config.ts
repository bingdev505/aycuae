import { defineConfig, buildLegacyTheme } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';

// Premium Dark Slate & Green brand theme matching the website style
const customTheme = buildLegacyTheme({
  '--black': '#090d16',
  '--white': '#f8fafc',
  '--brand-primary': '#15803d', // Green brand color
  '--main-navigation-color': '#0f172a', // Dark Navy slate sidebar
  '--main-navigation-color--inverted': '#f8fafc',
  '--component-bg': '#131b2e', // Dark Card components
  '--focus-color': '#15803d',
});

export default defineConfig({
  name: 'default',
  title: 'ConstX Admin Panel',

  projectId: 'lup7v9pz',
  dataset: 'production',

  theme: customTheme,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
