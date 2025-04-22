// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'nuxt-icon'
  ],

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  colorMode: {
    classSuffix: '',
  },

  extends: [
    '../feature-a',
    '../feature-b',
  ],

  app: {
    head: {
      title: 'Micro Dashboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Micro Frontend Dashboard' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  components: {
    dirs: [
      '~/components'
    ]
  },

  compatibilityDate: '2025-04-22',

  // Add route rules for features
  routeRules: {
    '/feature-a/**': { ssr: false },
    '/feature-b/**': { ssr: false }
  }
})