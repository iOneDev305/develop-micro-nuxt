// https://nuxt.com/docs/api/configuration/nuxt-config
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
  experimental: {
    asyncContext: true,
    asyncEntry: true,
    componentIslands: true,
    payloadExtraction: true,
    renderJsonPayloads: true,
    sharedPrerenderData: true,
    viewTransition: true,
    writeEarlyHints: true,
  },
  vite: {
    build: {
      target: 'esnext',
      minify: 'terser',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          format: 'esm',
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
  },
  nitro: {
    experimental: {
      asyncContext: true,
    },
  },
  app: {
    baseURL: '/feature-analytics',
  },
  pages: true,
  components: {
    global: true,
    dirs: ['~/components']
  }
})
