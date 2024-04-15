import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://arimakey.github.io/',
  trailingSlash: 'never',
  output: 'static',
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  }
});