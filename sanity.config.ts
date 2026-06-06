import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { schemaTypes } from './schema';

export default defineConfig({
  name: 'default',
  title: 'Renovex Portal',

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

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        origin: typeof window !== 'undefined' 
          ? window.location.origin 
          : 'http://localhost:4321',
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
