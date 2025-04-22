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
    baseURL: '/feature-user',
  },
  pages: true,
  components: true,
  ssr: false,
  router: {
    base: '/feature-user'
  }
}) 