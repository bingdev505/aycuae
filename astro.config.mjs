// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_TOKEN } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  ''
);

const projectId = PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id';
const dataset = PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production';
const token = SANITY_TOKEN || process.env.SANITY_TOKEN;

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId,
      dataset,
      studioBasePath: '/admin',
      useCdn: false,
      token,
      stega: {
        enabled: true,
        studioUrl: '/admin',
      },
    }),
  ],
});