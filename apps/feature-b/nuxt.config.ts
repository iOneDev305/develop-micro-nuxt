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
    baseURL: '/feature-b',
  },
  pages: true,
  components: true,
  ssr: false,
  router: {
    base: '/feature-b'
  }
}) 