// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightQuiz from 'starlight-quiz';


const NETLIFY_PREVIEW_SITE = 'https://stics.netlify.app/';
const site = NETLIFY_PREVIEW_SITE;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'stics',
      favicon: './public/images/favicon.svg',
      expressiveCode: {
        // Primo tema = dark mode, secondo tema = light mode
        themes: ['github-dark', 'github-light'],
      },
      customCss: [
        './src/styles/custom.css', // Percorso del tuo file CSS globale
      ],
      plugins: [starlightQuiz(
        {
          quizDefaults: {
            confetti: false, // no confetti anywhere
          },
        }
      )],
      logo: {
        light: './src/assets/light-logo.svg',
        dark: './src/assets/dark-logo.svg',
        replacesTitle: true,
      },
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
          label: 'Appunti',
          collapsed: true,
          translations: {
            'en': 'Notes',
          },
          items: [
            {
              label: 'Programmazione Concorrente',
              collapsed: true,
              translations: {
                en: 'Concurrent Programming',
              },
              items: [{ autogenerate: { directory: 'appunti/programmazione-concorrente' } }],
            }
          ]
        },
        {
          label: 'Esercitazioni',
          collapsed: true,
          translations: {
            'en': 'Practical Labs',
          },
          items: [
            {
              label: 'Software Engineering',
              collapsed: true,
              translations: {
                en: 'Software Engineering',
              },
              items: [{ autogenerate: { directory: 'esercitazioni/software-engineering' } }]
            },
            {
              label: 'Sviluppo Front End',
              collapsed: true,
              translations: {
                en: 'Front End Development',
              },
              items: [{ autogenerate: { directory: 'esercitazioni/sviluppo-front-end' } }],
            },
          ]
        },
        {
          label: 'Progetti',
          collapsed: true,
          translations: {
            'en': 'Practical Projects',
          },
          items: [
            {
              label: 'Mappa Interattiva',
              collapsed: true,
              translations: {
                en: 'Interactive Map',
              },
              items: [{ autogenerate: { directory: 'progetti/mappa-interattiva' } }],
            }
          ]
        },
      ],
      // Registra il componente personalizzato per il footer
      components: {
        ThemeSelect: './src/components/CustomThemeSelect.astro',
        Footer: './src/components/CustomFooter.astro'
      },
      credits: true,

    }),
  ],
});
