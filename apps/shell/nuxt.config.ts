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

  pages: true,

  app: {
    baseURL: '/',
    head: {
      title: 'Micro Dashboard',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  components: {
    dirs: [
      '~/components',
      '../feature-analytics/components',
      '../feature-user/components'
    ]
  },

  // Runtime config with environment variables
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_KEY: process.env.API_KEY,
      MINIO_URL: process.env.MINIO_URL || '',
    },
  },

  // Development server proxy configuration
  vite: {
    server: {
      proxy: {
        '/api': {
          target: process.env.BASE_URL || 'http://192.168.89.69',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
          secure: false, // Disable SSL certificate validation in development
          ws: true, // Enable WebSocket proxy
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.log('proxy error', err);
            });
            proxy.on('proxyReq', (proxyReq, req, _res) => {
              console.log('Sending Request to the Target:', req.method, req.url);
            });
            proxy.on('proxyRes', (proxyRes, req, _res) => {
              console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
            });
          },
        },
      },
    },
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

  // Development-specific settings
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },

  // Build-time optimizations
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

  compatibilityDate: '2025-04-22',

  // Add route rules for features
  routeRules: {
    '/feature-analytics': { ssr: false },
    '/feature-user': { ssr: false }
  },

  alias: {
    '@shell': '~/apps/shell'
  },
})