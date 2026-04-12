import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Map Spanish paths to their English equivalents for hreflang
const localeMap = {
  '/': '/en/',
  '/soluciones/': '/en/solutions/',
  '/legal/privacidad/': '/en/legal/privacy/',
  '/legal/cookies/': '/en/legal/cookies/',
  '/legal/aviso-legal/': '/en/legal/legal-notice/',
};

// Build reverse map (en → es)
const reverseMap = Object.fromEntries(
  Object.entries(localeMap).map(([es, en]) => [en, es])
);

export default defineConfig({
  site: 'https://mxmn.net',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const path = item.url.replace('https://mxmn.net', '');

        if (localeMap[path]) {
          item.links = [
            { lang: 'es', url: `https://mxmn.net${path}` },
            { lang: 'en', url: `https://mxmn.net${localeMap[path]}` },
            { lang: 'x-default', url: `https://mxmn.net${path}` },
          ];
        } else if (reverseMap[path]) {
          item.links = [
            { lang: 'es', url: `https://mxmn.net${reverseMap[path]}` },
            { lang: 'en', url: `https://mxmn.net${path}` },
            { lang: 'x-default', url: `https://mxmn.net${reverseMap[path]}` },
          ];
        }

        // Homepage and solutions get higher priority
        if (path === '/' || path === '/en/') item.priority = 1.0;
        else if (path.includes('soluciones') || path.includes('solutions')) item.priority = 0.9;
        else if (path.includes('legal')) item.priority = 0.3;

        return item;
      },
    }),
  ],
});
