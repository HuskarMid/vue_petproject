// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  app: {
    baseURL: '/vue-petproject/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/vue-petproject/favicon.ico' }
      ]
    },
    buildAssetsDir: '/vue-petproject/_nuxt/'
  },
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  dir: {
    pages: 'src/pages',
    layouts: 'src/layouts'
  },
  alias: {
    '@': '/src',
    '@shared': '/src/FSD/shared',
    '@pages': '/src/FSD/pages',
    '@widgets': '/src/FSD/widgets',
    '@features': '/src/FSD/features',
    '@entities': '/src/FSD/entities',
    '@app': '/src/FSD/app'
  },
  vite: {
    plugins: [
      tsconfigPaths()
    ],
    resolve: {
      alias: {
        '@': '/src',
        '@shared': '/src/FSD/shared',
        '@pages': '/src/FSD/pages',
        '@widgets': '/src/FSD/widgets',
        '@features': '/src/FSD/features',
        '@entities': '/src/FSD/entities',
        '@app': '/src/FSD/app'
      }
    }
  },
  typescript: {
    strict: false,
    typeCheck: false
  },
  build: {
    transpile: ['pinia']
  },
  ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    routeRules: {
      '/**': { static: true }
    }
  },
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false
  },
  hooks: {
    'pages:extend'(pages) {
      pages.forEach(page => {
        page.route = `/vue-petproject${page.route}`
      })
    }
  }
})
