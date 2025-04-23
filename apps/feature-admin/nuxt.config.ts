export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon'
  ],

  colorMode: {
    classSuffix: '',
  },

  app: {
    baseURL: '/feature-admin',
  },

  pages: true,
  components: true,
  ssr: false,

  router: {
    base: '/feature-admin'
  },

  compatibilityDate: '2025-04-23'
})