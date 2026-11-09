// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const NETLIFY_PREVIEW_SITE = 'https://stics.netlify.app/';
const site = NETLIFY_PREVIEW_SITE;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'stics',
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
      },
      favicon: '/images/stics.svg',
      customCss: [
        './src/styles/custom.css', // Percorso del tuo file CSS globale
      ],
      defaultLocale: 'root',
      locales: {
        // Italian docs in `src/content/docs/`
        root: {
          label: 'Italiano',
          lang: 'it',
        },
        // English docs in `src/content/docs/en/`
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/carloscocco/' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@stics-edu' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/CaScoEdu/stics' },
      ],
      sidebar: [
        {
          slug: 'iniziamo'
        },
        {
          label: 'Esercitazioni',
          translations: {
            'en': 'Practical Labs',
          },
          items: [
            {
              label: 'Software Engineering',
              translations: {
                en: 'Software Engineering',
              },
              items: [{ autogenerate: { directory: 'esercitazioni/software-engineering' } }]
            },
            {
              label: 'Sviluppo Front End',
              translations: {
                en: 'Front End Development',
              },
              items: [{ autogenerate: { directory: 'esercitazioni/sviluppo-front-end' } }],
            },
          ]
        },
        {
          label: 'Progetti',
          translations: {
            'en': 'Practical Projects',
          },
          items: [
            {
              label: 'Mappa Interattiva',
              translations: {
                en: 'Interactive Map',
              },
              items: [{ autogenerate: { directory: 'progetti/mappa-interattiva' } }],
            }
          ]
        },
        {
          label: 'Appunti',
          translations: {
            'en': 'Notes',
          },
          items: [{ autogenerate: { directory: 'appunti' } }]
        },
      ],
      // Registra il componente personalizzato per il footer
      components: {
        Footer: './src/components/CustomFooter.astro'
      },

    }),
  ],
});
