import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://hospitax.es',
  integrations: [
    tailwind(),
    sitemap(),
    mdx(),
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true
    })
  ],
  image: {
    service: {
      entrypoint: 'astro/assets'
    }
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  build: {
    inlineStylesheets: 'auto'
  }
});