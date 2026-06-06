// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { loadEnv } from 'vite';

import cloudflare from '@astrojs/cloudflare';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET, SANITY_TOKEN } = loadEnv(
  process.env.NODE_ENV || 'development',
  process.cwd(),
  ''
);

const projectId = PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || 'dummy-project-id';
const dataset = PUBLIC_SANITY_DATASET || process.env.PUBLIC_SANITY_DATASET || 'production';
const token = SANITY_TOKEN || process.env.SANITY_TOKEN;

console.log('--- Astro Config Debug ---');
console.log('ProjectId:', projectId);
console.log('Dataset:', dataset);
console.log('Token Loaded:', !!token);
console.log('--------------------------');

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

  vite: {
    resolve: {
      alias: {
        lodash: 'lodash-es',
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react/compiler-runtime',
      ],
    },
  },

  adapter: cloudflare(),
  output: 'server',
});