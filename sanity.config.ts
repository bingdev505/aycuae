import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';

export default defineConfig({
  name: 'default',
  title: 'ConstX Contractor Portal',

  projectId: 'lup7v9pz',
  dataset: 'production',

  // Restrict login options to keep the login screen clean and branded
  auth: {
    providers: [
      {
        name: 'google',
        title: 'Log in with Google',
        url: 'https://api.sanity.io/v1/auth/login/google',
      },
      {
        name: 'sanity',
        title: 'Log in with Email',
        url: 'https://api.sanity.io/v1/auth/login/sanity',
      }
    ]
  },

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
