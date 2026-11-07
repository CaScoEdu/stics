// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'stics',
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
        },
      },
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/carloscocco/' },
        { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@stics-edu' },
      ],
      sidebar: [
        {
          label: 'Iniziamo',
          translations: {
            'en': 'Get Started'
          },
          items: [{ autogenerate: { directory: 'iniziamo' } }]
        },
        {
          label: 'Esercitazioni',
          translations: {
            'en': 'Practical Labs',
          },
          items: [{ autogenerate: { directory: 'esercitazioni' } }]
        },
        {
          label: 'Progetti Pratici',
          translations: {
            'en': 'Practical Projects',
          },
          items: [{ autogenerate: { directory: 'progetti' } }]
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
