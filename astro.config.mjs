import { defineConfig } from 'astro/config';

// Default configuration for local development
const config = {
  site: 'http://localhost:4321',
  base: '/',
};

// Update configuration for GitHub Pages deployment
if (process.env.DEPLOY_TARGET === 'gh-pages') {
  config.site = 'https://atssj.github.io';
  config.base = '/agency-website';
}

// https://astro.build/config
export default defineConfig(config);
